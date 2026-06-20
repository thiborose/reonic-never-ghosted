# Evidence: Agent 4

Status: completed.

Each item includes source IDs whose URLs and limitations are recorded in `sources.md`. Date checked for all time-sensitive evidence: 2026-06-20 unless noted.

```yaml
evidence_id: E04-001
claim: German household electricity-price savings should be modeled from the customer's actual tariff where possible; market fallback values checked for 2026 are around 37.0-37.2 ct/kWh, while the official 2025 regulator benchmark was about 40.05-40.1 ct/kWh.
claim_category: electricity_prices
supporting_source_ids: [S04-004, S04-005]
evidence_type: industry price analysis plus regulator monitoring
strength_of_evidence: medium
geography: Germany
region_applicability: national fallback only; regional network charges and individual tariffs vary
persona_applicability: all personas; especially ROI-focused and bill-stability personas
funnel_stage: quote review
quote_stage_relevance: High; avoided-grid-price assumption drives payback.
quote_or_data_excerpt: BDEW 2026 fallback 37.0/37.2 ct/kWh; BNetzA 2025 benchmark 40.05/40.1 ct/kWh.
counterevidence: A customer's tariff may be materially lower/higher, especially with dynamic, heat-pump, EV, or regional tariffs.
limitations: BDEW is an industry source; BNetzA benchmark is 2025. Neither proves future prices.
product_implication: Store/import actual electricity tariff, annual consumption, fixed charge, and expected tariff type; show fallback date when no bill is available.
message_implication: Say "based on your current tariff" when known; otherwise say "using a German market-average fallback checked on 2026-06-20."
action_implication: Ask installer to upload latest electricity bill before ROI-heavy follow-up.
data_fields_required: current_electricity_ct_per_kwh, annual_kwh, tariff_type, bill_date, fallback_price_source_id
validation_needed: Recheck price benchmarks before demos or live customer use.
```

```yaml
evidence_id: E04-002
claim: For new German building-mounted PV commissioned from 2026-02-01 through 2026-07-31, fixed feed-in tariff is 7.78 ct/kWh partial feed-in and 12.34 ct/kWh full feed-in up to 10 kW; 6.73/10.35 ct/kWh up to 40 kW; 5.50/10.35 ct/kWh up to 100 kW.
claim_category: feed_in_tariffs
supporting_source_ids: [S04-001]
evidence_type: regulator tariff table
strength_of_evidence: high
geography: Germany
region_applicability: national; depends on commissioning date, system class, and installed capacity bands
persona_applicability: all; especially investor persona and skeptics asking "what do I get for exports?"
funnel_stage: quote review
quote_stage_relevance: High; export revenue and urgency depend on correct commissioning-period tariff.
quote_or_data_excerpt: BNetzA tariff table for "Gebaeude oder Laermschutzwaende" at commissioning from 2026-02-01 to 2026-07-31.
counterevidence: Tariff changes for later commissioning windows; market premium values are different and should not be confused with fixed feed-in tariff.
limitations: Does not account for negative-price rules, smart-meter status, 60% limit, or individual metering setup.
product_implication: Build tariff lookup by commissioning date, system size, system type, and partial/full-feed-in mode.
message_implication: Avoid generic "8 cents" statements; use exact table and date range.
action_implication: If quote timing crosses 2026-08-01, prompt installer to recheck tariff before using urgency.
data_fields_required: expected_commissioning_date, pv_kwp, building_mounted, feed_in_mode, tariff_window_checked_at
validation_needed: Recheck BNetzA tariff page before each live production release and after 2026-08-01.
```

