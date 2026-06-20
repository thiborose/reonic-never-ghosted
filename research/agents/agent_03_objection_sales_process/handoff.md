# Handoff: Agent 3 - Objection And Sales Process

## Status

Completed:

- Source records for upstream evidence bundles and direct original-source anchors.
- Evidence items for quote-stage blockers, economic objections, proposal clarity, trust, battery/winter/heat-pump issues, roof risk, paperwork, consent, scheduling, and debrief.
- Objection library with detection signals, proof assets, next actions, avoid rules, confidence, and source traceability.
- Required CRM fields and sales-process state machine.

Not completed:

- No internal Reonic CRM, sales notes, call transcripts, win/loss reasons, or contract outcomes were available.
- No direct German PV/heat-pump quote-stage A/B test was found or run.
- No legal review of exact post-quote service vs advertising message classifications was performed.
- No installer interview validation of objection frequency, capacity thresholds, or cadence.

## Most Important Findings

| Finding | Source IDs | Confidence | Germany relevance | Limitations | Product implication |
| --- | --- | --- | --- | --- | --- |
| Post-quote strategy should be blocker-led, not template-led. | A3-E01, A3-S01, A3-S02, A3-S03, A3-S05, A3-S06 | high for need; medium for exact weights | High | No Reonic outcome model. | Show diagnosis before action generation. |
| Proposal clarity is one of the strongest action triggers; revise the offer before more persuasion when scope/assumptions are unclear. | A3-E03, A3-S03, A3-S05, A3-S06, A3-S11 | high | High | Needs structured quote fields. | Add proposal-clarity score and itemized addendum action. |
| Economic objections must be split into upfront price, liquidity, ROI assumptions, competitor comparison, and battery/system value. | A3-E02, A3-E04, A3-E06 | medium-high | High | Public data does not rank prevalence. | Route each subtype to different proof assets. |
| Trust objections require human clarity: named owner, fast answer to actual question, responsibility breakdown, local proof, and low-pressure tone. | A3-E05, A3-E12 | medium-high | High | Review evidence is biased. | Prefer trust-repair call/recap over automated sequence. |
| Winter/heat-pump/roof concerns need technical proof or missing-data requests, not generic reassurance. | A3-E07, A3-E08 | medium-high | High | Site-specific inputs required. | Add seasonal chart, heat-load status, roof inspection, and claim-blocked states. |
| Consent gates and claim checks are mandatory in Germany. | A3-E10, A3-E13 | high | High | Legal review still needed. | Suppress unsafe channels and unsupported claims. |
| Debrief is the bridge from public research to validated Reonic playbooks. | A3-E15 | high | High | Adoption depends on low-friction UX. | Capture blocker, customer language, next commitment, lost reason, and override reason. |

## Strongest Objection Rules For Product Synthesis

- If `proposal_clarity_score = low`, create `revised_proposal` or `itemized_addendum`.
- If `roi_assumption_blocker = true`, create `roi_assumptions_review` if data is present; otherwise `document_request`.
- If `liquidity_blocker = true`, create `finance_explainer` with legal and rate caveats.
- If `competing_offer_count > 0`, create `comparison_matrix` and ask which dimension matters most.
- If `trust_risk_score = high`, create a named human action with low-pressure agenda and responsibility proof.
- If `battery_value_blocker = true`, create `battery_now_vs_later` scenario.
- If `winter_or_heatpump_blocker = true`, create `seasonal_or_monthly_energy_scenario`.
- If `roof_property_risk = true`, recommend technical proof or visit only when physical inspection is necessary.
- If `channel_allowed = false`, do not generate that channel.
- If repeated no-response has no real deadline or value-add, pause.

## Required Mock Data

- Quote:
  - total price, line items, exclusions, labor/scaffold/grid/admin status, optional variants, quote validity, signature status.
- Economics:
  - electricity tariff, feed-in tariff, self-consumption assumption, battery size/cost, production yield, payback range, finance option, subsidy status, claim verification timestamp.
- Customer:
  - notes containing explicit motive/objection language, decision-maker/advisor note, competitor mention, channel preference.
- Trust/process:
  - assigned owner, response age, unanswered questions, promised next step, local proof assets, aftercare proof, responsibility matrix.
- Technical:
  - roof risk flags, roof photo status, meter photo status, winter chart status, heat-load status, EV/heat-pump/future load plans.
- Compliance:
  - channel consent matrix, tracking consent, opt-out, purpose of message.
- Debrief:
  - action outcome, resolved/remaining objection, customer language, next commitment, lost reason, override reason.

## Required UI States

- `needs_itemized_quote`
- `roi_claim_blocked_missing_assumptions`
- `finance_claim_needs_current_check`
- `competitor_comparison_needed`
- `trust_repair_needed`
- `battery_now_vs_later_needed`
- `winter_chart_needed`
- `heat_load_or_monthly_burden_needed`
- `roof_inspection_or_mounting_proof_needed`
- `paperwork_status_update_needed`
- `co_decision_maker_summary_needed`
- `channel_unavailable_missing_consent`
- `pause_recommended_no_value_add`
- `debrief_required`

## Weak Or Risky Claims

- Exact objection ranking is not validated. Public forums/reviews are useful for language and categories, not prevalence.
- Offer opens/views should not be treated as strong intent signals without outcome validation and tracking consent.
- Specific cadence rules should be treated as hypotheses.
- In-person visit ROI thresholds should be configurable until installer outcome data exists.
- Personalized video is a useful visual-proof hypothesis, not a proven German quote-stage tactic.

## Handoff To Product Synthesis

The assistant should act like a sales-process coach embedded in the quoted-customer view:

1. Explain the likely blocker from quote data, notes, communication history, and missing proof.
2. Check compliance and claim readiness.
3. Recommend one action that resolves the blocker.
4. Prepare the proof asset, script, message, or revised proposal.
5. Schedule it based on capacity and travel cost.
6. Capture debrief and update the strategy.

This means the PoC should not demo "generate a 5-email sequence" as the main feature. The stronger demo is a Germany-aware next-best-action loop that can generate an email when email is right, but can also recommend a call, document request, proposal revision, virtual consult, in-person inspection, pause, or escalation.
