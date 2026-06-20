# Evidence: Agent 7 - Product Synthesis

Status: completed on 2026-06-20.

Use note: These are product-synthesis evidence items derived from upstream agent records. Each item distinguishes evidence-backed requirements from inferred PoC implementation choices.

```yaml
evidence_id: A7-E01
claim: The core PoC should be a Reonic-embedded "Next Best Action" assistant on the quoted-customer view, not an email sequence generator.
claim_category: core_workflow
supporting_source_ids: [A7-S01, A7-S05, A7-S06]
upstream_ids: [A0-E02, A0-E14, E05-020, A6-E01, A6-E16]
evidence_type: product-doc synthesis plus persuasion/action synthesis
strength_of_evidence: medium-high
geography: Germany
region_applicability: Germany-first Reonic residential workflow
persona_applicability: all personas and blocker states
funnel_stage: offer sent to contract signed
quote_stage_relevance: direct
quote_or_data_excerpt: Upstream evidence repeatedly centers on offer sent/opened/unsigned, CRM task/calendar context, diagnosis before copy, and debrief after action.
counterevidence: No internal Reonic conversion data proves this workflow lifts close rate.
limitations: Public Reonic docs may not reflect private roadmap; exact embedded surface needs product validation.
product_implication: Build screens around diagnosis, recommended action, proof, consent, schedule, and debrief before a sequence builder.
message_implication: Message drafts are optional artifacts produced by an action, not the primary product.
action_implication: Every recommendation should create or schedule an action and later request a debrief.
data_fields_required: [offer_status, signature_state, quote_sent_at, quote_valid_until, assigned_owner, objection_tags, proof_assets, consent_matrix, action_id, debrief_status]
validation_needed: Verify with Reonic product whether the quoted-customer page can host an assistant panel and create tasks/calendar entries.
```

```yaml
evidence_id: A7-E02
claim: The PoC should be Germany-first and residential, with PV plus battery as the base scenario and heat pump/wallbox as important variants.
claim_category: scope
supporting_source_ids: [A7-S01, A7-S02, A7-S03, A7-S04]
upstream_ids: [A0-E01, A0-E13, E09, E10, VOC-E07, VOC-E09, E04-007, E04-009]
evidence_type: Reonic public ecosystem plus Germany homeowner and market evidence
strength_of_evidence: high for public positioning; medium for actual module mix
geography: Germany
region_applicability: German residential installer market
persona_applicability: ROI planner, autarky optimizer, technical-control optimizer, multi-tech system builder
funnel_stage: quote and post-quote
quote_stage_relevance: direct
quote_or_data_excerpt: Reonic public ecosystem supports 360 Haushalt; homeowner sources support PV/storage/heat-pump/EV linkage and battery/heat-pump quote objections.
counterevidence: Reonic also has commercial and utility products; attach rates are unknown.
limitations: No internal usage mix by module.
product_implication: Mock records should include PV-only fallback, PV+battery base, PV+battery+wallbox, and PV+heat-pump variants.
message_implication: Avoid treating battery, heat pump, and wallbox as separate generic upsell campaigns; explain the household energy system logic.
action_implication: Recommend roadmap, technical consult, or quote revision when cross-technology dependencies create hesitation.
data_fields_required: [product_scope, pv_kwp, battery_kwh, wallbox_scope, heat_pump_scope, existing_heating, ev_plan, annual_consumption_kwh, future_load_notes]
validation_needed: Confirm Reonic stakeholder priority and current German project mix.
```

```yaml
evidence_id: A7-E03
claim: Personas should be explainable motive and blocker scores, not fixed identities or demographic labels.
claim_category: persona_model
supporting_source_ids: [A7-S02, A7-S05]
upstream_ids: [E01, E02, E04, E06, E09, E11, E12, E16, E18, E05-020]
evidence_type: Germany persona synthesis plus ethics guardrails
strength_of_evidence: high for ROI/risk; medium for climate/autarky/system motives; unknown for family-as-persona
geography: Germany
region_applicability: Germany-first
persona_applicability: all
funnel_stage: post-quote strategy selection
quote_stage_relevance: direct
quote_or_data_excerpt: Agent 1 validates ROI/cost, independence, climate, system, technical, and trust-risk dimensions, while rejecting "family" as a standalone motivation persona.
counterevidence: Some household decisions involve family or advisors, but this supports explicit stakeholder-review fields rather than demographic inference.
limitations: No internal classifier or outcome data.
product_implication: Show top motive, top blocker, confidence, evidence chips, and a clarifying question.
message_implication: Draft copy from stated motivations/objections, not assumed household type.
action_implication: If scores are mixed, recommend a clarifying call/question or proof asset that addresses the blocker first.
data_fields_required: [motive_scores, objection_scores, explicit_motivation_notes, decision_makers_explicit, stakeholder_questions, debrief_notes]
validation_needed: Label real Reonic notes and compare score rules with signed/lost outcomes.
```

