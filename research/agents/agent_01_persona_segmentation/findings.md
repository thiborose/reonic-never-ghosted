# Findings: Agent 1

Status: completed initial synthesis.

Traceability note: persona claims below reference evidence IDs from `evidence.md`; each evidence item contains source URL, access date, geography, confidence, limitations, and product implication. Use this file as product synthesis, not as raw evidence.

## Executive Findings

1. The four prompt personas should be treated as hypotheses, not a finished segmentation. Germany-specific evidence validates ROI/cost control, independence/autarky, climate impact, and risk/uncertainty as meaningful dimensions, but not "family" as a standalone motivation persona. Evidence: E01, E02, E04, E12, E16, E18.
2. German homeowner personas should be multi-label motivation clusters with objection overlays. A homeowner can be a ROI planner and an independence optimizer while also carrying a heat-pump offer-trust objection. Evidence: E01, E04, E05, E06, E09, E11.
3. Post-quote strategy should be driven by proof needed, not by demographics. The strongest post-quote proof needs found were transparent ROI/payback, financing/subsidy clarity, offer completeness, building suitability, local/social proof, and system integration explanation. Evidence: E02, E03, E05, E06, E08, E13.
4. Multi-technology packages are a first-class segment. PV often acts as the entry point for battery, EV/wallbox, heat pump, and HEMS, so Reonic should model whether the quote is a single-product sale, an all-at-once bundle, or a phased roadmap. Evidence: E09, E10.
5. Public forums and installer review snippets are useful for language and trust themes only. They should not be used as prevalence evidence until validated against CRM/debrief data. Evidence: E14, E15, E17.

## Validated, Revised, And Rejected Prompt Personas

| Prompt persona | Research status | Better Reonic segment | Confidence | Product implication |
|---|---|---|---|---|
| Investor | Valid motive, weak label | ROI and Cost-Control Planner | High | Use transparent ROI, assumptions, financing, and competitor comparison. Evidence: E02, E03, E04. |
| Environmentalist | Valid but usually mixed | Climate Impact Confirmer | Medium | Use CO2 and green-power proof when explicit; pair with economics for mixed leads. Evidence: E01, E12. |
| Skeptic | Valid if reframed | Risk and Trust Skeptic | High | Treat skepticism as uncertainty over economics, offer completeness, policy, building fit, or installer reliability. Evidence: E02, E05, E06, E08. |
| Family | Not validated as motivation persona | Stakeholder Review State | Unknown | Ask who else reviews the quote; do not infer "family reassurance" from household type. Evidence: E16, E18. |

## Segmentation Logic For PoC

Recommended scoring approach:

- `motive_roi_score`: cost-saving, payback, amortization, subsidy, loan, electricity price, oil/gas price, competitor quote, "lohnt sich" language. Evidence: E02, E03, E04, E14, E15.
- `motive_independence_score`: own power, independence from supplier/market, autarky percentage, self-consumption, battery, home EV charging, green charging. Evidence: E01, E04, E09, E10, E11.
- `motive_climate_score`: climate, CO2, green power tariff, renewable heating, sustainability identity, explicit environmental benefit questions. Evidence: E01, E12.
- `motive_system_score`: PV plus storage, heat pump, wallbox, EV, HEMS, smart meter, dynamic tariff, load shifting, phased roadmap. Evidence: E09, E10, E11, E14.
- `risk_financial_score`: high quote total, financing need, subsidy uncertainty, low cash budget, payback doubts. Evidence: E02, E03, E05, E08, E15.
- `risk_offer_trust_score`: missing line items, "bauseits", unclear scope, many pages, competitor quote mismatch, installer reliability concern. Evidence: E08, E15, E17.
- `risk_policy_building_score`: GEG/65% rule/funding uncertainty, old heating, building suitability, heat-load calculation, radiator/floor heating notes, grid/feed-in questions. Evidence: E06, E07, E08.
- `stakeholder_review_state`: explicit partner/family/advisor review, no clear initiator, "need to discuss", meeting not with all decision-makers. Evidence: E16.

Guardrails:

