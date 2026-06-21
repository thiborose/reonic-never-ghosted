import { recommendNextAction } from "../agent/src/recommendation.js";
import {
  RecommendRequestSchema,
  RecommendationResponseSchema,
  type RecommendRequest,
  type RecommendationResponse,
} from "../agent/src/schemas.js";

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
