# Sources: Agent 7 - Product Synthesis

Status: completed on 2026-06-20.

Scope note: Agent 7 did not run new broad internet research. The sources below are the completed upstream agent bundles named in the task. Original public source IDs are preserved in `primary_claims` and in the traceability map.

```yaml
source_id: A7-S01
title: Agent 0 Reonic public ecosystem bundle
url_or_location: research/agents/agent_00_reonic_public_ecosystem/
source_type: internal research synthesis from public Reonic product, docs, services, AI, installer, and customer-story sources
publisher_or_origin: Reonic marketing assistant research workspace
author_or_owner: Agent 0
date_published_or_collected: 2026-06-20
date_accessed: 2026-06-20
geography: Germany and Reonic public product docs
market_context: Reonic 360 Haushalt, residential renewable installer workflow
customer_segment: German residential homeowners; small and mid-sized installers; growing multi-location installers
funnel_stage: quote/request, offer sent, offer opened/viewed, unsigned, revised, digitally signed
sample_size: public product/docs pages, public customer stories, and selected installer websites
methodology: public-source desk research and synthesis
data_type: product workflow, public Reonic-like schema, installer archetypes, PoC scope constraints
primary_claims: Residential 360 Haushalt should be the PoC center; PV plus battery is the base quote, with heat pump and wallbox variants; strongest moment is "offer sent/opened but unsigned"; public docs support request, offer, option, signature, CRM, email template, portal, calendar/task, and customer-upload mock fields. Key upstream evidence/source IDs: A0-E01, A0-E02, A0-E03, A0-E10, A0-E11, A0-E13, A0-E14, A0-E15; A0-S02, A0-S03, A0-S04, A0-S05, A0-S06, A0-S07, A0-S21, A0-S22, A0-S24, A0-S25, A0-S26, A0-S27.
quantitative_metrics: Reonic docs mention offer/signature validity constraints; Agent 0 did not establish conversion rates.
verbatim_customer_language: none
limitations: Public docs are incomplete and vendor-controlled; no internal Reonic schema or outcome data.
bias_risks: Public positioning and customer stories may overrepresent mature/growing installers.
confidence_rating: medium-high
relevance_to_reonic: Directly defines credible PoC placement, mock data objects, and Reonic-native UX context.
recommended_use_in_poc: Use as the foundation for quoted-customer detail, offer status, CRM task, proof asset, calendar, and debrief objects.
transferability_to_germany: high for Reonic Germany product context; unknown for conversion impact.
```

```yaml
source_id: A7-S02
title: Agent 1 persona segmentation bundle
url_or_location: research/agents/agent_01_persona_segmentation/
source_type: internal research synthesis from Germany-first homeowner surveys, consumer/advice sources, public forums, and installer review snippets
publisher_or_origin: Reonic marketing assistant research workspace
author_or_owner: Agent 1
date_published_or_collected: 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: PV, battery, heat pump, wallbox, and household energy investment decisions
customer_segment: German homeowners considering renewable-energy investments
funnel_stage: consideration and post-quote hesitation
sample_size: mixed sources; strongest survey source is KfW with 5,119 households, plus public and advisory evidence
methodology: persona evidence extraction and synthesis
data_type: motive clusters, objection clusters, persona cards, validation backlog
primary_claims: Personas should be multi-label motive and blocker scores, not fixed demographic labels; ROI/cost, independence/autarky, climate, system-building, technical control, and risk/trust are useful states; "family" should be modeled only as explicit stakeholder-review state. Key upstream evidence/source IDs: E01, E02, E03, E04, E05, E06, E08, E09, E11, E12, E13, E16, E18; S01, S02, S03, S08, S11.
quantitative_metrics: KfW 2025 and other sources provide motive/barrier shares, but not quote-stage conversion effects.
verbatim_customer_language: German keyword examples are in Agent 1 findings; use as detection hypotheses only.
limitations: No internal Reonic CRM, quote notes, or win/loss data; forums and reviews are not prevalence evidence.
bias_risks: Vendor surveys, technical forums, and public reviews may skew motive and objection language.
confidence_rating: high for ROI/risk dimensions; medium for climate/autarky/system-building; unknown for family-as-persona.
relevance_to_reonic: Defines the strategy engine's motive and blocker scoring dimensions.
recommended_use_in_poc: Show top motive, top blocker, confidence, and clarifying question rather than assigning one persona.
transferability_to_germany: high, with outcome validation still needed.
```

