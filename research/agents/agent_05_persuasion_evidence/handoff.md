# Handoff: Agent 5 - Persuasion Evidence

## Status

- Completed: Initial web research, source records, evidence extraction, synthesis findings, ethical red lines, A/B test candidates, and open-question handoff for persuasion evidence.
- Partially completed: Germany-specific persuasion evidence. Strong Germany evidence exists for PV trust, risk, consumer concerns, and channel compliance; no German post-quote randomized sales follow-up study was found in this pass.
- Not completed: Reonic/internal CRM validation, German legal review of exact follow-up channel classifications, current Germany incentive/tariff verification, and live A/B test design with sample-size estimates.

## Most Important Findings

- Finding: German PV follow-up should prioritize trust and risk reduction over pressure.
  - Confidence: Medium-high.
  - Germany relevance: High.
  - Source IDs: S05-002, S05-004, S05-005.
  - Source URLs: https://c2e2.unepccc.org/wp-content/uploads/sites/3/2021/05/476-exploring-the-role-of-stakeholder-dynamics-in-residential-photovoltaic-adoption-decisions-a-quantitative-s.pdf; https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/photovoltaik-was-bei-der-planung-einer-solaranlage-wichtig-ist-5574; https://www.verbraucherzentrale-bawue.de/wissen/energie/erneuerbare-energien/aktuelle-probleme-in-der-photovoltaik-94813
  - Date accessed: 2026-06-20.
  - Limitations: Mostly survey/advisory evidence, not quote-stage conversion experiments.
  - Product implication: Build the assistant around risk diagnosis, proof assets, transparent assumptions, and specific next actions.

- Finding: Channel recommendations in Germany must be consent-aware.
  - Confidence: High.
  - Germany relevance: High.
  - Source IDs: S05-018, S05-019.
  - Source URLs: https://www.gesetze-im-internet.de/englisch_uwg/englisch_uwg.html; https://www.bundesnetzagentur.de/unerlaubteTelefonwerbung
  - Date accessed: 2026-06-20.
  - Limitations: Legal counsel must classify exact post-quote workflows, especially service reply vs advertising.
  - Product implication: Store consent by channel and suppress noncompliant call/email/SMS/WhatsApp recommendations.

- Finding: Balanced objection handling has stronger ethical and evidence support than one-sided reassurance.
  - Confidence: Medium.
  - Germany relevance: Medium by transfer; high ethical fit.
  - Source IDs: S05-008, S05-014, S05-015, S05-016.
  - Source URLs: https://ucrisportal.univie.ac.at/en/publications/two-sided-advertising-a-meta-analysis/; https://www.ftc.gov/business-guidance/blog/2024/08/dont-waste-your-energy-solar-scam; https://www.consumerfinance.gov/data-research/research-reports/issue-spotlight-solar-financing/; https://seia.org/seia-solar-business-code/
  - Date accessed: 2026-06-20.
  - Limitations: Two-sided advertising evidence is indirect and effects are conditional.
  - Product implication: Generate objection responses with acknowledgement, facts, assumptions, mitigation, and verification.

- Finding: Authentic local proof and verified reputation can help trust, but unsupported social proof is a red line.
  - Confidence: Medium.
  - Germany relevance: Medium-high if proof is local and permissioned.
  - Source IDs: S05-001, S05-002, S05-020, S05-022.
  - Source URLs: https://pubsonline.informs.org/doi/10.1287/mksc.1120.0727; https://c2e2.unepccc.org/wp-content/uploads/sites/3/2021/05/476-exploring-the-role-of-stakeholder-dynamics-in-residential-photovoltaic-adoption-decisions-a-quantitative-s.pdf; https://europa.eu/youreurope/citizens/consumers/unfair-treatment/unfair-commercial-practices/index_en.htm; https://www.hbs.edu/ris/Publication%20Files/12-016_a7e4a5a2-03f9-490d-b093-8f951238dba2.pdf
  - Date accessed: 2026-06-20.
  - Limitations: US peer/review effects do not transfer directly to Germany or solar quote-stage conversion.
  - Product implication: Maintain a verified proof-asset inventory and block fake or vague social proof.

