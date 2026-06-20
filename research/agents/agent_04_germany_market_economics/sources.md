# Sources: Agent 4

Status: completed.

Date accessed for all web sources unless otherwise stated: 2026-06-20.

```yaml
source_id: S04-001
title: EEG-Foerderung und -Foerdersaetze
url_or_location: https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/ErneuerbareEnergien/EEG_Foerderung/start.html
source_type: regulator / official tariff publication
publisher_or_origin: Bundesnetzagentur
author_or_owner: Bundesnetzagentur
date_published_or_collected: 2026 page; current tariff table for commissioning from 2026-02-01 to 2026-07-31
date_accessed: 2026-06-20
geography: Germany
market_context: EEG feed-in tariff and market premium for solar systems
customer_segment: residential homeowners; small rooftop PV up to 100 kW most relevant
funnel_stage: quote review, ROI explanation, objection handling
sample_size: not applicable
methodology: statutory tariff publication under EEG
data_type: tariff table
primary_claims: For building/noise-barrier PV commissioned 2026-02-01 through 2026-07-31, fixed feed-in tariff is 7.78 ct/kWh partial feed-in and 12.34 ct/kWh full feed-in for the first 10 kW; 6.73/10.35 ct/kWh up to 40 kW; 5.50/10.35 ct/kWh up to 100 kW.
quantitative_metrics: 7.78, 12.34, 6.73, 10.35, 5.50 ct/kWh
verbatim_customer_language: none
limitations: Tariffs change by commissioning date; table does not replace legal/tax advice and does not include individual metering/export constraints.
bias_risks: Low; official regulator source.
confidence_rating: high
relevance_to_reonic: Core input for ROI, urgency, and truthful feed-in claims.
recommended_use_in_poc: Use as time-stamped tariff lookup by commissioning date, system size, building type, and partial/full feed-in mode.
transferability_to_germany: Germany-specific.
```

```yaml
source_id: S04-002
title: Solaranlagen und andere EE-Anlagen
url_or_location: https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/ErneuerbareEnergien/Solaranlagen/start.html
source_type: regulator FAQ
publisher_or_origin: Bundesnetzagentur
author_or_owner: Bundesnetzagentur
date_published_or_collected: FAQ entries updated 2025-02-21, 2025-03-20, 2025-12-10, 2026-01-09
date_accessed: 2026-06-20
geography: Germany
market_context: Solar EEG rules, payment process, storage integration
customer_segment: residential and small commercial PV operators
funnel_stage: quote follow-up, paperwork explanation, post-sale handoff
sample_size: not applicable
methodology: official regulator FAQ interpreting EEG procedures
data_type: legal/procedural guidance
primary_claims: EEG payment does not require a separate contract with the network operator, but payment only becomes due when required billing information is provided and the system is registered in the Marktstammdatenregister.
quantitative_metrics: monthly advance payment due by the 15th calendar day where requirements are met
verbatim_customer_language: none
limitations: FAQ is not individualized legal advice; some storage options still depend on future Bundesnetzagentur determinations.
bias_risks: Low.
confidence_rating: high
relevance_to_reonic: Supports paperwork checklist and prevents installers from over-promising fast payment.
recommended_use_in_poc: Add "EEG payment readiness" tasks: MaStR registration, operating data, bank details, marketing form, metering status.
transferability_to_germany: Germany-specific.
```

```yaml
source_id: S04-003
title: Marktstammdatenregister: Das muessen Sie bei Solaranlage und Co. wissen
url_or_location: https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/marktstammdatenregister-das-muessen-sie-bei-solaranlage-und-co-wissen-33124
source_type: consumer protection guidance
publisher_or_origin: Verbraucherzentrale
author_or_owner: Verbraucherzentrale
date_published_or_collected: 2025-11-13
date_accessed: 2026-06-20
geography: Germany
market_context: MaStR registration duties for PV and batteries
customer_segment: homeowners and small PV operators
funnel_stage: quote follow-up, onboarding, paperwork
sample_size: not applicable
methodology: consumer guidance based on German registry rules
data_type: procedural guidance
primary_claims: All new grid-connected electricity-generation systems and batteries must be registered in MaStR within one month of commissioning; late registration can cause EEG remuneration to be withheld and may trigger fines.
quantitative_metrics: one-month registration deadline
verbatim_customer_language: none
limitations: Consumer guidance; check MaStR/BNetzA for live registration workflow.
bias_risks: Low to medium; consumer advisory source, not regulator.
confidence_rating: high
relevance_to_reonic: Critical for post-quote and post-install task automation.
recommended_use_in_poc: Add required CRM fields for MaStR status, battery registration, commissioning date, and proof uploaded.
transferability_to_germany: Germany-specific.
```

