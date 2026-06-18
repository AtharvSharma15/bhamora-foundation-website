"""Backend API tests for Bhamora Foundation FastAPI service.

Tests cover:
- /api/health
- /api/newsletter (subscribe, idempotent re-subscribe, invalid email)
- /api/contact
- /api/volunteer
"""
from __future__ import annotations

import os
import random
import string

import pytest
import requests

BASE_URL = "https://301129e4-3cf9-47fd-bdcf-8a1e4795f52a.preview.emergentagent.com"


def _rand_email(prefix: str = "TEST") -> str:
    tail = "".join(random.choices(string.ascii_lowercase + string.digits, k=10))
    return f"{prefix.lower()}_{tail}@example.com"


@pytest.fixture
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- /api/health ----------
class TestHealth:
    def test_health_returns_ok(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/health", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert data.get("status") == "ok"
        assert data.get("service") == "bhamora-foundation"
        assert "time" in data


# ---------- /api/newsletter ----------
class TestNewsletter:
    def test_subscribe_new_email(self, api_client):
        email = _rand_email("TEST_news")
        r = api_client.post(f"{BASE_URL}/api/newsletter", json={"email": email}, timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["success"] is True
        assert data["already_subscribed"] is False
        assert "Thank you" in data["message"] or "newsletter" in data["message"].lower()

    def test_subscribe_duplicate_email_returns_already_subscribed(self, api_client):
        email = _rand_email("TEST_news_dup")
        r1 = api_client.post(f"{BASE_URL}/api/newsletter", json={"email": email}, timeout=15)
        assert r1.status_code == 200
        assert r1.json()["already_subscribed"] is False

        r2 = api_client.post(f"{BASE_URL}/api/newsletter", json={"email": email}, timeout=15)
        assert r2.status_code == 200
        d2 = r2.json()
        assert d2["success"] is True
        assert d2["already_subscribed"] is True

    def test_subscribe_invalid_email_rejected(self, api_client):
        r = api_client.post(f"{BASE_URL}/api/newsletter", json={"email": "not-an-email"}, timeout=15)
        assert r.status_code == 422

    def test_subscribe_missing_email_rejected(self, api_client):
        r = api_client.post(f"{BASE_URL}/api/newsletter", json={}, timeout=15)
        assert r.status_code == 422


# ---------- /api/contact ----------
class TestContact:
    def test_submit_contact_success(self, api_client):
        payload = {
            "name": "TEST Contact User",
            "email": _rand_email("TEST_contact"),
            "subject": "Testing contact API",
            "message": "This is an automated regression test message.",
        }
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["success"] is True
        assert "message" in data

    def test_submit_contact_missing_fields(self, api_client):
        r = api_client.post(
            f"{BASE_URL}/api/contact",
            json={"name": "x", "email": "no@ok.com"},
            timeout=15,
        )
        assert r.status_code == 422

    def test_submit_contact_invalid_email(self, api_client):
        r = api_client.post(
            f"{BASE_URL}/api/contact",
            json={
                "name": "X",
                "email": "bad",
                "subject": "S",
                "message": "M",
            },
            timeout=15,
        )
        assert r.status_code == 422


# ---------- /api/volunteer ----------
class TestVolunteer:
    def test_submit_volunteer_full_payload(self, api_client):
        payload = {
            "name": "TEST Volunteer User",
            "email": _rand_email("TEST_vol"),
            "phone": "+91 9999999999",
            "area": "Education",
            "availability": "Weekends",
            "skills": "Teaching",
            "interest": "I want to help.",
        }
        r = api_client.post(f"{BASE_URL}/api/volunteer", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["success"] is True

    def test_submit_volunteer_minimal_payload(self, api_client):
        payload = {
            "name": "TEST Minimal",
            "email": _rand_email("TEST_vol_min"),
            "phone": "12345",
        }
        r = api_client.post(f"{BASE_URL}/api/volunteer", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        assert r.json()["success"] is True

    def test_submit_volunteer_missing_required(self, api_client):
        r = api_client.post(
            f"{BASE_URL}/api/volunteer",
            json={"name": "X"},
            timeout=15,
        )
        assert r.status_code == 422
