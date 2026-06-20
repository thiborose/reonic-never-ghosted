# Evidence: Agent 0

Status: completed 2026-06-20.

Each item includes source IDs that map to full URLs in `sources.md`. Public customer/logo/testimonial evidence is labeled as a public signal only.

```yaml
evidence_id: A0-E01
claim: Reonic publicly emphasizes a residential all-in-one household workflow covering PV, battery storage, EV charging/wallboxes, and heat pumps, not PV-only quoting.
claim_category: product_scope
supporting_source_ids: [A0-S01, A0-S02, A0-S15, A0-S16, A0-S17, A0-S18]
source_urls:
  - https://reonic.com/de-de/
  - https://reonic.com/de-de/product/360h/
  - https://www.enerix.de/presse/pressemitteilungen/partnerschaft-enerix-reonic/
  - https://pvgreen.de/
  - https://www.mysolarexpress.de/
  - https://resoco.eu/
date_accessed: 2026-06-20
evidence_type: Reonic product pages, partner announcement, public installer websites
strength_of_evidence: high
geography: Germany
region_applicability: Germany-first; direct German product and installer evidence
persona_applicability: all homeowner personas, with product-mix variants by need
funnel_stage: lead to quote to signed offer to installation
quote_stage_relevance: The assistant must interpret quote contents across PV, storage, heat pump, wallbox, and combined-package economics.
quote_or_data_excerpt: Reonic 360° Haushalt lists photovoltaic systems, energy storage, EV charging infrastructure, and heat pumps in one workspace; Enerix announces PV and heat-pump planning in one tool.
counterevidence: Reonic also has commercial and utility pages, so residential is not the whole company scope.
limitations: Sources are public and mostly vendor/installer controlled; actual product usage mix is not verified by internal data.
product_implication: Prioritize a residential multi-technology quote record: PV as base, battery common, heat pump and wallbox as optional/adjacent modules.
message_implication: Strategy copy should compare "PV-only" vs "whole home energy" benefits when the quote includes multiple technologies.
action_implication: Assistant should recommend proposal revisions or calls when cross-technology dependencies are unclear to the homeowner.
data_fields_required: product_scope, pv_kwp, battery_kwh, heat_pump_scope, wallbox_scope, home_energy_goal, dependency_notes
validation_needed: Validate actual Reonic customer portfolio mix and most-used modules with internal usage data.
```

```yaml
evidence_id: A0-E02
claim: The PoC should center on the post-quote path from "offer sent" to "digital acceptance/signature" because Reonic publicly exposes offer sending, open/view tracking, variants, profitability, and digital signature as core sales features.
claim_category: funnel_scope
supporting_source_ids: [A0-S03, A0-S22, A0-S24]
source_urls:
  - https://reonic.com/de-de/product/360h/sales/
  - https://docs.reonic.de/docs/h360/plan/
  - https://docs.reonic.de/docs/h360/angebote/
date_accessed: 2026-06-20
evidence_type: Reonic product page and public documentation
strength_of_evidence: high
geography: Germany/product docs
region_applicability: Germany direct; product docs likely global
persona_applicability: all quoted homeowner prospects
funnel_stage: quote sent, viewed, revised, signed
quote_stage_relevance: Directly defines the assistant's target moment.
quote_or_data_excerpt: Offer workflow includes email/portal dispatch, real-time open/view tracking, variants, payment, energy flows, profitability/break-even, customer message, and signature validity.
counterevidence: Reonic also supports pre-lead and installation workflows; this does not prove quote follow-up is the highest pain point internally.
limitations: No conversion-rate or loss-rate data was public.
product_implication: Build the PoC around a quoted customer detail view with offer engagement, variant comparison, ROI/payback, and signature status.
message_implication: Generated strategy should reference the exact offer variant and financial/technical proof already present in the quote.
action_implication: Next-best actions should include "call after opened but unsigned", "send revised variant", "explain financing", and "pause until appointment".
data_fields_required: offer_sent_at, opened_at, viewed_count, current_signature_state, expiry_at, selected_variant, variants, payback_period, roi, customer_message
validation_needed: Confirm whether Reonic captures detailed proposal engagement events beyond public open/view claims.
```

