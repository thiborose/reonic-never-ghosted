# 00 Source Index

Status: completed synthesis on 2026-06-20.

Purpose: master index of the source bundles and the highest-value direct sources used in the research phase. Full extraction records live in each agent folder.

## Agent Source Bundles

| ID | Bundle | Location | Coverage | Confidence | Limitations |
| --- | --- | --- | --- | --- | --- |
| A0 | Reonic public ecosystem | `research/agents/agent_00_reonic_public_ecosystem/` | Reonic public website, product docs, AI pages, services, customer stories, installer signals | High for public product/workflow; medium for actual customer usage mix | No private Reonic schema, no active-customer verification, no funnel outcomes |
| A1 | Persona segmentation | `research/agents/agent_01_persona_segmentation/` | Germany homeowner motives, barriers, persona cards, segmentation rules | High for ROI/risk dimensions; medium for autarky/climate/system; unknown for family-as-persona | No Reonic CRM/win-loss data |
| A2 | Voice of customer | `research/agents/agent_02_voice_of_customer/` | German public reviews, forums, Reddit, consumer advice, complaint reporting | Medium overall; high where consumer guidance aligns with forum evidence | Reviews/forums are not prevalence evidence |
| A3 | Objection and sales process | `research/agents/agent_03_objection_sales_process/` | Consolidated quote-stage objection library and routing rules | High for proposal/claim/consent gates; medium for cadence and action weights | Built from upstream evidence, not internal outcome data |
| A4 | Germany market economics | `research/agents/agent_04_germany_market_economics/` | Feed-in tariffs, prices, self-consumption, subsidy, finance, tax, MaStR, VNB, outreach compliance | High for official facts and compliance guardrails; medium for economic defaults | Time-sensitive; local subsidy/finance/tariff details require live checks |
| A5 | Persuasion evidence | `research/agents/agent_05_persuasion_evidence/` | Ethical persuasion, risk reduction, social proof, A/B testing, red lines | High for guardrails; medium for transferred tactics | Limited direct German solar quote-stage experiments |
| A6 | Action, calendar, and debrief | `research/agents/agent_06_action_calendar_debrief/` | Action taxonomy, channel gates, scheduling, visit logic, debrief loop | High for consent/proposal/document rules; medium for channel/visit thresholds | Cadence and travel thresholds need Reonic outcome data |
| A7 | Product synthesis | `research/agents/agent_07_product_synthesis/` | PoC workflow, data model, strategy engine, guardrails, demo scenarios, metrics | Medium-high for product direction | Agent 3 was pending when A7 ran; integrated later in top-level summary |

## Key Direct Sources

| Source | URL | Main data used | Geography | Notes |
| --- | --- | --- | --- | --- |
| Reonic Germany homepage | https://reonic.com/de-de/ | CRM, planning, proposals, installation management, AI, WhatsApp, lead scoring, competitor analysis, meeting summaries, 3,000+ customers | Germany | Public positioning, not usage telemetry |
| Reonic 360 Household | https://reonic.com/de-de/product/360h/ | PV, storage, EV charging, heat pump workflow; lead qualification; portal; appointments; offers; profitability; digital close | Germany | Primary product-scope source |
| Reonic solar installer page | https://reonic.com/en-gb/industry/solar/ | CRM, planning, quotes/signature, customer management, installation documentation, PV/storage/wallbox/heat pump scope | Europe/Germany transfer | Supports multi-product installer workflow |
| Reonic REST/docs | https://docs.reonic.de/docs/integrations/rest/ | Offer/request/status/signature-like mock fields | Reonic docs | Used only for mock schema direction |
| Bundesnetzagentur EEG rates | https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/ErneuerbareEnergien/EEG_Foerderung/start.html | Feed-in tariff window and size bands | Germany | Checked 2026-06-20; must be refreshed in product |
| Bundesnetzagentur telephone advertising | https://www.bundesnetzagentur.de/unerlaubteTelefonwerbung | Prior consent required for consumer advertising calls; fines risk | Germany | Legal review still needed for exact service/ad distinction |
| E.ON / Statista homeowner survey via pv magazine | https://www.pv-magazine.de/unternehmensmeldungen/e-on-umfrage-fast-jeder-dritte-hausbesitzer-plant-installation-einer-solaranlage-bis-ende-2025/ | Motives: lower electricity costs, climate, property value, autarky, heat pump, EV | Germany | Corporate survey release; not quote-stage outcomes |
| Wegatech / YouGov homeowner survey | https://www.wegatech.de/ratgeber/yougov-studie-2022/ | Autarky interest; barriers including upfront cost, building constraints, economic doubts | Germany | Older source but useful for motive/barrier baseline |
| KfW Energiewendebarometer summary via pv magazine | https://www.pv-magazine.de/2024/09/12/photovoltaik-anlagen-sind-fuer-haushalte-der-favorit-unter-den-energiewendetechnologien/ | Household adoption of PV/storage/heat pump tech and barriers | Germany | Strong baseline, not quote-stage conversion |
| Solarwatt / Appinio study via pv magazine | https://www.pv-magazine.de/2023/04/03/solarwatt-marktstudie-photovoltaik-hoch-im-kurs-bei-hauseigentuemern/ | PV motives: energy cost savings and independence | Germany | Corporate study release |
| Verbraucherzentrale / consumer offer guidance | See Agent 1 and Agent 2 source records | Itemization, assumptions, comparison, local references, offer caution | Germany | Strong for proposal clarity and guardrails |
| Fraunhofer ISE Photovoltaics Report | See Agent 4 source records | Regional yield context, PV cost context, Germany PV market facts | Germany | Use current version at generation time |
| PVGIS | See Agent 4 source records | Sample regional yield differences | EU/Germany | Use postcode/roof data in product |
| OpusFlow official site | https://opusflow.io/ | ERP for solar, heat pump, battery, charging installers; sales/ops/planning/warehouse/finance | Europe | Competitive context |
| Solar Monkey official site | https://solarmonkey.io/ | Quotation software for PV, batteries, heat pumps, EV chargers; options comparison | Europe | Competitive context |
| autarc official site | https://www.autarc.energy/global | AI-supported sales/planning for heat pumps, solar, storage, wallboxes | Germany/EU | Competitive context |
| Sollit official site | https://sollit.com/ | Sustainable installer platform from lead/design/install/service | Europe | Competitive context |
| Sunvoy official site | https://sunvoy.com/ | White-label solar customer portal, referrals, reviews, customer journey, operations | US/global | Competitive/adjacent customer-portal context |

## Source Quality Rules

- Public Reonic pages prove public product positioning and plausible mock fields, not internal adoption, conversion impact, or current customer permissions.
- Public reviews/forums are used for language, objection classes, and trust risks, not prevalence.
- Official German sources and regulator pages are strongest for tariffs, MaStR, consent, and legal guardrails, but the product must refresh time-sensitive facts.
- US/general sales and behavioral evidence is marked as transferable only where Germany-specific evidence was not found.
- Any homeowner-facing claim about savings, subsidies, tariffs, financing, timelines, local references, or urgency needs source/date metadata.
