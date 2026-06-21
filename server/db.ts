import { DatabaseSync } from "node:sqlite";
import { existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";

import {
  createFinalRecapRecommendation,
  createInitialStrategy,
  createVisitRecommendation,
  shouldRecommendFinalRecap,
  shouldRecommendVisit,
} from "./assistantStub.js";
import {
  actionSeeds,
  bootstrapSeed,
  calendarSeeds,
  customerSeeds,
  DEMO_NOW,
  noteSeeds,
  quoteSeeds,
  strategySeeds,
} from "./seed.js";
import type {
  ActionRecord,
  AddNoteInput,
  BootstrapPayload,
  CalendarEventRecord,
  CustomerRecord,
  LogActionInput,
  NoteRecord,
  QuoteDetailPayload,
  QuoteRecord,
  ScheduleActionInput,
  StrategyRecord,
  UpdateCustomerInput,
} from "./types.js";

const DB_PATH = process.env.REONIC_DEMO_DB ?? join(process.cwd(), ".data", "reonic-demo.sqlite");

let db: DatabaseSync | undefined;

export function getDb() {
  if (!db) {
    mkdirSync(dirname(DB_PATH), { recursive: true });
    db = new DatabaseSync(DB_PATH);
    db.exec("PRAGMA journal_mode = WAL");
    createSchema(db);
    seedIfNeeded(db);
  }

  return db;
}

export function resetDatabase() {
  if (db) {
    db.close();
    db = undefined;
  }
  for (const path of [DB_PATH, `${DB_PATH}-wal`, `${DB_PATH}-shm`]) {
    if (existsSync(path)) {
      rmSync(path);
    }
  }
  getDb();
}

export function getBootstrap(): BootstrapPayload {
  return bootstrapSeed;
}

export function listQuotes(): QuoteRecord[] {
  const rows = getDb()
    .prepare("select data from quotes order by sort_order asc")
    .all() as unknown as JsonRow[];
  return rows.map((row) => parseJson<QuoteRecord>(row.data));
}

export function getQuoteDetail(quoteId: string): QuoteDetailPayload {
  const quote = getQuote(quoteId);
  const customer = getCustomer(quote.customerId);
  const strategy = getStrategyByQuote(quote.id);
  const actions = listActionsForQuote(quote.id);
  const notes = listNotesForCustomer(customer.id);
  return {
    quote,
    customer,
    ...(strategy ? { strategy } : {}),
    actions,
    notes,
  };
}

export function getCustomer(customerId: string): CustomerRecord {
  const row = getDb()
    .prepare("select data from customers where id = ?")
    .get(customerId) as JsonRow | undefined;
  if (!row) {
    throw notFound(`Customer ${customerId} not found`);
  }
  return parseJson<CustomerRecord>(row.data);
}

export function updateCustomer(customerId: string, input: UpdateCustomerInput): CustomerRecord {
  const customer = getCustomer(customerId);
  const updated: CustomerRecord = {
    ...customer,
    ...definedOnly(input),
    updatedAt: new Date().toISOString(),
  };
  putJson("customers", updated.id, updated);

  const quote = listQuotes().find((item) => item.customerId === customerId);
  if (quote) {
    updateQuote(quote.id, {
      customerName: updated.name,
      title: updated.name,
      contactLine: `${updated.name} · ${updated.email}`,
      address: updated.address,
      value: updated.quoteValue,
      productSummary: updated.system,
      strategyStale: Boolean(quote.strategyId),
    });
    const strategy = getStrategyByQuote(quote.id);
    if (strategy) {
      putJson("strategies", strategy.id, { ...strategy, stale: true });
    }
  }

  return updated;
}

export function getCalendarEvents(): CalendarEventRecord[] {
  const rows = getDb()
    .prepare("select data from calendar_events order by json_extract(data, '$.start') asc")
    .all() as unknown as JsonRow[];
  return rows.map((row) => parseJson<CalendarEventRecord>(row.data));
}

export function generateStrategy(quoteId: string): QuoteDetailPayload {
  const quote = getQuote(quoteId);
  const result = createInitialStrategy({ quote, now: new Date().toISOString() });
  putJson("strategies", result.strategy.id, result.strategy);
  putJson("actions", result.action.id, result.action);
  updateQuote(quote.id, result.quotePatch);

  return getQuoteDetail(quote.id);
}

export function scheduleAction(actionId: string, input: ScheduleActionInput): QuoteDetailPayload {
  const action = getAction(actionId);
  const quote = getQuote(action.quoteId);
  const customer = getCustomer(action.customerId);
  const customerFirstName = customer.name.split(/\s+/)[0] ?? customer.name;
  const start = input.slotStart ?? defaultSlotFor(action.taskType);
  const end = addMinutes(start, action.taskType === "Meeting in person" ? 60 : 20);
  const eventId = `cal_${action.id}`;

  const event: CalendarEventRecord = {
    id: eventId,
    title:
      action.taskType === "Meeting in person"
        ? `Visit ${customerFirstName}`
        : action.taskType === "Phone Call"
          ? `Call ${customerFirstName}`
          : action.title,
    start,
    end,
    row: "theo",
    color: action.taskType === "Meeting in person" ? "green" : "blue",
    quoteId: quote.id,
    actionId: action.id,
    ...(action.taskType === "Meeting in person" ? { location: customer.address } : {}),
  };

  putJson("calendar_events", event.id, event);
  putJson("actions", action.id, {
    ...action,
    status: "scheduled",
    scheduledFor: start,
    calendarEventId: event.id,
  });

  if (action.taskType === "Phone Call") {
    updateQuote(quote.id, {
      nextAction: {
        kind: "log_call",
        label: "Log call",
        actionId: action.id,
        tone: "yellow",
      },
      lastActionAt: new Date().toISOString(),
      daysSinceLastAction: 0,
    });
  } else if (action.taskType === "Meeting in person") {
    updateQuote(quote.id, {
      nextAction: {
        kind: "log_visit",
        label: "Log visit",
        actionId: action.id,
        tone: "yellow",
      },
      lastActionAt: new Date().toISOString(),
      daysSinceLastAction: 0,
    });
  }

  return getQuoteDetail(quote.id);
}

export function logAction(actionId: string, input: LogActionInput): QuoteDetailPayload {
  const action = getAction(actionId);
  const quote = getQuote(action.quoteId);
  const completedAt = new Date().toISOString();

  putJson("actions", action.id, {
    ...action,
    status: "completed",
    completedAt,
  });

  const note = createDebriefNote(action, input.notes, completedAt);
  putJson("notes", note.id, note);

  const strategy = getStrategyByQuote(quote.id);
  if (strategy && action.taskType === "Phone Call" && shouldRecommendVisit(input.notes)) {
    const result = createVisitRecommendation({ quote, strategy, now: completedAt });
    putJson("strategies", result.strategy.id, result.strategy);
    putJson("actions", result.action.id, result.action);
    updateQuote(quote.id, { ...result.quotePatch, lastActionAt: completedAt, daysSinceLastAction: 0 });
  } else if (strategy && action.taskType === "Meeting in person" && shouldRecommendFinalRecap(input.notes)) {
    const result = createFinalRecapRecommendation({ quote, strategy, now: completedAt });
    putJson("strategies", result.strategy.id, result.strategy);
    putJson("actions", result.action.id, result.action);
    updateQuote(quote.id, { ...result.quotePatch, lastActionAt: completedAt, daysSinceLastAction: 0 });
  }

  return getQuoteDetail(quote.id);
}

export function completeAction(actionId: string): QuoteDetailPayload {
  const action = getAction(actionId);
  const quote = getQuote(action.quoteId);
  const completedAt = new Date().toISOString();

  putJson("actions", action.id, {
    ...action,
    status: "sent",
    completedAt,
  });

  if (action.taskType === "Send Email") {
    updateQuote(quote.id, {
      columnId: "completed",
      statusLabel: "Signed",
      statusTone: "blue",
      nextAction: {
        kind: "none",
        label: "",
        tone: "gray",
      },
      lastActionAt: completedAt,
      daysSinceLastAction: 0,
    });

    const strategy = getStrategyByQuote(quote.id);
    if (strategy) {
      putJson("strategies", strategy.id, {
        ...strategy,
        currentActionId: undefined,
        steps: strategy.steps.map((step) => ({ ...step, status: "completed" })),
      });
    }
  }

  return getQuoteDetail(quote.id);
}

export function addNote(customerId: string, input: AddNoteInput): NoteRecord {
  getCustomer(customerId);
  const note: NoteRecord = {
    id: `note_${Date.now()}`,
    customerId,
    type: input.type,
    title: input.title,
    body: input.body,
    authorName: "Theo Tiral · Installer",
    authorAvatar: "TT",
    createdAt: new Date().toISOString(),
    ...(input.type === "audio" ? { duration: "0:42", transcriptStatus: "Transcribed" } : {}),
  };
  putJson("notes", note.id, note);
  return note;
}

export function getAction(actionId: string): ActionRecord {
  const row = getDb()
    .prepare("select data from actions where id = ?")
    .get(actionId) as JsonRow | undefined;
  if (!row) {
    throw notFound(`Action ${actionId} not found`);
  }
  return parseJson<ActionRecord>(row.data);
}

function getQuote(quoteId: string): QuoteRecord {
  const row = getDb()
    .prepare("select data from quotes where id = ?")
    .get(quoteId) as JsonRow | undefined;
  if (!row) {
    throw notFound(`Quote ${quoteId} not found`);
  }
  return parseJson<QuoteRecord>(row.data);
}

function updateQuote(quoteId: string, patch: Partial<QuoteRecord>) {
  const quote = getQuote(quoteId);
  putJson("quotes", quote.id, { ...quote, ...patch });
}

function getStrategyByQuote(quoteId: string) {
  const row = getDb()
    .prepare("select data from strategies where quote_id = ? order by updated_at desc limit 1")
    .get(quoteId) as JsonRow | undefined;
  return row ? parseJson<StrategyRecord>(row.data) : undefined;
}

function listActionsForQuote(quoteId: string) {
  const rows = getDb()
    .prepare("select data from actions where quote_id = ? order by created_at asc")
    .all(quoteId) as unknown as JsonRow[];
  return rows.map((row) => parseJson<ActionRecord>(row.data));
}

function listNotesForCustomer(customerId: string) {
  const rows = getDb()
    .prepare("select data from notes where customer_id = ? order by json_extract(data, '$.createdAt') desc")
    .all(customerId) as unknown as JsonRow[];
  return rows.map((row) => parseJson<NoteRecord>(row.data));
}

function createSchema(database: DatabaseSync) {
  database.exec(`
    create table if not exists meta (
      key text primary key,
      value text not null
    );

    create table if not exists customers (
      id text primary key,
      data text not null,
      updated_at text not null
    );

    create table if not exists quotes (
      id text primary key,
      customer_id text not null,
      column_id text not null,
      sort_order integer not null,
      data text not null,
      updated_at text not null
    );

    create table if not exists strategies (
      id text primary key,
      quote_id text not null,
      data text not null,
      updated_at text not null
    );

    create table if not exists actions (
      id text primary key,
      quote_id text not null,
      customer_id text not null,
      data text not null,
      created_at text not null,
      updated_at text not null
    );

    create table if not exists calendar_events (
      id text primary key,
      data text not null,
      updated_at text not null
    );

    create table if not exists notes (
      id text primary key,
      customer_id text not null,
      data text not null,
      updated_at text not null
    );
  `);
}

function seedIfNeeded(database: DatabaseSync) {
  const row = database.prepare("select value from meta where key = 'seeded'").get() as
    | { value: string }
    | undefined;
  if (row?.value === "v2") {
    return;
  }

  database.exec(`
    delete from customers;
    delete from quotes;
    delete from strategies;
    delete from actions;
    delete from calendar_events;
    delete from notes;
    delete from meta;
  `);

  customerSeeds.forEach((customer) => putJson("customers", customer.id, customer));
  quoteSeeds.forEach((quote, index) => putQuoteSeed(quote, index));
  strategySeeds.forEach((strategy) => putJson("strategies", strategy.id, strategy));
  actionSeeds.forEach((action) => putJson("actions", action.id, action));
  calendarSeeds.forEach((event) => putJson("calendar_events", event.id, event));
  noteSeeds.forEach((note) => putJson("notes", note.id, note));
  database.prepare("insert into meta (key, value) values ('seeded', 'v2')").run();
}

function putQuoteSeed(quote: QuoteRecord, sortOrder: number) {
  getDb()
    .prepare(
      `insert or replace into quotes (id, customer_id, column_id, sort_order, data, updated_at)
       values (?, ?, ?, ?, ?, ?)`,
    )
    .run(quote.id, quote.customerId, quote.columnId, sortOrder, stringify(quote), new Date().toISOString());
}

function putJson(table: string, id: string, value: unknown) {
  const now = new Date().toISOString();
  const data = stringify(value);
  if (table === "customers") {
    getDb()
      .prepare("insert or replace into customers (id, data, updated_at) values (?, ?, ?)")
      .run(id, data, now);
    return;
  }
  if (table === "quotes") {
    const quote = value as QuoteRecord;
    const current = getDb().prepare("select sort_order from quotes where id = ?").get(id) as
      | { sort_order: number }
      | undefined;
    getDb()
      .prepare(
        `insert or replace into quotes (id, customer_id, column_id, sort_order, data, updated_at)
         values (?, ?, ?, ?, ?, ?)`,
      )
      .run(id, quote.customerId, quote.columnId, current?.sort_order ?? 999, data, now);
    return;
  }
  if (table === "strategies") {
    const strategy = value as StrategyRecord;
    getDb()
      .prepare("insert or replace into strategies (id, quote_id, data, updated_at) values (?, ?, ?, ?)")
      .run(id, strategy.quoteId, data, now);
    return;
  }
  if (table === "actions") {
    const action = value as ActionRecord;
    const current = getDb().prepare("select created_at from actions where id = ?").get(id) as
      | { created_at: string }
      | undefined;
    getDb()
      .prepare(
        `insert or replace into actions (id, quote_id, customer_id, data, created_at, updated_at)
         values (?, ?, ?, ?, ?, ?)`,
      )
      .run(id, action.quoteId, action.customerId, data, current?.created_at ?? now, now);
    return;
  }
  if (table === "calendar_events") {
    getDb()
      .prepare("insert or replace into calendar_events (id, data, updated_at) values (?, ?, ?)")
      .run(id, data, now);
    return;
  }
  if (table === "notes") {
    const note = value as NoteRecord;
    getDb()
      .prepare("insert or replace into notes (id, customer_id, data, updated_at) values (?, ?, ?, ?)")
      .run(id, note.customerId, data, now);
    return;
  }
  throw new Error(`Unsupported table: ${table}`);
}

function createDebriefNote(action: ActionRecord, body: string, createdAt: string): NoteRecord {
  return {
    id: `note_${action.id}_${Date.now()}`,
    customerId: action.customerId,
    type: "text",
    title: action.taskType === "Phone Call" ? "Call debrief" : "Visit debrief",
    body,
    authorName: "Theo Tiral · Installer",
    authorAvatar: "TT",
    createdAt,
  };
}

function defaultSlotFor(taskType: ActionRecord["taskType"]) {
  if (taskType === "Meeting in person") {
    return "2026-06-23T11:00:00.000Z";
  }
  return "2026-06-22T10:30:00.000Z";
}

function addMinutes(iso: string, minutes: number) {
  return new Date(new Date(iso).getTime() + minutes * 60_000).toISOString();
}

function stringify(value: unknown) {
  return JSON.stringify(value);
}

function parseJson<T>(value: string): T {
  return JSON.parse(value) as T;
}

function definedOnly<T extends object>(input: T): Partial<T> {
  return Object.fromEntries(Object.entries(input).filter(([, value]) => value !== undefined)) as Partial<T>;
}

function notFound(message: string) {
  const error = new Error(message);
  Object.assign(error, { statusCode: 404 });
  return error;
}

interface JsonRow {
  data: string;
}
