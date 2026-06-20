// One helper per backend endpoint. No scattered fetch in pages.
import type {
  DealDetail,
  Lead,
  RevisionResult,
  StrategyResult,
} from "./types";

const BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

async function req<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`${init?.method ?? "GET"} ${path} → ${res.status} ${detail}`);
  }
  return res.json() as Promise<T>;
}

export const getLeads = (installerId = 1) =>
  req<Lead[]>(`/installers/${installerId}/leads`);

export const getDeal = (dealId: number) =>
  req<DealDetail>(`/deals/${dealId}`);

export const generateStrategy = (dealId: number) =>
  req<StrategyResult>(`/deals/${dealId}/strategy`, { method: "POST" });

export const draftStep = (dealId: number, order: number) =>
  req<{ message: string }>(`/deals/${dealId}/steps/${order}/draft`, {
    method: "POST",
  });

export const reviseStep = (dealId: number, order: number, instruction: string) =>
  req<RevisionResult>(`/deals/${dealId}/steps/${order}/revise`, {
    method: "POST",
    body: JSON.stringify({ instruction }),
  });

export const getBenchmarks = (orgId = 1) =>
  req<Record<string, number>>(`/orgs/${orgId}/benchmarks`);

export const seed = () => req<Record<string, number>>(`/admin/seed`, { method: "POST" });