```yaml
evidence_id: A7-E04
claim: ROI, affordability, and assumption clarity are first-class post-quote blockers, and ROI claims require current local inputs.
claim_category: economics_and_roi
supporting_source_ids: [A7-S02, A7-S03, A7-S04, A7-S05]
upstream_ids: [E02, E03, E05, VOC-E05, E04-001, E04-002, E04-007, E04-011, E05-016]
evidence_type: Germany survey, public VOC, market economics, claim-risk evidence
strength_of_evidence: high for financial proof need; medium for exact proof format
geography: Germany
region_applicability: all Germany, with regional yield and local tariff differences
persona_applicability: ROI planner, risk/trust skeptic, technical-control optimizer, multi-tech system builder
funnel_stage: quote evaluation and follow-up
quote_stage_relevance: direct
quote_or_data_excerpt: Agent 4 requires actual customer tariff where possible, tariff window, region/roof inputs, and source dates; Agent 2 flags "pretty" payback and inconsistent offers as trust risks.
counterevidence: Some storage/autarky buyers value nonfinancial benefits; ROI should not override explicit independence motives.
limitations: Energy prices, subsidies, finance rates, and export rules are time-sensitive.
product_implication: Add an assumptions drawer, market-fact freshness badges, editable ROI inputs, and claim-blocked states.
message_implication: Do not generate payback, savings, tariff, or battery ROI copy without inputs and source dates.
action_implication: When data is missing, recommend document request or assumptions review before persuasion.
data_fields_required: [current_electricity_ct_per_kwh, annual_consumption_kwh, bill_date, feed_in_mode, expected_commissioning_date, pv_kwp, battery_kwh, self_consumption_assumption, local_yield_kwh_per_kwp, tariff_checked_at]
validation_needed: Confirm which ROI inputs Reonic already stores and which require upload/request.
```

```yaml
evidence_id: A7-E05
claim: Low proposal clarity should route to revised proposal or itemized addendum before more persuasion.
claim_category: proposal_clarity
supporting_source_ids: [A7-S02, A7-S03, A7-S05, A7-S06]
upstream_ids: [E08, VOC-E04, VOC-E05, E05-005, E05-006, A6-E08]
evidence_type: Germany consumer guidance, VOC, heat-pump offer analysis, action playbook
strength_of_evidence: high
geography: Germany
region_applicability: Germany, especially complex PV+battery+heat-pump offers
persona_applicability: ROI planner, technical-control optimizer, risk/trust skeptic, multi-tech system builder
funnel_stage: quote evaluation
quote_stage_relevance: direct
quote_or_data_excerpt: Upstream sources repeatedly flag unclear line items, hidden assumptions, "bauseits" work, variants, and non-comparable offers.
counterevidence: Proposal revision can waste time if the blocker is actually trust repair, consent, or no decision-maker.
limitations: Requires structured quote fields and UX definition of clarity score.
product_implication: Add `proposal_clarity_score`, `needs_itemized_quote`, missing line-item checklist, and comparison matrix.
message_implication: Avoid "just checking in" while the offer itself is unclear.
action_implication: Recommend revised proposal, itemized addendum, or quote walkthrough video/call.
data_fields_required: [line_items, excluded_costs, labor_scope, scaffold_scope, grid_admin_scope, battery_scope, wallbox_scope, heat_pump_scope, assumptions, variants, price_gap_note]
validation_needed: Define scoring rubric with Reonic quote schema and installer users.
```

