# Findings: Agent 6 - Action, Calendar, And Debrief

Status: completed bounded pass on 2026-06-20. This playbook uses Agent 0, 2, 4, and 5 evidence plus the targeted channel/scheduling sources already logged in `sources.md`. No further research was added after the user instruction to finalize.

## Core Routing Rules

| Rule | Source IDs | Confidence | Germany relevance | Limitations | Product implication |
| --- | --- | --- | --- | --- | --- |
| Diagnose the blocker before choosing a channel: route by trust, proposal clarity, ROI/finance, technical uncertainty, missing data, co-decision-maker, silence, consent, and installer capacity. | A6-E01; A6-S01, A6-S02, A6-S04 | medium-high | High for German post-quote renewable sales because Reonic workflow and Germany VOC both support blocker-specific follow-up. | No Reonic CRM outcome data proves conversion lift yet. | Add a diagnosis panel that explains the recommended action from detected blocker, proof need, consent status, and calendar capacity. |
| Consent and channel eligibility are hard gates before calls, voicemail, email, SMS, WhatsApp, or tracking-based scoring. | A6-E02; A6-S03, A6-S05, A6-S06 | high | High. German consumer call/electronic-message rules apply; WhatsApp policy adds platform constraints. | Legal counsel must classify exact service vs advertising workflows. | Implement `channel_allowed(channel, purpose)` with consent source, timestamp, scope, opt-out, and separate tracking consent. |
| Use the lowest-pressure action that resolves the blocker; do not default to another nurture message. | A6-E01, A6-E13; A6-S02, A6-S04 | medium-high | High. Germany VOC flags pressure and tone risk. | Cadence caps need validation. | Recommend proposal revision, document request, proof asset, call, consultation, visit, pause, or escalation based on blocker and capacity. |
| Proposal revision beats persuasion when scope, line items, assumptions, variants, or comparison clarity are the blocker. | A6-E08; A6-S01, A6-S02, A6-S04 | high | High. German offer-check guidance and quote discussions support this directly. | Requires structured quote line items and assumption fields. | Add `proposal_clarity_score`, `needs_itemized_quote`, and revision/addendum workflow. |
| Travel-heavy actions must be justified by physical inspection need, high lead value/readiness, trust risk, or route density. | A6-E11, A6-E12, A6-E15; A6-S07, A6-S08, A6-S09 | medium | Medium-high. Operational logic transfers; thresholds need German installer validation. | No solar-specific travel threshold or close-rate evidence. | Show visit ROI: travel time, route cluster, lead value, close readiness, physical-risk need, and virtual alternative. |
| Every completed action needs a short debrief before strategy updates. | A6-E16; A6-S01, A6-S02, A6-S04 | medium-high | High for product learning; method is general. | Debrief length must stay small enough for owner-led installers. | Use 3-click debrief plus optional note; update objections, sentiment, next commitment, owner, due date, and outcome label. |

## Next-Best Action Playbook