```yaml
evidence_id: A0-E03
claim: Reonic-like CRM mock data should include customer/project status, assigned user, created date, emails, tasks, checklists, calendar appointments, tags/statuses, notes, and integrations with Google/Microsoft calendars.
claim_category: mock_data_model
supporting_source_ids: [A0-S04, A0-S13, A0-S24, A0-S25]
source_urls:
  - https://reonic.com/de-de/product/360h/crm/
  - https://reonic.com/de-de/customer-stories/pv-green/
  - https://docs.reonic.de/docs/h360/angebote/
  - https://docs.reonic.de/docs/settings/360h/emails/
date_accessed: 2026-06-20
evidence_type: vendor product page, docs, vendor case study
strength_of_evidence: high
geography: Germany/product docs
region_applicability: Germany direct
persona_applicability: installer-facing record, not homeowner persona
funnel_stage: lead, quote, follow-up, installation handoff
quote_stage_relevance: Quote follow-up needs owner, status, communication history, and calendar availability.
quote_or_data_excerpt: CRM page lists calendar, emails, tasks/checklists, custom boards/statuses/tags; docs mention assigning offers to users and filtering by user.
counterevidence: Public docs do not show all internal CRM fields or API endpoints for calendars/tasks.
limitations: Exact Reonic data schema may differ; public docs are incomplete.
product_implication: Mock a compact CRM envelope around the quote rather than a standalone email generator.
message_implication: Drafts should use assigned-user identity and recent interaction notes.
action_implication: Assistant recommendations should be schedulable CRM tasks with due dates and owners.
data_fields_required: project_id, customer_id, board_status, assigned_user, tags, tasks, checklist_items, calendar_events, email_thread, notes, integrations
validation_needed: Confirm actual CRM/task/calendar object model through Reonic API/internal docs.
```

```yaml
evidence_id: A0-E04
claim: Reonic's existing public AI positioning makes an AI sales/action assistant plausible if it reads CRM, quote, competitor, and meeting data and explains next actions.
claim_category: ai_fit
supporting_source_ids: [A0-S01, A0-S06, A0-S07]
source_urls:
  - https://reonic.com/de-de/
  - https://reonic.com/de-de/ai-for-renewable-installers/
  - https://reonic.com/de-de/ai-whatsapp/
date_accessed: 2026-06-20
evidence_type: vendor AI pages and illustrative product examples
strength_of_evidence: medium
geography: Germany
region_applicability: Germany direct
persona_applicability: installer users; homeowner strategy indirectly
funnel_stage: lead qualification through contract closing and project work
quote_stage_relevance: Public AI features mention lead scoring, competitor-offer handling, offer text generation, meeting summaries, and next actions.
quote_or_data_excerpt: AI pages list sales AI, lead scoring, competitor-offer handling, and WhatsApp project status/next action retrieval.
counterevidence: The exact marketing-sequence assistant is not publicly described as a current Reonic product.
limitations: AI pages are vendor-controlled and may include roadmap-like positioning.
product_implication: Design the PoC as an extension of Reonic AI rather than a separate marketing automation product.
message_implication: Explain "why this action now" using quote, CRM, and behavior signals instead of generic copy generation.
action_implication: Include meeting summary/debrief capture and next task creation.
data_fields_required: lead_score, close_readiness, ghosting_risk, competitor_offer_uploaded, meeting_summary, extracted_actions, ai_reasoning
validation_needed: Confirm which AI features are live, beta, or roadmap.
```