- Do not infer income, family status, age, gender, or vulnerability unless explicit, permissioned, and product-use justified. Evidence: E16, E18.
- Do not use false urgency. Only use verified quote validity, subsidy deadline, heating failure, seasonal installation capacity, tariff changes, or current policy facts. Evidence: E07.
- Do not claim battery, heat pump, or PV economics are universally positive. Present assumptions and local/household fit. Evidence: E02, E06, E08, E11, E14.

## Persona Cards

```yaml
persona_id: P01
persona_name: ROI and Cost-Control Planner
geography: Germany
confidence_rating: high
primary_motivation: Reduce long-term energy costs and understand whether the quoted system financially pays.
secondary_motivations:
  - Independence from future energy-price increases
  - Subsidy or loan optimization
  - Property-value improvement when explicitly mentioned
typical_trigger_event:
  - Receives a PV, battery, heat-pump, or bundle quote and asks about payback, monthly savings, or competitor prices.
  - Sees high current electricity, gas, or oil costs.
household_context: Owner-occupied house context is common in sources, but do not infer household composition.
decision_makers: Ask who needs the financial summary; do not assume one buyer or spouse role.
financial_context: Often willing to invest but sensitive to total price, cash-flow, financing, and subsidy clarity.
energy_context: High electricity use, heat pump/EV plans, oil/gas heating, or high current tariffs strengthen fit.
home_context: Roof suitability, annual consumption, heating type, and grid/feed-in assumptions directly affect proof needs.
regional_context: Use Germany-wide rules but local prices, subsidies, grid rules, and installer capacity must be checked.
buying_stage: Strongest after quote is sent and before contract signature.
risk_tolerance: Low to medium; wants assumptions visible before commitment.
technical_literacy: Varies; can be low if needs plain-language ROI, high if compares scenarios.
trust_level: Conditional; trust increases when assumptions are transparent and line items are complete.
price_sensitivity: High.
environmental_motivation: Often secondary unless explicit.
resilience_motivation: Usually secondary; may rise for battery or backup questions.
status_or_identity_motivation: Not evidenced as a core driver.
main_objections:
  - "Can I afford this?"
  - "Does the investment pay?"
  - "Are the savings assumptions realistic?"
  - "Is a battery worth it?"
hidden_objections:
  - Fear of overpaying compared with another installer
  - Fear of policy or tariff assumptions changing
proof_needed:
  - Payback range with assumptions
  - Self-consumption and sensitivity analysis
  - Financing and subsidy breakdown
  - Comparable offer benchmark
preferred_channels:
  - Annotated proposal
  - Email with calculator link
  - Scheduled call for assumptions
preferred_tone: Precise, transparent, non-hype, numbers-first.
language_patterns:
  - "lohnt sich"
  - "Amortisation"
  - "Förderung"
  - "Strompreis"
  - "Angebot vergleichen"
urgency_triggers:
  - Verified quote validity
  - Verified subsidy or tariff change
  - Heating failure for heat-pump quote
likely_ghosting_signals:
  - Opens proposal but not ROI section
  - Asks for numbers, then goes silent
  - Mentions competitor quote or "need to calculate"
close_readiness_signals:
  - Asks about installation date after ROI explanation
  - Requests financing paperwork
  - Accepts assumptions and asks for contract next step
messages_that_backfire:
  - Unsupported "pays for itself" claims
  - Artificial urgency
  - Ignoring competitor-price concern
installer_actions_that_build_trust:
  - Walk through assumptions live
  - Show conservative and optimistic scenarios
  - Name excluded scope and next steps
sales_assets_that_help:
  - ROI sensitivity card
  - Financing/subsidy explainer
  - Offer comparison checklist
recommended_sequence_shape:
  - Day 1: thank-you plus annotated ROI summary
  - Day 3: call to validate assumptions and answer price questions
  - Day 6: revised proposal or financing option if needed
  - Day 10: concise decision summary with next commitment
recommended_next_actions:
  - Generate transparent ROI walkthrough
  - Schedule a 15-minute assumptions review
  - Offer phased battery or bundle option if total price is blocking
debrief_questions:
  - Which number did the homeowner question?
  - Did they mention another quote?
  - Are they constrained by cash, financing, or confidence?
regional_variants:
  - Check local subsidy and grid/feed-in rules before messaging.
evidence_sources: [E02, E03, E04, E05, E14, E15]
limitations: Validated mostly by surveys and public offer discussions, not Reonic CRM outcomes.
product_implication: Build ROI and financing proof as first-class next-best-action assets.
```

