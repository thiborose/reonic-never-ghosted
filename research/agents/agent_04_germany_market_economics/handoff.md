# Handoff: Agent 4

## Status

- Completed:
  - Germany-specific electricity price benchmarks, EEG feed-in tariffs, export/negative-price rules, regional yield assumptions, tax treatment, financing, local subsidy caveats, battery/PV economics, grid/registration paperwork, and outreach/privacy rules.
  - Source records, evidence items, synthesized findings, and open questions in the assigned folder.
- Partially completed:
  - Regional subsidies: gathered reliable "must check locally" evidence and examples, but did not verify each municipality against official live program pages.
  - 60% Solarspitzengesetz detail: captured Clearingstelle negative-price rules and BSW 60% guidance; productization needs legal validation against statute/VNB practice.
- Not completed:
  - No official full Germany-wide municipal subsidy database extraction.
  - No live quote dataset from German installers.
  - No legal counsel review of channel rules or tax copy.

## Most Important Findings

- Finding: German residential PV economics should default to avoided electricity purchase, not export revenue. Market fallback electricity price is around 37 ct/kWh checked 2026-06-20, while current fixed feed-in for <=10 kW partial feed-in is 7.78 ct/kWh for the 2026-02-01 to 2026-07-31 commissioning window.
  - Confidence: medium for retail price, high for tariff
  - Germany relevance: direct
  - Source IDs: S04-001, S04-004, S04-005
  - Product implication: ROI requires actual tariff, system size, commissioning date, and feed-in mode.

- Finding: Region matters. PVGIS samples under one consistent setup range from about 978 kWh/kWp/year in Hamburg to 1138 kWh/kWp/year in Munich.
  - Confidence: high
  - Germany relevance: direct regional economics
  - Source IDs: S04-012, S04-013
  - Product implication: Use postcode/coordinates and roof inputs; never one national yield constant.

- Finding: Export rules changed meaningfully after 2025-02-25. Negative-price remuneration rules and smart-meter/control status can affect export economics; 60% feed-in power caps may apply before iMSys/control installation.
  - Confidence: high for negative-price rule, medium for 60% detail
  - Germany relevance: direct
  - Source IDs: S04-014, S04-015, S04-016
  - Product implication: Add smart-meter/export-risk state and avoid blanket "guaranteed export revenue" messages.

- Finding: Paperwork is a product opportunity. MaStR registration within one month, VNB connection request, required metering, and payment data are concrete tasks that reduce homeowner anxiety.
  - Confidence: high
  - Germany relevance: direct
  - Source IDs: S04-002, S04-003, S04-017
  - Product implication: Add a post-quote/post-signature checklist with deadlines and owner assignments.

- Finding: Outreach channels must be consent-gated in Germany. Advertising calls require prior express documented consent; email/SMS/WhatsApp/direct-message advertising generally requires prior express consent or a narrow existing-customer exception; tracking pixels require separate consent.
  - Confidence: high
  - Germany relevance: direct
  - Source IDs: S04-018, S04-019, S04-020, S04-021
  - Product implication: The assistant should recommend only legally eligible channels and should not use open/click tracking for scoring without tracking consent.

## Strongest Sources

- Source ID: S04-001
  - Why it matters: Official BNetzA tariff table for current EEG feed-in rates.
- Source ID: S04-015
  - Why it matters: Current Clearingstelle guidance on negative-price remuneration rules, checked by source on 2026-06-15.
- Source ID: S04-017
  - Why it matters: Official BNetzA network-connection FAQ updated 2026-06-19.
- Source ID: S04-006 and S04-007
  - Why it matters: Tax treatment from BMF and state tax authority, including updated 2025+ 30 kWp/unit income-tax rule.
- Source ID: S04-018, S04-019, S04-020, S04-021
  - Why it matters: Compliance guardrails for the multi-channel assistant.

## Weak Or Risky Claims

- Claim: Exact financial impact of the 60% feed-in power cap for residential systems.
  - Why weak: BSW cites HTW simulation, but source is industry guidance and impact depends on roof, battery, load, smart meter, and remuneration form.
  - How to validate: Use statute/legal review plus HTW/source simulation or Reonic model output.

