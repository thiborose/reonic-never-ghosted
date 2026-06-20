# Evidence: Agent 5 - Persuasion Evidence

Status: completed initial extraction.

Each item includes source IDs, source URLs, date accessed, geography, confidence, limitations, and product implication so downstream synthesis can trace every claim.

## Evidence Items

```yaml
evidence_id: E05-001
claim: "Authentic local social proof is relevant to residential PV adoption, but should be based on real nearby installations or willing customer references rather than generic popularity claims."
claim_category: "social proof; trust"
supporting_source_ids: ["S05-001", "S05-002"]
source_urls:
  - "https://pubsonline.informs.org/doi/10.1287/mksc.1120.0727"
  - "https://c2e2.unepccc.org/wp-content/uploads/sites/3/2021/05/476-exploring-the-role-of-stakeholder-dynamics-in-residential-photovoltaic-adoption-decisions-a-quantitative-s.pdf"
date_accessed: "2026-06-20"
evidence_type: "Direct solar adoption evidence; Germany survey plus US econometric study"
strength_of_evidence: "medium"
geography: "Germany; California, United States"
region_applicability: "Germany applicable as a qualitative rule; effect size from California should not be used as Germany fact."
persona_applicability: "Skeptic, family, investor, status/independence motivated homeowners; avoid using as pressure on privacy-sensitive customers."
funnel_stage: "Post-quote proof and reassurance; also referral prompts"
quote_stage_relevance: "Indirect for closing but directly relevant to PV trust and information transfer."
quote_or_data_excerpt: "Bollinger and Gillingham report a 0.78 percentage-point adoption-probability increase per added nearby installation at average owner-occupied ZIP-code levels; German survey reports knowing PV owners as a positive adoption-intention factor."
counterevidence: "Neighborhood visibility can be confounded with local installer activity, income, incentives, and roof suitability."
limitations: "US peer-effect magnitude does not transfer directly; German source is survey presentation, not full sales-outcome data."
product_implication: "Assistant should ask whether the installer has relevant local references, nearby completed projects, verified reviews, or permissioned customer stories; if absent, it should not generate social-proof claims."
message_implication: "Use concrete, verifiable local proof such as 'similar roof in your municipality' only when true and permissioned; avoid vague 'everyone is switching' claims."
action_implication: "Recommend a short reference call, photo proof asset, or local case attachment for trust-sensitive prospects."
data_fields_required: "installer_project_reference_ids; project_region; customer_reference_permission; review_source; persona_or_objection_state"
validation_needed: "Measure whether local proof increases quote-to-next-meeting and contract-signing rates in German installer data."
```

```yaml
evidence_id: E05-002
claim: "For German PV decisions, perceived installer competence, reliability, trustworthiness, availability, and likability matter enough to be treated as first-class proof variables."
claim_category: "trust; risk reduction"
supporting_source_ids: ["S05-002", "S05-004", "S05-005"]
source_urls:
  - "https://c2e2.unepccc.org/wp-content/uploads/sites/3/2021/05/476-exploring-the-role-of-stakeholder-dynamics-in-residential-photovoltaic-adoption-decisions-a-quantitative-s.pdf"
  - "https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/photovoltaik-was-bei-der-planung-einer-solaranlage-wichtig-ist-5574"
  - "https://www.verbraucherzentrale-bawue.de/wissen/energie/erneuerbare-energien/aktuelle-probleme-in-der-photovoltaik-94813"
date_accessed: "2026-06-20"
evidence_type: "Germany-specific PV survey and consumer-protection guidance"
strength_of_evidence: "medium-high"
geography: "Germany"
region_applicability: "High for Germany, though evidence is not post-quote CRM outcome data."
persona_applicability: "All homeowners; strongest for skeptics, families, and risk-averse investors."
funnel_stage: "Quote review and pre-contract confidence"
quote_stage_relevance: "Directly relevant to choosing an installer after a quote."
quote_or_data_excerpt: "German stakeholder survey found commercial/institutional stakeholder influence was explained by attributes including competence, reliability, trustworthiness, availability, and likability; consumer guidance warns about remote sales firms, vague promises, and unreachable providers."
counterevidence: "Low price and fast install date may still dominate for some shoppers."
limitations: "Survey measures influence and guidance reflects complaints, not causal sales experiments."
product_implication: "Assistant should render an installer-trust panel: credentials, local presence, named contact, response commitment, references, warranty/service path, and proof of planning quality."
message_implication: "Explain why the installer is credible in factual terms rather than using flattery or authority theater."
action_implication: "For trust-risk prospects, recommend a proof bundle or short call with a technical lead before pushing signature."
data_fields_required: "installer_credentials; years_in_business; local_distance; service_contact; warranty_terms; response_sla; complaint_notes; quote_quality_flags"
validation_needed: "Correlate trust-proof assets with German quote acceptance and lower ghosting."
```

