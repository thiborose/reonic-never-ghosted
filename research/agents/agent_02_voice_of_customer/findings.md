# Findings: Agent 2

Status: completed initial synthesis on 2026-06-20.

All source URLs and source limitations are in `sources.md`. Evidence IDs below refer to detailed records in `evidence.md`. Geography is Germany unless explicitly noted.

## Evidence Base

| Corpus slice | Source IDs | Date accessed | Geography | Confidence | Limitations | Product implication |
| --- | --- | --- | --- | --- | --- | --- |
| Public PV installer reviews | VOC-S01, VOC-S02, VOC-S03, VOC-S04, VOC-S05, VOC-S20, VOC-S21, VOC-S23, VOC-S25, VOC-S26, VOC-S30 | 2026-06-20 | Germany | medium | Self-selected, review-platform bias; not a frequency estimate. | Use for customer language, trust signals, and proof-asset ideas. |
| Public quote discussions | VOC-S06, VOC-S07, VOC-S08, VOC-S09, VOC-S17, VOC-S18, VOC-S31, VOC-S32 | 2026-06-20 | Germany/DACH forums and Germany-oriented Reddit | medium to low | Technically engaged and price-sensitive users overrepresented. | Use for objection detection and quote-stage copy, not prevalence ranking. |
| Consumer complaint/advice sources | VOC-S10, VOC-S11, VOC-S12, VOC-S16, VOC-S27, VOC-S28, VOC-S29 | 2026-06-20 | Germany | medium to high | Complaint data overrepresents failures; advice pages are not direct VOC. | Use for guardrails, missing-data prompts, and proposal-check UX. |
| Heat-pump quote discussions/reviews | VOC-S13, VOC-S14, VOC-S15, VOC-S16, VOC-S19, VOC-S22, VOC-S24 | 2026-06-20 | Germany | medium to low | Economics are volatile; many examples are anecdotal. | Use for multi-technology quote explanations and operating-cost follow-up. |

## Sales-Process Feedback

| Finding | Evidence/source | Date accessed | Geography | Confidence | Limitations | Product implication |
| --- | --- | --- | --- | --- | --- | --- |
| Pressure, unclear seller identity, and tone mismatch can break trust before the offer is evaluated. | VOC-E01; sources VOC-S01, VOC-S03, VOC-S23, VOC-S28 | 2026-06-20 | Germany | medium | Public reviews and warnings do not quantify prevalence. | Add trust-risk detector; default to clear identity, consented channels, professional `Sie`, and low-pressure CTA. |
| Fast, competent answers and the same contact person are recurring positive trust signals. | VOC-E02; sources VOC-S02, VOC-S03, VOC-S05, VOC-S20, VOC-S24 | 2026-06-20 | Germany | medium | Review praise may be solicited or milestone-triggered. | Track response age, unanswered questions, and contact continuity; recommend callback/video when unanswered questions remain. |
| A prospect can praise the consultation but still choose a cheaper, referred, or clearer competing offer. | VOC-E03; sources VOC-S02, VOC-S20, VOC-S21, VOC-S26 | 2026-06-20 | Germany | medium | Reviews do not expose full competitor terms. | Do not treat positive sentiment as close-ready; ask about active comparison offers and referral influence. |
| Bundled offers across PV, battery, wallbox, labor, scaffold, and grid/admin work create suspicion when line items are unclear. | VOC-E04; sources VOC-S07, VOC-S20, VOC-S29 | 2026-06-20 | Germany | high | Forum evidence is technically biased, but consumer guidance supports the rule. | Add proposal-clarity score and recommend itemized quote addendum. |
| ROI/payback claims need visible assumptions; buyers challenge calculations that feel "pretty" or inconsistent across offers. | VOC-E05; sources VOC-S08, VOC-S17, VOC-S29, VOC-S32 | 2026-06-20 | Germany | medium | Public forums overrepresent analytical buyers; current economics require Agent 4. | Show assumption table and sensitivity; block unsupported payback/IRR language. |
| Financing/rental can solve liquidity anxiety but increases scrutiny of total cost, obligations, service scope, and term length. | VOC-E06; sources VOC-S09, VOC-S12 | 2026-06-20 | Germany | medium | One forum example plus consumer guidance; not frequency evidence. | Classify blocker as `liquidity`, `total_value`, or `risk_transfer` before drafting finance follow-up. |
| Battery add-ons trigger mixed motivations: autonomy and less grid purchase versus doubts about winter usefulness, sizing, and payback. | VOC-E07; sources VOC-S08, VOC-S31, VOC-S32 | 2026-06-20 | Germany/DACH forum context | medium | Forum users may be unusually anti-storage or technically analytical. | Offer `battery now vs battery-ready later` comparison, not generic upsell copy. |
| Winter/cloud performance is not a simple "yes/no" objection; buyers want to know what PV contributes during winter, shade, and heat-pump load. | VOC-E08; sources VOC-S13, VOC-S22, VOC-S31, VOC-S32 | 2026-06-20 | Germany | medium | Needs site-specific production data; review performance claims are unverified. | Generate seasonal production chart and explain winter limits without dismissing winter contribution. |
| Heat-pump quotes need operating-cost and monthly-burden explanation, especially when replacing gas/oil. | VOC-E09; sources VOC-S13, VOC-S14, VOC-S15, VOC-S16 | 2026-06-20 | Germany | medium | Older forum economics and subsidy conditions may be stale. | For PV-plus-heat-pump quotes, recommend a monthly-impact call and scenario comparison. |
| Local references, personal recommendations, and regional proof reduce contractor-risk anxiety. | VOC-E13; sources VOC-S18, VOC-S21, VOC-S25, VOC-S29 | 2026-06-20 | Germany | medium | Anecdotal/review evidence; not an effect-size estimate. | Add local proof assets: nearby project, permissioned testimonial, regional process familiarity. |
| Quote or follow-up delays can cool high-intent leads even after positive consultation. | VOC-E16; sources VOC-S20, VOC-S24, VOC-S26 | 2026-06-20 | Germany | medium | One six-month delay reflects a high-demand period and may not generalize. | Track quote age, promised next step, and owner; recommend proactive status updates. |
| Family members or advisors may participate in high-ticket offer evaluation. | VOC-E17; sources VOC-S18, VOC-S19, VOC-S29 | 2026-06-20 | Germany | low | Anecdotal Reddit evidence; needs CRM validation. | Add optional `decision_makers/advisors` field and shareable summary for co-decision-makers. |

