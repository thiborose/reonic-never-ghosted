# Sources: Agent 1

Status: completed initial Germany-first source pass.

Access date for all sources: 2026-06-20.

```yaml
source_id: S01
title: KfW-Energiewendebarometer 2025
url_or_location: https://www.kfw.de/PDF/Download-Center/Konzernthemen/Research/PDF-Dokumente-KfW-Energiewendebarometer/KfW-Energiewendebarometer-2025.pdf
source_type: Public annual household survey / market report
publisher_or_origin: KfW Research
author_or_owner: KfW Research
date_published_or_collected: 2025 edition; fieldwork 2024-12-11 to 2025-03-31
date_accessed: 2026-06-20
geography: Germany
market_context: Private household energy transition technologies including PV, batteries, heat pumps, EVs, green power tariffs
customer_segment: Private households; one adult household energy decision-maker per household
funnel_stage: Awareness, consideration, ownership; indirect quote-stage relevance
sample_size: 5,119 households in Germany
methodology: Household-representative random sample; annual since 2018; adult respondent responsible for household energy decisions
data_type: Survey and trend analysis
primary_claims:
  - 33% of German households use at least one listed energy-transition technology.
  - 16% use rooftop PV, 9% use an EV, 8% use a heat pump.
  - Among PV owners, 55% combine PV with a battery.
  - For prospective PV users, energy-supplier independence, cost reduction, and climate protection are the top three stated advantages.
  - PV and heat-pump non-adoption are led by affordability and profitability concerns.
  - EV use is associated with own home context and PV because home charging with self-generated power is attractive.
quantitative_metrics: 5,119 households; PV prospective motives: independence 59%, cost reduction 58%, climate protection 55%; PV barriers: cannot afford 36%, investment not worthwhile 36%; heat-pump barrier "investment not worthwhile" 42%; EV green-power charging motive 46%
verbatim_customer_language: Not applicable
limitations: Survey is not quote-stage CRM data; some data cover all private households rather than only owner-occupiers; stated intentions may not equal purchase behavior.
bias_risks: Self-report and social desirability; technology definitions changed in 2025 to capture balcony PV separately.
confidence_rating: high
relevance_to_reonic: Strong Germany baseline for persona motives, barriers, observable inputs, and guardrails.
recommended_use_in_poc: Core evidence for segmentation rules, objection risk, proof assets, and data fields.
transferability_to_germany: Germany-specific
```

```yaml
source_id: S02
title: Monitoring Energiewende im Eigenheim 2025
url_or_location: https://initiative-klimaneutral.de/mee/ and https://initiative-klimaneutral.de/mee/download-monitoring/
source_type: Public owner-occupier survey report
publisher_or_origin: Initiative Klimaneutrales Deutschland (IKND)
author_or_owner: Institut für Demoskopie Allensbach for IKND
date_published_or_collected: Fieldwork 2025-08-08 to 2025-08-26
date_accessed: 2026-06-20
geography: Germany
market_context: PV, heat pump, EV, battery, wallbox, HEMS in owner-occupied houses
customer_segment: Homeowners living in their own house, age 18+
funnel_stage: Planning, consideration, pre-quote, post-quote
sample_size: 2,159 interviews
methodology: Online interviews by Institut für Demoskopie Allensbach
data_type: Survey report
primary_claims:
  - PV is presented as a key entry technology that tends to precede battery, heat pump, EV, wallbox, and HEMS adoption.
  - Potential buyers are willing to invest own funds but many need subsidies or financing clarity.
  - Clear proof that PV pays financially is the strongest acceleration trigger for planned PV buyers.
  - For planned heat-pump buyers, a broken heating system is the strongest acceleration trigger.
quantitative_metrics: Planned buyer own-fund averages: PV about EUR 12,000, heat pump about EUR 16,000, EV about EUR 28,000; PV acceleration triggers include clear financial payoff and cheap loan at 35%; heat-pump acceleration triggers include broken heating, oil/gas price increase 38%, long-term cheap heat-pump electricity tariff 37%.
verbatim_customer_language: Not applicable
limitations: NGO-commissioned; charts are image-heavy, so some category percentages are not text-extractable; stated intentions may overstate action.
bias_risks: Sponsor framing favors energy-transition adoption; online survey excludes some offline populations.
confidence_rating: medium
relevance_to_reonic: Strong for post-quote "what would make them act now?" prompts and financing/proof needs.
recommended_use_in_poc: Core input for urgency triggers, financing states, and "proof needed" cards.
transferability_to_germany: Germany-specific
```