```yaml
evidence_id: E05-003
claim: "Money and risk concerns are central blockers in residential PV decisions, so follow-up should reduce uncertainty with transparent assumptions, ranges, and guarantees rather than relying only on environmental or technology enthusiasm."
claim_category: "risk reduction; ROI proof; objection handling"
supporting_source_ids: ["S05-002", "S05-003", "S05-015"]
source_urls:
  - "https://c2e2.unepccc.org/wp-content/uploads/sites/3/2021/05/476-exploring-the-role-of-stakeholder-dynamics-in-residential-photovoltaic-adoption-decisions-a-quantitative-s.pdf"
  - "https://erl.scholasticahq.com/article/28129-residential-photovoltaics-adopters-versus-considerers-in-the-united-states"
  - "https://www.consumerfinance.gov/data-research/research-reports/issue-spotlight-solar-financing/"
date_accessed: "2026-06-20"
evidence_type: "Germany PV survey; US installer-contacted considerer study; US regulator analysis"
strength_of_evidence: "medium"
geography: "Germany; United States"
region_applicability: "Germany for motivation direction; US financing details are indirect."
persona_applicability: "Investor, family, skeptic; environmentalist when ROI concern appears in notes."
funnel_stage: "Post-quote objection handling"
quote_stage_relevance: "High: quote-stage decisions commonly involve cost, payback, financing, and performance risk."
quote_or_data_excerpt: "German survey reports perceived risk/cost as a negative adoption-intention factor and long-run savings as positive; CFPB warns that solar loans are not guaranteed to pay for themselves."
counterevidence: "Some adopters may be primarily identity, independence, or climate motivated."
limitations: "No German post-quote controlled test of risk-reduction messages was found."
product_implication: "Assistant should diagnose whether the next action should be a sensitivity-based ROI review, financing clarification, warranty/insurance clarification, or technical performance explanation."
message_implication: "Use bounded claims: assumptions, low/base/high scenarios, what is guaranteed, what is not, and what can change."
action_implication: "Recommend proposal revision when quote lacks assumptions for consumption, tariff, feed-in, degradation, financing, maintenance, taxes, incentives, and battery economics."
data_fields_required: "annual_consumption; tariff; feed_in_rate; financing_terms; incentive_assumptions; system_size; battery_size; quote_validity; warranty_terms; savings_range"
validation_needed: "Run A/B tests of single-point ROI vs scenario-range ROI with contract-signing and complaint guardrails."
```

```yaml
evidence_id: E05-004
claim: "Post-installer-contact considerers can remain undecided or delay signing, so the assistant should treat 'quote received' as an uncertain decision state rather than assuming intent to buy."
claim_category: "decision state; ghosting risk"
supporting_source_ids: ["S05-003"]
source_urls:
  - "https://erl.scholasticahq.com/article/28129-residential-photovoltaics-adopters-versus-considerers-in-the-united-states"
date_accessed: "2026-06-20"
evidence_type: "Direct US PV considerer survey"
strength_of_evidence: "medium"
geography: "United States"
region_applicability: "Indirect for Germany until German Reonic or installer data is available."
persona_applicability: "All personas; especially undecided and comparison-shopping homeowners."
funnel_stage: "Quote sent to contract signed"
quote_stage_relevance: "High because source explicitly includes homeowners who talked to installers and may have received quotes."
quote_or_data_excerpt: "Among PV considerers in the analyzed survey, 60% were undecided, 11% had decided not to adopt, and 23% had decided to adopt but had not signed."
counterevidence: "US survey does not specify exact elapsed time after quote or German market context."
limitations: "Self-reported status and US-only sample."
product_implication: "Assistant needs separate labels for undecided, leaning yes but administratively stuck, comparison shopping, and lost/no-decision."
message_implication: "Use diagnostic follow-ups that invite the homeowner to identify the remaining concern instead of assuming a close."
action_implication: "Recommend a low-friction 'what still needs to be true?' call or survey when signals are ambiguous."
data_fields_required: "quote_sent_at; proposal_views; last_reply; objection_tags; competitor_mentions; decision_timeline; partner_involvement; next_step_commitment"
validation_needed: "Map Reonic funnel states to observed signed/lost outcomes and response behavior."
```

```yaml
evidence_id: E05-005
claim: "Ethical German PV follow-up should respect the homeowner's need to compare and verify offers; pushing immediate signature conflicts with consumer-protection guidance."
claim_category: "ethical sales; risk reduction; decision friction"
supporting_source_ids: ["S05-004", "S05-005", "S05-020"]
source_urls:
  - "https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/photovoltaik-was-bei-der-planung-einer-solaranlage-wichtig-ist-5574"
  - "https://www.verbraucherzentrale-bawue.de/wissen/energie/erneuerbare-energien/aktuelle-probleme-in-der-photovoltaik-94813"
  - "https://europa.eu/youreurope/citizens/consumers/unfair-treatment/unfair-commercial-practices/index_en.htm"
date_accessed: "2026-06-20"
evidence_type: "Germany consumer guidance; EU consumer law guidance"
strength_of_evidence: "high"
geography: "Germany; European Union"
region_applicability: "High for Germany."
persona_applicability: "All homeowners; especially skeptics and comparison shoppers."
funnel_stage: "Pre-contract"
quote_stage_relevance: "High: quote comparison is the exact stage."
quote_or_data_excerpt: "Verbraucherzentrale advises consumers to take time for offer comparison and notes large price differences; EU guidance requires enough accurate information for informed buying decisions."
counterevidence: "Real quote-validity windows or installation-capacity constraints can create legitimate timing needs."
limitations: "Guidance does not measure conversion effect; ethical and compliance value is primary."
product_implication: "Assistant should include a 'compare confidently' path: explain differences, invite questions, and clarify quote validity without artificial urgency."
message_implication: "Replace 'sign today' pressure with 'here is what to compare and what remains valid until date X'."
action_implication: "Recommend a quote-review meeting and comparison checklist when the homeowner mentions other offers."
data_fields_required: "quote_valid_until; quote_components; competitor_offer_notes; incentive_deadline_source; payment_schedule; exclusions; guarantee_terms"
validation_needed: "Review generated urgency language with German legal/compliance counsel."
```