- Claim: Local subsidy availability and amounts.
  - Why weak: Local programs change quickly and co2online explicitly notes programs can end early.
  - How to validate: Query official state/municipal program pages by postcode at sequence generation time.

- Claim: Battery payback from generic EUR/kWh ranges.
  - Why weak: Backup features, dynamic tariffs, future EV/heat pump use, and replacement assumptions can change economics.
  - How to validate: Use installer quotes and actual load profiles; compare with HTW calculator or Reonic simulation.

## Product Implications

- Persona implications:
  - Investor: show assumptions, LCOE, tariff, export rules, financing, and sensitivity analysis.
  - Family/security: emphasize predictable bills, paperwork support, and avoiding surprise registration/payment delays.
  - Skeptic: show official sources, date-checked tariff/tax facts, and roof-specific assumptions.
  - Environmentalist: local production/yield and self-consumption are safe; CO2 claims need a separate Germany grid-emissions source before final copy.

- Objection implications:
  - "The feed-in tariff is too low" should be answered by shifting to self-consumption and avoided grid cost.
  - "My roof is not south-facing" should be answered with east-west usable-production logic and a local simulation.
  - "Will subsidies/tax make this cheaper?" needs date-checked federal tax/KfW facts and local subsidy verification.
  - "Is the paperwork painful?" should trigger a concrete checklist, not vague reassurance.

- Action and scheduling implications:
  - Pre-close: request latest electricity bill, roof inputs, EV/heat-pump plans, financing need, and consent status.
  - Post-close: schedule VNB request, meter check, MaStR registration deadline, KfW application timing if applicable, subsidy application before order if local program requires it.

- Data model implications:
  - Add market fields: `electricity_price_ct_per_kwh`, `tariff_source`, `feed_in_mode`, `expected_commissioning_date`, `pv_kwp`, `specific_yield_source`.
  - Add grid fields: `vnb_name`, `vnb_request_status`, `meter_change_required`, `imsys_installed`, `control_box_installed`, `feed_in_cap_active`.
  - Add tax/finance fields: `vat_zero_rate_eligible`, `income_tax_exemption_likely`, `taxpayer_total_pv_kwp`, `kfw270_precheck_status`, `local_subsidy_verified_at`.
  - Add consent fields: per-channel marketing consent, scope, source, timestamp, opt-out, and separate tracking consent.

- UX implications:
  - Show an "Assumptions and Date Checked" drawer beside every ROI claim.
  - Use badges: `Verified tariff`, `Actual bill used`, `Local subsidy unverified`, `Tracking disabled`, `Phone consent missing`.
  - Keep compliance guardrails visible to installer: "Recommended channel unavailable because WhatsApp marketing consent is missing."

- Compliance implications:
  - Do not generate cold-call scripts for consumer prospects without phone-marketing consent.
  - Do not generate WhatsApp/SMS/email advertising unless consent or a reviewed existing-customer exception is present.
  - Do not use email opens/clicks/proposal tracking as intent signals unless tracking consent exists.

## Handoff To Product Synthesis

- Recommended product rule: `roi_basis = actual_customer_tariff if available else market_average_with_date`; show source and editable assumptions.
- Recommended product rule: `channel_allowed(channel, purpose)` must evaluate consent, opt-out, legal basis, and tracking consent separately.
- Recommended product rule: `export_revenue_confidence` should drop when commissioning_date >= 2025-02-25 and iMSys/control/export-rule status is unknown.
- Required mock data: German postcode/city, roof orientation/tilt, expected commissioning date, actual electricity tariff, annual kWh, PV kWp, battery kWh, feed-in mode, iMSys/control status, MaStR status, VNB status, KfW/local subsidy status, consent matrix.
- Required UI state: "Economics stale" warning when tariff/feed-in/subsidy facts are older than a configured threshold or after next BNetzA tariff window.
- Open question: Which Reonic/installer data fields already contain VNB, MaStR, and consent status?