```yaml
source_id: S04-004
title: BDEW-Strompreisanalyse
url_or_location: https://www.bdew.de/service/daten-und-grafiken/bdew-strompreisanalyse/ and https://www.bdew.de/media/documents/BDEW_Strompreisanalyse_012026_1.pdf
source_type: industry association price analysis
publisher_or_origin: BDEW
author_or_owner: BDEW
date_published_or_collected: PDF data stand 2026-01-12; web page accessed current 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: household electricity prices
customer_segment: residential households
funnel_stage: ROI and savings explanation
sample_size: not stated on page
methodology: BDEW tariff analysis; household benchmark is 3,500 kWh/year with proportional base price
data_type: average electricity price estimate
primary_claims: BDEW reported an average household electricity price of 37.2 ct/kWh in January 2026 and 37.0 ct/kWh on its later 2026 page; components on the later page are 15.2 ct/kWh procurement/sales, 9.3 ct/kWh network charges, and 12.6 ct/kWh taxes/levies/surcharges.
quantitative_metrics: 37.2 ct/kWh, 37.0 ct/kWh, 15.2, 9.3, 12.6 ct/kWh
verbatim_customer_language: none
limitations: Industry source; average does not equal a household's actual tariff, fixed charge, heat-pump tariff, dynamic tariff, or regional network charge.
bias_risks: Medium; energy industry association, but widely cited.
confidence_rating: medium
relevance_to_reonic: Useful default for savings estimates only when customer tariff is unknown.
recommended_use_in_poc: Use as fallback and label "market average checked 2026-06-20"; prefer actual customer bill/tariff.
transferability_to_germany: Germany-specific.
```

```yaml
source_id: S04-005
title: Preisbestandteile und Tarife / Monitoringbericht 2025 price release
url_or_location: https://www.bundesnetzagentur.de/DE/Vportal/Energie/PreiseAbschlaege/Tarife-table.html and https://www.bundesnetzagentur.de/SharedDocs/Pressemitteilungen/DE/2025/20251126_Monitoringbericht.html
source_type: regulator price information
publisher_or_origin: Bundesnetzagentur / Bundeskartellamt
author_or_owner: Bundesnetzagentur
date_published_or_collected: 2025-04-01 price date; 2025-11-26 press release
date_accessed: 2026-06-20
geography: Germany
market_context: household electricity price composition
customer_segment: residential households
funnel_stage: ROI explanation and objection handling
sample_size: monitoring survey; exact sample not captured in fetched lines
methodology: annual monitoring of energy markets
data_type: average retail price and price components
primary_claims: Bundesnetzagentur reported average household customer electricity price of 40.05 to 40.1 ct/kWh at 2025-04-01 for 2,500-5,000 kWh/year customers; price consists of procurement/sales/margin, network, metering, taxes, and levies/surcharges.
quantitative_metrics: 40.05/40.1 ct/kWh
verbatim_customer_language: none
limitations: Stichtag 2025-04-01, not a 2026 quote; actual household tariffs vary.
bias_risks: Low.
confidence_rating: high
relevance_to_reonic: Provides official benchmark and explains why self-consumption saves more than export earns.
recommended_use_in_poc: Show "official 2025 benchmark" as historical context; keep 2026 rate editable.
transferability_to_germany: Germany-specific.
```