```yaml
evidence_id: E04-003
claim: EEG remuneration is a statutory claim and does not require a separate network-operator contract, but payment is not due until required information is provided and the PV system is registered in MaStR.
claim_category: export_payment_process
supporting_source_ids: [S04-002, S04-003]
evidence_type: regulator FAQ plus consumer guidance
strength_of_evidence: high
geography: Germany
region_applicability: national; network-operator processes vary
persona_applicability: trust-sensitive families and skeptics
funnel_stage: quote review, post-signature onboarding
quote_stage_relevance: Medium; affects trust and paperwork anxiety.
quote_or_data_excerpt: BNetzA states no contract is required for EEG payment, but payment/finality depends on required data and MaStR registration.
counterevidence: Some operators offer contracts for clarification; customers may experience payment delays.
limitations: Does not cover every network operator's forms or billing process.
product_implication: Separate "legal entitlement" from "payment-ready paperwork" in UX.
message_implication: Reassure without implying no paperwork is needed.
action_implication: Create task bundle after contract: MaStR proof, bank details, metering data, marketing form, VNB account.
data_fields_required: mastr_registered, mastr_date, vnb_required_data_complete, bank_details_submitted, metering_ready
validation_needed: Validate with common VNB workflows from installer users.
```

```yaml
evidence_id: E04-004
claim: Since 2025-02-25, new PV systems can lose EEG remuneration during negative-price periods from the first negative quarter-hour, with PV-specific extension of the remuneration period; small-system exposure depends on capacity and intelligent-meter status.
claim_category: export_rules_negative_prices
supporting_source_ids: [S04-015]
evidence_type: legal FAQ
strength_of_evidence: high
geography: Germany
region_applicability: national
persona_applicability: investor, skeptic, technical persona
funnel_stage: quote review
quote_stage_relevance: High for new systems, full-feed-in, and no-battery economics.
quote_or_data_excerpt: Clearingstelle states for systems from 2025-02-25 remuneration falls away from first negative quarter-hour; exceptions include <100 kW before year-end of iMSys installation and <2 kW until BNetzA determination.
counterevidence: The exemption for <100 kW before iMSys installation can mean many residential systems are not immediately exposed.
limitations: Legal nuance is high; later BNetzA determinations can change application.
product_implication: Add negative-price exposure state, not a blanket warning.
message_implication: For homeowners, frame as "check whether your system is exposed; self-consumption and storage reduce reliance on export."
action_implication: Ask installer for expected iMSys timing and remuneration form before sending export-risk message.
data_fields_required: commissioning_date, pv_kwp, imsys_installed, imsys_install_year, remuneration_form, direct_marketing_status
validation_needed: Legal review before production copy.
```

```yaml
evidence_id: E04-005
claim: Negative wholesale electricity prices occurred in 573 of 8,760 hours in Germany in 2025, up from 457 of 8,784 hours in 2024.
claim_category: wholesale_market_context
supporting_source_ids: [S04-014]
evidence_type: regulator market data
strength_of_evidence: high
geography: Germany
region_applicability: national
persona_applicability: investor, skeptic
funnel_stage: quote review and education
quote_stage_relevance: Medium; explains why export rules and smart control matter.
quote_or_data_excerpt: BNetzA 2025 market release.
counterevidence: Negative wholesale hours do not automatically equal lost tariff for all residential PV due to exemptions and metering.
limitations: 2025 past data, not forecast.
product_implication: Use as context, not as a customer-specific earnings deduction.
message_implication: Avoid alarmist "you will lose 573 hours of pay"; say "negative-price periods are common enough that smart use matters."
action_implication: Recommend load-shifting/battery explanation for export-reliant proposals.
data_fields_required: none for generic context; use customer exposure fields from E04-004 for personalized claim
validation_needed: Update annually from BNetzA/SMARD.
```

