"""Adapter self-check: GoldenProspect -> basic-agent DealContext maps faithfully.

Pure mapping only — no LLM, no OPENAI_API_KEY. Skips cleanly if the backend's
pydantic-ai input models aren't installed in this env.
"""

import sys
from pathlib import Path

import pytest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "backend"))

pytest.importorskip("app.agent.input_models")

from ab_compare import to_deal_context  # noqa: E402
from engine.golden import load_golden_prospects  # noqa: E402


def _by_region(region):
    return next(p for p in load_golden_prospects() if p.customer.region == region)


def test_munich_maps_price_competitor_and_notes():
    ctx = to_deal_context(_by_region("Munich"))
    assert ctx.customer.name == "Sabine Mueller"
    assert ctx.quote.price_eur == 38400
    assert ctx.quote.competitor_prices_eur == [41200]  # competitor pressure carried
    assert ctx.notes and "competitor" in ctx.notes[0].content
    assert ctx.days_since_quote == 10  # 2026-06-10 -> 2026-06-20


def test_berlin_touch_becomes_communication_no_competitor():
    ctx = to_deal_context(_by_region("Berlin"))
    assert ctx.quote.competitor_prices_eur == []  # no competitor on this fixture
    assert len(ctx.communications) == 1
    assert ctx.communications[0].content == "Sent quote, no reply since."