| Action | Use when | Avoid or guardrail | Prep and debrief | Scheduling/capacity rule | Source IDs | Confidence | Germany relevance | Limitations | Product implication |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Email | Written proof, itemized addendum, finance explainer, shareable summary, or non-urgent clarification is needed and email is eligible. | Avoid relying on open tracking without tracking consent; avoid generic "checking in". | Prep proof/attachment and one clear next step. Debrief: reply? new objection? forwarded to partner? next commitment? | Batch into daily admin blocks; prioritize replies and promised follow-ups over cold/stale touches. | A6-E03 | medium | High when consent/service basis is valid. | No Germany PV cadence benchmark. | Generate purpose-specific email with claim checks and tracking-disabled fallback. |
| SMS/WhatsApp with consent | Customer explicitly prefers it, logistics are short, a document is missing, a slot needs confirmation, or a customer message can be answered inside allowed rules. | Must have consent/opt-in and honor opt-out; avoid long persuasion and unsupported claims. | Prep 1-screen message, identity, context, link/slot. Debrief: responded? booked/uploaded? opted out? | Use for quick low-duration tasks; do not substitute for complex ROI/technical explanation. | A6-E04 | medium-low | High for consent; performance unvalidated. | WhatsApp templates/API setup and legal basis need review. | Add WhatsApp/SMS eligibility, template status, last inbound time, and opt-out fields. |
| Call with consent | Complex objection, high-value quote, competitor comparison, trust repair, ROI walkthrough, winter/heat-pump question, or customer-requested callback. | Must be consented/requested; pressure risk is high if reason and agenda are unclear. | Prep agenda, proof assets, script, target outcome. Debrief: answered? objection resolved? sentiment? decision-maker present? next commitment? | Schedule 10-20 minute slots in response blocks; reserve senior owner time for high-readiness/high-value blockers. | A6-E05 | medium | High if call eligibility is valid. | Call timing/cadence not validated. | Create call task with eligibility badge, agenda, proof asset, and debrief form. |
| Voicemail | A consented/requested call was missed and a minimal callback marker is useful. | Do not leave persuasive sales pitch or claims; do not use without call eligibility. | Prep 10-20 second factual callback note. Debrief: voicemail left? callback received? attempt count? | Cap attempts and move to pause/compliant written channel if no response. | A6-E06 | low-medium | Medium; conservative Germany use. | Voicemail-specific legal/performance evidence not gathered. | Generate only short service-context voicemail scripts and track attempt caps. |
| Personalized video | Visual explanation helps: roof layout, variant comparison, winter chart, ROI assumptions, or spouse/advisor share-out. | Hypothesis, not proven; must include transcript/summary and claim checks. | Prep screen recording with proof sources. Debrief: reply? shared? new question? next meeting booked? | Use when it can replace a longer visit/call or help co-decision-makers asynchronously. | A6-E07 | low-medium | Medium for blocker fit; low for proven effect. | No direct German post-quote video evidence. | Make video optional asset type with transcript, proof sources, and tracking consent handling. |
| Revised proposal | Scope, line items, labor/scaffold/grid/admin, assumptions, variants, or competitor comparison are unclear. | Do not revise if blocker is actually trust, consent, or missing decision-maker. | Prep itemized addendum, changed assumptions, comparison matrix. Debrief: opened/reviewed if allowed? confusion reduced? price objection remains? | Assign to quote owner/planner; prioritize if quote is expiring or customer has active competing offers. | A6-E08 | high | High. | Needs structured quote data. | Add proposal-clarity score and one-click revision/addendum action. |
| Financing explainer | Customer signals upfront-cost, monthly-burden, KfW/loan, rental, or total-cost concern. | Do not imply approval, stale rates, closed grants, or legal/tax advice. | Prep monthly and total-cost view, assumptions, eligibility caveats. Debrief: blocker liquidity vs total value? finance precheck wanted? | Route to finance-capable owner; schedule after proposal clarity and before discount talk. | A6-E09 | medium | High if current Germany facts are checked. | Finance claims need legal/partner review. | Add finance blocker subtype and `finance_claim_checked_at`. |
| Document request | Missing electricity bill, meter/roof photo, heat-load data, tariff, competitor quote, co-decision-maker details, or subsidy/finance input blocks action. | Avoid asking for nonessential documents that add friction. | Prep minimal request and upload link. Debrief: uploaded? still missing? claim now unlocked? | Use short consented channel if allowed; otherwise email/customer portal. Prioritize documents that unblock safe claims. | A6-E10 | high | High. | Need define "needed now" vs "post-signature". | Add missing-data blocker, upload tasks, and claim-unblocked state. |
| Virtual consultation | Screen-share can resolve ROI, variant, winter, heat-pump, finance, or partner alignment without travel. | Avoid if physical roof/site inspection is necessary to answer the concern. | Prep agenda, charts, decision-maker invite. Debrief: attended? who joined? blocker resolved? next step? | Prefer over in-person when travel is high, lead value is moderate, or explanation is enough. | A6-E11 | medium | Medium-high. | No direct virtual vs in-person solar sales study. | Offer 20-minute agenda-driven slot with assets and co-decision-maker invite. |
| In-person visit | Physical inspection, roof/property risk, heat-pump/site constraints, trust repair, high lead value/readiness, or route cluster justifies travel. | Avoid for low-readiness stale leads, simple clarifications, missing consent, or poor route fit. | Prep inspection checklist, proof assets, route info. Debrief: site facts? trust improved? remaining objection? sign/date commitment? | Cluster by geography; require visit ROI score above threshold or manual override. | A6-E12 | medium | Medium-high. | Thresholds need installer data. | Add visit ROI, route cluster, travel penalty, and virtual alternative. |
| Pause/no follow-up | Customer opted out, lacks eligible channels, asked for review time, repeated touches added no value, or next action would be pressure. | Do not pause if an installer promised a next step or customer initiated a question. | Prep pause reason and resume condition. Debrief: why paused? resume date? value-add needed? | Put in future queue only if consent and value-add condition exist. | A6-E13 | medium-high | High. | Cadence caps need validation. | Add pause action with reason, resume date, and compliance badge. |
| Escalation | Technical, finance, subsidy/legal, manager trust repair, complaint risk, capacity conflict, or high-value exception exceeds current owner authority. | Avoid escalating routine questions that the assigned owner can resolve quickly. | Prep issue summary, evidence, customer quote, SLA. Debrief: owner accepted? answer delivered? next action? | Route by skill and SLA; escalate high-risk claims before customer-facing response. | A6-E14 | medium-high | High for owner routing; role names vary. | Need installer-specific role maps and SLAs. | Add escalation owner, reason, due date, customer status update, and return-to-sales debrief. |

