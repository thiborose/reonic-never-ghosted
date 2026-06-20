# 01 Reonic Public Ecosystem

Status: completed synthesis on 2026-06-20.

## Scope Findings

| Finding | Evidence | Confidence | Product implication |
| --- | --- | --- | --- |
| The PoC should focus on German residential 360 Household, not generic PV email marketing. | A0 findings 1-3; Reonic Germany homepage; Reonic 360 Household; Reonic solar installer page | High for public scope | Embed assistant in quoted-customer workflow with PV, storage, EV/wallbox, and heat-pump context |
| The strongest workflow moment is "offer sent/opened but unsigned". | A0 finding 2; Reonic offer/signature docs | High for workflow, unknown for conversion | Start assistant from a quoted customer detail view |
| Reonic already presents CRM, proposals, customer portal, calendar/task, AI, WhatsApp, and meeting-summary surfaces. | A0 findings/handoff | Medium-high | The assistant should orchestrate actions and debriefs, not only write templates |
| Public customer stories skew toward growing/multi-location installers. | A0 installer profiles | Medium | Mock both small owner-led installers and growing teams |

## Product Mix Priority

1. PV plus battery: base scenario for the PoC.
2. Heat pump: first-class high-value variant, especially for winter/monthly-burden objections.
3. Wallbox/EV charging: optional system-builder branch and future-load signal.
4. Commercial/utility: future scope only for this PoC.

## Installer Archetypes

| Archetype | Evidence | Mock traits | Assistant need |
| --- | --- | --- | --- |
| Small owner-led regional installer | Project brief/interview plus Reonic public scaling language | 8-25 active residential leads, owner handles sales and site visits, limited call blocks, phone/WhatsApp-heavy workflow | Fast next action, minimal admin, calendar-aware scheduling, short debrief |
| Growing multi-location installer | PV Green, MySolarExpress, Enerix/Reonic public stories | Branches, separate sales/planning/back office/installation owners, integrations, process handoffs | Standardized playbook, owner assignment, proof assets, handoff notes |

## Reonic-Like Data To Mock

| Object | Fields |
| --- | --- |
| Customer and household | ID, address/postcode, building type, roof and meter photo status, energy consumption, tariff, heating type, EV plan, explicit motives, decision-maker note |
| Quote/proposal | offer ID, status, sent/opened timestamps, validity, signature state, variants, products, line items, exclusions, economics, payment/finance |
| Product options | PV kWp, module count, inverter, battery kWh, heat-pump scope, wallbox scope, total price, yield, self-consumption, autonomy, payback, CO2 estimate |
| CRM and engagement | assigned owner, board status, notes, emails, tasks, open questions, portal events, uploaded documents, reminder history |
| Calendar/action | available slots, conflicts, action owner, duration, travel time, preparation assets, script/message, schedule slot |
| Debrief/outcome | completed action, customer wording, new facts, remaining objection, next commitment, outcome label, lost reason |
| Admin/service | grid/VNB status, MaStR status, subsidy check, finance check, planning/photogrammetry status, service owner |

## Product Cautions

- Public Reonic data does not validate ghosting or close-readiness predictors. Treat those as hypotheses.
- Public logos/testimonials should not be used as customer proof assets without Reonic/installers confirming permission and current relationship.
- Reonic's private roadmap/schema may already include features not visible publicly; the PoC should be modular enough to integrate rather than duplicate.
