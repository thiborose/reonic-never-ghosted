# Sources: Agent 2

Status: completed initial voice-of-customer pass on 2026-06-20.

Scope note: Sources below are public, customer-facing data. Most are review portals or public forums, so they are useful for language, objections, and trust signals, but not representative frequency estimates. Germany is the primary geography unless otherwise noted.

## VOC-S01

```yaml
source_id: VOC-S01
title: Enpal Trustpilot reviews
url_or_location: https://de.trustpilot.com/review/enpal.de
source_type: public customer reviews
publisher_or_origin: Trustpilot
author_or_owner: Enpal reviewers / Trustpilot
date_published_or_collected: reviews visible through 2026-06-19; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany, with some reviewer accounts outside Germany
market_context: residential PV, storage, energy services
customer_segment: homeowners / prospective PV buyers
funnel_stage: consultation, quote, installation, post-install support
sample_size: 27,710 Trustpilot reviews visible; 6,165 in prior 12 months; page showed 63% 5-star and 16% 1-star
methodology: open review platform; company invites reviews
data_type: review text, star distribution, company-response metadata
primary_claims: Reviews show both strong trust signals around reliability and communication and trust breaks around pressure, tone, and consultation quality.
quantitative_metrics: TrustScore 4.2/5; 27,710 reviews; 63% 5-star, 16% 1-star; Trustpilot indicates company asks customers for reviews.
verbatim_customer_language: short excerpts captured in evidence only
limitations: review sample is self-selected and review-invite biased; reviewer facts are not independently verified; visible page is not a full corpus.
bias_risks: extreme positive/negative reviews overrepresented; invited-review effects; Trustpilot moderation.
confidence_rating: medium
relevance_to_reonic: high for sales-tone, consultation trust, and post-quote objection language.
recommended_use_in_poc: train assistant to detect pressure/tone risk and recommend transparent, respectful follow-up.
transferability_to_germany: direct Germany relevance, but company-specific.
```

## VOC-S02

```yaml
source_id: VOC-S02
title: Otovo Deutschland Trustpilot reviews
url_or_location: https://de.trustpilot.com/review/otovo.de and https://de.trustpilot.com/review/otovo.de?page=5
source_type: public customer reviews
publisher_or_origin: Trustpilot
author_or_owner: Otovo Deutschland reviewers / Trustpilot
date_published_or_collected: reviews visible through 2026-01 and 2025-06; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: residential PV installer marketplace / solar provider
customer_segment: homeowners / PV prospects and customers
funnel_stage: consultation, quote comparison, installation, support
sample_size: 326 Trustpilot reviews visible
methodology: open review platform; Trustpilot says no review invitation records for this company
data_type: review text, star distribution, company-response metadata
primary_claims: Good consultation can still lose to cheaper competitors or personal recommendations; fast, knowledgeable answers build trust.
quantitative_metrics: TrustScore 4.1/5; 326 reviews; negative review response rate shown as 47%.
verbatim_customer_language: short excerpts captured in evidence only
limitations: self-selected reviews; not all review text is visible without expanding; no outcome validation beyond reviewer statements.
bias_risks: review survivorship, platform moderation, customer emotion at review time.
confidence_rating: medium
relevance_to_reonic: high for quote-stage competitor and referral risk.
recommended_use_in_poc: add competitor-price/referral risk state and follow-up that asks what comparison dimension matters.
transferability_to_germany: direct Germany relevance, company-specific.
```

## VOC-S03

```yaml
source_id: VOC-S03
title: 1KOMMA5 Trustpilot reviews
url_or_location: https://de.trustpilot.com/review/1komma5.com
source_type: public customer reviews
publisher_or_origin: Trustpilot
author_or_owner: 1KOMMA5 reviewers / Trustpilot
date_published_or_collected: reviews visible through 2026-06-19; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: residential PV, battery, dynamic energy products
customer_segment: homeowners / PV buyers
funnel_stage: consultation, quote, installation, post-install follow-up
sample_size: 3,663 Trustpilot reviews visible
methodology: open review platform; some reviews marked invited
data_type: review text, star distribution, response metadata
primary_claims: Customers value concrete explanations, same contact person, professional but non-pushy follow-up, and transparent economics.
quantitative_metrics: Trustpilot page says company answered 90% of negative reviews, usually within 48 hours.
verbatim_customer_language: short excerpts captured in evidence only
limitations: invited reviews and high-response company behavior may skew visible sentiment; not representative of all buyers.
bias_risks: platform and invitation bias; high satisfaction reviews may be solicited after milestones.
confidence_rating: medium
relevance_to_reonic: high for trust-building signals in follow-up strategy.
recommended_use_in_poc: recommend same-owner handoff, concise economics, and low-pressure cadence.
transferability_to_germany: direct Germany relevance, company-specific.
```

## VOC-S04