```yaml
source_id: S04-006
title: FAQ Umsatzsteuerliche Massnahmen zur Foerderung des Ausbaus von Photovoltaikanlagen
url_or_location: https://www.bundesfinanzministerium.de/Content/DE/FAQ/foerderung-photovoltaikanlagen.html
source_type: official tax FAQ
publisher_or_origin: Bundesministerium der Finanzen
author_or_owner: BMF
date_published_or_collected: 2023-06-23
date_accessed: 2026-06-20
geography: Germany
market_context: VAT treatment for PV, batteries, essential components
customer_segment: residential PV buyers and operators
funnel_stage: quote review and financing/tax objection handling
sample_size: not applicable
methodology: tax administration FAQ
data_type: tax guidance
primary_claims: Since 2023-01-01, qualifying PV deliveries/installations on or near residential buildings use a 0% VAT rate; essential components, batteries, energy management systems, and necessary meter-cabinet work can be covered; invoices no longer show recoverable VAT under the zero-rate setup.
quantitative_metrics: 0% VAT; simplification threshold references 30 kW peak in FAQ
verbatim_customer_language: none
limitations: FAQ is from 2023 and should be checked against current BMF letters for edge cases, leasing, repairs, or non-residential setups.
bias_risks: Low.
confidence_rating: high
relevance_to_reonic: Prevents incorrect "claim VAT back" messages and explains lower gross quote.
recommended_use_in_poc: Add tax disclaimer and fields for building type, installation location, components, ownership/leasing.
transferability_to_germany: Germany-specific.
```

```yaml
source_id: S04-007
title: Photovoltaikanlagen und Blockheizkraftwerke
url_or_location: https://finanzamt.hessen.de/steuern/steuererklaerung-vorjahre/photovoltaikanlagen-und-blockheizkraftwerke
source_type: state tax authority guidance
publisher_or_origin: Finanzverwaltung Hessen
author_or_owner: Hessian tax administration
date_published_or_collected: after Jahressteuergesetz 2024; page accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany / Hessen, summarizing federal tax rules
market_context: income tax, trade tax, VAT simplification for PV
customer_segment: residential and small building PV operators
funnel_stage: quote review, tax objection handling
sample_size: not applicable
methodology: state tax administration explanation of federal tax law
data_type: tax guidance
primary_claims: For PV acquired, commissioned, or expanded after 2024-12-31, income tax exemption applies up to 30 kW peak per residential or commercial unit regardless of building type, subject to a 100 kW peak total cap per taxpayer or partnership; ground-mounted PV remains outside the exemption.
quantitative_metrics: 30 kW peak per unit; 100 kW peak total cap
verbatim_customer_language: none
limitations: State guidance; homeowners should validate with tax advisor for ownership, multi-property, commercial, or partnership cases.
bias_risks: Low.
confidence_rating: high
relevance_to_reonic: Enables truthful tax eligibility explanation and avoids outdated 15 kW multi-unit rule for new 2025+ systems.
recommended_use_in_poc: Add "tax exemption likely" eligibility check by commissioning/acquisition date, units, system size, taxpayer aggregate, and ground-mounted status.
transferability_to_germany: Federal German rule; state page is explanatory.
```

```yaml
source_id: S04-008
title: Erneuerbare Energien - Standard (270)
url_or_location: https://www.kfw.de/inlandsfoerderung/Unternehmen/Energie-Umwelt/F%C3%B6rderprodukte/Erneuerbare-Energien-Standard-%28270%29/
source_type: public development bank financing program
publisher_or_origin: KfW
author_or_owner: KfW
date_published_or_collected: current page accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany, with some foreign-project eligibility
market_context: PV and storage financing
customer_segment: private individuals, companies, public bodies
funnel_stage: quote review, financing objection handling
sample_size: not applicable
methodology: program terms
data_type: financing program description
primary_claims: KfW 270 finances PV systems, batteries, planning, project development, and installation; private individuals can be eligible if at least part of generated power/heat is fed in; loans can cover up to 100% of investment costs and up to EUR 150 million per project; rates are capital-market-linked and set at KfW commitment by the house bank.
quantitative_metrics: up to 100% of investment costs; up to EUR 150 million; 0.15% monthly commitment fee after defined period
verbatim_customer_language: none
limitations: Exact rate and approval depend on bank, creditworthiness, collateral, location, and date of commitment.
bias_risks: Low.
confidence_rating: high
relevance_to_reonic: Main federal financing option for homeowners considering debt-funded PV.
recommended_use_in_poc: Recommend "check KfW 270 via house bank before signing installer contract"; do not hard-code interest rates.
transferability_to_germany: Germany-specific program.
```

