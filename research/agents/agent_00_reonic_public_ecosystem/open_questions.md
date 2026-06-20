# Open Questions: Agent 0

Status: completed 2026-06-20.

## Product Scope And Usage

1. Which Reonic modules are most used by German residential installers today?
   - Source context: Public pages emphasize PV, storage, heat pumps, wallboxes, CRM, offers, customer portal, services, and AI. Sources A0-S01, A0-S02, A0-S03, A0-S04, A0-S05, A0-S06; accessed 2026-06-20; Germany; confidence medium; limitation: public positioning only.
   - Product implication: Determines whether PoC default should be PV+battery, PV+heat pump, or a broader whole-home package.
   - Needed validation: Internal usage data by module and project type.

2. Is heat pump a core near-term PoC module or a secondary variant?
   - Source context: Reonic and Enerix publicly emphasize PV + heat pump planning, and Reonic has dedicated heating pages. Sources A0-S02, A0-S15, A0-S28; accessed 2026-06-20; Germany; confidence high for public emphasis; limitation: no attach-rate data.
   - Product implication: Determines how much UI space and mock data depth to allocate to heat-load, hydraulic balancing, subsidy, and comfort objections.
   - Needed validation: Reonic stakeholder priority and project volume by heat-pump involvement.

3. Should services such as KfW, financing, grid registration, and photogrammetry be shown in the first PoC flow?
   - Source context: Reonic services pages publicly list these as platform-integrated services. Sources A0-S08, A0-S09, A0-S10, A0-S11; accessed 2026-06-20; Germany; confidence medium; limitation: incentive/finance/grid claims are time-sensitive.
   - Product implication: Determines whether assistant actions include "verify subsidy", "offer financing variant", and "reassure on grid paperwork".
   - Needed validation: Current service availability, legal-safe phrasing, and stakeholder demo priorities.

## Customer And Installer References

4. Which public logos/testimonials can the PoC visibly use?
   - Source context: Reonic public pages mention Resoco, Invanova, MySolarExpress, D,5 Energy, PYourEnergy, Energieversum, PV Green, and Enerix. Sources A0-S01, A0-S08, A0-S12, A0-S13, A0-S14, A0-S15; accessed 2026-06-20; mostly Germany; confidence low-medium; limitation: public signal only, not verified current usage.
   - Product implication: Avoid using real customer names/logos in UI unless permission and current relationship are confirmed.
   - Needed validation: Reonic-approved logo/testimonial list and permission scope.

5. How representative are public customer stories of Reonic's actual installer base?
   - Source context: PV Green and MySolarExpress stories skew toward larger/multi-location operations; project brief emphasizes small/mid owner-led installers. Sources A0-S13, A0-S14; accessed 2026-06-20; Germany; confidence medium; limitation: vendor-selected stories.
   - Product implication: Determines whether the primary mocked installer should be a solo/regional owner or a multi-location growth company.
   - Needed validation: Customer distribution by company size, active leads, and sales process maturity.

6. Can Invanova and D,5 Energy be tied to reliable public websites and product mix?
   - Source context: They appear as Reonic public testimonial signals, but accessible public research did not produce strong direct installer-site evidence during this pass. Sources A0-S01, A0-S08; accessed 2026-06-20; Germany; confidence low; limitation: public testimonial only.
   - Product implication: Do not base product scope on these companies until independently validated.
   - Needed validation: Reonic reference confirmation or direct company source.

## Data Model And Integrations

7. What is the actual Reonic object model for CRM, calendar, communication history, tasks, and portal engagement?
   - Source context: REST docs expose offer/request fields; product/docs pages show CRM, calendar, emails, tasks, checklists, portal, and offer tracking. Sources A0-S03, A0-S04, A0-S05, A0-S21, A0-S23, A0-S24, A0-S25, A0-S26; accessed 2026-06-20; product docs/Germany; confidence medium-high; limitation: public docs are incomplete.
   - Product implication: Determines mock schema fidelity and whether assistant can plausibly access open/view events, replies, portal views, and task status.
   - Needed validation: Internal API schema or demo tenant export.

