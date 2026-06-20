"""Real engine: drive the pydantic-AI strategy agent behind the StrategyEngine seam.

Maps the backend's DB-shaped EngineContext into the agent's DealContext, runs the
agent, and maps the returned ActionPlan (typed task union) back into the existing
StrategyResult{steps[...]} contract the frontend already renders. Adopting the task
union end-to-end is a deliberate later rework (see plan).
"""

from __future__ import annotations

from datetime import UTC, datetime

from app.agent import (
    Communication,
    DealContext,
    Installer,
    Note,
    Quote,
    strategy_agent,
)
from app.agent import Customer as AgentCustomer
from app.agent.output_model import (
    ActionPlan,
    PhoneCallTask,
    SendEmailTask,
    SendGiftTask,
    SendSmsTask,
    WaitTask,
)
from app.integration.engine import EngineContext, RevisionResult, Step, StrategyResult
from app.models.enums import Channel, Goal, PersuasionLever, ProductType

# A reasonable persuasion lever per goal-arc stage (the agent reasons in goals, the
# existing Step contract also carries a lever).
GOAL_LEVER: dict[Goal, PersuasionLever] = {
    Goal.build_trust: PersuasionLever.proximity_trust,
    Goal.establish_value: PersuasionLever.roi_financial,
    Goal.create_urgency: PersuasionLever.urgency,
    Goal.close_gap: PersuasionLever.gap_framing,
    Goal.handle_objection: PersuasionLever.objection_handling,
    Goal.ask_for_commitment: PersuasionLever.urgency,
}

# Task type → the channel string the frontend expects on a Step.
TASK_CHANNEL: dict[str, str] = {
    "send_email": "email",
    "phone_call": "call",
    "send_sms": "sms",
    "send_gift": "gift",
    "wait": "wait",
}


def _to_channel(value: str | None) -> Channel | None:
    try:
        return Channel(value) if value else None
    except ValueError:
        return None


def _days_since(sent_at: datetime) -> int:
    if sent_at.tzinfo is None:
        sent_at = sent_at.replace(tzinfo=UTC)
    return max((datetime.now(UTC) - sent_at).days, 0)


def to_deal_context(ctx: EngineContext) -> DealContext:
    """Project the DB-shaped EngineContext onto the agent's DealContext."""
    product_type = ProductType.solar_pv
    if ctx.quote.products:
        try:
            product_type = ProductType(ctx.quote.products[0]["type"])
        except (KeyError, ValueError):
            pass

    competitor_prices = (
        [int(ctx.competitor["competitor_price"])]
        if ctx.competitor and ctx.competitor.get("competitor_price") is not None
        else []
    )

    return DealContext(
        installer=Installer(
            name=ctx.installer.name,
            channel_preference=_to_channel(ctx.customer.channel_preference),
        ),
        customer=AgentCustomer(name=ctx.customer.name, address=ctx.customer.region),
        quote=Quote(
            product=product_type,
            price_eur=int(ctx.quote.total_price),
            competitor_prices_eur=competitor_prices,
        ),
        days_since_quote=_days_since(ctx.quote.sent_at),
        communications=[
            Communication(
                channel=t.channel,
                direction=t.direction,
                content=t.body or t.summary or "",
            )
            for t in ctx.touches
        ],
        notes=[Note(type=n.type, content=n.content) for n in ctx.notes],
        past_deals=[],  # no per-deal outcome pool yet; benchmark_rows are aggregate counts
    )


def _render_task(task) -> str:
    """Fold a typed task's action payload into the Step.rationale the frontend shows."""
    if isinstance(task, SendEmailTask):
        return f"{task.reason}\n\nSubject: {task.subject}\n{task.body}"
    if isinstance(task, PhoneCallTask):
        bullets = "\n".join(f"- {line}" for line in task.script)
        return f"{task.reason}\n\nCall on {task.suggested_date.isoformat()}:\n{bullets}"
    if isinstance(task, SendSmsTask):
        return f"{task.reason}\n\nSMS: {task.text}"
    if isinstance(task, SendGiftTask):
        suffix = f" — {task.note}" if task.note else ""
        return f"{task.reason}\n\nGift: {task.gift_type}{suffix}"
    if isinstance(task, WaitTask):
        return f"{task.reason}\n\nWait {task.days} days before the next touch."
    return task.reason


def to_strategy_result(ctx: EngineContext, plan: ActionPlan) -> StrategyResult:
    """Map the agent's ActionPlan onto the existing StrategyResult contract."""
    steps = [
        Step(
            order=i + 1,
            goal=task.goal,
            lever=GOAL_LEVER.get(task.goal, PersuasionLever.objection_handling),
            channel=TASK_CHANNEL.get(task.type, task.type),
            rationale=_render_task(task),
            evidence_chips=[],
        )
        for i, task in enumerate(plan.tasks)
    ]
    return StrategyResult(
        current_goal=ctx.deal.current_goal,
        buyer_profile={"summary": plan.summary},
        persona_scores=[],  # not produced on the agent path yet
        top_motivations=[],
        objections=[],
        steps=steps,
    )


class AgentEngine:
    """StrategyEngine backed by the pydantic-AI agent."""

    def __init__(self, agent=strategy_agent) -> None:
        self._agent = agent

    def generate(self, ctx: EngineContext) -> StrategyResult:
        plan = self._agent.run(to_deal_context(ctx))
        return to_strategy_result(ctx, plan)

    def draft(self, ctx: EngineContext, step: Step) -> str:
        # The actionable content already lives in the step rationale.
        return step.rationale

    def revise(self, ctx: EngineContext, step: Step, instruction: str) -> RevisionResult:
        return RevisionResult(applied=True, step=step, reason=f"agent applied: {instruction}")
