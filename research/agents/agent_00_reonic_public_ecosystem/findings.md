# Findings: Agent 0

Status: completed 2026-06-20.

## Scope Recommendation

### Finding 1: Prioritize residential household energy packages, not PV-only

- Claim: Reonic publicly positions 360° Haushalt around residential renewable systems that combine PV, battery storage, EV charging/wallboxes, and heat pumps in one workflow.
- Sources: A0-S01, A0-S02, A0-S15, A0-S16, A0-S17, A0-S18.
- URLs: https://reonic.com/de-de/, https://reonic.com/de-de/product/360h/, https://www.enerix.de/presse/pressemitteilungen/partnerschaft-enerix-reonic/, https://pvgreen.de/, https://www.mysolarexpress.de/, https://resoco.eu/
- Date accessed: 2026-06-20.
- Geography: Germany.
- Confidence: high for public positioning; medium for actual usage mix.
- Limitations: Public product and installer websites do not prove module attach rates or active customer usage.
- Product implication: The core PoC quote should be a German homeowner quote for PV + battery, with heat pump and wallbox variants available. PV-only can be a simpler branch, but should not define the whole prototype.

### Finding 2: The most credible PoC moment is "offer sent, not yet signed"

- Claim: Reonic publicly emphasizes offer creation, PDF/digital proposals, real-time open/view tracking, variants, profitability, customer messages, and digital signature.
- Sources: A0-S03, A0-S21, A0-S22, A0-S24.
- URLs: https://reonic.com/de-de/product/360h/sales/, https://docs.reonic.de/docs/integrations/rest/, https://docs.reonic.de/docs/h360/plan/, https://docs.reonic.de/docs/h360/angebote/
- Date accessed: 2026-06-20.
- Geography: Germany/product documentation.
- Confidence: high for documented/public workflow; unknown for conversion impact.
- Limitations: No public win/loss or funnel data validates which events predict signing.
- Product implication: Start the assistant on a quoted customer detail page. Show quote status, offer-open signal, signature expiry, current variant, ROI/payback, and next-best action.

### Finding 3: The assistant should be an action orchestrator above existing templates

- Claim: Reonic docs already expose configurable email templates for inquiry, information request, first estimate, changed estimate, and rejection; Reonic pages also show CRM, offer tracking, and AI sales positioning.
- Sources: A0-S25, A0-S03, A0-S04, A0-S06.
- URLs: https://docs.reonic.de/docs/settings/360h/emails/, https://reonic.com/de-de/product/360h/sales/, https://reonic.com/de-de/product/360h/crm/, https://reonic.com/de-de/ai-for-renewable-installers/
- Date accessed: 2026-06-20.
- Geography: Germany/product documentation.
- Confidence: medium.
- Limitations: Public docs do not show whether Reonic already has private AI sequencing features.
- Product implication: Do not demo a template generator alone. Demo diagnosis, reasoning, channel choice, CRM task creation, scheduling, generated asset, and post-action debrief.

## Product Mix Priority

1. PV + battery as the base scenario.
   - Evidence: Reonic 360° Haushalt and public installer sites repeatedly foreground PV and storage; REST docs expose solar and storage package fields.
   - Sources: A0-S02, A0-S16, A0-S17, A0-S18, A0-S21.
   - Date accessed/geography/confidence/limitations: 2026-06-20; Germany/product docs; high for public positioning; actual attach rate unknown.
   - Product implication: Mock system size, module count, inverter/component list, battery capacity, self-consumption, autonomy, savings, payback, and component proof assets.

2. Heat pump as the strongest add-on/high-value variant.
   - Evidence: Reonic has dedicated heat-load/heating pages; Enerix publicly announced PV and heat-pump planning with Reonic; multiple connected installers market heat pumps.
   - Sources: A0-S02, A0-S15, A0-S17, A0-S18, A0-S28.
   - Date accessed/geography/confidence/limitations: 2026-06-20; Germany; high for public emphasis; public data does not rank heat-pump quote frequency.
   - Product implication: Include a heat-pump quote record with heat load, LiDAR/measurement status, hydraulic balancing, heating-system context, subsidy/finance checks, and comfort/disruption objections.

