# Reonic – Never Ghosted

FastAPI backend + Next.js frontend. Run locally in two terminals.

## Backend (Postgres :5433, API :8000)

```bash
cd backend
docker compose up -d db      # Postgres via docker compose
uv sync
uv run uvicorn app.main:app --reload
curl -X POST http://localhost:8000/admin/seed   # load demo data, run once
```

## Frontend (:3000)

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:3000/quotes. API docs at http://localhost:8000/docs.

## Strategy engine + A/B comparison

Needs `OPENAI_API_KEY` in a root `.env` (`cp .env.template .env`). Uses the
backend venv (has `openai` + `pydantic-ai`).

```bash
PY=backend/.venv/bin/python3

$PY -m engine.demo munich --stub   # our engine, no key/spend (canned output)
$PY -m engine.demo munich          # our engine, live next-steps
$PY ab_compare.py munich           # our engine vs basic agent + LLM judge
$PY ab_compare.py                  # all 6 golden prospects, win tally
```

Prospects: `munich hamburg nrw saxony bw berlin`.

