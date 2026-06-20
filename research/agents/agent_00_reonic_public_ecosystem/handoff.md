# Handoff: Agent 0

## Status

- Completed:
  - Reonic-owned public product, AI, services, docs, and customer-story research.
  - Public Reonic customer/partner signal review for PV Green, MySolarExpress, Enerix, Resoco, Invanova, D,5 Energy, PYourEnergy, and Energieversum.
  - Installer website checks for PV Green, MySolarExpress, Resoco, PYourEnergy, and Energieversum.
  - Source records, evidence items, findings, and open questions in this folder.
- Partially completed:
  - Public installer website checks for Invanova and D,5 Energy were inconclusive from accessible public pages/searches; treat their Reonic references as Reonic public testimonial signals only.
  - Exact Reonic schema beyond public docs remains incomplete.
- Not completed:
  - No private/customer CRM data, live outreach, or current usage verification.
  - No official validation of subsidy, financing, grid-registration, or communication-compliance claims.

## Most Important Findings

- Finding: Residential 360° Haushalt should be the primary PoC scope, with PV + battery as the base and heat pump/wallbox as important variants.
  - Confidence: high for public positioning; medium for actual usage mix.
  - Germany relevance: direct Germany sources, accessed 2026-06-20.
  - Source IDs: A0-S01, A0-S02, A0-S15, A0-S16, A0-S17, A0-S18.
  - Product implication: Build mock quotes for German homeowners around whole-home energy packages, not email-only PV follow-up.

- Finding: The strongest workflow moment is offer sent/opened but unsigned.
  - Confidence: high for public workflow; unknown for conversion impact.
  - Germany relevance: direct Germany/product-doc sources, accessed 2026-06-20.
  - Source IDs: A0-S03, A0-S21, A0-S22, A0-S24.
  - Product implication: The assistant should diagnose quote engagement, signature expiry, variant/economics, and CRM history, then recommend the next action.

- Finding: Reonic public docs support a rich mock data model: request data, offer status, signature state, product options, packages, notes, demand/energy price, customer uploads, board status, assigned owner, and email templates.
  - Confidence: high for documented field examples; medium for complete schema.
  - Germany relevance: product docs accessed 2026-06-20.
  - Source IDs: A0-S21, A0-S22, A0-S23, A0-S24, A0-S25, A0-S26, A0-S27.
  - Product implication: Use Reonic-like records, not generic CRM rows.

- Finding: Public customer stories skew toward multi-location/growing installers; the small owner-led installer remains a required PoC archetype but is not strongly evidenced by public case studies.
  - Confidence: medium.
  - Germany relevance: direct Germany sources, accessed 2026-06-20.
  - Source IDs: A0-S13, A0-S14, A0-S15.
  - Product implication: Mock two installer contexts: owner-led constrained team and growing multi-location team.

## Strongest Sources

- Source ID: A0-S02, Reonic 360° Haushalt, https://reonic.com/de-de/product/360h/
  - Why it matters: Defines the residential product mix and end-to-end workflow from lead to installation.

- Source ID: A0-S21, Reonic REST docs, https://docs.reonic.de/docs/integrations/rest/
  - Why it matters: Gives the most concrete public data schema for Reonic-like offer/request mocks.

- Source ID: A0-S22, Reonic offer planning docs, https://docs.reonic.de/docs/h360/plan/
  - Why it matters: Shows the quote planning flow, variants, energy flows, profitability, customer message, and signature validity.

- Source ID: A0-S13, PV Green customer story, https://reonic.com/de-de/customer-stories/pv-green/
  - Why it matters: Public signal for multi-site installer workflow, sales-to-installation handoff, ERP/calendar integrations, and PV + heat pump services.

- Source ID: A0-S15, Enerix partnership announcement, https://www.enerix.de/presse/pressemitteilungen/partnerschaft-enerix-reonic/
  - Why it matters: External partner source confirming PV + heat pump planning, heat-load calculation, and economics as Reonic-relevant.

