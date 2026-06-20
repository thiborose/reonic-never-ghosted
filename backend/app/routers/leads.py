"""Lead list for an installer — the entry screen."""

from datetime import datetime

from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlmodel import Session

from app.db import get_session
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


@router.get("/installers/{installer_id}/leads", response_model=list[LeadOut])
def list_leads(installer_id: int, session: Session = Depends(get_session)) -> list[LeadOut]:
    out: list[LeadOut] = []
    for deal in queries.leads_for_installer(session, installer_id):
        customer = queries.get_customer(session, deal.customer_id)
        quote = queries.get_quote(session, deal.quote_id)
        out.append(
            LeadOut(
                deal_id=deal.id,
                customer_name=customer.name,
                region=customer.region,
                stage=deal.stage.value,
                last_activity_at=deal.last_activity_at,
                total_price=quote.total_price,
                currency=quote.currency,
                products=[p["type"] for p in quote.products],
            )
        )
    return out