```yaml
source_id: VOC-S04
title: ZOLAR GmbH Trustpilot reviews
url_or_location: https://de.trustpilot.com/review/zolar.de and https://de.trustpilot.com/review/zolar.de?page=5
source_type: public customer reviews
publisher_or_origin: Trustpilot
author_or_owner: zolar reviewers / Trustpilot
date_published_or_collected: reviews visible through 2026; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: residential PV and battery
customer_segment: homeowners / PV buyers
funnel_stage: installation and post-install issue resolution
sample_size: 533 Trustpilot reviews visible
methodology: open review platform; claimed company profile
data_type: review text, company response, star distribution
primary_claims: Installation delays and entitlement/compensation discussions appear as post-contract trust issues.
quantitative_metrics: TrustScore 2.7/5; 533 reviews visible.
verbatim_customer_language: company response mentions installation-process problems and delays; short excerpt in evidence.
limitations: visible page captures one slice of reviews; customer claim details not fully visible in fetched page.
bias_risks: dissatisfied customers may be overrepresented; company response frames issue.
confidence_rating: low
relevance_to_reonic: medium for separating installation-quality risk from quote-stage persuasion.
recommended_use_in_poc: flag fulfillment concerns as human-service follow-up, not sales copy.
transferability_to_germany: direct Germany relevance, company-specific.
```

## VOC-S05

```yaml
source_id: VOC-S05
title: enerix Trustpilot reviews, page 4
url_or_location: https://de.trustpilot.com/review/enerix.de?page=4
source_type: public customer reviews
publisher_or_origin: Trustpilot
author_or_owner: enerix reviewers / Trustpilot
date_published_or_collected: reviews visible from 2025-05 to 2026-05; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: regional PV and storage installers
customer_segment: homeowners / PV buyers
funnel_stage: planning, installation, operations support
sample_size: 313 Trustpilot reviews visible in search result; page fetch covers visible page slice
methodology: open review platform
data_type: review text, company responses
primary_claims: Positive review language emphasizes honest/fair advice, clean work, fast answers, and promises kept.
quantitative_metrics: TrustScore shown as 5 stars in search result; page-level review count 313.
verbatim_customer_language: short excerpts captured in evidence only
limitations: mainly positive page slice; not representative.
bias_risks: positive selection and review platform effects.
confidence_rating: medium
relevance_to_reonic: high for positive trust-signal vocabulary.
recommended_use_in_poc: use as language corpus for trust-building explanation and proof assets.
transferability_to_germany: direct Germany relevance, franchise/network-specific.
```

## VOC-S06

```yaml
source_id: VOC-S06
title: Photovoltaikforum thread - PV Risiko undichtes Dach?
url_or_location: https://www.photovoltaikforum.com/thread/117157-pv-risiko-undichtes-dach/
source_type: public homeowner forum discussion
publisher_or_origin: Photovoltaikforum
author_or_owner: forum users
date_published_or_collected: 2017-03-19 onward; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany / DACH forum context
market_context: residential PV installation
customer_segment: homeowner considering PV offers
funnel_stage: offer evaluation before contract
sample_size: one thread; multiple forum participants
methodology: public peer discussion
data_type: homeowner question and peer replies
primary_claims: Roof damage and water ingress can be a pre-contract concern after receiving installer offers.
quantitative_metrics: no representative metrics
verbatim_customer_language: short excerpt in evidence
limitations: older thread; forum participants are technically engaged and not representative.
bias_risks: forum expertise bias; risk perception may be amplified by technical discussion.
confidence_rating: low
relevance_to_reonic: high for detecting roof-risk objection language.
recommended_use_in_poc: when roof-risk terms appear, recommend proof assets about mounting method, insurance, roof inspection, and warranty responsibility.
transferability_to_germany: likely Germany-relevant but validate with current installer practices.
```

## VOC-S07

```yaml
source_id: VOC-S07
title: Photovoltaikforum thread - Photovoltaikneuling, Angebot annehmen oder weiter schauen?
url_or_location: https://www.photovoltaikforum.com/thread/212872-photovoltaikneuling-angebot-annehmen-oder-weiter-schauen/
source_type: public homeowner forum discussion
publisher_or_origin: Photovoltaikforum
author_or_owner: forum users
date_published_or_collected: 2023; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany / DACH forum context
market_context: residential PV quote evaluation
customer_segment: homeowner with PV offer
funnel_stage: post-quote evaluation
sample_size: one thread; multiple forum participants
methodology: public peer advice
data_type: quote critique and advice
primary_claims: Buyers and peer advisors distrust bundled offers when PV, storage, wallbox, and car items are not separated.
quantitative_metrics: no representative metrics
verbatim_customer_language: short excerpt in evidence
limitations: technically engaged forum; peer advice may be opinionated.
bias_risks: forum norms often favor detailed itemization and anti-bundling views.
confidence_rating: medium
relevance_to_reonic: high for proposal clarity and quote-revision recommendations.
recommended_use_in_poc: recommend itemized proposal follow-up when customer asks if offer is fair.
transferability_to_germany: likely strong for Germany quote-stage UX, but validate with installer CRM data.
```

## VOC-S08

```yaml
source_id: VOC-S08
title: Photovoltaikforum thread - Neuling, total verschiedene Angebote, lohnt es sich?
url_or_location: https://www.photovoltaikforum.com/thread/160116-neuling-total-verschiedene-angebote-lohnt-es-sich/
source_type: public homeowner forum discussion
publisher_or_origin: Photovoltaikforum
author_or_owner: forum users
date_published_or_collected: 2021-10; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany / DACH forum context
market_context: residential PV, storage, wallbox quotes
customer_segment: homeowner comparing PV offers
funnel_stage: post-quote evaluation
sample_size: one thread
methodology: public peer advice
data_type: homeowner language and quote comparison
primary_claims: Big price differences and conflicting payback claims create shock and uncertainty.
quantitative_metrics: user reported two offers, one over EUR 30,000 and one over EUR 17,000.
verbatim_customer_language: short excerpts in evidence
limitations: one anecdotal thread; older price context.
bias_risks: forum users may over-index on low-cost benchmarks.
confidence_rating: medium
relevance_to_reonic: high for price-shock and ROI-explanation messaging.
recommended_use_in_poc: show transparent assumptions and offer comparison framing rather than generic savings claims.
transferability_to_germany: Germany-relevant language, but price levels should be refreshed by market agent.
```