```yaml
evidence_id: A7-E06
claim: Trust repair requires clear identity, named owner, professional tone, low-pressure CTA, responsiveness, and proof of responsibility.
claim_category: trust_and_tone
supporting_source_ids: [A7-S03, A7-S05, A7-S06]
upstream_ids: [VOC-E01, VOC-E02, VOC-E12, VOC-E13, VOC-E15, E05-002, E05-005, E05-019, A6-E05]
evidence_type: Germany VOC plus persuasion guardrails
strength_of_evidence: medium-high
geography: Germany
region_applicability: all Germany; local brand tone may vary
persona_applicability: risk/trust skeptic, co-decision-maker state, ROI planner after price shock
funnel_stage: post-quote trust repair
quote_stage_relevance: direct
quote_or_data_excerpt: Agent 2 found pressure, vague identity, and tone mismatch as trust breaks, while positive reviews praise responsiveness and same contact.
counterevidence: Some prospects prefer proactive contact when it is helpful and consented.
limitations: Public reviews are not prevalence data; tone should be user tested.
product_implication: Default German copy to professional `Sie`, named contact, explicit reason for contact, no-pressure next step, and responsibility matrix when "all-in" promises are used.
message_implication: Never obscure seller identity, pressure for signature, or use vague "Rundum-sorglos" without concrete scope.
action_implication: Recommend human trust-repair call or concise written responsibility summary when trust risk is detected.
data_fields_required: [assigned_rep, preferred_formality, customer_sentiment, prior_touchpoints, unanswered_questions, service_owner, support_contact, proof_assets]
validation_needed: Test German copy variants with installers and customers.
```

```yaml
evidence_id: A7-E07
claim: Germany channel recommendations must be hard-gated by consent, opt-out, purpose, legal basis, and separate tracking consent.
claim_category: compliance_channel_gate
supporting_source_ids: [A7-S04, A7-S05, A7-S06]
upstream_ids: [E04-020, E04-021, E04-022, E04-023, E05-017, A6-E02, A6-E03, A6-E04, A6-E05]
evidence_type: Germany compliance synthesis plus action playbook
strength_of_evidence: high
geography: Germany
region_applicability: Germany
persona_applicability: all
funnel_stage: every outbound or tracked action
quote_stage_relevance: direct
quote_or_data_excerpt: Upstream legal evidence requires consent for consumer advertising calls and generally for electronic advertising, plus separate consent for marketing tracking/open pixels.
counterevidence: Some customer-requested service replies may be treated differently, but product cannot assume that without legal classification.
limitations: Not legal advice; exact Reonic workflows need counsel.
product_implication: Implement `channel_allowed(channel, purpose)` before drafting or scheduling.
message_implication: Suppress noncompliant call, SMS, WhatsApp, email, voicemail, and tracking-based scoring; explain the blocked state and alternatives.
action_implication: If channel is blocked, recommend compliant alternatives such as portal task, document prep, waiting for inbound, or consent capture in an allowed context.
data_fields_required: [phone_marketing_consent, email_marketing_consent, sms_consent, whatsapp_opt_in, consent_scope, consent_source, consent_timestamp, opt_out_status, purpose, tracking_consent, proposal_tracking_enabled]
validation_needed: German legal review of service vs advertising classifications and Reonic consent schema.
```

```yaml
evidence_id: A7-E08
claim: Claims about savings, incentives, feed-in revenue, finance, taxes, installation timelines, and urgency need source, checked_at, validity, and human/legal review states.
claim_category: claim_safety
supporting_source_ids: [A7-S01, A7-S04, A7-S05]
upstream_ids: [A0-E07, E04-002, E04-004, E04-013, E04-014, E04-015, E04-016, E04-017, E04-018, E04-019, E05-016, E05-018, E05-021]
evidence_type: official Germany market facts plus persuasion red lines
strength_of_evidence: high
geography: Germany
region_applicability: national plus local subsidy/VNB variation
persona_applicability: all, especially ROI planner and skeptic
funnel_stage: quote explanation and follow-up messages
quote_stage_relevance: direct
quote_or_data_excerpt: Agent 4 marks tariffs, subsidies, financing, tax, grid registration, and export rules as current/date-sensitive; Agent 5 marks unsupported savings/free/guarantee/urgency claims as red lines.
counterevidence: Contract-backed guarantees or verified deadlines can be used if accurate and disclosed.
limitations: Requires authoritative source refresh and legal review policy.
product_implication: Add pre-send claim checker and visible warnings: `facts_stale`, `subsidy_unverified`, `tariff_window_expiring`, `tracking_disabled`, `human_review_required`.
message_implication: Rewrite or block copy that promises guaranteed savings, free solar, guaranteed export revenue, closed subsidies, or artificial scarcity.
action_implication: Route to "verify market fact" or "human review" task when a claim is stale or unsupported.
data_fields_required: [claim_type, claim_source_url, claim_checked_at, claim_valid_until, urgency_reason, subsidy_source_url, finance_rate_checked_at, guarantee_contract_clause, tax_edge_case_flags]
validation_needed: Define freshness thresholds and approved claim library with Reonic/legal.
```

