"""Thin data access — queries only, no business logic."""

from sqlmodel import Session, select

from app.models import (
    CompetitorPressure,
    Customer,
    Deal,
    Note,
    Quote,
    Signal,
    Touch,
)


def leads_for_installer(session: Session, installer_id: int) -> list[Deal]:
    return list(
        session.exec(
            select(Deal)
            .where(Deal.installer_id == installer_id)
            .order_by(Deal.last_activity_at.desc())
        ).all()
    )


def get_deal(session: Session, deal_id: int) -> Deal | None:
    return session.get(Deal, deal_id)


def get_customer(session: Session, customer_id: int) -> Customer | None:
    return session.get(Customer, customer_id)


def get_quote(session: Session, quote_id: int) -> Quote | None:
    return session.get(Quote, quote_id)


def touches_for_deal(session: Session, deal_id: int) -> list[Touch]:
    return list(
        session.exec(
            select(Touch).where(Touch.deal_id == deal_id).order_by(Touch.timestamp)
        ).all()
    )


def notes_for_deal(session: Session, deal_id: int) -> list[Note]:
    return list(
        session.exec(select(Note).where(Note.deal_id == deal_id).order_by(Note.timestamp)).all()
    )


def signals_for_deal(session: Session, deal_id: int) -> list[Signal]:
    return list(
        session.exec(
            select(Signal).where(Signal.deal_id == deal_id).order_by(Signal.timestamp)
        ).all()
    )


def competitor_for_deal(session: Session, deal_id: int) -> CompetitorPressure | None:
    return session.exec(
        select(CompetitorPressure).where(CompetitorPressure.deal_id == deal_id)
    ).first()
