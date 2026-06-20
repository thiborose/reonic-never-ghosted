# Agent Strategy Build Plan

How we build the **Never Ghosted** strategy engine, broken into testable pillars.

Builds on the existing design — don't re-derive it:
[`information_flow.md`](information_flow.md) (8-step pipeline + AI-vs-deterministic
split), [`../metadata.md`](../metadata.md) (entities, persona vector, objection
taxonomy, persuasion levers, goal arc, evidence chips).

## Decisions (locked)

- **Engine A = workhorse.** Single agent + tools → structured strategy. Cheap, fast.
- **Engine B = showpiece.** Orchestrated multi-call (`extract→persona→strategy→
  critic`) behind a "compare" click. Demos visible agent flow. Not a quality bet
  yet — research says don't model personas as separate debating agents, and the
  weighted persona vector already does that synthesis in one step.
- **Stack stays Python/FastAPI + OpenAI credits.** No voltagent (would force
  TS/Node). The **append-only strategy log IS the trace** — emit each phase as an
  event, render the flow in the frontend from that JSON. One artifact also covers
  the "Revise this strategy" feedback loop and the "append, never overwrite"
  thought-history requirement.
- **This sprint: engine only, everything mocked.** No DB, no frontend (frontend =
  the two Subframe screens as spec, no code yet). Mock data + 6 golden prospects +
  static knowledge JSON.

Not building (and when to revisit):

- `skipped:` voltagent, live review/competitor ingestion agents, real DB,
  frontend, persona-debate-as-quality-lever.
- `add when:` real outcome data exists, or the single agent measurably falls short.

## Pillars

Each ships independently with a failing-test-first per `IMPLEMENTATION_STANDARDS.md`.

| # | Pillar | AI? | What ships | Test that fails if broken | Cost |
|---|--------|-----|-----------|---------------------------|------|
| **P0** | Mock data + golden set | no | Pydantic entities (mandatory core from `metadata.md` + enough enrichment for chips), 6 golden prospects (research summary), static knowledge JSON (reviews / Trustpilot / competitor price) | fixtures load + schema-validate; 6 prospects present | free |
| **P1** | Deterministic core | **no** | ghost/engagement score, benchmark aggregation, goal-arc advance/reset, revision-validation checks — pure functions | unit test each; benchmark number never model-sourced | free |
| **P2** | **Engine A** (single agent + tools) | yes | tools = `persona_score`, `benchmark_lookup`, `knowledge_lookup`; output = `Strategy{buyer_profile, current_goal, steps[]}` structured Pydantic | golden-set → schema valid + invariants (below) | strong model, 1 call + tool loop |
| **P3** | Append-only log + revise loop | partial | per-deal event store (jsonl/table); generate / regenerate / revise = **append** events; revise gated by P1 checks. = trace + reasoning + Subframe screen-2 feedback | append never overwrites; unsupported revise rejected | cheap |
| **P4** | **Engine B** (orchestration, flagged) | yes | `extract→persona→strategy→critic`, reuses P1/P2 tools, emits each phase as flow events into the same log → renderable. Runs only on "compare" | same `Strategy` schema as A; per-deal token cap enforced | capped, on-demand |
| **P5** | Cost guardrails | no | token/turn budget wrapper, model tiering (cheap = extract/persona, strong = strategy/critic), persona cache keyed on touches | budget exceeded → degrade, not crash | free |
| **P6** | *(stretch)* LLM-judge | yes | judge A vs B on golden set | — | on-demand |

**Spine = P0 → P1 → P2 → P3** — alone a demoable product: generate strategy, see
reasoning, revise it. **P4 + P5** add the wow + safety. **P6** stretch.

## Invariants (trust + cost guarantees, enforced everywhere)

- `benchmark` / `deal_history` chip numbers come from **P1 deterministic**
  computation. The model may reference a benchmark by id, never invent the number.
- Strategy generation reads `current_goal`; never proposes commitment before the
  gap is framed (trust → urgency → close → ask).
- Every generate / regenerate / revise **appends** an event; nothing overwrites.

## Cost cap levers (do all, all cheap)

- Deterministic steps (P1) stay non-AI — free.
- Cheap model for extraction/persona; strong model only for final strategy + critic.
- Hard caps: max agent turns, max tokens/deal, per-deal budget → degrade past it.
- Cache persona scoring per deal; re-run only on new touches/notes.
- Run expensive Engine B only on explicit "compare", not every generate.
