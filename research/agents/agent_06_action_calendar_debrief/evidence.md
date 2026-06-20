# Evidence: Agent 6 - Action, Calendar, And Debrief

Status: completed bounded pass on 2026-06-20.

Each item below is a practical claim for the next-best-action playbook. "Germany relevance" is captured in `geography` and `region_applicability`; source details are in `sources.md` and upstream agent folders.

```yaml
evidence_id: A6-E01
claim: "The assistant should diagnose the customer's current blocker before selecting a channel or drafting copy."
claim_category: next_best_action_logic
supporting_source_ids: [A6-S01, A6-S02, A6-S04]
evidence_type: upstream Reonic workflow plus Germany VOC plus persuasion synthesis
strength_of_evidence: medium-high
geography: Germany-first; indirect behavioral evidence where marked by Agent 5
region_applicability: High for German post-quote renewable sales because Reonic offer/CRM workflow and Germany VOC both support blocker-specific actions.
persona_applicability: all; especially trust-sensitive, ROI/comparison, liquidity, technical skeptic, and co-decision-maker states
funnel_stage: quote sent to contract signed
quote_stage_relevance: Direct; this is the central post-quote action-routing rule.
quote_or_data_excerpt: "Upstream A0-S03/A0-S21/A0-S22 support offer state and quote data; VOC-E01 through VOC-E18 support blocker tags; Agent 5 recommends diagnosing hesitation before writing copy."
counterevidence: No German solar post-quote randomized test proves that diagnosis-first routing improves close rate.
limitations: Product rule is evidence-informed but needs validation against Reonic CRM outcomes.
product_implication: Add a diagnosis panel with detected blocker, proof need, consent status, and recommended action.
message_implication: Do not generate generic follow-up copy when the active blocker is proposal clarity, missing data, trust repair, finance, or technical uncertainty.
action_implication: Route to the action that resolves the detected blocker with the least customer pressure and least installer capacity cost.
data_fields_required: [offer_status, signature_state, quote_sent_at, quote_opened_at_if_tracking_allowed, last_reply, objection_tags, unanswered_questions, consent_matrix, assigned_owner, active_tasks]
validation_needed: Compare action recommendations with actual next-step booked, contract signed, lost reason, opt-out, and complaint outcomes.
```

```yaml
evidence_id: A6-E02
claim: "Phone calls, voicemail, email, SMS, WhatsApp, and tracking-based scoring must be gated by channel eligibility, consent, opt-out state, and purpose."
claim_category: compliance_channel_gate
supporting_source_ids: [A6-S03, A6-S04, A6-S05, A6-S06]
evidence_type: official German regulator/legal guidance, platform policy, upstream compliance synthesis
strength_of_evidence: high
geography: Germany for UWG/privacy; global WhatsApp platform rules
region_applicability: High for Germany, with WhatsApp rules applied in addition to German law.
persona_applicability: all
funnel_stage: all outbound and tracked follow-up
quote_stage_relevance: Direct; post-quote follow-up often uses phone, email, SMS, and WhatsApp.
quote_or_data_excerpt: "Bundesnetzagentur says consumer advertising calls require prior express consent and documentation; WhatsApp policy requires opt-out respect, approved templates for initiated conversations, 24-hour service window rules, and escalation paths."
counterevidence: Some requested-service communications may not be advertising, but exact classification depends on legal review.
limitations: Legal counsel must classify Reonic's concrete workflows; platform rules can change.
product_implication: Build `channel_allowed(channel, purpose)` before any recommendation or draft; store consent source, timestamp, scope, opt-out, legal basis, and tracking consent separately.
message_implication: If channel is blocked, explain to installer why and suggest a compliant alternative.
action_implication: Do not recommend sales calls, sales voicemail, SMS, WhatsApp, or promotional email when consent is missing; do not use opens/clicks/proposal tracking for scoring without tracking consent.
data_fields_required: [phone_marketing_consent, email_marketing_consent, sms_consent, whatsapp_opt_in, whatsapp_last_inbound_at, opt_out_status, consent_source, consent_timestamp, purpose, tracking_consent]
validation_needed: Legal review of service vs advertising workflows and consent-retention design.
```

