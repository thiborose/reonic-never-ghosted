"""P2: Engine A. Single structured LLM call → validated communication strategy.

The model does the language/judgment; deterministic facts (temperature, ghost
risk, goal, benchmarks, knowledge) are computed in P1 and fed in as context. The
output is hard-validated against invariants before anyone sees it — the model may
*reference* a benchmark by id but never invent the number.
"""

from __future__ import annotations

from enum import Enum
from typing import Callable

from pydantic import BaseModel, Field

from engine.deterministic import (
    GOAL_ARC,
    Goal,
    engagement_temperature,
    ghost_risk,
)
from engine.models import GoldenProspect

MAX_STEPS = 3  # frontend shows up to 3 recommended tasks


class Persona(str, Enum):
    environmentalist = "environmentalist"
    roi_investor = "roi_investor"
    budget_sensitive = "budget_sensitive"
    security_seeker = "security_seeker"
    early_adopter = "early_adopter"
    skeptic = "skeptic"


class Objection(str, Enum):
    upfront_cost = "upfront_cost"
    financing_concern = "financing_concern"
    performance_doubt = "performance_doubt"
    roof_or_technical_fit = "roof_or_technical_fit"
    trust_or_legitimacy = "trust_or_legitimacy"
    timing_low_urgency = "timing_low_urgency"
    competitor_comparison = "competitor_comparison"
    decision_paralysis = "decision_paralysis"


class Lever(str, Enum):
    roi_financial = "roi_financial"
    environmental_impact = "environmental_impact"
    peace_of_mind = "peace_of_mind"
    proximity_trust = "proximity_trust"
    social_proof = "social_proof"
    urgency = "urgency"
    gap_framing = "gap_framing"
    objection_handling = "objection_handling"
    product_specific = "product_specific"


class TaskType(str, Enum):
    phone_call = "phone_call"
    send_email = "send_email"
    meeting_in_person = "meeting_in_person"
    whatsapp_video = "whatsapp_video"
    send_gift = "send_gift"


class ChipKind(str, Enum):
    behavioral = "behavioral"
    benchmark = "benchmark"
    deal_history = "deal_history"


class EvidenceChip(BaseModel):
    kind: ChipKind
    label: str
    ref: str | None = None  # required for benchmark/deal_history; the source id


class PersonaScore(BaseModel):
    persona: Persona
    weight: float = Field(ge=0, le=1)
    strength: str
    evidence_refs: list[str] = []


class BuyerProfile(BaseModel):
    personas: list[PersonaScore] = Field(min_length=1)
    top_motivations: list[str]
    objections: list[Objection] = []


class Step(BaseModel):
    task_type: TaskType
    title: str
    goal: Goal
    primary_lever: Lever
    secondary_lever: Lever | None = None
    suggested_timing: str
    script: str
    why: str
    evidence_chips: list[EvidenceChip] = []


class Strategy(BaseModel):
    deal_id: str
    buyer_profile: BuyerProfile
    current_goal: Goal
    steps: list[Step]
    summary: str


class StrategyInvariantError(ValueError):
    """Raised when a generated strategy breaks a trust/safety invariant."""


# LLM is any callable prompt -> Strategy (structured). Real adapter in llm.py.
LLM = Callable[[str], Strategy]


def validate_strategy(strategy: Strategy, *, allowed_refs: set[str]) -> list[str]:
    """Return invariant violations (empty = safe to surface)."""
    violations: list[str] = []
    if len(strategy.steps) > MAX_STEPS:
        violations.append(f"too many steps: {len(strategy.steps)} > {MAX_STEPS}")

    goal_rank = GOAL_ARC.index(strategy.current_goal)
    for i, step in enumerate(strategy.steps):
        if GOAL_ARC.index(step.goal) > goal_rank:
            violations.append(
                f"step {i} goal {step.goal.value} is beyond current_goal "
                f"{strategy.current_goal.value}")
        for chip in step.evidence_chips:
            if chip.kind in (ChipKind.benchmark, ChipKind.deal_history):
                if not chip.ref:
                    violations.append(f"step {i} {chip.kind.value} chip has no ref")
                elif chip.ref not in allowed_refs:
                    violations.append(
                        f"step {i} {chip.kind.value} ref '{chip.ref}' not "
                        "deterministically computed (invented number)")
    return violations


def build_context(prospect: GoldenProspect, *, now) -> dict:
    """Deterministic facts the prompt must ground its language in."""
    temp = engagement_temperature(
        prospect.deal.last_activity_at, prospect.signals, now=now)
    return {
        "temperature": temp.value,
        "ghost_risk": round(ghost_risk(prospect.deal.last_activity_at, now=now), 2),
        "stage": prospect.deal.stage.value,
        "products": [p.type.value for p in prospect.quote.products],
        "notes": [n.content for n in prospect.notes],
        "competitor": prospect.competitor.competitor_price if prospect.competitor else None,
    }


def generate_strategy(
    prospect: GoldenProspect, *, llm: LLM, allowed_refs: set[str], now=None,
) -> Strategy:
    """Engine A: build context, call the LLM, hard-validate before returning."""
    from datetime import datetime

    now = now or datetime(2026, 6, 20, 12, 0, 0)
    context = build_context(prospect, now=now)
    prompt = _render_prompt(prospect, context)
    strategy = llm(prompt)
    violations = validate_strategy(strategy, allowed_refs=allowed_refs)
    if violations:
        raise StrategyInvariantError("; ".join(violations))
    return strategy


def _render_prompt(prospect: GoldenProspect, context: dict) -> str:
    """Assemble the single-call prompt. Kept plain; the schema does the shaping."""
    return (
        "You are a sales-process coach for a German renewable-energy installer.\n"
        "Diagnose why this quoted customer hasn't signed and propose up to 3 "
        "low-pressure next tasks that ladder toward the current goal.\n"
        "Only reference a benchmark/deal_history number by the ids provided; "
        "never invent statistics.\n\n"
        f"Customer: {prospect.customer.model_dump(mode='json')}\n"
        f"Quote: {prospect.quote.model_dump(mode='json')}\n"
        f"Deterministic context: {context}\n"
    )
