# Evidence: Agent 2

Status: completed initial extraction on 2026-06-20.

Evidence scale: `high` means supported by multiple Germany-relevant source types or authoritative consumer guidance; `medium` means supported by multiple public sources but not representative; `low` means useful language or hypothesis from anecdotal/forum data only.

## VOC-E01 - Pressure and tone break sales trust

```yaml
evidence_id: VOC-E01
claim: In German PV sales conversations, pressure, identity ambiguity, informal tone against customer preference, or discovery that feels extractive can break trust before the technical offer is even evaluated.
claim_category: sales_process_feedback
supporting_source_ids:
  - VOC-S01: https://de.trustpilot.com/review/enpal.de
  - VOC-S03: https://de.trustpilot.com/review/1komma5.com
  - VOC-S23: https://www.provenexpert.com/de-de/alteon-gmbh/
  - VOC-S28: https://klimahochdrei.bayern/presseinformation-pv-anlagen-vorsicht-vor-telefon-und-haustuergeschaeften
evidence_type: public reviews plus consumer warning
strength_of_evidence: medium
date_accessed: 2026-06-20
geography: Germany
region_applicability: Germany-first; strongest for German residential PV sales.
persona_applicability: skeptic, trust-sensitive buyer, first-time homeowner, comparison shopper
funnel_stage: consultation and quote follow-up
quote_stage_relevance: high
quote_or_data_excerpt: Review language included "Abschluss drängen", "beim Sie bleiben", "niemals aufdringlich", and "ohne ... aufzuschwatzen".
counterevidence: Several positive reviews praise proactive follow-up and detailed questioning when it feels helpful and professional.
limitations: Review data is self-selected and company-specific; consumer warning does not quantify prevalence.
product_implication: The assistant should include a trust-risk detector for pressure words, cold outreach, tone mismatch, and identity ambiguity.
message_implication: Use clear company identity, professional German default ("Sie"), permissioned contact, and low-pressure CTAs.
action_implication: If trust risk is high, recommend a human call focused on answering questions, not closing.
data_fields_required: consent_channel, preferred_formality, prior_touchpoints, customer_sentiment_note, last_objection, sales_rep_notes
validation_needed: CRM/lost-deal notes should confirm whether tone/pressure appears in German post-quote losses.
```

## VOC-E02 - Responsiveness and continuity are major trust signals

```yaml
evidence_id: VOC-E02
claim: Customers repeatedly describe fast, competent answers and continuity of the contact person as reasons they feel safe with an installer.
claim_category: sales_process_feedback
supporting_source_ids:
  - VOC-S02: https://de.trustpilot.com/review/otovo.de
  - VOC-S03: https://de.trustpilot.com/review/1komma5.com
  - VOC-S05: https://de.trustpilot.com/review/enerix.de?page=4
  - VOC-S20: https://www.provenexpert.com/de-de/m-solar-plus/
  - VOC-S24: https://www.provenexpert.com/de-de/wechner-waermepumpen-gmbh/
date_accessed: 2026-06-20
evidence_type: public reviews
strength_of_evidence: medium
geography: Germany
region_applicability: Germany-first, likely broadly applicable in high-ticket home improvement.
persona_applicability: all personas, especially skeptics and first-time buyers
funnel_stage: consultation, quote, post-quote questions, post-install support
quote_stage_relevance: high
quote_or_data_excerpt: Review phrases included "immer ansprechbar", "schnell ... geantwortet", "derselbe Ansprechpartner", and "verständliche Beratung".
counterevidence: Responsiveness does not guarantee price competitiveness; VOC-S02 includes buyers choosing cheaper or referred alternatives despite good advice.
limitations: Public review language often overrepresents explicit service praise.
product_implication: Reonic assistant should surface response SLA, owner/contact continuity, and unresolved customer questions in the recommendation rationale.
message_implication: Follow-up should name the responsible contact and invite specific questions rather than send generic promotional copy.
action_implication: Schedule timely callback or short video explanation when quote questions are unanswered.
data_fields_required: assigned_rep, last_response_time, unanswered_questions, prior_contact_count, customer_question_topics
validation_needed: Measure whether fast follow-up after quote correlates with contract rate in Reonic-like CRM data.
```

## VOC-E03 - Good consultation can still lose to price or referrals