```yaml
persona_id: P02
persona_name: Independence and Autarky Optimizer
geography: Germany
confidence_rating: high for PV motive; medium for battery-specific post-quote behavior
primary_motivation: Reduce dependence on energy suppliers, grid electricity, fossil fuels, and future market prices.
secondary_motivations:
  - Consume self-generated solar power
  - Charge EV with own or green power
  - Increase autarky with battery or HEMS
typical_trigger_event:
  - PV quote with battery, EV charger, heat pump, or HEMS.
  - Customer asks about self-consumption, autarky percentage, or supplier independence.
household_context: Strongest when homeowner has own roof, parking/charging access, or high controllable load.
decision_makers: May include technical stakeholder; ask who needs system explanation.
financial_context: May accept longer payback if independence value is explicit, but still needs price transparency.
energy_context: PV potential, battery, EV, heat pump, and smart tariffs are important signals.
home_context: Own roof and ability to charge/control loads strengthen fit.
regional_context: Local grid, tariff, metering, and feed-in rules affect feasible independence claims.
buying_stage: Consideration through post-quote; especially in bundle and battery decisions.
risk_tolerance: Medium; can tolerate complexity if system logic is clear.
technical_literacy: Medium to high when asking about autarky and load shifting.
trust_level: Builds through credible system design and honest limits.
price_sensitivity: Medium; price matters but not always strict-payback-only.
environmental_motivation: Often present as secondary.
resilience_motivation: Possible but must be explicit; Germany evidence reviewed focused more on autarky than outage backup.
status_or_identity_motivation: Not sufficiently evidenced.
main_objections:
  - "How independent will I really be?"
  - "Is storage sized correctly?"
  - "Can I add battery/EV/heat pump later?"
hidden_objections:
  - Fear that promised autarky is inflated
  - Fear of lock-in to a vendor system
proof_needed:
  - Autarky and self-consumption simulation
  - Battery sizing explanation
  - System roadmap for PV, battery, heat pump, wallbox, HEMS
preferred_channels:
  - Visual system diagram
  - Proposal annotation
  - Technical call or video walkthrough
preferred_tone: Empowering but precise; avoid absolute independence claims.
language_patterns:
  - "unabhängig"
  - "Autarkie"
  - "Eigenverbrauch"
  - "grün laden"
  - "Speicher"
urgency_triggers:
  - EV delivery date
  - Heat-pump plan
  - Verified tariff or metering opportunity
likely_ghosting_signals:
  - Battery optionality unresolved
  - Wants "all at once" but quote price is high
  - Asks about later expansion
close_readiness_signals:
  - Chooses target autarky level
  - Accepts battery size or phased plan
  - Requests installation scheduling around EV/heat-pump timing
messages_that_backfire:
  - "100% independent" claims
  - Strict ROI-only dismissal of storage when customer values autarky
  - Oversized bundle without budget option
installer_actions_that_build_trust:
  - Show realistic summer/winter difference
  - Explain what battery can and cannot do
  - Offer phased roadmap if useful
sales_assets_that_help:
  - Autarky simulation
  - Battery sizing card
  - EV solar-charging estimate
  - Multi-tech roadmap
recommended_sequence_shape:
  - Day 1: system diagram and autarky assumptions
  - Day 3: technical Q&A call
  - Day 6: phased vs full-system comparison
  - Day 10: final design confirmation
recommended_next_actions:
  - Generate self-consumption and autarky explainer
  - Offer battery-now vs battery-later scenario
  - Add wallbox/heat-pump integration note when relevant
debrief_questions:
  - Is independence more important than shortest payback?
  - Did they ask about battery backup or only self-consumption?
  - Which future product do they plan next?
regional_variants:
  - Verify metering, dynamic tariffs, and local grid constraints.
evidence_sources: [E01, E04, E09, E10, E11, E14]
limitations: Autarky valuation evidence is strong for storage adoption patterns but not yet tied to Reonic quote outcomes.
product_implication: Persona scoring must separate ROI battery skepticism from autarky battery value.
```