```yaml
source_id: S04-009
title: Zuschuss Nr. 442 Solarstrom fuer Elektroautos
url_or_location: https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestehende-Immobilie/F%C3%B6rderprodukte/Solarstrom-f%C3%BCr-Elektroautos-%28442%29/
source_type: public development bank program status
publisher_or_origin: KfW
author_or_owner: KfW
date_published_or_collected: current page accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: discontinued EV/PV/storage grant
customer_segment: owner-occupiers with EV charging, PV, storage
funnel_stage: quote review and incentive objection handling
sample_size: not applicable
methodology: program page
data_type: grant status
primary_claims: KfW states that grant 442 can no longer be applied for; existing recipients can still submit required proof.
quantitative_metrics: none current for new applicants
verbatim_customer_language: none
limitations: Program status can change; check before mentioning any successor grant.
bias_risks: Low.
confidence_rating: high
relevance_to_reonic: Prevents assistant from recommending a closed grant.
recommended_use_in_poc: Mark KfW 442 as unavailable for new leads as of 2026-06-20.
transferability_to_germany: Germany-specific.
```

```yaml
source_id: S04-010
title: Photovoltaik: Was bei der Planung einer Solaranlage wichtig ist
url_or_location: https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/photovoltaik-was-bei-der-planung-einer-solaranlage-wichtig-ist-5574
source_type: consumer protection guidance
publisher_or_origin: Verbraucherzentrale
author_or_owner: Verbraucherzentrale
date_published_or_collected: 2026-02 article update indicated by 2026 tariff content
date_accessed: 2026-06-20
geography: Germany
market_context: residential PV economics and design
customer_segment: homeowners
funnel_stage: quote-stage education and objection handling
sample_size: not applicable
methodology: consumer guidance
data_type: practical economics and planning guidance
primary_claims: Typical direct self-consumption is around 30% and can reach around 70% with a battery; self-consumption is usually more valuable than export because grid electricity costs more than feed-in remuneration; full-feed-in usually is not worthwhile for private homes unless as a supplement; south-facing 30-degree roofs are optimal but east-west roofs can be sensible because production is spread across the day.
quantitative_metrics: 30% direct self-consumption; 70% with battery; 7.78 ct/kWh feed-in for <=10 kWp from 2026-02-01
verbatim_customer_language: none
limitations: General guidance; customer-specific load profile, roof, shading, tariff, battery size, and financing determine actual economics.
bias_risks: Low to medium; consumer advisory source.
confidence_rating: medium
relevance_to_reonic: Supports persona-specific ROI, autonomy, and design messages.
recommended_use_in_poc: Use as conservative default assumptions and prompt installer to verify actual annual consumption, EV/heat pump plans, roof orientation, and battery.
transferability_to_germany: Germany-specific.
```

```yaml
source_id: S04-011
title: Lohnen sich Batteriespeicher fuer Photovoltaik-Anlagen?
url_or_location: https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/lohnen-sich-batteriespeicher-fuer-photovoltaikanlagen-24589
source_type: consumer protection guidance
publisher_or_origin: Verbraucherzentrale
author_or_owner: Verbraucherzentrale
date_published_or_collected: 2025-era article, page accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: home battery economics
customer_segment: homeowners considering PV + battery
funnel_stage: quote evaluation and battery objection handling
sample_size: not applicable
methodology: consumer guidance
data_type: cost and sizing guidance
primary_claims: Installed home battery prices in Germany are currently around EUR 400-800 per kWh of storage capacity for systems from 5 kWh; smaller batteries cost more per kWh; batteries bundled with PV are generally somewhat cheaper than retrofits; oversizing reduces economics.
quantitative_metrics: EUR 400-800/kWh installed for >=5 kWh systems
verbatim_customer_language: none
limitations: Market prices move quickly and vary by backup functionality, AC/DC architecture, installer, and package.
bias_risks: Low to medium.
confidence_rating: medium
relevance_to_reonic: Helps judge whether battery quote is economical and whether to position independence vs strict ROI.
recommended_use_in_poc: Add battery price-per-kWh sanity check and "oversized storage risk" warning.
transferability_to_germany: Germany-specific.
```

