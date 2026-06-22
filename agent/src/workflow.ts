import { createWorkflowChain } from "@voltagent/core";

import { loadKnowledgeBase, summarizeKnowledgeBase } from "./knowledgebase.js";
import { recommendNextAction } from "./recommendation.js";
import { RecommendRequestSchema, RecommendationResponseSchema, type RecommendRequest } from "./schemas.js";
import { synthesizeRecommendation } from "./synthesis.js";

export const recommendNextActionWorkflow = createWorkflowChain({
  id: "recommend-next-action",
  name: "Recommend Next Best Action",
  purpose:
    "Diagnose buyer state from quote/customer/history context, retrieve the relevant local knowledgebase, score task types, and return an explainable next-best sales action.",
  input: RecommendRequestSchema,
  result: RecommendationResponseSchema,
})
  .andThen({
    id: "validate-context",
    name: "Validate CRM context",
    purpose: "Confirm the request contains the customer, quote, history, consent, and installer calendar context.",
    execute: async ({ data, writer }) => {
      writer.write({
        type: "agent-progress",
        metadata: {
          phase: "validate-context",
          title: "Validating CRM context",
          detail: `${data.customer.name} · ${data.quote.id}`,
        },
      });
      return data;
    },
  })
  .andThen({
    id: "load-knowledgebase",
    name: "Load knowledgebase",
    purpose: "Read the clean local customer-review, objection, buyer-signal, and task-playbook sources.",
    execute: async ({ data, writer }) => {
      const summary = summarizeKnowledgeBase(loadKnowledgeBase());
      writer.write({
        type: "agent-progress",
        metadata: {
          phase: "load-knowledgebase",
          title: "Loading knowledgebase",
          detail: `${summary.customerReviewObservationCount} review observations · ${summary.taskPlaybookCount} task playbooks`,
        },
      });
      return data;
    },
  })
  .andThen({
    id: "diagnose-and-score",
    name: "Diagnose and score actions",
    purpose: "Run the knowledgebase-backed scoring and calendar selection engine.",
    outputSchema: RecommendationResponseSchema,
    execute: async ({ data, writer }) => {
      writer.write({
        type: "agent-progress",
        metadata: {
          phase: "diagnose-and-score",
          title: "Diagnosing buyer state",
          detail: data.trigger.installerInstruction
            ? "Using installer revision as a high-priority signal"
            : "Scoring buyer profile, objections, and channel fit",
        },
      });
      const recommendation = recommendNextAction(data);
      writer.write({
        type: "agent-progress",
        metadata: {
          phase: "select-action",
          title: "Selected next best action",
          detail: recommendation.nextBestAction.taskType,
        },
      });
      return recommendation;
    },
  })
  .andThen({
    id: "synthesize-strategy",
    name: "Synthesize demo-ready strategy",
    purpose: "Call the configured LLM to turn the deterministic recommendation into precise installer-facing copy.",
    outputSchema: RecommendationResponseSchema,
    execute: async ({ data, getStepData, writer }) => {
      // Original request is the input to the first step; the recommendation is this step's input.
      const request = getStepData("validate-context")?.input as RecommendRequest;
      writer.write({
        type: "agent-progress",
        metadata: {
          phase: "synthesize-strategy",
          title: "Writing demo-ready strategy",
          detail: "Calling the configured LLM for final wording",
        },
      });
      const synthesized = await synthesizeRecommendation({ request, recommendation: data });
      writer.write({
        type: "agent-progress",
        metadata: {
          phase: "synthesize-strategy",
          title: "Strategy wording complete",
          detail: synthesized.generation?.mode === "llm" ? synthesized.generation.model : "deterministic fallback",
        },
      });
      return synthesized;
    },
  });