```yaml
evidence_id: A6-E03
claim: "Email is best used for low-pressure, documented follow-up such as proposal summaries, itemized addenda, finance explanations, and proof links when email is legally eligible."
claim_category: action_channel_email
supporting_source_ids: [A6-S01, A6-S02, A6-S03, A6-S04]
evidence_type: Reonic template evidence, Germany VOC, consumer guidance, compliance synthesis
strength_of_evidence: medium
geography: Germany-first
region_applicability: High when consent/service basis is valid; exact legal basis must be reviewed.
persona_applicability: ROI/comparison optimizer, co-decision-maker household, trust-sensitive buyer needing proof trail
funnel_stage: post-quote clarification and next-step documentation
quote_stage_relevance: Direct; Reonic already has template primitives, but action logic should choose content based on blocker.
quote_or_data_excerpt: "A0-S25 documents Reonic email templates; VOC-E04/VOC-E05 show need for itemization and visible assumptions; Agent 5 cautions against pressure."
counterevidence: Email may fail when the blocker is emotional trust repair, complex technical confusion, or urgent customer-requested callback.
limitations: No Germany PV data proves email cadence; open tracking is not safe without separate tracking consent.
product_implication: Email should be one action type with explicit purpose, proof assets, claim checks, and tracking-disabled fallback.
message_implication: Structure email as "you asked/quote context, concise answer, attached proof, optional next step" rather than generic nurture.
action_implication: Recommend email when the customer needs a written artifact, shareable summary, or non-urgent clarification.
data_fields_required: [email_eligibility, tracking_consent, objection_tags, proof_assets, quote_assumptions, decision_makers, last_reply_at]
validation_needed: Test email action variants against next-step booked and signed contract, not opens alone.
```

```yaml
evidence_id: A6-E04
claim: "SMS or WhatsApp should be reserved for short consented logistics, customer-requested replies, appointment confirmations, or light nudges to a concrete proof asset, not long persuasion."
claim_category: action_channel_sms_whatsapp
supporting_source_ids: [A6-S02, A6-S03, A6-S04, A6-S06]
evidence_type: Germany VOC responsiveness signals, German electronic-message compliance, WhatsApp platform policy, persuasion guardrails
strength_of_evidence: medium-low
geography: Germany for consent; WhatsApp platform global
region_applicability: Medium-high if consent and platform rules are satisfied; performance evidence is weak.
persona_applicability: responsive prospects, busy household/co-decision-maker logistics, customers who explicitly prefer WhatsApp/SMS
funnel_stage: appointment scheduling, missing document request, quick status update
quote_stage_relevance: Direct for small installers using mobile-first workflows.
quote_or_data_excerpt: "VOC-E02 supports fast competent answers; S04/S05 compliance sources require consent; WhatsApp policy adds template/24-hour/escalation rules."
counterevidence: Messenger follow-up can feel intrusive, and public evidence does not prove it improves German PV close rates.
limitations: Exact WhatsApp Business setup, templates, and legal basis must be validated; no direct German post-quote WhatsApp benchmark.
product_implication: Treat SMS/WhatsApp as high-friction from a compliance perspective but low-effort for scheduling and document collection.
message_implication: Keep content brief, identity-clear, context-specific, and easy to stop.
action_implication: Recommend for "can we book 15 minutes?", "please upload meter photo", "your revised proposal is ready", or "reply 1/2/3 for slot" only when allowed.
data_fields_required: [sms_consent, whatsapp_opt_in, whatsapp_last_inbound_at, template_status, opt_out_status, customer_channel_preference, appointment_slots, document_missing]
validation_needed: Legal review plus measurement of opt-outs, complaints, response, booked next step, and completion.
```