```yaml
source_id: S04-012
title: Aktuelle Fakten zur Photovoltaik in Deutschland
url_or_location: https://www.ise.fraunhofer.de/content/dam/ise/de/documents/publications/studies/aktuelle-fakten-zur-photovoltaik-in-deutschland.pdf
source_type: applied research institute report
publisher_or_origin: Fraunhofer ISE
author_or_owner: Fraunhofer ISE
date_published_or_collected: 2026-05-05 document timestamp; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: PV costs, LCOE, irradiation, system performance
customer_segment: residential and commercial PV context
funnel_stage: ROI explanation and technical proof
sample_size: literature/data synthesis; exact sample varies by figure
methodology: research report using BSW, BNetzA, DWD, and other datasets
data_type: market/economic and technical analysis
primary_claims: Annual PV operating costs are about 1-2% of investment cost; small rooftop PV has LCOE around 6-14 ct/kWh; Germany's mean horizontal global irradiation for 2001-2020 is 1102 kWh/(m2*a), with about +/-10% location variation; regional irradiation differences do not translate 1:1 into specific yield because temperature, soiling, and snow also matter.
quantitative_metrics: 1-2% opex; 6-14 ct/kWh LCOE; 1102 kWh/(m2*a); +/-10% irradiation variation
verbatim_customer_language: none
limitations: LCOE assumptions are model-based; not a substitute for a customer-specific quote.
bias_risks: Low; research institute, though data sources vary.
confidence_rating: high
relevance_to_reonic: Strong basis for investor-style economics and regional yield caveats.
recommended_use_in_poc: Use as default opex/LCOE benchmark; always override with quote and local PV simulation.
transferability_to_germany: Germany-specific.
```

```yaml
source_id: S04-013
title: PVGIS 5 user manual and PVcalc API samples
url_or_location: https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis/using-pvgis-5/pvgis-5-user-manual_en
source_type: EU scientific tool documentation and API output
publisher_or_origin: European Commission Joint Research Centre
author_or_owner: JRC PVGIS
date_published_or_collected: PVGIS 5.3 current default; API queried 2026-06-20
date_accessed: 2026-06-20
geography: Germany sample locations; Europe-wide tool
market_context: regional PV yield assumptions
customer_segment: homeowners; rooftop PV
funnel_stage: ROI and quote validation
sample_size: PVGIS-SARAH3 satellite data 2005-2023 for samples
methodology: PVGIS fixed grid-connected PV calculation, c-Si, 1 kWp, 35 degree tilt, south azimuth, 14% losses, horizon enabled
data_type: modeled annual PV yield
primary_claims: API samples returned annual 1 kWp production of 977.56 kWh in Hamburg, 1038.12 kWh in Cologne, 1049.42 kWh in Berlin, and 1137.85 kWh in Munich under the stated assumptions.
quantitative_metrics: Hamburg 977.56, Cologne 1038.12, Berlin 1049.42, Munich 1137.85 kWh/kWp/year
verbatim_customer_language: none
limitations: Model output, not measured roof yield; roof orientation, shading, modules, inverter, snow, soiling, and curtailment can materially change results.
bias_risks: Low; scientific public tool.
confidence_rating: high
relevance_to_reonic: Enables region-aware yield defaults and "local simulation needed" messages.
recommended_use_in_poc: Store region/yield assumptions and show assumptions visibly in ROI cards.
transferability_to_germany: Germany-specific samples; method transferable across Europe.
```

```yaml
source_id: S04-014
title: Bundesnetzagentur veroeffentlicht Daten zum Strommarkt 2025
url_or_location: https://www.bundesnetzagentur.de/1087156
source_type: regulator market data release
publisher_or_origin: Bundesnetzagentur / SMARD
author_or_owner: Bundesnetzagentur
date_published_or_collected: 2026-01-05
date_accessed: 2026-06-20
geography: Germany
market_context: wholesale electricity, PV generation, negative prices
customer_segment: system-level context for PV operators
funnel_stage: market explanation, export-risk explanation
sample_size: 2025 electricity-market year
methodology: SMARD data from transmission system operators
data_type: market data
primary_claims: In 2025, PV systems fed 74.1 TWh into the public supply grid, up from 63.2 TWh in 2024; negative wholesale prices occurred in 573 of 8,760 hours in 2025, up from 457 of 8,784 hours in 2024.
quantitative_metrics: 74.1 TWh PV grid feed-in; 573 negative-price hours; 89.32 EUR/MWh average day-ahead price
verbatim_customer_language: none
limitations: Private PV self-consumption is not included in SMARD realized generation; negative wholesale hours do not equal lost feed-in payment for every home system due to metering and legal exceptions.
bias_risks: Low.
confidence_rating: high
relevance_to_reonic: Supports why smart control and self-consumption matter more after Solarspitzengesetz.
recommended_use_in_poc: Use as background evidence, not as customer-specific loss estimate.
transferability_to_germany: Germany-specific.
```

