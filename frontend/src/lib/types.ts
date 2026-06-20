// FE side of the backend contract. Field names mirror the API JSON exactly.
// Source: backend/app/routers/*.py + integration/engine.py.

export interface Lead {
  deal_id: number;
  customer_name: string;
  region: string;
  stage: string;
  last_activity_at: string;
  total_price: number;
  currency: string;
  products: string[];
}

export interface Customer {
  id: number;
  name: string;
  region: string;
  locale?: string | null;
  channel_preference?: string | null;
  current_energy_bill?: number | null;
  property_type?: string | null;
  [k: string]: unknown;
}

export interface Quote {
  id: number;
  products: { type: string; spec?: string; qty?: number }[];
  total_price: number;
  currency: string;
  sent_at: string;
  est_savings_per_year?: number | null;
  payback_years?: number | null;
  roi_pct?: number | null;
  co2_offset_tons?: number | null;
  [k: string]: unknown;
}

export interface Deal {
  id: number;
  stage: string;
  current_goal: string;
  last_activity_at: string;
  [k: string]: unknown;
}

export interface Note {
  id: number;
  type: string;
  content: string;
  timestamp: string;
}

export interface Touch {
  id: number;
  channel: string;
  direction: string;
  timestamp: string;
  body?: string | null;
  summary?: string | null;
}

export interface Signal {
  id: number;
  type: string;
  timestamp: string;
  value?: number | null;
}

export interface DealDetail {
  deal: Deal;
  customer: Customer;
  quote: Quote;
  touches: Touch[];
  notes: Note[];
  signals: Signal[];
  competitor?: Record<string, unknown> | null;
  persona?: Record<string, unknown> | null;
  strategy?: Record<string, unknown> | null;
  temperature?: string | null;
  ghost_risk?: number | null;
}

export interface EvidenceChip {
  kind: string; // behavioral | benchmark | deal_history
  text: string;
  ref?: string | null;
}

export interface PersonaScore {
  persona: string;
  weight: number;
  strength: string;
  why?: string;
}

export interface Step {
  order: number;
  goal: string;
  lever: string;
  channel: string;
  rationale: string;
  evidence_chips: EvidenceChip[];
}

export interface StrategyResult {
  current_goal: string;
  buyer_profile: { summary?: string } & Record<string, unknown>;
  persona_scores: PersonaScore[];
  top_motivations: string[];
  objections: string[];
  steps: Step[];
}

export interface RevisionResult {
  applied: boolean;
  step: Step;
  reason: string;
}

// --- Write payloads (POST /leads, PATCH /master-data) ---

export interface CreateLeadIn {
  customer: {
    name: string;
    region: string;
    channel_preference?: string | null;
    property_type?: string | null;
    home_ownership?: string | null;
    annual_income_band?: string | null;
  };
  quote: {
    products: { type: string; spec?: string; qty?: number }[];
    total_price: number;
    currency?: string;
  };
}

export interface MasterDataIn {
  customer?: Partial<{
    name: string;
    region: string;
    channel_preference: string | null;
    property_type: string | null;
    home_ownership: string | null;
    annual_income_band: string | null;
    current_energy_bill: number | null;
  }>;
  quote?: Partial<{
    products: { type: string; spec?: string; qty?: number }[];
    total_price: number;
    currency: string;
  }>;
  deal?: Partial<{ stage: string; current_goal: string }>;
}
