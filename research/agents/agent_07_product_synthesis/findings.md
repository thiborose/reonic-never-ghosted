# Findings: Agent 7 - Product Synthesis

Status: completed on 2026-06-20.

## Executive Synthesis

The PoC should be a Germany-first Reonic embedded action assistant for the quote stage. Its job is not to "write a sequence". Its job is to diagnose why a quoted homeowner is not signed yet, choose the lowest-pressure action that resolves the blocker, gate channels and claims for Germany, schedule the work against installer capacity, and learn from the debrief.

Evidence-backed product requirements:

| Requirement | Confidence | Source IDs |
| --- | --- | --- |
| Place the assistant in a quoted-customer workflow: offer sent/opened/unsigned, variants, economics, signature state, CRM history. | medium-high | A7-E01; A0-E02, A0-E14, A6-E01 |
| Model residential PV plus battery as the base, with heat pump and wallbox as first-class variants. | high for public scope; medium for actual mix | A7-E02; A0-E01, A0-E13 |
| Use multi-label motive and blocker scores, not fixed personas or demographic stereotypes. | high for ROI/risk; medium for other motives | A7-E03; E01, E02, E18 |
| Treat ROI/proposal clarity/trust/consent as gates before persuasion. | high | A7-E04, A7-E05, A7-E06, A7-E07 |
| Keep ghosting risk and close readiness as transparent hypotheses until CRM outcomes validate them. | high that validation is missing | A7-E14; A0-E15, E05-014, A6-E16 |

Inferred PoC implementation choices:

| Choice | Rationale | Validation needed |
| --- | --- | --- |
| Use a single "Next Best Action" card as the hero component. | It best expresses the action-orchestrator evidence and is demoable. | Installer usability test. |
| Use factor chips for motive, blocker, proof, consent, and capacity. | Keeps reasoning explainable without crude persuasion labels. | UI comprehension test. |
| Use six prototype records rather than a large fake CRM. | Covers the major evidence-backed scenarios with less noise. | Reonic demo priorities. |
| Use rule-based scoring in the PoC. | Outcome data is missing; rules can show evidence and confidence. | Later calibration on real data. |

Post-run integration note: Agent 3 completed after this Agent 7 synthesis. No Agent 3 claims were used inside this file, but the top-level deliverables and `RESEARCH_SUMMARY.md` integrate the completed Agent 3 objection/sales-process workstream.

## Core Workflow

### 1. Quote Worklist

Purpose: show which quoted customers need attention today and why.

Required state:

| State | Evidence | Product behavior |
| --- | --- | --- |
| `customer_initiated_question` | A6-E15, E05-007 | Highest queue priority if channel and purpose are eligible. |
| `promised_next_step_due` | VOC-E02, VOC-E16, A6-E15 | Show overdue owner and create update task. |
| `offer_opened_unsigned` | A0-E02, A0-E11, A0-E15 | Show as engagement hypothesis only if tracking consent exists. |
| `quote_expiring_real_deadline` | E05-021, E04-002 | Use only verified quote validity or market deadline. |
| `needs_proof_work` | A6-E08, A6-E09, A6-E10 | Schedule proposal revision, ROI assumption check, finance/subsidy verification, or document request instead of outreach. |
| `debrief_required` | A6-E16 | Block strategy update until outcome or skipped-debrief reason is captured. |

Implementation: worklist rows should show customer, quote value/products, stage, top blocker, recommended action, consent status, due date, owner, and confidence. Do not rank by opens/clicks when tracking consent is absent.

### 2. Customer Detail With Assistant Panel

Purpose: give the installer one view for diagnosis and execution.

Panel sections:

| Section | What it shows | Source IDs |
| --- | --- | --- |
| Diagnosis | Top motive, top blocker, confidence, detected signals, missing data. | A7-E03, A7-E04, A7-E05 |
| Recommended Action | Action type, why now, success criteria, expected duration, owner. | A7-E01, A7-E09 |
| Evidence Used | Quote facts, source IDs, proof assets, market fact timestamps. | A7-E08, A7-E12 |
| Consent/Channel Status | Eligible channels, blocked channels, opt-outs, tracking state. | A7-E07 |
| Schedule | Suggested time slot, travel impact, virtual alternative, capacity conflict. | A7-E10 |
| Draft/Script/Asset | Email, SMS/WhatsApp logistics, call agenda, video outline, proposal addendum, document request, or proof card. | A7-E09 |
| Debrief | 3-click completion capture plus optional note. | A7-E11 |

### 3. Strategy State Machine

Use these states as PoC UI badges and rule inputs:

| State | Trigger | Recommended response | Confidence | Source IDs |
| --- | --- | --- | --- | --- |
| `needs_itemized_quote` | Missing or bundled line items, hidden assumptions, confusing variants, competitor comparison. | Revised proposal or itemized addendum. | high | A7-E05; VOC-E04, A6-E08 |
| `roi_claim_blocked_missing_assumptions` | Missing tariff, annual kWh, self-consumption, roof/yield, feed-in mode, finance terms, or checked_at. | Document request or assumptions review. | high | A7-E04; E04-001, E04-011 |
| `winter_chart_needed` | Mentions winter, clouds, shade, heat-pump load. | Seasonal production chart or virtual consult. | medium | VOC-E08, E04-011 |
| `battery_now_vs_later` | Battery in quote plus payback/autarky/backup/future-load question. | Scenario comparison and motive clarification. | medium | E11, VOC-E07, E04-009 |
| `heat_pump_monthly_burden` | PV plus heat pump or heat-pump quote with operating-cost concern. | Monthly impact call and heat-load/building-readiness proof. | medium-high | E06, E08, VOC-E09 |
| `trust_repair_needed` | Pressure, unclear owner, negative sentiment, aftercare/service concern. | Named human action, responsibility matrix, low-pressure CTA. | medium-high | VOC-E01, VOC-E02, VOC-E15 |
| `competitor_comparison_active` | Competitor mention, competing offer count, referral risk, price gap. | Comparison matrix or call, not generic nurture. | medium | VOC-E03, E05-005 |
| `co_decision_maker_summary` | Explicit partner/family/advisor review. | Shareable stakeholder summary and optional joint call. | low-medium | E16, VOC-E17 |
| `channel_blocked` | Missing consent, opt-out, wrong purpose, tracking consent absent. | Suppress channel; show legal-safe alternative. | high | E04-020, E04-021, E04-022, A6-E02 |
| `visit_not_justified` | Travel high, no physical inspection need, explanation blocker only. | Virtual consultation, video, document request, or proof work. | medium | A6-E11, A6-E12 |
| `visit_justified` | Roof/site risk, heat-load uncertainty, high-value/high-readiness, route cluster. | In-person visit with objective and debrief. | medium | VOC-E10, A6-E12 |
| `pause_no_followup` | Opt-out, requested review time, repeated stale touches, no value-add. | Pause with reason and resume condition. | medium-high | A6-E13, E05-008 |

## Minimum Data Model

The PoC should mock a compact Reonic-like CRM envelope, not a generic spreadsheet.

### Customer And Household

Required fields:

```yaml
customer:
  customer_id:
  name:
  country: Germany
  language: de
  preferred_formality: Sie
  address:
    city:
    postcode:
    state:
    latitude:
    longitude:
  home_type:
  ownership_status:
  roof:
    orientation:
    tilt:
    shading:
    roof_age:
    roof_photo_status:
    inspection_status:
  energy_context:
    annual_consumption_kwh:
    current_electricity_ct_per_kwh:
    tariff_source:
    bill_date:
    current_heating_fuel:
    heating_age:
    heat_demand_kwh:
    ev_owned_or_planned:
  decision_context:
    explicit_motives:
    stated_concerns:
    decision_makers_explicit:
    advisor_involved:
    preferred_channel:
```

Evidence: A0-E10, A0-E11, E04-001, E04-011, E16, VOC-E17.

### Quote And Product Options

```yaml
quote:
  quote_id:
  offer_status:
  quote_created_at:
  quote_sent_at:
  quote_last_edited_at:
  quote_valid_until:
  signature_state:
  selected_option_id:
  options:
    - option_id:
      product_scope:
      pv_kwp:
      battery_kwh:
      wallbox_included:
      heat_pump_scope:
      net_price_eur:
      gross_price_eur:
      financing_terms:
      subsidy_status:
      expected_commissioning_date:
      feed_in_mode:
      assumptions:
        annual_yield_kwh:
        local_yield_source:
        self_consumption_pct:
        export_tariff_ct_per_kwh:
        opex_pct:
        degradation:
      line_items:
      exclusions:
      variants:
```

Evidence: A0-E02, A0-E10, E04-002, E04-007, E04-008, E04-011, VOC-E04.

### Consent, Communication, And Engagement