```yaml
source_id: S03
title: Zahlen, Technik, Kosten: Hausbesitzer entscheiden rational über Energiewende-Investitionen
url_or_location: https://group.vattenfall.com/de/newsroom/pressemitteilungen/2025/zahlen-technik-kosten-hausbesitzer-entscheiden-rational-uber-energiewende-investitionen
source_type: Vendor-commissioned representative survey press release
publisher_or_origin: Vattenfall
author_or_owner: Civey survey commissioned by Vattenfall
date_published_or_collected: Published 2025-10-09; survey September 2025
date_accessed: 2026-06-20
geography: Germany
market_context: Home energy investments: heat pumps, PV, batteries, wallboxes
customer_segment: Homeowners
funnel_stage: Consideration and planning; indirect quote-stage relevance
sample_size: 2,500 homeowners
methodology: Civey representative survey, per publisher statement
data_type: Survey press release
primary_claims:
  - Homeowners report cost, independence, and rational/technical discussion as leading motivations.
  - High upfront cost and bureaucracy are leading barriers.
  - Many households lack a clear internal initiator for home energy action.
quantitative_metrics: Motives: low long-term costs 51%, independence from energy market 45%, climate 26%, property value and subsidies 25% each. Barriers: high cost 76%, bureaucracy 50%, building hurdles 30%, tradesperson shortage 23%, technology doubts 19%, no perceived need 17%. Household discussion: rational 43%, cost-oriented 38%, technical 24%, emotional 8%, no discussion 17%. No named initiator 48%, man 30%, woman 12%, external expert 5%, children 3%.
verbatim_customer_language: Not applicable
limitations: Vendor-commissioned press release, not full method tables; broad home energy investments, not post-quote deals.
bias_risks: Vattenfall sells energy solutions; framing may emphasize rational buying and Vattenfall-relevant products.
confidence_rating: medium
relevance_to_reonic: Useful for non-stereotyped segmentation by stated motive and household decision state.
recommended_use_in_poc: Use for persona weighting, household stakeholder prompt, and obstacle chips.
transferability_to_germany: Germany-specific
```

```yaml
source_id: S04
title: Jede*r dritte Eigenheimbesitzer*in plant bis 2024 eine Solaranlage
url_or_location: https://www.solarwirtschaft.de/2021/12/02/jeder-dritte-eigenheimbesitzerin-plant-bis-2024-eine-solaranlage/
source_type: Industry association article reporting representative consumer survey
publisher_or_origin: Bundesverband Solarwirtschaft / Agentur für Erneuerbare Energien
author_or_owner: YouGov survey commissioned by Agentur für Erneuerbare Energien
date_published_or_collected: Published 2021-12-02
date_accessed: 2026-06-20
geography: Germany
market_context: Solar PV and solar thermal for homeowners
customer_segment: German population 16+; homeowner findings highlighted
funnel_stage: Planning and consideration
sample_size: 1,041 online respondents
methodology: Germany-wide population-representative YouGov online survey
data_type: Consumer survey via industry article
primary_claims:
  - Solar planning motives included self-producing and using electricity, rising electricity prices, and climate protection.
quantitative_metrics: PV motives among planners: produce/use own electricity 69%, rising electricity prices 62%, environment/climate protection 54%; solar thermal motives: rising oil/gas prices 59%, climate 55%, rising CO2 prices 40%.
verbatim_customer_language: Not applicable
limitations: 2021 energy-price and policy context is older; industry association framing.
bias_risks: Industry body publication; planning intent may not equal installation.
confidence_rating: medium
relevance_to_reonic: Supports durable PV motive triad: own-use, price risk, climate.
recommended_use_in_poc: Secondary evidence for PV self-consumption and price-risk messaging.
transferability_to_germany: Germany-specific, but older context
```

