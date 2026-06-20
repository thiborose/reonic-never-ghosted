# Sources: Agent 6 - Action, Calendar, And Debrief

Status: completed bounded pass on 2026-06-20.

This pass uses completed upstream agent evidence plus a small targeted web check for current channel and scheduling constraints. Upstream source IDs are preserved in notes so product synthesis can trace back to original records.

```yaml
source_id: A6-S01
title: Agent 0 Reonic public ecosystem findings and handoff
url_or_location: research/agents/agent_00_reonic_public_ecosystem/findings.md; research/agents/agent_00_reonic_public_ecosystem/handoff.md
source_type: internal research synthesis from public Reonic/product/installer sources
publisher_or_origin: Reonic marketing assistant research workspace
author_or_owner: Agent 0
date_published_or_collected: 2026-06-20
date_accessed: 2026-06-20
geography: Germany and Reonic public product docs
market_context: Reonic 360 Haushalt, residential renewable installer workflow
customer_segment: residential homeowners; small and mid-sized installers
funnel_stage: offer sent, viewed/opened, unsigned, revised, signed
sample_size: public product docs plus selected public installer/customer-story sources
methodology: public-source desk research and synthesis
data_type: product workflow, mock schema, installer archetype, action-loop implications
primary_claims: Reonic public docs support a post-offer assistant using offer status, assigned owner, templates, CRM tasks, offer tracking, variants, signature validity, customer uploads, calendar/action data, and debrief/outcome fields. Underlying source IDs include A0-S03, A0-S04, A0-S06, A0-S07, A0-S13, A0-S21, A0-S22, A0-S23, A0-S24, and A0-S25.
quantitative_metrics: Reonic docs mention maximum 60-day signature validity in offer planning; other metrics are example/workflow fields.
verbatim_customer_language: none
limitations: Public docs and public customer stories do not prove private feature usage, conversion impact, or complete schema.
bias_risks: Vendor/product-publication bias.
confidence_rating: medium-high
relevance_to_reonic: Directly supports the PoC data model and action-loop placement inside quoted-customer workflow.
recommended_use_in_poc: Use as the base for mock customer, quote, CRM, task, calendar, action, and debrief objects.
transferability_to_germany: High for Reonic workflow; conversion rules still need internal data.
```

```yaml
source_id: A6-S02
title: Agent 2 voice-of-customer findings and handoff
url_or_location: research/agents/agent_02_voice_of_customer/findings.md; research/agents/agent_02_voice_of_customer/handoff.md
source_type: internal research synthesis from German reviews, forums, consumer advice, and complaint evidence
publisher_or_origin: Reonic marketing assistant research workspace
author_or_owner: Agent 2
date_published_or_collected: 2026-06-20
date_accessed: 2026-06-20
geography: Germany, with some DACH forum context
market_context: residential PV, battery, heat pump, wallbox quote evaluation and installer trust
customer_segment: German homeowners evaluating renewable-energy offers
funnel_stage: post-quote evaluation, comparison shopping, pre-contract objections
sample_size: broad public-review/forum/advice sample, not statistically representative
methodology: Germany-first public VOC synthesis
data_type: customer language, objection tags, sales-process and installation-quality risk themes
primary_claims: Trust is damaged by pressure and unclear identity; responsiveness and same contact build trust; good consultation can still lose to price/referrals; itemized comparable offers and visible ROI assumptions matter; winter/battery/heat-pump concerns require specific proof; delays, roof risk, aftercare, and family/advisor review shape follow-up. Key underlying evidence IDs include VOC-E01 through VOC-E18.
quantitative_metrics: Not used for prevalence; review/forum counts are not representative.
verbatim_customer_language: Preserved in Agent 2 evidence records only.
limitations: Review and forum evidence is self-selected and cannot rank frequency.
bias_risks: Review extremes, technically engaged forum users, complaint-source overrepresentation.
confidence_rating: medium
relevance_to_reonic: Drives action selection by objection, trust state, proposal clarity, and proof need.
recommended_use_in_poc: Use tags such as trust_repair_needed, needs_itemized_quote, roi_claim_blocked_missing_assumptions, winter_chart_needed, and co_decision_maker_summary.
transferability_to_germany: High for Germany public language; prevalence needs Reonic CRM validation.
```

