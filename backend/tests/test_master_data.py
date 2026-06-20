"""Lead creation + master-data editing endpoints (need the compose Postgres)."""

from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_create_lead_round_trips(seeded):
    payload = {
        "customer": {"name": "New Person", "region": "Bonn", "channel_preference": "email"},
        "quote": {"products": [{"type": "heat_pump", "qty": 1}], "total_price": 21000, "currency": "EUR"},
    }
    resp = client.post("/installers/1/leads", json=payload)
    assert resp.status_code == 201
    lead = resp.json()
    assert lead["customer_name"] == "New Person"
    assert lead["total_price"] == 21000
    assert lead["products"] == ["heat_pump"]
    assert lead["stage"] == "quote_sent"

    # the new deal is fully fetchable
    detail = client.get(f"/deals/{lead['deal_id']}").json()
    assert detail["customer"]["name"] == "New Person"
    assert detail["customer"]["region"] == "Bonn"
    assert detail["quote"]["total_price"] == 21000


def test_create_lead_unknown_installer_404(seeded):
    resp = client.post(
        "/installers/999999/leads",
        json={"customer": {"name": "X", "region": "Y"}, "quote": {"products": [], "total_price": 1}},
    )
    assert resp.status_code == 404


def test_update_master_data_persists(seeded):
    resp = client.patch(
        "/deals/1/master-data",
        json={"customer": {"region": "Hamburg"}, "quote": {"total_price": 12345}},
    )
    assert resp.status_code == 200

    detail = client.get("/deals/1").json()
    assert detail["customer"]["region"] == "Hamburg"
    assert detail["quote"]["total_price"] == 12345


def test_update_master_data_404(seeded):
    resp = client.patch("/deals/999999/master-data", json={"customer": {"region": "X"}})
    assert resp.status_code == 404