```yaml
evidence_id: VOC-E03
claim: German PV prospects may praise the consultation but choose another provider because of price, a personal recommendation, or a more convincing comparison offer.
claim_category: sales_process_feedback
supporting_source_ids:
  - VOC-S02: https://de.trustpilot.com/review/otovo.de?page=5
  - VOC-S20: https://www.provenexpert.com/de-de/m-solar-plus/
  - VOC-S21: https://www.provenexpert.com/de-de/sunvitec-gmbh-der-solar-energie-experte-in-thueringen/
  - VOC-S26: https://www.provenexpert.com/de-de/damm-solar-gmbh/
date_accessed: 2026-06-20
evidence_type: public reviews
strength_of_evidence: medium
geography: Germany
region_applicability: Germany-first; likely strong for PV quote-stage competition.
persona_applicability: value optimizer, trust-sensitive buyer, referral-led buyer
funnel_stage: post-quote comparison
quote_stage_relevance: high
quote_or_data_excerpt: Customer phrases included "am Preis gelegen", "Empfehlung", "Vergleichsangebote", and "Zweit-Angebot".
counterevidence: Some customers accept a higher or not-cheapest offer when they perceive better trust, coordination, or fit.
limitations: Review snippets do not reveal full offer economics or exact competitor terms.
product_implication: The assistant should not assume positive sentiment equals close readiness; it should ask whether alternatives, referrals, or price gaps are active.
message_implication: Use comparison help: "Welche Punkte sollen wir nebeneinanderstellen?" rather than defending price immediately.
action_implication: Recommend a proposal comparison call or one-page comparison matrix when competitor/referral signals appear.
data_fields_required: competitor_mentions, referral_mentions, competing_offer_count, price_gap_if_known, decision_deadline
validation_needed: Win/loss notes should identify how often price/referral beats good consultation.
```

## VOC-E04 - Itemized, comparable offers reduce suspicion

```yaml
evidence_id: VOC-E04
claim: Buyers and consumer advisors expect PV offers to break out PV, battery, wallbox, labor, scaffolding, grid registration, and assumptions; bundled mixed offers trigger suspicion.
claim_category: sales_process_feedback
supporting_source_ids:
  - VOC-S07: https://www.photovoltaikforum.com/thread/212872-photovoltaikneuling-angebot-annehmen-oder-weiter-schauen/
  - VOC-S20: https://www.provenexpert.com/de-de/m-solar-plus/
  - VOC-S29: https://www.solarserver.de/2023/05/18/verbraucherzentrale-nrw-stellt-checkliste-fuer-photovoltaik-angebote-zusammen/
date_accessed: 2026-06-20
evidence_type: public forum plus consumer guidance
strength_of_evidence: high
geography: Germany
region_applicability: direct Germany relevance.
persona_applicability: skeptic, investor, technical evaluator, comparison shopper
funnel_stage: post-quote evaluation
quote_stage_relevance: high
quote_or_data_excerpt: Forum language included "wesentliche Positionen" and "Mischung ... vertuscht"; consumer guidance asks for complete component and labor breakdown.
counterevidence: Some positive reviews like "all in one hand" when the package is also clearly coordinated and delivered.
limitations: Forum source is technically engaged; consumer guidance is not direct VOC.
product_implication: Add a proposal-clarity check and recommend a revised itemized proposal when bundle confusion appears.
message_implication: Do not say "all included" alone; list what is included and what is external or optional.
action_implication: Send itemized addendum or record a walkthrough video of the quote.
data_fields_required: quote_line_items, included_services, optional_addons, financing_terms, assumptions, excluded_costs
validation_needed: Test whether itemized proposal follow-up increases reply or close rate for high-price quotes.
```

## VOC-E05 - ROI claims are distrusted when assumptions are hidden

