import { buildRecommendationRequest } from "../server/agentMapper.js";
import { getCalendarEvents, getQuoteDetail } from "../server/db.js";
import { DEMO_QUOTE_ID } from "../server/seed.js";
import { RecommendationResponseSchema } from "../agent/src/schemas.js";

const agentUrl = (process.env.REONIC_AGENT_URL ?? "http://localhost:3141").replace(/\/+$/, "");

const request = buildRecommendationRequest(getQuoteDetail(DEMO_QUOTE_ID), getCalendarEvents(), {
  triggerType: "strategy_requested",
});

const response = await fetch(`${agentUrl}/api/recommend-next-action/stream`, {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify(request),
});

if (!response.ok) {
  const body = await response.text().catch(() => "");
  throw new Error(`Agent smoke failed with ${response.status}: ${body || response.statusText}`);
}

const { recommendation, traceCount } = await readStreamResult(response);

if (recommendation.generation?.mode !== "llm" && process.env.ALLOW_AGENT_FALLBACK !== "true") {
  throw new Error(
    `Agent returned ${recommendation.generation?.mode ?? "no generation metadata"} instead of llm. ${
      recommendation.generation?.fallbackReason ?? ""
    }`,
  );
}

console.log(
  JSON.stringify(
    {
      ok: true,
      taskType: recommendation.nextBestAction.taskType,
      title: recommendation.nextBestAction.title,
      generation: recommendation.generation,
      firstSlot: recommendation.nextBestAction.suggestedSlots[0],
      traceCount,
    },
    null,
    2,
  ),
);

async function readStreamResult(response: Response) {
  if (!response.body) {
    throw new Error("Agent stream returned no body");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let traceCount = 0;
  let recommendation: unknown;

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    buffer += decoder.decode(value, { stream: true });

    while (buffer.includes("\n\n")) {
      const splitAt = buffer.indexOf("\n\n");
      const frame = buffer.slice(0, splitAt);
      buffer = buffer.slice(splitAt + 2);
      const parsed = parseFrame(frame);
      if (!parsed) {
        continue;
      }
      if (parsed.event === "trace") {
        traceCount += 1;
      }
      if (parsed.event === "result") {
        recommendation = parsed.data;
      }
      if (parsed.event === "error") {
        const body = parsed.data as { error?: string };
        throw new Error(body.error ?? "Agent stream failed");
      }
    }
  }

  if (!recommendation) {
    throw new Error("Agent stream finished without a recommendation");
  }
  if (traceCount < 4) {
    throw new Error(`Expected streamed trace events, received ${traceCount}`);
  }

  return {
    recommendation: RecommendationResponseSchema.parse(recommendation),
    traceCount,
  };
}

function parseFrame(frame: string) {
  const event = frame
    .split("\n")
    .find((line) => line.startsWith("event: "))
    ?.slice(7)
    .trim();
  const data = frame
    .split("\n")
    .filter((line) => line.startsWith("data: "))
    .map((line) => line.slice(6))
    .join("\n");
  if (!event || !data) {
    return undefined;
  }
  return { event, data: JSON.parse(data) as unknown };
}
