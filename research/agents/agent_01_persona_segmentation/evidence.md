# Evidence: Agent 1

Status: completed initial extraction.

Traceability rule used here: every evidence item includes source IDs, source URLs, date accessed, geography, confidence, limitations, and product implication. See `sources.md` for full source methodology and bias notes.

```yaml
evidence_id: E01
claim: German residential PV personas should not start with "environmentalist" as the default; prospective PV users in KfW 2025 rank independence from energy suppliers, cost reduction, and climate protection as a close motive cluster.
claim_category: Persona motivation / PV
supporting_source_ids: [S01]
source_urls:
  - https://www.kfw.de/PDF/Download-Center/Konzernthemen/Research/PDF-Dokumente-KfW-Energiewendebarometer/KfW-Energiewendebarometer-2025.pdf
date_accessed: 2026-06-20
evidence_type: Representative household survey
strength_of_evidence: high
geography: Germany
region_applicability: Germany; all regions with local economic adjustment
persona_applicability: ROI planner, independence optimizer, climate confirmer
funnel_stage: Consideration; indirect post-quote relevance
quote_stage_relevance: High, because motive cluster determines proof order after quote
quote_or_data_excerpt: Prospective PV advantages: independence 59%, cost reduction 58%, climate protection 55%; existing PV users: climate 61%, cost 60%, independence 55%.
counterevidence: Vendor survey S05 reports money saving as more dominant than climate in 2024.
limitations: KfW is not a post-quote win/loss study; stated advantages may not predict contract signing.
product_implication: Persona inference should score multiple motives and show installers a ranked motive mix rather than assigning one fixed archetype.
message_implication: Lead with the customer's strongest evidence need, but acknowledge secondary motives where present.
action_implication: Ask or infer whether the homeowner is trying to lower bills, reduce dependence, or act on climate before generating follow-up.
data_fields_required: stated_motives, notes_keywords, quote_annual_consumption_kwh, current_tariff, PV_existing_or_planned, green_tariff_status
validation_needed: Validate motive weights against Reonic quote-to-contract outcomes.
```

```yaml
evidence_id: E02
claim: PV quote-stage hesitation in Germany is strongly financial: affordability and doubts that the investment pays are both reported by 36% of households who can imagine PV but have not bought it.
claim_category: Objection / PV
supporting_source_ids: [S01]
source_urls:
  - https://www.kfw.de/PDF/Download-Center/Konzernthemen/Research/PDF-Dokumente-KfW-Energiewendebarometer/KfW-Energiewendebarometer-2025.pdf
date_accessed: 2026-06-20
evidence_type: Representative household survey
strength_of_evidence: high
geography: Germany
region_applicability: Germany
persona_applicability: ROI planner, risk-and-trust skeptic, subsidy-dependent planner
funnel_stage: Consideration and post-quote
quote_stage_relevance: Very high, because these objections occur exactly when a price/proposal is reviewed
quote_or_data_excerpt: PV barriers: "Kann es mir nicht leisten" 36%; "Investition lohnt nicht" 36%; construction and bureaucracy about 20% each.
counterevidence: E.ON/Statista source S14 suggests many planners would still buy without fixed feed-in remuneration, so not all financial concerns are about feed-in.
limitations: Survey category does not distinguish cash-flow, financing, total price, or payback concern.
product_implication: Add separate objection chips for upfront affordability, payback skepticism, bureaucracy, and building complexity.
message_implication: Avoid generic "PV saves money" claims; provide transparent payback, self-consumption, assumptions, and financing options.
action_implication: Recommend a financial explainer or revised proposal before another sales nudge when price/payback signals appear.
data_fields_required: quote_total_price, financing_requested, subsidy_eligibility, self_consumption_estimate, current_power_price, competitor_quote_uploaded
validation_needed: Map which financial objection predicts ghosting vs negotiation vs close.
```