```yaml
source_id: S04-015
title: Wird die Verguetung meiner Anlage wegen negativen Preisen reduziert?
url_or_location: https://www.clearingstelle-eeg-kwkg.de/haeufige-rechtsfrage/264
source_type: official/neutral EEG dispute-clearing guidance
publisher_or_origin: Clearingstelle EEG|KWKG, operated on behalf of BMWE
author_or_owner: Clearingstelle EEG|KWKG
date_published_or_collected: created 2025-08-12; text 2026-06-15; checked by source 2026-06-15
date_accessed: 2026-06-20
geography: Germany
market_context: Solarspitzengesetz / negative price rules
customer_segment: PV operators, including residential systems above thresholds
funnel_stage: quote review and export rule explanation
sample_size: not applicable
methodology: legal FAQ
data_type: EEG rule interpretation
primary_claims: For systems commissioned or awarded from 2025-02-25, remuneration can fall away from the first negative quarter-hour; for PV, the missed periods are compensated by extending the remuneration period; exceptions include installed capacity below 100 kW before the end of the calendar year in which an intelligent metering system is installed, and below 2 kW until a BNetzA determination is made.
quantitative_metrics: 2025-02-25 effective date; 100 kW and 2 kW exception thresholds; regular remuneration period around 20 years
verbatim_customer_language: none
limitations: Legal rules are nuanced; check commissioning date, metering status, system size, and later BNetzA determinations.
bias_risks: Low.
confidence_rating: high
relevance_to_reonic: Critical for export-risk logic and smart-meter-aware messaging.
recommended_use_in_poc: Add "negative price exposure" rule gated by commissioning date, system size, iMSys status, and remuneration form.
transferability_to_germany: Germany-specific.
```

```yaml
source_id: S04-016
title: FAQ Solarspitzen-Gesetz
url_or_location: https://www.solarwirtschaft.de/unsere-themen/photovoltaik/standpunkte/faq-solarspitzengesetz/
source_type: industry association FAQ
publisher_or_origin: Bundesverband Solarwirtschaft (BSW-Solar)
author_or_owner: BSW-Solar
date_published_or_collected: 2025-era FAQ; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: Solarspitzengesetz, smart meters, 60% feed-in power limit
customer_segment: PV operators and installers
funnel_stage: quote review, battery/smart-control explanation
sample_size: includes cited HTW Berlin simulation but not fully visible in source lines
methodology: industry FAQ
data_type: rule explanation and industry interpretation
primary_claims: New systems under 100 kW without iMSys/control equipment face new rules; systems under 25 kW with feed-in remuneration or tenant-power supplement are limited to 60% feed-in power until iMSys plus control equipment and a successful remote-control test are in place; BSW cites HTW Berlin simulation that 60% feed-in power cap causes 1.1%-9.0% generation curtailment for full-feed-in no-battery systems depending on east-west vs south orientation.
quantitative_metrics: 60% feed-in power cap; <25 kW, 25-100 kW and <100 kW thresholds; 1.1%-9.0% cited curtailment range
verbatim_customer_language: none
limitations: Industry source; exact legal application and curtailment depend on system class, remuneration form, smart meter rollout, orientation, storage, and load.
bias_risks: Medium; solar industry association may emphasize manageable impacts.
confidence_rating: medium
relevance_to_reonic: Helps explain why battery/load control can mitigate grid export limits.
recommended_use_in_poc: Treat as guidance/hypothesis unless corroborated by exact legal text and a local simulation.
transferability_to_germany: Germany-specific.
```

```yaml
source_id: S04-017
title: Netzanschluss EE-Anlagen
url_or_location: https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/ErneuerbareEnergien/Netzanschluss/start.html
source_type: regulator network-connection FAQ
publisher_or_origin: Bundesnetzagentur
author_or_owner: Bundesnetzagentur
date_published_or_collected: FAQ updated 2026-06-19
date_accessed: 2026-06-20
geography: Germany
market_context: EE grid connection, digital connection requests
customer_segment: residential and small business PV operators
funnel_stage: quote follow-up, implementation scheduling, paperwork
sample_size: not applicable
methodology: regulator FAQ interpreting EEG grid-connection rules
data_type: procedural/legal guidance
primary_claims: Network operators must connect EE systems without culpable delay; for EE systems up to 30 kW on existing house connections, from 2025-01-01 network operators must provide web portals and standardized/digitalized connection request information; systems need required metering before feed-in is lawful.
quantitative_metrics: <=30 kW; 2025-01-01; one-month/eight-week response concepts in FAQ
verbatim_customer_language: none
limitations: Exact network operator workflow and technical requirements vary by site; FAQ is not project-specific legal advice.
bias_risks: Low.
confidence_rating: high
relevance_to_reonic: Supports installer-facing calendar tasks and "paperwork delay" risk.
recommended_use_in_poc: Add status fields for network request submitted, VNB response deadline, meter change, connection approval, and installer responsible party.
transferability_to_germany: Germany-specific.
```

