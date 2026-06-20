# 15 Product Implications

Status: completed synthesis on 2026-06-20.

## Product Requirements

| Requirement | Evidence | Confidence | PoC priority | Notes |
| --- | --- | --- | --- | --- |
| Next Best Action card on quoted-customer view | A0, A3, A6, A7 | Medium-high | P0 | Main demo surface |
| Motive and blocker scoring | A1, A2, A3 | High for ROI/risk | P0 | Explainable chips, not opaque personas |
| Proposal clarity score | A2, A3, A6 | High | P0 | Routes to addendum before copy |
| Claim checker | A4, A5, A3 | High | P0 | Source/date for market-sensitive claims |
| Consent-gated channel generator | A4, A5, A6 | High | P0 | Hard gate for calls/SMS/WhatsApp/email/tracking |
| Action scheduler | A6, A3 | Medium-high | P0 | Duration, owner, travel, virtual alternative |
| Debrief loop | A3, A6, A7 | High | P0 | Learning and outcome instrumentation |
| Mock Reonic CRM envelope | A0, A4, A7 | High | P0 | Needs Reonic-like fields |
| Proof asset library | A2, A5 | Medium | P1 | Permissioned local projects, reviews, warranty/service docs |
| A/B test framework | A5, A7 | Medium | P1 | Contract-relevant outcomes, guardrails |
| Predictive risk/readiness | A0, A5, A6, A7 | Low until outcome data | P1 | Label as hypothesis |

## UX Implications

- First screen should be the usable assistant inside a quoted-customer workflow, not a landing page.
- Show: diagnosis, top evidence chips, recommended action, why now, consent/channel status, proof asset, schedule slot, and debrief.
- Use warning states for missing data, stale facts, missing consent, and unsafe claims.
- Provide one recommended action plus alternatives.
- Keep debrief to three required choices plus optional note.

## Engineering Implications

- Build rule-based strategy engine first.
- Store source IDs and checked timestamps for claims.
- Separate send consent from tracking consent.
- Keep action records and debrief records structured for later outcome learning.
- Make Reonic API integration mockable: customer, quote, option, communication, consent, calendar, action, debrief, market fact, proof asset.
- Use a deterministic golden prospect set for QA.

## Evaluation Metrics

| Metric | Why |
| --- | --- |
| Next step booked | Measures movement after quote |
| Completed action | Measures installer execution |
| Signed contract | Primary business outcome |
| Lost reason captured | Improves model and sales process |
| Time to next action | Measures follow-through |
| Proposal revision completed | Measures proof work |
| Opt-out/complaint rate | Guardrail metric |
| Consent violation count | Must be zero |
| Debrief completion rate | Determines learning quality |

## Gaps

- Need Reonic private schema and consent storage details.
- Need legal review for German post-quote communication categories.
- Need internal outcomes for predictive scoring and cadence.
- Need installer interviews to validate capacity and debrief UX.
- Need official live checks for subsidy, finance, tariff, and local grid facts at message generation time.