```yaml
communication:
  assigned_owner:
  last_contact_at:
  last_reply_at:
  unanswered_questions:
  competitor_mentions:
  competing_offer_count:
  referral_mentions:
  attempt_history:
  customer_sentiment:
  consent:
    phone_marketing:
      allowed:
      source:
      timestamp:
      scope:
    email_marketing:
      allowed:
      source:
      timestamp:
      scope:
    sms:
      allowed:
      source:
      timestamp:
      scope:
    whatsapp:
      opt_in:
      last_inbound_at:
      template_status:
    tracking:
      allowed:
      scope:
      timestamp:
    opt_out_status:
  engagement_events:
    offer_view_count:
    offer_opened_at:
    proposal_section_views:
    portal_faq_viewed:
    documents_uploaded:
    tracking_consent_required: true
```

Evidence: A0-E03, A0-E11, VOC-E02, VOC-E03, E04-020, E04-021, E04-022, A6-E02. Proposal section views are an inferred PoC enhancement unless Reonic confirms event availability.

### Strategy, Actions, Calendar, And Debrief

```yaml
strategy:
  motive_scores:
    roi:
    independence:
    climate:
    technical_control:
    system_builder:
  blocker_scores:
    proposal_clarity:
    roi_assumption:
    price_shock:
    battery_value:
    winter_performance:
    heat_pump_monthly_burden:
    roof_property_risk:
    trust_pressure:
    aftercare_risk:
    competitor_comparison:
    stakeholder_review:
  top_motive:
  top_blocker:
  confidence_label:
  evidence_factors:
  recommended_action_id:
actions:
  - action_id:
    action_type:
    channel:
    purpose:
    owner:
    due_at:
    duration_minutes:
    proof_assets:
    compliance_checks:
    success_criteria:
    status:
calendar:
  available_slots:
  existing_conflicts:
  travel_time_minutes:
  route_cluster_score:
  visit_roi_score:
debrief:
  action_id:
  completed:
  customer_response:
  customer_language:
  new_facts:
  new_objections:
  sentiment:
  next_commitment:
  outcome_label:
  follow_up_due_at:
```

Evidence: A6-E01 through A6-E16.

### Proof And Claim Metadata

```yaml
proof_assets:
  - proof_asset_id:
    type:
    title:
    source_url_or_file:
    product_match:
    region_match:
    permission_status:
    verified_status:
    approved_claims:
    checked_at:
    expires_at:
claim_checks:
  - claim_id:
    claim_type:
    status:
    source_url:
    checked_at:
    valid_until:
    human_review_required:
```

Evidence: A7-E08, A7-E12; E05-001, E05-016, E05-018.

## Strategy Engine Rules

Rules should be deterministic and explainable for the PoC. Each rule returns a reason, source IDs, confidence, and override option.

### Diagnosis Rules

| Rule | Evidence-backed behavior | Inferred implementation |
| --- | --- | --- |
| Persona scoring | Score motives and blockers from explicit notes, quote products, customer questions, debriefs, and uploaded docs. | Start with keyword/rule chips; no machine-learning classifier needed for PoC. |
| Blocker priority | Resolve blocker before channel/copy: clarity, ROI, trust, missing data, finance, technical, stakeholder, silence. | Use highest severe blocker plus "can resolve now" as the action selector. |
| Mixed motives | Show top motive plus top blocker, not one persona. | Example label: "ROI motive, trust blocker". |
| Confidence | Use high/medium/low from evidence strength and data completeness. | Low confidence triggers clarifying question. |

### Action Routing Rules

| Condition | Next action | Confidence | Source IDs |
| --- | --- | --- | --- |
| Proposal clarity low | Revised proposal or itemized addendum | high | A7-E05, A6-E08 |
| ROI claim missing tariff/roof/yield/finance inputs | Document request or assumptions review | high | A7-E04, A6-E10 |
| Customer asks battery payback/autarky | Battery now/later scenario and motive question | medium | A7-E13 |
| PV plus heat pump and monthly burden concern | Virtual consult with monthly scenario | medium | VOC-E09, A6-E11 |
| Trust/pressure/aftercare concern | Named human call or responsibility proof | medium-high | A7-E06, A6-E05 |
| Competitor/referral mention | Comparison matrix or call | medium | VOC-E03 |
| Explicit stakeholder review | Shareable summary and joint call invite | low-medium | E16, VOC-E17 |
| Missing consent for desired channel | Suppress channel and show alternative | high | A7-E07 |
| Roof/property risk and no inspection/photo | Photo review or site visit | medium | VOC-E10, A6-E12 |
| Stale/no value-add or requested time | Pause/no follow-up with resume condition | medium-high | A6-E13 |

### Channel Rules

