# 11 Data Dictionary

Status: completed synthesis on 2026-06-20.

## Core Objects

| Object | Required fields | Why |
| --- | --- | --- |
| `installer` | company_id, company_size, region, owner_capacity, working_hours, service_area, proof_asset_inventory, legal_template_status | Actions must match installer capacity, proof assets, and approved claims |
| `user_owner` | user_id, role, calendar, skills, branches, phone/email, availability | Assign calls, visits, proposal revisions, escalations |
| `customer` | customer_id, name, language, preferred_formality, address, postcode, explicit motives, stated concerns, decision_makers_note | Germany localization and persona/blocker detection |
| `household` | home_type, ownership_status, roof orientation/tilt/shading/age, roof_photo_status, meter_photo_status, heating type/age, EV plan | Technical proof and missing-data routing |
| `energy_context` | annual_consumption_kwh, current_electricity_ct_per_kwh, tariff_source, bill_date, heat_demand_kwh, expected_future_loads | ROI, battery, heat pump, monthly-burden claims |
| `quote` | quote_id, status, sent_at, opened_at, valid_until, signature_state, selected_option, variants, line_items, exclusions | Quote-stage diagnosis |
| `quote_option` | product_scope, pv_kwp, battery_kwh, wallbox, heat_pump_scope, net/gross price, financing_terms, subsidy_status, feed_in_mode | Product-specific proof and objections |
| `assumptions` | annual_yield, yield_source, self_consumption_pct, feed_in_tariff, opex, degradation, checked_at | Claim safety and ROI transparency |
| `communication` | assigned_owner, last_contact_at, last_reply_at, unanswered_questions, competitor_mentions, attempt_history, sentiment | Sales-process state and trust signals |
| `consent` | phone, email, sms, whatsapp, tracking, source, timestamp, scope, opt_out | Germany channel gating |
| `engagement` | portal_events, document_uploads, proposal_views, section_views, tracking_consent_status | Engagement hypotheses and missing data; do not score if tracking not consented |
| `strategy` | motive_scores, blocker_scores, primary_blocker, confidence, evidence_chips, missing_data, claim_status | Explains recommendation |
| `action` | action_id, type, reason, prep_assets, owner, duration, due_at, channel, compliance_checks, success_criteria | Next Best Action execution |
| `calendar` | available_slots, conflicts, travel_time, route_cluster_score, virtual_alternative, override_reason | Capacity-aware scheduling |
| `debrief` | completed, response, customer_language, new_facts, resolved/remaining_objection, next_commitment, outcome_label, lost_reason | Learning loop |
| `market_fact` | fact_type, value, source_url, checked_at, valid_from, valid_until, geography, customer_specificity | Time-sensitive tariff/subsidy/finance/tax claims |
| `proof_asset` | type, title, source, permission_status, project_similarity, geography, checked_at, approved_for_customer_use | Local proof and trust repair |

## Enumerations

`primary_blocker`:

- proposal_clarity
- upfront_price
- liquidity_financing
- roi_assumptions
- competitor_comparison
- trust_pressure
- responsiveness_gap
- battery_value
- winter_performance
- heat_pump_monthly_burden
- roof_property_risk
- paperwork_grid_admin
- aftercare_support
- stakeholder_review
- no_response_unknown

`action_type`:

- email
- sms_or_whatsapp
- call
- voicemail
- personalized_video
- revised_proposal
- financing_explainer
- document_request
- virtual_consultation
- in_person_visit
- pause
- escalation

`outcome_label`:

- signed
- still_evaluating
- needs_data
- blocker_resolved
- competitor_risk
- lost_price
- lost_trust
- not_interested
- no_response
- paused

## Required Metadata

- Every generated claim should include `source_ids`, `checked_at`, `confidence`, and `customer_visible`.
- Every channel recommendation should include consent status and purpose.
- Every predictive score should include factor-level explanation and "hypothesis" label until calibrated.