## Scheduling And Capacity Rules

| Rule | Source IDs | Confidence | Germany relevance | Limitations | Product implication |
| --- | --- | --- | --- | --- | --- |
| Daily queue order should start with consent-safe customer-initiated replies, missed scheduled calls, promised next steps, and expiring/high-readiness offers before stale outbound touches. | A6-E15; A6-S01, A6-S03, A6-S04 | medium | High for German consent and Reonic workflow. | Exact weights need CRM data. | Build a priority queue with visible reasons and manual override. |
| Capacity scoring should subtract travel cost and add route density for site visits; it should not treat every in-person visit as best. | A6-E12, A6-E15; A6-S07, A6-S08, A6-S09 | medium | Medium-high operationally. | No German solar travel threshold. | Add `travel_time_minutes`, `route_cluster_score`, `visit_roi_score`, and "virtual alternative" comparison. |
| Owner-led installers need low-friction scheduling blocks: quick reply/document tasks, proof/revision work, calls/video consults, and route-clustered visits. | A6-E15; A6-S01, A6-S07, A6-S09 | medium | Medium-high; small-installer archetype is required by project scope and partly supported by Reonic public evidence. | Exact daily capacity varies by company. | The PoC should let installers change daily capacity assumptions instead of hard-coding them. |
| Travel-heavy visits should be grouped by geography and scheduled only after confirming the visit's purpose, required owner/skill, and expected outcome. | A6-E12, A6-E15; A6-S07, A6-S08, A6-S09 | medium | Medium. | Operational evidence is not solar-specific. | Calendar should show route impact and ask "what will this visit unlock?" before booking. |
| Proof work can be scheduled instead of outreach when a claim is blocked by missing data or stale market facts. | A6-E08, A6-E09, A6-E10; A6-S02, A6-S03 | high | High. | Requires claim metadata and data completeness checks. | Add "blocked by missing assumptions" tasks for proposal, finance, subsidy, ROI, winter, and grid facts. |

### Prototype Priority Formula

Use as a transparent PoC heuristic, not a validated model.

```text
priority_score =
  consent_allowed
  + customer_initiated_or_promised_next_step
  + quote_expiry_or_real_deadline
  + blocker_can_be_resolved_now
  + close_readiness
  + lead_value
  + route_cluster_fit_for_visits
  - travel_time_penalty
  - repeated_no_response_penalty
  - missing_data_penalty
  - pressure_or_opt_out_risk
```

| Claim | Source IDs | Confidence | Germany relevance | Limitations | Product implication |
| --- | --- | --- | --- | --- | --- |
| The formula is useful for PoC explainability but should be calibrated, not treated as truth. | A6-E15, A6-E16; A6-S04 | low-medium | Medium. | No Reonic outcome data yet. | Show factor-level reasoning and allow installer override with debrief reason. |

## Template-Compatible Action And Debrief Records