```yaml
evidence_id: E05-006
claim: "German PV homeowners may distrust vague all-inclusive promises and remote sales models because consumer advisers report recurring problems with unclear scope, prepayments, poor planning, defects, delays, and post-sale unreachability."
claim_category: "trust; objection handling; risk reduction"
supporting_source_ids: ["S05-005"]
source_urls:
  - "https://www.verbraucherzentrale-bawue.de/wissen/energie/erneuerbare-energien/aktuelle-probleme-in-der-photovoltaik-94813"
date_accessed: "2026-06-20"
evidence_type: "Germany consumer-protection advisory based on complaint/advice cases"
strength_of_evidence: "medium"
geography: "Germany, Baden-Wurttemberg"
region_applicability: "High as a trust-risk pattern; not a national prevalence rate."
persona_applicability: "Skeptic, family, risk-averse buyer, prior-bad-experience lead."
funnel_stage: "Quote review and contract due diligence"
quote_stage_relevance: "High because these concerns arise before signing."
quote_or_data_excerpt: "Verbraucherzentrale Baden-Wurttemberg lists common market problems, including vague 'Rundum-sorglos-Paket' offers and providers that are difficult to reach after complications."
counterevidence: "Some remote/digital providers may deliver high-quality service; local craft firms can also be overloaded."
limitations: "Complaint/advisory evidence overrepresents negative cases."
product_implication: "Assistant should identify if the quote lacks scope clarity, installation timeline, grid-connection responsibility, payment milestones, warranty response, or service owner."
message_implication: "Use specific operational proof instead of broad reassurance: who installs, who connects, who answers, what is included, and what is excluded."
action_implication: "Recommend a scope-clarification proposal update before closing when those fields are missing."
data_fields_required: "included_work; excluded_work; subcontractor_disclosure; payment_milestones; grid_connection_owner; service_owner; installation_timeline; support_contact"
validation_needed: "Ask German installers which scope details most often prevent late-stage objections."
```

```yaml
evidence_id: E05-007
claim: "For customer-initiated inbound leads, fast response is strongly associated with qualification, but the evidence is indirect for post-quote follow-up and should be used as an SLA hypothesis rather than a hard close rule."
claim_category: "follow-up timing; channel orchestration"
supporting_source_ids: ["S05-006", "S05-007"]
source_urls:
  - "https://hbr.org/2011/03/the-short-life-of-online-sales-leads"
  - "https://content.marketingsherpa.com/heap/DG07SFSlides/LeadResponseManagementReport.pdf"
date_accessed: "2026-06-20"
evidence_type: "Business lead-response audit and vendor-associated sales dataset"
strength_of_evidence: "medium for inbound leads; low for quote-stage PV"
geography: "United States"
region_applicability: "Indirect for Germany; consent rules materially constrain channel choices."
persona_applicability: "High-intent inbound leads; not a persona-specific tactic."
funnel_stage: "Initial inquiry; early quote handoff; indirect for quote follow-up"
quote_stage_relevance: "Medium: quote-stage has existing relationship and higher deliberation than first web inquiry."
quote_or_data_excerpt: "HBR reports within-one-hour contact attempts were nearly seven times as likely to qualify as later attempts; vendor report claims sharp drop from 5 to 30 minutes."
counterevidence: "High-consideration homeowners may prefer time to review after receiving a detailed quote; too-fast pressure can erode trust."
limitations: "Older US mixed-market data; vendor incentives; not solar quote data."
product_implication: "Assistant should recommend immediate acknowledgement and prompt scheduling after customer-initiated actions, but vary cadence by consent, signal, and requested review time."
message_implication: "Frame speed as service: 'I received your question and can review the two open points at 17:00' rather than 'act now'."
action_implication: "Create SLA task for new inbound quote request or proposal question; after quote delivery, ask for preferred review time."
data_fields_required: "lead_created_at; customer_initiated_event_type; quote_sent_at; consent_by_channel; business_hours; preferred_contact_time; last_customer_action"
validation_needed: "Measure Reonic lead response time against qualified appointment and signed-contract outcomes."
```

```yaml
evidence_id: E05-008
claim: "Repeated call attempts after a lead has gone stale may harm contact/qualification odds in at least one vendor-associated dataset, so stale follow-up should switch to permissioned value-add channels or pause rather than escalating pressure."
claim_category: "follow-up cadence; ethical persistence"
supporting_source_ids: ["S05-007", "S05-016", "S05-019"]
source_urls:
  - "https://content.marketingsherpa.com/heap/DG07SFSlides/LeadResponseManagementReport.pdf"
  - "https://seia.org/seia-solar-business-code/"
  - "https://www.bundesnetzagentur.de/unerlaubteTelefonwerbung"
date_accessed: "2026-06-20"
evidence_type: "Vendor-associated sales dataset; industry ethics code; Germany regulator guidance"
strength_of_evidence: "low-medium"
geography: "United States; Germany"
region_applicability: "Germany compliance requires consent before advertising calls; performance claim is US/indirect."
persona_applicability: "Ghosting-risk leads; skeptics; busy families."
funnel_stage: "No-response follow-up"
quote_stage_relevance: "Medium, but validate locally."
quote_or_data_excerpt: "Vendor report says additional dials after 20 hours hurt ability to contact/qualify; SEIA says companies should not harass or badger; Bundesnetzagentur says advertising calls need prior consent."
counterevidence: "Some sales teams close deals through structured multi-touch follow-up; no German PV post-quote data found."
limitations: "Old vendor-associated evidence; wording in report is speculative about mechanism."
product_implication: "Assistant should cap cadence, provide opt-out/pause options, and move from repeated call attempts to useful proof or a clear close-the-loop message."
message_implication: "Use respectful permission language and a stop condition: 'Should I pause follow-up or send one comparison checklist?'"
action_implication: "If no response after agreed follow-up, schedule a lower-pressure value-add touch or stop until new engagement."
data_fields_required: "attempt_count_by_channel; last_attempt_at; consent_by_channel; homeowner_requested_pause; no_response_duration; value_asset_sent"
validation_needed: "Define installer-specific cadence guardrails and monitor complaints/unsubscribes."
```