```yaml
evidence_id: E03
claim: Planned PV buyers need proof that the investment financially works before they accelerate; IKND/Allensbach identifies clear financial payoff as the strongest fast-action trigger, ahead of a cheap loan and rising power prices.
claim_category: Timing trigger / PV
supporting_source_ids: [S02]
source_urls:
  - https://initiative-klimaneutral.de/mee/
  - https://initiative-klimaneutral.de/mee/download-monitoring/
date_accessed: 2026-06-20
evidence_type: Owner-occupier survey
strength_of_evidence: medium
geography: Germany
region_applicability: Germany owner-occupied houses
persona_applicability: ROI planner, subsidy-dependent planner, risk-and-trust skeptic
funnel_stage: Planning to quote acceptance
quote_stage_relevance: Very high
quote_or_data_excerpt: For planned PV buyers, a clear answer that PV financially pays is described as the strongest quick-action incentive; cheap loan follows at 35%, rising electricity prices at 20%.
counterevidence: Kaps/Netessine S11 shows some storage adopters value autarky beyond direct financial value, so financial proof is not always the only closer.
limitations: Full percentage for the top trigger is embedded in chart and not text-extractable; report is NGO-commissioned.
product_implication: The assistant should be able to generate a transparent "why this quote pays or does not" asset, including assumptions.
message_implication: Use factual confidence-building, not urgency language, for PV planners.
action_implication: Recommend ROI walkthrough call, calculator link, or annotated proposal for high-value stalled quotes.
data_fields_required: planned_purchase_window, financing_need, expected_power_price, quote_validity, self_consumption_assumptions, battery_optional
validation_needed: Test whether ROI walkthrough reduces post-quote silence.
```

```yaml
evidence_id: E04
claim: A broad 2025 homeowner survey supports cost and independence as cross-technology motives: low long-term costs are cited by 51%, independence from the energy market by 45%, and climate by 26%.
claim_category: Cross-technology persona motivation
supporting_source_ids: [S03]
source_urls:
  - https://group.vattenfall.com/de/newsroom/pressemitteilungen/2025/zahlen-technik-kosten-hausbesitzer-entscheiden-rational-uber-energiewende-investitionen
date_accessed: 2026-06-20
evidence_type: Vendor-commissioned representative homeowner survey
strength_of_evidence: medium
geography: Germany
region_applicability: Germany homeowners
persona_applicability: ROI planner, independence optimizer, climate confirmer
funnel_stage: Consideration and planning
quote_stage_relevance: Medium-high, because these motives shape response to quote proof
quote_or_data_excerpt: Motives for home energy investment: low long-term costs 51%, independence 45%, climate 26%, property value 25%, subsidies 25%.
counterevidence: Vendor source may underplay non-financial values; KfW S01 gives climate a stronger role among existing PV users.
limitations: Broad investment category includes PV, heat pumps, storage, and wallboxes; not product-specific.
product_implication: Do not create separate product-only personas; one homeowner can carry the same motive across PV, heat pump, battery, and wallbox.
message_implication: Use cross-technology economics and independence framing for bundle quotes.
action_implication: If quote includes multiple technologies, explain the system logic instead of sending separate product pitches.
data_fields_required: quoted_products, motive_notes, bundle_discount, current_energy_costs, fossil_heating_status
validation_needed: Compare multi-product quote conversion by motive cluster.
```

```yaml
evidence_id: E05
claim: High upfront cost and bureaucracy are major cross-technology barriers for German homeowners; Vattenfall/Civey reports cost at 76%, bureaucracy at 50%, building hurdles at 30%, tradesperson shortage at 23%, technology doubts at 19%, and no perceived need at 17%.
claim_category: Objection / cross-technology
supporting_source_ids: [S03]
source_urls:
  - https://group.vattenfall.com/de/newsroom/pressemitteilungen/2025/zahlen-technik-kosten-hausbesitzer-entscheiden-rational-uber-energiewende-investitionen
date_accessed: 2026-06-20
evidence_type: Vendor-commissioned representative homeowner survey
strength_of_evidence: medium
geography: Germany
region_applicability: Germany homeowners
persona_applicability: Risk-and-trust skeptic, subsidy-dependent planner, ROI planner
funnel_stage: Consideration and quote comparison
quote_stage_relevance: High
quote_or_data_excerpt: Barriers: high cost 76%, bureaucracy 50%, building hurdles 30%, tradesperson shortage 23%, technology doubts 19%.
counterevidence: KfW S01 says PV handworker availability and supply shortages were only 8% and 6% in 2025, so product-specific priority differs.
limitations: Vendor press release lacks detailed questionnaire and product breakouts.
product_implication: Objection taxonomy should separate "price", "paperwork", "building suitability", "execution capacity", and "technology trust".
message_implication: Avoid one-size-fits-all objection handling; each barrier needs a different proof asset.
action_implication: For bureaucracy signals, recommend a checklist and installer-managed next steps; for technology doubts, recommend proof or reference project.
data_fields_required: objection_tags, product_type, building_notes, permit_or_grid_steps, installer_capacity, customer_question_log
validation_needed: Determine which barriers most often cause ghosting after quote.
```