```yaml
action_id: A6-A01
customer_id: mock_customer_id
recommended_action_type: email
why_this_action: Written clarification or proof is needed and email is eligible.
persona_or_objection_target: ROI/comparison, proposal clarity, co-decision-maker summary, finance explainer
channel: email
preparation_needed: attach revised proposal/proof asset; verify claims; choose one next step
proof_assets: itemized addendum, assumption table, finance explainer, local proof, warranty/service note
estimated_duration: 10-30 minutes depending on asset
travel_time: none
calendar_constraints: batch in admin/follow-up block; prioritize promised replies
scheduled_time: next eligible admin block
success_criteria: customer replies, books review, uploads document, or confirms no remaining blocker
compliance_checks: email eligibility, opt-out, tracking consent if opens/clicks used
debrief_questions:
  - Did the customer reply or take the requested next step?
  - Which objection remained or changed?
  - Was another decision-maker involved?
  - What is the next commitment and due date?
debrief_result:
  completed:
  customer_response:
  new_facts:
  new_objections:
  sentiment:
  next_commitment:
  outcome_label:
strategy_update: update blocker, proof status, next task, and outcome
next_recommended_action: call, revised proposal, document request, pause, or escalation
source_ids: [A6-E03]
confidence: medium
germany_relevance: high when email is eligible
limitations: no Germany PV cadence benchmark
product_implication: purpose-specific email action with claim checks and debrief
```

```yaml
action_id: A6-A02
customer_id: mock_customer_id
recommended_action_type: sms_or_whatsapp_with_consent
why_this_action: A short logistics or document step is needed and consent/platform eligibility is valid.
persona_or_objection_target: busy buyer, responsive prospect, missing-document blocker
channel: SMS or WhatsApp
preparation_needed: verify consent/opt-in; choose approved template if needed; keep message short
proof_assets: upload link, appointment slots, revised proposal link, callback link
estimated_duration: 2-5 minutes
travel_time: none
calendar_constraints: use for quick tasks; do not consume expert time unless reply requires it
scheduled_time: next short-response block or immediately after customer inbound
success_criteria: appointment confirmed, document uploaded, reply received, or opt-out captured
compliance_checks: SMS consent or WhatsApp opt-in, opt-out status, template eligibility, 24-hour window, human escalation path
debrief_questions:
  - Did the customer respond, book, upload, or opt out?
  - Did the reply create a new objection?
  - Is a human follow-up needed?
debrief_result:
  completed:
  customer_response:
  new_facts:
  new_objections:
  sentiment:
  next_commitment:
  outcome_label:
strategy_update: update channel preference, document status, consent/opt-out, and next task
next_recommended_action: document review, call, email summary, pause
source_ids: [A6-E04]
confidence: medium-low
germany_relevance: high for consent; performance unvalidated
limitations: WhatsApp templates and legal basis need review
product_implication: messenger actions are short, consented, and logistics-focused
```

```yaml
action_id: A6-A03
customer_id: mock_customer_id
recommended_action_type: call_with_consent
why_this_action: A complex or trust-sensitive blocker needs live clarification and phone eligibility is valid.
persona_or_objection_target: trust-sensitive skeptic, ROI/comparison optimizer, PV-plus-heat-pump buyer, competitor-risk lead
channel: phone
preparation_needed: agenda, proof asset, objection-specific script, target next commitment
proof_assets: ROI assumptions, winter chart, comparison matrix, revised proposal, local reference, finance explainer
estimated_duration: 10-20 minutes
travel_time: none
calendar_constraints: book in call block; reserve owner/senior time for high-value or high-risk leads
scheduled_time: earliest mutually suitable slot
success_criteria: blocker resolved, next step booked, document requested, or clear lost reason captured
compliance_checks: phone consent or customer-requested service callback; opt-out status; call purpose
debrief_questions:
  - What did the customer say in their own words?
  - Which objection was resolved and which remains?
  - Was another decision-maker mentioned?
  - What commitment did the customer make?
  - Is escalation needed?
debrief_result:
  completed:
  customer_response:
  new_facts:
  new_objections:
  sentiment:
  next_commitment:
  outcome_label:
strategy_update: update readiness, objection tags, decision-maker fields, and next task
next_recommended_action: revised proposal, email recap, virtual consult, in-person visit, pause, escalation
source_ids: [A6-E05]
confidence: medium
germany_relevance: high if call eligibility is valid
limitations: no validated call cadence
product_implication: call task includes consent badge, agenda, proof, and debrief
```

