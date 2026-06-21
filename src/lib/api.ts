import type {
  AddNoteInput,
  BootstrapPayload,
  CalendarEventRecord,
  LogActionInput,
  QuoteDetailPayload,
  QuoteRecord,
  ScheduleActionInput,
  UpdateCustomerInput,
} from "../../server/types.js";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(path, {
    ...init,
    headers: {
      "content-type": "application/json",
      ...(init?.headers ?? {}),
    },
  });
  if (!response.ok) {
    const body = (await response.json().catch(() => null)) as { error?: string } | null;
    throw new Error(body?.error ?? `Request failed: ${response.status}`);
  }
  return (await response.json()) as T;
}

export const api = {
  bootstrap: () => request<BootstrapPayload>("/api/bootstrap"),
  quotes: () => request<{ quotes: QuoteRecord[] }>("/api/quotes"),
  quote: (quoteId: string) => request<QuoteDetailPayload>(`/api/quotes/${quoteId}`),
  calendar: () => request<{ events: CalendarEventRecord[] }>("/api/calendar"),
  generateStrategy: (quoteId: string) =>
    request<QuoteDetailPayload>(`/api/quotes/${quoteId}/generate-strategy`, {
      method: "POST",
      body: "{}",
    }),
  scheduleAction: (actionId: string, input: ScheduleActionInput = {}) =>
    request<QuoteDetailPayload>(`/api/actions/${actionId}/schedule`, {
      method: "POST",
      body: JSON.stringify(input),
    }),
  logAction: (actionId: string, input: LogActionInput) =>
    request<QuoteDetailPayload>(`/api/actions/${actionId}/log`, {
      method: "POST",
      body: JSON.stringify(input),
    }),
  completeAction: (actionId: string) =>
    request<QuoteDetailPayload>(`/api/actions/${actionId}/complete`, {
      method: "POST",
      body: "{}",
    }),
  updateCustomer: (customerId: string, input: UpdateCustomerInput) =>
    request(`/api/customers/${customerId}`, {
      method: "PATCH",
      body: JSON.stringify(input),
    }),
  addNote: (customerId: string, input: AddNoteInput) =>
    request(`/api/customers/${customerId}/notes`, {
      method: "POST",
      body: JSON.stringify(input),
    }),
  resetDemo: () =>
    request("/api/demo/reset", {
      method: "POST",
      body: "{}",
    }),
};

export function formatMoney(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatShortDate(iso?: string) {
  if (!iso) {
    return "Not sent";
  }
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  }).format(new Date(iso));
}

export function formatTime(iso: string) {
  return new Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(iso));
}
