# Findings: Agent 4

Status: completed.

All findings are Germany-specific unless noted. Time-sensitive items were checked on 2026-06-20.

## Key Findings

| Finding | Geography | Confidence | Source IDs | Date checked | Limitations | Product implication |
| --- | --- | --- | --- | --- | --- | --- |
| Use actual customer electricity tariff for ROI; if missing, a 2026 fallback around 37.0-37.2 ct/kWh is defensible, with the official 2025 BNetzA benchmark around 40.1 ct/kWh as context. | Germany | medium | S04-004, S04-005 | 2026-06-20 | Averages hide regional tariffs, fixed charges, dynamic tariffs, heat-pump tariffs, and supplier differences. | ROI model must show tariff source/date and make the tariff editable. |
| Current BNetzA feed-in tariffs for building PV commissioned 2026-02-01 to 2026-07-31 are 7.78/12.34 ct/kWh for <=10 kW partial/full feed-in, 6.73/10.35 up to 40 kW, and 5.50/10.35 up to 100 kW. | Germany | high | S04-001 | 2026-06-20 | Applies to commissioning window and system class; export rules may reduce effective revenue. | Tariff lookup must be date-, size-, and feed-in-mode-aware. |
| Self-consumption is usually the main economic lever because imported electricity is far more valuable to avoid than exported electricity is to sell. Typical guidance says about 30% direct self-consumption and around 70% with battery, but customer loads can shift this strongly. | Germany | medium | S04-010, S04-011 | 2026-06-20 | Heuristic only; needs load profile, EV, heat pump, roof, battery. | Sequence reasoning should explain "savings come from using your own power" and ask for bill/load data. |
| Typical quote sanity ranges from consumer sources: roughly EUR 12k-25k for a 10 kWp home PV system, EUR 4k-7k for a matching battery, and EUR 400-800/kWh installed for >=5 kWh batteries. | Germany | medium | S04-010, S04-011 | 2026-06-20 | Scope, roof, backup, meter-cabinet work, and installer pricing vary. | Add quote sanity flags, but do not reject high quotes without scope explanation. |
| Batteries need right-sizing; for 3,000 kWh/year household demand, 3-5 kWh is a consumer-guidance starting point, with larger storage more defensible for larger PV, heat pumps, EVs, or high night loads. | Germany | medium | S04-010, S04-011 | 2026-06-20 | Backup-power and future load goals can justify exceptions. | Assistant should warn about oversized batteries and ask future-load questions. |
| Regional production matters: Fraunhofer reports about +/-10% irradiation variation, and PVGIS samples under common assumptions returned 978 kWh/kWp/year in Hamburg vs 1138 in Munich. | Germany, sample cities | high | S04-012, S04-013 | 2026-06-20 | Modeled city samples; actual roof shading/orientation/curtailment can dominate. | Use postcode/coordinates and roof model, not a single national kWh/kWp default. |
| Since 2025-02-25, negative-price rules and Solarspitzengesetz make export-only economics less simple; small residential exposure depends on system size and iMSys status, and 60% feed-in power limits can apply before smart control is installed. | Germany | medium-high | S04-014, S04-015, S04-016 | 2026-06-20 | Legal rules are nuanced; BSW 60% detail is industry guidance and needs legal validation. | Add "export-risk/smart-meter status" to ROI and avoid blanket loss claims. |
| PV/payment paperwork is a real trust lever: PV and batteries must be registered in MaStR within one month, EEG payment readiness depends on complete data/registration, and VNB grid-connection processes are increasingly digital for <=30 kW systems. | Germany | high | S04-002, S04-003, S04-017 | 2026-06-20 | Local VNB workflows differ and can still delay projects. | Build a paperwork checklist and scheduler; let installers show "we handle this." |
| Tax treatment is favorable but date- and eligibility-sensitive: qualifying residential PV has 0% VAT, and for 2025+ systems income-tax exemption can apply up to 30 kWp per unit and 100 kWp per taxpayer/partnership. | Germany | high | S04-006, S04-007 | 2026-06-20 | Edge cases include leasing, repairs, multi-property ownership, ground-mounted systems, and commercial structures. | Assistant can generate a tax-safe explainer but must add eligibility caveats and advisor prompt. |
| Federal financing is mainly KfW 270 for PV/storage; it can finance up to 100% of investment cost but exact rate is bank/date/credit dependent. KfW 442 is closed for new applications. | Germany | high | S04-008, S04-009 | 2026-06-20 | House banks may not approve or may price differently; program status can change. | Recommend financing pre-check before signing; do not quote stale rates or closed grants. |
| Local subsidies vary by state/municipality and can end early; no subsidy amount should be messaged without checking official local program pages for the address. | Germany/local | medium | S04-022, S04-008, S04-009 | 2026-06-20 | co2online is useful but has some stale details; official program pages needed. | Build a "subsidy check needed" state keyed by postcode/municipality. |
| German outreach compliance is strict: consumer advertising calls need prior express documented consent; email/SMS/WhatsApp/direct-message advertising generally needs prior express consent or a narrow existing-customer exception; tracking pixels need separate consent. | Germany | high | S04-018, S04-019, S04-020, S04-021 | 2026-06-20 | Service vs advertising and existing-customer exceptions need legal review. | Channel recommendation must be consent-gated; open/click scoring must be disabled unless tracking consent exists. |