```yaml
evidence_id: E06
claim: Heat-pump hesitation is centered on economic confidence and policy/offer clarity, not simply rejection of the technology.
claim_category: Objection / heat pump
supporting_source_ids: [S01, S06, S07]
source_urls:
  - https://www.kfw.de/PDF/Download-Center/Konzernthemen/Research/PDF-Dokumente-KfW-Energiewendebarometer/KfW-Energiewendebarometer-2025.pdf
  - https://www.co2online.de/presse/waermepumpe-ist-erste-wahl/
  - https://ariadneprojekt.de/pressemitteilung/ariadne-waerme-und-wohnen-panel-waermepumpen-bei-austausch-von-heizungen-immer-noch-knapp-hinter-fossilen-technologien/
date_accessed: 2026-06-20
evidence_type: Survey and public research panel
strength_of_evidence: high
geography: Germany
region_applicability: Germany; building stock varies regionally
persona_applicability: Heat-transition trigger, risk-and-trust skeptic, ROI planner
funnel_stage: Consideration, quote review, heating replacement
quote_stage_relevance: Very high
quote_or_data_excerpt: KfW heat-pump barrier "investment not worthwhile" is 42%; co2online says demand exists but people hesitate because they do not know what they can rely on; Ariadne names missing funding information and political uncertainty as brakes.
counterevidence: Ariadne notes lower heat-pump heating costs partly reflect better building efficiency, so simple savings claims can be misleading.
limitations: Co2online sample size not available in fetched page; Ariadne is not a sales study.
product_implication: Heat-pump persona inference must include building-readiness and policy/funding uncertainty, not just environmental attitude.
message_implication: Use transparent total-cost, subsidy, tariff, and suitability explanations; disclose assumptions.
action_implication: Recommend a "heating replacement decision check" call or proposal revision when heat-pump quote stalls.
data_fields_required: current_heating_age, gas_or_oil, building_energy_status, radiator_floor_heating, subsidy_status, tariff_options, heat_load_calc_status
validation_needed: Collect lost-deal reasons for heat-pump quotes by building type and funding status.
```

```yaml
evidence_id: E07
claim: For planned heat-pump buyers, equipment failure is the clearest action trigger; IKND/Allensbach says almost six in ten planned buyers would move quickly if the heating system broke, while oil/gas price increases and a long-term cheap heat-pump electricity tariff also matter.
claim_category: Timing trigger / heat pump
supporting_source_ids: [S02]
source_urls:
  - https://initiative-klimaneutral.de/mee/
  - https://initiative-klimaneutral.de/mee/download-monitoring/
date_accessed: 2026-06-20
evidence_type: Owner-occupier survey
strength_of_evidence: medium
geography: Germany
region_applicability: Germany owner-occupied houses
persona_applicability: Heat-transition trigger, ROI planner
funnel_stage: Pre-quote and post-quote timing
quote_stage_relevance: High
quote_or_data_excerpt: Trigger text: broken heating is cited by "fast sechs von zehn"; oil/gas price increase 38%; long-term cheap heat-pump tariff 37%.
counterevidence: Forced urgency can backfire if the homeowner is still unsure about building suitability or subsidy.
limitations: Full top-trigger exact percentage is text-described but not chart-extracted; stated intention, not observed conversion.
product_implication: Use real equipment age/failure and tariff/subsidy facts as urgency, never artificial scarcity.
message_implication: Frame heat-pump follow-up around readiness and risk of waiting only when current heating age or failure is explicit.
action_implication: If `current_heating_age > 20` or breakdown noted, recommend rapid assessment and contingency plan.
data_fields_required: heating_age, breakdown_status, maintenance_notes, fuel_type, local_tariff, subsidy_deadline_verified
validation_needed: Verify which heating-age thresholds predict action in installer CRM.
```