```yaml
persona_id: P03
persona_name: Climate Impact Confirmer
geography: Germany
confidence_rating: medium
primary_motivation: Make a credible climate or renewable-energy contribution through home energy investment.
secondary_motivations:
  - Lower energy costs
  - Use green power
  - Reduce fossil-fuel dependence
typical_trigger_event:
  - Customer mentions climate, CO2, green electricity, future generations, or renewable heating.
  - Existing green tariff or explicit sustainability note.
household_context: Do not infer from age, family, education, or politics.
decision_makers: Ask whether impact proof or financial proof matters more to the reviewing stakeholders.
financial_context: Still often requires economics; climate alone is not enough for most evidence-backed leads.
energy_context: PV, heat pump, EV green charging, and fossil heating replacement can all support impact framing.
home_context: Building suitability and real CO2 assumptions must be accurate.
regional_context: Use German grid and heating emission factors current to the proposal date.
buying_stage: Consideration and post-quote reassurance.
risk_tolerance: Medium; trust depends on credible numbers and avoiding greenwash.
technical_literacy: Low to medium; can respond to simple impact visuals.
trust_level: High if installer avoids exaggerated claims.
price_sensitivity: Medium; can become high if impact is framed without cost clarity.
environmental_motivation: High by explicit signal only.
resilience_motivation: Usually unproven unless explicit.
status_or_identity_motivation: Not evidenced as core.
main_objections:
  - "Is this really better for climate?"
  - "Are the CO2 savings credible?"
  - "Does battery or EV change the impact?"
hidden_objections:
  - Fear of greenwashing
  - Concern that economics and climate conflict
proof_needed:
  - Conservative CO2 estimate
  - Fossil-fuel reduction explanation
  - Green charging or renewable heating impact
preferred_channels:
  - Visual impact card
  - Short email summary
  - Proposal insert
preferred_tone: Credible, calm, concrete; no moralizing.
language_patterns:
  - "Klimaschutz"
  - "CO2"
  - "Ökostrom"
  - "fossil"
  - "erneuerbar"
urgency_triggers:
  - Verified fossil heating replacement timing
  - Verified policy/funding date
  - Explicit customer climate deadline or goal
likely_ghosting_signals:
  - Engages impact content but avoids price discussion
  - Needs stakeholder approval from a cost-focused reviewer
close_readiness_signals:
  - Asks for installation timing after impact and cost are both clear
  - Requests impact summary for another stakeholder
messages_that_backfire:
  - Climate-only pitch when cost concerns are present
  - Unsupported CO2 claims
  - Blaming or guilt-based language
installer_actions_that_build_trust:
  - Pair impact proof with financial assumptions
  - Explain uncertainty in CO2 calculations
  - Use product-specific impact, not generic climate slogans
sales_assets_that_help:
  - CO2 impact card
  - Fossil-fuel displacement summary
  - Green charging explainer
recommended_sequence_shape:
  - Day 1: quote summary with cost and CO2 side by side
  - Day 4: short impact explainer or reference project
  - Day 8: stakeholder summary balancing impact and economics
recommended_next_actions:
  - Generate impact card only when explicit signals exist
  - Add cost proof if climate lead stalls
debrief_questions:
  - Did they care more about impact, savings, or both?
  - Did anyone challenge the CO2 assumptions?
  - Did they mention green tariff or fossil heating concerns?
regional_variants:
  - Use current Germany emission and tariff assumptions; verify source dates.
evidence_sources: [E01, E10, E12]
limitations: Climate motive is validated, but recent Germany-specific evidence shows it is often not the dominant purchase reason.
product_implication: Keep climate proof as modular asset, not the default strategy.
```