## VOC-S09

```yaml
source_id: VOC-S09
title: Photovoltaikforum thread - Enpal offer at EUR 173/month
url_or_location: https://www.photovoltaikforum.com/thread/230454-enpal-angebot-f%C3%BCr-173-im-monat-lohnt-sich-pv-anlage-mit-speicher-wallbox-und-kau/
source_type: public homeowner forum discussion
publisher_or_origin: Photovoltaikforum
author_or_owner: forum users
date_published_or_collected: 2024-06-19; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany / DACH forum context
market_context: residential PV lease/financing, storage, wallbox
customer_segment: homeowner considering rental/financed PV package
funnel_stage: post-quote evaluation
sample_size: one thread
methodology: public peer advice
data_type: homeowner question
primary_claims: Leasing/financing can remain attractive despite higher total cost when upfront purchase feels financially hard.
quantitative_metrics: quoted monthly payment EUR 173/month in thread title.
verbatim_customer_language: short excerpt in evidence
limitations: one anecdote; specific provider/package.
bias_risks: forum discussion may lean against rental models.
confidence_rating: medium
relevance_to_reonic: high for financing-objection segmentation.
recommended_use_in_poc: ask whether barrier is total value, liquidity/monthly payment, or risk transfer before recommending a finance explainer.
transferability_to_germany: direct Germany relevance, provider-specific.
```

## VOC-S10

```yaml
source_id: VOC-S10
title: Verbraucherzentrale Baden-Wuerttemberg - Aktuelle Probleme in der Photovoltaik
url_or_location: https://www.verbraucherzentrale-bawue.de/wissen/energie/erneuerbare-energien/aktuelle-probleme-in-der-photovoltaik-94813
source_type: consumer-advice / complaint synthesis
publisher_or_origin: Verbraucherzentrale Baden-Wuerttemberg
author_or_owner: Verbraucherzentrale Baden-Wuerttemberg
date_published_or_collected: article visible as 2.2 years old in search result; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Baden-Wuerttemberg / Germany
market_context: residential PV boom and consumer complaints
customer_segment: consumers with PV contracts
funnel_stage: post-contract, installation, grid connection
sample_size: unspecified consumer complaints
methodology: consumer center complaint observations
data_type: complaint summary and consumer advice
primary_claims: Common complaints include material delivered but no roof/electrical work or delayed network connection; broad "Rundum-sorglos" promises are flagged as risky.
quantitative_metrics: no count on fetched page
verbatim_customer_language: none; summary source
limitations: complaint sample is not representative; article focuses on problems.
bias_risks: complaint intake overrepresents bad outcomes.
confidence_rating: medium
relevance_to_reonic: high for installation-risk separation and "do not overpromise" guardrail.
recommended_use_in_poc: avoid unsupported all-in carefree claims; recommend specific process proof instead.
transferability_to_germany: direct Germany relevance.
```

## VOC-S11

```yaml
source_id: VOC-S11
title: Verbraucherzentrale.de - Photovoltaik: Was bei der Planung einer Solaranlage wichtig ist
url_or_location: https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/photovoltaik-was-bei-der-planung-einer-solaranlage-wichtig-ist-5574
source_type: consumer-advice
publisher_or_origin: Verbraucherzentrale.de
author_or_owner: Verbraucherzentrale
date_published_or_collected: stand 2026-02-02; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: residential PV planning
customer_segment: homeowners / consumers considering PV
funnel_stage: planning and pre-quote
sample_size: not applicable
methodology: consumer guidance
data_type: educational guidance
primary_claims: Consumers are advised to check roof suitability, legal constraints, and project requirements before investing.
quantitative_metrics: no VOC count
verbatim_customer_language: none
limitations: not direct customer language; authoritative context only.
bias_risks: consumer-protection framing.
confidence_rating: high for guidance, low for VOC frequency.
relevance_to_reonic: medium; supports missing-data prompts before claim generation.
recommended_use_in_poc: ask for roof, shading, permits, and consumption facts before personalized claims.
transferability_to_germany: direct Germany relevance.
```

## VOC-S12

```yaml
source_id: VOC-S12
title: Verbraucherzentrale.de - Photovoltaik: Solaranlage mieten, eine Alternative zum Kauf?
url_or_location: https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/photovoltaik-solaranlage-mieten-eine-alternative-zum-kauf-71086
source_type: consumer-advice
publisher_or_origin: Verbraucherzentrale.de
author_or_owner: Verbraucherzentrale
date_published_or_collected: article visible as 1 year old in search result; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: residential PV purchase vs rental
customer_segment: homeowners considering PV rental
funnel_stage: quote evaluation, financing decision
sample_size: not applicable
methodology: consumer guidance
data_type: educational guidance
primary_claims: Rental appeals through risk and effort reduction, but consumers must check included services, obligations, extra costs, and long contract terms.
quantitative_metrics: no VOC count
verbatim_customer_language: none
limitations: not direct VOC; used to interpret financing/rental concerns.
bias_risks: consumer-protection emphasis.
confidence_rating: high for guidance, low for frequency.
relevance_to_reonic: high for financing/rental explainer guardrails.
recommended_use_in_poc: generate side-by-side buy/rent obligation checklist instead of only monthly-payment copy.
transferability_to_germany: direct Germany relevance.
```

