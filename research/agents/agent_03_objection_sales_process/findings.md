# Findings: Agent 3 - Objection And Sales Process

Status: completed by main agent on 2026-06-20.

## Executive Findings

1. The post-quote sales process should be blocker-led. The assistant should diagnose the current blocker and choose the lowest-pressure action that resolves it. Evidence: A3-E01, A3-E13.
2. Economic hesitation is not one thing. Separate upfront affordability, financing/monthly burden, ROI/payback distrust, competing-offer comparison, and battery value. Evidence: A3-E02, A3-E04, A3-E06.
3. Proposal clarity is a high-confidence action trigger. If scope or assumptions are unclear, revise the proposal before sending more persuasion. Evidence: A3-E03.
4. Trust and process objections deserve first-class treatment: pressure, response delays, unclear identity, vague responsibility, aftercare doubts, external delays, and roof risk can block signing. Evidence: A3-E05, A3-E08, A3-E09.
5. Germany-specific compliance and claim safety must shape the sales process: channel consent, tracking consent, current tariffs/subsidies, and factual urgency are gates, not afterthoughts. Evidence: A3-E10, A3-E13.
6. The PoC should use public evidence as a starting playbook and debrief outcomes as the learning mechanism. Exact objection prevalence, cadence, and predictive weights remain unvalidated. Evidence: A3-E15.

## Objection Library

| Objection ID | Objection | Detection signals | Proof needed | Best next action | Avoid | Confidence | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| O01 | Upfront price shock | High quote total, asks "too expensive", no reply after total price, requests discount | Itemized value breakdown, scope explanation, benchmark only if current and comparable | Revised proposal/addendum or short value call | Discount email before explaining scope | high for blocker; medium for prevalence | A3-E02, A3-E03 |
| O02 | Liquidity / financing | Mentions cash constraint, monthly budget, financing, rental, KfW, "hard to implement financially" | Monthly and total-cost comparison, financing caveats, eligibility check | Financing explainer plus pre-check task | Implied approval, stale rates, hidden total cost | medium | A3-E02, A3-E13 |
| O03 | ROI/payback distrust | "lohnt sich", payback challenge, asks assumptions, inconsistent competitor calculations | Assumption table, self-consumption, tariff, feed-in, sensitivity range | 15-minute assumptions review or annotated ROI summary | Guaranteed payback, feed-in-only ROI, unsupported IRR | high | A3-E02, A3-E13 |
| O04 | Competing offer comparison | Mentions another installer, price gap, referral, quote comparison, long silence after asking others | Comparison matrix, scope differences, excluded items, proof of service/quality | Ask for comparison dimensions; send itemized matrix or review call | Badmouthing competitor, vague "we are better" | medium | A3-E04, A3-E03 |
| O05 | Proposal clarity / bundle suspicion | Bundled PV/battery/wallbox/labor/admin, unclear exclusions, missing line items, unclear variants | Itemized components, labor/scaffold/grid/admin, options, assumptions, payment milestones | Revised proposal/addendum | Another "checking in" message | high | A3-E03 |
| O06 | Installer trust / pressure | Negative sentiment, concern about pushiness, unclear contact identity, informal tone mismatch, no clear owner | Named contact, clear role, low-pressure agenda, responsibility matrix, local proof | Trust-repair call or clear written recap | Artificial urgency, repeated closers, casual tone if not preferred | medium-high | A3-E05 |
| O07 | Responsiveness / continuity | Customer question unanswered, multiple owners, delayed quote, promised follow-up missed | Owner assignment, answer SLA, summary of open questions, next commitment | Prioritized callback/email response | New marketing sequence before answering question | medium-high | A3-E05, A3-E12 |
| O08 | Battery value / sizing | Questions storage payback, winter use, battery size, adding later, autonomy target | Battery sizing card, self-consumption/autarky range, now-vs-later scenario | Battery scenario comparison | Generic battery upsell, "100% independent" claim | medium | A3-E06 |
| O09 | Winter / shade / seasonal output | Mentions winter, cloudy weather, shading, heat pump winter load | Seasonal production chart, roof/shading assumptions, monthly energy view | Technical call/video with chart | Blanket "panels work in winter" reassurance | medium-high | A3-E07 |
| O10 | Heat-pump monthly burden / building fit | PV+heat-pump quote, old heating, concerns about electricity bill, radiators, insulation, heat load | Heat-load status, expected JAZ/COP, monthly scenario, building-readiness checklist | Virtual consultation or site/technical visit if physical facts needed | Generic heat-pump savings claims | medium-high | A3-E07 |
| O11 | Roof/property damage risk | Roof age, leak concern, mounting concern, old tiles, asks about insurance/warranty | Inspection checklist, mounting method, warranty/insurance boundaries, references | Site inspection or technical proof call | Vague "no problem" answer | medium | A3-E08 |
| O12 | Paperwork/grid/admin uncertainty | Asks about grid connection, meter, MaStR, subsidy, VNB, timeline, who handles what | Paperwork checklist, dependency owner, status, realistic timeline | Process walkthrough/status update | Absolute timeline promises | high for Germany process need | A3-E09 |
| O13 | Aftercare/support concern | Asks what happens after commissioning, monitoring, handover, support, warranty | Handover checklist, support contact, monitoring setup, warranty/service scope | Aftercare proof email or call | "Rundum-sorglos" without details | medium | A3-E08, A3-E05 |
| O14 | Co-decision-maker / advisor review | "Need to discuss", partner/family/advisor mentioned, proposal forwarded, no all-stakeholder meeting | Shareable summary, short decision memo, joint call invite | Stakeholder summary or joint call | Inferring family status; pressure to decide alone | medium when explicit | A3-E11 |
| O15 | Ghosting / no response after quote | Quote sent/opened but no reply, stale task, no explicit objection | Last known blocker, value-add single question, consent-safe channel, pause rule | One useful nudge or pause/resume condition | Repeated generic follow-ups | medium-low for routing; low for prediction | A3-E12, A3-E15 |