- Finding: A/B testing should be supported, but outcome and guardrail metrics matter more than engagement metrics.
  - Confidence: High for method.
  - Germany relevance: High as methodology, not market fact.
  - Source IDs: S05-011, S05-012.
  - Source URLs: https://robotics.stanford.edu/~ronnyk/2009controlledExperimentsOnTheWebSurvey.pdf; https://exp-platform.com/Documents/2009-ExPpitfalls.pdf
  - Date accessed: 2026-06-20.
  - Limitations: Small installer lead volumes may prevent reliable per-installer tests.
  - Product implication: Use pooled or staged experiments with primary outcomes such as next-step booked and contract signed, plus opt-out/complaint guardrails.

## Strongest Sources

- Source ID: S05-002
  - Why it matters: Most directly relevant Germany survey on residential PV decision influences, including risk, money, and stakeholder trust attributes.

- Source ID: S05-004
  - Why it matters: Current Germany consumer guidance for PV planning and offer comparison; strong basis for ethical quote-review support.

- Source ID: S05-005
  - Why it matters: Germany-specific consumer-protection view of PV market problems that explain trust objections.

- Source ID: S05-018 and S05-019
  - Why it matters: Direct Germany channel-compliance guardrails for phone and electronic outreach.

- Source ID: S05-011 and S05-012
  - Why it matters: Strong experimentation methodology for the A/B testing framework.

## Weak Or Risky Claims

- Claim: "Always call within 5 minutes after quote."
  - Why weak: Best timing evidence is older US inbound-lead research, partly vendor-associated, and not Germany post-quote PV.
  - How to validate: Track Reonic response times, consent-safe channel use, next-step bookings, signed contracts, and complaints.

- Claim: "Social proof will close skeptical customers."
  - Why weak: Solar peer effects support adoption influence, but proof assets can backfire if unverifiable, non-local, or privacy-invasive.
  - How to validate: Test local verified proof assets only for eligible trust-risk leads and compare outcomes against no-proof controls.

- Claim: "Scarcity/loss aversion should be used to create urgency."
  - Why weak: No direct ethical German PV evidence found; artificial urgency creates consumer-protection risk.
  - How to validate: Use only factual deadlines and measure whether transparent quote-validity explanations help without increasing complaints.

- Claim: "Reviews prove installer quality."
  - Why weak: Review-revenue evidence is from restaurants and independent local services, not solar installation quality.
  - How to validate: Compare verified review/reference usage against outcomes and post-sale satisfaction in Reonic data.

## Product Implications

- Persona implications: Treat personas as concern states, not fixed identities. Use observed/stated objections such as risk, ROI, trust, technical uncertainty, comparison shopping, partner alignment, and time pressure.
- Objection implications: For each objection, require evidence assets: calculation, assumption source, warranty/service detail, local proof, or technical explainer.
- Action and scheduling implications: Recommended actions should include consent-safe channel, timing rationale, agenda, proof asset, and a debrief prompt. Concrete next-step scheduling is preferred over generic follow-up.
- Data model implications: Add per-channel consent, opt-out, source-backed claims, quote assumptions, proof-asset metadata, next-step commitments, attempt history, and outcome fields.
- UX implications: Show "why this action" as decision support: concern detected, evidence used, guardrail checked, next best action, and respectful alternative.
- Compliance implications: Suppress noncompliant channels; block unsupported claims about savings, incentives, free solar, government affiliation, scarcity, fake reviews, and guaranteed outcomes.

## Handoff To Product Synthesis

- Recommended product rule: Every recommended message/action should pass four checks: customer concern addressed, proof source available, channel consent valid, and ethical red lines clear.
- Required mock data: Consent by channel; quote assumptions; quote validity source; installer credentials; verified local project references; review metadata; objection tags; last engagement; next-step commitment; outcome.
- Required UI state: "Risk/Trust diagnosis," "Recommended action," "Evidence used," "Consent/channel status," "Claim warnings," "A/B test eligibility," and "Debrief after action."
- Open question: Which post-quote communications in the intended Germany workflow are legally service communications versus advertising, and what consent proof must Reonic store for each channel?