## VOC-S13

```yaml
source_id: VOC-S13
title: HaustechnikDialog thread - Erfahrungen mit Thermondo und LG-Waermepumpen
url_or_location: https://www.haustechnikdialog.de/Forum/t/253574/Erfahrungen-mit-Thermondo-und-LG-Waermepumpen
source_type: public homeowner / technical forum discussion
publisher_or_origin: HaustechnikDialog
author_or_owner: forum users
date_published_or_collected: 2022; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: heat pump offer and financing
customer_segment: homeowner considering heat pump
funnel_stage: post-quote evaluation
sample_size: one thread
methodology: public peer discussion
data_type: homeowner quote concern
primary_claims: Heat-pump buyers may reject or delay when quotes omit expected extra electricity cost and total monthly burden.
quantitative_metrics: user-reported total around EUR 30,000, EUR 7,500 subsidy, EUR 240 monthly financing burden, EUR 400 current gas payment.
verbatim_customer_language: short excerpt in evidence
limitations: one anecdote; 2022 economics not current.
bias_risks: forum advice and energy-price context may skew concerns.
confidence_rating: medium
relevance_to_reonic: high for multi-technology quote follow-up.
recommended_use_in_poc: include operating-cost scenario and monthly-burden comparison when heat pump is in quote.
transferability_to_germany: direct Germany relevance but needs current market data.
```

## VOC-S14

```yaml
source_id: VOC-S14
title: HaustechnikDialog thread - LW-Waermepumpe Angebot zu teuer?
url_or_location: https://www.haustechnikdialog.de/Forum/t/256361/LW-Waermepumpe-Angebot-zu-teuer-
source_type: public homeowner / technical forum discussion
publisher_or_origin: HaustechnikDialog
author_or_owner: forum users
date_published_or_collected: 2022-09-01; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: heat pump quote evaluation
customer_segment: homeowner considering air-water heat pump
funnel_stage: post-quote evaluation
sample_size: one thread
methodology: public peer discussion
data_type: homeowner question
primary_claims: Buyers explicitly ask whether a heat-pump quote is overpriced or just the current market.
quantitative_metrics: no representative metrics in fetched lines
verbatim_customer_language: short excerpt in evidence
limitations: one anecdote; older market context.
bias_risks: forum users may be price-sensitive and technically engaged.
confidence_rating: medium
relevance_to_reonic: medium for heat-pump price objection language.
recommended_use_in_poc: classify "is this normal market price?" as validation-seeking, not immediate rejection.
transferability_to_germany: direct Germany relevance but price benchmarks need current source.
```

## VOC-S15

```yaml
source_id: VOC-S15
title: HaustechnikDialog thread - Teurer als mit der Waermepumpe haben wir noch nie geheizt
url_or_location: https://www.haustechnikdialog.de/Forum/t/276696/Teurer-als-mit-der-Waermepumpe-haben-wir-noch-nie-geheizt-?page=6
source_type: public homeowner / technical forum discussion
publisher_or_origin: HaustechnikDialog
author_or_owner: forum users
date_published_or_collected: 2024-04-11 page comment; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: heat pump economics and energy-price uncertainty
customer_segment: homeowner considering heat pump
funnel_stage: delayed decision after multiple offers
sample_size: one thread page
methodology: public peer discussion
data_type: homeowner stated decision logic
primary_claims: Some homeowners delay heat-pump conversion because offers feel expensive and future electricity prices feel uncertain.
quantitative_metrics: no representative metrics
verbatim_customer_language: short excerpt in evidence
limitations: one anecdote; thread title suggests negative framing.
bias_risks: negative-experience selection.
confidence_rating: low
relevance_to_reonic: medium for "wait until gas heater fails" delay state.
recommended_use_in_poc: recommend scenario planning and low-pressure timing rather than urgency when economics are unresolved.
transferability_to_germany: direct Germany relevance; validate prevalence.
```

## VOC-S16

```yaml
source_id: VOC-S16
title: Verbraucherzentrale Energieberatung - Waermepumpen-Angebote oft unuebersichtlich
url_or_location: https://verbraucherzentrale-energieberatung.de/waermepumpen-angebote-oft-unuebersichtlich/
source_type: consumer-advice / service announcement
publisher_or_origin: Verbraucherzentrale Energieberatung
author_or_owner: Verbraucherzentrale Energieberatung
date_published_or_collected: 2025-11 approx.; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: heat pump offer comparison
customer_segment: private households with heat pump offers
funnel_stage: post-quote evaluation
sample_size: not specified
methodology: consumer support offer
data_type: consumer-advice statement
primary_claims: Consumer center offers free analysis because households need help understanding suitable and fairly calculated heat-pump offers.
quantitative_metrics: no complaint count
verbatim_customer_language: none
limitations: not direct customer language; supports interpretation of quote complexity.
bias_risks: consumer-protection framing.
confidence_rating: medium
relevance_to_reonic: high for assistant feature: offer-check explainer and missing input checklist.
recommended_use_in_poc: add "offer clarity" score and explain line items in plain German.
transferability_to_germany: direct Germany relevance.
```

