import pytest
from sqlmodel import Session

import app.models  # noqa: F401 — register tables
from app.data import generator
from app.db import engine, reset


@pytest.fixture(scope="session")
def seeded() -> dict[str, int]:
    """Reset + seed once for the whole test session."""
    reset()
    with Session(engine) as session:
        counts = generator.seed(session)
        session.commit()
    return counts


@pytest.fixture
def session():
    with Session(engine) as s:
        yield s