```yaml
source_id: S04-018
title: Werbung per Telefon, Brief oder E-Mail
url_or_location: https://www.ihk.de/nordwestfalen/recht/rechtsthemen/wettbewerbsrecht/werbung-per-telefon-telefax-oder-e-mail-3614212
source_type: chamber of commerce legal guidance
publisher_or_origin: IHK Nord Westfalen
author_or_owner: IHK Nord Westfalen
date_published_or_collected: page accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: outreach law for phone, email, SMS, WhatsApp, direct messages, postal mail
customer_segment: homeowners/prospects and business contacts
funnel_stage: marketing sequence generation and compliance gating
sample_size: not applicable
methodology: legal guidance based on UWG and case law
data_type: compliance guidance
primary_claims: Consumer advertising calls require prior express consent; for such phone consent, documentation must be stored for five years from consent and five years after each use; "electronic post" is broad and includes email, SMS, Facebook, and WhatsApp messages; electronic advertising requires prior express consent unless all narrow existing-customer conditions in UWG section 7(3) are met; opt-out/widrawal must be easy and honored.
quantitative_metrics: five-year documentation/retention rule; possible fines up to EUR 300,000 for illegal phone advertising and up to EUR 50,000 for documentation breaches according to IHK summary
verbatim_customer_language: none
limitations: IHK guidance is a practical summary and disclaims completeness; get legal review before productizing rules.
bias_risks: Low to medium.
confidence_rating: high
relevance_to_reonic: Core compliance rule for multi-channel recommendations.
recommended_use_in_poc: Build channel eligibility gates for email/SMS/WhatsApp/calls; store consent source, timestamp, scope, channel, and opt-out.
transferability_to_germany: Germany-specific.
```

```yaml
source_id: S04-019
title: Unerlaubte Telefonwerbung and Bußgelder Unerlaubte Telefonwerbung
url_or_location: https://www.bundesnetzagentur.de/unerlaubteTelefonwerbung and https://www.bundesnetzagentur.de/DE/Vportal/TK/Aerger/Aktuelles/Ma%C3%9Fnahmen/artikel_UT.html
source_type: regulator consumer protection and enforcement page
publisher_or_origin: Bundesnetzagentur
author_or_owner: Bundesnetzagentur
date_published_or_collected: enforcement items through 2026-04-28 visible on page
date_accessed: 2026-06-20
geography: Germany
market_context: telemarketing consent and enforcement
customer_segment: consumers/homeowners
funnel_stage: call recommendation and compliance guardrails
sample_size: enforcement cases listed by regulator
methodology: regulator guidance and enforcement notices
data_type: compliance guidance and enforcement examples
primary_claims: Anyone calling consumers for advertising must have prior express consent, including companies with existing customer relationships; consent must be documented and presented to BNetzA on request; BNetzA issued 2025/2026 fines against energy and PV-sector telemarketing, including PV-sector cases on 2025-12-18 and 2026-01-12.
quantitative_metrics: examples include EUR 41,398.50 PV-sector documentation fine on 2026-01-12; EUR 70,000 and EUR 100,500 PV-sector/solar-product fines on 2025-12-18
verbatim_customer_language: none
limitations: Enforcement examples are not exhaustive; legal classification of a call can depend on purpose and consent wording.
bias_risks: Low.
confidence_rating: high
relevance_to_reonic: Demonstrates real enforcement risk in solar/energy outreach.
recommended_use_in_poc: Do not recommend outbound sales calls unless phone-marketing consent is present or user marks call as requested/service-only and legally reviewed.
transferability_to_germany: Germany-specific.
```