```yaml
evidence_id: E04-006
claim: New PV systems below 100 kW without iMSys/control equipment can face Solarspitzengesetz feed-in power limits; BSW summarizes a 60% feed-in-power cap for systems below 25 kW receiving feed-in remuneration or tenant-power supplement until iMSys plus control equipment and remote-control testing are completed.
claim_category: export_rules_60_percent
supporting_source_ids: [S04-016]
evidence_type: industry legal FAQ
strength_of_evidence: medium
geography: Germany
region_applicability: national, with local metering rollout variation
persona_applicability: investor, autonomy persona, skeptic
funnel_stage: quote review
quote_stage_relevance: High where quote assumes no battery/full feed-in/south roof.
quote_or_data_excerpt: BSW FAQ states 60% feed-in power cap and says it is lifted after iMSys/control and successful remote-control test.
counterevidence: Source is industry association; exact legal classification varies by size/remuneration/direct-marketing form.
limitations: Needs legal confirmation and system-specific simulation.
product_implication: Add smart-meter/control-box status and "feed-in cap active?" field to ROI model.
message_implication: Emphasize that a battery and midday self-consumption can reduce impact; do not promise zero loss.
action_implication: Suggest installer verify iMSys/control availability with metering operator during quote acceptance.
data_fields_required: imsys_installed, control_box_installed, remote_control_test_passed, feed_in_cap_percent, battery_kwh, roof_orientation
validation_needed: Confirm exact legal rule with counsel and VNB documentation.
```

```yaml
evidence_id: E04-007
claim: Typical residential PV self-consumption without a battery is around 30%, and with a battery can reach around 70%; economics improve as more solar power is consumed on site because grid electricity is much more expensive than fixed feed-in remuneration.
claim_category: residential_pv_economics
supporting_source_ids: [S04-010, S04-011]
evidence_type: consumer guidance
strength_of_evidence: medium
geography: Germany
region_applicability: national default; household load profile matters
persona_applicability: family, autonomy, investor, skeptic
funnel_stage: quote review
quote_stage_relevance: High; central payback lever.
quote_or_data_excerpt: Verbraucherzentrale says around 30% direct self-consumption and around 70% with battery.
counterevidence: EV charging, heat pump, home occupancy, smart appliances, and system sizing can shift values materially.
limitations: Default heuristic only.
product_implication: Make self-consumption editable and explain drivers.
message_implication: "Your savings come mainly from replacing grid electricity, not from selling solar power."
action_implication: Ask about EV, heat pump, daytime occupancy, and battery preference before ROI follow-up.
data_fields_required: annual_consumption_kwh, daytime_load_share, ev_present, heat_pump_present, battery_kwh, self_consumption_assumption
validation_needed: Validate defaults against installer quote tools and post-install data.
```

```yaml
evidence_id: E04-008
claim: A consumer-guidance cost benchmark for an owner-occupied German single-family home is about EUR 12,000-25,000 for a 10 kWp PV system and about EUR 4,000-7,000 for a matching battery; another Verbraucherzentrale battery article gives installed home-battery prices around EUR 400-800/kWh for systems from 5 kWh.
claim_category: system_costs_battery_costs
supporting_source_ids: [S04-011, S04-010]
evidence_type: consumer cost guidance
strength_of_evidence: medium
geography: Germany
region_applicability: national market benchmark; local installer pricing varies
persona_applicability: investor, skeptic, price-sensitive homeowner
funnel_stage: quote review
quote_stage_relevance: High; helps detect quote shock or underpricing.
quote_or_data_excerpt: Verbraucherzentrale energyberatung lists 10 kWp at EUR 12k-25k and matching storage EUR 4k-7k; battery article lists EUR 400-800/kWh.
counterevidence: Finanztip and market offers may show lower/higher ranges; roof complexity, electrical work, scaffold, backup function, and brand drive variation.
limitations: Prices move quickly and may include/exclude gross/net or special works.
product_implication: Add quote sanity checks by EUR/kWp and EUR/kWh, with "needs review" rather than hard rejection.
message_implication: Compare customer's quote to a range and explain deviations by scope.
action_implication: If quote is above range, ask installer to justify roof/electrical/backup complexity.
data_fields_required: pv_total_price_eur, pv_kwp, battery_price_eur, battery_kwh, scope_includes_scaffold, backup_power, meter_cabinet_upgrade
validation_needed: Collect current installer quote dataset for Germany.
```