## VOC-S17

```yaml
source_id: VOC-S17
title: Reddit r/Finanzen - Das erste Jahr mit Photovoltaik: eine Datenanalyse
url_or_location: https://www.reddit.com/r/Finanzen/comments/1ifldbx/das_erste_jahr_mit_photovoltaik_eine_datenanalyse/
source_type: public homeowner / investor discussion
publisher_or_origin: Reddit r/Finanzen
author_or_owner: Reddit users
date_published_or_collected: approx. 2025; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany-oriented subreddit
market_context: residential PV economics
customer_segment: financially analytical homeowners / investors
funnel_stage: post-install evaluation and peer quote critique
sample_size: one Reddit thread
methodology: public discussion
data_type: peer price critique
primary_claims: Finance-oriented commenters use per-kWp price anchors and compare offers against perceived fair prices.
quantitative_metrics: commenter referenced EUR 21k for 8.4 kW and a fair-price range of EUR 1.2k-1.3k/kW without storage.
verbatim_customer_language: Reddit quotation allowed but kept short in evidence
limitations: anonymous Reddit; price anchor may be opinion and not current Germany market average.
bias_risks: Reddit finance community may overemphasize ROI and low price.
confidence_rating: low
relevance_to_reonic: medium for investor persona language.
recommended_use_in_poc: provide per-kWp and component-level comparison only when current local benchmarks are available.
transferability_to_germany: likely Germany-specific but validate with market data.
```

## VOC-S18

```yaml
source_id: VOC-S18
title: Reddit r/wohnen - Angebote fuer Solaranlage
url_or_location: https://www.reddit.com/r/wohnen/comments/1r0v1qu/angebote_f%C3%BCr_solaranlage/
source_type: public homeowner discussion
publisher_or_origin: Reddit r/wohnen
author_or_owner: Reddit users
date_published_or_collected: approx. 2026-02; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany-oriented subreddit
market_context: residential PV contractor search
customer_segment: homeowner considering PV retrofit
funnel_stage: provider search / pre-quote
sample_size: one Reddit thread
methodology: public discussion
data_type: homeowner self-description
primary_claims: Some buyers lack word-of-mouth recommendations and have little experience buying major home trades.
quantitative_metrics: no representative metrics
verbatim_customer_language: short excerpt in evidence
limitations: one anecdote; anonymous platform.
bias_risks: advice-seeking posts overrepresent uncertainty.
confidence_rating: low
relevance_to_reonic: high for trust-building and referral/social-proof needs.
recommended_use_in_poc: if no referral signal, provide local references, process map, and low-pressure consultation assets.
transferability_to_germany: likely Germany-relevant but validate prevalence.
```

## VOC-S19

```yaml
source_id: VOC-S19
title: Reddit r/Handwerker - Angebot 48.500 EUR fuer 7kW Split-Waermepumpe angemessen?
url_or_location: https://www.reddit.com/r/Handwerker/comments/1ruikam/angebot_48500_f%C3%BCr_7kw_splitw%C3%A4rmepumpe_angemessen/
source_type: public homeowner / trades discussion
publisher_or_origin: Reddit r/Handwerker
author_or_owner: Reddit users
date_published_or_collected: approx. 2026-03; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany-oriented subreddit
market_context: heat pump quote evaluation
customer_segment: family member helping parents evaluate offer
funnel_stage: post-quote evaluation
sample_size: one Reddit thread
methodology: public discussion
data_type: homeowner/family quote question
primary_claims: Family members may participate in quote evaluation for older homeowners and ask public communities whether a high heat-pump offer is realistic.
quantitative_metrics: thread title and post cite EUR 48,500 for 7 kW split heat pump.
verbatim_customer_language: short excerpt in evidence
limitations: anonymous single post; no contractor side; high-price outlier possible.
bias_risks: extreme offer likely attracts more attention.
confidence_rating: low
relevance_to_reonic: medium for multi-decision-maker and family-review state.
recommended_use_in_poc: add spouse/family summary and transparent offer breakdown for high-ticket heat-pump quotes.
transferability_to_germany: likely Germany-relevant, not representative.
```

## VOC-S20

```yaml
source_id: VOC-S20
title: M-Solar Plus ProvenExpert reviews
url_or_location: https://www.provenexpert.com/de-de/m-solar-plus/
source_type: public customer reviews
publisher_or_origin: ProvenExpert
author_or_owner: M-Solar Plus reviewers / ProvenExpert
date_published_or_collected: reviews visible through 2026-06-07; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Munich / Germany
market_context: residential solar consultation and offers
customer_segment: homeowners / solar prospects
funnel_stage: consultation, offer comparison
sample_size: page slice of ProvenExpert reviews
methodology: review platform
data_type: review text, rating dimensions
primary_claims: Customers praise understandable, on-site, benefit-oriented consultation but still delay when comparison offers differ in structure and price.
quantitative_metrics: visible rating dimensions include Beratung and Preis/Leistung ratings; no full sample count recorded in fetched lines.
verbatim_customer_language: short excerpts captured in evidence only
limitations: positive review skew; platform may include solicited reviews.
bias_risks: review solicitation, local provider page ownership.
confidence_rating: medium
relevance_to_reonic: high for offer comparison and decision-delay language.
recommended_use_in_poc: detect "multiple offers / different structures" and recommend comparison matrix follow-up.
transferability_to_germany: direct Germany relevance, local-provider-specific.
```

