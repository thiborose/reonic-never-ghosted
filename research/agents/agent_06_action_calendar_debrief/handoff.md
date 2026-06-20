# Handoff: Agent 6 - Action, Calendar, And Debrief

## Status

Completed:

- Source records for upstream evidence bundles and targeted channel/scheduling sources in `sources.md`.
- Extracted action, compliance, scheduling, travel, and debrief evidence in `evidence.md`.
- Practical next-best-action playbook, capacity rules, travel-time tradeoffs, and template-compatible action/debrief records in `findings.md`.
- Open questions and validation needs in `open_questions.md`.

Not completed:

- No new broad research after source gathering.
- No legal review of service vs advertising classifications.
- No Reonic/internal CRM validation of timing, cadence, scoring weights, or travel thresholds.
- No installer interviews to calibrate actual owner-led capacity.

## Most Important Findings

| Finding | Source IDs | Confidence | Germany relevance | Limitations | Product implication |
| --- | --- | --- | --- | --- | --- |
| The assistant should be an action orchestrator, not a message generator: diagnose blocker, gate channel consent, choose a low-pressure action, schedule it, debrief it, and update strategy. | A6-E01, A6-E02, A6-E16; A6-S01, A6-S02, A6-S03, A6-S04 | medium-high | High for German post-quote residential renewable sales. | No outcome-linked Reonic data yet. | Build a quoted-customer action panel with diagnosis, consent status, next action, prep asset, schedule slot, and debrief. |
| Consent is a hard product gate for calls, voicemail, email, SMS, WhatsApp, and tracking-based scoring. | A6-E02; A6-S03, A6-S05, A6-S06 | high | High; Germany-specific legal/regulator sources plus WhatsApp policy. | Counsel must classify exact service vs advertising cases. | Implement `channel_allowed(channel, purpose)` and visible "channel unavailable" explanations. |
| Proposal revision or itemized addendum should happen before more persuasion when quote clarity is the blocker. | A6-E08; A6-S01, A6-S02, A6-S04 | high | High; supported by Germany consumer guidance and quote discussions. | Requires line-item and assumption data. | Add `proposal_clarity_score`, `needs_itemized_quote`, comparison matrix, assumptions drawer, and revision task. |
| In-person visits should not be the default. They are justified by physical inspection need, high trust risk, high value/readiness, or route efficiency; otherwise prefer email, document request, call, video, or virtual consultation. | A6-E11, A6-E12, A6-E15; A6-S07, A6-S08, A6-S09 | medium | Medium-high; operations logic transfers, German installer validation needed. | No solar-specific threshold for travel minutes or deal value. | Add visit ROI score, travel penalty, route cluster score, virtual alternative, and manual override reason. |
| Debrief is the learning loop: every action should capture customer language, new facts, objections, sentiment, next commitment, outcome label, and strategy update. | A6-E16; A6-S01, A6-S02, A6-S04 | medium-high | High for product design; outcome validation still needed. | Debrief must be short enough for small installers. | Use 3-click debrief plus optional notes; update CRM fields and recommendation model. |

## Recommended Product Rules

| Rule | Source IDs | Confidence | Germany relevance | Limitations | Product implication |
| --- | --- | --- | --- | --- | --- |
| `next_action = blocker_resolving_action` only after checking consent, proof availability, claim safety, capacity, and travel impact. | A6-E01, A6-E02, A6-E15 | medium-high | High. | Scoring weights unvalidated. | Display factor-level reasoning and allow installer override. |
| If `proposal_clarity_score = low`, recommend revised proposal/addendum before email/call pressure. | A6-E08 | high | High. | Needs quote structure. | Proposal quality checklist becomes a first-class action. |
| If `channel_allowed = false`, suppress generation for that channel and explain the missing consent or opt-out reason. | A6-E02 | high | High. | Legal edge cases need review. | Compliance badge and alternative action suggestions. |
| If `travel_time_high` and `physical_inspection_required = false`, recommend virtual consultation or personalized video before visit. | A6-E11, A6-E12, A6-E15 | medium | Medium-high. | Thresholds need installer data. | Calendar should compare travel-heavy and remote alternatives. |
| If action outcome is missing, keep the task open or require a "skipped debrief" reason before updating strategy. | A6-E16 | medium-high | High. | UX must not overburden users. | Debrief completion drives next recommendation quality. |