```yaml
source_id: A7-S03
title: Agent 2 voice-of-customer bundle
url_or_location: research/agents/agent_02_voice_of_customer/
source_type: internal research synthesis from German public reviews, forums, Reddit, consumer advice, and complaint reporting
publisher_or_origin: Reonic marketing assistant research workspace
author_or_owner: Agent 2
date_published_or_collected: 2026-06-20
date_accessed: 2026-06-20
geography: Germany, with some DACH forum context
market_context: residential PV, battery, heat pump, wallbox quote evaluation and installer trust
customer_segment: German homeowners evaluating renewable-energy offers
funnel_stage: post-quote evaluation, comparison shopping, objection handling, pre-contract trust building
sample_size: broad public VOC sample, not statistically representative
methodology: Germany-first public VOC coding and synthesis
data_type: customer language, objection tags, trust signals, proof asset implications
primary_claims: Pressure, unclear seller identity, tone mismatch, and vague promises damage trust; responsiveness and one contact help; itemized proposal clarity matters; ROI, battery, winter, heat-pump monthly burden, roof/property risk, external delay, aftercare, competitor offers, and co-decision-makers need distinct tags. Key upstream evidence/source IDs: VOC-E01 through VOC-E18; VOC-S01, VOC-S02, VOC-S03, VOC-S07, VOC-S20, VOC-S21, VOC-S23, VOC-S26, VOC-S27, VOC-S29, VOC-S31, VOC-S32.
quantitative_metrics: None used as prevalence; review/forum counts are not representative.
verbatim_customer_language: Tagged language includes "lohnt sich", "schoen gerechnet", "zu teuer", "bauseits", "Winter", "WP", and "Rundum-sorglos"; keep exact wording in German copy review.
limitations: Public reviews and forums identify language and failure modes, not frequency or causal impact.
bias_risks: Complaint sources overrepresent failures; forum users overrepresent technical/price-sensitive buyers.
confidence_rating: medium overall; high for proposal-clarity need because consumer guidance and forum evidence align.
relevance_to_reonic: Drives blocker detection, proposal clarity, trust repair, and proof asset states.
recommended_use_in_poc: Use as detection and routing evidence, not prevalence weighting.
transferability_to_germany: high for language and guardrail themes; outcome impact requires CRM validation.
```

```yaml
source_id: A7-S04
title: Agent 4 Germany market economics and compliance bundle
url_or_location: research/agents/agent_04_germany_market_economics/
source_type: internal research synthesis from official German market, regulator, consumer, tax, finance, grid, and compliance sources
publisher_or_origin: Reonic marketing assistant research workspace
author_or_owner: Agent 4
date_published_or_collected: 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: PV economics, feed-in tariffs, negative-price/export rules, regional yield, subsidies, finance, tax, grid paperwork, outreach compliance
customer_segment: German residential PV and whole-home energy prospects
funnel_stage: quote explanation, ROI proof, finance/subsidy follow-up, paperwork scheduling, channel gating
sample_size: official/regulatory/consumer source synthesis
methodology: Germany-first desk research with time-sensitive facts checked on 2026-06-20
data_type: market facts, legal/compliance guardrails, mock defaults, claim-check requirements
primary_claims: ROI should use actual customer tariff or dated fallback; self-consumption and regional yield matter; feed-in, tax, finance, local subsidy, MaStR, VNB, smart-meter/export, and outreach rules are date-sensitive; calls, email, SMS, WhatsApp, and tracking require consent/purpose checks. Key upstream evidence/source IDs: E04-001 through E04-023; S04-001, S04-004, S04-005, S04-012, S04-013, S04-015, S04-017, S04-018, S04-019, S04-020, S04-021.
quantitative_metrics: Current examples include 37.0-37.2 ct/kWh fallback electricity price, feed-in tariff window values, regional PVGIS yield examples, self-consumption heuristics, MaStR one-month registration deadline.
verbatim_customer_language: none
limitations: Legal interpretation, subsidies, tariffs, finance rates, and export rules need freshness checks and counsel/product validation.
bias_risks: Low for official sources; medium where consumer or industry summaries are used.
confidence_rating: high for compliance guardrails and official deadlines; medium for economic defaults.
relevance_to_reonic: Defines the claim checker, consent gate, ROI assumption drawer, and Germany-first data model.
recommended_use_in_poc: Store market fact source, checked_at, validity window, editable assumptions, and channel consent matrix.
transferability_to_germany: high; Germany-specific.
```