## VOC-S21

```yaml
source_id: VOC-S21
title: Sunvitec ProvenExpert reviews
url_or_location: https://www.provenexpert.com/de-de/sunvitec-gmbh-der-solar-energie-experte-in-thueringen/
source_type: public customer reviews
publisher_or_origin: ProvenExpert
author_or_owner: Sunvitec reviewers / ProvenExpert
date_published_or_collected: visible review referenced December decision; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Thuringia / Germany
market_context: residential PV for self-consumption
customer_segment: homeowner PV buyers
funnel_stage: provider selection, implementation
sample_size: page slice of ProvenExpert reviews
methodology: review platform
data_type: review text
primary_claims: A customer described getting five offers, choosing after a personal recommendation, and valuing one-hand coordination and handling of registration formalities.
quantitative_metrics: user stated five offers.
verbatim_customer_language: short excerpts captured in evidence only
limitations: one very positive review; not representative.
bias_risks: review selection and local-provider context.
confidence_rating: medium
relevance_to_reonic: high for competitor/risk and local-trust signals.
recommended_use_in_poc: add "comparison set size" and "referral source" fields to customer record.
transferability_to_germany: direct Germany relevance, local-provider-specific.
```

## VOC-S22

```yaml
source_id: VOC-S22
title: Green Vision Germany ProvenExpert reviews
url_or_location: https://www.provenexpert.com/de-de/green-vision-germany-gmbh/
source_type: public customer reviews
publisher_or_origin: ProvenExpert
author_or_owner: Green Vision Germany reviewers / ProvenExpert
date_published_or_collected: visible review refers to September installation and winter operation; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: heat pump retrofit in older home
customer_segment: homeowner heat-pump buyer
funnel_stage: quote, installation, post-install proof
sample_size: page slice of ProvenExpert reviews
methodology: review platform
data_type: review text
primary_claims: A detailed, staged, house-specific offer and observed winter performance built confidence in a heat-pump retrofit.
quantitative_metrics: reviewer reported JAZ near 6.0 versus forecast 4.6, but this is a single claim.
verbatim_customer_language: short excerpts captured in evidence only
limitations: one positive review; performance claim is user-reported and not independently verified.
bias_risks: satisfied-customer selection; no raw monitoring data.
confidence_rating: low
relevance_to_reonic: medium for heat-pump proof assets and post-install case studies.
recommended_use_in_poc: use measured-performance proof only when real customer data is verified and permissioned.
transferability_to_germany: direct Germany relevance, case-specific.
```

## VOC-S23

```yaml
source_id: VOC-S23
title: Alteon ProvenExpert reviews
url_or_location: https://www.provenexpert.com/de-de/alteon-gmbh/
source_type: public customer reviews
publisher_or_origin: ProvenExpert
author_or_owner: Alteon reviewers / ProvenExpert
date_published_or_collected: visible reviews through 2026-05-14; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: residential PV and leasing comparison
customer_segment: homeowners / PV buyers
funnel_stage: consultation, quote, installation
sample_size: page slice of ProvenExpert reviews
methodology: review platform
data_type: review text
primary_claims: Customers value advice that is not revenue-maximizing, does not push, keeps agreements, and helps with application/admin burden.
quantitative_metrics: no full sample count recorded in fetched lines
verbatim_customer_language: short excerpts captured in evidence only
limitations: positive review page slice; no lost-deal data.
bias_risks: review solicitation and provider page context.
confidence_rating: medium
relevance_to_reonic: high for trust language and anti-pressure guardrails.
recommended_use_in_poc: recommendation rationale should emphasize customer-fit logic, not upsell logic.
transferability_to_germany: direct Germany relevance, provider-specific.
```

## VOC-S24

```yaml
source_id: VOC-S24
title: Wechner Waermepumpen ProvenExpert reviews
url_or_location: https://www.provenexpert.com/de-de/wechner-waermepumpen-gmbh/
source_type: public customer reviews
publisher_or_origin: ProvenExpert
author_or_owner: Wechner reviewers / ProvenExpert
date_published_or_collected: visible reviews from 2022-08 to 2025-12; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: heat pumps, old-building retrofits, subsidy process
customer_segment: homeowners / heat-pump prospects and buyers
funnel_stage: quote, installation, post-install
sample_size: page slice of ProvenExpert reviews
methodology: review platform
data_type: review text and company response
primary_claims: Positive heat-pump reviews stress understandable advice, clear processes, subsidy help, promise-performance match; one review shows six-month quote delay.
quantitative_metrics: one visible review reports waiting six months for an offer.
verbatim_customer_language: short excerpts captured in evidence only
limitations: positive provider profile; capacity-delay case may reflect 2022 shock demand.
bias_risks: review solicitation, provider response framing.
confidence_rating: medium
relevance_to_reonic: high for scheduling, capacity, and post-quote follow-up needs.
recommended_use_in_poc: track quote-age and promised-response date; prompt installer before lead cools.
transferability_to_germany: direct Germany relevance.
```

## VOC-S25