## Weak Or Risky Claims

- Claim: Public testimonials/logos prove active current usage.
  - Why weak: They are vendor/partner public signals, not independently verified current usage.
  - How to validate: Ask Reonic for approved customer references and current logo permissions.

- Claim: Offer opens or portal views predict close readiness.
  - Why weak: Public sources show tracking exists but do not link engagement events to outcomes.
  - How to validate: Use internal CRM outcomes or post-launch experiments.

- Claim: Specific KfW, financing, grid-registration, or installation timeline statements are current.
  - Why weak: These are time-sensitive and vendor/installer-controlled.
  - How to validate: Check official KfW/regulator/finance/grid sources at generation time and use installer-approved claims.

- Claim: The four prompt personas are sufficient.
  - Why weak: Reonic ecosystem evidence shows product/workflow scope, not representative homeowner motivation data.
  - How to validate: Later persona, objection, and Germany market agents should use homeowner reviews, surveys, internal notes, and win/loss data.

## Product Implications

- Persona implications:
  - Public Reonic ecosystem data supports homeowner motivations around cost savings, independence, trust, speed, paperwork relief, premium components, financing, and whole-home energy, but not persona prevalence.

- Objection implications:
  - Include objection slots for price/financing, technical complexity, heat-pump sizing/disruption, trust/provider quality, timeline, missing spouse/partner buy-in, grid/subsidy paperwork, and competitor offers.

- Action and scheduling implications:
  - The assistant should output a scheduled CRM task, recommended channel, due time, prep asset, and debrief prompt, not only an email draft.
  - For owner-led installers, keep actions fast and mobile-friendly.
  - For multi-location installers, include owner/branch/team handoff clarity.

- Data model implications:
  - Required objects: customer, request, quote/offer, option/variant, product packages, economics, signature, CRM status, communication thread, portal events, tasks/checklists, calendar, installer context, service/admin status, AI diagnosis, debrief/outcome.

- UX implications:
  - Place the assistant in the quoted-customer view.
  - Show the diagnosis, top signals, recommended next action, why it fits, editable draft/script, schedule controls, and debrief capture.
  - Label predictive outputs as hypotheses with evidence factors.

- Compliance implications:
  - Do not generate current subsidy, finance, tax, or outreach-compliance claims from this research alone.
  - Include consent/opt-in fields for channels and "claim verified at" metadata for market-sensitive assertions.

## Handoff To Product Synthesis

- Recommended product rule:
  - If `segment_type = residential_homeowner` and `offer.status = sent/pending_feedback` and `currentSignature.state != signed`, show assistant diagnosis and next-best action using quote engagement, product mix, economics, CRM notes, and installer capacity.

- Required mock data:
  - Customer: household/building/energy context, region, language, contact preferences, decision-maker notes.
  - Request: lead source, request completeness, roof/meter photos, reminder history.
  - Quote: status, sent/opened/viewed timestamps, validity, signature state, options, product packages, economics, financing, subsidy/grid/service status.
  - CRM: assigned user, board status, tasks, notes, emails, calendar, tags, checklists.
  - Behavior: portal views, proposal section views where mocked as inferred, FAQ/document events, reply silence.
  - Installer: company size, active leads, owner capacity, branch/team assignment.
  - AI: persona hypothesis, risk/readiness factors, recommended action, proof asset, message draft/script, debrief questions, outcome.

- Required UI state:
  - "Offer opened twice, unsigned, expires in 9 days" state.
  - "Customer asked about monthly rate/competitor quote" state.
  - "Missing roof/meter photo or heat-load proof" state.
  - "Installer has two available call slots and limited capacity" state.
  - "After action debrief updates plan" state.

- Open question:
  - Which Reonic product modules and customer segments are most used today: 360° Haushalt PV-only, PV+battery, PV+heat pump, wallbox, services, commercial, utilities?