```yaml
evidence_id: A0-E05
claim: Public Reonic customer stories skew toward medium, multi-location, or franchise-like installers with workflow standardization problems, while the research plan also wants small/mid owner-led teams.
claim_category: installer_profile
supporting_source_ids: [A0-S13, A0-S14, A0-S15, A0-S31]
source_urls:
  - https://reonic.com/de-de/customer-stories/pv-green/
  - https://reonic.com/de-de/customer-stories/my-solar-express/
  - https://www.enerix.de/presse/pressemitteilungen/partnerschaft-enerix-reonic/
  - https://northzone.com/insights/our-investment-in-reonic-empowering-renewable-energy-installers-across-europe
date_accessed: 2026-06-20
evidence_type: vendor case studies, partner announcement, investor article
strength_of_evidence: medium
geography: Germany/Europe
region_applicability: Germany for PV Green, MySolarExpress, Enerix; Europe context from Northzone
persona_applicability: installer persona, not homeowner persona
funnel_stage: operational workflow across sales and installation
quote_stage_relevance: Standardized process and owner assignment affect who follows up after a quote.
quote_or_data_excerpt: PV Green story says 9 locations and 110+ employees; MySolarExpress story says 50+ employees and 60-70 projects per month.
counterevidence: Public stories are vendor-selected and may not represent the broader Reonic customer base; prompt scope emphasizes small and mid-sized owner-led installers.
limitations: Public references underrepresent one-person/small installer workflows.
product_implication: Mock at least two installer profiles: a small owner-led installer with 20 active leads and a multi-location growth installer.
message_implication: Small-team UX should minimize effort; multi-site UX should emphasize standardization and handoff transparency.
action_implication: Scheduling recommendations should consider installer capacity and assigned-owner constraints.
data_fields_required: company_size, location_count, active_lead_count, sales_owner, backoffice_support, partner_or_franchise_status, team_calendar
validation_needed: Obtain actual customer segmentation from Reonic stakeholder/internal data.
```

```yaml
evidence_id: A0-E06
claim: Identifiable public Reonic-connected installers market one-stop residential energy packages and trust promises, not just commodity solar panels.
claim_category: installer_market_positioning
supporting_source_ids: [A0-S16, A0-S17, A0-S18, A0-S19]
source_urls:
  - https://pvgreen.de/
  - https://www.mysolarexpress.de/
  - https://resoco.eu/
  - https://www.pyourenergy.de/
date_accessed: 2026-06-20
evidence_type: public installer websites
strength_of_evidence: high
geography: Germany
region_applicability: Germany direct; specific regions include Wunstorf/Nationwide franchise, Osnabrück/national partner network, Berlin-Brandenburg, Cologne/NRW
persona_applicability: homeowners considering high-consideration energy upgrades
funnel_stage: lead capture, quote, installation promise
quote_stage_relevance: Post-quote concerns often involve trust, one-stop accountability, speed, component quality, financing, and independence.
quote_or_data_excerpt: Sites market "alles aus einer Hand", regional/personal service, PV + storage + heat pump/wallbox packages, financing, premium components, and fast installation.
counterevidence: Installer websites are marketing pages and do not prove actual customer priorities or conversion drivers.
limitations: No private CRM win/loss data; public positioning may differ from sales conversations.
product_implication: PoC should surface installer proof assets: one-contact promise, own teams, regional partner, warranty/components, financing, timeline, and administrative handling.
message_implication: Tone should be consultative and trust-building; do not over-focus on environmental claims if installer positioning centers on independence/cost/security.
action_implication: Recommend calls or proposal updates when proof assets are missing for a likely trust or timeline objection.
data_fields_required: installer_promises, service_region, own_team_claim, warranty_assets, component_brands, financing_available, installation_timeline, regional_contact
validation_needed: Check which proof claims each installer is legally comfortable using in generated messages.
```

