# Evidence: Agent 3 - Objection And Sales Process

Status: completed by main agent on 2026-06-20.

Traceability note: each evidence item cites upstream evidence/source IDs. Use upstream files for full URLs, extraction notes, dates, and limitations.

## Evidence Items

### A3-E01: Quote-stage follow-up must diagnose the blocker before creating copy

- Claim: The assistant should not treat all unsigned quotes as a generic follow-up problem. It should first classify whether the blocker is economics, proposal clarity, trust, technical uncertainty, missing data, co-decision-maker review, external dependency, or stale/no-response.
- Upstream evidence: A3-S01 findings 2-3; A3-S02 executive findings 2-3; A3-S03 Sales-Process Feedback; A3-S05 Assistant Strategy Rules; A3-S06 Core Routing Rules.
- Geography: Germany-first.
- Confidence: high for product need; medium for exact classification weights.
- Limitation: no Reonic outcome model yet.
- Product implication: The PoC should show a diagnosis card with evidence chips before showing an email/script/action.

### A3-E02: Price shock and upfront cost are distinct from ROI distrust

- Claim: German homeowner evidence and public quote discussions show two different economic objections: "Can I afford this now?" and "Does this investment make sense under realistic assumptions?"
- Upstream evidence: A3-S02 E02-E05; A3-S03 VOC-E05/VOC-E06; A3-S04 key findings on tariffs, quote ranges, self-consumption, financing; direct sources A3-S09/A3-S10.
- Geography: Germany.
- Confidence: high for the distinction; medium for prevalence.
- Limitation: public survey and forum evidence do not map to Reonic close/loss rates.
- Product implication: Store `liquidity_blocker` separately from `roi_assumption_blocker`; route liquidity to finance/monthly burden, route ROI distrust to assumption walkthrough.

### A3-E03: Proposal clarity is a high-confidence blocker and should trigger a proposal task

- Claim: When line items, inclusions, exclusions, assumptions, variants, or admin responsibilities are unclear, the best next action is a revised proposal/addendum rather than another persuasive message.
- Upstream evidence: A3-S03 VOC-E04/VOC-E05; A3-S05 finding "help compare and verify offers"; A3-S06 finding "proposal revision beats persuasion"; A3-S11.
- Geography: Germany.
- Confidence: high.
- Limitation: requires structured quote data and cannot infer missing scope from PDF text alone unless parsed.
- Product implication: Add `proposal_clarity_score`, missing-line-item checklist, and one-click itemized addendum action.

### A3-E04: Competing offers and referral influence can override positive consultation

- Claim: A customer may praise consultation but still choose another installer because of a cheaper offer, clearer comparison, or personal recommendation.
- Upstream evidence: A3-S03 VOC-E03/VOC-E13; Agent 2 handoff; A3-S05 local social proof finding.
- Geography: Germany.
- Confidence: medium.
- Limitation: public reviews do not expose full competitor terms.
- Product implication: Add `competing_offer_count`, `competitor_mentions`, `referral_influence`, and a comparison-matrix next action.

### A3-E05: Installer trust is an objection class, not just sentiment

- Claim: Pressure, unclear seller identity, formality/tone mismatch, slow answers, inconsistent contact person, and vague "all-in" promises can reduce trust before technical or economic claims are evaluated.
- Upstream evidence: A3-S03 VOC-E01/VOC-E02/VOC-E12/VOC-E15; A3-S05 trust and risk-reduction findings; A3-S06 call/low-pressure routing.
- Geography: Germany.
- Confidence: medium-high.
- Limitation: review data is biased toward strong experiences.
- Product implication: Track `trust_risk_score`, `assigned_contact_continuity`, `response_age`, `unanswered_questions`, and `responsibility_matrix_available`.

### A3-E06: Battery value requires right-sizing and motivation-specific handling

- Claim: Battery objections mix ROI skepticism, autonomy motivation, winter usefulness, future-load assumptions, and system expansion. Generic battery upsell copy is risky.
- Upstream evidence: A3-S02 P02 persona and storage/autarky evidence; A3-S03 VOC-E07; A3-S04 battery cost and sizing findings.
- Geography: Germany/DACH.
- Confidence: medium.
- Limitation: forums overrepresent technical and ROI-sensitive users.
- Product implication: Recommend "battery now vs battery-ready later" scenarios with editable assumptions and future EV/heat-pump load questions.

### A3-E07: Winter, shade, and PV-plus-heat-pump performance are nuanced technical objections

- Claim: Customers need seasonal production and monthly energy impact, especially where PV is paired with a heat pump or high winter loads.
- Upstream evidence: A3-S03 VOC-E08/VOC-E09; A3-S04 regional production and self-consumption findings; A3-S02 heat-pump/building-suitability findings.
- Geography: Germany.
- Confidence: medium-high.
- Limitation: site-specific roof/shading, heat-load, COP/JAZ, and tariff inputs are required.
- Product implication: Block generic winter reassurance; generate seasonal chart, monthly-burden scenario, or missing-data request.

