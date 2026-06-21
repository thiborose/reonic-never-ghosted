import { buildRecommendationRequest } from "../server/agentMapper.js";
import { getCalendarEvents, getQuoteDetail } from "../server/db.js";
import { DEMO_QUOTE_ID } from "../server/seed.js";
import { RecommendationResponseSchema } from "../agent/src/schemas.js";

const agentUrl = (process.env.REONIC_AGENT_URL ?? "http://localhost:3141").replace(/\/+$/, "");

const request = buildRecommendationRequest(getQuoteDetail(DEMO_QUOTE_ID), getCalendarEvents(), {
  triggerType: "strategy_requested",
});

const response = await fetch(`${agentUrl}/api/recommend-next-action`, {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify(request),
});

if (!response.ok) {
  const body = await response.text().catch(() => "");
  throw new Error(`Agent smoke failed with ${response.status}: ${body || response.statusText}`);
}

const recommendation = RecommendationResponseSchema.parse(await response.json());

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
    },
    null,
    2,
  ),
);