```yaml
evidence_id: A0-E07
claim: Administrative services such as grid registration, subsidy handling, financing, photogrammetry, planning service, and oil-tank removal are public parts of Reonic's ecosystem and should appear as workflow/status context.
claim_category: operations_scope
supporting_source_ids: [A0-S08, A0-S09, A0-S10, A0-S11]
source_urls:
  - https://reonic.com/de-de/services/
  - https://reonic.com/de-de/product/360h/subsidy-service/
  - https://reonic.com/de-de/product/360h/financing/
  - https://reonic.com/de-de/product/360h/grid-registration/
date_accessed: 2026-06-20
evidence_type: vendor service pages
strength_of_evidence: medium
geography: Germany
region_applicability: Germany direct; incentive/finance/grid facts are time-sensitive
persona_applicability: homeowners with price, paperwork, feasibility, or disruption concerns
funnel_stage: quote to signature, pre-installation, post-sale
quote_stage_relevance: Financing and subsidy status can determine urgency and objection handling; grid paperwork can reassure feasibility and timeline.
quote_or_data_excerpt: Reonic pages describe grid registration, KfW service, financing inside offers, photogrammetry, planning service, and oil-tank removal.
counterevidence: Services may depend on license, product availability, current regulation, and installer eligibility.
limitations: Vendor claims are not independent; KfW and financing claims must be verified at use time.
product_implication: Include service_status objects and warnings for time-sensitive claims.
message_implication: Generated homeowner messages should say "we can check/prepare" unless official/current facts are verified.
action_implication: Recommend "verify subsidy/finance status before follow-up" tasks when missing.
data_fields_required: grid_registration_status, subsidy_program, subsidy_status, financing_option, photogrammetry_status, oil_tank_removal_needed, service_owner
validation_needed: Official sources needed for incentives, finance rates, and grid-registration obligations.
```

```yaml
evidence_id: A0-E08
claim: Public testimonials/logos identify Resoco, Invanova, MySolarExpress, D,5 Energy, PYourEnergy, and Energieversum as Reonic public signals, but they do not verify current usage or scope.
claim_category: public_signal
supporting_source_ids: [A0-S01, A0-S08, A0-S12, A0-S13, A0-S14, A0-S20]
source_urls:
  - https://reonic.com/de-de/
  - https://reonic.com/de-de/services/
  - https://reonic.com/de-de/customer-stories/
  - https://reonic.com/de-de/customer-stories/pv-green/
  - https://reonic.com/de-de/customer-stories/my-solar-express/
  - https://www.trustpilot.com/review/reonic.de
date_accessed: 2026-06-20
evidence_type: vendor testimonials/customer stories, public reviews
strength_of_evidence: low
geography: Germany, UK, broader Europe
region_applicability: Germany direct for named German installers; mixed for reviews
persona_applicability: installer proof only, not homeowner behavior
funnel_stage: broad workflow
quote_stage_relevance: Public testimonials indicate workflow themes: quote creation, CRM integration, platform consolidation, planning-to-installation control.
quote_or_data_excerpt: Reonic homepage testimonials mention offers integrated in CRM, avoiding tool switching, and control from planning to installation.
counterevidence: None of the public testimonials are independently audited usage evidence.
limitations: Vendor-selected signals; may be stale; testimonials do not prove active customer status.
product_implication: Use names only as internal research references or anonymized archetypes unless Reonic approves public display.
message_implication: Do not expose public customer logos/testimonials in PoC as proof of current usage unless permission is confirmed.
action_implication: None for homeowner sequences; useful for installer-profile archetypes.
data_fields_required: public_signal_label, source_url, permission_status, current_usage_verified
validation_needed: Reonic approval and current customer confirmation before using names/logos in UI.
```