```yaml
source_id: VOC-S25
title: GSMSolar ProvenExpert reviews
url_or_location: https://www.provenexpert.com/de-de/gsmsolar-solaranlagen-photovoltaik-solarstrom/
source_type: public customer reviews
publisher_or_origin: ProvenExpert
author_or_owner: GSMSolar reviewers / ProvenExpert
date_published_or_collected: visible page slice; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: residential PV installation
customer_segment: homeowners / PV buyers
funnel_stage: consultation, offer, installation, commissioning
sample_size: page slice of ProvenExpert reviews
methodology: review platform
data_type: review text
primary_claims: Customers can use "Rundum-Sorglos" positively when it is backed by concrete coordination from offer through commissioning.
quantitative_metrics: no representative metrics
verbatim_customer_language: short excerpt captured in evidence
limitations: one positive review; phrase conflicts with Verbraucherzentrale warning when used generically.
bias_risks: positive review selection.
confidence_rating: low
relevance_to_reonic: medium for distinguishing substantiated vs generic all-in promises.
recommended_use_in_poc: if using "all handled" language, enumerate exactly who handles grid, meter, registration, and service.
transferability_to_germany: direct Germany relevance, provider-specific.
```

## VOC-S26

```yaml
source_id: VOC-S26
title: damm-solar ProvenExpert reviews
url_or_location: https://www.provenexpert.com/de-de/damm-solar-gmbh/
source_type: public customer reviews
publisher_or_origin: ProvenExpert
author_or_owner: damm-solar reviewers / ProvenExpert
date_published_or_collected: visible reviews through 2025-02 and 2026; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: residential PV and storage
customer_segment: homeowners / PV buyers
funnel_stage: second offer, provider selection, installation, network approval
sample_size: page slice of ProvenExpert reviews
methodology: review platform
data_type: review text
primary_claims: Reviews highlight no-pressure advice, second-offer comparison, fast response to storage add-on, and network-operator delays outside installer control.
quantitative_metrics: one visible review cites a three-month wait for network-operator approval.
verbatim_customer_language: short excerpts captured in evidence only
limitations: positive page slice; not representative.
bias_risks: review solicitation and satisfaction bias.
confidence_rating: medium
relevance_to_reonic: high for distinguishing installer-controllable and external-delay explanations.
recommended_use_in_poc: assistant should explain which delays are installer, network operator, or customer-action dependent.
transferability_to_germany: direct Germany relevance.
```

## VOC-S27

```yaml
source_id: VOC-S27
title: ZfK - Immer mehr Beschwerden gegen PV-Anlagen
url_or_location: https://www.zfk.de/politik/regulierung/immer-mehr-beschwerden-gegen-pv-anlagen
source_type: trade press reporting consumer-complaint data
publisher_or_origin: Zeitung fuer kommunale Wirtschaft (ZfK), citing Verbraucherzentrale Bundesverband and ZVDH
author_or_owner: Julian Korb
date_published_or_collected: 2024-04-08; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: PV market complaints
customer_segment: consumers with PV-provider problems
funnel_stage: post-contract, delivery, installation, warranty
sample_size: more than 1,700 consumer-center complaints in 2023 cited; nearly 500 in 2022 cited
methodology: reported complaint counts from Verbraucherzentralen / vzbv
data_type: complaint statistics and issue categories
primary_claims: Complaint growth was driven mainly by delivery/performance disruptions and warranty problems; rooftop damage from improper PV installation was also reported by roofers.
quantitative_metrics: >1,700 complaints in 2023; nearly 500 in 2022; 44% delivery/performance disruptions; 14% warranty problems.
verbatim_customer_language: none
limitations: complaints are not representative of all installations; article behind partial subscription after visible section.
bias_risks: complaint dataset overrepresents failures; trade press summary.
confidence_rating: medium
relevance_to_reonic: high for separating sales follow-up from fulfillment/service risk.
recommended_use_in_poc: add installation-quality risk category and avoid treating service complaints as quote-stage objections.
transferability_to_germany: direct Germany relevance.
```

## VOC-S28

```yaml
source_id: VOC-S28
title: KLIMA3 / Verbraucherzentrale warning - PV-Anlagen: Vorsicht vor Telefon- und Haustuergeschaeften
url_or_location: https://klimahochdrei.bayern/presseinformation-pv-anlagen-vorsicht-vor-telefon-und-haustuergeschaeften
source_type: consumer warning / press release
publisher_or_origin: KLIMA3 Energieagentur with Verbraucherzentrale reference
author_or_owner: KLIMA3 Energieagentur
date_published_or_collected: 2024-07-30, updated 2024-11-29; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Bavaria / Germany
market_context: PV sales practices
customer_segment: homeowners contacted by PV sellers
funnel_stage: outreach and pre-contract
sample_size: unspecified reported cases
methodology: consumer warning based on known cases
data_type: consumer-protection warning
primary_claims: Pressure by phone or door-to-door and pretending to represent neutral advice organizations are trust-breaking sales practices.
quantitative_metrics: no count
verbatim_customer_language: none
limitations: problem-focused warning; not a frequency estimate.
bias_risks: consumer-protection emphasis.
confidence_rating: medium
relevance_to_reonic: high for channel/tone compliance and ethical guardrails.
recommended_use_in_poc: avoid cold pressure tactics; require consent/channel status; make seller identity clear.
transferability_to_germany: direct Germany relevance.
```

## VOC-S29

