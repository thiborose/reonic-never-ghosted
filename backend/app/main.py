"""FastAPI app entrypoint and router wiring."""

from fastapi import FastAPI

app = FastAPI(title="Never Ghosted")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}