```yaml
source_id: S05
title: Beim Solaranlagen-Kauf spielt Klimaschutz eine immer geringere Rolle - Geld sparen als wichtigster Grund
url_or_location: https://zolar.de/presse/umfrage-gruende-fuer-solaranlagenkauf
source_type: Vendor-commissioned representative consumer survey press release
publisher_or_origin: Zolar
author_or_owner: Appinio survey commissioned by Zolar
date_published_or_collected: Published 2024-08-08
date_accessed: 2026-06-20
geography: Germany
market_context: Residential solar buying motives
customer_segment: 1,000 people in Germany
funnel_stage: Consideration and purchase motivation; indirect quote-stage relevance
sample_size: 1,000 respondents
methodology: Representative Appinio survey, per publisher statement
data_type: Survey press release
primary_claims:
  - Money saving was the most cited 2024 PV purchase reason.
  - Climate protection remained relevant but declined as a stated reason from 2021 to 2024.
quantitative_metrics: 2024 PV purchase reasons: save money 62%, become independent from energy suppliers 47%, climate protection 43%; climate was 57% in 2021; independence was 66% in 2022.
verbatim_customer_language: Not applicable
limitations: Vendor-commissioned; full questionnaire unavailable; sample is broad people in Germany, not only quoted homeowners.
bias_risks: Zolar sells solar and launched an ROI configurator alongside the release.
confidence_rating: medium
relevance_to_reonic: Helps reject a climate-only persona model and prioritize ROI clarity.
recommended_use_in_poc: Use as supporting evidence for ROI-first and mixed-motive segmentation.
transferability_to_germany: Germany-specific
```

```yaml
source_id: S06
title: Wärmepumpe ist erste Wahl - Mehrheit der Deutschen will erneuerbar heizen
url_or_location: https://www.co2online.de/presse/waermepumpe-ist-erste-wahl/
source_type: Nonprofit press release reporting representative survey
publisher_or_origin: co2online
author_or_owner: co2online
date_published_or_collected: Published 2025-12-11
date_accessed: 2026-06-20
geography: Germany
market_context: Heating replacement and heat pumps
customer_segment: People in Germany; homeowners discussed
funnel_stage: Consideration and policy uncertainty
sample_size: Not stated in fetched page
methodology: Representative survey, per publisher statement
data_type: Survey press release
primary_claims:
  - One third of Germans would choose a heat pump if installing a new heating system.
  - Renewable heating systems have majority preference.
  - Many people hesitate because they do not know what they can rely on.
quantitative_metrics: Heat pump first choice 33%; renewable heating systems 58%; heat-pump approval up 14 percentage points since 2023; two thirds agree gas/oil heating becomes a long-term cost trap.
verbatim_customer_language: Not applicable
limitations: Full questionnaire and sample size not available in fetched page; press release is policy-framed.
bias_risks: co2online advocates energy efficiency and climate protection.
confidence_rating: medium
relevance_to_reonic: Useful for heat-pump uncertainty and policy-clarity objections.
recommended_use_in_poc: Use for heat-pump hesitation and "clarify reliable facts" next actions.
transferability_to_germany: Germany-specific
```