```yaml
evidence_id: A7-E09
claim: The strategy engine needs an action taxonomy covering email, SMS/WhatsApp, call, voicemail, personalized video, revised proposal, finance explainer, document request, virtual consultation, in-person visit, pause, and escalation.
claim_category: action_taxonomy
supporting_source_ids: [A7-S06]
upstream_ids: [A6-E03, A6-E04, A6-E05, A6-E06, A6-E07, A6-E08, A6-E09, A6-E10, A6-E11, A6-E12, A6-E13, A6-E14]
evidence_type: action playbook synthesis
strength_of_evidence: medium-high overall; high for proposal/document/consent; low-medium for video and exact cadence
geography: Germany-first
region_applicability: German small/mid installer workflow
persona_applicability: all, routed by blocker
funnel_stage: post-quote follow-up
quote_stage_relevance: direct
quote_or_data_excerpt: Agent 6 provides action records and routing criteria with source IDs and confidence levels.
counterevidence: Exact action performance is unvalidated; some actions may be unavailable in Reonic or installer workflows.
limitations: Needs implementation feasibility, consent schema, and installer capacity calibration.
product_implication: PoC should show at least 6 action types: revised proposal, ROI/finance explainer, document request, call/virtual consult, in-person visit, pause/escalation.
message_implication: Channel-specific drafts should be purpose-specific and proof-backed.
action_implication: `next_action = blocker_resolving_action` after consent, proof, claim safety, capacity, and travel checks.
data_fields_required: [action_type, blocker_type, channel, reason, prep_asset, owner, duration_minutes, due_at, compliance_checks, success_criteria, debrief_questions]
validation_needed: Pilot action taxonomy with installers and measure outcomes.
```

```yaml
evidence_id: A7-E10
claim: Scheduling must account for installer capacity, promised next steps, customer-initiated events, quote expiry, lead value, travel time, route fit, and virtual alternatives.
claim_category: scheduling
supporting_source_ids: [A7-S01, A7-S06]
upstream_ids: [A0-E03, A0-E05, A6-E11, A6-E12, A6-E15]
evidence_type: Reonic CRM/calendar evidence plus field-service scheduling logic
strength_of_evidence: medium
geography: Germany-first; field-service logic general
region_applicability: small/mid installers, especially owner-led teams with limited time
persona_applicability: all
funnel_stage: action scheduling
quote_stage_relevance: direct
quote_or_data_excerpt: Agent 6 recommends priority queue and visit ROI score; Agent 0 supports small owner-led and multi-location mock contexts.
counterevidence: No Reonic-specific capacity or travel thresholds.
limitations: Travel and capacity heuristics are inferred from operations evidence, not solar conversion data.
product_implication: Show capacity-aware priority queue and calendar slots, with override reason.
message_implication: Do not imply visit is required when a virtual consult or proof asset resolves the blocker.
action_implication: Prefer virtual or proof work when travel is high and physical inspection is not needed; justify visits with physical risk, high readiness/value, or route cluster.
data_fields_required: [active_lead_count, owner_capacity_hours, available_slots, existing_conflicts, action_duration_minutes, travel_time_minutes, distance_km, route_cluster_score, lead_value, close_readiness, site_visit_required_flag]
validation_needed: Analyze installer calendars/tasks and interview small installers.
```