```yaml
evidence_id: E08
claim: Real heat-pump offers can be hard to compare and incomplete; in a Rheinland-Pfalz analysis of 160 offers, only 26% included warm water, hydraulic balancing, foundation, and electrical installation in the quality-filtered set.
claim_category: Quote trust / heat pump
supporting_source_ids: [S08]
source_urls:
  - https://www.verbraucherzentrale-rlp.de/sites/default/files/2025-06/250605_vz-rlp_auswertung_wp_angebote.pdf
date_accessed: 2026-06-20
evidence_type: Real offer analysis by consumer protection agency
strength_of_evidence: high
geography: Rheinland-Pfalz, Germany
region_applicability: Strong for Rheinland-Pfalz; likely transferable to German one/two-family heat-pump retrofits but should be validated
persona_applicability: Risk-and-trust skeptic, subsidy-dependent planner, heat-transition trigger
funnel_stage: Post-quote comparison
quote_stage_relevance: Very high
quote_or_data_excerpt: Only 26% of offers contained the key quality-filter categories; average quality-filtered total cost EUR 37,564 and median EUR 36,011.
counterevidence: Offer complexity varies by house and installer; some missing line items can be intentional scope choices.
limitations: Self-selected offers submitted to consumer advice; regional sample.
product_implication: The assistant should check whether the quote exposes key line items and explain missing or customer-responsible work.
message_implication: Trust-building follow-up should say what is included, what is excluded, and why.
action_implication: Recommend proposal annotation or line-item review before asking for signature if quote complexity is high.
data_fields_required: quote_line_items, hydraulic_balancing_included, foundation_included, electrical_work_included, radiator_replacement_included, bauseits_flags
validation_needed: Build a quote completeness parser for Reonic heat-pump proposals.
```

```yaml
evidence_id: E09
claim: PV is often the entry point to multi-technology home energy systems; sources report PV owners frequently combine or plan PV with batteries, heat pumps, EVs, wallboxes, or HEMS.
claim_category: Persona / multi-technology
supporting_source_ids: [S01, S02, S14]
source_urls:
  - https://www.kfw.de/PDF/Download-Center/Konzernthemen/Research/PDF-Dokumente-KfW-Energiewendebarometer/KfW-Energiewendebarometer-2025.pdf
  - https://initiative-klimaneutral.de/mee/
  - https://www.pv-magazine.de/unternehmensmeldungen/e-on-umfrage-dreiviertel-der-hauseigentuemer-setzen-auf-solaranlagen-auch-e%E2%80%91autos-und-waermepumpen-legen-weiter-zu/
date_accessed: 2026-06-20
evidence_type: Survey and market report synthesis
strength_of_evidence: medium
geography: Germany
region_applicability: Germany owner-occupied houses; local grid/tariff constraints apply
persona_applicability: Multi-tech system builder, independence optimizer, technical-control optimizer
funnel_stage: Planning and quote bundling
quote_stage_relevance: High for bundle proposals
quote_or_data_excerpt: KfW: 55% of PV owners combine with battery. IKND: PV is the key technology that further purchases often follow. E.ON via pv magazine: PV owners often have or plan storage, heat pump, and EV.
counterevidence: Not every PV lead wants a bundle; affordability barriers can increase with bundle complexity.
limitations: E.ON source is vendor survey via trade media; sample size not captured.
product_implication: Persona system needs a "system-building" state based on quoted technologies and household load, not a single-product persona.
message_implication: Explain sequencing and system logic: PV now, storage/EV/heat pump now or later based on load and budget.
action_implication: Recommend an integration roadmap or phased quote if bundle price creates hesitation.
data_fields_required: quoted_products, existing_products, EV_plan, heat_pump_plan, battery_plan, HEMS_interest, annual_load, roof_capacity
validation_needed: Identify whether phased proposals close more bundle leads than all-at-once proposals.
```