```yaml
source_id: S07
title: Ariadne Wärme- und Wohnen-Panel 2024 press summary and PIK report metadata
url_or_location: https://ariadneprojekt.de/pressemitteilung/ariadne-waerme-und-wohnen-panel-waermepumpen-bei-austausch-von-heizungen-immer-noch-knapp-hinter-fossilen-technologien/ and https://publications.pik-potsdam.de/pubman/faces/ViewItemOverviewPage.jsp?itemId=item_32355
source_type: Public research project panel survey and report
publisher_or_origin: Kopernikus-Projekt Ariadne / PIK / RWI / IW
author_or_owner: Kaestner et al.
date_published_or_collected: Report 2025; survey autumn 2024
date_accessed: 2026-06-20
geography: Germany
market_context: Heating modernization, heat pumps, building shell renovation
customer_segment: German households; self-used residential property analyzed
funnel_stage: Consideration, modernization, policy context
sample_size: About 15,000 representative households
methodology: Repeated representative household panel
data_type: Research report and press release
primary_claims:
  - Heat-pump modernization caught up with fossil heating installations in self-used homes but overall modernization slowed.
  - Missing information on funding and political uncertainty slow heat transition.
  - Heat-pump heating costs are lower on average, but partly because heat pumps are used in more efficient buildings.
quantitative_metrics: Heating modernization rate fell from 4.6% in 2022 to 1.3% in 2024; heat-pump installation rate 0.5% vs fossil technologies 0.7% in self-used property; annual heating costs EUR 13.80/m2 heat pump, EUR 16.90/m2 gas, EUR 20.60/m2 district heating.
verbatim_customer_language: Not applicable
limitations: Not a sales-funnel study; cost comparisons are confounded by building efficiency.
bias_risks: Climate-policy research framing; panel attrition risk not evaluated here.
confidence_rating: high
relevance_to_reonic: Strong for heat-pump objections, funding uncertainty, building suitability, and cost-proof caveats.
recommended_use_in_poc: Use for heat-pump strategy guardrails and "building suitability" proof cards.
transferability_to_germany: Germany-specific
```

```yaml
source_id: S08
title: Luft-Wasser-Wärmepumpen: Eine Auswertung von 160 Angeboten aus Rheinland-Pfalz
url_or_location: https://www.verbraucherzentrale-rlp.de/sites/default/files/2025-06/250605_vz-rlp_auswertung_wp_angebote.pdf
source_type: Consumer protection analysis of real offers
publisher_or_origin: Verbraucherzentrale Rheinland-Pfalz
author_or_owner: Verbraucherzentrale Rheinland-Pfalz
date_published_or_collected: Offers collected 2024-10-01 to 2025-05-09; PDF 2025-06
date_accessed: 2026-06-20
geography: Rheinland-Pfalz, Germany
market_context: Air-water heat pump offers for one- and two-family houses
customer_segment: Owners of one- and two-family houses, mainly switching from gas or oil
funnel_stage: Post-quote comparison and decision
sample_size: 160 heat-pump offers
methodology: Categorized offer analysis with quality filter for cost-relevant positions
data_type: Real quote/offer analysis
primary_claims:
  - Offers are often hard for consumers to understand and compare.
  - Only a minority of offers include key cost-relevant categories.
  - Total costs vary widely, creating trust and decision friction.
quantitative_metrics: Unfiltered average total cost EUR 36,279; median about EUR 35,000; 61% between EUR 30,000 and EUR 40,000 excluding radiator replacement; only 26% included warm water, hydraulic balancing, foundation, and electrical installation; quality-filtered average EUR 37,564, median EUR 36,011, range EUR 26,298 to EUR 52,032; additional "bauseits" cost risk EUR 726 to EUR 10,432.
verbatim_customer_language: Not applicable
limitations: Regional sample; consumers submitted offers to a checking service, so selection may skew toward confusing or expensive offers.
bias_risks: Consumer-protection framing highlights problems.
confidence_rating: high
relevance_to_reonic: Very strong for post-quote objection handling and proposal-comparison UX.
recommended_use_in_poc: Use for heat-pump offer checklist, risk flags, and "explain missing line items" asset.
transferability_to_germany: Directly Germany-specific; strongest for Rheinland-Pfalz and similar one/two-family-house retrofits
```

