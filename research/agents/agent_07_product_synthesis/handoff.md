# Handoff: Agent 7 - Product Synthesis

## Status

- Completed:
  - Synthesized local outputs from Agents 0, 1, 2, 4, 5, and 6.
  - Wrote source records in `sources.md` for each upstream bundle.
  - Wrote product-synthesis evidence records in `evidence.md`.
  - Wrote product findings, core workflow, state machine, data model, rules, guardrails, mock CRM scenarios, and metrics in `findings.md`.
  - Wrote open questions and validation backlog in `open_questions.md`.
- Partially completed:
  - Mock CRM records are included inside `findings.md` rather than separate files because the user requested only the five Agent 7 files.
  - A/B testing is specified as instrumentation and demo cards, not as a validated conversion model.
- Not completed:
  - No new broad internet research.
  - No Agent 3 dependency integration inside this Agent 7 output; Agent 3 completed afterward and is integrated in the top-level deliverables and `RESEARCH_SUMMARY.md`.
  - No legal review, Reonic private schema review, or internal CRM outcome validation.

## Most Important Findings

- Finding: Build a Next Best Action assistant, not a sequence-only generator.
  - Confidence: medium-high.
  - Germany relevance: high.
  - Source IDs: A7-E01; A0-E02, A0-E14, E05-020, A6-E01, A6-E16.
  - Product implication: Main UX should diagnose blocker, show why, gate consent/claims, create or schedule action, and capture debrief.

- Finding: The primary PoC scope should be German residential 360 Haushalt, with PV plus battery as the base and heat pump/wallbox as variants.
  - Confidence: high for public positioning; medium for actual module mix.
  - Germany relevance: high.
  - Source IDs: A7-E02; A0-E01, A0-E13, E09, VOC-E07, VOC-E09.
  - Product implication: Demo data should cover PV+battery, PV+battery+wallbox, and PV+heat-pump scenarios.

- Finding: Persona logic should use motive and blocker scores, not demographic personas.
  - Confidence: high for ROI/risk; medium for climate/autarky/system builder; unknown for family-as-persona.
  - Germany relevance: high.
  - Source IDs: A7-E03; E01, E02, E04, E16, E18.
  - Product implication: Show top motive, top blocker, evidence chips, confidence, and a clarifying question.

- Finding: Proposal clarity, ROI assumptions, trust repair, channel consent, and claim freshness are hard gates before persuasion.
  - Confidence: high for proposal/consent/claim gates; medium-high for trust actions.
  - Germany relevance: high.
  - Source IDs: A7-E04, A7-E05, A7-E06, A7-E07, A7-E08.
  - Product implication: Add blocker states such as `needs_itemized_quote`, `roi_claim_blocked_missing_assumptions`, `trust_repair_needed`, `channel_blocked`, and `facts_stale`.

- Finding: Predictions must remain explainable hypotheses until outcome data validates them.
  - Confidence: high that validation is missing.
  - Germany relevance: high.
  - Source IDs: A7-E14; A0-E15, E05-014, E05-015, A6-E15, A6-E16.
  - Product implication: Label ghosting risk and close readiness as unvalidated, show factors, and collect debrief/outcomes.

## Strongest Sources

- Source ID: A7-S01
  - Why it matters: Defines Reonic-native workflow, quote objects, CRM/task/calendar context, and public product scope.

- Source ID: A7-S04
  - Why it matters: Provides Germany-specific economics, market-fact freshness needs, grid/paperwork requirements, and channel/tracking compliance.

- Source ID: A7-S06
  - Why it matters: Converts upstream evidence into the action taxonomy, scheduling rules, and debrief loop the PoC should implement.

- Source ID: A7-S03
  - Why it matters: Supplies German customer language and objection categories for blocker detection and proof selection.

- Source ID: A7-S05
  - Why it matters: Defines ethical red lines, balanced objection handling, proof/claim constraints, and A/B test instrumentation.

## Weak Or Risky Claims

- Claim: Exact ghosting risk or close-readiness score.
  - Why weak: No internal CRM outcomes or validated model.
  - How to validate: Export anonymized quote history with actions, channels, objections, consent state, debrief, and signed/lost outcomes.