```yaml
persona_id: P04
persona_name: Technical-Control Optimizer
geography: Germany
confidence_rating: medium
primary_motivation: Understand and control how the system performs technically across PV, battery, heat pump, EV charging, tariff, and load profile.
secondary_motivations:
  - Optimize self-consumption
  - Avoid oversizing or wrong components
  - Use smart meters, HEMS, load shifting, or dynamic tariffs
typical_trigger_event:
  - Provides detailed consumption data or smart meter readings.
  - Asks about battery sizing, winter yield, heat-load calculation, tariff modules, or HEMS.
household_context: Can appear in homeowners with technical interest; do not infer from profession or gender unless explicit.
decision_makers: Technical buyer may not be final signer; ask who signs and who reviews technical details.
financial_context: May compare technical options through ROI or performance rather than only total price.
energy_context: High relevance for PV+battery, heat pump, wallbox, HEMS, smart meter, and dynamic tariff quotes.
home_context: Needs precise roof, load, heating, meter cabinet, and electrical scope data.
regional_context: Grid operator and metering rules can materially affect recommendations.
buying_stage: Often active in post-quote technical clarification.
risk_tolerance: Medium; low tolerance for vague answers.
technical_literacy: Medium to high.
trust_level: Built through expertise and admitting constraints.
price_sensitivity: Medium; reacts badly to unexplained premium components.
environmental_motivation: Variable.
resilience_motivation: Variable and explicit only.
status_or_identity_motivation: Not evidenced.
main_objections:
  - "Is this system correctly sized?"
  - "What happens in winter?"
  - "Can I add storage later?"
  - "Is the heat pump suitable for my building?"
hidden_objections:
  - Fear the installer is using a template quote
  - Fear of vendor lock-in
  - Fear of under-specified electrical or hydraulic work
proof_needed:
  - Technical assumptions
  - Load and yield simulation
  - Component rationale
  - Expandability plan
preferred_channels:
  - Technical call
  - Annotated single-line/system diagram
  - Detailed proposal appendix
preferred_tone: Expert, direct, assumption-led.
language_patterns:
  - "kWp"
  - "kWh"
  - "JAZ"
  - "hydraulischer Abgleich"
  - "Zählerschrank"
  - "Smart Meter"
urgency_triggers:
  - Technical dependency such as EV date, heating failure, grid connection, tariff switch
likely_ghosting_signals:
  - Repeated technical questions without commitment
  - Requests more data but no meeting
  - Finds unresolved missing line item
close_readiness_signals:
  - Accepts design assumptions
  - Requests final component list
  - Books site survey or installation slot
messages_that_backfire:
  - Simplified marketing copy
  - Ignoring detailed questions
  - Incorrect units or overconfident yield claims
installer_actions_that_build_trust:
  - Answer with calculations and limits
  - Use diagrams
  - Admit where site survey or heat-load calculation is required
sales_assets_that_help:
  - Design assumptions appendix
  - Component rationale
  - Load-profile simulation
  - Quote completeness checklist
recommended_sequence_shape:
  - Day 1: technical assumptions summary
  - Day 2-3: offer technical Q&A
  - Day 5: revised design or scenario comparison
  - Day 8: decision checklist
recommended_next_actions:
  - Generate technical FAQ from quote data
  - Schedule expert call
  - Request missing building/load fields
debrief_questions:
  - Which technical assumption is unresolved?
  - Did they challenge sizing, components, or installation scope?
  - Is a specialist required?
regional_variants:
  - Grid operator, metering, and local installer practices matter.
evidence_sources: [E08, E10, E11, E14, E15]
limitations: Strong language evidence comes from forums, which overrepresent technical users; validate against CRM notes.
product_implication: The assistant needs a technical clarification mode, not only marketing sequences.
```