```yaml
source_id: S09
title: Photovoltaik 2026: Wann sich eine PV-Anlage für Dich lohnt
url_or_location: https://www.finanztip.de/photovoltaik/
source_type: Independent consumer advice guide
publisher_or_origin: Finanztip
author_or_owner: Finanztip energy editorial team
date_published_or_collected: Updated 2026, accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: Residential PV economics, batteries, feed-in, offer comparison
customer_segment: Households considering PV
funnel_stage: Consideration, offer comparison, post-quote
sample_size: Not applicable
methodology: Consumer advice using expert calculations and market assumptions
data_type: Advice guide / market economics
primary_claims:
  - PV self-consumption tends to need enough annual consumption and reasonable offer prices.
  - Offer comparison and regional subsidy checks matter.
quantitative_metrics: Recommends PV self-consumption more likely worthwhile above 3,000 kWh annual household demand; price rule-of-thumb max EUR 1,600/kWp for PV and EUR 600/kWh for battery; compare at least three to five firms.
verbatim_customer_language: Not applicable
limitations: Advice assumptions can change with tariffs, prices, regulation, and household load; not persona research.
bias_risks: Advice guide may simplify edge cases.
confidence_rating: medium
relevance_to_reonic: Useful for ROI proof thresholds and competitor/offer comparison prompts.
recommended_use_in_poc: Use as secondary guardrail for ROI-check requests, not as the only calculator.
transferability_to_germany: Germany-specific
```

```yaml
source_id: S10
title: Aktuelle Fakten zur Photovoltaik in Deutschland
url_or_location: https://www.ise.fraunhofer.de/content/dam/ise/de/documents/publications/studies/aktuelle-fakten-zur-photovoltaik-in-deutschland.pdf
source_type: Public technical and market facts report
publisher_or_origin: Fraunhofer ISE
author_or_owner: Fraunhofer ISE
date_published_or_collected: 2026-05-05 version observed in PDF text
date_accessed: 2026-06-20
geography: Germany
market_context: PV market, tariffs, generation, prices, grid context
customer_segment: General PV stakeholders; indirect homeowner relevance
funnel_stage: Market context and claim verification
sample_size: Not applicable
methodology: Technical and market compilation from public datasets
data_type: Technical report
primary_claims:
  - Feed-in remuneration has fallen strongly since 2000.
  - PV market-value and electricity-market context affect self-consumption economics.
quantitative_metrics: New PV feed-in remuneration down about 80-90% nominal since EEG introduction, per report.
verbatim_customer_language: Not applicable
limitations: Not a consumer-motivation source; must be paired with customer evidence.
bias_risks: Technical report, low direct bias for persona work.
confidence_rating: high
relevance_to_reonic: Market context guardrail for ROI and feed-in claims.
recommended_use_in_poc: Use only for factual explainers, not segmentation.
transferability_to_germany: Germany-specific
```

```yaml
source_id: S11
title: Residential Battery Storage - Reshaping the Way We Do Electricity
url_or_location: https://pubsonline.informs.org/doi/10.1287/opre.2024.1104
source_type: Peer-reviewed academic article
publisher_or_origin: Operations Research / INFORMS
author_or_owner: Christian Kaps and Serguei Netessine
date_published_or_collected: Published online 2025-10-09; volume 2026
date_accessed: 2026-06-20
geography: Germany household dataset
market_context: Residential solar-plus-battery adoption
customer_segment: German households with residential electricity usage, solar, and storage decisions
funnel_stage: Adoption behavior; indirect quote-stage relevance
sample_size: Novel household dataset; exact count not captured in fetched abstract text
methodology: Structural estimation model separating observed demand and nonfinancial utility
data_type: Academic model with empirical and survey data
primary_claims:
  - Some German households value self-generated solar consumption beyond direct financial savings.
  - Sustainability and autarky desires drive nonmarket valuation and early storage adoption.
quantitative_metrics: Median nonmarket valuation EUR 0.29/kWh; mean EUR 0.53/kWh; owning storage increases annual emissions marginally by 57 kg CO2/year/kWh of battery capacity in model.
verbatim_customer_language: Not applicable
limitations: Academic model, not quote-stage messaging; 2020 data and early adopter context may differ from 2026 battery prices.
bias_risks: Model assumptions; adoption data may not represent all households.
confidence_rating: medium
relevance_to_reonic: Helps distinguish "strict ROI" battery buyers from autarky/self-consumption buyers.
recommended_use_in_poc: Use for battery persona segmentation and to avoid declaring all storage interest irrational.
transferability_to_germany: Germany-specific; comparable best to storage-like technologies and Germany-like markets
```

