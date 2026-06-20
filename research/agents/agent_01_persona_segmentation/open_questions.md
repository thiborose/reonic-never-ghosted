# Open Questions: Agent 1

Status: completed initial validation backlog.

Each question below is tied to existing evidence in `evidence.md`; no additional web research is required before product synthesis unless the team wants to harden a weak claim.

```yaml
question_id: OQ01
question: Which persona and objection scores predict quote-to-contract conversion in Reonic-like CRM data?
why_it_matters: Public sources validate motive clusters, but only internal outcomes can tell which signals should drive next-best-action priority.
current_evidence: E01, E02, E03, E04, E05, E18
confidence_now: unknown
geography: Germany-first; validate by installer region
limitations: No internal CRM, debrief, or outcome data available in this research pass.
product_implication: Needed before assigning risk weights for ghosting, close readiness, or sequence timing.
recommended_validation: Export anonymized quoted leads with products, notes, messages, proposal events, objections, and outcome; run simple feature/outcome analysis.
priority: high
```

```yaml
question_id: OQ02
question: How often does "family" or partner review appear as a real post-quote blocker, and what proof do those stakeholders need?
why_it_matters: Evidence does not validate "family" as a motivation persona, but stakeholder review is likely important for high-ticket decisions.
current_evidence: E16, E18
confidence_now: unknown for family motivation; medium for explicit stakeholder-review state
geography: Germany
limitations: Vattenfall/Civey reports initiator roles, not contract authority or post-quote stakeholder objections.
product_implication: Determines whether the PoC needs a stakeholder-summary action and which fields to capture.
recommended_validation: Add debrief questions: "Who else needs to review?", "What do they care about?", "What proof did they ask for?"
priority: high
```

```yaml
question_id: OQ03
question: For battery quotes, what share of customers buy for strict ROI, autarky/self-consumption, backup resilience, technical interest, or bundle convenience?
why_it_matters: German storage adoption evidence supports nonfinancial autarky value, while forums show strong payback skepticism.
current_evidence: E09, E11, E14
confidence_now: medium
geography: Germany
limitations: Academic adoption evidence is not quote-stage messaging data; public forums overrepresent technical users.
product_implication: Determines whether battery follow-up should lead with payback, autarky, backup, or phased optionality.
recommended_validation: Add a battery motivation field and compare close rates by selected reason.
priority: high
```

```yaml
question_id: OQ04
question: Which heat-pump quote line items most often trigger hesitation or lost deals?
why_it_matters: Verbraucherzentrale evidence shows real offers are hard to compare, but Reonic needs the highest-impact line-item risks.
current_evidence: E06, E08, E15
confidence_now: medium-high for offer complexity; unknown for Reonic-specific predictors
geography: Germany; regional price variation expected
limitations: VZ data is Rheinland-Pfalz and self-selected through consumer advice.
product_implication: Determines the first version of a heat-pump quote completeness checker.
recommended_validation: Code heat-pump quotes for hydraulic balancing, electrical work, foundation, radiator replacement, heat-load calculation, bauseits items, and outcome.
priority: high
```

```yaml
question_id: OQ05
question: Does a phased multi-tech roadmap improve conversion compared with an all-at-once bundle proposal?
why_it_matters: PV often leads to storage, heat pump, EV charger, and HEMS, but bundle cost can create sticker shock.
current_evidence: E09, E10, E11
confidence_now: medium
geography: Germany
limitations: Sources show adoption links, not quote-stage experiment outcomes.
product_implication: Determines whether the assistant should default to "phase 1 now, phase 2 later" when bundle hesitation appears.
recommended_validation: A/B test full-bundle follow-up vs phased roadmap for multi-product quotes above a chosen value threshold.
priority: high
```

