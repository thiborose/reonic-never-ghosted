# Agent Launch Runbook

Use this when the user approves starting research.

## Launch Principle

Do not launch all agents blindly. Start with Agent 0 because the Reonic public ecosystem work informs the product scope and mocked data assumptions for the rest of the team.

Recommended sequence:

1. Agent 0: Reonic public ecosystem and product scope.
2. Agents 1, 2, 3, 4, and 5 in parallel after Agent 0 has at least preliminary findings.
3. Agent 6 after Agents 2, 3, and 4 have enough input on customer objections, sales process, and German constraints.
4. Agent 7 after all other agents complete or provide handoff notes.

If speed is more important than strict dependency management, Agents 1 through 5 can start in parallel with Agent 0, but each must label assumptions that depend on Reonic product scope.

## Standard Spawn Prompt

Use this structure for each sub-agent:

```text
You are Agent <N>: <name> for the Reonic marketing assistant research phase.

Read these files first:
- AGENTS.md
- RESEARCH_PLAN.md
- research/README.md
- research/_agent_briefs/<brief_file>.md
- relevant templates in research/_templates/

Work only in:
- research/agents/<agent_folder>/

Do real research only for your assigned scope. Use web research when needed, prioritize Germany-specific sources, and label non-Germany evidence as transferable or unvalidated. Do not edit other agents' folders. Do not write RESEARCH_SUMMARY.md.

Required outputs:
- sources.md
- evidence.md
- findings.md
- handoff.md
- open_questions.md

Every claim needs sources, dates, geography, confidence, limitations, and product implications.
```

## Agent Brief Map

| Agent | Brief | Work folder |
| --- | --- | --- |
| 0 | `_agent_briefs/agent_00_reonic_public_ecosystem.md` | `agents/agent_00_reonic_public_ecosystem/` |
| 1 | `_agent_briefs/agent_01_persona_segmentation.md` | `agents/agent_01_persona_segmentation/` |
| 2 | `_agent_briefs/agent_02_voice_of_customer.md` | `agents/agent_02_voice_of_customer/` |
| 3 | `_agent_briefs/agent_03_objection_sales_process.md` | `agents/agent_03_objection_sales_process/` |
| 4 | `_agent_briefs/agent_04_germany_market_economics.md` | `agents/agent_04_germany_market_economics/` |
| 5 | `_agent_briefs/agent_05_persuasion_evidence.md` | `agents/agent_05_persuasion_evidence/` |
| 6 | `_agent_briefs/agent_06_action_calendar_debrief.md` | `agents/agent_06_action_calendar_debrief/` |
| 7 | `_agent_briefs/agent_07_product_synthesis.md` | `agents/agent_07_product_synthesis/` |

## Completion Check

Before consolidation, each agent folder must contain:

- A non-empty `sources.md`.
- A non-empty `evidence.md`.
- A synthesized `findings.md`.
- A clear `handoff.md`.
- An `open_questions.md` with unresolved items.

Then consolidate using `research/CONSOLIDATION_GUIDE.md`.