```yaml
evidence_id: E10
claim: Home EV and wallbox interest can be tied to PV and green self-charging; KfW reports 46% of EV households cite the ability to charge with green power as a purchase reason.
claim_category: Persona / EV charger
supporting_source_ids: [S01]
source_urls:
  - https://www.kfw.de/PDF/Download-Center/Konzernthemen/Research/PDF-Dokumente-KfW-Energiewendebarometer/KfW-Energiewendebarometer-2025.pdf
date_accessed: 2026-06-20
evidence_type: Representative household survey
strength_of_evidence: high
geography: Germany
region_applicability: Germany; strongest for own home with PV or PV potential
persona_applicability: Multi-tech system builder, independence optimizer, climate confirmer
funnel_stage: Consideration and bundle quote
quote_stage_relevance: Medium-high
quote_or_data_excerpt: KfW: 46% of households with EV state the possibility of charging with green power as a purchase reason.
counterevidence: EV buyers also cite other reasons not fully text-extracted here; charging access barriers differ for multi-family homes.
limitations: EV household survey is not a wallbox sales study.
product_implication: Wallbox follow-up should connect to PV self-consumption only when EV ownership or plan is explicit.
message_implication: For EV planners, show projected solar charging share and cost per 100 km rather than generic PV benefits.
action_implication: Recommend wallbox/PV bundle explanation if EV or commute need appears in notes.
data_fields_required: EV_owned_or_planned, commute_km, charging_location, PV_quote_size, wallbox_quote, dynamic_tariff_interest
validation_needed: Test whether solar-charging explainer improves close rate for wallbox-inclusive quotes.
```

```yaml
evidence_id: E11
claim: Battery/storage interest can reflect autarky and sustainability values beyond strict payback; Kaps and Netessine estimate a median German household nonmarket valuation of EUR 0.29/kWh for consuming self-generated solar power.
claim_category: Persona / battery storage
supporting_source_ids: [S11]
source_urls:
  - https://pubsonline.informs.org/doi/10.1287/opre.2024.1104
date_accessed: 2026-06-20
evidence_type: Peer-reviewed academic model using German household data
strength_of_evidence: medium
geography: Germany
region_applicability: Germany and similar solar-plus-storage markets; transferable to storage-like products cautiously
persona_applicability: Independence optimizer, climate confirmer, technical-control optimizer
funnel_stage: Adoption and quote evaluation
quote_stage_relevance: Medium
quote_or_data_excerpt: Abstract reports nonmarket valuation driven by sustainability and autarky desires; median EUR 0.29/kWh.
counterevidence: Public forum source S12 shows some technically engaged buyers reject batteries on payback grounds.
limitations: Model-based; early adoption context and battery prices may differ from 2026 offers.
product_implication: The assistant should ask whether storage is being evaluated for payback, autarky, backup, or self-consumption before recommending a battery message.
message_implication: For autarky-oriented buyers, do not argue only payback; for ROI buyers, do not oversell storage if economics are weak.
action_implication: Recommend battery sensitivity analysis or phased battery option depending on motive.
data_fields_required: battery_in_quote, desired_autarky_percent, backup_need, annual_load_profile, night_load, dynamic_tariff, payback_question
validation_needed: Separate battery-close outcomes by ROI vs autarky notes.
```