```yaml
evidence_id: E05-009
claim: "Balanced two-sided objection handling is more ethical and potentially more persuasive than one-sided reassurance when it voluntarily acknowledges real drawbacks and then shows mitigation."
claim_category: "objection handling; trust"
supporting_source_ids: ["S05-008", "S05-014", "S05-015", "S05-016"]
source_urls:
  - "https://ucrisportal.univie.ac.at/en/publications/two-sided-advertising-a-meta-analysis/"
  - "https://www.ftc.gov/business-guidance/blog/2024/08/dont-waste-your-energy-solar-scam"
  - "https://www.consumerfinance.gov/data-research/research-reports/issue-spotlight-solar-financing/"
  - "https://seia.org/seia-solar-business-code/"
date_accessed: "2026-06-20"
evidence_type: "General marketing meta-analysis plus solar consumer-protection guidance"
strength_of_evidence: "medium"
geography: "General/global; United States"
region_applicability: "Indirect for Germany, but transparency principle aligns with EU/German consumer protection."
persona_applicability: "Skeptic, investor, technically literate, risk-sensitive buyer."
funnel_stage: "Post-quote objection handling"
quote_stage_relevance: "High for objections about winter yield, payback, battery ROI, grid connection, financing, warranty, and installer quality."
quote_or_data_excerpt: "Eisend meta-analysis says two-sided message effects depend on amount and structure of negative information; solar regulators warn against overpromising savings and hiding material limitations."
counterevidence: "Too much negative information or poorly structured disclosure can reduce attitude toward the offer."
limitations: "Two-sided evidence is not solar-specific; requires careful message design."
product_implication: "Assistant should produce structured objection responses: acknowledge concern, state facts/assumptions, quantify range, show mitigation, offer verification."
message_implication: "Avoid 'don't worry' answers; use 'the real constraint is X, here is how we account for it'."
action_implication: "Trigger technical explainer or revised proposal when an objection involves performance, financing, roof suitability, or policy risk."
data_fields_required: "objection_type; supporting_calculation; assumption_source; warranty_terms; installation_constraints; policy_context_checked_at"
validation_needed: "Test one-sided reassurance vs balanced evidence response on next-meeting and signing outcomes, with trust/complaint guardrails."
```

```yaml
evidence_id: E05-010
claim: "Too many options can create decision friction, so the assistant should simplify proposals into a recommended path plus a small number of explicit alternatives."
claim_category: "decision friction; proposal design"
supporting_source_ids: ["S05-009", "S05-004"]
source_urls:
  - "https://business.columbia.edu/faculty/research/when-choice-demotivating-can-one-desire-too-much-good-thing"
  - "https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/photovoltaik-was-bei-der-planung-einer-solaranlage-wichtig-ist-5574"
date_accessed: "2026-06-20"
evidence_type: "General choice-overload experiments; Germany consumer guidance"
strength_of_evidence: "medium"
geography: "United States; Germany"
region_applicability: "Indirect for Germany PV, with strong practical fit."
persona_applicability: "Busy families, skeptics, comparison shoppers, low-technical-literacy leads."
funnel_stage: "Quote review"
quote_stage_relevance: "High: PV quotes can include many panels, batteries, inverters, tariffs, financing options, and assumptions."
quote_or_data_excerpt: "Iyengar and Lepper report higher purchase/action with limited 6-choice sets versus 24/30-choice sets in their experiments; Verbraucherzentrale encourages comparison and offer checking."
counterevidence: "Highly technical or investor personas may want access to more detail."
limitations: "Choice-overload effects are conditional; source is not solar-specific."
product_implication: "Default UI should show one recommended system with rationale, two alternatives max, and an expandable technical appendix."
message_implication: "Say 'based on your usage, I recommend option B because...' and offer a concise comparison rather than listing every possible configuration."
action_implication: "If homeowner stalls after viewing multiple versions, recommend a simplification call or proposal summary."
data_fields_required: "quote_options_count; selected_recommended_option; persona_technical_literacy; proposal_view_behavior; unresolved_decision_criteria"
validation_needed: "A/B test full option set vs recommended-plan summary in German quote follow-up."
```

```yaml
evidence_id: E05-011
claim: "Concrete next-step planning is an evidence-backed way to increase follow-through in other domains and should be used ethically after quote delivery."
claim_category: "commitment; scheduling; follow-through"
supporting_source_ids: ["S05-010", "S05-006"]
source_urls:
  - "https://laibson.scholars.harvard.edu/publications/using-implementation-intentions-prompts-enhance-influenza-vaccination-rates"
  - "https://hbr.org/2011/03/the-short-life-of-online-sales-leads"
date_accessed: "2026-06-20"
evidence_type: "Behavioral field experiment; indirect sales timing evidence"
strength_of_evidence: "medium"
geography: "United States"
region_applicability: "Indirect for Germany; culturally and legally acceptable if customer-controlled and consent-aware."
persona_applicability: "Busy family, comparison shopper, partner-involved household, any lead with delayed action."
funnel_stage: "Quote sent; next review; debrief loop"
quote_stage_relevance: "High as workflow support, not as pressure."
quote_or_data_excerpt: "Milkman et al. PNAS field experiment evaluates planning prompts; HBR evidence shows delays reduce lead qualification for inbound inquiries."
counterevidence: "Purchase decisions need deliberation; a commitment prompt cannot substitute for missing information or partner buy-in."
limitations: "Health-behavior evidence, not solar sales; effect size not captured in this pass."
product_implication: "Assistant should ask for a mutually agreed next step, date, channel, agenda, and required decision-maker involvement."
message_implication: "Use permissioned planning: 'Would Tuesday 18:00 work to review the financing assumptions with both decision-makers?'"
action_implication: "Create calendar task, agenda, proof asset checklist, and debrief prompt after the interaction."
data_fields_required: "next_step_type; scheduled_at; channel; decision_makers; agenda_items; proof_assets; completed_at; debrief_outcome"
validation_needed: "Compare agreed-next-step rate and contract signing for messages with vs without explicit scheduling prompt."
```

