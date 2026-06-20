# Backend Plan

Pillar-based build for the **Never Ghosted** *service layer* — persistence, API,
seed data, and the wiring that puts the strategy engine behind HTTP. Each pillar
is a shippable vertical slice: it boots, has tests, and gives the frontend or the
demo something real to call. We don't start a pillar until the prior one is green.

- *What data and why:* [`../metadata.md`](../metadata.md)
- *AI-vs-deterministic split:* [`information_flow.md`](information_flow.md)
- *The strategy engine itself:* [`agent_plan.md`](agent_plan.md) — **owned there, not here.**

## Status (2026-06-20)

| Pillar | State | Notes |
|--------|-------|-------|
| BP0 Foundation | ✅ done, merged to `main` | FastAPI, `/health`, config, db, CI + Postgres service, docker-compose (Postgres on host **5433**) |
| BP1 Domain + read API | ✅ done, merged to `main` | 13 SQLModel tables, deterministic seed (1 org / 2 installers / 20 active + 100 terminal deals), `/admin/seed`, `/installers/{id}/leads`, `/deals/{id}`, CORS open for dev |
| BP2 Engine integration | ✅ backend half done (`feat/backend-bp2`) | `StrategyEngine` Protocol + `FakeEngine`, context assembly, knowledge loader, `POST /deals/{id}/strategy`, `.../steps/{order}/draft`, `.../revise`, `GET /orgs/{id}/benchmarks`; persists Strategy/PersonaProfile + append-only StrategyEvent. **Remaining:** swap `FakeEngine`→real engine in `app/integration/engine.py::get_engine` when `feat/strategy-engine` merges |
| BP3 Feedback loop | ⬜ not started | `data/simulator.py` outcomes + goal-arc update; needs real engine goal-arc for the reset/advance |

**Repo state:** monorepo — `frontend/` (renamed from `reonic-never-ghosted/`) + `backend/`. The strategy engine ([`agent_plan.md`](agent_plan.md)) is being built in a **separate worktree/branch** `feat/strategy-engine` and is **not yet on `main`** — so BP2 can't import it yet. Canonical entity shapes live in `backend/app/models/` (the engine imports from here, per the seam).

**Vercel note:** the frontend folder rename needs the Vercel project's *Root Directory* dashboard setting updated to `frontend/` — not an in-repo change.

**To run/test backend:** `cd backend && docker compose up -d db && uv sync && uv run uvicorn app.main:app --reload`; tests `uv run pytest`; swagger at `/docs`.

## Scope boundary (read this first)

To avoid duplicating [`agent_plan.md`](agent_plan.md):

**This plan owns** — FastAPI service, Postgres persistence (SQLModel + JSONB),
repositories, the **DB-backed** seed generator, read APIs, the outcome simulator,
and wiring the strategy engine behind HTTP + persisting its artifacts.

**`agent_plan.md` owns** — the strategy engine: deterministic core
(ghost/engagement score, benchmark aggregation, goal-arc advance/reset, revision
checks), AI touchpoints (extract / persona / strategy / critic), Engine A/B,
append-only log *semantics*, cost guardrails. Built mocked, no DB, first.

**The seam** — the engine exposes pure functions + tool interfaces returning
**Pydantic** models. Backend supplies the DB-backed implementations of the
engine's tool data sources (`benchmark_lookup`, `knowledge_lookup`, persona
cache) and persists the engine's outputs (Strategy, PersonaProfile, append-log
events) as JSONB. **Entity Pydantic models are shared** — backend's SQLModel
tables wrap the same shapes defined in agent_plan P0, not a parallel copy.

## Tech stack (minimal — add only when a pillar needs it)

| Concern | Choice | Why |
|---------|--------|-----|
| Language | Python 3.12 | |
| Pkg/venv | `uv` | fast, single tool, lockfile |
| API | FastAPI + uvicorn | |
| ORM/models | SQLModel (SQLAlchemy + Pydantic) | one model type for DB rows *and* API I/O; shares Pydantic with the engine |
| DB | Postgres (psycopg, **sync**) | JSONB for AI artifacts (PersonaProfile, Strategy, log) |
| Schema | `SQLModel.metadata.create_all` + a `reset` script | hackathon. **No Alembic** until schema churns in prod |
| Config | pydantic-settings | env-driven, one `Settings` object |
| Test/lint | pytest + ruff | matches [`testing_ci.md`](testing_ci.md) |

LLM SDK/provider lives with the engine (agent_plan). Deliberately **not** here in
v1: Alembic, queues, Redis, auth/JWT, async DB. Add each only when a pillar can't
ship without it.

## Repo layout — sibling `backend/` (monorepo)

```
frontend/
backend/
  pyproject.toml             # uv-managed
  app/
    main.py                  # FastAPI app, router wiring
    config.py                # Settings
    db.py                    # engine, session dependency, create_all + reset
    models/                  # SQLModel tables wrapping shared engine Pydantic shapes
    repositories/            # data access, thin (also back the engine's tools)
    routers/                 # endpoints, one module per pillar surface
    data/                    # generator.py (DB seed), simulator.py (outcomes)
    integration/             # adapters binding the engine's tool interfaces to repos
  tests/
```

