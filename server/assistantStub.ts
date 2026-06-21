import { DEMO_CUSTOMER_ID, DEMO_QUOTE_ID } from "./seed.js";
import type { ActionRecord, QuoteRecord, StrategyRecord, StrategyStep } from "./types.js";

export function createInitialStrategy(params: {
  quote: QuoteRecord;
  now: string;
}): { strategy: StrategyRecord; action: ActionRecord; quotePatch: Partial<QuoteRecord> } {
  const firstName = firstNameFor(params.quote.customerName);
  const strategyId = strategyIdFor(params.quote);
  const actionId = actionIdFor(params.quote, "call");
  const steps = baseSteps(firstName);
  const strategy: StrategyRecord = {
    id: strategyId,
    quoteId: params.quote.id,
    generatedAt: params.now,
    stale: false,
    headline:
      `Win ${firstName} by leading with the strongest buyer motive, then dissolving the cost objection before competitors reframe the deal.`,
    summary:
      `${firstName} has enough information to engage, but the deal still needs a human trust-builder. The play starts with a short call, confirms the real blocker, and only then moves to a site validation or final recap if the notes support it.`,
    currentActionId: actionId,
    steps,
  };

  const action: ActionRecord = {
    id: actionId,
    quoteId: params.quote.id,
    customerId: params.quote.customerId,
    strategyId: strategy.id,
    stepId: "step_call",
    taskType: "Phone Call",
    title: `Call ${firstName} within 24 hours`,
    status: "recommended",
    logPromptTitle: "Log call outcome",
    defaultLogText:
      "Customer said the price may be okay, but they want someone to come look at the house, roof, and cable path before they trust the final quote.",
  };

  return {
    strategy,
    action,
    quotePatch: {
      strategyId: strategy.id,
      strategyStale: false,
      nextAction: {
        kind: "schedule_call",
        label: "Schedule call",
        actionId: action.id,
        tone: "yellow",
      },
    },
  };
}

export function createVisitRecommendation(params: {
  quote: QuoteRecord;
  strategy: StrategyRecord;
  now: string;
}): { strategy: StrategyRecord; action: ActionRecord; quotePatch: Partial<QuoteRecord> } {
  const firstName = firstNameFor(params.quote.customerName);
  const steps = params.strategy.steps.map((step) => {
    if (step.id === "step_call") {
      return { ...step, status: "completed" as const };
    }
    if (step.id === "step_visit") {
      return { ...step, status: "active" as const };
    }
    return step;
  });

  const action: ActionRecord = {
    id: actionIdFor(params.quote, "visit"),
    quoteId: params.quote.id,
    customerId: params.quote.customerId,
    strategyId: params.strategy.id,
    stepId: "step_visit",
    taskType: "Meeting in person",
    title: "Inspect roof, meter cabinet, and cable path",
    status: "recommended",
    logPromptTitle: "Log site visit outcome",
    defaultLogText:
      `Visit completed. Roof condition looked fine for the proposed mounting method. Meter cabinet has room for the inverter. This answers ${firstName}'s main concern and they asked for a final written summary and signature path.`,
  };

  return {
    strategy: {
      ...params.strategy,
      generatedAt: params.now,
      stale: false,
      currentActionId: action.id,
      headline:
        "Move from trust-building to physical validation: remove the last house-specific risk before asking for signature.",
      summary:
        `The call surfaced a concrete blocker. ${firstName} is not asking for another generic explanation; they want the quote validated against the roof and cable path. A clear visit agenda is the fastest credible way to unlock the final recap.`,
      steps,
    },
    action,
    quotePatch: {
      strategyStale: false,
      nextAction: {
        kind: "schedule_visit",
        label: "Schedule visit",
        actionId: action.id,
        tone: "yellow",
      },
    },
  };
}

export function createFinalRecapRecommendation(params: {
  quote: QuoteRecord;
  strategy: StrategyRecord;
  now: string;
}): { strategy: StrategyRecord; action: ActionRecord; quotePatch: Partial<QuoteRecord> } {
  const firstName = firstNameFor(params.quote.customerName);
  const steps = params.strategy.steps.map((step) => {
    if (step.id === "step_call" || step.id === "step_visit") {
      return { ...step, status: "completed" as const };
    }
    if (step.id === "step_final") {
      return { ...step, status: "active" as const };
    }
    return step;
  });

  const action: ActionRecord = {
    id: actionIdFor(params.quote, "final"),
    quoteId: params.quote.id,
    customerId: params.quote.customerId,
    strategyId: params.strategy.id,
    stepId: "step_final",
    taskType: "Send Email",
    title: "Send final recap and signature path",
    status: "recommended",
    logPromptTitle: "Log final recap outcome",
    defaultLogText:
      `Final recap sent. ${firstName} confirmed the system scope and signed the contract.`,
  };

  return {
    strategy: {
      ...params.strategy,
      generatedAt: params.now,
      stale: false,
      currentActionId: action.id,
      headline:
        "Close cleanly: summarize what was validated on site and make the signature path effortless.",
      summary:
        "The physical concern is resolved. Adding another persuasion step would create friction. The best move is a concise recap that connects climate impact, monthly cost clarity, and the confirmed site fit.",
      steps,
    },
    action,
    quotePatch: {
      strategyStale: false,
      nextAction: {
        kind: "send_final_recap",
        label: "Send final recap",
        actionId: action.id,
        tone: "green",
      },
    },
  };
}