```yaml
evidence_id: A6-E05
claim: "A call is the preferred action for complex, high-value, or trust-sensitive blockers when the customer has requested it or phone consent is documented."
claim_category: action_channel_call
supporting_source_ids: [A6-S02, A6-S03, A6-S04, A6-S05]
evidence_type: Germany VOC on trust/responsiveness, official consent rules, persuasion synthesis
strength_of_evidence: medium
geography: Germany-first
region_applicability: High only when call eligibility is valid.
persona_applicability: trust-sensitive skeptic, ROI/comparison optimizer with unanswered assumptions, PV-plus-heat-pump buyer, customer with competitor offer
funnel_stage: post-quote objection resolution and close-readiness clarification
quote_stage_relevance: Direct; calls can resolve ambiguity faster than email but carry compliance and capacity costs.
quote_or_data_excerpt: "VOC-E01/VOC-E02 support pressure risk and responsive named contact; Bundesnetzagentur requires documented consent for advertising calls."
counterevidence: A call can backfire if perceived as pressure or if consent/purpose is unclear.
limitations: No Germany PV evidence quantifies call timing/cadence; exact legal classification needs review.
product_implication: Call recommendation must include eligibility badge, reason, agenda, proof asset, estimated duration, and debrief form.
message_implication: Script should open with context and permission, then resolve the stated blocker, not push for signature immediately.
action_implication: Recommend a 10-20 minute call for ROI walkthrough, winter/heat-pump explanation, competing-offer comparison, or trust repair.
data_fields_required: [phone_consent, customer_requested_call, objection_tags, lead_value, quote_complexity, assigned_owner, available_slots, prior_attempts, last_sentiment]
validation_needed: Track completed calls, negative sentiment, next commitment, and signed/lost outcomes.
```

```yaml
evidence_id: A6-E06
claim: "Voicemail should be treated as a minimal callback marker, not a persuasive sales pitch, and only used when call eligibility is valid."
claim_category: action_channel_voicemail
supporting_source_ids: [A6-S03, A6-S04, A6-S05]
evidence_type: official phone-advertising consent guidance plus low-pressure persuasion guardrails
strength_of_evidence: low-medium
geography: Germany-first
region_applicability: Medium; legal classification of voicemail content requires counsel.
persona_applicability: customers who requested a callback or missed an eligible scheduled call
funnel_stage: missed call or appointment follow-up
quote_stage_relevance: Direct but narrow.
quote_or_data_excerpt: "Phone advertising requires prior express consent; Agent 5 warns against pressure and stale repeated follow-up."
counterevidence: No evidence found that voicemail improves German solar quote conversion.
limitations: Voicemail-specific legal/performance evidence was not collected; use conservative wording.
product_implication: Generate voicemail only as a short, factual "I called about your requested quote question" script with callback options.
message_implication: No urgency, no discount pressure, no material claims in voicemail.
action_implication: Use after a missed consented/requested call; otherwise choose email/postal/service-channel alternative.
data_fields_required: [phone_consent, customer_requested_call, missed_call_at, prior_attempt_count, opt_out_status, callback_slots]
validation_needed: Legal review and outcome tracking for voicemail attempts.
```

```yaml
evidence_id: A6-E07
claim: "A personalized video is useful as a low-pressure proof asset for visual or multi-person explanation, but it is a hypothesis because direct German post-quote video evidence was not found."
claim_category: action_personalized_video
supporting_source_ids: [A6-S02, A6-S04]
evidence_type: Germany VOC on complex objections plus indirect persuasion/proof synthesis
strength_of_evidence: low-medium
geography: Germany by objection relevance; channel performance unvalidated
region_applicability: Medium for problem fit, low for proven effect.
persona_applicability: co-decision-maker households, technical skeptics, ROI/comparison buyers, PV-plus-heat-pump buyers
funnel_stage: after quote viewed; before or after a review call
quote_stage_relevance: Direct when the customer needs shareable explanation of roof layout, winter chart, proposal variant, or monthly cost.
quote_or_data_excerpt: "VOC-E05/VOC-E08/VOC-E09 show complex ROI, winter, and heat-pump questions; Agent 5 supports proof and balanced explanation."
counterevidence: Video may feel gimmicky or be ignored; no direct Germany solar conversion evidence.
limitations: Must avoid unsupported claims; requires accessible transcript/summary for recordkeeping.
product_implication: Add video as optional asset creation, not default sequence step; require proof sources and claim checks.
message_implication: Video should walk through a specific quote page, assumption, or visual chart and end with a customer-controlled next step.
action_implication: Recommend when one screen recording can replace a longer visit or help a spouse/advisor review asynchronously.
data_fields_required: [video_consent_or_service_basis, quote_variant, chart_assets, decision_makers, objections, proof_sources, transcript_saved]
validation_needed: Test video asset completion/views only if tracking consent exists; otherwise track replies and next-step booked.
```