```yaml
evidence_id: A0-E09
claim: External review evidence supports that users associate Reonic with renewable design, quoting, proposal professionalism, PV, heat pumps, storage, ASHP, and EV, but review evidence is weak and self-selected.
claim_category: external_signal
supporting_source_ids: [A0-S20]
source_urls:
  - https://www.trustpilot.com/review/reonic.de
date_accessed: 2026-06-20
evidence_type: public review platform
strength_of_evidence: low
geography: Germany and United Kingdom visible reviews
region_applicability: Mixed; Germany evidence limited
persona_applicability: installer users
funnel_stage: design, quote, project planning
quote_stage_relevance: Reviews mention customer-ready proposals and cost/energy data, matching quote-stage UX.
quote_or_data_excerpt: Visible reviews reference heat pump/solar design and quoting, PV/storage/ASHP/EV proposals, and PV/heat-pump offer generation.
counterevidence: Trustpilot says the company has not invited reviews and they may not be representative; 9% 1-star shown.
limitations: Self-selected, small public sample; not a product benchmark.
product_implication: Treat as supporting color only, not a core product rule.
message_implication: Proposal professionalism and clarity are plausible themes but need stronger customer/outcome evidence.
action_implication: None as rule; can inspire proof-asset defaults.
data_fields_required: none required beyond source label
validation_needed: Internal usage/interview data needed to confirm proposal pain points.
```

```yaml
evidence_id: A0-E10
claim: The most concrete Reonic-like mock quote schema should be derived from the public REST docs, which include offer status, customer ID, lead source, notes, demand, energy price, product options, package names, timestamps, and signature state.
claim_category: mock_data_model
supporting_source_ids: [A0-S21]
source_urls:
  - https://docs.reonic.de/docs/integrations/rest/
date_accessed: 2026-06-20
evidence_type: public API documentation
strength_of_evidence: high
geography: product documentation
region_applicability: Germany/product docs
persona_applicability: all homeowner mock records
funnel_stage: offer/request data
quote_stage_relevance: These fields can drive diagnosis, next-best action, and sequence adaptation.
quote_or_data_excerpt: REST example includes offer status, notes, demand.annualEnergyDemandWh, energyPrice, options, solar/storage/heatpump/wallbox packages, created/edited timestamps, and currentSignature state/expiry/signedAt.
counterevidence: Public docs do not expose communication history, calendar, or detailed engagement events.
limitations: API example may not be complete/current; exact production schema requires Reonic confirmation.
product_implication: Use source-informed mock JSON/YAML rather than arbitrary CRM fields.
message_implication: Generated messaging can reference demand, energy price, selected components, quote expiry, and signature state.
action_implication: Next-best action logic should react to status and signature expiry.
data_fields_required: id, status, customer.id, leadSource, lat, lng, notes, demand, options, packages, offerCreatedAt, offerLastEditedAt, currentSignature
validation_needed: Reonic API/schema review.
```

```yaml
evidence_id: A0-E11
claim: Customer portal and Energiehaus data should be mocked because public docs/pages show homeowner uploads, customer-facing status, appointment coordination, FAQs, and digital offer acceptance as Reonic-adjacent touchpoints.
claim_category: customer_portal_data
supporting_source_ids: [A0-S05, A0-S23, A0-S26, A0-S27]
source_urls:
  - https://reonic.com/de-de/product/360h/customer-portal/
  - https://docs.reonic.de/docs/h360/anfragen/
  - https://docs.reonic.de/docs/settings/360h/energiehaus/
  - https://docs.reonic.de/docs/settings/360h/documents/
date_accessed: 2026-06-20
evidence_type: vendor product page and public docs
strength_of_evidence: high
geography: Germany/product docs
region_applicability: Germany direct/product docs
persona_applicability: homeowners, especially skeptical or operationally anxious buyers
funnel_stage: lead capture, quote review, acceptance, project status
quote_stage_relevance: Portal behavior can signal confusion, readiness, missing information, or ghosting risk.
quote_or_data_excerpt: Docs mention roof/meter photo upload and reminder emails; portal page lists live status, files, appointments, FAQs, document storage, and digital offer acceptance.
counterevidence: No public data proves these portal events predict close probability.
limitations: Behavior-to-outcome link is unvalidated.
product_implication: Include portal event stream but label predictive interpretations as hypotheses.
message_implication: If customer viewed FAQs or missing-doc reminders, follow-up can be more specific and service-oriented.
action_implication: Assistant can recommend "request missing roof photo" or "answer FAQ viewed" actions.
data_fields_required: portal_viewed_at, offer_viewed_at, faq_viewed, documents_uploaded, roof_photo_status, meter_photo_status, reminder_sent_at, appointment_slots_shared
validation_needed: Validate which portal events exist and correlate with outcomes.
```