| Channel | Recommended use | Guardrail |
| --- | --- | --- |
| Email | Written proof, addendum, finance explainer, shareable summary. | Eligibility required; do not use opens/clicks without tracking consent. |
| SMS/WhatsApp | Short logistics, appointment confirmation, document upload prompt, customer-requested reply. | Consent/opt-in/platform rules required; avoid long persuasion. |
| Phone | Complex objection, ROI/winter/heat-pump walkthrough, trust repair, competitor comparison. | Phone consent or customer-requested callback context required; agenda must be clear. |
| Voicemail | Minimal callback marker after eligible missed call. | No persuasive pitch. |
| Personalized video | Optional visual proof for multi-person or complex quote review. | Low-medium evidence; claim-check and transcript required. |
| Portal/document action | Good default when outreach is blocked or proof work is needed. | Do not present portal engagement as intent without tracking consent. |
| In-person visit | Physical inspection, roof/site risk, high readiness/value, route cluster. | Not default; show virtual alternative and travel cost. |

### Timing And Scheduling Rules

Evidence-backed:

- Prioritize customer-initiated questions and promised next steps before stale outbound touches. Source: A6-E15, VOC-E02.
- Do not use "call immediately" as a hard Germany post-quote rule. Source: E05-007 limitations.
- Schedule proof work when claims are blocked. Source: A6-E10, A7-E08.
- Use factual deadlines only: quote validity, verified incentive/tariff window, customer equipment failure, real installer capacity. Source: E05-021.

Inferred:

- Use configurable action durations: 5 minutes for logistics, 15 minutes for call, 30 minutes for virtual consult, 60 to 120 minutes for visit, 30 to 90 minutes for proposal revision.
- Use configurable travel threshold and require override reason until real data exists.

### Debrief Rules

Minimum 3-click debrief:

1. Outcome: no response, replied, booked next step, document uploaded, objection resolved, still undecided, signed, lost, opt-out, complaint.
2. Remaining blocker: none, ROI, price, clarity, trust, finance, technical, roof/site, winter, heat pump, competitor, stakeholder, timing.
3. Next commitment: date/time or none.

Optional note fields:

- customer language
- new facts
- decision-maker involved
- competitor name or offer detail
- proof requested

Strategy update:

- Update motive/blocker scores from explicit facts.
- Create next task only if consent, proof, and value-add conditions are met.
- Keep risk labels as hypotheses until outcome data validates them.

## Prototype Mock CRM Records

These records are source-informed but not real customers. They should live in demo seed data if the PoC needs a mock CRM.

```yaml
customer_id: MC-001
customer_name: Anna Keller
country: Germany
region: Hamburg
language: de
home_type: owner-occupied row house
household_context: explicit partner review mentioned; no family inference beyond note
decision_makers: Anna and partner Tobias
preferred_channel: email
communication_constraints: phone marketing consent missing; email consent present; tracking consent absent
current_energy_context: 4,600 kWh/year; electricity bill not uploaded; no EV; gas heating
stated_motivations: reduce monthly electricity cost; compare offers
stated_concerns: "other quote is cheaper"; "battery payback unclear"
persona_hypotheses: [ROI and Cost-Control Planner, Risk and Trust Skeptic]
persona_confidence: medium
quote:
  quote_id: Q-MC-001
  quote_date: 2026-06-12
  product_scope: PV plus 7.7 kWh battery
  system_size: 9.8 kWp
  battery_included: true
  heat_pump_or_ev_scope: none
  total_cost: EUR 27,900
  financing_terms: none yet
  estimated_savings: blocked - actual tariff missing
  payback_period: blocked - actual tariff and self-consumption assumptions missing
  incentives_included: VAT zero-rate note, claim checked_at required
  assumptions: fallback 37 ct/kWh not yet approved for customer-facing copy
  quote_valid_until: 2026-07-10
crm_timeline:
  - date: 2026-06-12
    event_type: offer_sent
    summary: digital proposal sent by email
  - date: 2026-06-15
    event_type: customer_reply
    summary: asked whether battery really pays and mentioned cheaper competitor
behavioral_signals: offer open signal unavailable because tracking consent absent
known_objections: [competitor_comparison_active, battery_now_vs_later, roi_claim_blocked_missing_assumptions]
competitor_mentions: cheaper local quote, details not uploaded
installer_context:
  company_size: 12 employees, owner-led sales
  active_lead_count: 22
  capacity_constraints: owner has 3 call slots this week
calendar_context:
  available_slots: [2026-06-22 16:00, 2026-06-23 09:30, 2026-06-24 17:00]
  existing_conflicts: site visits on 2026-06-23 afternoon
assistant_expected_output:
  diagnosis: ROI/comparison blocker; battery value unresolved; phone blocked
  next_best_action: email with itemized comparison checklist plus request for electricity bill and competitor quote upload
  preparation_assets: ROI assumptions drawer, battery now/later comparison, upload link
  scheduling_recommendation: schedule 15-minute assumptions review only after customer replies or grants phone consent
  debrief_questions: Did competitor offer include battery? Is blocker payback, upfront cost, or trust? Who else must review?
  avoid: phone call, payback claim, fake urgency, tracking-based readiness
source_logic: A7-E04, A7-E05, A7-E07, A7-E13
```