```yaml
source_id: A6-S03
title: Agent 4 Germany market economics and compliance findings and handoff
url_or_location: research/agents/agent_04_germany_market_economics/findings.md; research/agents/agent_04_germany_market_economics/handoff.md
source_type: internal research synthesis from official German market, regulator, consumer, and compliance sources
publisher_or_origin: Reonic marketing assistant research workspace
author_or_owner: Agent 4
date_published_or_collected: 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: PV economics, feed-in tariffs, finance, subsidies, grid paperwork, outreach consent
customer_segment: German residential PV and whole-home energy prospects
funnel_stage: quote explanation, finance/subsidy follow-up, paperwork scheduling, channel gating
sample_size: official/regulatory source synthesis
methodology: Germany-first desk research
data_type: market facts, legal/compliance guardrails, mock defaults
primary_claims: ROI should use actual tariff or dated market fallback; self-consumption is the main economic lever; feed-in, tax, finance, subsidy, MaStR, VNB, and outreach rules are date-sensitive; call, email, SMS, WhatsApp, and tracking recommendations require consent checks. Key source IDs include S04-001, S04-004, S04-008, S04-009, S04-017, S04-018, S04-019, S04-020, S04-021, and S04-022.
quantitative_metrics: Current feed-in/electricity/tax/registration values are in Agent 4; this Agent 6 pass uses only action implications, not recalculations.
verbatim_customer_language: none
limitations: Legal, finance, subsidy, and tariff facts require freshness checks at generation time and legal review for exact product behavior.
bias_risks: Low for official sources; medium where industry summaries are used.
confidence_rating: high for compliance guardrails; medium for economic defaults.
relevance_to_reonic: Determines consent gating, paperwork tasks, finance actions, and claim-blocked states.
recommended_use_in_poc: Store consent matrix, tracking consent, market fact checked_at metadata, grid/paperwork status, and financing/local subsidy verification status.
transferability_to_germany: High; Germany-specific.
```

```yaml
source_id: A6-S04
title: Agent 5 persuasion evidence findings and handoff
url_or_location: research/agents/agent_05_persuasion_evidence/findings.md; research/agents/agent_05_persuasion_evidence/handoff.md
source_type: internal research synthesis from Germany trust evidence, consumer guidance, legal sources, and indirect behavioral evidence
publisher_or_origin: Reonic marketing assistant research workspace
author_or_owner: Agent 5
date_published_or_collected: 2026-06-20
date_accessed: 2026-06-20
geography: Germany, EU, US/general where marked transferable
market_context: ethical post-quote persuasion, A/B testing, channel compliance
customer_segment: residential renewable-energy buyers
funnel_stage: post-quote follow-up and action orchestration
sample_size: mixed literature and guidance; no German post-quote solar RCT found
methodology: evidence synthesis and transferability labeling
data_type: persuasion mechanisms, red lines, experimentation guidance
primary_claims: Follow-up should diagnose hesitation before writing copy, choose the lowest-pressure action that resolves the blocker, use factual proof and clear next steps, cap stale follow-up, consent-gate channels, and A/B test against contract-relevant outcomes rather than opens alone. Key sources include S05-004, S05-005, S05-010, S05-011, S05-012, S05-018, S05-019, and S05-020.
quantitative_metrics: No Germany-specific quote-stage cadence metrics; experimentation methods are general.
verbatim_customer_language: none
limitations: Several behavioral findings are indirect or non-Germany; exact cadence must be validated.
bias_risks: Transferability risk for US/general behavioral studies.
confidence_rating: medium-high for ethical/product guardrails; medium-low for exact cadence.
relevance_to_reonic: Supports next-best-action reasoning, debrief, experiment flags, and guardrails.
recommended_use_in_poc: Use action reasoning with "concern addressed, proof available, consent valid, red lines clear" checks.
transferability_to_germany: High for Germany/EU compliance and consumer guidance; lower for US behavioral findings.
```

```yaml
source_id: A6-S05
title: Unerlaubte Telefonwerbung
url_or_location: https://www.bundesnetzagentur.de/unerlaubteTelefonwerbung
source_type: official regulator guidance
publisher_or_origin: Bundesnetzagentur
author_or_owner: Bundesnetzagentur
date_published_or_collected: current public page accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: consumer telephone advertising and enforcement
customer_segment: consumers/homeowners
funnel_stage: outbound call and voicemail eligibility
sample_size: not applicable
methodology: regulator guidance
data_type: compliance guidance
primary_claims: Consumer advertising callers need prior express consent, including companies with an existing customer relationship; consent must be documented and producible to the regulator on request.
quantitative_metrics: Bundesnetzagentur guidance references enforcement authority; fine levels are documented in upstream S05-019/S04-019.
verbatim_customer_language: none
limitations: Does not resolve every borderline between requested service follow-up and advertising.
bias_risks: Low; official regulator guidance.
confidence_rating: high
relevance_to_reonic: Direct call eligibility guardrail for German consumer prospects.
recommended_use_in_poc: Suppress call and voicemail sales actions unless phone consent/requested-service basis is present and documented.
transferability_to_germany: High; Germany-specific.
```

```yaml
source_id: A6-S06
title: WhatsApp Business Messaging Policy
url_or_location: https://whatsappbusiness.com/policy/
source_type: platform policy
publisher_or_origin: WhatsApp / Meta
author_or_owner: WhatsApp
date_published_or_collected: page displayed as updated in 2026; accessed 2026-06-20
date_accessed: 2026-06-20
geography: global platform policy; Germany requires additional UWG/GDPR compliance
market_context: WhatsApp Business messaging
customer_segment: message recipients
funnel_stage: SMS/WhatsApp follow-up and service replies
sample_size: not applicable
methodology: platform policy
data_type: messaging rules
primary_claims: Businesses must respect opt-out requests; initiated conversations require approved message templates; replies inside the 24-hour customer-service window can be non-template; automation requires clear escalation paths.
quantitative_metrics: 24-hour service window for user-initiated conversations.
verbatim_customer_language: none
limitations: Platform policy does not replace German legal consent requirements; exact API plan and template approval affect implementation.
bias_risks: Platform operator policy.
confidence_rating: high for platform rules; medium for Germany sales workflow until legal review.
relevance_to_reonic: Adds WhatsApp-specific gating beyond German electronic-advertising consent.
recommended_use_in_poc: Store WhatsApp opt-in/source, last inbound message time, template eligibility, opt-out, and human escalation path.
transferability_to_germany: Medium-high when combined with German UWG/GDPR sources.
```

