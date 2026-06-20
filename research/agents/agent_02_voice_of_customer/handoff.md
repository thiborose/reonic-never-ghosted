# Handoff: Agent 2

## Status

- Completed:
  - Germany-first public VOC pass across installer reviews, homeowner forums, Reddit, consumer advice, and complaint reporting.
  - Source records in `sources.md` with URL, date accessed, geography, limitations, bias risks, confidence, and Reonic implication.
  - Evidence items in `evidence.md` with claim category, source IDs, confidence, limitations, data fields, and action/message/product implications.
  - Tagged feedback corpus and synthesis in `findings.md`.
- Partially completed:
  - Heat-pump VOC was covered enough for multi-technology quote implications, but not exhaustively.
  - Review-source sampling is broad but not systematic enough for frequency ranking.
- Not completed:
  - No internal Reonic/installer CRM, sales call, support, or win/loss data was available.
  - No Google reviews were directly scraped; accessible Trustpilot and ProvenExpert-like sources were prioritized.
  - No representative customer survey or interview data was collected.

## Most Important Findings

- Finding: Sales trust breaks when the customer perceives pressure, vague identity, informal tone mismatch, or a discovery conversation that feels like closing rather than advice.
  - Confidence: medium
  - Germany relevance: direct Germany public reviews and consumer warning
  - Source IDs: VOC-E01; VOC-S01, VOC-S03, VOC-S23, VOC-S28; accessed 2026-06-20
  - Limitations: public reviews and warnings are not prevalence data.
  - Product implication: default German messages to clear identity, professional `Sie`, consented channel, low-pressure CTA, and human trust-repair action when sentiment is negative.

- Finding: Positive quote-stage trust language centers on responsiveness, a consistent contact person, competent explanations, and concrete next steps.
  - Confidence: medium
  - Germany relevance: direct Germany reviews
  - Source IDs: VOC-E02; VOC-S02, VOC-S03, VOC-S05, VOC-S20, VOC-S24; accessed 2026-06-20
  - Limitations: positive reviews may be solicited.
  - Product implication: track response age, unanswered questions, and assigned owner; recommend quick answer/callback rather than generic email.

- Finding: Good consultation does not equal close readiness; price, referral, and comparison-offer clarity can still decide the deal.
  - Confidence: medium
  - Germany relevance: direct Germany reviews
  - Source IDs: VOC-E03; VOC-S02, VOC-S20, VOC-S21, VOC-S26; accessed 2026-06-20
  - Limitations: competitor offer details are missing.
  - Product implication: add fields for competitor mentions, competing-offer count, referral influence, and price-gap notes.

- Finding: Proposal clarity is a core quote-stage need. Buyers and consumer advisors expect itemized components, labor, scaffold, battery, wallbox, grid/admin tasks, and economic assumptions.
  - Confidence: high
  - Germany relevance: direct Germany forum and Verbraucherzentrale NRW guidance
  - Source IDs: VOC-E04, VOC-E05; VOC-S07, VOC-S20, VOC-S29, VOC-S32; accessed 2026-06-20
  - Limitations: forum users skew technical.
  - Product implication: add proposal-clarity score and recommend itemized addendum before another nurture message.

- Finding: Winter/cloud production, battery economics, and PV-plus-heat-pump operating cost are nuanced objections that require site-specific and current assumptions.
  - Confidence: medium
  - Germany relevance: direct Germany forum/review/advice sources
  - Source IDs: VOC-E07, VOC-E08, VOC-E09; VOC-S13, VOC-S16, VOC-S22, VOC-S31, VOC-S32; accessed 2026-06-20
  - Limitations: current economics require Agent 4; public performance claims are unverified.
  - Product implication: block generic ROI/winter/savings claims unless required inputs are present; otherwise show missing-data state.

- Finding: Installation-quality feedback is distinct from sales-process feedback. Roof/property risk, grid/meter delays, rushed handover, and support response affect trust but should not be treated as generic quote objections.
  - Confidence: medium to high
  - Germany relevance: direct Germany reviews, complaint reporting, consumer guidance
  - Source IDs: VOC-E10, VOC-E11, VOC-E14, VOC-E15; VOC-S04, VOC-S06, VOC-S10, VOC-S26, VOC-S27, VOC-S30; accessed 2026-06-20
  - Limitations: complaint/review data overrepresents failures.
  - Product implication: separate CRM tags for `installation_risk`, `aftercare_risk`, `roof_property_risk`, and `sales_trust`.

## Strongest Sources

- Source ID: VOC-S29
  - Why it matters: Verbraucherzentrale NRW offer-check guidance, via Solarserver, directly supports proposal itemization, local references, complete labor/component breakdown, and careful economic assumptions.

- Source ID: VOC-S27
  - Why it matters: ZfK reports Verbraucherzentrale complaint counts and categories, useful for separating fulfillment/warranty issues from quote-stage objections.