## Installation-Quality Feedback

| Finding | Evidence/source | Date accessed | Geography | Confidence | Limitations | Product implication |
| --- | --- | --- | --- | --- | --- | --- |
| Roof leaks, masonry damage, and mounting risk are installation-quality concerns that can become pre-contract objections. | VOC-E10; sources VOC-S06, VOC-S27, VOC-S30 | 2026-06-20 | Germany | medium | Complaint/review data overrepresents failures; roof risk is site-specific. | Add `roof/property risk` objection with proof assets: roof inspection, mounting method, insurance, warranty boundaries. |
| Delays often involve external dependencies such as network operator approval, grid/meter registration, delivery, or cross-team handoffs. | VOC-E11; sources VOC-S04, VOC-S10, VOC-S26, VOC-S27, VOC-S30 | 2026-06-20 | Germany | medium | Complaint sources are failure-heavy; exact timelines vary by region/operator. | Timeline explanations should name dependency owner and avoid absolute installation promises. |
| "Rundum-sorglos" works only when backed by concrete responsibility breakdown; generic all-in promises are risky. | VOC-E12; sources VOC-S10, VOC-S21, VOC-S23, VOC-S25, VOC-S26 | 2026-06-20 | Germany | medium | Positive reviews and consumer warnings conflict by context. | Use a responsibility matrix instead of vague reassurance. |
| Positive installation proof is practical: clean work, punctual teams, coordinated trades, proper handover, and service after commissioning. | VOC-E14; sources VOC-S05, VOC-S21, VOC-S26, VOC-S30 | 2026-06-20 | Germany | medium | Positive review slices are not representative. | Tag proof assets by `clean_install`, `punctuality`, `handover`, `aftercare`; use them for risk-sensitive buyers. |
| Post-install support concerns, including missing callbacks, rushed instruction, unresolved warnings, and slow response, affect pre-contract credibility. | VOC-E15; sources VOC-S02, VOC-S04, VOC-S24, VOC-S30 | 2026-06-20 | Germany | medium | Negative reviews lack denominator and may be extreme. | Provide aftercare proof: support contact, handover checklist, monitoring setup, response expectations. |