```yaml
evidence_id: A0-E12
claim: Commercial and utility pages are real Reonic public scope, but should remain secondary/future segments for this homeowner-first PoC.
claim_category: scope_boundary
supporting_source_ids: [A0-S29, A0-S30, A0-S31]
source_urls:
  - https://reonic.com/de-de/product/360b/
  - https://reonic.com/de-de/industry/utilities/
  - https://northzone.com/insights/our-investment-in-reonic-empowering-renewable-energy-installers-across-europe
date_accessed: 2026-06-20
evidence_type: vendor pages and investor article
strength_of_evidence: medium
geography: Germany/Europe
region_applicability: Germany for product pages; Europe from Northzone
persona_applicability: commercial buyers and utilities, not residential homeowners
funnel_stage: commercial planning/sales; utility EDL workflows
quote_stage_relevance: Prevents mixing business buyer economics into residential homeowner sequences.
quote_or_data_excerpt: 360° Gewerbe supports commercial/industrial PV, storage and charging; utility page targets regional suppliers offering PV, heat pumps, storage, charging infrastructure.
counterevidence: Residential 360° Haushalt has stronger direct fit with challenge brief.
limitations: Does not quantify Reonic revenue/customer mix by segment.
product_implication: Keep mock dataset residential-first; optionally include one locked "future commercial" teaser state for extensibility.
message_implication: Avoid B2B ROI/procurement language in homeowner-facing generated sequences.
action_implication: None for primary PoC except scope guardrail.
data_fields_required: segment_type, residential_or_commercial, buyer_type
validation_needed: Stakeholder decision on whether to demo only residential or include one commercial contrast.
```

```yaml
evidence_id: A0-E13
claim: Heat-pump-specific data should be included when relevant because Reonic has dedicated heat-load/hydraulic-balancing support and installer evidence links PV plus heat pump planning.
claim_category: product_mix_priority
supporting_source_ids: [A0-S02, A0-S15, A0-S28]
source_urls:
  - https://reonic.com/de-de/product/360h/
  - https://www.enerix.de/presse/pressemitteilungen/partnerschaft-enerix-reonic/
  - https://reonic.com/de-de/industry/heating/
date_accessed: 2026-06-20
evidence_type: Reonic product pages and partner announcement
strength_of_evidence: high
geography: Germany
region_applicability: Germany direct
persona_applicability: homeowners with heating upgrade/renovation needs
funnel_stage: planning, quote, signature
quote_stage_relevance: Heat pump adds technical sizing, comfort, subsidy, and disruption objections beyond PV-only.
quote_or_data_excerpt: Heating page emphasizes DIN EN 12831 heat-load calculation, LiDAR measurement, hydraulic balancing, heat-pump/PV/storage offers and e-signature.
counterevidence: Some installer public pages remain primarily PV-first.
limitations: No public data ranks heat-pump attach rate in Reonic.
product_implication: Prioritize PV+battery base; include heat pump as a high-value optional quote scenario, not as mandatory for every mocked record.
message_implication: Heat-pump sequences need reassurance around sizing, heating comfort, existing home readiness, and disruption.
action_implication: Recommend technical consultation or heat-load proof asset if quote includes heat pump and customer hesitates.
data_fields_required: heat_load_watts, standard_used, lidar_scan_status, hydraulic_balancing_status, heat_pump_model, heating_system_existing, subsidy_status
validation_needed: Attach-rate and common heat-pump objection data from internal sales/users.
```

