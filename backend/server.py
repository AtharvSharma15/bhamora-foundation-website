"""Bhamora Foundation – minimal FastAPI backend.

Provides:
- /api/newsletter   : subscribe an email to the newsletter (stored in MongoDB)
- /api/contact      : store contact form messages
- /api/volunteer    : store volunteer applications
- /api/health       : health check
"""

from __future__ import annotations

import os
import re
from datetime import datetime, timezone
from typing import Optional

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, EmailStr, Field

load_dotenv()

MONGO_URL = os.environ["MONGO_URL"]
DB_NAME = os.environ["DB_NAME"]

client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

app = FastAPI(title="Bhamora Foundation API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def _utc_now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


# ---------- Models ----------
class NewsletterSubscribe(BaseModel):
    email: EmailStr


class ContactMessage(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    subject: str = Field(min_length=1, max_length=200)
    message: str = Field(min_length=1, max_length=5000)


class VolunteerApplication(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    phone: str = Field(min_length=4, max_length=40)
    area: Optional[str] = None
    availability: Optional[str] = None
    skills: Optional[str] = None
    interest: Optional[str] = None


# ---------- Routes ----------
@app.get("/api/health")
async def health() -> dict:
    return {"status": "ok", "service": "bhamora-foundation", "time": _utc_now_iso()}


@app.post("/api/newsletter")
async def subscribe_newsletter(payload: NewsletterSubscribe) -> dict:
    email = payload.email.lower().strip()

    existing = await db.newsletter_subscribers.find_one({"email": email})
    if existing:
        return {
            "success": True,
            "already_subscribed": True,
            "message": "You're already part of our community.",
        }

    await db.newsletter_subscribers.insert_one(
        {"email": email, "subscribed_at": _utc_now_iso(), "source": "website-footer"}
    )
    return {
        "success": True,
        "already_subscribed": False,
        "message": "Thank you for subscribing to the Bhamora Foundation newsletter.",
    }


@app.post("/api/contact")
async def submit_contact(payload: ContactMessage) -> dict:
    doc = payload.model_dump()
    doc["created_at"] = _utc_now_iso()
    await db.contact_messages.insert_one(doc)
    return {"success": True, "message": "Your message has been received."}


@app.post("/api/volunteer")
async def submit_volunteer(payload: VolunteerApplication) -> dict:
    doc = payload.model_dump()
    doc["created_at"] = _utc_now_iso()
    await db.volunteer_applications.insert_one(doc)
    return {"success": True, "message": "Thank you for applying. We will contact you soon."}
