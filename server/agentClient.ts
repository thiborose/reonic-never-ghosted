import { recommendNextAction } from "../agent/src/recommendation.js";
import {
  RecommendRequestSchema,
  RecommendationResponseSchema,
  type RecommendRequest,
  type RecommendationResponse,
} from "../agent/src/schemas.js";
import type { AgentTraceEvent } from "./types.js";

const DEFAULT_AGENT_URL = "http://localhost:3141";
const DEFAULT_TIMEOUT_MS = 90_000;

export async function requestRecommendation(input: RecommendRequest): Promise<RecommendationResponse> {
  const parsedInput = RecommendRequestSchema.parse(input);
  const mode = process.env.REONIC_AGENT_MODE ?? "http";

  if (mode === "local" || mode === "deterministic") {
    return deterministicRecommendation(parsedInput, "deterministic");
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(
      () => controller.abort(),
      Number(process.env.REONIC_AGENT_TIMEOUT_MS ?? DEFAULT_TIMEOUT_MS),
    );

    try {
      const response = await fetch(`${agentUrl()}/api/recommend-next-action`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(parsedInput),
        signal: controller.signal,
      });

      if (!response.ok) {
        const body = (await response.text().catch(() => "")) || response.statusText;
        throw new Error(`Agent returned ${response.status}: ${body}`);
      }

      return RecommendationResponseSchema.parse(await response.json());
    } finally {
      clearTimeout(timeout);
    }
  } catch (error) {
    if (process.env.REONIC_AGENT_STRICT === "true") {
      throw error;
    }

    console.warn(
      `VoltAgent recommendation failed; using local deterministic fallback. ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
    return deterministicRecommendation(
      parsedInput,
      "deterministic_fallback",
      error instanceof Error ? error.message : String(error),
    );
  }
}

export async function requestRecommendationStream(
  input: RecommendRequest,
  onTrace: (event: AgentTraceEvent) => void,
): Promise<RecommendationResponse> {
  const parsedInput = RecommendRequestSchema.parse(input);
  const mode = process.env.REONIC_AGENT_MODE ?? "http";

  if (mode === "local" || mode === "deterministic") {
    return deterministicRecommendationWithTrace(parsedInput, "deterministic", onTrace);
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(
      () => controller.abort(),
      Number(process.env.REONIC_AGENT_TIMEOUT_MS ?? DEFAULT_TIMEOUT_MS),
    );

    try {
      const response = await fetch(`${agentUrl()}/api/recommend-next-action/stream`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(parsedInput),
        signal: controller.signal,
      });

      if (!response.ok) {
        const body = (await response.text().catch(() => "")) || response.statusText;
        throw new Error(`Agent returned ${response.status}: ${body}`);
      }

      const result = await parseRecommendationStream(response, onTrace);
      return RecommendationResponseSchema.parse(result);
    } finally {
      clearTimeout(timeout);
    }
  } catch (error) {
    if (process.env.REONIC_AGENT_STRICT === "true") {
      throw error;
    }

    const reason = error instanceof Error ? error.message : String(error);
    onTrace(trace("web", "fallback", "VoltAgent unavailable, using local engine", reason, "running"));
    return deterministicRecommendationWithTrace(parsedInput, "deterministic_fallback", onTrace, reason);
  }
}

function agentUrl() {
  return (process.env.REONIC_AGENT_URL ?? DEFAULT_AGENT_URL).replace(/\/+$/, "");
}

function deterministicRecommendation(
  input: RecommendRequest,
  mode: "deterministic" | "deterministic_fallback",
  fallbackReason?: string,
) {
  const startedAt = Date.now();
  const recommendation = recommendNextAction(input);
  return RecommendationResponseSchema.parse({
    ...recommendation,
    generation: {
      mode,
      model: "local-knowledgebase-engine",
      latencyMs: Date.now() - startedAt,
      ...(fallbackReason ? { fallbackReason } : {}),
    },
  });
}

function deterministicRecommendationWithTrace(
  input: RecommendRequest,
  mode: "deterministic" | "deterministic_fallback",
  onTrace: (event: AgentTraceEvent) => void,
  fallbackReason?: string,
) {
  onTrace(trace("web", "validate-context", "Reading CRM context", input.customer.name, "success"));
  onTrace(trace("web", "load-knowledgebase", "Loading local knowledgebase", "Deterministic test mode", "success"));
  onTrace(trace("web", "diagnose-and-score", "Scoring next actions", input.trigger.type, "running"));
  const result = deterministicRecommendation(input, mode, fallbackReason);
  onTrace(
    trace(
      "web",
      "diagnose-and-score",
      "Next action selected",
      result.nextBestAction.taskType,
      "success",
    ),
  );
  return result;
}

async function parseRecommendationStream(
  response: Response,
  onTrace: (event: AgentTraceEvent) => void,
) {
  if (!response.body) {
    throw new Error("Agent stream returned no response body");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let result: unknown;

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
      const parsed = parseSseFrame(frame);
      if (!parsed) {
        continue;
      }
      if (parsed.event === "trace") {
        onTrace(normalizeTrace(parsed.data));
      } else if (parsed.event === "result") {
        result = parsed.data;
      } else if (parsed.event === "error") {
        const errorBody = parsed.data as { error?: string };
        throw new Error(errorBody.error ?? "Agent stream failed");
      }
    }
  }

  if (!result) {
    throw new Error("Agent stream ended without a result");
  }
  return result;
}

function parseSseFrame(frame: string) {
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

function normalizeTrace(data: unknown): AgentTraceEvent {
  const item = data as Partial<AgentTraceEvent>;
  return {
    id: item.id ?? `trace_${Date.now()}`,
    source: item.source ?? "voltagent",
    phase: item.phase ?? "agent",
    title: item.title ?? "Agent progress",
    ...(item.detail ? { detail: item.detail } : {}),
    status: item.status ?? "running",
    timestamp: item.timestamp ?? new Date().toISOString(),
    ...(item.durationMs !== undefined ? { durationMs: item.durationMs } : {}),
  };
}

function trace(
  source: AgentTraceEvent["source"],
  phase: string,
  title: string,
  detail: string | undefined,
  status: AgentTraceEvent["status"],
): AgentTraceEvent {
  return {
    id: `trace_${Date.now()}_${Math.random().toString(36).slice(2)}`,
    source,
    phase,
    title,
    ...(detail ? { detail } : {}),
    status,
    timestamp: new Date().toISOString(),
  };
}