```yaml
evidence_id: A6-E08
claim: "A revised proposal or itemized addendum should precede another persuasion message when the blocker is unclear scope, hidden assumptions, non-comparable line items, or confusing variants."
claim_category: action_revised_proposal
supporting_source_ids: [A6-S01, A6-S02, A6-S04]
evidence_type: Reonic quote-variant workflow, Germany VOC, consumer offer-check guidance
strength_of_evidence: high
geography: Germany-first
region_applicability: High; supported by German consumer guidance and direct quote discussions.
persona_applicability: ROI/comparison optimizer, skeptic, price-shocked buyer, buyer with competing offers
funnel_stage: quote evaluation after confusion, competitor comparison, or objection
quote_stage_relevance: Direct and central.
quote_or_data_excerpt: "VOC-E04/VOC-E05 and VOC-S29 support complete component/labor breakdown and critical review of assumptions; A0-S22 supports Reonic variants and profitability."
counterevidence: Proposal revision consumes installer time and may delay follow-up if the blocker is not actually clarity.
limitations: Requires line-item/assumption data; exact addendum format needs UX validation.
product_implication: Add `needs_itemized_quote` and `proposal_clarity_score`; recommend revision when score is low.
message_implication: Message should say what changed and why, with assumptions and exclusions visible.
action_implication: Trigger revised proposal, comparison matrix, or one-page addendum before more channel touches.
data_fields_required: [line_items, exclusions, labor_scope, scaffold_scope, grid_admin_scope, variants, assumptions, competitor_mentions, price_gap_note]
validation_needed: Measure whether revised proposal leads to review call, signed contract, or clearer lost reason.
```

```yaml
evidence_id: A6-E09
claim: "A financing explainer is appropriate when the blocker is upfront liquidity or monthly burden, but it must separate affordability from total value and use current Germany finance facts."
claim_category: action_financing_explainer
supporting_source_ids: [A6-S02, A6-S03, A6-S04]
evidence_type: Germany VOC on finance/liquidity, Germany finance evidence, persuasion claim guardrails
strength_of_evidence: medium
geography: Germany
region_applicability: High if finance facts are current and installer product is verified.
persona_applicability: liquidity-constrained buyer, family/security buyer, ROI buyer considering financing
funnel_stage: post-quote price shock or payment objection
quote_stage_relevance: Direct for high-ticket PV/battery/heat-pump quotes.
quote_or_data_excerpt: "VOC-E06 distinguishes liquidity from total value; Agent 4 says KfW 270 can finance up to 100% but exact rate is bank/date/credit dependent and KfW 442 is closed."
counterevidence: Financing can increase scrutiny of total cost, obligations, term length, and service scope.
limitations: Financial advice and current rates require legal/compliance review and bank-specific checks.
product_implication: Add finance blocker subtype and `finance_claim_checked_at`; block stale rate/grant claims.
message_implication: Explain monthly impact, total repayment, assumptions, and who verifies eligibility; do not imply guaranteed approval.
action_implication: Recommend finance explainer or finance-precheck task, not generic discount follow-up.
data_fields_required: [payment_preference, finance_interest, monthly_budget_note, kfw270_precheck_status, installer_finance_product, rate_checked_at, quote_total, term_assumptions]
validation_needed: Validate finance copy with legal/finance partners and outcome data.
```