```yaml
evidence_id: E04-009
claim: Battery economics depend strongly on sizing; for a household consuming 3,000 kWh/year, Verbraucherzentrale suggests 3-5 kWh battery capacity, with larger batteries mainly justified by large PV, heat pumps, EVs, or high nighttime consumption.
claim_category: battery_sizing
supporting_source_ids: [S04-010, S04-011]
evidence_type: consumer guidance
strength_of_evidence: medium
geography: Germany
region_applicability: national heuristic
persona_applicability: autonomy, investor, skeptic
funnel_stage: quote review
quote_stage_relevance: High for battery upsell risk.
quote_or_data_excerpt: Verbraucherzentrale energyberatung sizing guidance.
counterevidence: Backup-power, dynamic tariff arbitrage, and future EV/heat-pump plans can justify different sizing.
limitations: Not a simulation.
product_implication: Flag oversized storage relative to load unless future loads or backup goals are present.
message_implication: "Right-sized storage" is more credible than "largest battery."
action_implication: Prompt installer to ask about future heat pump/EV and nighttime loads before defending battery size.
data_fields_required: annual_consumption_kwh, battery_kwh, pv_kwp, ev_plan, heat_pump_plan, nighttime_load, backup_goal
validation_needed: Validate with HTW independence calculator or installer simulation.
```

```yaml
evidence_id: E04-010
claim: Fraunhofer ISE reports small rooftop PV LCOE around 6-14 ct/kWh in Germany and annual operating costs around 1-2% of investment cost.
claim_category: pv_economics_lcoe_opex
supporting_source_ids: [S04-012]
evidence_type: research report
strength_of_evidence: high
geography: Germany
region_applicability: national, but input-cost and yield dependent
persona_applicability: investor, skeptic
funnel_stage: quote review
quote_stage_relevance: Medium to high; supports rigorous ROI explanation.
quote_or_data_excerpt: Fraunhofer "Aktuelle Fakten" May 2026.
counterevidence: Individual rooftop LCOE can exceed range if system is small, shaded, expensive, or has high financing costs.
limitations: Model-based; assumptions must match quote.
product_implication: Use as benchmark proof but calculate customer-specific LCOE.
message_implication: Investor message can compare estimated PV cost per kWh to grid price, with assumptions exposed.
action_implication: Generate an "assumption panel" with capex, opex, yield, lifespan, degradation, financing.
data_fields_required: capex_eur, annual_yield_kwh, opex_percent, lifespan_years, finance_rate, degradation_assumption
validation_needed: Align with Reonic quote model.
```

```yaml
evidence_id: E04-011
claim: Germany's regional solar resource varies enough to affect ROI: Fraunhofer reports about +/-10% location variation in horizontal global irradiation, and PVGIS samples under common assumptions gave 978 kWh/kWp/year in Hamburg, 1038 in Cologne, 1049 in Berlin, and 1138 in Munich.
claim_category: regional_production_assumptions
supporting_source_ids: [S04-012, S04-013]
evidence_type: research report plus modeled API outputs
strength_of_evidence: high
geography: Germany with sample cities
region_applicability: local and regional; roof-specific simulation required
persona_applicability: investor, skeptic, environmentalist
funnel_stage: quote review
quote_stage_relevance: High; annual yield drives ROI and CO2 claims.
quote_or_data_excerpt: PVGIS queried 2026-06-20 using c-Si, 1 kWp, 35-degree south, 14% losses, SARAH3 2005-2023.
counterevidence: Actual roofs differ by tilt, azimuth, shading, snow, soiling, inverter clipping, and curtailment.
limitations: City-center samples, not all Germany; model not measured production.
product_implication: Do not use one national kWh/kWp number for all prospects.
message_implication: Localize ROI and impact: "modeled for your region and roof assumptions."
action_implication: Require postcode/coordinates and roof orientation before final economics.
data_fields_required: postcode, latitude, longitude, roof_tilt, roof_azimuth, shading_factor, local_yield_kwh_per_kwp
validation_needed: Integrate Reonic/installer PV simulation output where available.
```