```yaml
customer_id: MC-002
customer_name: Mehmet Yildiz
country: Germany
region: Munich
language: de
home_type: detached house
household_context: explicit EV delivery in September; no other household inference
decision_makers: Mehmet, spouse to join review call
preferred_channel: WhatsApp for logistics, email for documents
communication_constraints: WhatsApp opt-in present; email consent present; tracking consent present
current_energy_context: 6,900 kWh/year projected with EV; electricity tariff uploaded
stated_motivations: autarky, solar EV charging, future-ready system
stated_concerns: whether to do wallbox and battery now or later
persona_hypotheses: [Independence and Autarky Optimizer, Multi-Tech System Builder]
persona_confidence: medium-high
quote:
  quote_id: Q-MC-002
  quote_date: 2026-06-10
  product_scope: PV plus battery plus wallbox
  system_size: 12.4 kWp
  battery_included: true
  heat_pump_or_ev_scope: 11 kW wallbox
  total_cost: EUR 34,800
  financing_terms: cash
  estimated_savings: available with uploaded tariff
  payback_period: visible with autarky and EV load assumptions
  incentives_included: local subsidy unverified
  assumptions: Munich yield sample requires roof-specific check
  quote_valid_until: 2026-07-12
crm_timeline:
  - date: 2026-06-10
    event_type: offer_sent
    summary: proposal with full bundle sent
  - date: 2026-06-14
    event_type: portal_view
    summary: viewed battery and wallbox sections, tracking consent present
behavioral_signals: viewed roadmap sections; asked about later expansion
known_objections: [multi_technology_strategy, battery_now_vs_later]
competitor_mentions: none
installer_context:
  company_size: 28 employees, regional installer
  active_lead_count: 38
  capacity_constraints: technical planner available for two virtual consults
calendar_context:
  available_slots: [2026-06-22 18:00, 2026-06-25 12:00]
  existing_conflicts: no route cluster near Munich east this week
assistant_expected_output:
  diagnosis: high autarky/system motive; decision is sequencing, not price alone
  next_best_action: virtual roadmap consult with partner invite and WhatsApp slot confirmation
  preparation_assets: full-system vs phased roadmap, EV solar-charging estimate, battery sizing card
  scheduling_recommendation: 25-minute virtual consult; in-person not justified yet
  debrief_questions: Does customer prefer full bundle or phase 1? Is battery valued for ROI, autarky, backup, or EV flexibility?
  avoid: strict ROI-only battery dismissal, unsupported "100 percent independent" claim
source_logic: A7-E02, A7-E03, A7-E10, A7-E13
```

```yaml
customer_id: MC-003
customer_name: Claudia Berger
country: Germany
region: Cologne
language: de
home_type: 1980s detached house
household_context: no stakeholder notes yet
decision_makers: unknown; ask explicitly
preferred_channel: phone requested for technical questions
communication_constraints: customer requested callback; email consent present; tracking consent absent
current_energy_context: 5,200 kWh/year electricity; gas heating; heat demand estimate missing
stated_motivations: reduce gas dependence; predictable monthly cost
stated_concerns: heat pump electricity use in winter and monthly burden
persona_hypotheses: [Risk and Trust Skeptic, Technical-Control Optimizer, Multi-Tech System Builder]
persona_confidence: medium
quote:
  quote_id: Q-MC-003
  quote_date: 2026-06-09
  product_scope: PV plus heat pump
  system_size: 10.6 kWp
  battery_included: false
  heat_pump_or_ev_scope: air-water heat pump, heat load not finalized
  total_cost: EUR 46,500
  financing_terms: KfW precheck not started
  estimated_savings: blocked - heat demand and tariff missing
  payback_period: blocked - heat-load and seasonal data missing
  incentives_included: subsidy check required by municipality
  assumptions: current gas use not uploaded
  quote_valid_until: 2026-07-05
crm_timeline:
  - date: 2026-06-09
    event_type: offer_sent
    summary: PV plus heat pump quote sent
  - date: 2026-06-17
    event_type: customer_inbound
    summary: asked whether winter operation makes monthly costs too high
behavioral_signals: customer-initiated callback request
known_objections: [heat_pump_monthly_burden, winter_chart_needed, roi_claim_blocked_missing_assumptions]
competitor_mentions: none
installer_context:
  company_size: 18 employees
  active_lead_count: 31
  capacity_constraints: heat-pump specialist available Friday only
calendar_context:
  available_slots: [2026-06-26 10:00, 2026-06-26 14:30]
  existing_conflicts: morning route cluster not relevant; virtual preferred
assistant_expected_output:
  diagnosis: heat-pump monthly-burden blocker; customer requested service callback
  next_best_action: specialist call with agenda plus request gas bill/heat-load inputs
  preparation_assets: winter production chart placeholder, monthly impact model, heat-load checklist
  scheduling_recommendation: 20-minute call with heat-pump specialist on 2026-06-26
  debrief_questions: What current gas usage did customer confirm? Did they ask subsidy, comfort, radiator, or financing? Who signs?
  avoid: generic "PV works in winter" reassurance, stale subsidy claim, unsupported monthly savings
source_logic: A7-E04, A7-E08, A7-E09, A7-E13
```