```yaml
evidence_id: A7-E11
claim: Every action needs a short debrief that updates CRM facts, objections, sentiment, next commitment, outcome label, and future strategy.
claim_category: debrief_learning_loop
supporting_source_ids: [A7-S01, A7-S02, A7-S05, A7-S06]
upstream_ids: [A0-E04, A0-E15, E17, E18, E05-011, A6-E16]
evidence_type: product inference supported by action/persuasion synthesis
strength_of_evidence: medium-high for product need; unknown for exact form burden
geography: Germany-first
region_applicability: all installer archetypes; burden risk highest for owner-led teams
persona_applicability: all
funnel_stage: after every action
quote_stage_relevance: direct
quote_or_data_excerpt: Upstream findings require outcomes to validate persona scores, ghosting risk, action performance, and next commitments.
counterevidence: Debrief forms can burden users and reduce adoption.
limitations: No usability testing of debrief length.
product_implication: Use 3-click debrief plus optional note; require skip reason if action is closed without outcome.
message_implication: Future messages should use captured customer language rather than inferred persona labels.
action_implication: Strategy updates only after debrief or explicit skipped-debrief reason.
data_fields_required: [action_id, completed, customer_response, customer_language, new_facts, new_objections, sentiment, next_commitment, outcome_label, lost_reason, follow_up_due_at, strategy_update]
validation_needed: Prototype with installers and measure debrief completion.
```

```yaml
evidence_id: A7-E12
claim: Proof asset inventory is required for trustworthy recommendations and should degrade gracefully when proof is missing.
claim_category: proof_assets
supporting_source_ids: [A7-S01, A7-S02, A7-S03, A7-S05]
upstream_ids: [A0-E06, E13, VOC-E13, VOC-E14, VOC-E15, E05-001, E05-002, E05-012]
evidence_type: public installer positioning, Germany VOC, persuasion evidence
strength_of_evidence: medium
geography: Germany
region_applicability: local/regional installer proof matters
persona_applicability: trust/risk skeptic, ROI planner, technical-control optimizer, climate confirmer, multi-tech system builder
funnel_stage: post-quote proof and trust repair
quote_stage_relevance: direct
quote_or_data_excerpt: Upstream sources support local references, named contact, warranty/service proof, installation quality, assumptions, and component/process evidence.
counterevidence: Proof assets can backfire if fabricated, generic, stale, non-local, or not permissioned.
limitations: No proof-asset conversion study.
product_implication: Store proof assets with type, source, permission, region, product similarity, date, and approved claims.
message_implication: Do not invent testimonials, references, neighborhood claims, reviews, or credentials.
action_implication: Recommend proof asset only when it matches the blocker and passes permission/source checks.
data_fields_required: [proof_asset_id, proof_type, source_url_or_file, permission_status, project_region, product_mix, verified_status, approved_claims, expires_at, owner]
validation_needed: Ask installers/Reonic for real demo proof assets and approval rules.
```

```yaml
evidence_id: A7-E13
claim: Multi-technology hesitation should trigger a system roadmap or phased vs all-at-once comparison rather than separate product follow-ups.
claim_category: multi_technology_strategy
supporting_source_ids: [A7-S01, A7-S02, A7-S03, A7-S04]
upstream_ids: [A0-E01, A0-E13, E09, E10, E11, VOC-E07, VOC-E08, VOC-E09, E04-007, E04-009]
evidence_type: Reonic scope plus homeowner motive/objection evidence
strength_of_evidence: medium
geography: Germany
region_applicability: Germany; local grid, tariff, and subsidy context required
persona_applicability: multi-tech system builder, autarky optimizer, technical-control optimizer, ROI planner
funnel_stage: quote design and post-quote negotiation
quote_stage_relevance: direct
quote_or_data_excerpt: PV often acts as entry point to storage, wallbox/EV, heat pump, and HEMS; battery and heat-pump concerns require scenario-specific proof.
counterevidence: Full bundles can create affordability shock; not every PV lead wants multi-tech.
limitations: No A/B evidence that roadmap improves conversion.
product_implication: Add roadmap screen/card with phase 1, optional phase 2, dependencies, cost impact, and future-ready assumptions.
message_implication: Explain integration benefits and tradeoffs; avoid claiming bundle is mandatory unless dependency is real.
action_implication: Recommend phased roadmap, battery-now/later comparison, or heat-pump monthly-burden consult.
data_fields_required: [quoted_products, optional_addons, active_variant, future_load_notes, ev_plan, heat_pump_plan, battery_reason, dependency_notes, phase_plan]
validation_needed: Test roadmap vs full-bundle follow-up for complex quotes.
```

