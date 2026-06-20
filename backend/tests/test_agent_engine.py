"""AgentEngine mapping tests — no network; a stub agent stands in for OpenAI."""

from datetime import UTC, datetime

from app.agent.output_model import (
    ActionPlan,
    PhoneCallTask,
    SendEmailTask,
    SendGiftTask,
)
from app.integration import engine as engine_mod
from app.integration.agent_engine import AgentEngine, to_deal_context
from app.integration.engine import EngineContext, FakeEngine
from app.models import Customer, Deal, Installer, Note, Quote, Touch
from app.models.enums import (
    Channel,
    DealStage,
    Direction,
    Goal,
    NoteType,
    PersuasionLever,
    ProductType,
)


def _ctx() -> EngineContext:
    now = datetime.now(UTC)
    return EngineContext(
        deal=Deal(
            id=1,
            customer_id=1,
            quote_id=1,
            installer_id=1,
            stage=DealStage.quote_sent,
            last_activity_at=now,
            current_goal=Goal.build_trust,
        ),
        installer=Installer(id=1, org_id=1, name="Lars"),
        customer=Customer(
            id=1,
            org_id=1,
            assigned_installer_id=1,
            name="Mara",
            region="Köln",
            channel_preference="email",
        ),
        quote=Quote(
            id=1,
            customer_id=1,
            products=[{"type": "heat_pump", "qty": 1}],
            total_price=18000.0,
            currency="EUR",
            sent_at=now,
        ),
        touches=[
            Touch(
                id=1,
                deal_id=1,
                channel=Channel.email,
                direction=Direction.outbound,
                timestamp=now,
                body="Sent the quote.",
            )
        ],
        notes=[Note(id=1, deal_id=1, author_id=1, type=NoteType.voice, content="Worried.", timestamp=now)],
        competitor={"competitor_name": "SunCo", "competitor_price": 17200.0},
    )


def _plan() -> ActionPlan:
    return ActionPlan(
        summary="Earn trust, then ask.",
        tasks=[
            SendEmailTask(
                type="send_email", goal=Goal.build_trust, reason="Open warmly.",
                subject="Hi", body="Body text",
            ),
            PhoneCallTask(
                type="phone_call", goal=Goal.establish_value, reason="Address worry.",
                suggested_date="2026-06-25", script=["point one", "point two"],
            ),
            SendGiftTask(
                type="send_gift", goal=Goal.build_trust, reason="Goodwill.",
                gift_type="coffee voucher",
            ),
        ],
    )


class _StubAgent:
    def __init__(self, plan: ActionPlan) -> None:
        self._plan = plan
        self.received: object = None

    def run(self, deal_context):
        self.received = deal_context
        return self._plan


def test_to_deal_context_projects_db_shapes():
    dc = to_deal_context(_ctx())
    assert dc.installer.name == "Lars"
    assert dc.installer.channel_preference is Channel.email
    assert dc.customer.address == "Köln"  # region → address
    assert dc.quote.product is ProductType.heat_pump  # first product type
    assert dc.quote.price_eur == 18000
    assert dc.quote.competitor_prices_eur == [17200]  # from competitor pressure
    assert dc.communications[0].content == "Sent the quote."
    assert dc.notes[0].content == "Worried."


def test_generate_maps_action_plan_to_strategy_result():
    stub = _StubAgent(_plan())
    result = AgentEngine(agent=stub).generate(_ctx())

    assert result.current_goal is Goal.build_trust
    assert result.buyer_profile["summary"] == "Earn trust, then ask."
    assert len(result.steps) == 3

    email, call, gift = result.steps
    assert email.channel == "email" and email.lever is PersuasionLever.proximity_trust
    assert "Subject: Hi" in email.rationale and "Body text" in email.rationale
    assert call.channel == "call" and "2026-06-25" in call.rationale
    assert "- point one" in call.rationale  # script bullets rendered
    assert gift.channel == "gift" and "coffee voucher" in gift.rationale
    assert [s.order for s in result.steps] == [1, 2, 3]


def test_get_engine_falls_back_without_key(monkeypatch):
    monkeypatch.delenv("OPENAI_API_KEY", raising=False)
    assert isinstance(engine_mod.get_engine(), FakeEngine)


def test_get_engine_uses_agent_with_key(monkeypatch):
    monkeypatch.setenv("OPENAI_API_KEY", "sk-test")
    assert isinstance(engine_mod.get_engine(), AgentEngine)
