# Input Metadata Model

What we collect, why it exists, and which part of the coach it feeds. Guiding
rule: **every field must either sharpen the persona, become an evidence chip, or
change a step.** If it does none of those, it's decoration — drop it.

Two separate ideas the metadata must feed — don't conflate them:

**Evidence chip** = the *proof* a step is right. One of three kinds:

- **behavioral** — something the customer did ("opened the quote 4× in 48h")
- **benchmark** — an org-wide pattern ("leads called <24h close 2.3× more")
- **deal_history** — precedent ("14 similar past deals won this way")

**Persuasion lever** = the *angle* of the pitch itself. Each step picks a
primary lever matched to the persona, the goal, and any detected objection. See
[Persuasion Levers](#persuasion-levers) — these are more than ROI/CO₂; real
deals turn on personal touch, proximity, and product-specific benefits too.

---

## Entities

### Org
The installer company. Drives multi-tenancy and the benchmark pool.

| Field | Req | Notes |
|-------|-----|-------|
| id | ✓ | |
| name | ✓ | |
| size_type | ✓ | `solo` (CEO sells) \| `small` \| `large` (many sellers) |

### Installer
The salesperson logging in. Entry screen and coaching style depend on them.

| Field | Req | Notes |
|-------|-----|-------|
| id, org_id, name | ✓ | |
| role | | seller / owner |
| sophistication | | `basic` \| `intermediate` \| `advanced` → drives how much the coach hand-holds (full copy vs strategy-only) |
| close_rate | | derived from past deals; feeds benchmarks |
| location / base_postcode | | distance to customer → `proximity_trust` lever |
| service_radius_km | | "we cover your area / can come on-site" |
| on_site_support | | bool — can visit if issues arise; trust chip |
| local_installs_count | | installs near the customer → `social_proof` lever |
| typical_response_time | | "we answer within X hours"; trust |

### Customer (the homeowner)
We assume rich data — invent fields freely (Q&A #2). Optional fields are
enrichment that adds chips and sharpens the persona.

| Field | Req | Feeds |
|-------|-----|-------|
| id, org_id, assigned_installer_id | ✓ | |
| name | ✓ | |
| region / locale | ✓ | localization, persona |
| contact_channels | ✓ | at least one of email / phone / sms / whatsapp |
| channel_preference | | step channel choice |
| age (from birthdate) | | persona |
| household_type | | persona (family vs single vs retiree) |
| annual_income_band | | persona (budget vs investor) |
| current_energy_bill | | ROI framing, savings chips, `gap_framing` lever |
| home_ownership / property_type | | eligibility, persona |
| distance_to_installer_km | | derived; `proximity_trust` + `social_proof` levers |

### Quote (our starting point — already sent)
| Field | Req | Feeds |
|-------|-----|-------|
| id, customer_id | ✓ | |
| products[] | ✓ | `{type: solar/heat_pump/battery/ev_charger, spec, qty}` — **type drives the `product_specific` lever**, see [catalog](#product-angle-catalog) |
| total_price, currency | ✓ | budget framing |
| sent_at | ✓ | timing, ghost clock |
| valid_until | | urgency |
| financing_offered | | objection handling |
| est_savings_per_year | | ROI chips |
| payback_years, roi_pct | | investor chips |
| co2_offset_tons | | environmentalist chips |

### CompetitorPressure (optional, installer-flagged)
| Field | Notes |
|-------|-------|
| competitor_name, competitor_price | becomes "competitor quote €41,200" chip |
| flagged_by_installer | bool |

### Deal (the conversion process for this quote)
| Field | Req | Notes |
|-------|-----|-------|
| id, customer_id, quote_id, installer_id | ✓ | |
| stage | ✓ | `quote_sent → engaged → negotiating → verbal_commit → won \| lost \| ghosted` |
| last_activity_at | ✓ | ghost clock |
| temperature | | derived `hot/warm/cold` from engagement recency + frequency |
| outcome, outcome_reason | | set when terminal; feeds deal_history + benchmarks |

### Touch (each interaction)
| Field | Notes |
|-------|-------|
| id, deal_id, channel | email / call / sms / whatsapp / meeting |
| direction | inbound / outbound |
| timestamp | |
| transcript / body | optional; **unstructured → AI extracts signals & objections** |
| summary | AI-generated |

### Note (installer's own intel)
| Field | Notes |
|-------|-------|
| id, deal_id, author_id, type | text / voice |
| content | voice is transcribed; **unstructured → AI extracts signals** (e.g. "asked about monthly payment") |
| timestamp | |

### Signal (behavioral telemetry) — feeds **behavioral** chips & ghost score
Structured events, mostly auto-captured. Types:

`email_opened` (count) · `email_replied` · `link_clicked` ·
`document_viewed` · `site_visit` · `call_inbound` · `call_outbound` ·
`meeting_booked` · `no_response` (days since last touch)

| Field | Notes |
|-------|-------|
| id, deal_id, type, timestamp | |
| value / count | e.g. opens = 4 |

### PersonaProfile (derived, weighted multi-persona) — **AI output**
Not a single bucket. A weighted vector over a **fixed taxonomy**:

`environmentalist` · `roi_investor` · `budget_sensitive` ·
`security_seeker` · `early_adopter` · `skeptic`

| Field | Notes |
|-------|-------|
| deal_id | |
| scores[] | `{persona, weight 0–1, strength: strong/moderate/weak, evidence_refs[]}` |
| top_motivations | top 2–3, shown as buyer-profile chips |
| objections[] | from fixed set below |

**Objection taxonomy:** `upfront_cost` · `financing_concern` ·
`performance_doubt` (winter/output) · `roof_or_technical_fit` ·
`trust_or_legitimacy` · `timing_low_urgency` · `competitor_comparison` ·
`decision_paralysis`

### Benchmark (org-level aggregates) — feeds **benchmark** chips — **deterministic, not AI**
Computed by aggregating won/lost deals across the org. Each is a stat statement:

| Field | Example |
|-------|---------|
| metric | "call within 24h" |
| lift | 2.3× |
| sample_size | 120 deals |

### Strategy → Step → EvidenceChip (the coach output)
See [`implementation_plan/strategy_contract.md`](implementation_plan/strategy_contract.md).

### Outcome (per step / deal) — feeds the loop
| Field | Notes |
|-------|-------|
| deal_id / step_id, event, timestamp | `accepted` · `sent` · `replied` · `advanced` · `ghosted` · `won` · `lost` |

Real in production; **simulated for the demo**, with adaptive re-plan as a
planned phase.

---

## Persuasion Levers

The pitch angle of a step. Fixed taxonomy. A step has one **primary** lever
(optionally a secondary), chosen from the persona + goal + objections, and
backed by evidence chips.

| Lever | Pitch angle | Fed by | Best for persona |
|-------|-------------|--------|------------------|
| `roi_financial` | payback, returns, savings vs status quo | payback_years, roi_pct, energy_bill | roi_investor, budget_sensitive |
| `environmental_impact` | CO₂ offset, sustainability story | co2_offset_tons | environmentalist |
| `peace_of_mind` | reliability, warranty, predictable bills | product spec, warranty | security_seeker |
| `proximity_trust` | "we're local, X km away, can come on-site" | installer location, service_radius, on_site_support, response_time | skeptic, security_seeker |
| `social_proof` | "N homes near you already installed" | local_installs_count, deal_history | skeptic, security_seeker |
| `urgency` | quote expiry, subsidy deadline, price rise, install-before-winter | valid_until, season, incentives | all (late-stage) |
| `gap_framing` | quantify current state → desired state, name the gap | current_energy_bill, savings, co2 | all (mid-stage) |
| `objection_handling` | directly answer a detected objection | objections[], notes | skeptic |
| `product_specific` | benefit tied to the exact product sold | quote.products[] | matches whoever |

## Product Angle Catalog

What's being sold changes the pitch. The `product_specific` lever pulls from
here. Multiple products in one quote → combine angles (e.g. solar + battery =
independence).

| Product | Primary angles |
|---------|----------------|
| `solar_pv` | bill offset, daytime self-consumption, export income, energy independence |
| `heat_pump` | replace gas/oil, efficiency (COP), subsidy eligibility, comfort; pre-empt the winter-performance objection |
| `battery` | outage backup, evening self-consumption, maximize solar use, independence |
| `ev_charger` | cheap home vs public charging, overnight charging on solar, convenience, future-proofing |

## Strategy Goal Arc

Steps are not isolated — they ladder toward a **current goal**. The arc you
described:

```
build_trust  →  create_urgency  →  close_gap  →  ask_for_commitment
```

- Each Strategy has a `current_goal`; each Step is tagged with the goal it
  serves.
- **Ordering rule:** trust before urgency before the ask. Don't push urgency on
  a cold/low-trust deal; don't ask for commitment before the gap is framed.
- `current_goal` advances as the deal stage and engagement signals improve, and
  resets toward trust if the deal cools (ghost risk).

Goal taxonomy: `build_trust` · `establish_value` · `create_urgency` ·
`close_gap` · `handle_objection` · `ask_for_commitment`.

Detailed step/chip shape: [`implementation_plan/strategy_contract.md`](implementation_plan/strategy_contract.md).

---

## Mandatory core

Minimum to generate a strategy at all. Everything else is enrichment that adds
chips:

- **Customer:** name, region/locale, ≥1 contact channel
- **Quote:** ≥1 product, total_price, currency, sent_at
- **Deal:** stage, last_activity_at
