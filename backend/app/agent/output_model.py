"""Agent output — a strongly-typed sequence of next-action tasks.

The agent returns an ``ActionPlan``: an ordered list of tasks, each a distinct
Pydantic model carrying exactly the fields that action needs (an email draft, a
call date + script, a gift type, …). Tasks form a discriminated union on ``type``,
so consumers can ``match`` on it with full type safety.
"""

from datetime import date
from typing import Annotated, Literal

from pydantic import BaseModel, Field

from app.models.enums import Goal, Persona, ProductType


class _BaseTask(BaseModel):
    """Fields every task shares: where it sits in the chain and why."""

    goal: Goal = Field(description="The goal-arc stage this action serves.")
    reason: str = Field(description="One line: why this action, now — grounded in the deal context.")


# NB: the `type` discriminator is required (no default). A default makes the field
# optional in the JSON schema, so OpenAI omits it and discrimination fails with
# `union_tag_not_found`. Required → the model must emit the tag every time.
class SendEmailTask(_BaseTask):
    type: Literal["send_email"]
    subject: str = Field(description="The email subject line.")
    body: str = Field(description="A ready-to-send email body, personalised to this customer.")


class PhoneCallTask(_BaseTask):
    type: Literal["phone_call"]
    suggested_date: date = Field(description="A near-future date to place the call.")
    script: list[str] = Field(description="A few talking-point bullets / lead phrases, not a full script.")


class SendSmsTask(_BaseTask):
    type: Literal["send_sms"]
    text: str = Field(description="A short, ready-to-send SMS text.")


class SendGiftTask(_BaseTask):
    type: Literal["send_gift"]
    gift_type: str = Field(description="What gift to send, e.g. a regional voucher.")
    note: str | None = Field(default=None, description="An optional handwritten note to include.")


class WaitTask(_BaseTask):
    type: Literal["wait"]
    days: int = Field(description="How many days to hold off before the next touch.")


Task = Annotated[
    SendEmailTask | PhoneCallTask | SendSmsTask | SendGiftTask | WaitTask,
    Field(discriminator="type"),
]


class PersonaInsight(BaseModel):
    """A buyer persona the prospect exhibits, with grounded justification."""

    persona: Persona = Field(description="A persona from the fixed taxonomy.")
    weight: float = Field(description="How strongly this persona fits, from 0 to 1.")
    why: str = Field(description="The specific signal in the deal context that supports this read.")


class ActionPlan(BaseModel):
    """The strategic communication chain: buyer read + an ordered sequence of typed tasks."""

    summary: str = Field(description="A short summary of the overall plan and where the buyer stands.")
    recommended_product_focus: ProductType | None = Field(
        default=None, description="The product to lead with, if one stands out."
    )
    personas: list[PersonaInsight] = Field(
        description="Weighted buyer personas, each justified; omit any you can't ground."
    )
    top_motivations: list[str] = Field(description="What will actually move this buyer.")
    objections: list[str] = Field(description="The hesitations to disarm.")
    tasks: list[Task] = Field(
        description="The ordered action chain: trust first, urgency later, ask for commitment last."
    )