```yaml
persona_id: P05
persona_name: Risk and Trust Skeptic
geography: Germany
confidence_rating: high for objections; medium for exact messaging
primary_motivation: Avoid making a costly mistake in a complex, high-ticket home energy decision.
secondary_motivations:
  - Confirm installer reliability
  - Understand offer completeness
  - Avoid policy, subsidy, or building-suitability surprises
typical_trigger_event:
  - Goes silent after quote.
  - Questions price, missing scope, bureaucracy, heat-pump suitability, or installer follow-through.
  - Uploads competitor quote or asks public forum/advisor.
household_context: Can occur in any homeowner segment; not a personality flaw.
decision_makers: May involve partner, external advisor, energy consultant, or forum; ask explicitly.
financial_context: High-cost quotes, unclear financing, or subsidy dependence heighten risk.
energy_context: Especially strong for heat pumps and PV+battery bundles where line-item complexity is high.
home_context: Older heating, meter cabinet, radiator replacement, roof constraints, and electrical work can trigger concern.
regional_context: Local price ranges and subsidy availability should be checked.
buying_stage: Post-quote hesitation, negotiation, or ghosting risk.
risk_tolerance: Low.
technical_literacy: Low to high; skepticism can be rational even without technical depth.
trust_level: Low until proof and next steps are clear.
price_sensitivity: High when quote is not explained.
environmental_motivation: Variable; climate interest does not remove trust concerns.
resilience_motivation: Variable.
status_or_identity_motivation: Not evidenced.
main_objections:
  - "Is this too expensive?"
  - "What is missing from the offer?"
  - "Can I trust these assumptions?"
  - "What if policy or funding changes?"
  - "Will the installer actually deliver?"
hidden_objections:
  - Embarrassment about not understanding the offer
  - Fear of being pressured
  - Waiting for another quote
proof_needed:
  - Clear scope and exclusions
  - Local/reference proof
  - Assumption transparency
  - Named next step and responsible person
preferred_channels:
  - Phone call for reassurance
  - Short written summary after call
  - Annotated quote or checklist
preferred_tone: Patient, transparent, non-pushy.
language_patterns:
  - "zu teuer"
  - "normale Preise"
  - "schön gerechnet"
  - "bauseits"
  - "nochmal prüfen"
urgency_triggers:
  - Only verified facts: quote validity, subsidy deadline, failing heating, scheduled site visit.
likely_ghosting_signals:
  - No reply after price reveal
  - Multiple unanswered technical questions
  - Mentions "need to compare"
  - Asks for documents then stops
close_readiness_signals:
  - Accepts scope explanation
  - Names remaining blocker
  - Requests written next step
messages_that_backfire:
  - Pressure to sign
  - Dismissing competitor or forum concerns
  - Vague "all included" without line items
installer_actions_that_build_trust:
  - Explain what is included/excluded
  - Offer comparison checklist
  - Provide local proof or reference where permissioned
  - Confirm owner/date for next action
sales_assets_that_help:
  - Quote completeness checklist
  - "What happens next" timeline
  - Local reference project
  - Risk register with resolved/unresolved items
recommended_sequence_shape:
  - Day 1: "I noticed the quote is a lot to review" plus scope summary
  - Day 3: call focused on top blocker
  - Day 5: annotated quote and next-step checklist
  - Day 9: one concrete question, then pause if no response
recommended_next_actions:
  - Diagnose financial vs technical vs trust blocker
  - Generate line-item explainer
  - Schedule reassurance call
  - Pause rather than over-message after repeated silence
debrief_questions:
  - What exactly made them hesitate?
  - Did they mention another installer or advisor?
  - Did they distrust the price, the technology, or the process?
regional_variants:
  - Heat-pump price benchmarks should be regional; VZ evidence strongest for Rheinland-Pfalz.
evidence_sources: [E02, E05, E06, E08, E13, E14, E15, E17]
limitations: Public forum/review language is anecdotal, but financial and offer-complexity objections are strongly supported by surveys and offer analysis.
product_implication: Create a ghosting-risk state triggered by unresolved blockers and missing next commitment.
```