```yaml
source_id: VOC-S29
title: Solarserver / Verbraucherzentrale NRW - Checkliste fuer Photovoltaik-Angebote
url_or_location: https://www.solarserver.de/2023/05/18/verbraucherzentrale-nrw-stellt-checkliste-fuer-photovoltaik-angebote-zusammen/
source_type: consumer-advice summary
publisher_or_origin: Solarserver, citing Verbraucherzentrale NRW
author_or_owner: Solarserver / Verbraucherzentrale NRW
date_published_or_collected: 2023-05-18; accessed 2026-06-20
date_accessed: 2026-06-20
geography: NRW / Germany
market_context: residential PV offer checking
customer_segment: homeowners comparing PV offers
funnel_stage: pre-contract, post-quote evaluation
sample_size: not applicable
methodology: consumer checklist summary
data_type: offer-check guidance
primary_claims: Verbraucherzentrale NRW advises multiple offers, local references, on-site assessment, complete component/labor breakdown, and critical review of economic assumptions.
quantitative_metrics: no VOC count
verbatim_customer_language: none
limitations: not direct customer language; authoritative guidance.
bias_risks: consumer-protection framing.
confidence_rating: high for offer-check guidance
relevance_to_reonic: high for proposal UX and guardrails around ROI claims.
recommended_use_in_poc: create proposal-quality checklist and "missing assumptions" warning.
transferability_to_germany: direct Germany relevance.
```

## VOC-S30

```yaml
source_id: VOC-S30
title: Svea Solar Deutschland Trustpilot reviews
url_or_location: https://de.trustpilot.com/review/sveasolar.de
source_type: public customer reviews
publisher_or_origin: Trustpilot
author_or_owner: Svea Solar reviewers / Trustpilot
date_published_or_collected: reviews visible through 2026-06; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany
market_context: residential PV, battery, smart meters
customer_segment: homeowners / PV customers
funnel_stage: installation, handover, service, post-install support
sample_size: 539 Trustpilot reviews visible in search result
methodology: open review platform
data_type: review text and company responses
primary_claims: Installation-quality feedback includes rushed handover, property damage disputes, customer-service response time, meter registration delays, and praise for punctual/clean teams.
quantitative_metrics: Trustpilot page shows 539 reviews in search result.
verbatim_customer_language: short excerpts captured in evidence only
limitations: self-selected reviews; search result page was very rich but not a full corpus.
bias_risks: review extremes, platform moderation, company response framing.
confidence_rating: medium
relevance_to_reonic: high for separating handover/support issues from quote-stage concerns.
recommended_use_in_poc: add handover checklist and post-install issue handling as distinct workflow, not sales follow-up.
transferability_to_germany: direct Germany relevance, company-specific.
```

## VOC-S31

```yaml
source_id: VOC-S31
title: Photovoltaikforum thread - 7kWp with strong winter shading, PV sinnvoll?
url_or_location: https://www.photovoltaikforum.com/thread/189545-7kwp-mit-starker-verschattung-im-winter-pv-sinnvoll/
source_type: public homeowner forum discussion
publisher_or_origin: Photovoltaikforum
author_or_owner: forum users
date_published_or_collected: 2022-12-11; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany / DACH forum context
market_context: PV with heat pump and battery
customer_segment: homeowner adding PV because heat pump will raise electricity use
funnel_stage: quote evaluation
sample_size: one thread; multiple replies
methodology: public peer discussion
data_type: homeowner question and peer answers
primary_claims: Winter shading, heat-pump load, battery add-ons, and whether winter generation is meaningful are live quote-stage concerns.
quantitative_metrics: homeowner reported 7.2 kWp offer at EUR 16,700 net without scaffold and battery add-on at EUR 6,350.
verbatim_customer_language: short excerpts captured in evidence only
limitations: technically engaged forum; older pricing.
bias_risks: forum advice may discourage batteries more than mainstream buyers.
confidence_rating: medium
relevance_to_reonic: high for winter/cloud and PV-plus-WP explanation.
recommended_use_in_poc: use seasonal production chart and explain winter contribution without overpromising heat-pump coverage.
transferability_to_germany: direct Germany relevance but current economics need refresh.
```

## VOC-S32

```yaml
source_id: VOC-S32
title: Photovoltaikforum thread - Grundsatzfrage Speicher ja oder nein
url_or_location: https://www.photovoltaikforum.com/thread/237655-grundsatzfrage-speicher-ja-oder-nein/
source_type: public homeowner forum discussion
publisher_or_origin: Photovoltaikforum
author_or_owner: forum users
date_published_or_collected: 2024-10-31; accessed 2026-06-20
date_accessed: 2026-06-20
geography: Germany / DACH forum context
market_context: residential PV and battery quote
customer_segment: mixed residential / small business building owner
funnel_stage: pre-quote and quote evaluation
sample_size: one thread
methodology: public peer discussion
data_type: homeowner decision language and peer advice
primary_claims: Customers question whether batteries are economically worthwhile, whether payback claims are "prettified", and whether to install solar first and battery later.
quantitative_metrics: user reported 12 kWp space, EUR 16,000 without battery and EUR 22,000 with battery.
verbatim_customer_language: short excerpts captured in evidence only
limitations: single technically engaged forum thread; price benchmarks may age quickly.
bias_risks: forum norms may emphasize economic skepticism.
confidence_rating: medium
relevance_to_reonic: high for battery-objection and ROI-claim guardrails.
recommended_use_in_poc: offer "battery now vs later" scenario, including assumptions and uncertainty.
transferability_to_germany: direct Germany relevance, validate with current prices.
```