```yaml
evidence_id: E05-012
claim: "Verified reviews and reputation signals can affect demand in local services, but this is indirect evidence for solar and must be constrained by authenticity and relevance."
claim_category: "social proof; reputation"
supporting_source_ids: ["S05-022", "S05-020", "S05-016"]
source_urls:
  - "https://www.hbs.edu/ris/Publication%20Files/12-016_a7e4a5a2-03f9-490d-b093-8f951238dba2.pdf"
  - "https://europa.eu/youreurope/citizens/consumers/unfair-treatment/unfair-commercial-practices/index_en.htm"
  - "https://seia.org/seia-solar-business-code/"
date_accessed: "2026-06-20"
evidence_type: "Indirect local-service reputation study; EU and industry authenticity guardrails"
strength_of_evidence: "medium"
geography: "United States; European Union"
region_applicability: "Indirect for Germany; authenticity requirements are directly EU-relevant."
persona_applicability: "Skeptics, families, low-trust leads, leads comparing installers."
funnel_stage: "Post-quote proof"
quote_stage_relevance: "Medium-high as trust proof for choosing an installer."
quote_or_data_excerpt: "Luca reports one Yelp star increased revenue 5-9% for restaurants and mattered especially for independent restaurants; EU guidance prohibits fake consumer reviews."
counterevidence: "Solar is high-cost and technically complex, so reviews alone should not replace technical/financial proof."
limitations: "Restaurant evidence; review platforms and German consumer behavior differ."
product_implication: "Assistant may recommend verified reviews and customer references, but must not fabricate, cherry-pick deceptively, or imply reviews are verified unless the source confirms it."
message_implication: "Use review proof as one trust layer alongside scope, warranties, and calculations."
action_implication: "Attach a verified review/customer-story card when the lead shows installer-trust objections."
data_fields_required: "review_source; review_verified_status; review_date; project_similarity; customer_permission; complaint_history"
validation_needed: "Measure which proof assets German homeowners actually open and whether they affect outcomes."
```

```yaml
evidence_id: E05-013
claim: "Social-comparison energy messages can change household behavior in field experiments, but using them to sell PV must avoid shaming, surveillance, and unsupported neighborhood claims."
claim_category: "social norms; ethical guardrail"
supporting_source_ids: ["S05-021", "S05-001", "S05-020"]
source_urls:
  - "https://www.povertyactionlab.org/sites/default/files/research-paper/899%20Allcott%20and%20Rogers%20AER2014%20The%20Short-Run%20and%20Long-Run%20Effects%20of%20Behavioral%20Interventions.pdf"
  - "https://pubsonline.informs.org/doi/10.1287/mksc.1120.0727"
  - "https://europa.eu/youreurope/citizens/consumers/unfair-treatment/unfair-commercial-practices/index_en.htm"
date_accessed: "2026-06-20"
evidence_type: "Energy field experiment; solar peer-effect study; EU consumer guidance"
strength_of_evidence: "medium"
geography: "United States; European Union"
region_applicability: "Indirect for Germany PV sales."
persona_applicability: "Community-minded, environmentalist, status/independence motivated; avoid for privacy-sensitive skeptics."
funnel_stage: "Nurture and reassurance"
quote_stage_relevance: "Medium; strongest as context, not close pressure."
quote_or_data_excerpt: "Allcott and Rogers studied repeated reports with feedback, social comparisons, and tips across more than six million households; Bollinger and Gillingham find residential PV peer effects."
counterevidence: "Social comparison may feel manipulative if framed as shame or if homeowner did not consent to neighborhood benchmarking."
limitations: "Energy conservation is not a purchase; EU rules require accuracy and no misleading omissions."
product_implication: "Assistant can use aggregate local adoption or energy benchmarks only with reliable data source, no personal neighbor disclosure, and no shame framing."
message_implication: "Prefer 'similar homes often ask about X' over 'your neighbors are ahead of you'."
action_implication: "Recommend a benchmark explainer only when backed by reliable regional data and relevant to the objection."
data_fields_required: "benchmark_source; benchmark_geography; aggregation_threshold; privacy_check; consent_context; claim_last_verified_at"
validation_needed: "User-test German homeowner reactions to social-comparison phrasing."
```

```yaml
evidence_id: E05-014
claim: "A/B tests for persuasion tactics should use randomized assignment and contract-relevant outcomes, not just email opens or clicks."
claim_category: "A/B testing; learning loop"
supporting_source_ids: ["S05-011", "S05-012"]
source_urls:
  - "https://robotics.stanford.edu/~ronnyk/2009controlledExperimentsOnTheWebSurvey.pdf"
  - "https://exp-platform.com/Documents/2009-ExPpitfalls.pdf"
date_accessed: "2026-06-20"
evidence_type: "Experimentation methods"
strength_of_evidence: "high"
geography: "General web experimentation; United States source origin"
region_applicability: "High as method; not market-specific."
persona_applicability: "All personas, but randomization must not create unfair or harmful treatment."
funnel_stage: "Learning loop after launch"
quote_stage_relevance: "High: tests should optimize quote-to-next-action and quote-to-contract outcomes."
quote_or_data_excerpt: "Kohavi et al. describe controlled experiments as a method to establish causal relationships between changes and user-observable behavior; pitfall paper defines overall evaluation criterion and warns against short-term-only metrics."
counterevidence: "Small installers may not have enough volume for reliable standalone tests."
limitations: "Web-scale methods require adaptation to low-volume, long-cycle sales."
product_implication: "Assistant should propose experiments only when sample size and ethical guardrails are plausible; otherwise mark as hypothesis."
message_implication: "Do not claim a tactic 'works' from open rates alone."
action_implication: "Experiment templates should define unit, randomization, primary metric, guardrail metrics, duration, and stop rules."
data_fields_required: "experiment_id; assignment_unit; variant_id; outcome_contract_signed; next_step_booked; unsubscribe; complaint; manual_override; sample_size"
validation_needed: "Create pooled Reonic-level experiments or installer cohorts to overcome small-sample constraints."
```