```yaml
evidence_id: VOC-E05
claim: Customers question payback claims when offers differ widely or when the calculation appears optimistic, especially around batteries and future electricity prices.
claim_category: sales_process_feedback
supporting_source_ids:
  - VOC-S08: https://www.photovoltaikforum.com/thread/160116-neuling-total-verschiedene-angebote-lohnt-es-sich/
  - VOC-S17: https://www.reddit.com/r/Finanzen/comments/1ifldbx/das_erste_jahr_mit_photovoltaik_eine_datenanalyse/
  - VOC-S29: https://www.solarserver.de/2023/05/18/verbraucherzentrale-nrw-stellt-checkliste-fuer-photovoltaik-angebote-zusammen/
  - VOC-S32: https://www.photovoltaikforum.com/thread/237655-grundsatzfrage-speicher-ja-oder-nein/
date_accessed: 2026-06-20
evidence_type: public forums, Reddit, consumer guidance
strength_of_evidence: medium
geography: Germany
region_applicability: Germany-first; exact benchmarks volatile.
persona_applicability: investor, skeptic, value optimizer
funnel_stage: quote evaluation
quote_stage_relevance: high
quote_or_data_excerpt: Customer/forum phrases included "lohnt sich", "Schock", "schön gerechnet", and "jenseits von gut".
counterevidence: Some buyers accept non-financial value such as independence, climate impact, risk reduction, or convenience.
limitations: Forums/Reddit are not representative and may over-index on ROI.
product_implication: Separate deterministic calculations from AI copy; show assumptions, sensitivity, and uncertainty.
message_implication: Avoid unsupported "pays for itself" claims; say what assumptions drive the estimate.
action_implication: Recommend an ROI-review call or interactive sensitivity view for analytical buyers.
data_fields_required: electricity_price, export_tariff, self_consumption_estimate, system_size, battery_size, financing_rate, price_per_kwp, assumed_price_inflation
validation_needed: Current German market economics must be supplied by Agent 4 before using payback/IRR in generated messages.
```

## VOC-E06 - Financing and rental solve liquidity, not value anxiety

```yaml
evidence_id: VOC-E06
claim: Monthly payment or rental models can keep prospects engaged when cash purchase is difficult, but they increase scrutiny of total cost, included obligations, and risk transfer.
claim_category: sales_process_feedback
supporting_source_ids:
  - VOC-S09: https://www.photovoltaikforum.com/thread/230454-enpal-angebot-f%C3%BCr-173-im-monat-lohnt-sich-pv-anlage-mit-speicher-wallbox-und-kau/
  - VOC-S12: https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/photovoltaik-solaranlage-mieten-eine-alternative-zum-kauf-71086
date_accessed: 2026-06-20
evidence_type: public forum plus consumer guidance
strength_of_evidence: medium
geography: Germany
region_applicability: Germany-first.
persona_applicability: budget-constrained homeowner, risk-averse buyer, family buyer
funnel_stage: post-quote financing decision
quote_stage_relevance: high
quote_or_data_excerpt: Homeowner language included "finanziell schwer umsetzbar" and "höherer Gesamtkosten".
counterevidence: Forum communities often oppose rental models, while some mainstream buyers may value service/risk reduction.
limitations: one forum example; Verbraucherzentrale guidance is not direct customer language.
product_implication: The assistant should distinguish liquidity objection from ROI objection.
message_implication: Offer buy-vs-rent/finance comparison with total cost, obligations, included service, and exit terms.
action_implication: Recommend financing explainer only after asking whether the blocker is upfront cash, monthly budget, or risk.
data_fields_required: financing_available, monthly_payment, term_years, total_cost, included_service, maintenance_obligations, buyout_terms
validation_needed: Need current installer financing products and legal review before producing customer-facing finance claims.
```

## VOC-E07 - Battery interest is mixed with economic skepticism

```yaml
evidence_id: VOC-E07
claim: Homeowners like the idea of using more self-produced power, but batteries trigger doubts about winter usefulness, sizing, payback, and whether to install now or later.
claim_category: sales_process_feedback
supporting_source_ids:
  - VOC-S08: https://www.photovoltaikforum.com/thread/160116-neuling-total-verschiedene-angebote-lohnt-es-sich/
  - VOC-S31: https://www.photovoltaikforum.com/thread/189545-7kwp-mit-starker-verschattung-im-winter-pv-sinnvoll/
  - VOC-S32: https://www.photovoltaikforum.com/thread/237655-grundsatzfrage-speicher-ja-oder-nein/
date_accessed: 2026-06-20
evidence_type: public forum discussions
strength_of_evidence: medium
geography: Germany / DACH forum context
region_applicability: likely Germany-relevant, but current battery prices and tariffs must be refreshed.
persona_applicability: investor, autonomy seeker, heat-pump/EV owner, skeptic
funnel_stage: quote evaluation
quote_stage_relevance: high
quote_or_data_excerpt: Forum language included "Akku ... wirklich lohnt", "Solar, Akku später", and "Speicher weg".
counterevidence: Some users say they are battery fans for autonomy or reduced grid purchase even if ROI is uncertain.
limitations: Forum users are technically engaged; battery economics are volatile.
product_implication: Battery recommendations need persona-specific framing and numerical guardrails.
message_implication: Present "battery now vs battery-ready later" options with assumptions instead of one-size-fits-all attachment.
action_implication: Recommend a scenario comparison when quote contains battery and buyer asks about economics.
data_fields_required: battery_size_kwh, battery_cost, night_load, EV_or_heatpump, self_consumption_share, tariff_type, backup_need
validation_needed: Agent 4 should provide Germany-current battery economics; CRM should validate attach-rate objections.
```