```yaml
customer_id: MC-004
customer_name: Jens Hoffmann
country: Germany
region: Leipzig
language: de
home_type: older detached house
household_context: customer is sole visible contact
decision_makers: unknown
preferred_channel: email
communication_constraints: email consent present; phone consent absent; tracking consent absent
current_energy_context: 3,800 kWh/year; roof age 35 years; roof photo missing
stated_motivations: wants reliable local installer
stated_concerns: fear of roof damage and aftercare response
persona_hypotheses: [Risk and Trust Skeptic]
persona_confidence: high
quote:
  quote_id: Q-MC-004
  quote_date: 2026-06-08
  product_scope: PV only with battery-ready inverter
  system_size: 8.4 kWp
  battery_included: false
  heat_pump_or_ev_scope: none
  total_cost: EUR 18,900
  financing_terms: none
  estimated_savings: preliminary
  payback_period: preliminary
  incentives_included: no local subsidy claimed
  assumptions: roof condition unknown
  quote_valid_until: 2026-07-08
crm_timeline:
  - date: 2026-06-08
    event_type: offer_sent
    summary: PV proposal sent
  - date: 2026-06-18
    event_type: note
    summary: customer asked whether mounting can cause leaks and who handles aftercare
behavioral_signals: no tracking available
known_objections: [roof_property_risk, aftercare_risk, trust_repair_needed]
competitor_mentions: none
installer_context:
  company_size: 9 employees, owner-led
  active_lead_count: 19
  capacity_constraints: owner route near Leipzig north on 2026-06-25
calendar_context:
  available_slots: [2026-06-24 17:00 virtual, 2026-06-25 11:30 site_visit_if_needed]
  existing_conflicts: two site visits near customer on 2026-06-25
assistant_expected_output:
  diagnosis: roof risk and aftercare trust blocker; physical data missing
  next_best_action: email request for roof photos plus aftercare/responsibility proof; propose site visit only after photo review or if customer asks
  preparation_assets: mounting method explainer, insurance/warranty boundaries, support contact, route-aware visit option
  scheduling_recommendation: reserve route-clustered visit hold but send document request first
  debrief_questions: Did roof photo arrive? Is in-person inspection required? Which aftercare promise matters?
  avoid: vague all-in reassurance, unconsented call, forced site visit
source_logic: A7-E06, A7-E09, A7-E10, A7-E12
```