```yaml
evidence_id: A6-E10
claim: "A document request is the right next action when missing customer inputs block reliable ROI, proposal accuracy, financing, subsidy, grid, or technical proof."
claim_category: action_document_request
supporting_source_ids: [A6-S01, A6-S02, A6-S03]
evidence_type: Reonic request/upload workflow, Germany VOC, Germany market/paperwork evidence
strength_of_evidence: high
geography: Germany/Reonic workflow
region_applicability: High
persona_applicability: all; especially ROI, finance, PV-plus-heat-pump, and technical skeptic states
funnel_stage: post-quote revision, due diligence, pre-signature clarification
quote_stage_relevance: Direct; missing inputs can make follow-up claims unsafe.
quote_or_data_excerpt: "A0-S23 supports roof/meter photo reminders; Agent 4 requires actual tariff/load/roof/local data for reliable claims; VOC-E05/VOC-E08/VOC-E09 show buyers challenge assumptions."
counterevidence: Too many requests can create friction if the document is not necessary for the next decision.
limitations: Need determine which document is strictly needed now versus post-signature.
product_implication: Add missing-data blocker and generate one-request-at-a-time upload tasks.
message_implication: Ask for the minimum document and explain how it improves quote accuracy.
action_implication: Request electricity bill, meter photo, roof photo, heating fuel/usage, competitor quote page, finance permission, or decision-maker availability depending on blocker.
data_fields_required: [missing_documents, upload_link, required_for_claims, annual_kwh, tariff_source, meter_photo_status, roof_photo_status, heating_load_status, competitor_quote_uploaded]
validation_needed: Track document-request completion and drop-off.
```

```yaml
evidence_id: A6-E11
claim: "A virtual consultation should be preferred over an in-person visit when the blocker can be resolved with screen-share, calculation walkthrough, or co-decision-maker discussion and travel time is high."
claim_category: action_virtual_consultation
supporting_source_ids: [A6-S02, A6-S04, A6-S07, A6-S08, A6-S09]
evidence_type: Germany VOC on complex explanation, persuasion planning evidence, field-service scheduling literature
strength_of_evidence: medium
geography: Germany for blocker fit; global for scheduling logic
region_applicability: Medium-high operationally; validate with German installer preferences.
persona_applicability: ROI/comparison, PV-plus-heat-pump, co-decision-maker household, remote/busy buyer
funnel_stage: quote review and objection resolution
quote_stage_relevance: Direct alternative to capacity-expensive visits.
quote_or_data_excerpt: "Field-service sources show travel time, time windows, skill fit, and limited resources should affect schedules; VOC shows complex questions often need explanation."
counterevidence: Some homeowners trust in-person assessment more for roof/site-specific concerns.
limitations: No direct Germany solar sales study comparing virtual vs in-person close rates.
product_implication: Present virtual as default for explanation-heavy blockers unless site-risk/high-value/route cluster justifies visit.
message_implication: Invite customer to a concrete agenda, e.g. 20-minute ROI and variant review.
action_implication: Schedule video call with agenda, proof assets, and co-decision-maker invite when it resolves the blocker without travel.
data_fields_required: [travel_time_minutes, route_cluster_score, blocker_type, screen_share_assets, participant_emails, available_slots, site_visit_required_flag]
validation_needed: Compare virtual consultation completion, next commitment, close rate, and site-visit conversion.
```