## Required Mock Data

| Data need | Source IDs | Confidence | Germany relevance | Limitations | Product implication |
| --- | --- | --- | --- | --- | --- |
| Consent matrix: phone, email, SMS, WhatsApp, tracking, source, timestamp, scope, opt-out, and purpose. | A6-E02 | high | High. | Legal classification still needed. | Required before any multi-channel recommendation. |
| Action object: type, reason, prep asset, owner, duration, due date, channel, compliance checks, success criteria, and debrief questions. | A6-E16 | medium-high | High. | Exact fields should be tested in Reonic UX. | Powers action cards and CRM tasks. |
| Calendar object: owner availability, working hours, action duration, travel time, start/end location, route cluster, conflicts, SLA, and manual override reason. | A6-E11, A6-E12, A6-E15 | medium | Medium-high. | Route thresholds need real installer data. | Powers capacity-aware scheduling. |
| Quote/proposal object: line items, exclusions, assumptions, variants, active option, quote validity, signature state, current market facts, and missing-data blockers. | A6-E08, A6-E09, A6-E10 | high | High. | Requires structured quote fields. | Enables proposal revision, finance explainer, and claim-blocked states. |
| Debrief object: completed, response, customer language, new facts, objections, sentiment, next commitment, outcome label, next task, and strategy update. | A6-E16 | medium-high | High. | Keep form short. | Feeds learning loop and outcome instrumentation. |

## Required UI States

| UI state | Source IDs | Confidence | Germany relevance | Limitations | Product implication |
| --- | --- | --- | --- | --- | --- |
| "Recommended action unavailable: phone consent missing" with compliant alternatives. | A6-E02 | high | High. | Needs legal wording. | Prevents unsafe channel generation. |
| "Needs itemized quote before follow-up" with missing line items and assumptions. | A6-E08 | high | High. | Needs quote schema. | Routes to revised proposal action. |
| "Virtual first: site visit not justified yet" with travel time and blocker reason. | A6-E11, A6-E12 | medium | Medium-high. | Thresholds unvalidated. | Reduces wasted travel for small installers. |
| "Visit justified" with physical-risk/high-value/route-cluster explanation. | A6-E12, A6-E15 | medium | Medium-high. | Needs route and outcome data. | Makes in-person visits intentional. |
| "Debrief required" after action completion. | A6-E16 | medium-high | High. | UX burden risk. | Captures learning data and next commitment. |

## Weak Or Risky Claims

| Claim | Why weak | Source IDs | Confidence | Germany relevance | Product implication |
| --- | --- | --- | --- | --- | --- |
| Personalized video improves German PV quote conversion. | No direct German post-quote video evidence was found; it is a useful hypothesis for visual explanation. | A6-E07 | low-medium | Medium for blocker fit, low for proven effect. | Make video optional and test it; do not present as best practice. |
| Specific call/SMS/WhatsApp cadence will improve close rate. | Existing evidence supports responsiveness and consent, not exact Germany PV cadence. | A6-E03, A6-E04, A6-E05, A6-E13 | low-medium | Medium-high. | Use caps and outcome tracking; calibrate later. |
| A fixed travel-time threshold determines whether a visit is worth it. | Field-service evidence supports travel-aware scheduling, not solar-specific thresholds. | A6-E11, A6-E12, A6-E15 | low-medium | Medium. | Let installer configure threshold and collect outcomes. |
| Offer opens/proposal views prove buying intent. | Tracking requires consent and public Reonic evidence does not link views to outcomes. | A6-E02, A6-S01, A6-S03 | low | High compliance relevance. | Treat engagement as hypothesis only and disable scoring without tracking consent. |

## Handoff To Product Synthesis

- Build the PoC around a "Next Best Action" card, not a sequence-only generator.
- The card should show: blocker, recommended action, why now, consent/channel eligibility, prep asset, schedule slot, capacity/travel impact, and debrief prompts.
- Start with these action types: email, SMS/WhatsApp, call, voicemail, personalized video, revised proposal, financing explainer, document request, virtual consultation, in-person visit, pause/no follow-up, and escalation.
- Use visible confidence labels: high for compliance/proposal-clarity/document-request rules; medium for call/virtual/visit routing; low-medium for video and cadence.
- Keep all scoring transparent and overrideable until Reonic outcome data validates it.