```yaml
evidence_id: E12
claim: Climate motivation is real but usually mixed with economic and independence motives; Zolar/Appinio reports climate as a PV purchase reason fell from 57% in 2021 to 43% in 2024, while saving money reached 62% and independence 47%.
claim_category: Persona validation / climate
supporting_source_ids: [S01, S05]
source_urls:
  - https://www.kfw.de/PDF/Download-Center/Konzernthemen/Research/PDF-Dokumente-KfW-Energiewendebarometer/KfW-Energiewendebarometer-2025.pdf
  - https://zolar.de/presse/umfrage-gruende-fuer-solaranlagenkauf
date_accessed: 2026-06-20
evidence_type: Representative survey plus vendor-commissioned survey
strength_of_evidence: medium
geography: Germany
region_applicability: Germany
persona_applicability: Climate confirmer, ROI planner, independence optimizer
funnel_stage: Consideration and quote review
quote_stage_relevance: Medium-high
quote_or_data_excerpt: Zolar 2024: save money 62%, independence 47%, climate 43%; KfW existing PV users still cite climate 61%.
counterevidence: KfW shows existing PV users put climate slightly above cost, so climate should not be ignored.
limitations: Zolar is vendor-commissioned and broad population; KfW is not quote-stage behavior.
product_implication: Keep a climate persona, but only infer it from explicit climate/green-power signals; do not default to it.
message_implication: Pair impact proof with economic proof unless notes show climate is primary.
action_implication: Recommend CO2 impact asset as secondary proof for most mixed-motive leads, primary only for explicit climate leads.
data_fields_required: climate_keywords, green_tariff, CO2_questions, motive_selection, sustainability_notes
validation_needed: Measure whether climate-first messaging closes or underperforms by persona.
```

```yaml
evidence_id: E13
claim: Social proof matters for prospective PV users; KfW reports recommendations from friends/acquaintances are a larger factor for potential users than existing users and cites 39% for potential PV users.
claim_category: Proof asset / social proof
supporting_source_ids: [S01]
source_urls:
  - https://www.kfw.de/PDF/Download-Center/Konzernthemen/Research/PDF-Dokumente-KfW-Energiewendebarometer/KfW-Energiewendebarometer-2025.pdf
date_accessed: 2026-06-20
evidence_type: Representative household survey
strength_of_evidence: high
geography: Germany
region_applicability: Germany; local proof likely stronger but must be validated
persona_applicability: Risk-and-trust skeptic, ROI planner, climate confirmer
funnel_stage: Consideration and post-quote reassurance
quote_stage_relevance: Medium-high
quote_or_data_excerpt: KfW describes friend/acquaintance recommendation as the fourth most important PV impulse; potential users 39%.
counterevidence: Installer-provided testimonials can be perceived as biased if too polished.
limitations: Source does not test installer case studies or exact post-quote assets.
product_implication: Include local reference projects and neighbor-like case studies as optional proof assets.
message_implication: Use specific, comparable examples rather than generic testimonials.
action_implication: If homeowner asks for references or is silent after quote, suggest a local project proof card or customer reference call where permissioned.
data_fields_required: postal_code_region, roof_type, product_mix, reference_project_available, permission_status, objection_tags
validation_needed: Test local proof asset impact by region and persona.
```

```yaml
evidence_id: E14
claim: Public PV forum language shows a technical/ROI skeptic pattern: after receiving a quote with and without battery, the poster asked whether six-year payback claims were "schön gerechnet" and whether battery should be installed now or later.
claim_category: Voice-of-customer / PV battery
supporting_source_ids: [S12]
source_urls:
  - https://www.photovoltaikforum.com/thread/237655-grundsatzfrage-speicher-ja-oder-nein/
date_accessed: 2026-06-20
evidence_type: Public forum anecdote
strength_of_evidence: low
geography: Germany; Bottrop mentioned
region_applicability: Germany anecdote only
persona_applicability: Technical-control optimizer, ROI planner, risk-and-trust skeptic
funnel_stage: Post-quote comparison
quote_stage_relevance: High as language texture, low as prevalence evidence
quote_or_data_excerpt: Short terms: "Wahrheitssuche", "schön gerechnet", "Akku später".
counterevidence: Some forum replies favor batteries for self-consumption even when payback is uncertain.
limitations: One self-selected technical forum thread; mixed commercial/residential load profile.
product_implication: Add a "validate assumptions" path when customers question payback or battery sizing.
message_implication: Acknowledge uncertainty; show assumptions and optional phased storage.
action_implication: Recommend a calculation walkthrough rather than a persuasion-heavy follow-up.
data_fields_required: battery_optional, payback_claim, load_profile, customer_questions, competitor_quote_count, smart_meter_data_available
validation_needed: Compare with real Reonic notes for battery-payback objections.
```

