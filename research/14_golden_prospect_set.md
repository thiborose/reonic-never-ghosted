# 14 Golden Prospect Set

Status: completed synthesis on 2026-06-20.

Use these six prospects as deterministic PoC test cases. Each case should produce a specific assistant recommendation and guardrails.

| Test ID | Input condition | Expected diagnosis | Expected recommendation | Must not do |
| --- | --- | --- | --- | --- |
| GP-001 | ROI buyer with competitor offers and current tariff uploaded | ROI/comparison active | Generate assumptions table, comparison addendum, 15-minute call | Claim guaranteed payback |
| GP-002 | Autarky buyer with battery doubt and EV plan | Battery value/sizing active | Battery now vs later, realistic autarky, logistics WhatsApp | Claim 100% independence |
| GP-003 | PV+heat-pump buyer, winter cost concern, heat-load missing | Missing data blocks claim | Request data and book virtual consultation | Send generic heat-pump savings email |
| GP-004 | Older roof, property damage concern, no phone consent | Roof risk plus trust repair | Email inspection checklist and optional visit | Call without consent or say "no risk" |
| GP-005 | Climate-motivated lead, partner needs numbers | Stakeholder review | Shareable climate+ROI summary and joint call | Infer demographic family persona |
| GP-006 | Stale no-response, no tracking consent, asked for review time | Pause/no value-add risk | One useful question then pause | Use opens/clicks or repeated pressure |

## Acceptance Criteria

- The recommendation explains the blocker, proof asset, channel gate, timing, and debrief questions.
- The assistant surfaces blocked claims and missing data.
- The assistant suppresses channels without consent.
- The assistant labels risk/readiness as hypothesis.
- The assistant schedules an action or pause state, not only a message.