```yaml
evidence_id: E04-012
claim: East-west roofs can still be sensible in Germany because they spread production across morning and evening, which can increase usable self-consumption even if total output is below optimal south-facing output.
claim_category: roof_orientation
supporting_source_ids: [S04-010]
evidence_type: consumer planning guidance
strength_of_evidence: medium
geography: Germany
region_applicability: national; roof-specific
persona_applicability: family, autonomy, skeptic
funnel_stage: quote review
quote_stage_relevance: Medium; handles "my roof isn't south" objection.
quote_or_data_excerpt: Verbraucherzentrale notes east/west systems often make sense because generation is distributed through the day.
counterevidence: Severe shading, poor roof condition, or very low yield can make project unattractive.
limitations: Needs simulation.
product_implication: Add objection response for non-south roofs that shifts from maximum yield to usable yield.
message_implication: Avoid saying "south roof required."
action_implication: Offer a roof-layout comparison view: south-max-yield vs east-west self-consumption shape.
data_fields_required: roof_azimuths, roof_tilts, monthly_yield, hourly_profile, self_consumption_profile
validation_needed: Compare modeled hourly profiles with quote software.
```

```yaml
evidence_id: E04-013
claim: Qualifying PV systems installed on or near residential buildings in Germany are subject to a 0% VAT rate since 2023-01-01, including essential components and qualifying batteries/energy management/meter-cabinet work; customers generally should not be told they can reclaim VAT on a zero-rated invoice.
claim_category: tax_vat
supporting_source_ids: [S04-006]
evidence_type: official tax FAQ
strength_of_evidence: high
geography: Germany
region_applicability: national
persona_applicability: investor, price-sensitive, skeptic
funnel_stage: quote review
quote_stage_relevance: High; quote price and tax objection.
quote_or_data_excerpt: BMF FAQ states zero VAT applies from 2023-01-01 and no VAT is shown to reclaim.
counterevidence: Leasing/rental, repairs without replacement parts, mobile modules under thresholds, and non-residential edge cases need separate treatment.
limitations: Tax advice must be verified for edge cases.
product_implication: Add VAT eligibility explanation and guardrails.
message_implication: "The quote can already reflect 0% VAT" rather than "get VAT refunded."
action_implication: If customer asks tax question, prepare tax-advisor-safe explainer.
data_fields_required: building_type, residential_or_near_residential, ownership_model, components_included, invoice_vat_rate
validation_needed: Legal/tax review for templates.
```

```yaml
evidence_id: E04-014
claim: For PV acquired, commissioned, or expanded after 2024-12-31, German income-tax exemption can apply up to 30 kWp per residential/commercial unit and up to 100 kWp total per taxpayer/partnership; ground-mounted systems are not covered by this exemption.
claim_category: tax_income
supporting_source_ids: [S04-007]
evidence_type: state tax authority guidance
strength_of_evidence: high
geography: Germany
region_applicability: national federal tax rule, sourced from Hessen guidance
persona_applicability: investor, skeptic
funnel_stage: quote review
quote_stage_relevance: Medium to high; tax burden objection.
quote_or_data_excerpt: Hessen Finanzamt page explains JStG 2024 expansion from 2025.
counterevidence: Older systems before 2025 can have different multi-unit limits; total taxpayer cap can disqualify multi-property owners.
limitations: Not individualized tax advice.
product_implication: Date-sensitive tax rule needed; do not use outdated 15 kWp/unit rule for 2025+ projects.
message_implication: "Likely tax-exempt if conditions are met" with advisor caveat.
action_implication: Ask if customer owns other PV systems before making income-tax claim.
data_fields_required: acquisition_or_commissioning_date, pv_kwp, number_of_units, taxpayer_total_pv_kwp, building_or_ground_mounted
validation_needed: Tax counsel review.
```