```yaml
action_id: A6-A04
customer_id: mock_customer_id
recommended_action_type: voicemail
why_this_action: A consented or requested call was missed and a brief callback marker is useful.
persona_or_objection_target: callback requester, scheduled-call no-show
channel: voicemail
preparation_needed: prepare short factual callback note
proof_assets: none in voicemail; send proof separately through eligible channel
estimated_duration: 1-2 minutes
travel_time: none
calendar_constraints: cap attempts; do not stack repeated voicemails
scheduled_time: after missed eligible call
success_criteria: callback received or compliant alternative task scheduled
compliance_checks: phone consent/requested call, opt-out, prior attempt count
debrief_questions:
  - Was voicemail left?
  - Did the customer call back?
  - How many call attempts have been made?
  - Should the sequence pause or switch channel?
debrief_result:
  completed:
  customer_response:
  new_facts:
  new_objections:
  sentiment:
  next_commitment:
  outcome_label:
strategy_update: update attempt history and next eligible channel
next_recommended_action: pause, email recap, SMS/WhatsApp logistics if allowed, scheduled call
source_ids: [A6-E06]
confidence: low-medium
germany_relevance: medium with conservative use
limitations: voicemail-specific legal/performance evidence not gathered
product_implication: generate minimal service-context voicemail only
```

```yaml
action_id: A6-A05
customer_id: mock_customer_id
recommended_action_type: personalized_video
why_this_action: A visual, asynchronous explanation can help a customer or co-decision-maker review the quote.
persona_or_objection_target: co-decision-maker household, technical skeptic, ROI/comparison buyer, PV-plus-heat-pump buyer
channel: eligible email, portal, or WhatsApp/SMS link if consented
preparation_needed: record concise screen walkthrough; include transcript/summary; verify claims
proof_assets: roof layout, winter chart, ROI assumption table, variant comparison, monthly-burden chart
estimated_duration: 15-30 minutes creation
travel_time: none
calendar_constraints: use when it replaces longer live time or helps partner/advisor review
scheduled_time: during proof-work block
success_criteria: reply, review call booked, objection clarified, or shared-decision-maker question captured
compliance_checks: channel eligibility; tracking consent if video views are tracked; claim checks
debrief_questions:
  - Did the customer reply or book a review?
  - Did they mention sharing with a partner/advisor?
  - Which chart or claim triggered questions?
  - Is a live call or proposal revision now needed?
debrief_result:
  completed:
  customer_response:
  new_facts:
  new_objections:
  sentiment:
  next_commitment:
  outcome_label:
strategy_update: update proof asset status, decision-maker notes, and next task
next_recommended_action: virtual consultation, revised proposal, email recap, pause
source_ids: [A6-E07]
confidence: low-medium
germany_relevance: medium for blocker fit; low for proven channel effect
limitations: no direct German post-quote video evidence
product_implication: optional video asset with transcript and claim checks
```

```yaml
action_id: A6-A06
customer_id: mock_customer_id
recommended_action_type: revised_proposal
why_this_action: The quote itself is unclear or not comparable, so another message will not solve the blocker.
persona_or_objection_target: ROI/comparison optimizer, skeptic, price-shocked buyer, competitor-risk lead
channel: Reonic proposal/customer portal plus eligible notification
preparation_needed: itemize scope; expose assumptions; mark changed fields; add comparison view
proof_assets: line-item addendum, component list, assumptions, exclusions, variant comparison
estimated_duration: 30-90 minutes depending on complexity
travel_time: none
calendar_constraints: assign to quote owner/planner; prioritize expiring/high-readiness offers
scheduled_time: next quote-work block before further outreach
success_criteria: customer understands scope, books review, or gives specific remaining objection
compliance_checks: claim checks; notification channel eligibility; tracking consent for proposal views
debrief_questions:
  - Which fields changed?
  - Was the revised proposal sent and acknowledged?
  - Did the customer still object to price, scope, or assumptions?
  - Is a call or finance explainer needed?
debrief_result:
  completed:
  customer_response:
  new_facts:
  new_objections:
  sentiment:
  next_commitment:
  outcome_label:
strategy_update: update proposal clarity, active variant, assumptions, and next review task
next_recommended_action: email recap, call, finance explainer, pause, escalation
source_ids: [A6-E08]
confidence: high
germany_relevance: high
limitations: requires structured quote data
product_implication: add `needs_itemized_quote` and proposal revision action
```