## Suggested Mock CRM Defaults

Use these only as prototype defaults and expose them as assumptions:

| Field | Suggested default | Geography | Confidence | Source IDs | Limitations | Product implication |
| --- | --- | --- | --- | --- | --- | --- |
| `electricity_price_ct_per_kwh` | 37.0 or customer's actual tariff | Germany | medium | S04-004 | Average only; real tariff preferred. | ROI cards must show source/date. |
| `feed_in_tariff_partial_ct_per_kwh` | 7.78 for <=10 kW commissioned 2026-02-01 to 2026-07-31 | Germany | high | S04-001 | Must change by date and size. | Tariff lookup, not hard-coded constant. |
| `specific_yield_kwh_per_kwp_year` | 980 north/Hamburg, 1040 west/central, 1050 Berlin/east, 1140 Munich/south under PVGIS sample assumptions | Germany regional | high | S04-013 | Roof-specific simulation required. | Localize ROI and CO2 estimates. |
| `direct_self_consumption_without_battery_pct` | 30% | Germany | medium | S04-010 | Load profile dependent. | Use as editable assumption. |
| `self_consumption_with_battery_pct` | 60-70% | Germany | medium | S04-010, S04-011 | Depends on battery size and load. | Use range; avoid guaranteed autonomy. |
| `battery_cost_eur_per_kwh` | 400-800 | Germany | medium | S04-011 | Scope/backup/functionality dependent. | Quote sanity check. |
| `opex_percent_of_capex_per_year` | 1-2% | Germany | high | S04-012 | Insurance/warranty/service vary. | Investor-mode ROI assumptions. |
| `mastr_deadline_days_after_commissioning` | 30 days / one month | Germany | high | S04-003 | Workflow can change. | Automatic paperwork deadline. |
| `phone_marketing_consent_required` | true for consumer advertising calls | Germany | high | S04-018, S04-019 | Service-call edge cases need review. | Channel gate. |
| `tracking_consent_required_for_email_pixels` | true by default | Germany | high | S04-020, S04-021 | Specific implementation matters. | Disable open tracking unless consented. |

## Product Rules Worth Carrying Forward

1. The assistant should never compute ROI from feed-in tariff alone; it should prioritize avoided grid electricity, self-consumption, battery sizing, and actual tariff.
2. The assistant should distinguish "quoted economics" from "paperwork readiness": grid request, MaStR, metering, iMSys/control, and VNB payment data are separate states.
3. The assistant should not use artificial urgency. Real urgency can be tied only to verified tariff windows, quote validity, subsidy deadlines, installer capacity, or tax/program changes.
4. Compliance must be a first-class input. Recommended next action should include only channels whose consent state is known and suitable for the message purpose.
5. Any "customer might ghost" prediction based on email opens/clicks is unsafe unless tracking consent exists; use replies, booked calls, explicit proposal views with consent, and installer notes instead.