3. Wallbox/EV charging as an optional cross-sell and proof point.
   - Evidence: Reonic and installer sites list wallboxes/charging infrastructure; PV Green and MySolarExpress list wallbox offerings publicly.
   - Sources: A0-S02, A0-S16, A0-S17, A0-S29, A0-S30.
   - Date accessed/geography/confidence/limitations: 2026-06-20; Germany; medium-high; no evidence of how often wallboxes drive quote decisions.
   - Product implication: Include wallbox scope as a quote option and as a "future-ready" message branch, not the primary story.

4. Commercial PV and utilities as future scope only.
   - Evidence: Reonic has 360° Gewerbe and Stadtwerke pages, but the project brief is homeowner-first and 360° Haushalt is the best fit.
   - Sources: A0-S29, A0-S30.
   - Date accessed/geography/confidence/limitations: 2026-06-20; Germany; medium; no product revenue/customer mix data.
   - Product implication: Keep `segment_type: residential_homeowner` in primary mock records and avoid B2B procurement language.

## Installer Profiles To Mock

### Profile A: Small owner-led regional installer

- Evidence basis: The research plan asks for small/mid installers, and public Reonic pages say the platform scales from individual installers to regional and larger teams; PYourEnergy and Resoco websites show regional installer positioning.
- Sources: A0-S18, A0-S19, A0-S29.
- Date accessed/geography/confidence/limitations: 2026-06-20; Germany; medium; public Reonic case studies underrepresent very small teams.
- Mock attributes:
  - 8-25 active residential leads.
  - Owner/salesperson also handles site visits and follow-up.
  - Google/Microsoft calendar connected.
  - Limited time windows for calls.
  - Uses WhatsApp and phone heavily.
  - Needs assistant to create the next task and debrief in under one minute.
- Product implication: The PoC should show low-effort action preparation: call script, SMS/WhatsApp draft, one-click calendar slot, debrief prompts.

### Profile B: Growing multi-location installer/franchise

- Evidence basis: PV Green story says 9 locations and 110+ employees; MySolarExpress story says 50+ employees and 60-70 projects/month; Enerix is a Fachbetriebskette.
- Sources: A0-S13, A0-S14, A0-S15.
- Date accessed/geography/confidence/limitations: 2026-06-20; Germany; medium; vendor-selected case studies are public signals only.
- Mock attributes:
  - Multiple branches/partners.
  - Separate sales, planning, back office, and installation owners.
  - Process statuses and handoffs matter.
  - ERP/calendar integration context.
  - Needs standardized reasoning and proof assets for consistent follow-up.
- Product implication: The PoC should show assigned owner, branch/location, partner visibility, standardized playbook, and handoff notes.

## Reonic-Like Data To Mock

### Customer and household

- Fields: customer_id, name, address/region, language, building_type, roof_photo_status, meter_photo_status, current_energy_context, annual_energy_demand_wh, energy_price, energy_price_increase, existing_solar, existing_heating_system, EV_present_or_planned, decision_makers_note.
- Evidence: Public docs show customer/contact/location/request data, roof and meter photo uploads, demand and energy price fields, and existing solar fields.
- Sources: A0-S21, A0-S23, A0-S26.
- Date accessed/geography/confidence/limitations: 2026-06-20; product docs/Germany; high for field examples; incomplete public schema.
- Product implication: The assistant can explain why missing photos, high consumption, or heating context changes the next action.

### Quote/proposal

- Fields: offer_id, status, lead_source, quote_created_at, quote_last_edited_at, quote_sent_at, quote_valid_until, current_signature.state, signature_request_created_at, expiry_at, signed_at, selected_option_id, signed_pdf_url_placeholder.
- Evidence: REST docs expose offer status, lead source, timestamps, signature fields; offer docs expose max 60-day validity and customer signature flow.
- Sources: A0-S21, A0-S22.
- Date accessed/geography/confidence/limitations: 2026-06-20; product docs; high for field examples; signed PDF URL should be mocked/private.
- Product implication: Diagnosis should distinguish "sent but unopened", "opened but unsigned", "expired soon", "revised offer pending", and "signed".

### Product options and economics