```yaml
source_id: A7-S05
title: Agent 5 persuasion evidence bundle
url_or_location: research/agents/agent_05_persuasion_evidence/
source_type: internal research synthesis from Germany trust evidence, consumer guidance, legal sources, solar ethics sources, and indirect behavioral/experimentation literature
publisher_or_origin: Reonic marketing assistant research workspace
author_or_owner: Agent 5
date_published_or_collected: 2026-06-20
date_accessed: 2026-06-20
geography: Germany, EU, US/general where marked transferable
market_context: ethical post-quote persuasion, A/B tests, multi-channel consent, red lines
customer_segment: residential renewable-energy buyers
funnel_stage: post-quote follow-up, objection handling, experiment design
sample_size: mixed literature and guidance; no German quote-stage solar RCT found
methodology: evidence synthesis and transferability labeling
data_type: persuasion mechanisms, guardrails, proof asset rules, A/B testing methods
primary_claims: Follow-up should be decision support and risk reduction, not pressure; every action should address a stated concern, use available proof, pass channel consent, and avoid red lines; balanced objection handling is preferable to blanket reassurance; A/B tests should use contract-relevant outcomes, not opens alone. Key upstream evidence/source IDs: E05-001 through E05-022; S05-002, S05-004, S05-005, S05-008, S05-011, S05-012, S05-014, S05-015, S05-016, S05-018, S05-019, S05-020.
quantitative_metrics: None should be used as Germany quote-stage effect sizes.
verbatim_customer_language: none
limitations: Several mechanisms are indirect; exact cadence and tactic performance need Reonic outcome data.
bias_risks: Transferability risk from US/general behavioral studies.
confidence_rating: medium-high for ethical and compliance guardrails; medium-low for exact cadence/channel performance.
relevance_to_reonic: Defines strategy explanation, red-line refusal, proof-source checks, and experiment instrumentation.
recommended_use_in_poc: Show "why this action" as customer-centered risk reduction with guardrail and proof badges.
transferability_to_germany: high for Germany/EU compliance and consumer guidance; lower for US behavioral mechanisms.
```

```yaml
source_id: A7-S06
title: Agent 6 action, calendar, and debrief bundle
url_or_location: research/agents/agent_06_action_calendar_debrief/
source_type: internal research synthesis from upstream evidence plus targeted channel and scheduling sources
publisher_or_origin: Reonic marketing assistant research workspace
author_or_owner: Agent 6
date_published_or_collected: 2026-06-20
date_accessed: 2026-06-20
geography: Germany plus general field-service scheduling where marked transferable
market_context: next-best-action, channel eligibility, installer capacity, travel-aware scheduling, debrief loop
customer_segment: German homeowners and small/mid renewable installers
funnel_stage: post-quote action orchestration and post-action learning
sample_size: upstream evidence plus targeted official/platform/operations sources
methodology: bounded action playbook synthesis
data_type: action taxonomy, scheduling rules, debrief object, UI states
primary_claims: The assistant should be an action orchestrator: diagnose blocker, gate consent, choose the lowest-pressure blocker-resolving action, schedule it with capacity/travel awareness, debrief it, and update strategy. Key upstream evidence/source IDs: A6-E01 through A6-E16; A6-S01 through A6-S09.
quantitative_metrics: Travel optimization literature is not solar-specific; no Reonic thresholds established.
verbatim_customer_language: none
limitations: No legal review of exact service/advertising classifications; no internal Reonic data for timing, cadence, scoring, travel, or debrief burden.
bias_risks: Field-service sources are transferable operations logic, not solar conversion evidence.
confidence_rating: medium-high for action-loop structure; high for consent/proposal-clarity gates; medium for scheduling/travel heuristics; low-medium for video/cadence.
relevance_to_reonic: Most direct source for PoC screens, state machine, action types, calendar rules, and debrief.
recommended_use_in_poc: Implement a Next Best Action card plus scheduler and debrief modal before a full sequence builder.
transferability_to_germany: high for consent/proposal/trust states; medium for travel and capacity heuristics.
```

