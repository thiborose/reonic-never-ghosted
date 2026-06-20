# 05 Voice Of Customer

Status: completed synthesis on 2026-06-20.

## Evidence Base

The VOC workstream used German public PV installer reviews, ProvenExpert/Trustpilot-style review surfaces, Germany/DACH forums, Reddit, consumer advice, and complaint reporting. These sources are used for language and objection classes, not frequency ranking.

## Core VOC Patterns

| Pattern | Customer signal | Product implication | Confidence |
| --- | --- | --- | --- |
| Pressure breaks trust | Pushy close, unclear seller identity, informal tone mismatch | Clear identity, professional `Sie`, low-pressure CTA | Medium |
| Responsiveness builds trust | Quick competent answers, same contact person, clear next step | Track response age and unanswered questions | Medium |
| Good consultation can still lose | Cheaper competitor, referral, clearer offer | Ask about competitors and generate comparison matrix | Medium |
| Bundled offers create suspicion | PV/battery/wallbox/labor/scaffold/grid/admin unclear | Proposal clarity score and itemized addendum | High |
| ROI claims are challenged | Payback feels "schoen gerechnet" or inconsistent | Assumptions drawer and sensitivity analysis | Medium |
| Financing solves liquidity but raises scrutiny | Monthly rate, rental, long-term obligations | Separate liquidity from total value and risk transfer | Medium |
| Battery is mixed | Autarky motive plus payback/sizing/winter doubts | Battery now vs battery-ready-later comparison | Medium |
| Winter/heat-pump nuance matters | Winter output, cloudy weather, heat-pump load | Seasonal production and monthly burden view | Medium |
| Roof and property risk matter | Leak/damage/mounting/warranty concern | Inspection checklist, mounting proof, insurance/warranty boundaries | Medium |
| External delays hurt trust | VNB, grid, meter, delivery, handoffs | Dependency owner/status updates | Medium |
| "All-in" needs specificity | Convenience promise can be praise or warning | Responsibility matrix over vague claims | Medium |
| Aftercare affects pre-contract trust | Monitoring, handover, callbacks, support concerns | Aftercare proof and support expectations | Medium |
| Co-decision-makers may exist | Partner/family/advisor review | Ask explicitly; shareable summary | Low-medium |

## Detection Tags

Recommended tags:

- `trust_pressure`
- `responsiveness_gap`
- `same_contact_needed`
- `price_loss_risk`
- `referral_risk`
- `comparison_overload`
- `bundle_suspicion`
- `roi_skepticism`
- `price_shock`
- `liquidity`
- `battery_doubt`
- `winter_wp`
- `operating_cost`
- `roof_risk`
- `external_delay`
- `all_in_scope`
- `aftercare`
- `decision_helper`

## Product Translation

- If the latest signal contains price/ROI/battery/winter language, recommend proof or calculation before promotional copy.
- If the latest signal contains trust/pressure/service language, recommend human trust repair and responsibility proof.
- If proposal clarity is low, recommend itemized proposal revision before sequence continuation.
- Do not rank objections by public review/forum frequency.
