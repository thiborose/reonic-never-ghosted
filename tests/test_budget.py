"""P5: cost guardrails. Hard caps on tokens + turns; degrade, never crash the bill."""

import pytest

from engine.budget import Budget, BudgetExceeded, Tier, pick_model


def test_charging_within_budget_decrements_remaining():
    b = Budget(max_tokens=1000, max_turns=3)
    b.charge(400, turn=True)
    assert b.remaining_tokens == 600
    assert b.turns_used == 1


def test_overspending_tokens_raises_and_does_not_go_negative():
    b = Budget(max_tokens=500, max_turns=10)
    with pytest.raises(BudgetExceeded):
        b.charge(600, turn=True)
    assert b.remaining_tokens == 500  # rejected charge leaves budget intact


def test_exceeding_turn_cap_raises():
    b = Budget(max_tokens=10_000, max_turns=2)
    b.charge(10, turn=True)
    b.charge(10, turn=True)
    with pytest.raises(BudgetExceeded):
        b.charge(10, turn=True)


def test_model_tiering_cheap_for_extract_strong_for_strategy():
    assert pick_model("persona") is Tier.cheap
    assert pick_model("extract") is Tier.cheap
    assert pick_model("strategy") is Tier.strong
    assert pick_model("critic") is Tier.strong