```yaml
source_id: S12
title: Grundsatzfrage Speicher ja oder nein
url_or_location: https://www.photovoltaikforum.com/thread/237655-grundsatzfrage-speicher-ja-oder-nein/
source_type: Public homeowner discussion forum
publisher_or_origin: Photovoltaikforum
author_or_owner: Public forum participants
date_published_or_collected: Thread opened 2024-10-31
date_accessed: 2026-06-20
geography: Germany; specific poster says Bottrop
market_context: PV offer with and without battery, mixed home/business load profile
customer_segment: Public forum user evaluating a PV quote
funnel_stage: Post-quote comparison and hesitation
sample_size: One thread; 7 answers in schema metadata
methodology: Anecdotal public discussion
data_type: Voice-of-customer / public forum
primary_claims:
  - A quoted homeowner asked whether battery amortization in an offer was "schön gerechnet" and whether to install battery now or later.
  - Forum responses focused on self-calculation, load profile, battery economics, and independent calculators.
quantitative_metrics: Quoted offer in thread: 12 kWp PV, EUR 16,000 without battery, EUR 22,000 with battery.
verbatim_customer_language: "schön gerechnet"; "Wahrheitssuche"; "Akku später"
limitations: Single public anecdote; not representative; includes a mixed commercial/residential building.
bias_risks: Forum participants may be more technical and skeptical than average homeowners.
confidence_rating: low
relevance_to_reonic: Useful wording for ROI-skeptic and technical-control personas.
recommended_use_in_poc: Use as low-confidence language texture and proof-asset inspiration only.
transferability_to_germany: Germany-specific anecdote
```

```yaml
source_id: S13
title: Angebot Wärmepumpe - Sind das normale Preise?
url_or_location: https://www.haustechnikdialog.de/Forum/t/293043/Angebot-Waermepumpe-Sind-das-normale-Preise-
source_type: Public homeowner and installer-adjacent discussion forum
publisher_or_origin: HaustechnikDialog
author_or_owner: Public forum participants
date_published_or_collected: Thread opened 2026-05-16
date_accessed: 2026-06-20
geography: Germany
market_context: Heat-pump replacement offer for gas-heated house
customer_segment: Public forum user evaluating a relative's heat-pump offer
funnel_stage: Post-quote hesitation and price validation
sample_size: One thread; multiple replies
methodology: Anecdotal public discussion
data_type: Voice-of-customer / public forum
primary_claims:
  - A heat-pump offer over EUR 42,000 caused the buyer to postpone the project and seek external validation.
  - Replies recommend multiple offers and scrutinizing included/excluded line items.
quantitative_metrics: Thread offer: over EUR 42,000; commenters report comparable ranges from about EUR 25,000 to EUR 45,000.
verbatim_customer_language: "geschockt"; "Vorhaben zurückgestellt"; "mindestens 5 oder 6 Angebote"
limitations: Anecdotal and self-selected; comments are not verified; may overrepresent dissatisfied or technical users.
bias_risks: Forum culture can be price-skeptical and technically opinionated.
confidence_rating: low
relevance_to_reonic: Useful for price-shock and trust-repair journey after heat-pump quotes.
recommended_use_in_poc: Use as low-confidence language texture; validate with installer CRM before product rules.
transferability_to_germany: Germany-specific anecdote
```