## Tagged Feedback Corpus

| Tag | Customer-facing language | Signal | Evidence/source | Date accessed | Geography | Confidence | Limitations | Product implication |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| trust_pressure | "Abschluss drängen"; "nicht aufdringlich" | Fear of being pushed; preference for calm advice | VOC-E01; VOC-S01, VOC-S03, VOC-S23, VOC-S28 | 2026-06-20 | Germany | medium | Review/warning data not representative. | Use low-pressure CTA and human trust-repair call. |
| formality | "beim Sie bleiben" | Formality preference and professionalism cue | VOC-E01; VOC-S01 | 2026-06-20 | Germany | low | One visible review. | Default German messages to `Sie` unless preference is known. |
| responsiveness | "immer ansprechbar"; "schnell ... geantwortet" | Confidence through availability | VOC-E02; VOC-S02, VOC-S05, VOC-S24 | 2026-06-20 | Germany | medium | Positive reviews may be solicited. | Show assigned owner and offer quick answer path. |
| same_contact | "derselbe Ansprechpartner" | Continuity builds trust | VOC-E02; VOC-S03 | 2026-06-20 | Germany | medium | Platform bias. | Keep one visible owner in follow-up sequence. |
| price_loss | "am Preis gelegen" | Good consultation lost on economics | VOC-E03; VOC-S02 | 2026-06-20 | Germany | medium | Single visible review phrase, supported by more comparison sources. | Trigger price/value comparison rather than generic nurture. |
| referral_risk | "Empfehlung"; "Mund-zu-Mund-Propaganda" | Personal recommendation can outweigh vendor pitch | VOC-E03, VOC-E13; VOC-S18, VOC-S21 | 2026-06-20 | Germany | medium | Anecdotal. | Offer local reference or permissioned testimonial. |
| comparison_overload | "Vergleichsangebote"; "Preisunterschiede" | Buyer stuck comparing unlike offers | VOC-E03, VOC-E04; VOC-S20, VOC-S21 | 2026-06-20 | Germany | medium | Review data lacks full quotes. | Generate comparison matrix and ask what dimension matters. |
| bundle_suspicion | "Mischung ... vertuscht" | Bundled proposal reduces trust | VOC-E04; VOC-S07, VOC-S29 | 2026-06-20 | Germany | high | Forum phrasing may be strong. | Recommend itemized addendum. |
| roi_skepticism | "lohnt sich"; "schön gerechnet" | Payback assumptions not trusted | VOC-E05; VOC-S08, VOC-S32 | 2026-06-20 | Germany | medium | Forum skew toward ROI. | Show assumptions and sensitivity. |
| price_shock | "Schock"; "ganz schön teuer" | Quote amount creates delay or public validation seeking | VOC-E05, VOC-E07, VOC-E09; VOC-S08, VOC-S14, VOC-S31 | 2026-06-20 | Germany | medium | Exact price levels stale/volatile. | Offer value breakdown and current benchmark only when sourced. |
| liquidity | "finanziell schwer umsetzbar" | Upfront cash barrier distinct from total-value concern | VOC-E06; VOC-S09, VOC-S12 | 2026-06-20 | Germany | medium | One forum example plus guidance. | Route to finance/rent-vs-buy explainer. |
| battery_doubt | "Akku ... wirklich lohnt"; "Akku später" | Battery attach is a scenario decision | VOC-E07; VOC-S31, VOC-S32 | 2026-06-20 | Germany/DACH | medium | Forum storage skepticism may be high. | Offer battery-now vs later scenario. |
| winter_wp | "Winter"; "bewölkt"; "WP" | Seasonal production and heat-pump coverage concern | VOC-E08; VOC-S13, VOC-S31, VOC-S32 | 2026-06-20 | Germany | medium | Site-specific. | Use seasonal chart; avoid blanket winter reassurance. |
| operating_cost | "Mehrverbrauch an Strom"; "monatliche Belastung" | Heat-pump capex is not enough; buyer wants monthly impact | VOC-E09; VOC-S13, VOC-S16 | 2026-06-20 | Germany | medium | Current tariffs/subsidies needed. | Include operating-cost scenario. |
| roof_risk | "undichtes Dach"; "Wasserschaden" | Property-damage fear before signing | VOC-E10; VOC-S06, VOC-S27, VOC-S30 | 2026-06-20 | Germany | medium | Risk varies by roof. | Recommend technical proof/inspection. |
| external_delay | "Netzanschluss"; "Anschlusszusage"; "Smart Meter" | Delay may be outside installer control but still hurts trust | VOC-E11; VOC-S10, VOC-S26, VOC-S30 | 2026-06-20 | Germany | medium | Complaint-heavy data. | Explain dependency owner and next step. |
| all_in | "Rundum-Sorglos-Paket"; "alles in einer Hand" | Convenience promise must be substantiated | VOC-E12; VOC-S10, VOC-S21, VOC-S25 | 2026-06-20 | Germany | medium | Same phrase appears as both warning and praise. | Replace vague all-in with concrete checklist. |
| aftercare | "keine Antwort"; "Einweisung sehr schnell" | Post-install support risk influences pre-contract trust | VOC-E15; VOC-S02, VOC-S30 | 2026-06-20 | Germany | medium | Negative review denominator unknown. | Provide aftercare and handover proof. |
| decision_helper | "meine Eltern planen"; "kurze Einschätzung" | Possible family/advisor evaluation | VOC-E17; VOC-S19 | 2026-06-20 | Germany | low | Anecdotal Reddit. | Offer shareable summary and co-decision-maker call. |