## VOC-E08 - Winter/cloud performance is a nuanced objection, especially with heat pumps

```yaml
evidence_id: VOC-E08
claim: German homeowners ask whether PV produces enough in winter, shade, cloud, or with heat-pump load; credible answers must acknowledge seasonal limits without dismissing diffuse-light contribution.
claim_category: sales_process_feedback
supporting_source_ids:
  - VOC-S13: https://www.haustechnikdialog.de/Forum/t/253574/Erfahrungen-mit-Thermondo-und-LG-Waermepumpen
  - VOC-S22: https://www.provenexpert.com/de-de/green-vision-germany-gmbh/
  - VOC-S31: https://www.photovoltaikforum.com/thread/189545-7kwp-mit-starker-verschattung-im-winter-pv-sinnvoll/
  - VOC-S32: https://www.photovoltaikforum.com/thread/237655-grundsatzfrage-speicher-ja-oder-nein/
date_accessed: 2026-06-20
evidence_type: public forums and reviews
strength_of_evidence: medium
geography: Germany
region_applicability: Germany-first; site-specific irradiance and shade data required.
persona_applicability: skeptic, technical evaluator, heat-pump owner, family buyer
funnel_stage: quote evaluation
quote_stage_relevance: high
quote_or_data_excerpt: Customer/forum phrases included "Winter", "bewölkt", "WP", "Stromverbrauch deutlich steigen", and "zusätzliche Stromkosten".
counterevidence: Some forum participants emphasize that winter yield still helps self-consumption, but not like summer.
limitations: Forum advice may be site-specific; reviews with performance claims are not independently verified.
product_implication: Assistant should generate seasonal production explanations using actual roof/shading/consumption data, not generic "works in winter" copy.
message_implication: Say panels produce less in winter and show expected monthly contribution; avoid implying full heat-pump coverage.
action_implication: Recommend a seasonal chart or consultation when winter/WP language appears.
data_fields_required: roof_orientation, roof_pitch, shading, monthly_consumption, heatpump_load, PVGIS_or_model_output, battery_presence
validation_needed: Need market/economics agent model assumptions and installer production simulation data.
```

## VOC-E09 - Heat-pump offers need operating-cost and monthly-burden explanation

```yaml
evidence_id: VOC-E09
claim: Heat-pump prospects delay or challenge offers when the quote does not explain future electricity consumption, monthly burden, subsidies, and comparison against current gas/oil costs.
claim_category: sales_process_feedback
supporting_source_ids:
  - VOC-S13: https://www.haustechnikdialog.de/Forum/t/253574/Erfahrungen-mit-Thermondo-und-LG-Waermepumpen
  - VOC-S14: https://www.haustechnikdialog.de/Forum/t/256361/LW-Waermepumpe-Angebot-zu-teuer-
  - VOC-S15: https://www.haustechnikdialog.de/Forum/t/276696/Teurer-als-mit-der-Waermepumpe-haben-wir-noch-nie-geheizt-?page=6
  - VOC-S16: https://verbraucherzentrale-energieberatung.de/waermepumpen-angebote-oft-unuebersichtlich/
date_accessed: 2026-06-20
evidence_type: public forums plus consumer guidance
strength_of_evidence: medium
geography: Germany
region_applicability: Germany-first; exact economics volatile.
persona_applicability: budget-constrained homeowner, skeptic, family buyer
funnel_stage: heat-pump quote evaluation
quote_stage_relevance: medium for PV-only, high for Reonic multi-technology quotes.
quote_or_data_excerpt: Forum phrases included "Mehrverbrauch an Strom", "monatliche Belastung", "sehr teuer", and "keine deutlichen Kostenvorteile".
counterevidence: Positive reviews show buyers trust heat-pump retrofits when offers are detailed, staged, and house-specific.
limitations: Forum examples are anecdotal; subsidy and tariff conditions have changed.
product_implication: For PV-plus-heat-pump quotes, the assistant must include operating-cost scenarios, not only capex.
message_implication: Use "monthly impact" and "assumptions" framing; avoid vague "saves money" claims.
action_implication: Recommend a heat-pump economics call before asking for signature.
data_fields_required: current_heating_fuel_cost, heat_demand, expected_COP_or_JAZ, electricity_tariff, subsidy_amount, financing_terms, PV_offset_estimate
validation_needed: Requires current subsidy/tariff data and installer heat-load calculation.
```

