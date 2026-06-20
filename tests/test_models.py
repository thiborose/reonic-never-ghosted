"""P0: entities validate, golden set is well-formed, knowledge loads."""

import pytest
from pydantic import ValidationError

from engine.golden import load_golden_prospects
from engine.knowledge import load_knowledge
from engine.models import Customer, Product, Quote


def test_golden_set_has_six_prospects():
    prospects = load_golden_prospects()
    assert len(prospects) == 6


def test_golden_prospects_cover_required_scenarios():
    regions = {p.customer.region for p in load_golden_prospects()}
    # research summary: Munich, Hamburg, NRW, Saxony, Baden-Wuerttemberg, Berlin
    assert len(regions) == 6


def test_every_golden_prospect_is_internally_consistent():
    for p in load_golden_prospects():
        assert p.quote.customer_id == p.customer.id
        assert p.deal.customer_id == p.customer.id
        assert p.deal.quote_id == p.quote.id
        assert p.quote.products, "quote must have at least one product"
        assert p.customer.contact_channels, "customer needs a channel"


def test_customer_requires_a_contact_channel():
    with pytest.raises(ValidationError):
        Customer(id="c", org_id="o", assigned_installer_id="i", name="X",
                 region="Berlin", locale="de-DE", contact_channels=[])


def test_quote_requires_a_product():
    with pytest.raises(ValidationError):
        Quote(id="q", customer_id="c", products=[], total_price=1000,
              currency="EUR", sent_at="2026-06-01T00:00:00")


def test_knowledge_has_reviews_and_competitor_entries():
    kb = load_knowledge()
    assert kb.reviews, "need at least one review/trustpilot entry"
    assert kb.competitor_prices, "need at least one competitor price point"