```yaml
evidence_id: E04-015
claim: KfW 270 is the main federal financing option found for PV/storage: it can finance PV systems, batteries, planning, project development, and installation for eligible private individuals, with up to 100% of investment costs and rates set dynamically through the house bank at commitment.
claim_category: financing
supporting_source_ids: [S04-008]
evidence_type: public bank program terms
strength_of_evidence: high
geography: Germany
region_applicability: national program; bank participation varies
persona_applicability: price-sensitive, investor, family
funnel_stage: quote review
quote_stage_relevance: High for affordability objection.
quote_or_data_excerpt: KfW page: private persons eligible; at least part of power/heat must be fed in; up to 100% costs.
counterevidence: House bank can reject or price based on credit/collateral; cash buyers may prefer no financing.
limitations: Exact interest rate not captured from KfW page and changes frequently.
product_implication: Recommend financing check, not a guaranteed rate.
message_implication: "Ask your bank about KfW 270 before signing" is safer than quoting a stale rate.
action_implication: Create task: financing pre-check before installer contract if financing_needed = true.
data_fields_required: financing_needed, bank_precheck_status, kfw270_applicable, financing_rate, financing_term, application_before_order
validation_needed: Confirm current KfW application sequence with participating banks.
```

```yaml
evidence_id: E04-016
claim: KfW 442 Solarstrom fuer Elektroautos is closed for new applications as of 2026-06-20.
claim_category: incentives_closed_programs
supporting_source_ids: [S04-009]
evidence_type: public bank program page
strength_of_evidence: high
geography: Germany
region_applicability: national
persona_applicability: EV owners, investor
funnel_stage: quote review
quote_stage_relevance: Medium; prevents false incentive urgency.
quote_or_data_excerpt: KfW page says "Diesen Zuschuss koennen Sie nicht mehr beantragen."
counterevidence: Future successor programs could launch.
limitations: Status is time-sensitive.
product_implication: Mark program unavailable and do not generate copy around it.
message_implication: Avoid "claim EV solar grant" unless a new official program is verified.
action_implication: If EV bundle is quoted, suggest KfW 270 or local programs instead.
data_fields_required: incentive_program_status, checked_at
validation_needed: Recheck KfW before live demo.
```

```yaml
evidence_id: E04-017
claim: Regional and municipal PV/storage subsidies in Germany are highly location-specific and time-limited; the assistant should not claim subsidy availability or amount without checking official state/municipal program pages for the prospect's address.
claim_category: regional_incentives
supporting_source_ids: [S04-022, S04-008, S04-009]
evidence_type: funding overview plus federal program status
strength_of_evidence: medium
geography: Germany, state/municipal variation
region_applicability: local only
persona_applicability: price-sensitive, investor
funnel_stage: quote review
quote_stage_relevance: High when incentives alter payback or urgency.
quote_or_data_excerpt: co2online notes state/municipal programs are time-limited and can end early.
counterevidence: Some local programs may be active even where state programs ended.
limitations: co2online article includes outdated tax detail; use only as pointer to local verification.
product_implication: Build an incentive-check workflow by postcode/municipality and verified source date.
message_implication: "There may be local support; I can check your municipality" instead of naming unverified grants.
action_implication: Add task for installer: verify local subsidy before final proposal if subsidy_mentioned = true.
data_fields_required: municipality, state, subsidy_checked_at, subsidy_source_url, subsidy_status, application_deadline, apply_before_order
validation_needed: Direct official-source verification for each program in mock data.
```