## VOC-E10 - Roof/property damage concerns must be separated from sales objections

```yaml
evidence_id: VOC-E10
claim: Roof leaks, damaged masonry, and improper PV mounting appear as installation-quality concerns, but homeowners can raise the risk before signing.
claim_category: installation_quality_feedback
supporting_source_ids:
  - VOC-S06: https://www.photovoltaikforum.com/thread/117157-pv-risiko-undichtes-dach/
  - VOC-S27: https://www.zfk.de/politik/regulierung/immer-mehr-beschwerden-gegen-pv-anlagen
  - VOC-S30: https://de.trustpilot.com/review/sveasolar.de
date_accessed: 2026-06-20
evidence_type: forum question, complaint reporting, public reviews
strength_of_evidence: medium
geography: Germany
region_applicability: Germany-first.
persona_applicability: risk-averse homeowner, skeptic, owner of older/complex roof
funnel_stage: pre-contract concern and post-install complaint
quote_stage_relevance: high when roof-risk language appears; otherwise installation workflow.
quote_or_data_excerpt: Language included "undichtes Dach", "Wasserschaden", "Dach beschädigt", and "Schaden im Gemäuer".
counterevidence: Many positive installation reviews emphasize clean, careful work and no complaints.
limitations: Complaint and review sources overrepresent problems; roof risks vary strongly by roof condition and mounting system.
product_implication: Add separate objection category "roof/property risk" with proof assets; do not treat it as generic distrust.
message_implication: Provide mounting method, roof inspection, installer insurance, warranty boundaries, and photo documentation.
action_implication: Recommend on-site technical inspection or roof-photo review before aggressive closing.
data_fields_required: roof_type, roof_age, roof_condition, mounting_method, roof_inspection_done, installer_insurance, warranty_terms
validation_needed: Need installer-specific warranty/insurance facts before customer-facing claims.
```

## VOC-E11 - Delays often involve external dependencies and handoffs

```yaml
evidence_id: VOC-E11
claim: Public complaints and reviews frequently describe delays around delivery, missing components, grid/meter registration, network-operator approval, and cross-team handoffs.
claim_category: installation_quality_feedback
supporting_source_ids:
  - VOC-S04: https://de.trustpilot.com/review/zolar.de?page=5
  - VOC-S10: https://www.verbraucherzentrale-bawue.de/wissen/energie/erneuerbare-energien/aktuelle-probleme-in-der-photovoltaik-94813
  - VOC-S26: https://www.provenexpert.com/de-de/damm-solar-gmbh/
  - VOC-S27: https://www.zfk.de/politik/regulierung/immer-mehr-beschwerden-gegen-pv-anlagen
  - VOC-S30: https://de.trustpilot.com/review/sveasolar.de
date_accessed: 2026-06-20
evidence_type: review text, consumer-center complaint synthesis, trade press
strength_of_evidence: medium
geography: Germany
region_applicability: direct Germany relevance.
persona_applicability: all buyers after contract; risk-sensitive buyers before contract
funnel_stage: post-contract / installation / commissioning
quote_stage_relevance: medium as trust proof, high if customer asks about timeline.
quote_or_data_excerpt: Language included "Verzögerungen", "Netzanschluss", "Anschlusszusage", "Smart Meter", and "mehreren Telefonaten".
counterevidence: Positive reviews describe fast two-day installs, one-hand coordination, and smooth registration handling.
limitations: Complaint sources overrepresent failures; external delays may not be installer-controllable.
product_implication: Assistant should distinguish installer-controlled tasks from network/operator tasks and provide realistic timeline states.
message_implication: Avoid absolute timeline promises; explain next dependency and owner.
action_implication: Recommend status update or timeline proof asset when customer hesitates on operational reliability.
data_fields_required: project_stage, grid_application_status, meter_status, delivery_status, dependency_owner, promised_dates, actual_dates
validation_needed: Need current installer process data and network-operator typical timelines by region.
```