```yaml
evidence_id: E05-015
claim: "Experiment analysis must guard against false positives from weak randomization, underpowered samples, instrumentation errors, dependence, and segment paradoxes."
claim_category: "A/B testing; analytics governance"
supporting_source_ids: ["S05-011", "S05-012"]
source_urls:
  - "https://robotics.stanford.edu/~ronnyk/2009controlledExperimentsOnTheWebSurvey.pdf"
  - "https://exp-platform.com/Documents/2009-ExPpitfalls.pdf"
date_accessed: "2026-06-20"
evidence_type: "Experimentation methods"
strength_of_evidence: "high"
geography: "General web experimentation"
region_applicability: "High as method."
persona_applicability: "All personas"
funnel_stage: "Learning loop"
quote_stage_relevance: "High for product validation."
quote_or_data_excerpt: "Kohavi methods papers emphasize statistical power, sample size, randomization unit, A/A tests, instrumentation audits, and Simpson's paradox checks."
counterevidence: "For early PoC, qualitative learning may be more practical than statistical proof."
limitations: "Methods are not solar-specific."
product_implication: "Assistant analytics should show 'insufficient evidence' rather than overfit individual installer data."
message_implication: "Avoid dashboard language such as 'winner' unless the experiment meets predeclared thresholds."
action_implication: "Provide experiment setup checklist and defer automated personalization until outcome data supports it."
data_fields_required: "pre_registered_hypothesis; minimum_detectable_effect; power; randomization_seed; a_a_test_status; guardrail_metrics; analysis_locked_at"
validation_needed: "Decide whether PoC should include true experimentation or only experiment-design recommendations."
```

```yaml
evidence_id: E05-016
claim: "Savings, financing, tax, incentive, and performance claims are high-risk and must be truthful, caveated, and backed by current assumptions."
claim_category: "ethical red line; compliance; ROI proof"
supporting_source_ids: ["S05-014", "S05-015", "S05-017", "S05-020"]
source_urls:
  - "https://www.ftc.gov/business-guidance/blog/2024/08/dont-waste-your-energy-solar-scam"
  - "https://www.consumerfinance.gov/data-research/research-reports/issue-spotlight-solar-financing/"
  - "https://home.treasury.gov/system/files/136/Consumer-Advisory-Solar-eng.pdf"
  - "https://europa.eu/youreurope/citizens/consumers/unfair-treatment/unfair-commercial-practices/index_en.htm"
date_accessed: "2026-06-20"
evidence_type: "Official consumer-protection and regulatory guidance"
strength_of_evidence: "high"
geography: "United States; European Union"
region_applicability: "High ethical relevance; legal details need Germany/EU counsel."
persona_applicability: "All homeowners; especially investors and financially constrained leads."
funnel_stage: "Quote and contract"
quote_stage_relevance: "Very high."
quote_or_data_excerpt: "FTC warns against overpromising cost savings from tax credits, rebates, or incentives; CFPB says solar loans are not guaranteed to pay for themselves; EU guidance prohibits misleading practices and omissions."
counterevidence: "Specific guaranteed performance can be acceptable if actually in the contract and backed."
limitations: "US tax-credit specifics do not transfer to Germany."
product_implication: "Assistant must require source/date for incentives and assumptions for ROI; generated messages should be blocked if they promise guaranteed savings without contract support."
message_implication: "Say 'estimated under these assumptions' and include what can change; avoid 'free', 'no bill', 'guaranteed return', or 'government program' unless exact and verified."
action_implication: "Route complex financing/tax/incentive claims to human review or authoritative-source refresh."
data_fields_required: "roi_assumptions; incentive_source_url; incentive_checked_at; guarantee_contract_clause; financing_apr; fees; tariff_source; performance_model"
validation_needed: "Build legal/compliance review for Germany-specific incentive and financing statements."
```

```yaml
evidence_id: E05-017
claim: "In Germany, outbound advertising by phone, email, SMS, or similar electronic channels requires strict consent handling, so channel recommendations must be consent-aware."
claim_category: "channel compliance; ethical red line"
supporting_source_ids: ["S05-018", "S05-019"]
source_urls:
  - "https://www.gesetze-im-internet.de/englisch_uwg/englisch_uwg.html"
  - "https://www.bundesnetzagentur.de/unerlaubteTelefonwerbung"
date_accessed: "2026-06-20"
evidence_type: "Germany law and regulator guidance"
strength_of_evidence: "high"
geography: "Germany"
region_applicability: "High for Germany."
persona_applicability: "All homeowners"
funnel_stage: "Any outbound follow-up"
quote_stage_relevance: "Very high because Reonic assistant may recommend email, SMS, call, or WhatsApp."
quote_or_data_excerpt: "UWG Section 7 requires prior express consent for consumer telephone advertising and electronic mail advertising unless narrow existing-customer email conditions apply; Section 7a requires documented telephone-advertising consent storage for five years."
counterevidence: "A customer-requested service reply may not be the same as advertising, but legal interpretation is workflow-specific."
limitations: "Need German counsel to classify post-quote follow-up types and WhatsApp/direct-message cases."
product_implication: "Assistant should maintain per-channel consent, legal basis, opt-out status, and purpose, and should suppress noncompliant recommendations."
message_implication: "Generated outreach should include identity, relevance to the requested quote, and opt-out where required."
action_implication: "If phone consent is missing, recommend a compliant alternative such as responding through the channel the customer initiated, if legally allowed, or scheduling only after consent."
data_fields_required: "consent_phone; consent_email; consent_sms; consent_whatsapp; consent_source; consent_timestamp; opt_out_status; existing_customer_exception; legal_basis; purpose"
validation_needed: "Legal review of consent model and distinction between quote-service communication and marketing."
```