```yaml
evidence_id: A7-E14
claim: Ghosting risk, close readiness, and predicted action value should be shown as transparent hypotheses until Reonic outcome data validates the model.
claim_category: predictive_insights
supporting_source_ids: [A7-S01, A7-S02, A7-S03, A7-S05, A7-S06]
upstream_ids: [A0-E15, E18, VOC-E18, E05-014, E05-015, A6-E15, A6-E16]
evidence_type: public evidence limitation plus experimentation method
strength_of_evidence: high that validation is missing; low for predictor weights
geography: Germany-first
region_applicability: all
persona_applicability: all
funnel_stage: prioritization and analytics
quote_stage_relevance: direct
quote_or_data_excerpt: Upstream agents consistently note no internal CRM outcome data and no public outcome-linked predictors.
counterevidence: Reonic may have private lead scoring data not available to agents.
limitations: Agent 7 cannot validate predictive weights.
product_implication: Use "risk hypothesis" labels, factor chips, confidence, and manual override; do not present scores as facts.
message_implication: Never tell homeowners "we know you are about to churn/ghost/sign"; keep predictions installer-facing.
action_implication: Prioritize leads using explainable heuristics and collect outcomes for calibration.
data_fields_required: [risk_factors, confidence_label, validation_status, manual_override_reason, outcome_label, signed_at, lost_reason, attempt_history]
validation_needed: Export anonymized quote-to-contract history and run feature/outcome analysis.
```

```yaml
evidence_id: A7-E15
claim: The assistant should support A/B test ideas, but not declare tactic winners without sufficient randomized outcome data and guardrails.
claim_category: experimentation
supporting_source_ids: [A7-S05, A7-S06]
upstream_ids: [E05-014, E05-015, E05-022, A6-E16]
evidence_type: experimentation method literature and product synthesis
strength_of_evidence: high for method; unknown for Reonic feasibility
geography: method general; Germany implementation must preserve consent/ethics
region_applicability: cross-installer pooled testing may be needed
persona_applicability: all, with eligibility filters
funnel_stage: post-launch learning and PoC demo optionality
quote_stage_relevance: indirect but useful
quote_or_data_excerpt: Agent 5 recommends balanced response vs one-sided, recommended-plan summary vs option dump, local proof vs no proof, and scheduled-next-step prompt vs generic follow-up as testable hypotheses.
counterevidence: Small installer volumes may be underpowered.
limitations: No sample-size/funnel-volume data.
product_implication: Add optional experiment card with hypothesis, eligibility, variants, primary outcome, guardrails, and "insufficient evidence" state.
message_implication: Both variants must be truthful, consented, and claim-checked.
action_implication: Track next-step booked, completed interaction, signed contract, opt-out, complaint, manual override, and lost reason.
data_fields_required: [experiment_id, eligibility_rule, assignment_unit, variant_id, randomized_at, primary_metric, guardrail_metrics, sample_size, consent_filters, analysis_status]
validation_needed: Confirm funnel volume and analytics instrumentation.
```

```yaml
evidence_id: A7-E16
claim: The assistant should not create artificial urgency, unsupported claims, fake proof, demographic targeting, or pressure after opt-out/negative sentiment.
claim_category: red_lines
supporting_source_ids: [A7-S02, A7-S03, A7-S04, A7-S05, A7-S06]
upstream_ids: [E16, E18, VOC-E01, VOC-E18, E04-020, E04-021, E04-022, E05-016, E05-018, E05-019, E05-021, A6-E13]
evidence_type: persona ethics, VOC, Germany compliance, consumer protection, persuasion red lines
strength_of_evidence: high
geography: Germany/EU with solar ethics transfer from US where noted
region_applicability: Germany-first
persona_applicability: all
funnel_stage: all generated strategy and messaging
quote_stage_relevance: direct
quote_or_data_excerpt: Upstream sources repeatedly warn against pressure, unsupported savings/incentives, false urgency, fake reviews, hidden claims, and sensitive inference.
counterevidence: Real quote validity, verified incentive deadlines, customer-requested callbacks, and explicit stakeholder review can be used when sourced.
limitations: Exact legal enforcement depends on final product behavior.
product_implication: Add refusal/rewrite rules and compliance warnings inside composer.
message_implication: Refuse or rewrite pressure language, fake scarcity, "free solar", guaranteed savings, unsupported CO2, fake local proof, and unconsented channel outreach.
action_implication: Recommend pause, clarification, human review, or claim verification instead of unsafe outreach.
data_fields_required: [pressure_language_detected, urgency_source, urgency_valid_until, claim_source, proof_permission_status, consent_matrix, opt_out_status, customer_confusion_signal]
validation_needed: Legal/compliance review and red-team prompt testing.
```
