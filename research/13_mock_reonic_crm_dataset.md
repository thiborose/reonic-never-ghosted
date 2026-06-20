# 13 Mock Reonic CRM Dataset

Status: completed synthesis on 2026-06-20.

These are source-informed prototype records, not real Reonic customer data. Numeric values are mock assumptions designed to exercise evidence-backed product logic.

## Dataset Summary

| ID | Region | Quote scope | Quote value | Main blocker | Consent state | Recommended action |
| --- | --- | --- | --- | --- | --- | --- |
| MC-001 | Munich, Bavaria | 9.8 kWp PV + 10 kWh battery | EUR 28,900 gross | ROI/payback and competitor comparison | Email yes, phone yes, tracking yes | ROI assumptions review plus comparison addendum |
| MC-002 | Hamburg | 12.4 kWp PV + 12 kWh battery + wallbox | EUR 35,400 gross | Battery value and realistic autarky | Email yes, WhatsApp opt-in, phone no | Battery now vs later video and WhatsApp slot confirmation |
| MC-003 | Cologne, NRW | 8.5 kWp PV + 7.7 kWh battery + heat pump | EUR 49,800 gross | Winter/monthly burden and missing heat-load proof | Email yes, phone yes, tracking no | Document request then virtual consultation |
| MC-004 | Leipzig, Saxony | 7.2 kWp PV on older roof | EUR 19,600 gross | Roof/property risk and trust | Email yes, phone no, tracking no | Roof inspection checklist and site-visit option via email |
| MC-005 | Freiburg, Baden-Wuerttemberg | 10.5 kWp PV + 8 kWh battery | EUR 31,200 gross | Climate motive plus partner ROI review | Email yes, phone yes, tracking yes | Stakeholder summary and joint ROI call |
| MC-006 | Berlin | 6.8 kWp PV, battery optional | EUR 18,900 gross | Stale no-response, advisor comparison unknown | Email yes, phone no, WhatsApp no, tracking no | One value-add question, then pause |

## Scenario Details

### MC-001 ROI And Competitor Comparison

- Evidence tags: `motive_roi_score=high`, `roi_assumption_blocker=true`, `competing_offer_count=2`, `proposal_clarity_score=medium`.
- Market assumptions: 39 ct/kWh customer tariff from uploaded bill; BNetzA feed-in tariff checked 2026-06-20; Munich/south yield assumption needs roof validation.
- Assistant should:
  - Explain that the customer is comparing ROI, not ignoring the quote.
  - Generate an assumptions table and competitor-scope checklist.
  - Schedule a 15-minute assumptions call.
  - Debrief competitor price gap and whether payback concern was resolved.

### MC-002 Autarky And Battery Now Vs Later

- Evidence tags: `motive_independence_score=high`, `battery_value_blocker=true`, `future_load_ev=true`.
- Customer note: wants "as independent as possible" but asks whether the battery is oversized.
- Assistant should:
  - Produce a battery now vs battery-ready-later comparison.
  - Show realistic seasonal self-consumption/autarky assumptions.
  - Use WhatsApp only for logistics because opt-in exists.
  - Debrief target autarky and budget ceiling.

### MC-003 Heat Pump Monthly Burden

- Evidence tags: `winter_chart_needed=true`, `heat_load_status=missing`, `roi_claim_blocked_missing_assumptions=true`.
- Customer note: worried that the heat pump will raise winter electricity bills.
- Assistant should:
  - Block generic savings copy.
  - Request heat-load inputs and current gas/electricity bill.
  - Schedule a virtual consultation after data is available.
  - Debrief whether monthly burden or building fit remains the blocker.

### MC-004 Roof And Trust Repair

- Evidence tags: `roof_property_risk=true`, `trust_risk_score=high`, `phone_consent=false`.
- Customer note: roof is older; asks who pays if tiles break.
- Assistant should:
  - Suppress phone call.
  - Send eligible email with inspection checklist, mounting method explanation, warranty/insurance boundaries, and site-visit option.
  - Do not claim "no risk".
  - Debrief whether a visit was requested.

### MC-005 Climate Plus Partner ROI

- Evidence tags: `motive_climate_score=high`, `stakeholder_review_state=true`, `motive_roi_score=medium`.
- Customer note: primary contact cares about CO2; partner wants payback proof.
- Assistant should:
  - Generate a shareable summary with impact and ROI assumptions.
  - Invite both stakeholders to a joint call.
  - Avoid treating "family" as an inferred persona; use explicit partner note.

### MC-006 Stale No-Response

- Evidence tags: `no_response_unknown=true`, `tracking_consent=false`, `competitor_comparison_active=unknown`.
- Timeline: quote sent 12 days ago, one reply requesting time to review, no consented phone/WhatsApp.
- Assistant should:
  - Avoid open/view scoring.
  - Send one eligible value-add email asking which question would help most: price comparison, assumptions, or installation timeline.
  - Pause for 10 days if no response and no real deadline exists.

## Dataset Rules

- All records include consent matrix, claim metadata, and debrief placeholders.
- All ROI and market facts show `checked_at`.
- Tracking-derived engagement is blank or ignored when tracking consent is false.
- The dataset is intentionally small but covers the highest-priority evidence-backed scenarios.