## Sales-Process State Machine

```text
quote_sent
  -> diagnose_signal
  -> if claim_data_missing: request_document_or_mark_claim_blocked
  -> if proposal_clarity_low: revise_proposal
  -> if consent_missing_for_best_channel: choose eligible alternative or request preference
  -> if blocker_known: choose blocker_resolving_action
  -> schedule_action_with_capacity
  -> execute_action
  -> debrief
  -> update persona_scores, objection_tags, proof_status, readiness, next_commitment
  -> repeat, close_won, close_lost, or pause
```

## Routing Rules

| Rule | Product behavior | Evidence | Confidence |
| --- | --- | --- | --- |
| If `proposal_clarity_score = low`, route to revised proposal/addendum before message generation. | Generate missing-line-item checklist and owner task. | A3-E03 | high |
| If `roi_assumption_blocker = true` and required assumptions are available, route to ROI review. | Generate assumption table and sensitivity; schedule call or email summary. | A3-E02, A3-E13 | high |
| If ROI data is missing, route to document/data request. | Ask for bill, tariff, meter photo, roof/heat-load info, or competitor quote only when needed. | A3-E07, A3-E13 | high |
| If `liquidity_blocker = true`, route to finance/monthly-burden explainer. | Show total cost, monthly view, caveats, and pre-check path. | A3-E02 | medium |
| If `trust_risk_score = high`, prefer human trust repair over automated email. | Use named contact, agenda, local proof, no-pressure CTA. | A3-E05 | medium-high |
| If `battery_value_blocker = true`, generate battery-now vs battery-ready-later comparison. | Include right-sizing, future loads, autonomy target, and cost range caveats. | A3-E06 | medium |
| If `winter_or_heatpump_blocker = true`, generate seasonal/monthly scenario. | Use postcode/roof/heat-load inputs; otherwise request missing data. | A3-E07 | medium-high |
| If `roof_property_risk = true`, consider in-person visit only when physical inspection is needed. | Show visit purpose, travel impact, and expected unlocked decision. | A3-E08, A3-E14 | medium |
| If channel consent is absent, suppress that channel. | Recommend eligible alternative and show missing consent reason. | A3-E10 | high |
| If no response after value-add touch and no real deadline exists, pause rather than pressure. | Set resume condition and avoid generic cadence churn. | A3-E12, A3-E15 | medium |

## Required CRM Fields

| Field | Type | Why needed | Evidence |
| --- | --- | --- | --- |
| `objection_tags[]` | enum list | Keep blockers separate and updateable. | A3-E01 |
| `primary_blocker` | enum | Drives next action. | A3-E01 |
| `liquidity_blocker` | boolean/score | Distinguish affordability from ROI. | A3-E02 |
| `roi_assumption_blocker` | boolean/score | Route to calculations. | A3-E02 |
| `proposal_clarity_score` | low/medium/high | Detect revise-before-persuade cases. | A3-E03 |
| `competing_offer_count` | integer | Detect comparison stage. | A3-E04 |
| `competitor_mentions` | text/list | Support comparison matrix and lost-reason tags. | A3-E04 |
| `trust_risk_score` | score | Route to named human/proof. | A3-E05 |
| `assigned_contact_continuity` | boolean/score | Continuity is a trust signal. | A3-E05 |
| `battery_interest_reason` | enum | ROI, autarky, backup, future loads, unsure. | A3-E06 |
| `winter_chart_status` | missing/available/sent | Needed for winter/heat-pump objections. | A3-E07 |
| `heat_load_status` | missing/preliminary/verified | Needed for heat-pump quote confidence. | A3-E07 |
| `roof_property_risk_flags[]` | list | Drives inspection/proof. | A3-E08 |
| `paperwork_status` | object | Shows VNB/MaStR/meter/subsidy owner and status. | A3-E09 |
| `channel_consent_matrix` | object | Germany channel gate. | A3-E10 |
| `decision_makers_note` | text | Stakeholder-review handling. | A3-E11 |
| `last_promised_next_step_at` | datetime | Prioritize commitments. | A3-E12 |
| `debrief_required` | boolean | Learning loop. | A3-E15 |

## Debrief Questions

Use three required clicks plus optional note:

1. What was the actual blocker after the action?
2. What commitment or next step did the customer make?
3. Outcome label: `resolved`, `still_evaluating`, `needs_data`, `competitor_risk`, `not_interested`, `lost_price`, `lost_trust`, `paused`, `signed`.

Optional notes:

- Customer wording.
- New decision-maker/advisor.
- New competitor or price anchor.
- Missing proof asset.
- Installer override reason.

## Claim And Compliance Guardrails

- Do not generate phone/SMS/WhatsApp outreach unless the channel and purpose are eligible.
- Do not use email open/click data for scoring unless tracking consent is available.
- Do not use unsupported urgency. Real urgency needs a source: quote validity, verified subsidy deadline, tariff window, customer-stated deadline, or actual installer capacity.
- Do not claim guaranteed savings, guaranteed bill elimination, guaranteed payback, universal battery ROI, or universal heat-pump savings.
- Do not fabricate local references, reviews, credentials, or customer stories.
- Do not infer age, family status, income, vulnerability, or household composition from indirect signals.
