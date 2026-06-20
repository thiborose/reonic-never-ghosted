# 04 Personas

Status: completed synthesis on 2026-06-20.

## Persona Model

Research supports multi-label motive and blocker scores, not fixed demographic personas. The prompt's "family" persona should be treated as an explicit stakeholder-review state, not inferred from household composition.

## Recommended Scores

| Score | Signals | Use |
| --- | --- | --- |
| `motive_roi_score` | Payback, amortization, electricity price, financing, subsidy, competitor price, "lohnt sich" | ROI proof and assumptions review |
| `motive_independence_score` | Autarky, own power, battery, EV charging, supplier independence | Autarky/self-consumption explanation |
| `motive_climate_score` | CO2, sustainability, renewable heating, green power | Impact card paired with economics unless climate is explicit |
| `motive_system_score` | PV plus battery/EV/heat pump/HEMS, phased roadmap | System roadmap and future-load branch |
| `risk_financial_score` | High total, financing need, subsidy uncertainty, payback doubts | Finance/ROI proof |
| `risk_offer_trust_score` | Missing line items, unclear scope, pressure, competitor offers, installer reliability concern | Proposal clarity or trust repair |
| `risk_policy_building_score` | GEG/funding questions, old heating, building suitability, grid/feed-in concerns | Building/process proof |
| `stakeholder_review_state` | Partner/family/advisor explicitly mentioned | Shareable summary or joint call |

## Persona Cards For PoC

| Persona / state | Motivation | Main blocker | Best proof/action | Confidence |
| --- | --- | --- | --- | --- |
| ROI and Cost-Control Planner | Reduce energy costs and understand payback | Assumptions, quote comparison, upfront price | ROI sensitivity card, comparison matrix, assumptions call | High |
| Independence and Autarky Optimizer | Use own power, reduce supplier dependence | Battery size/value, realistic autarky, winter limits | Autarky chart, battery now vs later, system roadmap | High for PV motive; medium for battery behavior |
| Climate Impact Confirmer | Reduce emissions and support renewable transition | Needs impact framed credibly, often still cares about cost | CO2 impact card plus economics | Medium |
| Technical-Control Optimizer | Understand components, design, yield, integrations | Unclear technical assumptions or system choices | Technical call/video, design diagram, seasonal chart | Medium |
| Multi-Tech System Builder | PV plus storage/EV/heat pump/future loads | Bundle complexity, high price, phasing | Phased roadmap and option comparison | Medium |
| Risk and Trust Skeptic | Avoid bad investment, damage, delays, unreliable installer | Trust, scope, aftercare, paperwork, proof | Named expert, responsibility matrix, local proof, low-pressure CTA | High for risk dimension |
| Stakeholder Review State | Another person/advisor must review | Internal alignment delay | Shareable summary, joint call invite | Medium when explicit; unknown as demographic persona |

## Guardrails

- Do not infer family status, income, age, gender, vulnerability, or technical literacy from indirect signals.
- Let explicit customer notes override inferred persona scores.
- Use personas to choose proof and next action, not to manipulate.
- Show confidence and the evidence chips that led to the classification.
