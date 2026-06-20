"""Lead list + creation for an installer — the entry screen."""

from datetime import UTC, datetime, timedelta

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlmodel import Session

from app.db import get_session
from app.models import Customer, Deal, Quote
from app.models.enums import DealStage, Goal
from app.repositories import queries

router = APIRouter(tags=["leads"])


class LeadOut(BaseModel):
    deal_id: int
    customer_name: str
    region: str
    stage: str
    last_activity_at: datetime
    total_price: float
    currency: str
    products: list[str]


class CustomerIn(BaseModel):
    name: str
    region: str
    locale: str | None = None
    channel_preference: str | None = None
    annual_income_band: str | None = None
    current_energy_bill: float | None = None
    property_type: str | None = None
    home_ownership: str | None = None


class QuoteIn(BaseModel):
    products: list[dict] = []  # [{type, spec, qty}]
    total_price: float
    currency: str = "EUR"


class CreateLeadIn(BaseModel):
    customer: CustomerIn
    quote: QuoteIn


def _lead_out(deal: Deal, customer: Customer, quote: Quote) -> LeadOut:
    return LeadOut(
        deal_id=deal.id,
        customer_name=customer.name,
        region=customer.region,
        stage=deal.stage.value,
        last_activity_at=deal.last_activity_at,
        total_price=quote.total_price,
        currency=quote.currency,
        products=[p.get("type") for p in quote.products],
    )


@router.get("/installers/{installer_id}/leads", response_model=list[LeadOut])
def list_leads(installer_id: int, session: Session = Depends(get_session)) -> list[LeadOut]:
    out: list[LeadOut] = []
    for deal in queries.leads_for_installer(session, installer_id):
        customer = queries.get_customer(session, deal.customer_id)
        quote = queries.get_quote(session, deal.quote_id)
        out.append(_lead_out(deal, customer, quote))
    return out


@router.post("/installers/{installer_id}/leads", response_model=LeadOut, status_code=201)
def create_lead(
    installer_id: int, body: CreateLeadIn, session: Session = Depends(get_session)
) -> LeadOut:
    """Create a new lead: Customer + Quote + Deal in one transaction."""
    installer = queries.get_installer(session, installer_id)
    if installer is None:
        raise HTTPException(status_code=404, detail="installer not found")

    now = datetime.now(UTC)
    customer = queries.insert(
        session,
        Customer(
            org_id=installer.org_id,
            assigned_installer_id=installer_id,
            **body.customer.model_dump(),
        ),
    )
    quote = queries.insert(
        session,
        Quote(
            customer_id=customer.id,
            products=body.quote.products,
            total_price=body.quote.total_price,
            currency=body.quote.currency,
            sent_at=now,
            valid_until=now + timedelta(days=30),
        ),
    )
    deal = queries.insert(
        session,
        Deal(
            customer_id=customer.id,
            quote_id=quote.id,
            installer_id=installer_id,
            stage=DealStage.quote_sent,
            last_activity_at=now,
            current_goal=Goal.build_trust,
        ),
    )
    session.commit()
    for row in (customer, quote, deal):
        session.refresh(row)
    return _lead_out(deal, customer, quote)
