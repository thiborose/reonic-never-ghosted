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