```yaml
evidence_id: A6-E12
claim: "An in-person visit is worth the travel cost only when physical inspection, high trust risk, high lead value/readiness, local route density, or roof/heat-pump/site constraints make remote follow-up insufficient."
claim_category: action_in_person_visit
supporting_source_ids: [A6-S02, A6-S04, A6-S07, A6-S08, A6-S09]
evidence_type: Germany VOC plus field-service scheduling literature and consumer offer-check guidance
strength_of_evidence: medium
geography: Germany for homeowner/site concerns; global for scheduling logic
region_applicability: Medium-high; route thresholds need installer data.
persona_applicability: trust-sensitive buyer, roof/property-risk buyer, high-value PV-plus-battery-plus-heat-pump buyer, local-reference competitor risk
funnel_stage: late quote review, site verification, trust repair, pre-signature technical diligence
quote_stage_relevance: Direct but capacity-expensive.
quote_or_data_excerpt: "VOC-E10 supports roof/property concerns; VOC-S29 supports on-site assessment; field-service sources show travel time, skills, and time windows constrain appointments."
counterevidence: A visit can waste scarce owner time if the lead is low-intent, low-value, missing consent, or the blocker is simple written clarification.
limitations: No validated travel-minute or deal-value threshold; exact rules should be calibrated by installer.
product_implication: Add "visit ROI" score combining lead value, readiness, physical-risk need, route fit, and travel cost.
message_implication: Frame visit as technical verification or quote refinement, not pressure.
action_implication: Recommend in-person only when the visit will unlock signing or materially reduce technical risk.
data_fields_required: [travel_time_minutes, distance_km, route_cluster_score, lead_value, close_readiness, roof_risk_flag, heat_load_uncertainty, available_visit_slots, owner_capacity]
validation_needed: Validate thresholds against signed/lost outcomes and installer utilization.
```

```yaml
evidence_id: A6-E13
claim: "Pause or no follow-up is the right action when the customer opted out, lacks consent for available channels, explicitly asked for time, has received repeated stale touches, or the next step would not add new value."
claim_category: action_pause_no_followup
supporting_source_ids: [A6-S02, A6-S03, A6-S04, A6-S05]
evidence_type: Germany trust/pressure evidence, compliance guidance, persuasion caps
strength_of_evidence: medium-high
geography: Germany-first
region_applicability: High
persona_applicability: all, especially trust-sensitive or negative-sentiment customers
funnel_stage: post-quote silence, negative sentiment, opt-out, requested review period
quote_stage_relevance: Direct guardrail against over-follow-up.
quote_or_data_excerpt: "VOC-E01 warns pressure can break trust; Agent 5 recommends caps and pauses; German consent sources require honoring opt-out/channel eligibility."
counterevidence: Pausing can let a high-intent but distracted lead cool if there is an unfulfilled promised next step.
limitations: Cadence caps are not validated with Reonic outcomes.
product_implication: Add pause action with reason, resume date, and value-add condition.
message_implication: If one final close-the-loop message is allowed, keep it factual and opt-out respectful.
action_implication: Schedule no task or a future low-pressure check only when consent and value-add are present.
data_fields_required: [opt_out_status, consent_matrix, attempt_history, customer_requested_review_until, last_value_add, promised_next_step, sentiment, outcome_label]
validation_needed: Define attempt caps and reactivation rules from CRM data and legal review.
```

```yaml
evidence_id: A6-E14
claim: "Escalation is required when the blocker needs a different owner, such as technical design, financing, subsidy/legal, manager trust repair, complaint risk, or a high-value exception."
claim_category: action_escalation
supporting_source_ids: [A6-S01, A6-S02, A6-S03, A6-S04, A6-S09]
evidence_type: Reonic owner/task workflow, Germany VOC, market/legal guardrails, field technician skill-fit evidence
strength_of_evidence: medium-high
geography: Germany-first plus general scheduling logic
region_applicability: High for role/owner routing; exact roles vary by installer.
persona_applicability: technical skeptic, finance/liquidity buyer, trust-damaged buyer, high-value bundle buyer
funnel_stage: any quote-stage blocker beyond salesperson authority
quote_stage_relevance: Direct; wrong owner can delay or mis-answer high-stakes questions.
quote_or_data_excerpt: "Agent 0 supports assigned owner/task fields; VOC-E10/E11/E15 show technical/service risks; Agent 4 says finance/subsidy/legal facts are date-sensitive; field scheduling literature supports skill fit."
counterevidence: Escalation can slow the sale if used for routine questions.
limitations: Need map of actual installer roles and escalation SLAs.
product_implication: Add escalation reason, owner, SLA, customer-facing status update, and debrief back to salesperson.
message_implication: Tell the customer who will answer and when, instead of improvising unsupported claims.
action_implication: Route to technical planner, finance/admin owner, manager, or service/installation lead when needed.
data_fields_required: [escalation_reason, required_skill, owner_role, sla_due_at, claim_risk, issue_severity, lead_value, customer_sentiment]
validation_needed: Validate role map with Reonic customers and measure escalation completion time/outcome.
```

