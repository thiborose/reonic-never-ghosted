"""Agent inputs — the full deal context from the input map (see docs/metadata.md).

Mirrors the six sources an installer has when a quote goes quiet: installer profile,
customer, quote (incl. competition), communications, notes, and past deals. List
fields expose ``*_log`` string properties so prompts can interpolate them cleanly
via ``{input.communications_log}`` without iterating in the template.
"""

from datetime import date

from pydantic import BaseModel, Field

from app.models.enums import Channel, DealStage, Direction, NoteType, ProductType


class Installer(BaseModel):
    """The installer (Installeur) running the deal."""

    name: str = Field(description="The installer's name; use it to sign messages.")
    ok_taking_car: bool = Field(
        default=False, description="Whether the installer is willing to drive out for a site visit."
    )
    channel_preference: Channel | None = Field(
        default=None, description="Channel the installer prefers to reach this customer on, if known."
    )


class Customer(BaseModel):
    name: str = Field(description="The homeowner's full name.")
    address: str = Field(description="The homeowner's address or region.")
    birthdate: date | None = Field(default=None, description="The homeowner's date of birth, if known.")
    annual_income_eur: int | None = Field(
        default=None, description="The homeowner's approximate annual income in euros, if known."
    )


class Quote(BaseModel):
    product: ProductType = Field(description="The main product quoted, e.g. heat_pump or solar_pv.")
    price_eur: int = Field(description="The total quoted price, in euros.")
    competitor_prices_eur: list[int] = Field(
        default_factory=list, description="Known competitor quotes in euros, for price framing."
    )


class Communication(BaseModel):
    """One exchanged email, call transcript, or SMS."""

    channel: Channel = Field(description="The channel this exchange happened on.")
    direction: Direction = Field(
        description="inbound (from the customer) or outbound (from the installer)."
    )
    content: str = Field(description="What was said — the email body, call transcript, or SMS text.")
    sent_at: date | None = Field(default=None, description="When the message was sent, if known.")


class Note(BaseModel):
    """A personal note by the installer — typed, or transcribed from voice."""

    type: NoteType = Field(description="Whether the note was typed or transcribed from voice.")
    content: str = Field(description="The installer's private note about this customer.")


class PastDeal(BaseModel):
    """A previous deal this installer closed (or didn't), for social proof."""

    product: ProductType = Field(description="The product sold in this past deal.")
    price_eur: int = Field(description="The price of this past deal, in euros.")
    outcome: DealStage = Field(description="How this past deal ended: won, lost, ghosted, …")


class DealContext(BaseModel):
    """Everything the agent knows about one ghosted quote."""

    installer: Installer = Field(description="The installer running this deal.")
    customer: Customer = Field(description="The homeowner who received the quote.")
    quote: Quote = Field(description="The quote that was sent.")
    days_since_quote: int = Field(
        description="How many days ago the quote was sent and the customer went quiet."
    )
    communications: list[Communication] = Field(
        default_factory=list, description="Every email, call, and SMS exchanged so far, oldest first."
    )
    notes: list[Note] = Field(
        default_factory=list, description="The installer's private notes about this customer."
    )
    past_deals: list[PastDeal] = Field(
        default_factory=list, description="Previous deals this installer closed, for social proof."
    )

    @property
    def today(self) -> str:
        """So the model proposes realistic near-future dates, not stale ones."""
        return date.today().isoformat()

    @property
    def preferred_channel(self) -> str:
        ch = self.installer.channel_preference
        return ch.value if ch else "no preference"

    @property
    def competitor_prices(self) -> str:
        prices = self.quote.competitor_prices_eur
        return ", ".join(f"€{p}" for p in prices) if prices else "unknown"

    @property
    def communications_log(self) -> str:
        if not self.communications:
            return "none yet"
        return "\n".join(
            f"- [{c.channel.value} {c.direction.value}] {c.content}" for c in self.communications
        )

    @property
    def notes_log(self) -> str:
        if not self.notes:
            return "none"
        return "\n".join(f"- ({n.type.value}) {n.content}" for n in self.notes)

    @property
    def past_deals_log(self) -> str:
        if not self.past_deals:
            return "none on record"
        return "\n".join(
            f"- {d.product.value} at €{d.price_eur} → {d.outcome.value}" for d in self.past_deals
        )