```yaml
action_id: A6-A07
customer_id: mock_customer_id
recommended_action_type: financing_explainer
why_this_action: The active blocker is upfront liquidity, monthly burden, or financing/total-cost confusion.
persona_or_objection_target: liquidity-constrained buyer, family/security buyer, ROI buyer
channel: email/portal artifact plus call or virtual consult if eligible
preparation_needed: verify current finance facts; separate monthly payment, total cost, assumptions, and eligibility caveats
proof_assets: finance comparison, total-cost table, KfW/precheck status, quote total
estimated_duration: 20-60 minutes
travel_time: none
calendar_constraints: route to finance-capable owner; schedule before discounting or pressure follow-up
scheduled_time: finance/proof block or review call
success_criteria: customer identifies blocker type, requests precheck, or confirms finance is not the issue
compliance_checks: finance claim freshness, legal disclaimers, channel eligibility
debrief_questions:
  - Is the blocker upfront cost, monthly payment, total cost, or risk transfer?
  - Does the customer want finance precheck?
  - Which assumptions need verification?
  - Is legal/finance escalation required?
debrief_result:
  completed:
  customer_response:
  new_facts:
  new_objections:
  sentiment:
  next_commitment:
  outcome_label:
strategy_update: update finance blocker subtype and next task
next_recommended_action: finance precheck, revised proposal, call, escalation, pause
source_ids: [A6-E09]
confidence: medium
germany_relevance: high when facts are current
limitations: finance claims need legal/partner review
product_implication: add finance blocker subtype and `finance_claim_checked_at`
```

```yaml
action_id: A6-A08
customer_id: mock_customer_id
recommended_action_type: document_request
why_this_action: A missing input blocks reliable quote revision, ROI, finance, subsidy, grid, or technical proof.
persona_or_objection_target: all; especially ROI, finance, heat-pump, and technical skeptic states
channel: portal upload plus eligible email/SMS/WhatsApp
preparation_needed: ask only for the minimum required input; explain why it matters
proof_assets: upload checklist, example photo, bill request, heat-load form
estimated_duration: 5-10 minutes to send; review time varies
travel_time: none
calendar_constraints: prioritize documents that unlock a blocked claim or revised proposal
scheduled_time: immediate if customer is engaged; otherwise next eligible admin block
success_criteria: document uploaded or customer explains why unavailable
compliance_checks: channel eligibility, data minimization, upload privacy
debrief_questions:
  - Was the document uploaded?
  - Which claim or calculation is now unlocked?
  - Is anything still missing?
  - Did the request create friction?
debrief_result:
  completed:
  customer_response:
  new_facts:
  new_objections:
  sentiment:
  next_commitment:
  outcome_label:
strategy_update: update missing-data status and next proof/proposal task
next_recommended_action: revised proposal, ROI update, finance explainer, call, pause
source_ids: [A6-E10]
confidence: high
germany_relevance: high
limitations: need distinguish needed-now vs post-signature documents
product_implication: one-request-at-a-time upload tasks tied to blocked claims
```

```yaml
action_id: A6-A09
customer_id: mock_customer_id
recommended_action_type: virtual_consultation
why_this_action: Live explanation is needed but physical inspection is not yet necessary.
persona_or_objection_target: ROI/comparison buyer, PV-plus-heat-pump buyer, co-decision-maker household, technical skeptic
channel: video meeting
preparation_needed: agenda, charts, proposal variant, co-decision-maker invite
proof_assets: ROI table, winter chart, variant comparison, finance table, responsibility checklist
estimated_duration: 20-30 minutes
travel_time: none
calendar_constraints: offer slots before in-person visit when travel is high or route fit is poor
scheduled_time: next mutually suitable consultation slot
success_criteria: blocker resolved, in-person visit avoided or justified, next commitment captured
compliance_checks: meeting invite channel eligibility; recording consent if recorded
debrief_questions:
  - Who attended?
  - Which blocker was resolved?
  - What remains unclear?
  - Is a site visit now justified?
  - What is the next commitment?
debrief_result:
  completed:
  customer_response:
  new_facts:
  new_objections:
  sentiment:
  next_commitment:
  outcome_label:
strategy_update: update readiness, participants, visit need, and next task
next_recommended_action: revised proposal, in-person visit, email recap, pause, escalation
source_ids: [A6-E11]
confidence: medium
germany_relevance: medium-high
limitations: no direct virtual vs in-person German solar comparison
product_implication: virtual-first option for explanation blockers and high travel time
```