```yaml
source_id: A6-S07
title: Schedule requirements with travel time and distance
url_or_location: https://learn.microsoft.com/en-us/dynamics365/field-service/schedule-with-travel-time
source_type: field-service product documentation
publisher_or_origin: Microsoft Learn
author_or_owner: Microsoft
date_published_or_collected: page current as accessed 2026-06-20
date_accessed: 2026-06-20
geography: global field-service software practice
market_context: technician/resource scheduling with travel time
customer_segment: field-service organizations
funnel_stage: virtual/in-person consultation and site-visit scheduling
sample_size: product workflow documentation
methodology: field-service software documentation
data_type: scheduling constraints and workflow
primary_claims: Field-service scheduling can calculate driving time and distance for on-site requirements when resource locations, working hours, and booking context are known; schedule boards should display travel time; manual scheduling needs explicit travel-time updates.
quantitative_metrics: none
verbatim_customer_language: none
limitations: Vendor product documentation; not Germany solar-specific and does not provide conversion thresholds.
bias_risks: Vendor framing.
confidence_rating: medium
relevance_to_reonic: Supports calendar fields for travel time, working hours, route impact, and manual override.
recommended_use_in_poc: Include travel minutes, start/end location, route cluster, working-hours fit, and virtual alternative in action recommendations.
transferability_to_germany: Medium; operational principle transfers, exact values need installer data.
```

```yaml
source_id: A6-S08
title: Decision support for the Technician Routing and Scheduling Problem
url_or_location: https://arxiv.org/pdf/2211.16968
source_type: academic preprint
publisher_or_origin: arXiv; DTU Management, Technical University of Denmark
author_or_owner: Mette Gamst and David Pisinger
date_published_or_collected: 2022-11-01 preprint
date_accessed: 2026-06-20
geography: general/Europe-oriented operations research; real-life telecom data example
market_context: technician routing and scheduling
customer_segment: field-service companies
funnel_stage: scheduling and capacity planning
sample_size: benchmark and real-life TRSP data in paper
methodology: optimization/decision-support model evaluated on literature and real-life data
data_type: operations research
primary_claims: Technician routing and scheduling assigns tasks to technicians subject to skills, time windows, travel times, and routing costs; decision support can evaluate digitizing or outsourcing tasks and reduce travel time in a real-life instance.
quantitative_metrics: Paper reports around 16% travel-time reduction in a real-life instance.
verbatim_customer_language: none
limitations: Preprint, not solar-specific, not small German installers, and optimization results may not transfer directly.
bias_risks: Academic model assumptions.
confidence_rating: medium
relevance_to_reonic: Supports treating virtual consultation as a capacity-saving alternative and routing site visits by time windows/travel cost.
recommended_use_in_poc: Use route cost, skill fit, time window, and task digitization/virtualization fields in calendar scoring.
transferability_to_germany: Medium for operations logic; validate with installer calendars.
```

```yaml
source_id: A6-S09
title: The Field Technician Scheduling Problem with Experience-Dependent Service Times
url_or_location: https://www.mdpi.com/2227-7390/11/21/4562
source_type: peer-reviewed open-access academic article
publisher_or_origin: Mathematics / MDPI
author_or_owner: Vincent F. Yu, Yueh-Sheng Lin, Panca Jodiawan, Shih-Wei Lin, Yu-Chi Lai
date_published_or_collected: 2023
date_accessed: 2026-06-20
geography: general operations research
market_context: field technician scheduling with limited resources, skills, routing, and service-time variance
customer_segment: field-service operators
funnel_stage: appointment scheduling and capacity allocation
sample_size: generated benchmark instances based on public data
methodology: mixed-integer programming and metaheuristic evaluation
data_type: operations research
primary_claims: Field technician scheduling must match tasks with available technicians, sequence tasks, account for limited resources, and consider skill-dependent service times; not all tasks can necessarily be served in a planning period.
quantitative_metrics: No Germany solar metrics used in this pass.
verbatim_customer_language: none
limitations: Not Germany-specific, not solar sales-specific, and benchmark-generated.
bias_risks: Academic abstraction.
confidence_rating: medium
relevance_to_reonic: Supports capacity rules that consider owner/skill availability, estimated duration, and not scheduling every lead immediately.
recommended_use_in_poc: Model action owner skill, duration, task priority, and capacity conflict before recommending visits or expert calls.
transferability_to_germany: Medium for scheduling logic; validate with Reonic-connected installer operations.
```
