import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterAll, beforeEach, describe, expect, it } from "vitest";

const tempDir = mkdtempSync(join(tmpdir(), "reonic-demo-"));
process.env.REONIC_DEMO_DB = join(tempDir, "test.sqlite");
process.env.REONIC_AGENT_MODE = "local";

const db = await import("../server/db.js");
const seed = await import("../server/seed.js");

describe("demo flow persistence", () => {
  beforeEach(() => {
    db.resetDatabase();
  });

  afterAll(() => {
    rmSync(tempDir, { recursive: true, force: true });
  });

  it("generates the initial Sabine strategy and phone-call action", async () => {
    const detail = await db.generateStrategy(seed.DEMO_QUOTE_ID);

    expect(detail.strategy?.generation?.mode).toBe("deterministic");
    expect(detail.quote.nextAction.kind).toBe("schedule_call");
    expect(detail.actions.some((action) => action.taskType === "Phone Call")).toBe(true);
  });

  it("schedules the call and creates a highlighted calendar event", async () => {
    const generated = await db.generateStrategy(seed.DEMO_QUOTE_ID);
    const actionId = generated.quote.nextAction.actionId;
    expect(actionId).toBeTruthy();

    const scheduled = db.scheduleAction(actionId!, {});
    const events = db.getCalendarEvents();

    expect(scheduled.quote.nextAction.kind).toBe("log_call");
    expect(events.some((event) => event.actionId === actionId && event.title.includes("Call"))).toBe(true);
  });

  it("uses the call debrief to recommend an in-person visit", async () => {
    const generated = await db.generateStrategy(seed.DEMO_QUOTE_ID);
    const scheduled = db.scheduleAction(generated.quote.nextAction.actionId!, {});
    const updated = await db.logAction(scheduled.quote.nextAction.actionId!, {
      notes:
        "Customer said the price may be okay, but they want someone to come look at the house, roof, and cable path before they trust the final quote.",
    });

    expect(updated.quote.nextAction.kind).toBe("schedule_visit");
    expect(updated.strategy?.steps.find((step) => step.taskType === "Meeting in person")?.status).toBe("active");
  });

  it("uses the visit debrief to recommend a final recap and can close the quote", async () => {
    const generated = await db.generateStrategy(seed.DEMO_QUOTE_ID);
    const callScheduled = db.scheduleAction(generated.quote.nextAction.actionId!, {});
    const visitRecommended = await db.logAction(callScheduled.quote.nextAction.actionId!, {
      notes:
        "Customer said the price may be okay, but they want someone to come look at the house, roof, and cable path before they trust the final quote.",
    });
    const visitScheduled = db.scheduleAction(visitRecommended.quote.nextAction.actionId!, {});
    const finalRecommended = await db.logAction(visitScheduled.quote.nextAction.actionId!, {
      notes:
        "Visit completed. Roof condition looked fine. This answers Sabine's main concern and she asked for final summary and signature path.",
    });
    const signed = db.completeAction(finalRecommended.quote.nextAction.actionId!);

    expect(finalRecommended.quote.nextAction.kind).toBe("send_final_recap");
    expect(signed.quote.columnId).toBe("completed");
    expect(signed.quote.statusLabel).toBe("Signed");
  });

  it("marks an existing strategy stale after master data edits", async () => {
    await db.generateStrategy(seed.DEMO_QUOTE_ID);
    db.updateCustomer(seed.DEMO_CUSTOMER_ID, { quoteValue: 39200 });

    const detail = db.getQuoteDetail(seed.DEMO_QUOTE_ID);
    expect(detail.quote.strategyStale).toBe(true);
    expect(detail.strategy?.stale).toBe(true);
  });
});
