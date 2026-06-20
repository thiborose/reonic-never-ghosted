"""P3: append-only strategy log + revise loop. Nothing ever overwrites."""

from datetime import datetime

from engine.deterministic import Goal
from engine.log import EventKind, StrategyLog, apply_revision, record
from engine.strategy import (
    BuyerProfile,
    Persona,
    PersonaScore,
    Strategy,
)

NOW = datetime(2026, 6, 20, 12, 0, 0)


def _strategy(summary: str) -> Strategy:
    return Strategy(
        deal_id="d1",
        buyer_profile=BuyerProfile(
            personas=[PersonaScore(persona=Persona.roi_investor, weight=0.6,
                                   strength="moderate")],
            top_motivations=["payback"], objections=[]),
        current_goal=Goal.build_trust, steps=[], summary=summary)


def test_events_are_appended_in_order(tmp_path):
    log = StrategyLog(tmp_path)
    record(log, "d1", _strategy("first"), EventKind.generated, now=NOW)
    record(log, "d1", _strategy("second"), EventKind.regenerated, now=NOW)
    events = log.events("d1")
    assert [e.kind for e in events] == [EventKind.generated, EventKind.regenerated]
    assert log.latest_strategy("d1").summary == "second"


def test_unsupported_revision_is_rejected_and_does_not_change_strategy(tmp_path):
    log = StrategyLog(tmp_path)
    record(log, "d1", _strategy("first"), EventKind.generated, now=NOW)

    def regenerate(_text):
        raise AssertionError("must not regenerate on a rejected revision")

    ev = apply_revision(log, "d1", "match the €99,999 offer",
                        supported_amounts={38400}, regenerate=regenerate, now=NOW)
    assert ev.kind is EventKind.revision_rejected
    assert ev.revision_check.supported is False
    # strategy unchanged, but the rejection IS recorded (append-only history)
    assert log.latest_strategy("d1").summary == "first"
    assert len(log.events("d1")) == 2


def test_supported_revision_appends_new_strategy_keeping_history(tmp_path):
    log = StrategyLog(tmp_path)
    record(log, "d1", _strategy("first"), EventKind.generated, now=NOW)

    ev = apply_revision(log, "d1", "lead with the €38,400 comparison",
                        supported_amounts={38400},
                        regenerate=lambda text: _strategy("revised"), now=NOW)
    assert ev.kind is EventKind.revised
    assert log.latest_strategy("d1").summary == "revised"
    # original still present — nothing overwritten
    assert log.events("d1")[0].strategy.summary == "first"
    assert len(log.events("d1")) == 2
