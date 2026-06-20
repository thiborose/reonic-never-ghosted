# 07 Channel Timing Action Playbook

Status: completed synthesis on 2026-06-20.

## Action Taxonomy

| Action | Use when | Guardrail | Scheduling rule | Evidence |
| --- | --- | --- | --- | --- |
| Email | Written proof, addendum, finance explainer, shareable summary | Do not rely on open tracking without tracking consent | Batch admin blocks; prioritize promised replies | A6-E03 |
| SMS/WhatsApp | Consent exists and task is short: slot, document, logistics | Consent/opt-in required; avoid long persuasion | Use for quick low-duration tasks | A6-E04 |
| Call | Complex ROI/trust/competitor/technical blocker and consent/request exists | Call purpose and agenda must be clear | 10-20 min slots; reserve owner time for high-value cases | A6-E05 |
| Voicemail | Missed eligible/requested call | Keep factual and minimal | Cap attempts, then pause/switch channel | A6-E06 |
| Personalized video | Visual explanation helps co-decision-maker or technical review | Hypothesis; claim checks and tracking consent needed | Use when it can replace live time or visit | A6-E07 |
| Revised proposal | Scope/assumptions/line items/variants unclear | Do not revise if blocker is consent/trust/no decision-maker | Prioritize active comparisons and expiring quotes | A6-E08 |
| Financing explainer | Upfront cost/monthly burden/finance question | No stale rates or implied approval | Route to finance-capable owner | A6-E09 |
| Document request | Missing bill, tariff, photos, heat-load data, competitor quote | Ask only for facts that unlock a safe claim/action | Use portal/email/short channel if eligible | A6-E10 |
| Virtual consultation | Screen-share can resolve ROI/variant/winter/partner review | Avoid if physical inspection is required | Prefer over visit when travel is high | A6-E11 |
| In-person visit | Physical risk, heat-load/building fit, trust repair, high value/readiness, route cluster | Do not use for stale low-readiness leads | Require visit purpose and travel/route check | A6-E12 |
| Pause/no follow-up | Opt-out, requested review time, no value-add, repeated stale touches | Do not pause promised replies | Set resume condition | A6-E13 |
| Escalation | Technical/legal/finance/manager issue exceeds owner authority | Avoid unnecessary handoff | Assign skill owner and SLA | A6-E14 |

## Prototype Priority Formula

Use as an explainable PoC heuristic, not a validated model:

```text
priority_score =
  consent_allowed
  + customer_initiated_or_promised_next_step
  + real_deadline
  + blocker_can_be_resolved_now
  + close_readiness_hypothesis
  + lead_value
  + route_cluster_fit
  - travel_time_penalty
  - repeated_no_response_penalty
  - missing_data_penalty
  - pressure_or_opt_out_risk
```

## Debrief Template

Required:

- Did the action happen?
- What did the customer say or do?
- Which blocker is resolved, changed, or still active?
- What is the next commitment and due date?
- Outcome label: signed, still evaluating, needs data, competitor risk, lost price, lost trust, paused, no response.

Optional:

- Customer wording.
- New competitor/price anchor.
- New decision-maker/advisor.
- Missing proof asset.
- Installer override reason.

## Compliance Gate

Before any action draft:

1. Check purpose: service response, quote clarification, or advertising/marketing.
2. Check channel consent and opt-out.
3. Check tracking consent before using opens/clicks/video views.
4. Check claim source/date for ROI, subsidy, tariff, finance, timeline, urgency, or proof asset.
5. If blocked, recommend compliant alternative.