```yaml
evidence_id: E05-018
claim: "Fake or manipulated reviews, hidden sponsored content, misleading omissions, bait offers, and aggressive pressure are explicit EU/Germany-relevant red lines."
claim_category: "ethical red line; social proof; urgency"
supporting_source_ids: ["S05-020", "S05-018", "S05-016"]
source_urls:
  - "https://europa.eu/youreurope/citizens/consumers/unfair-treatment/unfair-commercial-practices/index_en.htm"
  - "https://www.gesetze-im-internet.de/englisch_uwg/englisch_uwg.html"
  - "https://seia.org/seia-solar-business-code/"
date_accessed: "2026-06-20"
evidence_type: "EU consumer guidance; Germany law; solar industry ethics code"
strength_of_evidence: "high"
geography: "European Union; Germany; United States industry code"
region_applicability: "High for Germany via EU/German consumer-protection framework."
persona_applicability: "All homeowners"
funnel_stage: "Marketing and sales"
quote_stage_relevance: "Very high for AI-generated urgency and social proof."
quote_or_data_excerpt: "EU guidance identifies misleading practices, aggressive practices, bait advertising, non-transparent ranking, and fake consumer reviews; SEIA code says not to harass, pressure, or make unsupported claims."
counterevidence: "Real stock limits, installer capacity, quote validity, and incentive deadlines can be used if accurate and disclosed."
limitations: "Specific enforcement depends on jurisdiction and facts."
product_implication: "Assistant must distinguish factual urgency from artificial urgency and require proof for reviews, rankings, and claims."
message_implication: "Allowed: 'quote valid until date because supplier price locked until date'. Blocked: 'last chance' or 'neighbors are all signing' without evidence."
action_implication: "Add a pre-send claim checker and red-line warnings in the installer UI."
data_fields_required: "claim_type; claim_source; claim_valid_until; review_verification; ranking_sponsorship; urgency_reason; compliance_flag"
validation_needed: "Compliance review of generated message policy for Germany."
```

```yaml
evidence_id: E05-019
claim: "High-pressure sales tactics are not just ethically risky; they are associated with solar consumer complaints and official/industry warnings."
claim_category: "ethical red line; trust risk"
supporting_source_ids: ["S05-015", "S05-016", "S05-017", "S05-005"]
source_urls:
  - "https://www.consumerfinance.gov/data-research/research-reports/issue-spotlight-solar-financing/"
  - "https://seia.org/seia-solar-business-code/"
  - "https://home.treasury.gov/system/files/136/Consumer-Advisory-Solar-eng.pdf"
  - "https://www.verbraucherzentrale-bawue.de/wissen/energie/erneuerbare-energien/aktuelle-probleme-in-der-photovoltaik-94813"
date_accessed: "2026-06-20"
evidence_type: "Regulator complaint analysis, industry code, consumer advisory, Germany complaint guidance"
strength_of_evidence: "medium-high"
geography: "United States; Germany"
region_applicability: "High as ethical rule; prevalence differs by market."
persona_applicability: "All homeowners; especially older, lower-literacy, limited-language-proficiency, and financially vulnerable customers"
funnel_stage: "Quote and contract"
quote_stage_relevance: "Very high."
quote_or_data_excerpt: "CFPB and Treasury describe complaints involving pressure and misleading solar sales; SEIA says avoid high-pressure sales; Verbraucherzentrale BW reports problematic PV market practices."
counterevidence: "Some deadlines are real and should be communicated clearly."
limitations: "Complaint examples are not prevalence rates; US vulnerability groups are not Germany-specific."
product_implication: "Assistant should not optimize for closing at the expense of informed consent; pressure language should be refused or rewritten."
message_implication: "Use urgency only when factual, sourced, and paired with the customer's right to review."
action_implication: "If customer shows confusion or vulnerability, recommend pausing for clarification, involving a trusted co-decision-maker if requested, or sending an explainer."
data_fields_required: "urgency_source; customer_confusion_signal; decision_maker_present; vulnerability_flag_explicit_only; language_preference; consent_status; pressure_language_detected"
validation_needed: "Define sensitive-attribute handling and escalation rules with legal/ethics review."
```