```yaml
question_id: OQ06
question: Which proof asset works best for ROI and cost-control planners: calculator, annotated quote, phone walkthrough, financing table, or local case study?
why_it_matters: ROI clarity is a strong need, but delivery format may depend on installer capacity and homeowner literacy.
current_evidence: E02, E03, E04, E13, E14
confidence_now: medium
geography: Germany
limitations: Public evidence identifies proof need, not channel or asset effectiveness.
product_implication: Determines first proof assets to build for the PoC.
recommended_validation: Track asset sent, channel, time to response, objection resolved, and outcome.
priority: medium-high
```

```yaml
question_id: OQ07
question: When climate motivation is explicit, should follow-up lead with CO2 impact or with cost-plus-impact?
why_it_matters: Climate is validated but appears mixed with economics in Germany-specific evidence.
current_evidence: E01, E12
confidence_now: medium
geography: Germany
limitations: No quote-stage A/B evidence; vendor survey S05 is commissioned by a solar seller.
product_implication: Prevents overusing climate-only messaging that may underperform.
recommended_validation: A/B test climate-first vs combined economic/impact summary for explicit climate leads.
priority: medium
```

```yaml
question_id: OQ08
question: Which channel is appropriate for each persona in Germany: email, phone, SMS, WhatsApp, video, or in-person visit?
why_it_matters: Agent 1 found persona proof needs, but not enough Germany-specific channel evidence for outreach preferences.
current_evidence: Indirect only from E13, E14, E17
confidence_now: unknown
geography: Germany
limitations: Channel norms and consent requirements need separate compliance/channel research.
product_implication: Persona recommendations should not hard-code channel until Agent 5/channel research is merged.
recommended_validation: Use installer communication history and consent fields; measure response and conversion by channel and persona score.
priority: medium
```

```yaml
question_id: OQ09
question: What local or social proof assets are credible without sounding like generic testimonials?
why_it_matters: KfW supports friend/acquaintance recommendations as a PV impulse, but installer-created proof can be seen as biased.
current_evidence: E13, E17
confidence_now: medium for social proof relevance; low for asset format
geography: Germany
limitations: No experiment evidence on local case study format.
product_implication: Determines whether to build reference-project cards, neighbor maps, customer calls, or installer proof snippets.
recommended_validation: Test permissioned local reference cards against generic testimonials and no testimonial.
priority: medium
```

```yaml
question_id: OQ10
question: Which policy, tariff, subsidy, and feed-in facts must be checked at message-generation time?
why_it_matters: Incentive and tariff facts change, and unsupported urgency is a project non-goal.
current_evidence: E03, E06, E07, E09
confidence_now: high that facts matter; unknown exact data source integration
geography: Germany, with local/state variants
limitations: Agent 1 did not create a legal/tariff source-of-truth system.
product_implication: Requires a market-facts layer before generating homeowner-facing claims.
recommended_validation: Hand off to market/compliance agent to define authoritative APIs or manually checked fields.
priority: high
```

```yaml
question_id: OQ11
question: What language in German sales notes reliably signals each persona without using sensitive attributes?
why_it_matters: The PoC needs observable signals from Reonic-like data, not demographic stereotypes.
current_evidence: E14, E15, E16, E18
confidence_now: medium for initial keyword hypotheses; unknown for production classifier
geography: Germany
limitations: Forum language is biased toward technical users.
product_implication: Determines keyword chips and debrief questions in the assistant UI.
recommended_validation: Label anonymized installer notes for motives and objections; compare keyword rules to human labels.
priority: high
```

```yaml
question_id: OQ12
question: How should the assistant handle mixed-persona conflicts, such as autarky interest plus strict ROI skepticism?
why_it_matters: The evidence shows motives are clustered and can conflict; a single persona label can mislead the installer.
current_evidence: E01, E02, E09, E11, E14
confidence_now: high that mixed motives exist; unknown best UX treatment
geography: Germany
limitations: No user testing of persona confidence UI.
product_implication: The UI should show top motive plus top blocker, with confidence and a clarifying question.
recommended_validation: Prototype persona panel and test with installers using mock mixed leads.
priority: medium-high
```