- Fields: options[], solar_planned.total_size_wp, total_modules, components, storage_size, heatpump_package, wallbox_package, net_price, vat, payment_type, discount, financing_terms, total_investment, estimated_savings, self_consumption_pct, autonomy_pct, ROI, payback/break_even, CO2_savings.
- Evidence: Reonic docs and pages include solar/storage/heatpump/wallbox package fields, components, payment, variants, energy flows, profitability/break-even, and ROI/payback public claims.
- Sources: A0-S02, A0-S03, A0-S21, A0-S22.
- Date accessed/geography/confidence/limitations: 2026-06-20; Germany/product docs; high for workflow fields; actual calculation formulas not public.
- Product implication: Assistant recommendations can choose between "clarify ROI", "send financing variant", "simplify technical proof", or "address heat-pump sizing".

### CRM, communication, and engagement

- Fields: board_status, assigned_user, tags, email_thread[], last_contact_at, last_reply_at, customer_portal_events[], offer_opened_at, offer_view_count, proposal_section_views, portal_faq_viewed, reminder_email_sent_at, tasks[], checklist_items[], notes[].
- Evidence: CRM page lists emails, tasks, checklists, custom boards/statuses/tags; sales page mentions offer open/view tracking; portal/docs show customer upload/reminder/status/FAQ surfaces.
- Sources: A0-S03, A0-S04, A0-S05, A0-S23, A0-S24, A0-S25, A0-S26.
- Date accessed/geography/confidence/limitations: 2026-06-20; Germany/product docs; medium-high; proposal section views are an inference from portal/proposal UX, not a documented Reonic event.
- Product implication: Risk/readiness should show factor-level reasoning and mark inferred signals clearly.

### Calendar, actions, and debrief

- Fields: available_slots, existing_conflicts, site_visit_done_at, next_action, action_owner, action_due_at, recommended_channel, preparation_assets, call_script, SMS_or_WhatsApp_draft, email_draft, debrief_questions, debrief_summary, outcome, next_commitment.
- Evidence: CRM page supports calendar/task workflows; WhatsApp AI page shows next-action retrieval; AI pages mention meeting summaries and action extraction.
- Sources: A0-S04, A0-S06, A0-S07.
- Date accessed/geography/confidence/limitations: 2026-06-20; Germany; medium; debrief loop is product inference, not directly documented as this assistant.
- Product implication: The PoC should close the loop after each action instead of ending at a message draft.

### Services/admin status

- Fields: grid_registration_status, MaStR_status, subsidy_program, subsidy_status, financing_eligibility, financing_option, photogrammetry_status, planning_service_status, oil_tank_removal_needed, service_owner, validation_needed.
- Evidence: Reonic services pages cover grid registration, KfW service, financing, photogrammetry, planning, and oil-tank removal.
- Sources: A0-S08, A0-S09, A0-S10, A0-S11.
- Date accessed/geography/confidence/limitations: 2026-06-20; Germany; medium; incentive/finance facts must be verified from official/current sources.
- Product implication: Use service/admin fields for installer-facing reasoning and caution badges, not unsupported homeowner claims.

## Public Signals And Cautions

- Public signal: Resoco, Invanova, MySolarExpress, D,5 Energy, PYourEnergy, Energieversum, PV Green, and Enerix appear in Reonic public pages/stories/partner material.
- Sources: A0-S01, A0-S08, A0-S12, A0-S13, A0-S14, A0-S15.
- Date accessed/geography/confidence/limitations: 2026-06-20; mostly Germany; low-medium; logos/testimonials/customer stories are not verified current usage.
- Product implication: Use these names only as research evidence or anonymized archetypes unless Reonic confirms permission and current relationship.

## Weak Or Unvalidated

- Ghosting risk and close-readiness predictors are not supported by public Reonic evidence. Offer open/view tracking and lead scoring exist publicly, but no outcome-linked predictor is public.
- Sources: A0-S03, A0-S06, A0-S21.
- Date accessed/geography/confidence/limitations: 2026-06-20; Germany/product docs; low; no CRM outcome data.
- Product implication: In the PoC, label risk as "hypothesis" with visible contributing signals and ask for installer debrief/outcome to improve it.

- Homeowner personas cannot be ranked from Reonic public ecosystem data alone. Installer sites suggest themes around cost savings, independence, trust, speed, regional service, premium components, and one-stop accountability, but not representative persona prevalence.
- Sources: A0-S16, A0-S17, A0-S18, A0-S19, A0-S20.
- Date accessed/geography/confidence/limitations: 2026-06-20; Germany/mixed reviews; low-medium; public marketing/reviews are biased.
- Product implication: Let later persona agents validate segmentation with homeowner research and quote-stage objection evidence.