```yaml
evidence_id: E04-018
claim: All new grid-connected PV systems and batteries in Germany must be registered online in MaStR within one month of commissioning; failure can lead to withheld EEG remuneration and fines.
claim_category: registration_paperwork
supporting_source_ids: [S04-003, S04-002]
evidence_type: consumer guidance plus regulator payment FAQ
strength_of_evidence: high
geography: Germany
region_applicability: national
persona_applicability: all; especially trust-sensitive and skeptic
funnel_stage: post-contract and post-install
quote_stage_relevance: Medium; supports "we handle paperwork" proof.
quote_or_data_excerpt: Verbraucherzentrale one-month registration deadline and BNetzA payment-readiness rule.
counterevidence: Some installers handle registration; ultimate operator obligation still matters.
limitations: Registration fields and workflow can change.
product_implication: Paperwork module should include MaStR for both PV and battery.
message_implication: "We will guide the registration so your feed-in payment is not delayed."
action_implication: Create commissioning + 30-day deadline task.
data_fields_required: commissioning_date, mastr_registered, mastr_id, battery_mastr_id, registration_deadline
validation_needed: Test against MaStR current workflow.
```

```yaml
evidence_id: E04-019
claim: For EE systems up to 30 kW on existing house connections, German network operators have had to provide digital/web-portal connection request processes and standardized information since 2025-01-01; required metering must be installed before lawful feed-in.
claim_category: grid_connection
supporting_source_ids: [S04-017]
evidence_type: regulator FAQ
strength_of_evidence: high
geography: Germany
region_applicability: national, but implementation varies by VNB
persona_applicability: all homeowners
funnel_stage: quote acceptance and installation scheduling
quote_stage_relevance: Medium; paperwork and timing affect close confidence.
quote_or_data_excerpt: BNetzA network connection FAQ updated 2026-06-19.
counterevidence: Local network operators may still have delays or specific technical forms.
limitations: Does not guarantee immediate approval in every case.
product_implication: Add VNB portal and response-deadline tracking.
message_implication: "The process is increasingly digital, but the local network operator still controls checks and metering."
action_implication: Schedule VNB request soon after quote acceptance; flag no-response milestones.
data_fields_required: vnb_name, vnb_portal_url, grid_request_submitted_at, meter_change_required, approval_status, response_deadline
validation_needed: Collect top VNB process details.
```

```yaml
evidence_id: E04-020
claim: Consumer advertising calls in Germany require prior express consent even where a customer relationship exists; consent must be documented and be available for regulator inspection, and BNetzA has recently fined energy/PV-sector telemarketing violations.
claim_category: outreach_phone_compliance
supporting_source_ids: [S04-018, S04-019]
evidence_type: legal guidance plus regulator enforcement
strength_of_evidence: high
geography: Germany
region_applicability: national
persona_applicability: all consumers/homeowners
funnel_stage: sequence recommendation
quote_stage_relevance: High; channel selection can be illegal.
quote_or_data_excerpt: BNetzA says consent must be prior to call; IHK states consumer cold calls are prohibited and documentation retained for five years.
counterevidence: Calls requested by the prospect or service/non-advertising calls may be different, but product must not infer that automatically.
limitations: Legal line between service follow-up and advertising can be fact-specific.
product_implication: Gate call recommendations on phone marketing consent or explicit customer-requested call context.
message_implication: Avoid generated "cold call" scripts.
action_implication: If no phone consent, suggest email only if permitted, postal mail, or waiting for inbound.
data_fields_required: phone_consent, phone_consent_scope, phone_consent_timestamp, phone_consent_source, opt_out_phone, last_customer_requested_call
validation_needed: Counsel review of call categories.
```