```yaml
evidence_id: A6-E15
claim: "Small-installer scheduling should prioritize consent-safe customer-initiated actions, expiring/high-readiness quotes, blocker-resolving proof work, and geographically efficient visits before low-value stale follow-up."
claim_category: scheduling_capacity_rules
supporting_source_ids: [A6-S01, A6-S02, A6-S03, A6-S04, A6-S07, A6-S08, A6-S09]
evidence_type: Reonic workflow, Germany VOC/compliance, persuasion guardrails, field-service scheduling literature
strength_of_evidence: medium
geography: Germany for installer workflow and compliance; global for routing logic
region_applicability: Medium-high; exact scoring weights require installer data.
persona_applicability: all
funnel_stage: daily sales calendar planning after quotes are sent
quote_stage_relevance: Direct to next-best action scheduling.
quote_or_data_excerpt: "Agent 0 models owner-led constrained installers; field-service sources show limited resources, time windows, skills, routing costs, and travel time matter; Agent 5 says customer-initiated fast response is stronger than pressure follow-up."
counterevidence: Some low-value leads may still close quickly; over-scoring can hide relationship context.
limitations: No validated Reonic scoring model; use transparent editable heuristics.
product_implication: Show a capacity-aware priority queue with reasons and manual override.
message_implication: Installer-facing explanation should say why this lead/action is scheduled now and what is deferred.
action_implication: Calendar should reserve response blocks, proof/revision work, virtual consultations, and route-clustered visits, with pause states for stale leads.
data_fields_required: [active_leads, owner_capacity_hours, action_duration, travel_time, route_cluster, offer_valid_until, last_customer_initiated_at, close_readiness, lead_value, blocker_type, consent_matrix, promised_next_step]
validation_needed: Calibrate weights and daily caps against real installer calendars and outcomes.
```

```yaml
evidence_id: A6-E16
claim: "Every action should end with a structured debrief that captures what happened, customer language, new facts, objections, sentiment, next commitment, outcome label, and strategy update."
claim_category: debrief_learning_loop
supporting_source_ids: [A6-S01, A6-S02, A6-S04]
evidence_type: Reonic action-loop inference, Germany VOC tags, experimentation/outcome guidance
strength_of_evidence: medium-high
geography: Germany-first product workflow; experimentation method general
region_applicability: High for product learning; outcome model needs Reonic data.
persona_applicability: all
funnel_stage: after each email, SMS/WhatsApp, call, voicemail, video, proposal revision, document request, consultation, visit, pause, or escalation
quote_stage_relevance: Direct; debrief closes the loop from action to next strategy.
quote_or_data_excerpt: "Agent 0 recommends debrief/outcome fields; Agent 2 supplies objection/sentiment tags; Agent 5 says tests should optimize next-step booked, signed contract, opt-out, complaints, and lost reason."
counterevidence: Debrief forms can burden small installers if too long.
limitations: Debrief taxonomy must be short and validated in field use.
product_implication: Use 3-click structured debrief plus optional note capture; auto-update strategy and CRM fields.
message_implication: Future messages should reuse customer language only respectfully and with context.
action_implication: Do not mark an action complete until outcome and next commitment are captured or explicitly skipped.
data_fields_required: [action_id, completed, customer_response, new_facts, new_objections, sentiment, next_commitment, outcome_label, follow_up_due_at, strategy_update]
validation_needed: User-test debrief length and measure completion rate.
```
