# Research Workspace

This directory is the controlled workspace for the research phase described in `RESEARCH_PLAN.md`.

Do not perform research in this setup step. Future agents should use this workspace when the research phase is explicitly started.

## Scope

- Primary market: Germany.
- Secondary evidence: DACH, Europe, UK, US, and other markets only when useful and clearly labeled as transferable or unvalidated.
- Funnel: post-quote journey from "quote sent" to "contract signed".
- Product behavior: the assistant diagnoses the customer state, recommends the next best action, helps prepare and schedule it, captures the installer debrief, and updates the strategy.
- Installer focus: small and mid-sized renewable energy installers, especially owner-operators with many active leads and limited sales capacity.

## Workspace Rules

- Each agent writes primarily inside its assigned folder under `research/agents/`.
- Agents may add sources and claims to the final deliverable placeholders only if instructed by the orchestrating agent.
- Do not overwrite another agent's folder.
- Every factual claim needs a source, geography, date, source type, confidence rating, and product implication.
- Germany-specific evidence is preferred. Non-Germany evidence must include transferability notes.
- Keep raw observations separate from synthesized findings.
- Mark weak, anecdotal, vendor-provided, or inferred evidence clearly.
- Do not collect private data, use non-public installer data, or do live outreach unless explicitly authorized.

## Directory Layout

- `_agent_briefs/`: task briefs to pass to future sub-agents.
- `_templates/`: source, evidence, and output templates.
- `agents/`: per-agent working folders.
- `00_source_index.md` through `16_open_questions.md`: final research deliverables to be filled during the research phase.

## Recommended Agent Workflow

1. Read `RESEARCH_PLAN.md`.
2. Read this `research/README.md`.
3. Read the relevant brief in `research/_agent_briefs/`.
4. Work only in the assigned folder under `research/agents/`.
5. Log every source in `sources.md`.
6. Extract claims into `evidence.md`.
7. Synthesize findings in `findings.md`.
8. Write final handoff notes in `handoff.md`.
9. Leave gaps and uncertainties in `open_questions.md`.

## Consolidation

After agent work is complete, the orchestrating agent should consolidate the research into:

- The final deliverable files under `research/`.
- `RESEARCH_SUMMARY.md`.