## VOC-E12 - "Rundum-sorglos" is double-edged

```yaml
evidence_id: VOC-E12
claim: Customers like complete coordination when it is concrete and delivered, but consumer advocates warn generic "Rundum-sorglos" promises can mask predictable problems.
claim_category: mixed_sales_and_installation_feedback
supporting_source_ids:
  - VOC-S10: https://www.verbraucherzentrale-bawue.de/wissen/energie/erneuerbare-energien/aktuelle-probleme-in-der-photovoltaik-94813
  - VOC-S21: https://www.provenexpert.com/de-de/sunvitec-gmbh-der-solar-energie-experte-in-thueringen/
  - VOC-S23: https://www.provenexpert.com/de-de/alteon-gmbh/
  - VOC-S25: https://www.provenexpert.com/de-de/gsmsolar-solaranlagen-photovoltaik-solarstrom/
  - VOC-S26: https://www.provenexpert.com/de-de/damm-solar-gmbh/
date_accessed: 2026-06-20
evidence_type: consumer guidance plus public reviews
strength_of_evidence: medium
geography: Germany
region_applicability: Germany-first.
persona_applicability: convenience-seeker, family buyer, risk-averse buyer
funnel_stage: quote, contract, installation
quote_stage_relevance: high
quote_or_data_excerpt: Review/guidance language included "alles in einer Hand", "Anmeldeformalitäten", "Rundum-Sorglos-Paket", and "Antrags-Wahnsinn".
counterevidence: Verbraucherzentrale BW explicitly treats broad all-in promises as a warning sign in complaint contexts.
limitations: Positive reviews are provider-specific; consumer warning is problem-focused.
product_implication: The assistant should replace vague all-in reassurance with a checklist of responsibilities and evidence of delivery.
message_implication: Say exactly which registrations, coordination, and aftercare are included; name exceptions.
action_implication: Send process map or responsibility matrix for convenience-seeking buyers.
data_fields_required: included_admin_tasks, responsible_party_by_task, external_dependencies, aftercare_terms, warranty_terms
validation_needed: Installer-specific process promises must be verified before use.
```

## VOC-E13 - Local proof, referrals, and regional references reduce perceived contractor risk

```yaml
evidence_id: VOC-E13
claim: Local/regional presence, personal recommendations, references, and known nearby work appear repeatedly as trust accelerators for German PV buyers.
claim_category: sales_process_feedback
supporting_source_ids:
  - VOC-S18: https://www.reddit.com/r/wohnen/comments/1r0v1qu/angebote_f%C3%BCr_solaranlage/
  - VOC-S21: https://www.provenexpert.com/de-de/sunvitec-gmbh-der-solar-energie-experte-in-thueringen/
  - VOC-S25: https://www.provenexpert.com/de-de/gsmsolar-solaranlagen-photovoltaik-solarstrom/
  - VOC-S29: https://www.solarserver.de/2023/05/18/verbraucherzentrale-nrw-stellt-checkliste-fuer-photovoltaik-angebote-zusammen/
date_accessed: 2026-06-20
evidence_type: public forum/reddit, public reviews, consumer guidance
strength_of_evidence: medium
geography: Germany
region_applicability: Germany-first, especially small/mid-size installers.
persona_applicability: trust-sensitive buyer, first-time homeowner, family buyer
funnel_stage: provider search and post-quote
quote_stage_relevance: high
quote_or_data_excerpt: Language included "Mund-zu-Mund-Propaganda", "persönliche Empfehlung", "lokale Firma", and "Referenzen in der Region".
counterevidence: National providers can still win with price, financing, brand, or convenience.
limitations: Anecdotal/review-based; does not quantify effect size.
product_implication: Add local proof asset suggestions and "no referral available" risk flag.
message_implication: Share nearby references, photos, or region-specific process familiarity when permissioned.
action_implication: Recommend reference call, case-study link, or local project proof before discounting.
data_fields_required: lead_source, referral_available, nearby_reference_projects, service_region, customer_city, permissioned_case_studies
validation_needed: Need installer-approved reference assets and privacy-safe customer proof.
```