```yaml
source_id: S04-020
title: Newsletter-Bestellung auf Webseiten
url_or_location: https://www.bfdi.bund.de/DE/Fachthemen/Inhalte/Telemedien/Newsletter.html
source_type: federal data protection authority guidance
publisher_or_origin: BfDI
author_or_owner: Bundesbeauftragter fuer den Datenschutz und die Informationsfreiheit
date_published_or_collected: page accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany / EU GDPR and ePrivacy context
market_context: newsletter consent, double opt-in, email tracking pixels
customer_segment: email recipients/prospects
funnel_stage: email sequence generation and tracking analytics
sample_size: not applicable
methodology: data protection guidance
data_type: compliance guidance
primary_claims: Double opt-in is described as the legally safest way to prove newsletter consent; consent to receive a newsletter does not usually cover tracking pixels; email tracking pixels and similar technologies usually require separate consent under ePrivacy/TDDDG and GDPR consent standards.
quantitative_metrics: none
verbatim_customer_language: none
limitations: Guidance focuses on newsletter websites; transactional or one-to-one sales email contexts need legal review.
bias_risks: Low.
confidence_rating: high
relevance_to_reonic: Prevents unsafe default use of open tracking and supports separate analytics consent.
recommended_use_in_poc: Separate "can send email" from "can track opens/clicks"; use no-pixel fallback by default unless tracking consent exists.
transferability_to_germany: Germany-specific implementation of EU privacy law.
```

```yaml
source_id: S04-021
title: Orientierungshilfe der Aufsichtsbehoerden fuer Anbieter:innen von digitalen Diensten
url_or_location: https://www.datenschutzkonferenz-online.de/media/oh/OH_Digitale_Dienste.pdf
source_type: German data protection authorities guidance
publisher_or_origin: Datenschutzkonferenz (DSK)
author_or_owner: German federal/state supervisory authorities
date_published_or_collected: current PDF visible in search, accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: TDDDG section 25 consent for storing/accessing terminal equipment information
customer_segment: website/app/email users
funnel_stage: analytics/tracking consent design
sample_size: not applicable
methodology: supervisory-authority orientation guide
data_type: privacy compliance guidance
primary_claims: Section 25 TDDDG generally requires consent before storing information on, or accessing information from, users' terminal equipment; TDDDG applies specifically to terminal equipment access, while subsequent personal-data processing remains subject to GDPR.
quantitative_metrics: none
verbatim_customer_language: none
limitations: Orientation guide; implementation should be reviewed by counsel for specific tracking technologies.
bias_risks: Low.
confidence_rating: high
relevance_to_reonic: Applies to proposal tracking, email pixels, landing-page analytics, and cookie-like identifiers.
recommended_use_in_poc: Add a consent layer before behavioral tracking and record consent version/scope.
transferability_to_germany: Germany-specific supervisory interpretation of EU ePrivacy/GDPR.
```

```yaml
source_id: S04-022
title: Photovoltaik-Foerderung: Kredite und Zuschuesse im Ueberblick
url_or_location: https://www.co2online.de/modernisieren-und-bauen/photovoltaik/photovoltaik-foerderung/
source_type: nonprofit consumer/energy information
publisher_or_origin: co2online
author_or_owner: co2online
date_published_or_collected: 2026-03-12
date_accessed: 2026-06-20
geography: Germany with state/municipal examples
market_context: PV funding programs and regional incentives
customer_segment: homeowners
funnel_stage: incentive discovery and quote follow-up
sample_size: not applicable
methodology: editorial funding overview
data_type: funding overview
primary_claims: PV and battery support can come from federal KfW loans, state programs, and municipal programs; state/municipal programs are time-limited and can end early; examples listed include Baden-Wuerttemberg L-Bank financing and Berlin SolarPLUS battery and special-PV grants.
quantitative_metrics: Berlin examples up to EUR 15,000 for batteries in one-/two-family homes and EUR 30,000 in multi-family homes per co2online summary; local examples vary
verbatim_customer_language: none
limitations: Article contains at least one tax-rule statement that appears outdated for 2025+ multi-unit systems; all local program facts must be rechecked against official program pages before messaging.
bias_risks: Medium; editorial source, may lag program changes.
confidence_rating: medium
relevance_to_reonic: Useful for "check local subsidy" prompt, not for automatic grant claims.
recommended_use_in_poc: Use to trigger a locality-specific subsidy search/checklist; do not auto-state subsidy amounts without live official verification.
transferability_to_germany: Germany-specific.
```