```yaml
source_id: S14
title: E.ON Umfrage: Dreiviertel der Hauseigentümer setzen auf Solaranlagen, auch E-Autos und Wärmepumpen legen weiter zu
url_or_location: https://www.pv-magazine.de/unternehmensmeldungen/e-on-umfrage-dreiviertel-der-hauseigentuemer-setzen-auf-solaranlagen-auch-e%E2%80%91autos-und-waermepumpen-legen-weiter-zu/
source_type: Trade-media republication of vendor survey
publisher_or_origin: pv magazine Deutschland, based on E.ON / Statista survey
author_or_owner: E.ON Energie Deutschland / Statista; republished by pv magazine
date_published_or_collected: Published 2026-05-26
date_accessed: 2026-06-20
geography: Germany
market_context: PV, EV, heat pump, storage among homeowners
customer_segment: Homeowners in Germany
funnel_stage: Planning and adoption
sample_size: Not stated in fetched page
methodology: Representative Statista survey, per article; direct E.ON page blocked by Cloudflare during fetch
data_type: Vendor survey via trade media
primary_claims:
  - PV ownership and planned purchases are common among surveyed homeowners.
  - PV owners often combine or plan to combine PV with battery, heat pump, and EV.
  - Feed-in tariff removal is reported as a relatively minor issue for many PV planners.
quantitative_metrics: 40% plan first PV investment; 37% already have PV; 20% plan EV, 15% plan heat pump; among PV owners, 63% have battery and 28% plan retrofit, 42% have heat pump, about one third have EV; 74% of PV planners can imagine buying without fixed feed-in remuneration, per related PHOTON article.
verbatim_customer_language: Not applicable
limitations: Vendor survey; direct primary page inaccessible to automated fetch; sample size not captured; trade-media publication may omit methodology details.
bias_risks: E.ON sells home energy solutions.
confidence_rating: medium
relevance_to_reonic: Useful support for multi-technology package persona and feed-in-remuneration objection handling.
recommended_use_in_poc: Supporting evidence only; verify current regulations before any homeowner-facing claim.
transferability_to_germany: Germany-specific
```

```yaml
source_id: S15
title: Public installer review snippets for Enpal, 1KOMMA5, Zolar, Otovo on Trustpilot
url_or_location: https://www.trustpilot.com/review/enpal.de ; https://www.trustpilot.com/review/1komma5.com ; https://www.trustpilot.com/review/zolar.de ; https://www.trustpilot.com/review/otovo.de
source_type: Public installer review aggregator snippets
publisher_or_origin: Trustpilot
author_or_owner: Public reviewers; snippets returned by web search
date_published_or_collected: Reviews shown in search snippets from 2022 to 2026; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany and mixed international for 1KOMMA5; only Germany snippets used where identifiable
market_context: Solar, battery, heat pump, EV charger installer experience
customer_segment: Public reviewers of installers
funnel_stage: Sales, installation, post-sale support
sample_size: Review counts in snippets: Enpal about 28k, 1KOMMA5 about 3.6k, Zolar about 2.7 TrustScore, Otovo Germany 326; not analyzed systematically
methodology: Unstructured public reviews; direct page fetch blocked by Trustpilot bot protection, so only search-result snippets were inspected
data_type: Low-confidence voice-of-customer snippets
primary_claims:
  - Review snippets surface communication, scheduling, paperwork, sales transparency, and installation follow-through as trust factors.
quantitative_metrics: Not used for quantitative claims because snippet sampling is uncontrolled.
verbatim_customer_language: "Clear and honest suggestions"; "nobody arrived"; "No communication"; "cancel everything without explanation"
limitations: Search snippets only; not representative; mixed languages and markets; reviews may be prompted or unprompted depending on company.
bias_risks: Review-site selection bias, extreme-experience bias, company reply and invitation practices.
confidence_rating: low
relevance_to_reonic: Useful only as weak support for trust and follow-through UX states.
recommended_use_in_poc: Do not use for persona rules; use as reminder to capture communication reliability and next-commitment debrief fields.
transferability_to_germany: Germany-specific only where review page or reviewer country indicates Germany; otherwise unvalidated
```