```yaml
customer_id: MC-005
customer_name: Sarah Neumann
country: Germany
region: Freiburg
language: de
home_type: detached house
household_context: explicit climate goal; partner reviews financials
decision_makers: Sarah plus partner
preferred_channel: email
communication_constraints: email consent present; tracking consent present; phone consent present
current_energy_context: 4,200 kWh/year; oil heating replacement planned next year
stated_motivations: CO2 reduction, fossil-fuel reduction, lower bills
stated_concerns: wants credible impact numbers and partner wants cost summary
persona_hypotheses: [Climate Impact Confirmer, ROI and Cost-Control Planner]
persona_confidence: medium
quote:
  quote_id: Q-MC-005
  quote_date: 2026-06-11
  product_scope: PV plus battery-ready design
  system_size: 9.2 kWp
  battery_included: false
  heat_pump_or_ev_scope: heat pump future phase noted
  total_cost: EUR 20,400
  financing_terms: none
  estimated_savings: available but bill date older than 12 months
  payback_period: needs tariff refresh
  incentives_included: no subsidy claimed
  assumptions: CO2 factor source pending
  quote_valid_until: 2026-07-11
crm_timeline:
  - date: 2026-06-11
    event_type: offer_sent
    summary: proposal sent with future heat-pump note
  - date: 2026-06-16
    event_type: customer_reply
    summary: asked for CO2 impact and partner-friendly summary
behavioral_signals: viewed impact section, tracking consent present
known_objections: [co_decision_maker_summary, roi_claim_blocked_missing_assumptions]
competitor_mentions: none
installer_context:
  company_size: 24 employees
  active_lead_count: 29
  capacity_constraints: marketing proof assets available, CO2 source not approved
calendar_context:
  available_slots: [2026-06-23 15:00, 2026-06-24 12:30]
  existing_conflicts: none
assistant_expected_output:
  diagnosis: explicit climate motive plus partner ROI proof need
  next_best_action: email stakeholder summary with cost and impact side by side; block CO2 number until source approved
  preparation_assets: impact card with pending source warning, ROI assumptions refresh, future heat-pump phase note
  scheduling_recommendation: optional 15-minute joint review after summary
  debrief_questions: Did partner challenge impact or cost assumptions? Is heat pump phase real or aspirational?
  avoid: climate-only pitch, unsupported CO2 number, guilt-based language
source_logic: A7-E03, A7-E04, A7-E08, A7-E13
```

```yaml
customer_id: MC-006
customer_name: Thomas Richter
country: Germany
region: Berlin
language: de
home_type: detached house
household_context: asked for time to compare offers
decision_makers: Thomas and external energy advisor
preferred_channel: customer portal and email
communication_constraints: email consent present; phone consent absent; customer requested no calls this week
current_energy_context: 5,100 kWh/year; existing small PV; wants expansion and battery
stated_motivations: compare offer with advisor, avoid overpaying, increase self-consumption
stated_concerns: multiple variants are confusing
persona_hypotheses: [Technical-Control Optimizer, ROI and Cost-Control Planner, Risk and Trust Skeptic]
persona_confidence: medium
quote:
  quote_id: Q-MC-006
  quote_date: 2026-06-07
  product_scope: PV expansion plus battery
  system_size: 6.0 kWp additional
  battery_included: true
  heat_pump_or_ev_scope: none
  total_cost: EUR 24,200
  financing_terms: none
  estimated_savings: preliminary
  payback_period: preliminary
  incentives_included: feed-in assumptions need existing PV check
  assumptions: taxpayer/system-size and existing PV details unknown
  quote_valid_until: 2026-07-07
crm_timeline:
  - date: 2026-06-07
    event_type: offer_sent
    summary: three variants sent
  - date: 2026-06-19
    event_type: customer_reply
    summary: requested time until advisor review next week and no calls
behavioral_signals: explicit review time request
known_objections: [needs_itemized_quote, co_decision_maker_summary, pause_no_followup]
competitor_mentions: advisor comparing alternatives
installer_context:
  company_size: 52 employees, multi-location
  active_lead_count: 74
  capacity_constraints: sales owner and technical planner separate
calendar_context:
  available_slots: [2026-06-30 11:00, 2026-07-01 16:00]
  existing_conflicts: technical planner full until 2026-06-28
assistant_expected_output:
  diagnosis: healthy comparison state; do not pressure; advisor needs clean summary
  next_best_action: prepare simplified recommended-plan summary and pause outreach until agreed review date
  preparation_assets: one recommended variant, two alternatives max, assumptions appendix, advisor summary
  scheduling_recommendation: follow-up email on 2026-06-30 with review-call slots, no phone
  debrief_questions: Did advisor object to battery, feed-in, existing PV, or price? Which variant remains?
  avoid: repeated reminders, calls, countdown urgency, too many variant details
source_logic: A7-E05, A7-E06, A7-E13, A7-E16
```

## Guardrails And Compliance Constraints

Hard gates:

1. Do not recommend or generate phone, voicemail, email, SMS, WhatsApp, or tracking-based scoring unless `channel_allowed(channel, purpose)` passes. Source: A7-E07.
2. Do not use email opens, clicks, or proposal views as intent signals without separate tracking consent. Source: E04-022, A6-E02.
3. Do not generate ROI, payback, feed-in, subsidy, finance, tax, timeline, or CO2 claims without source, checked_at, and required inputs. Source: A7-E04, A7-E08.
4. Do not use artificial urgency. Real urgency needs a source and expiration. Source: E05-021.
5. Do not fabricate local proof, testimonials, references, rankings, reviews, or customer stories. Source: A7-E12, A7-E16.
6. Do not infer income, family status, vulnerability, gender roles, age, or technical ability from demographics. Source: A7-E03, A7-E16.
7. Do not continue pressure after opt-out, negative sentiment, requested review time, or repeated stale no-response without new value-add. Source: A6-E13.