## Product Translation

| Product behavior | Evidence/source | Date accessed | Geography | Confidence | Limitations | Implementation note |
| --- | --- | --- | --- | --- | --- | --- |
| Separate sales-process objections from installation-quality risk. | VOC-E10, VOC-E11, VOC-E14, VOC-E15 | 2026-06-20 | Germany | high | Review sources are not representative but categories are distinct. | CRM tags should include `sales_trust`, `price_value`, `proposal_clarity`, `installation_risk`, `aftercare_risk`. |
| Recommend itemized proposal revision before another persuasion message when offer clarity is the blocker. | VOC-E04, VOC-E05 | 2026-06-20 | Germany | high | Requires quote line-item data. | Proposal UI should flag missing labor, scaffold, grid/admin, battery, assumptions. |
| For analytical/ROI buyers, generate evidence-backed calculations only with current local inputs. | VOC-E05, VOC-E07, VOC-E08, VOC-E09 | 2026-06-20 | Germany | medium | Current prices/tariffs/subsidies outside Agent 2 scope. | Assistant should ask for missing assumptions or mark claim blocked. |
| For trust-sensitive buyers, prioritize a named human, response commitment, local proof, and no-pressure CTA. | VOC-E01, VOC-E02, VOC-E13 | 2026-06-20 | Germany | medium | Needs CRM validation of close impact. | Sequence can start with call/video, not email blast. |
| For financing concerns, ask which barrier is active before drafting copy. | VOC-E06 | 2026-06-20 | Germany | medium | Installer finance products need legal review. | User control: `upfront_cost`, `monthly_budget`, `total_cost`, `risk_transfer`. |
| For PV plus heat pump, include monthly energy scenario and winter chart. | VOC-E08, VOC-E09 | 2026-06-20 | Germany | medium | Needs production model and heat-load inputs. | Reonic mock records should include monthly consumption, heating fuel, expected JAZ/COP, and roof/shading data. |

## Guardrails

| Guardrail | Evidence/source | Date accessed | Geography | Confidence | Limitation | Product implication |
| --- | --- | --- | --- | --- | --- | --- |
| Do not infer objection frequency from public reviews/forums. | VOC-E18; VOC-S01, VOC-S02, VOC-S05, VOC-S27, VOC-S30 | 2026-06-20 | Germany | high | Need internal CRM/support data. | Use findings as detection language and hypotheses only. |
| Do not use artificial urgency or pressure. | VOC-E01; VOC-S28 | 2026-06-20 | Germany | medium | Consumer warning is problem-focused. | Follow-up should be transparent, permissioned, and easy to pause. |
| Do not claim winter performance, heat-pump savings, battery ROI, payback, or total cost without current inputs. | VOC-E05, VOC-E07, VOC-E08, VOC-E09 | 2026-06-20 | Germany | high | Requires Agent 4 economics and installer quote data. | Assistant should show `missing data` or `claim blocked` state. |
| Do not use "Rundum-sorglos" unless responsibilities are explicit. | VOC-E12 | 2026-06-20 | Germany | medium | Phrase is context-dependent. | Replace with itemized process/responsibility proof. |