```yaml
persona_id: P06
persona_name: Multi-Tech System Builder
geography: Germany
confidence_rating: medium
primary_motivation: Build or phase a household energy system across PV, battery, heat pump, EV charger, and smart control.
secondary_motivations:
  - Use more self-generated power
  - Prepare for EV or heat-pump load
  - Reduce fossil exposure
  - Optimize future upgrades
typical_trigger_event:
  - Quote includes two or more of PV, battery, heat pump, wallbox, HEMS.
  - Customer mentions EV plans, heating replacement, or desire to "do everything once."
household_context: Owner-occupied houses with roof and charging/heating control are strongest fit.
decision_makers: Often needs a roadmap digestible to both technical and financial reviewers.
financial_context: Bundle cost may create sticker shock; phased plan can reduce risk.
energy_context: High annual consumption, EV commute, heat pump, or planned electrification make system logic stronger.
home_context: Roof capacity, meter cabinet, heating system, and parking/charging access are key.
regional_context: Local grid, subsidy, and installer scheduling can determine sequencing.
buying_stage: Quote design through post-quote negotiation.
risk_tolerance: Medium; falls if bundle price is high or dependencies unclear.
technical_literacy: Medium; can be high if asking about HEMS and tariffs.
trust_level: Builds through roadmap clarity.
price_sensitivity: Medium to high because bundles are expensive.
environmental_motivation: Often secondary; explicit climate signals can raise it.
resilience_motivation: Unvalidated unless backup is requested.
status_or_identity_motivation: Not evidenced.
main_objections:
  - "Should we do all products now?"
  - "What can be added later?"
  - "Will this work together?"
  - "Why is the bundle so expensive?"
hidden_objections:
  - Fear of making a wrong sequencing decision
  - Fear of one component blocking the whole project
proof_needed:
  - Integration roadmap
  - Now/later scenario comparison
  - Load impact and self-consumption explanation
  - Dependency checklist
preferred_channels:
  - Visual roadmap
  - Proposal revision
  - Consultation call
preferred_tone: Strategic, staged, practical.
language_patterns:
  - "PV plus Speicher"
  - "Wallbox"
  - "Wärmepumpe"
  - "HEMS"
  - "nachrüsten"
  - "alles auf einmal"
urgency_triggers:
  - EV delivery date
  - Heating failure or age
  - Verified subsidy or tariff deadline
  - Installation sequencing constraints
likely_ghosting_signals:
  - Sticker shock after full bundle quote
  - Asks about removing storage or delaying heat pump
  - Needs another decision-maker summary
close_readiness_signals:
  - Chooses roadmap phase
  - Agrees dependencies
  - Schedules site survey
messages_that_backfire:
  - Treating each product as separate email campaign
  - Overloading customer with every option
  - Saying bundle is mandatory without explaining dependencies
installer_actions_that_build_trust:
  - Provide phased options
  - Explain integration benefits and tradeoffs
  - Identify critical path items
sales_assets_that_help:
  - System roadmap
  - Bundle vs phased financial comparison
  - Dependency checklist
  - Installation timeline
recommended_sequence_shape:
  - Day 1: system diagnosis and recommended path
  - Day 3: roadmap call
  - Day 6: revised scope with optional phases
  - Day 10: confirm phase 1 contract and future tasks
recommended_next_actions:
  - Generate all-at-once vs phased proposal
  - Explain PV as entry technology if applicable
  - Schedule site survey focused on dependencies
debrief_questions:
  - Which product caused hesitation?
  - Did they prefer phased or complete system?
  - What future energy load is confirmed vs hypothetical?
regional_variants:
  - Verify grid, tariff, subsidy, and installer crew constraints per region.
evidence_sources: [E09, E10, E11, E14]
limitations: Strong adoption direction, but post-quote sequencing preferences require CRM validation.
product_implication: Reonic assistant should produce a coherent system strategy, not only individual follow-up emails.
```

## Observable Signals To Avoid

Do not use these as persona triggers without explicit permission and product justification:

- Age, gender, family status, children, income bracket, political view, nationality, or perceived technical ability. Evidence: E16, E18.
- Names, photos, home value, or neighborhood as proxies for willingness to pay.
- Email opens alone as buying intent.

## Best Product Rules From Agent 1

1. If `financial_objection` is detected, next best action should be ROI/proposal clarification before urgency or testimonial.
2. If `battery_interest` plus `payback_question` is detected, ask whether the customer values storage for ROI, autarky, backup, or future flexibility.
3. If `heat_pump_quote` has missing or unclear line items, recommend quote completeness review before sales follow-up.
4. If `multi_product_quote` is high value and stalled, generate a phased roadmap and identify the blocker product.
5. If `stakeholder_review` is explicit or likely from notes, generate a stakeholder summary, but do not infer household roles.
6. If persona scores are mixed, show the installer the top two hypotheses and ask a debrief question after the next contact.