```yaml
evidence_id: E15
claim: Public heat-pump forum language shows price shock can pause a project; a user described an offer over EUR 42,000 and said the buyer was "geschockt" and postponed the plan.
claim_category: Voice-of-customer / heat pump quote
supporting_source_ids: [S13, S08]
source_urls:
  - https://www.haustechnikdialog.de/Forum/t/293043/Angebot-Waermepumpe-Sind-das-normale-Preise-
  - https://www.verbraucherzentrale-rlp.de/sites/default/files/2025-06/250605_vz-rlp_auswertung_wp_angebote.pdf
date_accessed: 2026-06-20
evidence_type: Public forum anecdote plus real-offer analysis
strength_of_evidence: medium
geography: Germany; VZ data Rheinland-Pfalz
region_applicability: Germany heat-pump retrofits; forum anecdote unvalidated
persona_applicability: Risk-and-trust skeptic, subsidy-dependent planner, heat-transition trigger
funnel_stage: Post-quote hesitation
quote_stage_relevance: Very high
quote_or_data_excerpt: Forum terms: "geschockt" and "Vorhaben zurückgestellt"; VZ offer averages around mid-EUR 30k and wide ranges.
counterevidence: Some expensive offers may reflect legitimate scope, building condition, or electrical upgrades.
limitations: Forum is anecdotal; VZ sample is regionally and self-selection limited.
product_implication: Flag quote totals that exceed local benchmark or include unclear "bauseits" items and recommend trust repair.
message_implication: Validate the concern before explaining price; show included scope and alternatives.
action_implication: Recommend second-offer comparison, line-item explainer, or scope-reduction options.
data_fields_required: heat_pump_quote_total, included_line_items, building_scope, subsidy_amount, competitor_quotes, customer_sentiment
validation_needed: Build regional price benchmarks from installer quotes.
```

```yaml
evidence_id: E16
claim: Household decision-making should be modeled as an explicit stakeholder state rather than inferred from family stereotypes; Vattenfall/Civey reports 48% of homeowners cannot name a home energy initiator, 30% name the man, 12% the woman, 5% external experts, and 3% children.
claim_category: Decision process / ethics guardrail
supporting_source_ids: [S03]
source_urls:
  - https://group.vattenfall.com/de/newsroom/pressemitteilungen/2025/zahlen-technik-kosten-hausbesitzer-entscheiden-rational-uber-energiewende-investitionen
date_accessed: 2026-06-20
evidence_type: Vendor-commissioned representative homeowner survey
strength_of_evidence: medium
geography: Germany
region_applicability: Germany homeowners
persona_applicability: All personas
funnel_stage: Post-quote follow-up and debrief
quote_stage_relevance: High
quote_or_data_excerpt: Initiator responses: no named person 48%, man 30%, woman 12%, expert 5%, children 3%.
counterevidence: Source does not tell who has final contract authority.
limitations: Sensitive gender/family dynamics must not be used manipulatively; vendor press release lacks full method tables.
product_implication: Add a non-sensitive field for "who else needs to review this?" and generate partner/stakeholder summaries only when explicit.
message_implication: Do not assume "family wants reassurance"; ask who needs which proof.
action_implication: If notes mention partner or family review, recommend a concise decision summary and joint call.
data_fields_required: decision_makers_explicit, stakeholder_questions, debrief_notes, review_deadline, preferred_channel
validation_needed: Collect installer debriefs on household decision roles.
```