---

## Pillar BP0 — Foundation

App skeleton that boots and proves the rails.

- `uv` project, `pyproject.toml`, ruff config.
- FastAPI app + `GET /health`.
- `Settings` (DB url, etc.) from env.
- `db.py`: engine + session dependency + `create_all` + a drop/recreate `reset`.
- pytest wired to a Postgres test DB; one passing test.
- GitHub Actions: `ruff check` + `pytest` (live-marked tests excluded), green
  required before merge to `main`.

**Ships when:** `uvicorn` boots, `/health` 200, CI green on an empty schema.

## Pillar BP1 — Domain + persistence + read API

Everything the frontend needs to *render*, and the tables the engine's outputs
land in.

- SQLModel **tables** for every entity in [`metadata.md`](../metadata.md): Org,
  Installer, Customer, Quote, CompetitorPressure, Deal, Touch, Note, Signal.
  These wrap the same Pydantic shapes as agent_plan P0 — import/share, don't fork.
- Tables for engine outputs with JSONB payloads: PersonaProfile, Strategy
  (+ Step/Chip nested in JSONB), Outcome, and the append-only StrategyEvent log.
  Created now, populated by later pillars.
- Thin repositories (no business logic).
- `data/generator.py` — seeded RNG, writes to Postgres: 1 small Org, 1–3
  Installers, ~20 active Customer+Quote+Deal across stages, ~100 terminal deals
  (benchmark population), plausible Touch/Note/Signal histories. Reuses
  agent_plan's golden prospects where they fit. `POST /admin/seed` + `reset`.
- Read endpoints:
  - `GET /installers/{id}/leads` — lead list (stage, last_activity_at).
  - `GET /deals/{id}` — full deal detail; persona/strategy fields null until BP2.

**Ships when:** seed a realistic org → frontend lead-list + deal-detail render
from real responses. Tests assert exact seeded counts (seeded RNG).

## Pillar BP2 — Engine integration & persistence

Put the [`agent_plan.md`](agent_plan.md) engine behind HTTP and make its work durable.

**Integration-first (engine not yet on `main`):** define a `StrategyEngine`
**Protocol** in `integration/`, build the whole backend side against it (tool
data sources, persistence, endpoints), and inject a **fake engine** returning a
fixture `Strategy` for tests + local demo. When `feat/strategy-engine` merges,
swap the fake for the real implementation behind the same Protocol — no endpoint
or persistence changes. This is the build order: backend half ships now, engine
binds later.

- `integration/` adapters bind the engine's tool interfaces to BP1 repositories:
  - `benchmark_lookup` → benchmark aggregation over seeded deals (engine's
    deterministic core computes; backend feeds it the rows).
  - `knowledge_lookup` → curated KB JSON loader.
  - persona cache → PersonaProfile table, keyed on a deal's touches (skip re-run
    when unchanged — agent_plan P5 cost lever).
- Persist engine outputs: PersonaProfile, Strategy, and **every** generate /
  regenerate / revise as an appended StrategyEvent (the log *is* the trace;
  semantics owned by agent_plan P3 — backend just provides the durable store).
- Surface engine deterministic reads computed from DB rows: temperature / ghost
  risk on `GET /deals/{id}`, benchmarks on `GET /orgs/{id}/benchmarks`.
- Endpoints:
  - `POST /deals/{id}/strategy` — run engine (Engine A), persist + append.
  - `POST /steps/{id}/draft` — channel-ready copy for an accepted step.
  - `POST /steps/{id}/revise` — engine revise (gated by its deterministic
    checks), append result.
  - *(flagged)* `POST /deals/{id}/strategy/compare` — Engine B, on demand.

**Hard rule (enforced at the seam):** `benchmark` / `deal_history` chip numbers
come from the engine's deterministic computation over real DB rows — never model
free-text. Backend persists ids + numbers, doesn't let the model invent them.

**Ships when:** post a deal id → ordered strategy with personas, levers, real
chips, persisted and re-readable; the append log reconstructs the trace. Engine
internals tested in agent_plan with faked clients; backend tests assert
persistence, wiring, and the chip-number invariant.

## Pillar BP3 — Feedback loop (demo + stretch)

Close the loop without real users.

- `data/simulator.py` — accepted strategy → probabilistic `Outcome` events
  (explicit constant tables, seeded RNG, **not** the LLM), persisted.
- On new outcomes, recompute temperature/goal (engine's goal-arc advance/reset)
  and reflect on the deal.
- `POST /deals/{id}/simulate` drives the demo.
- **Stretch:** adaptive re-plan — outcomes trigger a fresh `POST .../strategy`.

**Ships when:** accept steps → outcomes arrive → temperature/goal update on the
deal. Tests assert outcome distributions on a fixed seed.

---

## Build order

```
BP0 ─► BP1 ─► BP2 ─► BP3
              ▲
              └─ depends on agent_plan P1+P2 (engine) being importable
```

BP1 unblocks the frontend earliest (read API), so it lands right after BP0. BP2
is the integration seam and depends on the engine existing (agent_plan P1–P2).
BP3 is demo polish + the stretch re-plan.
