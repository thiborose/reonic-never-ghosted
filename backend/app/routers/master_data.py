"""Edit a deal's master data — partial updates to customer / quote / deal."""

from datetime import UTC, datetime

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlmodel import Session

from app.db import get_session
from app.models import Customer, Deal, Quote
from app.models.enums import DealStage, Goal
from app.repositories import queries

router = APIRouter(tags=["master-data"])


class CustomerPatch(BaseModel):
    name: str | None = None
    region: str | None = None
    locale: str | None = None
    channel_preference: str | None = None
    annual_income_band: str | None = None
    current_energy_bill: float | None = None
    property_type: str | None = None
    home_ownership: str | None = None


class QuotePatch(BaseModel):
    products: list[dict] | None = None
    total_price: float | None = None
    currency: str | None = None


class DealPatch(BaseModel):
    stage: DealStage | None = None
    current_goal: Goal | None = None


class MasterDataIn(BaseModel):
    customer: CustomerPatch | None = None
    quote: QuotePatch | None = None
    deal: DealPatch | None = None


class MasterDataOut(BaseModel):
    deal: Deal
    customer: Customer
    quote: Quote


@router.patch("/deals/{deal_id}/master-data", response_model=MasterDataOut)
def update_master_data(
    deal_id: int, body: MasterDataIn, session: Session = Depends(get_session)
) -> MasterDataOut:
    deal = queries.get_deal(session, deal_id)
    if deal is None:
        raise HTTPException(status_code=404, detail="deal not found")
    customer = queries.get_customer(session, deal.customer_id)
    quote = queries.get_quote(session, deal.quote_id)

    if body.customer:
        queries.apply_updates(session, customer, body.customer.model_dump(exclude_unset=True))
    if body.quote:
        queries.apply_updates(session, quote, body.quote.model_dump(exclude_unset=True))
    if body.deal:
        queries.apply_updates(session, deal, body.deal.model_dump(exclude_unset=True))
    deal.last_activity_at = datetime.now(UTC)

    session.commit()
    for row in (deal, customer, quote):
        session.refresh(row)
    return MasterDataOut(deal=deal, customer=customer, quote=quote)