```yaml
evidence_id: E17
claim: Installer communication and follow-through are trust signals, but current public review evidence is too weak for persona rules; review snippets mention clear advice, missed installation appointments, paperwork delays, no communication, and unexplained cancellation.
claim_category: Trust / installer experience
supporting_source_ids: [S15]
source_urls:
  - https://www.trustpilot.com/review/enpal.de
  - https://www.trustpilot.com/review/1komma5.com
  - https://www.trustpilot.com/review/zolar.de
  - https://www.trustpilot.com/review/otovo.de
date_accessed: 2026-06-20
evidence_type: Public review snippets from search results
strength_of_evidence: low
geography: Germany where identifiable; mixed for some 1KOMMA5 snippets
region_applicability: Unvalidated; treat as generic trust texture only
persona_applicability: Risk-and-trust skeptic, all personas
funnel_stage: Sales, installation, post-sale
quote_stage_relevance: Medium as trust framing
quote_or_data_excerpt: Snippet terms include "clear and honest suggestions", "nobody arrived", "No communication", and "cancel everything without explanation".
counterevidence: Review snippets also include positive reviews for easy contact, punctuality, and smooth execution.
limitations: Direct Trustpilot fetch was blocked; snippets are uncontrolled and not systematically coded.
product_implication: Do not infer personas from review themes; do capture next commitment, owner, and date after every follow-up.
message_implication: Trust messaging should be grounded in concrete next steps, names, timelines, and proof, not broad reputation claims.
action_implication: Recommend a precise follow-up task with owner and date after quote, and capture debrief if missed.
data_fields_required: next_action_owner, promised_date, appointment_status, customer_complaint_tags, communication_history
validation_needed: Run a structured review and CRM analysis before using installer trust features as predictive signals.
```

```yaml
evidence_id: E18
claim: The prompt personas are partially validated but need renaming: "investor" maps better to ROI planner; "environmentalist" maps to climate confirmer; "skeptic" maps to risk-and-trust skeptic; "family" is not validated as a motivation persona from available Germany-specific evidence.
claim_category: Persona validation / prompt archetypes
supporting_source_ids: [S01, S02, S03, S05, S08, S12, S13]
source_urls:
  - https://www.kfw.de/PDF/Download-Center/Konzernthemen/Research/PDF-Dokumente-KfW-Energiewendebarometer/KfW-Energiewendebarometer-2025.pdf
  - https://initiative-klimaneutral.de/mee/
  - https://group.vattenfall.com/de/newsroom/pressemitteilungen/2025/zahlen-technik-kosten-hausbesitzer-entscheiden-rational-uber-energiewende-investitionen
  - https://zolar.de/presse/umfrage-gruende-fuer-solaranlagenkauf
  - https://www.verbraucherzentrale-rlp.de/sites/default/files/2025-06/250605_vz-rlp_auswertung_wp_angebote.pdf
  - https://www.photovoltaikforum.com/thread/237655-grundsatzfrage-speicher-ja-oder-nein/
  - https://www.haustechnikdialog.de/Forum/t/293043/Angebot-Waermepumpe-Sind-das-normale-Preise-
date_accessed: 2026-06-20
evidence_type: Synthesis of surveys, offer analysis, and public discussions
strength_of_evidence: high for ROI/risk; medium for climate; unknown for family
geography: Germany
region_applicability: Germany; persona labels should be validated with Reonic data
persona_applicability: All personas
funnel_stage: Post-quote
quote_stage_relevance: Very high
quote_or_data_excerpt: Cost, rentability, independence, climate, offer complexity, and policy clarity are recurring evidence-backed dimensions; family-specific reassurance was not found as a Germany-specific motive in reviewed sources.
counterevidence: Household decision roles may include partners/family, but that supports stakeholder modeling, not a "family persona."
limitations: No internal Reonic CRM, sales notes, or win/loss data were available; public evidence is mainly pre-quote or consideration-stage.
product_implication: Build personas as explainable motivation and risk clusters, not as demographic stereotypes.
message_implication: Message by evidence need and household state, not by inferred family status or age.
action_implication: Ask clarifying questions or use installer notes when persona score is mixed.
data_fields_required: motive_scores, objection_scores, product_mix, stakeholder_notes, behavior_signals, quote_assumptions
validation_needed: Validate with Reonic-style quote outcomes and installer debriefs.
```