```yaml
action_id: A6-A10
customer_id: mock_customer_id
recommended_action_type: in_person_visit
why_this_action: Physical inspection or high-trust, high-value, high-readiness context justifies travel.
persona_or_objection_target: trust-sensitive buyer, roof/property-risk buyer, PV-plus-battery-plus-heat-pump buyer
channel: on-site appointment
preparation_needed: inspection checklist, travel route, proof assets, visit objective
proof_assets: roof/mounting checklist, heat-pump/site checklist, local reference, responsibility matrix
estimated_duration: 60-120 minutes on site
travel_time: calculate from calendar start/end and route cluster
calendar_constraints: cluster by geography; require visit ROI threshold or manual override
scheduled_time: route-efficient slot
success_criteria: site blocker resolved, trust improved, revised proposal inputs captured, or sign/date commitment
compliance_checks: appointment confirmation channel eligibility; data/privacy for site photos
debrief_questions:
  - What physical facts changed the quote?
  - Was trust/risk concern reduced?
  - Which decision-makers were present?
  - What is the next concrete commitment?
  - Is proposal revision or escalation needed?
debrief_result:
  completed:
  customer_response:
  new_facts:
  new_objections:
  sentiment:
  next_commitment:
  outcome_label:
strategy_update: update site facts, readiness, proposal inputs, and next task
next_recommended_action: revised proposal, contract step, finance explainer, pause, escalation
source_ids: [A6-E12]
confidence: medium
germany_relevance: medium-high
limitations: travel thresholds need installer data
product_implication: visit ROI score, route clustering, and virtual alternative
```

```yaml
action_id: A6-A11
customer_id: mock_customer_id
recommended_action_type: pause_no_followup
why_this_action: More follow-up would violate consent, ignore opt-out/review time, or add no value.
persona_or_objection_target: trust-sensitive, negative-sentiment, stale/no-response, opt-out
channel: none or final eligible close-the-loop message
preparation_needed: pause reason, resume date or value-add condition
proof_assets: none unless final eligible value-add is sent
estimated_duration: 1-3 minutes
travel_time: none
calendar_constraints: remove from active queue until resume condition
scheduled_time: future review date only if justified and allowed
success_criteria: pressure avoided, compliance respected, future value-add condition clear
compliance_checks: opt-out, consent, attempt history, customer requested review period
debrief_questions:
  - Why are we pausing?
  - What would justify resuming?
  - Did the customer opt out or request time?
  - What outcome label should be set?
debrief_result:
  completed:
  customer_response:
  new_facts:
  new_objections:
  sentiment:
  next_commitment:
  outcome_label:
strategy_update: mark paused/lost/nurture with resume condition
next_recommended_action: no action, future value-add, or lost-reason capture
source_ids: [A6-E13]
confidence: medium-high
germany_relevance: high
limitations: cadence caps need validation
product_implication: pause state with reason, resume condition, and compliance badge
```

```yaml
action_id: A6-A12
customer_id: mock_customer_id
recommended_action_type: escalation
why_this_action: The blocker requires a different owner, authority, skill, or legal/finance/technical review.
persona_or_objection_target: technical skeptic, finance buyer, complaint-risk lead, high-value exception
channel: internal task plus eligible customer status update
preparation_needed: issue summary, source evidence, customer quote, SLA, current owner
proof_assets: customer quote, notes, documents, claim warnings, technical inputs
estimated_duration: 5-15 minutes to escalate; resolution varies
travel_time: none unless escalation creates site visit
calendar_constraints: route by skill and SLA; do not let escalations disappear from queue
scheduled_time: immediate for high-risk claim or complaint; otherwise next owner block
success_criteria: owner accepts, answer delivered, blocker resolved, or next action assigned
compliance_checks: claim-risk review, customer update channel eligibility, data access
debrief_questions:
  - Who owns the escalation?
  - What answer or decision is needed?
  - When is it due?
  - What was communicated to the customer?
  - What is the next sales action after resolution?
debrief_result:
  completed:
  customer_response:
  new_facts:
  new_objections:
  sentiment:
  next_commitment:
  outcome_label:
strategy_update: update owner, SLA, risk status, and next customer-facing action
next_recommended_action: customer status update, revised proposal, call, visit, pause
source_ids: [A6-E14]
confidence: medium-high
germany_relevance: high for owner routing; roles vary
limitations: installer role maps and SLAs need validation
product_implication: escalation workflow with owner, due date, and return-to-sales debrief
```