- Claim: Exact cadence by channel.
  - Why weak: Germany post-quote PV cadence evidence is missing; speed evidence is indirect and mostly US/inbound.
  - How to validate: Pilot conservative cadence with opt-out/complaint guardrails and compare next-step/signed outcomes.

- Claim: Personalized video improves conversion.
  - Why weak: Useful blocker fit but no German post-quote video evidence.
  - How to validate: A/B test video vs written summary for complex eligible leads.

- Claim: In-person visit threshold.
  - Why weak: Field-service routing logic transfers, but solar-specific travel/deal thresholds are unknown.
  - How to validate: Compare travel minutes, route fit, visit reason, lead value, and outcomes.

- Claim: Public proof assets or references can be shown.
  - Why weak: Permission, freshness, project similarity, and sponsorship status are unknown.
  - How to validate: Build approved proof asset inventory with Reonic/installers.

## Product Implications

- Persona implications:
  - Implement motive scores for ROI, independence/autarky, climate, technical control, and system builder.
  - Implement blocker scores for proposal clarity, ROI assumptions, price shock, battery value, winter performance, heat-pump monthly burden, roof/property risk, trust pressure, aftercare, competitor comparison, and stakeholder review.
  - Do not infer family, income, age, gender, vulnerability, or technical literacy from demographics.

- Objection implications:
  - Proposal clarity and ROI claims should block generic follow-up.
  - Battery objections need motive clarification: ROI, autarky, backup, future flexibility.
  - Heat-pump objections need operating-cost, heat-load, building-readiness, and subsidy/finance checks.
  - Trust objections need named owner, proof of responsibility, aftercare path, and low-pressure CTA.

- Action and scheduling implications:
  - Start with these action types: revised proposal, document request, ROI/finance explainer, call, virtual consultation, in-person visit, proof asset, SMS/WhatsApp logistics with consent, pause, escalation.
  - Schedule against owner capacity and travel; visits require explicit justification.
  - Require debrief after every completed action.

- Data model implications:
  - Required objects: customer/household, quote/options, economics/market facts, consent, communication, engagement, proof assets, action, calendar, debrief, outcome.
  - Must store source and checked_at metadata for claims.
  - Must separate send consent from tracking consent.

- UX implications:
  - Main screen: quoted-customer detail with assistant panel.
  - Secondary screens/states: worklist, diagnosis drawer, proof/action composer, schedule slot picker, claim/consent warnings, debrief modal, optional experiment card.
  - Use confidence labels and evidence chips throughout.

- Compliance implications:
  - Implement `channel_allowed(channel, purpose)` as a hard gate.
  - Suppress unconsented calls, SMS, WhatsApp, promotional email, voicemail, and tracking-based scoring.
  - Refuse or rewrite artificial urgency, unsupported savings, fake proof, and pressure language.

## Handoff To Product/Implementation

- Recommended product rule: `next_action = blocker_resolving_action` only after checking consent, proof availability, claim safety, installer capacity, and travel impact.
- Recommended product rule: If `proposal_clarity_score = low`, recommend revised proposal/addendum before additional nurture.
- Recommended product rule: If ROI/winter/battery/finance claim inputs are missing or stale, create document request or market-fact verification task.
- Recommended product rule: If `channel_allowed = false`, suppress that draft and show the missing consent/opt-out/purpose reason.
- Recommended product rule: If customer asked for time or there is no new value-add, recommend pause with resume condition.

- Required mock data:
  - Six scenario records in `findings.md`: ROI/comparison PV+battery, autarky multi-tech, PV+heat-pump winter/monthly burden, roof/aftercare trust risk, climate plus partner ROI review, advisor comparison/pause.
  - Consent matrix per record.
  - Claim checked_at/source fields.
  - Action/calendar/debrief fields.

- Required UI state:
  - `needs_itemized_quote`
  - `roi_claim_blocked_missing_assumptions`
  - `winter_chart_needed`
  - `battery_now_vs_later`
  - `heat_pump_monthly_burden`
  - `trust_repair_needed`
  - `competitor_comparison_active`
  - `co_decision_maker_summary`
  - `channel_blocked`
  - `visit_justified`
  - `visit_not_justified`
  - `pause_no_followup`
  - `debrief_required`

- Open question:
  - The single highest-risk dependency is legal/product classification of service vs advertising communication in Germany, combined with whether Reonic already stores consent and tracking provenance.
