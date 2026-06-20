# Handoff: Agent 1

## Status

- Completed:
  - Germany-first source records in `sources.md`.
  - Claim-level evidence extraction in `evidence.md`.
  - Persona cards and segmentation logic in `findings.md`.
  - Open validation questions in `open_questions.md`.
- Partially completed:
  - Public review evidence. Trustpilot review pages were protected from direct automated fetch, so review snippets are logged only as low-confidence trust texture in S15/E17.
  - Forum voice-of-customer evidence. Public threads were used only for language and post-quote hesitation patterns, not for prevalence.
- Not completed:
  - No internal Reonic CRM, quote, sales-note, message, or win/loss data were available.
  - No live outreach or private installer/customer data was collected.

## Most Important Findings

- Finding: German homeowner segmentation should be multi-label, not four fixed personas.
  - Confidence: high for ROI/risk dimensions; medium for climate/autarky; unknown for family-as-persona.
  - Germany relevance: high.
  - Source IDs: S01, S02, S03, S05, S08; evidence E01, E02, E04, E12, E18.
  - Product implication: Score motive and objection dimensions separately, then explain the top two reasons to the installer.

- Finding: ROI, affordability, and payback clarity are the strongest post-quote proof needs for PV and cross-technology home energy investments.
  - Confidence: high.
  - Germany relevance: high.
  - Source IDs: S01, S02, S03, S09; evidence E02, E03, E04, E05.
  - Product implication: Build an ROI/proposal-clarity next action before generic follow-up copy.

- Finding: Heat-pump quote hesitation is often about economic confidence, policy/funding uncertainty, building suitability, and offer completeness.
  - Confidence: high.
  - Germany relevance: high, strongest for owner-occupied houses and Rheinland-Pfalz offer analysis.
  - Source IDs: S01, S06, S07, S08, S13; evidence E06, E07, E08, E15.
  - Product implication: Add heat-pump-specific quote completeness checks and building-readiness proof.

- Finding: PV often functions as a gateway to battery, wallbox/EV, heat pump, and HEMS, so a "system builder" state is needed.
  - Confidence: medium.
  - Germany relevance: high.
  - Source IDs: S01, S02, S11, S14; evidence E09, E10, E11.
  - Product implication: Generate phased vs all-at-once roadmaps for multi-product quotes.

- Finding: "Family" is not validated as a Germany-specific motivation persona from the reviewed evidence.
  - Confidence: unknown for family motivation; medium for explicit stakeholder-review state.
  - Germany relevance: high.
  - Source IDs: S03; evidence E16, E18.
  - Product implication: Ask "who else needs to review this?" and produce stakeholder summaries only when explicit.

## Strongest Sources

- Source ID: S01
  - Why it matters: KfW's 5,119-household Germany survey provides the strongest cross-technology motive and barrier baseline for PV, storage, heat pumps, and EVs.

- Source ID: S02
  - Why it matters: IKND/Allensbach focuses on owner-occupied houses and includes action triggers, investment capacity, and funding needs directly relevant to quote-stage follow-up.

- Source ID: S08
  - Why it matters: Verbraucherzentrale Rheinland-Pfalz analyzed 160 real heat-pump offers, making it the strongest post-quote evidence source for offer trust, scope clarity, and price-shock handling.

- Source ID: S07
  - Why it matters: Ariadne's large representative Wärme- und Wohnen panel grounds heat-pump modernization, policy uncertainty, and cost caveats in public research.

- Source ID: S11
  - Why it matters: The Operations Research article gives Germany-specific evidence that storage adoption can include nonfinancial autarky/sustainability valuation.

## Weak Or Risky Claims

- Claim: Public installer reviews prove communication/scheduling problems are common.
  - Why weak: Review snippets are uncontrolled and direct pages were blocked; reviews are selection-biased.
  - How to validate: Run a structured review sample or use Reonic installer debrief/CRM complaint tags.

- Claim: Forum discussions represent mainstream homeowner objections.
  - Why weak: Forums overrepresent technical and dissatisfied users.
  - How to validate: Compare forum-derived language against actual sales notes, call transcripts, and lost-deal reasons.

- Claim: Climate-first messaging will convert climate-motivated leads.
  - Why weak: Climate is validated as a motive but often mixed with cost and independence; no quote-stage A/B outcome data.
  - How to validate: Test climate-first vs cost-plus-impact follow-up on explicit climate leads.

- Claim: Battery/autarky buyers tolerate weaker payback.
  - Why weak: Academic storage adoption evidence supports nonmarket valuation, but quote-stage message response is untested.
  - How to validate: Capture whether battery buyers choose storage for ROI, autarky, backup, or flexibility and compare outcomes.

## Product Implications

- Persona implications:
  - Use these initial persona states: ROI and Cost-Control Planner, Independence and Autarky Optimizer, Climate Impact Confirmer, Technical-Control Optimizer, Risk and Trust Skeptic, Multi-Tech System Builder.
  - Allow mixed personas and show confidence rather than forcing one label.

- Objection implications:
  - Separate affordability, payback, bureaucracy, building suitability, offer completeness, policy/funding uncertainty, and installer trust.
  - Heat-pump quotes need distinct line-item and building-readiness checks.

- Action and scheduling implications:
  - ROI doubts: schedule assumptions review or send annotated ROI summary.
  - Heat-pump uncertainty: schedule quote completeness/building-readiness call.
  - Multi-tech hesitation: send phased roadmap.
  - Stakeholder review: send concise stakeholder summary and invite joint call.
  - Repeated silence: pause after a concrete single-question follow-up unless a verified trigger exists.

- Data model implications:
  - Add fields for motive scores, objection scores, quoted products, existing products, current heating age/type, EV plan, battery interest reason, financing/subsidy state, quote assumptions, line-item completeness, decision stakeholders, next-action owner/date, and debrief outcome.

- UX implications:
  - Show "why this strategy" as evidence-backed chips: `ROI unclear`, `independence motive`, `heat-pump scope risk`, `multi-tech roadmap`, `stakeholder review`.
  - Provide one-click assets: ROI sensitivity card, quote completeness checklist, system roadmap, stakeholder summary, CO2 impact card.

- Compliance implications:
  - Verify current incentives, tariffs, feed-in rules, and legal deadlines before homeowner-facing claims.
  - Avoid sensitive demographic inference and manipulative urgency.

## Handoff To Product Synthesis

- Recommended product rule: Treat personas as explainable motive and objection scores, not as demographic identities.
- Required mock data:
  - Customer notes with motive language.
  - Quote totals and product mix.
  - Current annual electricity use, heating type/age, EV plan, battery option, subsidy/financing status.
  - Communication history and explicit stakeholder-review notes.
  - Debrief fields for objection, competitor mention, next commitment, and outcome.
- Required UI state:
  - Persona confidence panel with top evidence.
  - Next best action card.
  - Proof asset picker.
  - Debrief modal that updates persona and objection scores.
- Open question: Which persona and objection signals actually predict contract signature or ghosting in Reonic-like installer data?