export function shouldRecommendVisit(notes: string) {
  const text = notes.toLowerCase();
  return ["look at the house", "site visit", "roof", "cable path", "inspect", "vor ort"].some(
    (term) => text.includes(term),
  );
}

export function shouldRecommendFinalRecap(notes: string) {
  const text = notes.toLowerCase();
  return ["answers", "resolved", "final summary", "signature", "sign", "looked fine"].some(
    (term) => text.includes(term),
  );
}

function baseSteps(firstName: string): StrategyStep[] {
  return [
    {
      id: "step_call",
      number: 1,
      phase: "Build trust",
      title: `Call ${firstName} within 24 hours`,
      subtitle: "Confirm the real blocker before sending another generic follow-up.",
      taskType: "Phone Call",
      status: "active",
      icon: "phone",
      guideTitle: "Suggested call script",
      bullets: [
        `Thank ${firstName} for the time reviewing the quote and open warmly.`,
        "Tie the system back to the motive that matters most in the buyer profile.",
        "Offer to walk through payment options and propose two times.",
      ],
      whyChips: [
        { label: "Asked about CO2 reduction on the call", source: "Call notes", icon: "sparkles" },
        { label: "Requested competitor comparison", source: "Competitor intel", icon: "activity" },
        { label: "Quote is 4 days old", source: "Deal history", icon: "clock" },
      ],
      suggestedTime: "Tomorrow, Mon Jun 22",
      suggestedDateTime: "2026-06-22T10:30:00.000Z",
      primaryCta: "Call now",
      secondaryCta: "Schedule call",
    },
    {
      id: "step_visit",
      number: 2,
      phase: "Validate the home",
      title: "Inspect roof, meter cabinet, and cable path",
      subtitle: "Resolve the house-specific trust blocker in person.",
      taskType: "Meeting in person",
      status: "upcoming",
      icon: "mapPin",
      guideTitle: "Visit agenda",
      bullets: [
        "Confirm roof condition, access, meter cabinet, inverter position, and cable path.",
        "Explain what the inspection validates and what will still be checked back at the office.",
        "Leave with one next commitment: final recap, revised quote, or explicit pause.",
      ],
      whyChips: [
        { label: "Customer requested house validation", source: "Call debrief", icon: "home" },
        { label: "Physical blocker cannot be resolved remotely", source: "Decision policy", icon: "shield" },
      ],
      suggestedTime: "Tue Jun 23",
      suggestedDateTime: "2026-06-23T11:00:00.000Z",
      primaryCta: "Schedule visit",
      secondaryCta: "Open calendar",
    },
    {
      id: "step_final",
      number: 3,
      phase: "Close cleanly",
      title: "Send final recap and signature path",
      subtitle: "Use the visit result to make the decision easy to approve.",
      taskType: "Send Email",
      status: "upcoming",
      icon: "mail",
      guideTitle: "Email structure",
      bullets: [
        "Summarize what was checked on site and what changed.",
        "Connect climate impact with the now-validated quote scope.",
        "Give one clear signature path and one easy contact option.",
      ],
      whyChips: [
        { label: "Site concern resolved", source: "Visit notes", icon: "check" },
        { label: "Customer requested final summary", source: "Visit debrief", icon: "fileText" },
      ],
      suggestedTime: "Today",
      suggestedDateTime: "2026-06-23T15:30:00.000Z",
      primaryCta: "Send recap",
      secondaryCta: "Draft email",
    },
  ];
}

export function isSabineQuote(quoteId: string, customerId?: string) {
  return quoteId === DEMO_QUOTE_ID || customerId === DEMO_CUSTOMER_ID;
}

function strategyIdFor(quote: QuoteRecord) {
  return isSabineQuote(quote.id, quote.customerId) ? "strategy_sabine" : `strategy_${slugFromQuote(quote)}`;
}

function actionIdFor(quote: QuoteRecord, suffix: "call" | "visit" | "final") {
  return isSabineQuote(quote.id, quote.customerId)
    ? `action_sabine_${suffix}`
    : `action_${slugFromQuote(quote)}_${suffix}`;
}

function slugFromQuote(quote: QuoteRecord) {
  return quote.id.replace(/^quote_/, "").replace(/[^a-z0-9]+/gi, "_").toLowerCase();
}

function firstNameFor(name: string) {
  const normalized = name.includes(",") ? name.split(",").at(1)?.trim() : name;
  return normalized?.split(/\s+/)[0] ?? name;
}
