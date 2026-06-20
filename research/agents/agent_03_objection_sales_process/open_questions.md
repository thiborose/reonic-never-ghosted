# Open Questions: Agent 3 - Objection And Sales Process

Status: completed initial open-question log on 2026-06-20.

## Reonic / Installer Validation

| Question | Why it matters | Needed evidence | Priority |
| --- | --- | --- | --- |
| Which objection categories are most common in actual Reonic-connected post-quote notes and lost deals? | Public sources identify categories but not prevalence. | CRM notes, lost reasons, call summaries, debrief tags. | high |
| Which actions actually increase quote-to-contract conversion for small and mid-sized installers? | The playbook is evidence-informed but not outcome-calibrated. | Historical action/outcome data or PoC experiment. | high |
| How often do Reonic installers already use phone, WhatsApp, email, in-person visits, and customer portal messages after quote? | Channel recommendations must match real workflow. | Reonic usage telemetry or installer interviews. | high |
| What counts as a service message vs advertising in Reonic's legal interpretation for post-quote follow-up? | Germany channel gates depend on purpose and consent. | Legal review of exact flows and templates. | high |
| What minimum debrief can owner-led installers complete reliably? | Debrief is essential but can become workflow friction. | Prototype usability test and installer interview. | high |

## Data And Model Gaps

| Question | Why it matters | Needed evidence | Priority |
| --- | --- | --- | --- |
| Are offer opens, section views, or portal events predictive of signing after controlling for consent and lead quality? | Predictive insight is a bonus but currently weak. | Outcome-linked engagement data with tracking consent. | medium |
| What travel-time threshold makes in-person visits uneconomic for small installers? | Calendar logic should protect scarce capacity. | Installer calendar, drive time, quote value, close outcome. | medium |
| Which competitor-comparison fields matter most: price, components, warranty, timeline, financing, local trust, or service scope? | Comparison matrix should not overload the buyer. | Lost reasons, competitor quotes, debriefs. | medium |
| How often does battery removal/addition change close probability? | Battery objection handling is nuanced. | Quote variants, signed configuration, debrief reasons. | medium |
| How often does co-decision-maker review delay signing? | Stakeholder state is plausible but not prevalence-validated. | Email forwards, notes, meeting participants, debriefs. | medium |

## Current-Fact Validation

| Question | Why it matters | Needed evidence | Priority |
| --- | --- | --- | --- |
| What current local subsidies apply by address on the day a message is generated? | Subsidy claims are volatile and local. | Official state/municipal pages, checked timestamp. | high |
| What financing rates and eligibility apply for the installer's finance partner? | Financing messages can become misleading quickly. | Bank/KfW/partner API or official current pages. | high |
| Which VNB/grid-registration steps and timelines apply for the customer's location? | Admin status is a trust lever but varies locally. | VNB-specific process/status, installer workflow. | medium |
| Which tariff, heat-pump tariff, dynamic tariff, and smart-meter state applies to the customer? | ROI and monthly-burden calculations depend on actual data. | Customer bill, supplier/tariff data, smart-meter status. | high |

## Product Risks

| Risk | Why it matters | Mitigation |
| --- | --- | --- |
| The assistant becomes a pressure engine. | Trust and compliance evidence strongly warn against pressure. | Default to proof, clarity, consent, pause, and customer control. |
| The assistant invents certainty around ROI, subsidies, or timelines. | These claims are time-sensitive and customer-specific. | Claim checker, missing-data states, source/date badges. |
| The assistant overfits personas and ignores explicit customer notes. | Persona evidence supports dimensions, not fixed identities. | Let explicit notes override inferred persona scores. |
| The assistant recommends actions the installer cannot execute. | Small installers have limited capacity. | Calendar/capacity check and quick-action alternatives. |
| The assistant cannot learn because debrief is skipped. | Public evidence cannot replace outcome data. | Require lightweight debrief or skipped-debrief reason before next strategy update. |