```yaml
evidence_id: A0-E14
claim: Reonic's public docs already include configurable email templates, but the PoC opportunity is the strategy layer above templates: why this channel, timing, message, and next task for this quoted customer.
claim_category: product_gap
supporting_source_ids: [A0-S25, A0-S03, A0-S04, A0-S06]
source_urls:
  - https://docs.reonic.de/docs/settings/360h/emails/
  - https://reonic.com/de-de/product/360h/sales/
  - https://reonic.com/de-de/product/360h/crm/
  - https://reonic.com/de-de/ai-for-renewable-installers/
date_accessed: 2026-06-20
evidence_type: public docs and product pages
strength_of_evidence: medium
geography: Germany/product docs
region_applicability: Germany direct/product docs
persona_applicability: all homeowner personas, through installer-facing assistant
funnel_stage: post-inquiry and post-quote communications
quote_stage_relevance: Existing templates cover fixed events; assistant should dynamically diagnose and recommend.
quote_or_data_excerpt: Docs list templates for inquiry, information request, first estimate, changed estimate, and rejection; product pages show CRM, quote tracking, and AI sales features.
counterevidence: Reonic may already have internal/roadmap features not visible publicly.
limitations: Public docs do not reveal current AI email/sequence capabilities.
product_implication: Do not build just another template editor; build decision support and next-best-action orchestration.
message_implication: Message drafts should be presented with reasoning, timing, proof asset, and adaptation branch.
action_implication: Include "create CRM task", "schedule call", "send portal message", "update quote variant", and "capture debrief" actions.
data_fields_required: trigger_event, recommended_channel, recommended_timing, rationale, proof_asset, task_created, branch_conditions, debrief_questions
validation_needed: Confirm existing Reonic email automation depth to avoid duplicating current features.
```

```yaml
evidence_id: A0-E15
claim: Public evidence is insufficient to rank homeowner personas or prove ghosting/close-readiness predictors; those should remain hypotheses until connected to CRM outcomes.
claim_category: limitation
supporting_source_ids: [A0-S01, A0-S03, A0-S13, A0-S14, A0-S16, A0-S17, A0-S20, A0-S21]
source_urls:
  - https://reonic.com/de-de/
  - https://reonic.com/de-de/product/360h/sales/
  - https://reonic.com/de-de/customer-stories/pv-green/
  - https://reonic.com/de-de/customer-stories/my-solar-express/
  - https://pvgreen.de/
  - https://www.mysolarexpress.de/
  - https://www.trustpilot.com/review/reonic.de
  - https://docs.reonic.de/docs/integrations/rest/
date_accessed: 2026-06-20
evidence_type: public product, customer story, installer marketing, review, and API docs
strength_of_evidence: low
geography: Germany with some UK review signal
region_applicability: Germany; predictive claims unvalidated
persona_applicability: unknown
funnel_stage: post-quote
quote_stage_relevance: The assistant needs risk/readiness signals, but public sources do not validate behavioral predictors.
quote_or_data_excerpt: Public sources show offer open/view tracking and lead scoring claims, but no outcome-linked model or evidence.
counterevidence: None public; absence of evidence.
limitations: No internal CRM win/loss, no public funnel statistics, no controlled messaging tests.
product_implication: Label ghosting risk and close readiness as explainable hypotheses in PoC, not factual predictions.
message_implication: Avoid manipulative targeting or unsupported urgency.
action_implication: Ask installer to debrief outcomes to improve future recommendations.
data_fields_required: predicted_risk_confidence, risk_factors, outcome, debrief, validation_status
validation_needed: Internal Reonic CRM/communication/outcome data, permissioned call notes, and post-launch experiments.
```