```yaml
evidence_id: E04-021
claim: Email, SMS, WhatsApp, and other messenger/direct-message advertising are treated as "electronic post" in German outreach guidance and generally require prior express consent unless all narrow existing-customer similar-product exception conditions are satisfied, including clear opt-out notice at collection and every use.
claim_category: outreach_electronic_compliance
supporting_source_ids: [S04-018]
evidence_type: chamber legal guidance
strength_of_evidence: high
geography: Germany
region_applicability: national
persona_applicability: all consumers/homeowners
funnel_stage: sequence recommendation
quote_stage_relevance: High; email/SMS/WhatsApp are likely assistant channels.
quote_or_data_excerpt: IHK says electronic post includes email, SMS, Facebook, WhatsApp and lists UWG section 7(3) conditions.
counterevidence: Transactional service messages may be outside advertising; the assistant must know purpose and consent.
limitations: IHK is guidance, not legal advice; WhatsApp also has platform terms and GDPR processor/controller issues.
product_implication: Channel eligibility must be channel- and purpose-specific.
message_implication: No WhatsApp/SMS sales nudges without consent; opt-out text must be included where required.
action_implication: If consent absent, create task to obtain consent during consultation or use compliant non-electronic channel.
data_fields_required: email_marketing_consent, sms_marketing_consent, whatsapp_marketing_consent, consent_scope, opt_out_email, opt_out_sms, opt_out_whatsapp, existing_customer_exception_basis
validation_needed: Legal review of existing-customer exception in solar-installation context.
```

```yaml
evidence_id: E04-022
claim: Email/newsletter consent does not automatically authorize open-tracking pixels; BfDI and DSK guidance indicate tracking pixels or terminal-equipment access generally require separate informed consent under TDDDG/ePrivacy and GDPR standards.
claim_category: outreach_tracking_privacy
supporting_source_ids: [S04-020, S04-021]
evidence_type: data-protection authority guidance
strength_of_evidence: high
geography: Germany
region_applicability: national / EU law implementation
persona_applicability: all
funnel_stage: sequence analytics and proposal engagement tracking
quote_stage_relevance: High if assistant uses opens/clicks/proposal views as buying signals.
quote_or_data_excerpt: BfDI says tracking pixels are not covered by newsletter consent and usually need separate consent; DSK explains TDDDG section 25 terminal-equipment consent.
counterevidence: Some strictly necessary technical access may be exempt, but marketing analytics/open pixels are not safe to assume.
limitations: Specific tracking implementation needs counsel and DPIA review.
product_implication: Separate send consent from tracking consent; do not score lead intent from opens unless tracking consent exists.
message_implication: Avoid hidden tracking and be transparent.
action_implication: Use non-tracking emails by default; if tracking consent absent, rely on replies, booked appointments, and explicit proposal actions.
data_fields_required: tracking_consent, tracking_consent_scope, tracking_consent_timestamp, email_pixel_enabled, proposal_tracking_enabled
validation_needed: Privacy review before analytics launch.
```

```yaml
evidence_id: E04-023
claim: Postal advertising is generally less restricted than electronic/phone outreach in German IHK guidance, but opt-outs and mailbox "no advertising" signals must be respected.
claim_category: outreach_postal_compliance
supporting_source_ids: [S04-018]
evidence_type: chamber legal guidance
strength_of_evidence: medium
geography: Germany
region_applicability: national with local postal/address-data considerations
persona_applicability: privacy-sensitive homeowners where electronic consent is absent
funnel_stage: sequence recommendation
quote_stage_relevance: Medium; possible compliant fallback channel.
quote_or_data_excerpt: IHK says postal/leaflet advertising is generally permissible but opt-out and mailbox stickers must be observed.
counterevidence: Use of personal postal data still needs GDPR legal basis and suppression handling.
limitations: Not enough source coverage here for full postal-address data compliance.
product_implication: Postal should be an optional fallback, but with suppression list.
message_implication: Do not call direct mail "consent-free" without nuance.
action_implication: If no e-consent and high-value lead, suggest a postal proposal summary only if address was lawfully collected and no opt-out.
data_fields_required: postal_address_lawful_basis, postal_opt_out, mailbox_no_ads_known, address_source
validation_needed: Need counsel guidance for personally addressed post in CRM context.
```