### A3-E08: Roof/property risk and installation quality concerns can appear before signature

- Claim: Roof leaks, mounting damage, handover/support concerns, and external delay fears can become contract blockers even though they are post-installation themes.
- Upstream evidence: A3-S03 VOC-E10/VOC-E11/VOC-E14/VOC-E15; A3-S06 in-person visit/document/aftercare proof actions.
- Geography: Germany.
- Confidence: medium.
- Limitation: complaint/review sources overrepresent failures.
- Product implication: Create objection tags for `roof_property_risk`, `external_delay`, `aftercare_risk`, and route to inspection checklist, warranty/insurance explanation, timeline, or support proof.

### A3-E09: Paperwork and external dependency transparency is a trust lever

- Claim: VNB/grid processes, MaStR registration, metering, payment data, and dependency ownership should be explained concretely; vague promises harm trust.
- Upstream evidence: A3-S04 paperwork findings; A3-S03 external-delay and all-in findings; A3-S01 Reonic services/admin status fields.
- Geography: Germany.
- Confidence: high for need; medium for sales impact.
- Limitation: local VNB workflows vary.
- Product implication: Add a paperwork checklist and owner/status fields; recommend proactive status update when dependencies are stale.

### A3-E10: Outreach channels must be consent-gated in Germany

- Claim: Consumer advertising calls require prior express documented consent; email/SMS/WhatsApp/direct-message advertising generally requires consent or narrow exceptions; tracking-based scoring requires separate care.
- Upstream evidence: A3-S04 consent findings; A3-S05 ethical red lines; A3-S06 consent gate; direct source A3-S08.
- Geography: Germany.
- Confidence: high.
- Limitation: legal counsel must classify quote-service vs advertising use cases.
- Product implication: `channel_allowed(channel, purpose)` is a hard gate; suppress non-eligible channel generation.

### A3-E11: "Family" should become stakeholder-review state, not demographic targeting

- Claim: The evidence does not validate "family" as a standalone German homeowner persona, but high-ticket decisions can involve partners, family members, or advisors.
- Upstream evidence: A3-S02 validated/rejected persona table; A3-S03 VOC-E17.
- Geography: Germany.
- Confidence: medium for stakeholder review when explicit; unknown for demographic family motive.
- Limitation: evidence is partly anecdotal.
- Product implication: Ask who else reviews the quote; generate shareable summaries only when explicit.

### A3-E12: Fast response matters most when customer initiated or installer promised a next step

- Claim: Responsiveness is a trust signal, but speed-to-lead claims should not become pressure after a quote. Priority should go to unanswered customer questions, promised next steps, missed calls, and expiring real deadlines.
- Upstream evidence: A3-S03 VOC-E02/VOC-E16; A3-S05 fast-response and stale-follow-up findings; A3-S06 scheduling rules.
- Geography: Germany-first with US transfer evidence for inbound speed.
- Confidence: medium.
- Limitation: no German solar quote cadence benchmark.
- Product implication: Build priority queue from customer-initiated events and commitments, not blanket "call now" rules.

### A3-E13: Ethical objection handling should be balanced and proof-backed

- Claim: High-stakes objections should be answered by acknowledging the concern, showing assumptions, limitations, and mitigation, then offering a concrete verification step.
- Upstream evidence: A3-S05 balanced objection handling and ethical red lines; A3-S04 claim-sensitive economics; A3-S03 ROI/winter/finance VOC.
- Geography: Germany/EU with general marketing evidence transfer.
- Confidence: medium-high.
- Limitation: direct German solar A/B evidence not found.
- Product implication: Message generator should output "claim checked" status and block unsupported savings, urgency, subsidy, financing, and performance claims.

### A3-E14: In-person visits are powerful but expensive and must be justified

- Claim: For small and mid-sized installers, site visits should be recommended only when they resolve a physical-site risk, trust blocker, high-value/readiness opportunity, or route-efficient cluster.
- Upstream evidence: A3-S01 small owner-led mock profile; A3-S06 in-person visit and travel/capacity rules; A3-S03 roof/property risk evidence.
- Geography: Germany-first; operational evidence partly transferable.
- Confidence: medium.
- Limitation: no solar-specific visit ROI threshold.
- Product implication: Calendar should show visit ROI, route/travel impact, and remote alternative.

### A3-E15: Debrief is required to turn research hypotheses into validated Reonic strategy

- Claim: Public data identifies plausible objections and actions, but actual scoring and cadence must learn from installer debriefs and outcomes.
- Upstream evidence: A3-S01 weak/unvalidated predictive claims; A3-S02/A3-S03 warnings about public-source bias; A3-S06 debrief rule.
- Geography: Germany-first.
- Confidence: high.
- Limitation: debrief friction can reduce adoption.
- Product implication: Every action should capture outcome, customer wording, resolved/remaining objection, next commitment, lost reason, and override reason.