## VOC-E14 - Positive installation reviews emphasize cleanliness, punctuality, and handover

```yaml
evidence_id: VOC-E14
claim: Installation-quality praise uses practical language about clean work, punctuality, coordinated trades, and competent handover, which should be separated from quote-stage persuasion.
claim_category: installation_quality_feedback
supporting_source_ids:
  - VOC-S05: https://de.trustpilot.com/review/enerix.de?page=4
  - VOC-S21: https://www.provenexpert.com/de-de/sunvitec-gmbh-der-solar-energie-experte-in-thueringen/
  - VOC-S26: https://www.provenexpert.com/de-de/damm-solar-gmbh/
  - VOC-S30: https://de.trustpilot.com/review/sveasolar.de
date_accessed: 2026-06-20
evidence_type: public reviews
strength_of_evidence: medium
geography: Germany
region_applicability: Germany-first.
persona_applicability: risk-averse homeowner, family buyer, quality-sensitive buyer
funnel_stage: installation and post-install testimonial
quote_stage_relevance: medium as proof asset, not as buyer motivation alone.
quote_or_data_excerpt: Review phrases included "sauber", "pünktlich", "Hand in Hand", "Einweisung", and "termingerecht".
counterevidence: A good installation review may not address price, ROI, or financing objections.
limitations: Positive review page slices; no outcome measurement.
product_implication: The assistant should label this as installation-quality social proof, not direct close readiness.
message_implication: Use practical proof like "how the install day works" for risk-sensitive buyers.
action_implication: Send installation-day checklist or local testimonial after technical objections, not as generic nurture.
data_fields_required: proof_asset_library, installer_quality_metrics, planned_install_timeline, testimonial_tags
validation_needed: Need permissioned proof assets and installer quality metrics.
```

## VOC-E15 - Post-install support issues affect pre-contract credibility

```yaml
evidence_id: VOC-E15
claim: Reviews mentioning missing callbacks, unresolved technical warnings, rushed instruction, or slow customer response suggest that buyers need aftercare proof before signing.
claim_category: installation_quality_feedback
supporting_source_ids:
  - VOC-S02: https://de.trustpilot.com/review/otovo.de?page=5
  - VOC-S04: https://de.trustpilot.com/review/zolar.de?page=5
  - VOC-S24: https://www.provenexpert.com/de-de/wechner-waermepumpen-gmbh/
  - VOC-S30: https://de.trustpilot.com/review/sveasolar.de
date_accessed: 2026-06-20
evidence_type: public reviews
strength_of_evidence: medium
geography: Germany
region_applicability: Germany-first.
persona_applicability: skeptic, quality-sensitive buyer, risk-averse buyer
funnel_stage: post-install feedback influencing quote-stage trust
quote_stage_relevance: medium
quote_or_data_excerpt: Review language included "keine Antwort", "meldet sich nie", "Einweisung sehr schnell", and "Reaktionszeit".
counterevidence: Many positive reviews praise ongoing support and fast answers.
limitations: Negative reviews may overrepresent service failures; no denominator for support cases.
product_implication: Add aftercare/service proof to strategy when buyer is trust-sensitive or asks "what happens after install?".
message_implication: Explain service channel, response expectations, app/monitoring support, and handover.
action_implication: Recommend post-install support explainer or owner introduction.
data_fields_required: service_sla, support_contact, monitoring_setup, handover_checklist, warranty_terms, open_service_cases
validation_needed: Installer-specific service SLAs and support capacity must be confirmed.
```

## VOC-E16 - Capacity and quote delays can quietly cool a lead