Soft warnings:

- Show `claim_stale` when market facts are older than the configured freshness policy.
- Show `local_subsidy_unverified` unless official local program page is checked for the address.
- Show `proposal_event_inferred` when using mocked section-level engagement not confirmed in Reonic.
- Show `prediction_unvalidated` for ghosting/close-readiness scores.

## What The Assistant Should Not Do

- It should not be a generic drip-campaign writer.
- It should not push signature before explaining the blocker.
- It should not present personas as labels like "family" or "investor" without evidence and nuance.
- It should not treat positive consultation sentiment as close readiness when competitor offers or price gaps exist.
- It should not use one national yield, tariff, or payback constant for all Germany.
- It should not promise "100 percent independent", "free solar", guaranteed bill elimination, guaranteed export revenue, or guaranteed subsidy.
- It should not dismiss winter, roof, battery, heat-pump, or aftercare objections with generic reassurance.
- It should not recommend in-person visits as the default for every stalled quote.
- It should not hide material assumptions, exclusions, bauseits items, payment milestones, external dependencies, or aftercare limits.
- It should not update strategy without a debrief or explicit skipped-debrief reason.

## Top PoC Demo Scenarios

| Scenario | Demo goal | Must show | Success metric |
| --- | --- | --- | --- |
| ROI/comparison PV plus battery lead | Show proof-first follow-up instead of generic nurture. | Assumption-blocked ROI, competitor comparison, email consent, no tracking, document request. | Installer understands why ROI claim is blocked and can send safe request in under 2 minutes. |
| Multi-tech autarky lead | Show strategic system roadmap. | PV+battery+wallbox, EV load, phased vs full bundle, virtual consult, WhatsApp logistics with consent. | Installer books consult and captures battery motive in debrief. |
| PV plus heat pump winter/monthly burden | Show technical/economic blocker routing. | Heat-load missing, winter chart needed, customer-requested callback, specialist schedule. | Customer-facing output avoids unsupported savings and schedules specialist call. |
| Roof/aftercare trust skeptic | Show trust repair and visit ROI. | Roof photo missing, aftercare proof, route-aware visit hold, no phone consent. | Assistant recommends photo/proof first and justifies visit only if needed. |
| Climate plus partner ROI review | Show mixed motive handling. | CO2 impact card blocked until approved source, partner summary, cost-plus-impact framing. | Assistant produces balanced stakeholder summary without unsupported CO2. |
| Advisor comparing variants | Show pause/no-pressure and simplification. | Requested review time, no-call constraint, advisor summary, recommended plan plus alternatives. | Assistant pauses correctly and schedules follow-up on agreed date. |

## Success Metrics

PoC product quality metrics:

- Time for installer to understand the recommended action: target under 30 seconds in demo testing.
- Time to execute recommended safe action: target under 2 minutes for email/document request/call scheduling.
- Percentage of recommendations with visible source/confidence/guardrail rationale: target 100 percent.
- Percentage of generated customer-facing outputs passing consent and claim checks: target 100 percent.
- Debrief completion rate in prototype test: target to be validated; design for 3 clicks plus optional note.

Business/outcome metrics for pilot:

- Next-step booked rate.
- Completed review/consultation rate.
- Quote-to-contract conversion.
- Time from quote sent to signed/lost.
- Lost-reason capture rate.
- Proposal revision completion rate when clarity blocker exists.
- Document upload completion rate when claim blocked.
- Opt-out, complaint, and negative sentiment rates as guardrails.

Learning metrics:

- Manual override reasons.
- Recommendation accepted vs changed.
- Persona/blocker score accuracy from debrief.
- A/B test eligibility volume.
- Outcome coverage for model calibration.

## Unresolved Evidence Gaps

The largest gaps are internal, not internet-search gaps:

- Actual Reonic schema for consent, communication history, calendar writeback, proposal events, tasks, and debrief.
- Legal classification of quote-stage service communications vs advertising in Germany.
- Outcome-linked data for ghosting risk, close readiness, action priority, cadence, and persona weights.
- Which proof assets Reonic-connected installers can actually provide and legally use.
- Heat-pump module priority and line-item checker details.
- Market-fact freshness policy for tariffs, subsidies, finance, tax, CO2, and installation timelines.
- Installer capacity, travel thresholds, and route-cluster rules.
- Minimum debrief fields installers will complete.
