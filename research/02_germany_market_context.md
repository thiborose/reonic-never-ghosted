# 02 Germany Market Context

Status: completed synthesis on 2026-06-20.

## Market And Economics Findings

| Finding | Evidence | Confidence | Product implication |
| --- | --- | --- | --- |
| ROI should use the customer's actual electricity tariff; fallback averages are only assumptions. | A4 key finding 1 | Medium | Show tariff source/date and make it editable |
| Current BNetzA feed-in tariffs depend on commissioning date, system size, and feed-in mode. | A4 key finding 2 | High | Add tariff lookup/fact freshness, not a hard-coded constant |
| Self-consumption is the main economic lever because avoided grid electricity is usually worth more than exported electricity. | A4 key finding 3 | Medium | Explain savings through self-use, battery sizing, and load profile |
| Consumer quote sanity ranges exist but are scope-dependent. | A4 key finding 4 | Medium | Use only as a "scope check", not a price accusation |
| Battery economics require right-sizing and future-load context. | A4 key finding 5 | Medium | Ask about EV, heat pump, night loads, and autonomy motive |
| Regional production matters materially. | A4 key finding 6 | High | Use postcode/roof simulation instead of national yield defaults |
| Negative-price/export rules and smart-meter/control status complicate export-only economics. | A4 key finding 7 | Medium-high | Avoid simple export-payback claims |
| MaStR, VNB/grid, metering, and payment paperwork are trust levers. | A4 key finding 8 | High | Show owner/status checklist and proactive updates |
| Tax and VAT treatment can be favorable but eligibility-sensitive. | A4 key finding 9 | High | Add caveats and source/date metadata |
| KfW 270 is the core federal financing path; exact rates are live and credit-dependent. | A4 key finding 10 | High | Do not quote stale rates; route to finance check |
| Local subsidies vary and can close. | A4 key finding 11 | Medium | No subsidy claim without address-level official check |
| German outbound and tracking compliance is strict. | A4 key finding 12 | High | Implement consent-gated channels and tracking restrictions |

## Numeric Defaults For Mock Records

Use these as visible assumptions only:

| Field | Suggested mock default | Evidence |
| --- | --- | --- |
| Electricity price | Customer tariff; fallback around 37.0-37.2 ct/kWh if missing | A4 |
| Feed-in tariff <=10 kW partial feed-in | 7.78 ct/kWh for 2026-02-01 to 2026-07-31 commissioning window | A4 / BNetzA |
| Feed-in tariff <=10 kW full feed-in | 12.34 ct/kWh for the same window | A4 / BNetzA |
| Direct self-consumption without battery | 30% assumption | A4 |
| Self-consumption with battery | 60-70% assumption range | A4 |
| Regional yield | About 980 kWh/kWp north/Hamburg sample; about 1140 Munich/south sample | A4 / PVGIS sample |
| Battery installed cost | EUR 400-800/kWh for >=5 kWh systems | A4 consumer-source synthesis |
| Opex | 1-2% of capex per year | A4 |
| MaStR deadline | One month after commissioning | A4 |

## Compliance Rules

- Calls to consumers for advertising require prior express documented consent.
- Email, SMS, WhatsApp, and direct-message advertising generally require prior consent or a narrow exception.
- Tracking pixels/open tracking require separate consent handling.
- The product must separate service-context replies from marketing/advertising and get legal review.
- If consent is missing or opt-out exists, suppress the channel and recommend a compliant alternative.

## Product Risks

- Electricity prices, feed-in tariffs, subsidies, finance rates, tax rules, and VNB processes are time-sensitive.
- Generated copy must show `checked_at`, source, validity window, and whether the claim is safe for homeowner-facing use.
- Market facts should be refreshed at runtime or manually checked before demos that include current-rate claims.