```yaml
evidence_id: E05-020
claim: "The assistant should explain persuasion tactics to installers as customer-centered risk reduction and decision support, not as hidden manipulation."
claim_category: "UX explanation; ethics"
supporting_source_ids: ["S05-013", "S05-014", "S05-016", "S05-020"]
source_urls:
  - "https://www.nlr.gov/state-local-tribal/consumer-protection"
  - "https://www.ftc.gov/business-guidance/blog/2024/08/dont-waste-your-energy-solar-scam"
  - "https://seia.org/seia-solar-business-code/"
  - "https://europa.eu/youreurope/citizens/consumers/unfair-treatment/unfair-commercial-practices/index_en.htm"
date_accessed: "2026-06-20"
evidence_type: "Consumer-protection guidance and industry ethics"
strength_of_evidence: "high"
geography: "United States; European Union"
region_applicability: "High as ethical/product principle; Germany legal specifics from S05-018 and S05-019 also apply."
persona_applicability: "All homeowners"
funnel_stage: "Installer-facing strategy explanation"
quote_stage_relevance: "High: explanations shape installer behavior at quote stage."
quote_or_data_excerpt: "Official and industry sources emphasize informed decisions, transparency, non-harassment, accurate information, and protection from fraud/deception."
counterevidence: "Persuasion strategy can still be useful when transparent and customer-aligned."
limitations: "Sources define ethics/compliance, not exact UI wording."
product_implication: "The 'why this action' panel should say what uncertainty it reduces, what evidence it uses, and what guardrail it respects."
message_implication: "Homeowner-facing copy should be respectful and factual; installer-facing reasoning can mention objection/risk category without labeling the homeowner crudely."
action_implication: "Recommend actions like 'clarify payback assumption' or 'schedule partner review' rather than 'exploit loss aversion'."
data_fields_required: "strategy_reason_code; evidence_sources; guardrail_checks; customer_concern; recommended_action; alternative_actions"
validation_needed: "User-test whether installers trust the explanation and whether homeowners perceive communications as respectful."
```

```yaml
evidence_id: E05-021
claim: "Loss aversion and urgency should be treated as high-risk mechanisms and limited to factual deadlines, opportunity costs, or capacity constraints that can be sourced and calmly explained."
claim_category: "urgency; ethical red line"
supporting_source_ids: ["S05-014", "S05-015", "S05-018", "S05-020"]
source_urls:
  - "https://www.ftc.gov/business-guidance/blog/2024/08/dont-waste-your-energy-solar-scam"
  - "https://www.consumerfinance.gov/data-research/research-reports/issue-spotlight-solar-financing/"
  - "https://www.gesetze-im-internet.de/englisch_uwg/englisch_uwg.html"
  - "https://europa.eu/youreurope/citizens/consumers/unfair-treatment/unfair-commercial-practices/index_en.htm"
date_accessed: "2026-06-20"
evidence_type: "Official compliance and consumer-protection guidance"
strength_of_evidence: "high for guardrail; low for performance effect"
geography: "Germany; European Union; United States"
region_applicability: "High for ethical/compliance direction in Germany."
persona_applicability: "All homeowners"
funnel_stage: "Quote follow-up and close"
quote_stage_relevance: "Very high."
quote_or_data_excerpt: "EU guidance prohibits misleading and aggressive practices; FTC/CFPB warn against misleading clean-energy savings and financing claims; UWG bans unacceptable nuisance in advertising."
counterevidence: "Legitimate quote-validity, incentive, installation-slot, or supplier-price deadlines can help decision-making."
limitations: "No direct evidence found that loss-aversion framing improves ethical German PV quote conversion."
product_implication: "Assistant should not generate artificial scarcity, countdowns, fear of missing out, or inflated opportunity-cost claims."
message_implication: "Allowed: 'This supplier price is valid through 2026-07-15.' Blocked: 'You will regret missing this once prices explode' unless sourced and phrased neutrally."
action_implication: "Require an urgency source and expiration date before any urgency-based next action."
data_fields_required: "deadline_type; deadline_source_url; deadline_checked_at; quote_valid_until; installer_capacity_window; incentive_rule; price_lock_terms"
validation_needed: "Create urgency-claim taxonomy and compliance review."
```

```yaml
evidence_id: E05-022
claim: "A/B test candidates that are evidence-backed enough for the PoC are: balanced objection response vs one-sided reassurance, recommended-plan summary vs full-option proposal, local proof asset vs no proof asset, and scheduled-next-step prompt vs generic follow-up."
claim_category: "A/B testing; PoC experiments"
supporting_source_ids: ["S05-001", "S05-008", "S05-009", "S05-010", "S05-011", "S05-012"]
source_urls:
  - "https://pubsonline.informs.org/doi/10.1287/mksc.1120.0727"
  - "https://ucrisportal.univie.ac.at/en/publications/two-sided-advertising-a-meta-analysis/"
  - "https://business.columbia.edu/faculty/research/when-choice-demotivating-can-one-desire-too-much-good-thing"
  - "https://laibson.scholars.harvard.edu/publications/using-implementation-intentions-prompts-enhance-influenza-vaccination-rates"
  - "https://robotics.stanford.edu/~ronnyk/2009controlledExperimentsOnTheWebSurvey.pdf"
  - "https://exp-platform.com/Documents/2009-ExPpitfalls.pdf"
date_accessed: "2026-06-20"
evidence_type: "Mixed direct/indirect evidence plus experiment methodology"
strength_of_evidence: "medium"
geography: "Germany applicability to be validated; source geographies mixed"
region_applicability: "Use as hypotheses in Germany, not product rules, until outcome tested."
persona_applicability: "Variant eligibility should depend on objection/persona state and consent."
funnel_stage: "Post-quote learning loop"
quote_stage_relevance: "High."
quote_or_data_excerpt: "Evidence sources support mechanisms: local PV peer effects, two-sided messages, choice simplification, planning prompts, and controlled experiment design."
counterevidence: "Any tactic can backfire if misapplied, if data is inaccurate, or if channel consent is missing."
limitations: "Most performance evidence is indirect; small sample sizes may block reliable results."
product_implication: "PoC can show experiment recommendations and instrumentation without claiming winners."
message_implication: "Variants must remain truthful, respectful, and substantively equivalent in offer terms."
action_implication: "Generate experiment cards with hypothesis, eligible leads, variants, guardrails, and required sample size warning."
data_fields_required: "experiment_hypothesis; eligibility_rule; variant_content; outcome_metrics; guardrails; sample_size; consent_filters; randomization_unit"
validation_needed: "Use pooled installer data or staged rollout to obtain enough sample size."
```