```yaml
source_id: A7-S07
title: Agent 3 objection and sales-process bundle
url_or_location: research/agents/agent_03_objection_sales_process/
source_type: completed internal research workstream, completed after Agent 7 synthesis and not used inside Agent 7 evidence
publisher_or_origin: Reonic marketing assistant research workspace
author_or_owner: Agent 3
date_published_or_collected: 2026-06-20
date_accessed: not accessed for the original Agent 7 synthesis
geography: Germany-first
market_context: post-quote objection handling and sales-process routing
customer_segment: German residential renewable-energy quote prospects
funnel_stage: offer sent to contract signed
sample_size: upstream synthesis from Agents 0, 1, 2, 4, 5, and 6
methodology: consolidation of completed upstream evidence into objection library and routing rules
data_type: objection categories, action routing, CRM fields, compliance gates, debrief questions
primary_claims: Completed after Agent 7. No Agent 3 claims were used in Agent 7 findings, but top-level deliverables now integrate Agent 3's proposal clarity, ROI, trust, battery, winter, roof, paperwork, consent, and debrief rules.
quantitative_metrics: none
verbatim_customer_language: none
limitations: It is a synthesis of upstream public evidence, not internal Reonic outcome data.
bias_risks: Inherits upstream public-review/forum bias where applicable.
confidence_rating: high for proposal/claim/consent gates; medium for cadence and action weights.
relevance_to_reonic: Strong for final top-level product rules; not part of the original Agent 7 evidence records.
recommended_use_in_poc: Use the top-level deliverables and Agent 3 files for final objection/routing logic.
transferability_to_germany: high for Germany-first rules with validation still needed.
```

## Traceability Map

| Product area | Agent 7 source | Most-used upstream evidence IDs | Most-used upstream source IDs |
| --- | --- | --- | --- |
| Reonic workflow and mock schema | A7-S01 | A0-E01, A0-E02, A0-E03, A0-E10, A0-E11, A0-E14, A0-E15 | A0-S02, A0-S03, A0-S04, A0-S21, A0-S22, A0-S24, A0-S25, A0-S26 |
| Persona and blocker scoring | A7-S02 | E01, E02, E04, E06, E08, E09, E11, E12, E16, E18 | S01, S02, S03, S08, S11 |
| Voice-of-customer objections | A7-S03 | VOC-E01, VOC-E02, VOC-E03, VOC-E04, VOC-E05, VOC-E07, VOC-E08, VOC-E09, VOC-E10, VOC-E11, VOC-E13, VOC-E15, VOC-E18 | VOC-S01, VOC-S02, VOC-S03, VOC-S20, VOC-S21, VOC-S27, VOC-S29, VOC-S31, VOC-S32 |
| Germany economics and compliance | A7-S04 | E04-001, E04-002, E04-007, E04-011, E04-017, E04-018, E04-019, E04-020, E04-021, E04-022 | S04-001, S04-004, S04-005, S04-012, S04-013, S04-017, S04-018, S04-019, S04-020, S04-021 |
| Persuasion guardrails and tests | A7-S05 | E05-002, E05-005, E05-009, E05-014, E05-016, E05-017, E05-018, E05-020, E05-021, E05-022 | S05-002, S05-004, S05-005, S05-008, S05-011, S05-012, S05-018, S05-019, S05-020 |
| Action, scheduling, and debrief | A7-S06 | A6-E01, A6-E02, A6-E08, A6-E09, A6-E10, A6-E11, A6-E12, A6-E13, A6-E14, A6-E15, A6-E16 | A6-S01, A6-S02, A6-S03, A6-S04, A6-S05, A6-S06, A6-S07, A6-S08, A6-S09 |