```yaml
evidence_id: VOC-E16
claim: Public heat-pump and PV reviews show that long waits for an offer or unclear next steps can occur under high demand and may cool even positively disposed prospects.
claim_category: sales_process_feedback
supporting_source_ids:
  - VOC-S20: https://www.provenexpert.com/de-de/m-solar-plus/
  - VOC-S24: https://www.provenexpert.com/de-de/wechner-waermepumpen-gmbh/
  - VOC-S26: https://www.provenexpert.com/de-de/damm-solar-gmbh/
date_accessed: 2026-06-20
evidence_type: public reviews
strength_of_evidence: medium
geography: Germany
region_applicability: Germany-first.
persona_applicability: all personas; especially high-intent quote requesters
funnel_stage: consultation-to-quote and post-quote
quote_stage_relevance: high
quote_or_data_excerpt: Review language included "kurzfristig ... geliefert", "warte ... 6 Monate", and "schnell ein Termin".
counterevidence: Some customers remain patient when communication is transparent and work quality is high.
limitations: One six-month delay from 2022 may reflect unusual demand after Ukraine-war energy shock.
product_implication: The assistant should monitor quote age, promised quote date, and next-task owner.
message_implication: Proactively update customers even when nothing changed; do not let silence be the message.
action_implication: Recommend "status update" tasks for stale quote or pending external dependency.
data_fields_required: quote_requested_date, quote_sent_date, promised_next_step_date, last_customer_touch, installer_capacity, dependency_owner
validation_needed: Need actual Reonic/installer funnel timestamps.
```

## VOC-E17 - Family or advisor review can shape the decision

```yaml
evidence_id: VOC-E17
claim: Some high-ticket heat-pump/PV decisions involve family members or outside advisors who help evaluate whether an offer is realistic.
claim_category: sales_process_feedback
supporting_source_ids:
  - VOC-S19: https://www.reddit.com/r/Handwerker/comments/1ruikam/angebot_48500_f%C3%BCr_7kw_splitw%C3%A4rmepumpe_angemessen/
  - VOC-S18: https://www.reddit.com/r/wohnen/comments/1r0v1qu/angebote_f%C3%BCr_solaranlage/
  - VOC-S29: https://www.solarserver.de/2023/05/18/verbraucherzentrale-nrw-stellt-checkliste-fuer-photovoltaik-angebote-zusammen/
date_accessed: 2026-06-20
evidence_type: Reddit discussion and consumer guidance
strength_of_evidence: low
geography: Germany
region_applicability: Germany-relevant hypothesis.
persona_applicability: family buyer, older homeowner, risk-sensitive buyer
funnel_stage: quote evaluation
quote_stage_relevance: medium
quote_or_data_excerpt: Reddit language included "meine Eltern planen" and "kurze Einschätzung".
counterevidence: No direct frequency evidence; many homeowners decide without public family/advisor discussion.
limitations: Anecdotal and anonymous; high-price examples may attract attention.
product_implication: Add optional "other decision makers/advisors" field and generate shareable quote summary.
message_implication: Provide plain-language PDF/video summary that a spouse, adult child, or advisor can review.
action_implication: Recommend inviting co-decision-maker to a short review call when household/advisor signals appear.
data_fields_required: decision_makers, advisor_involved, shared_proposal_views, forwarded_email_signal, household_notes
validation_needed: Validate with installer sales notes and CRM contacts.
```

## VOC-E18 - Do not overfit extreme reviews

```yaml
evidence_id: VOC-E18
claim: The same public review sources contain both severe complaints and strong praise, so product rules should use review language for objections and proof assets without treating review frequency as market frequency.
claim_category: research_guardrail
supporting_source_ids:
  - VOC-S01: https://de.trustpilot.com/review/enpal.de
  - VOC-S02: https://de.trustpilot.com/review/otovo.de
  - VOC-S05: https://de.trustpilot.com/review/enerix.de?page=4
  - VOC-S27: https://www.zfk.de/politik/regulierung/immer-mehr-beschwerden-gegen-pv-anlagen
  - VOC-S30: https://de.trustpilot.com/review/sveasolar.de
date_accessed: 2026-06-20
evidence_type: review distributions plus complaint-reporting limitations
strength_of_evidence: high
geography: Germany
region_applicability: applies to this Agent 2 corpus.
persona_applicability: all
funnel_stage: research synthesis
quote_stage_relevance: high as guardrail.
quote_or_data_excerpt: Aggregate examples include Enpal's visible 63% 5-star and 16% 1-star split and ZfK's complaint-data framing.
counterevidence: Extreme reviews are still valuable for identifying failure modes.
limitations: Review platforms and complaint centers are not representative sampling frames.
product_implication: Findings should become risk detectors and proof prompts, not prevalence-weighted personas without CRM validation.
message_implication: Avoid fear-based messaging based on rare bad outcomes.
action_implication: Use negative reviews to prepare support/inspection assets, not to manipulate urgency.
data_fields_required: internal_win_loss_data, support_case_frequency, complaint_tags, review_source_type
validation_needed: Need representative internal sales and service data before ranking objection frequency.
```