8. Does Reonic capture proposal section-level engagement or only offer open/view/signature status?
   - Source context: Public sales page says offer open/view tracking; proposal section views are an inferred PoC enhancement from customer portal/document UX. Sources A0-S03, A0-S05, A0-S27; accessed 2026-06-20; Germany/product docs; confidence low for section-level events.
   - Product implication: Section-level engagement would enable sharper recommendations, but should be marked mock/inferred if unavailable.
   - Needed validation: Product analytics event list.

9. Can Reonic calendar availability be read and written, or only synchronized visually with Microsoft/Google?
   - Source context: CRM page says calendars synchronize with Microsoft and Google Workspace; PV Green story mentions Outlook calendar integration. Sources A0-S04, A0-S13; accessed 2026-06-20; Germany; confidence medium; limitation: integration depth unknown.
   - Product implication: Determines whether PoC can schedule follow-ups directly or only suggest slots/tasks.
   - Needed validation: Integration capabilities and permissions.

## AI And Prediction

10. Which public AI capabilities are live versus roadmap/beta?
   - Source context: Reonic public AI pages mention WhatsApp assistant, component AI, sales AI, lead scoring, competitor-offer handling, meeting summaries, and validation AI. Sources A0-S01, A0-S06, A0-S07; accessed 2026-06-20; Germany; confidence medium; limitation: product maturity not independently verified.
   - Product implication: Aligns the PoC with credible Reonic AI surface area.
   - Needed validation: Current release status and roadmap constraints.

11. What internal outcomes can validate ghosting risk and close-readiness hypotheses?
   - Source context: Public sources show lead scoring and offer engagement but no outcome-linked predictor. Sources A0-S03, A0-S06, A0-S21; accessed 2026-06-20; Germany/product docs; confidence low for predictors.
   - Product implication: PoC should show explainable "hypothesis" labels until internal CRM outcome data validates risk scores.
   - Needed validation: Quote history, contact attempts, proposal opens, replies, signed/lost outcomes, and installer notes.

12. What debrief fields should the assistant capture after calls/SMS/email/video follow-ups?
   - Source context: Reonic AI pages mention summaries/actions; the full debrief loop is a PoC inference from the research plan, not a public Reonic feature. Sources A0-S06, A0-S07; accessed 2026-06-20; Germany; confidence low-medium.
   - Product implication: Debrief design should be validated with sales users to avoid extra admin burden.
   - Needed validation: Installer workflow interviews and actual CRM note patterns.

## Compliance And Claims

13. Which communication channels are allowed for German installer follow-up under the prospect's consent state?
   - Source context: Reonic public ecosystem evidence shows email templates, customer portal, WhatsApp assistant, and phone/appointment workflows, but not legal consent rules. Sources A0-S05, A0-S07, A0-S25; accessed 2026-06-20; Germany/product docs; confidence unknown for compliance.
   - Product implication: The assistant needs `consent.email`, `consent.sms`, `consent.whatsapp`, and `preferred_channel` fields before recommending outreach.
   - Needed validation: German legal/compliance research and Reonic policy.

14. Which subsidy, tax, financing, installation-time, and grid-registration claims can be used homeowner-facing?
   - Source context: Vendor/installer pages make claims about KfW service, financing examples, no VAT, fast installation, grid registration, and admin handling. Sources A0-S09, A0-S10, A0-S11, A0-S16, A0-S17, A0-S19; accessed 2026-06-20; Germany; confidence low-medium; limitation: time-sensitive and marketing-controlled.
   - Product implication: Generated messages need claim verification timestamps and source/approval requirements.
   - Needed validation: Official current sources and installer-approved claim library.

15. Which real proof assets should the assistant attach or recommend?
   - Source context: Public installer sites emphasize regional teams, one-stop service, premium components, warranties, financing, and fast installation; Reonic docs support customizable proposal PDFs and customer-visible sections. Sources A0-S16, A0-S17, A0-S18, A0-S19, A0-S27; accessed 2026-06-20; Germany; confidence medium; limitation: proof assets vary by installer.
   - Product implication: Mock proof assets should be installer-specific, not generic.
   - Needed validation: Reonic demo assets, installer brand assets, warranty PDFs, component data sheets, case photos, and approved testimonials.