- Source ID: VOC-S01 / VOC-S02 / VOC-S03
  - Why it matters: Large public review corpora with Germany-specific customer language around consultation, price, pressure, responsiveness, and support.

- Source ID: VOC-S31 / VOC-S32
  - Why it matters: Rich quote-stage forum language about winter, heat-pump load, storage economics, payback skepticism, and price shock.

- Source ID: VOC-S20 / VOC-S21 / VOC-S23 / VOC-S26
  - Why it matters: ProvenExpert reviews add local-installer language around no-pressure advice, comparison offers, referral, admin help, and coordinated execution.

## Weak Or Risky Claims

- Claim: Family/advisor involvement is common in Germany PV/heat-pump decisions.
  - Why weak: Evidence is mainly anecdotal Reddit plus general high-ticket logic.
  - How to validate: Check CRM contact counts, email forwards/proposal shares, call notes mentioning spouse/children/advisor.

- Claim: Battery skepticism is dominant.
  - Why weak: Photovoltaikforum users may be more anti-storage and ROI-focused than mainstream buyers.
  - How to validate: Compare close/loss notes for battery attach, battery removal after quote, and reasons.

- Claim: Specific price benchmarks or "fair" EUR/kWp ranges.
  - Why weak: Public forum/Reddit price anchors are volatile and not controlled for roof complexity, region, hardware, scaffold, or service scope.
  - How to validate: Agent 4 market economics plus installer quote benchmark data.

- Claim: Review frequency reflects market frequency.
  - Why weak: Review platforms and complaint centers are not representative samples.
  - How to validate: Internal support tickets, win/loss reasons, and structured post-quote objection logs.

## Product Implications

- Persona implications:
  - `trust-sensitive skeptic`: reacts badly to pressure, unclear identity, or tone mismatch; needs named expert, proof, and low-pressure next step.
  - `ROI/comparison optimizer`: asks "lohnt sich", challenges payback, wants itemization and assumptions.
  - `liquidity-constrained convenience buyer`: may prefer rental/finance but needs total-cost and obligation clarity.
  - `multi-tech planner`: PV plus battery/EV/heat pump; needs seasonal and monthly-burden explanation.

- Objection implications:
  - Separate `price_shock`, `proposal_clarity`, `ROI_assumption`, `battery_value`, `winter_performance`, `roof_property_risk`, `aftercare_risk`, `external_delay`, and `pressure_trust_break`.

- Action and scheduling implications:
  - Recommend itemized proposal revision when quote clarity is the blocker.
  - Recommend a human call or short video for trust repair, winter/PV-plus-heat-pump explanation, or ROI assumption walkthrough.
  - Recommend proactive status update when quote age or external dependency is stale.
  - Recommend local reference/testimonial when no referral signal is present.

- Data model implications:
  - Add fields for competing_offer_count, competitor_mentions, referral_source, assigned_contact, last_response_time, unanswered_questions, quote_line_items, optional_addons, financing_terms, production_assumptions, winter_chart_available, roof_risk_flags, aftercare_terms, dependency_owner, promised_next_step_date, decision_makers/advisors.

- UX implications:
  - Show "why this next action" with evidence: e.g. "customer asked about winter output and battery payback; this needs a seasonal chart, not another discount email."
  - Add missing-data/claim-blocked states for ROI, savings, winter production, financing, battery payback, incentives, and timelines.
  - Add a proposal-clarity panel with missing line items and assumptions.

- Compliance implications:
  - Use permissioned channels only.
  - Keep seller identity explicit.
  - Avoid fake urgency, unsupported savings/ROI, vague "Rundum-sorglos", and repeated pressure after negative sentiment.

## Handoff To Product Synthesis

- Recommended product rule:
  - If the customer's latest signal contains price/ROI/battery/winter language, recommend a proof or calculation action before promotional copy.
  - If the customer's latest signal contains trust/pressure/service language, recommend human trust repair and clarity of responsibility.
  - If proposal clarity is low, recommend itemized proposal revision before follow-up sequence continues.

- Required mock data:
  - At least 3 records with multiple competing offers.
  - At least 2 PV-plus-battery quote records with battery skepticism.
  - At least 2 PV-plus-heat-pump records with winter/monthly-burden concern.
  - At least 1 liquidity/finance record.
  - At least 1 roof/property-risk record.
  - At least 1 local-referral competitor-loss risk record.

- Required UI state:
  - `needs_itemized_quote`
  - `roi_claim_blocked_missing_assumptions`
  - `winter_chart_needed`
  - `trust_repair_needed`
  - `aftercare_proof_needed`
  - `external_dependency_update_needed`
  - `co_decision_maker_summary`

- Open question:
  - Which of these public VOC patterns are most common in actual Reonic-connected installer sales notes and lost deals?
