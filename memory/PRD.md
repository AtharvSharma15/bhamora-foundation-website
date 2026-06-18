# Bhamora Foundation — Premium NGO Redesign

## Original Problem Statement
Transform the existing Bhamora Foundation website (Next.js 15 App Router) into a premium, modern, trust-building NGO website comparable to UNICEF, Gates Foundation, GiveIndia, World Vision. Preserve all existing functionality (navigation, gallery, donation, volunteer, contact, privacy, AdSense). Apply premium UI/UX, modern typography, soft shadows, smooth animations, and excellent mobile responsiveness.

## Architecture
- **Frontend**: Next.js 15 App Router at `/app` (frontend symlink), TypeScript, Tailwind CSS, Framer Motion
- **Backend**: FastAPI at `/app/backend/server.py`, MongoDB (db: `bhamora_foundation`)
- **Routing**: `/api/*` → port 8001 (FastAPI), everything else → port 3000 (Next.js)
- **Fonts**: Fraunces (display) + Manrope (sans) via `next/font/google`
- **Design Tokens**: Primary `#0F4C81`, Secondary `#F59E0B`, Background `#FAFAF7`, Text `#1F2937`
- **AdSense**: preserved with `afterInteractive` strategy
- **Mongo collections**: `newsletter_subscribers`, `contact_messages`, `volunteer_applications`

## User Personas
1. **Potential Donor** — needs trust signals, tax-exempt info, clear impact tiers.
2. **Volunteer Applicant** — needs frictionless multi-step application + clear roles.
3. **CSR / Corporate Partner** — needs verifiable impact, audit-ready reporting promise.
4. **Beneficiary / Community Member** — needs to see authenticity, real photographs.
5. **Press / Researcher** — needs credible facts, awards, leadership info.

## Core Requirements (Static)
- Premium luxury-nonprofit aesthetic
- Sticky transparent-to-solid navbar with backdrop blur
- Full-screen hero with dark overlay, large headline, animated counters
- Animated impact statistics with icons
- Premium card system (consistent 20px radius, soft shadow, hover lift)
- Masonry gallery with lightbox
- Awards section with gold accent + subtle floating
- Multi-step volunteer form with trust indicators
- Premium donation cards with impact preview, trust badges, allocation chart
- Dark premium footer with newsletter, social, quick links, privacy/terms
- Modern font pairing, strong hierarchy
- Smooth animations (reduced-motion respected)
- Excellent mobile responsiveness

## What's Been Implemented (Jan 2026)
- **Design system**: tokens, base styles, primitives (Eyebrow, SectionHeading, LinkArrow)
- **Components**: Navbar (sticky/scroll-aware), Footer (dark premium + newsletter), Reveal (scroll-fade), CountUp (in-view counters), Lightbox (gallery preview)
- **Pages redesigned**: Home, About, Programs, Impact, Gallery, Volunteer (3-step form), Donate (amount selector + impact preview + trust badges + allocation chart), Contact (with map), Privacy Policy, Terms & Conditions (new)
- **Backend APIs**: `/api/health`, `/api/newsletter` (idempotent), `/api/contact`, `/api/volunteer`
- **Testing**: 11/11 backend tests, ~98% frontend coverage verified by testing agent

## Prioritized Backlog (Future Iterations)
### P0 — Functional now
- (no P0 open — all critical flows green)

### P1 — Recommended next
- Wire real payment gateway (Razorpay/Stripe) on Donate page
- Add admin dashboard for newsletter/contact/volunteer submissions
- Add rate-limit / honeypot to contact + volunteer endpoints

### P2 — Nice-to-have
- Send confirmation emails via SendGrid/Resend on newsletter + volunteer
- Add Hindi (हिन्दी) language toggle
- Add a Press / Annual Reports page
- Lighthouse audit + image optimisation pass (responsive sizes, AVIF/WebP)
- Replace Google Maps iframe with a non-tracking provider for GDPR friendliness
- (Optional cosmetic) rename gallery category id `women` → `women-empowerment`

## Routes
| Path | Description |
|------|-------------|
| `/` | Home — hero, impact, about, programs, leadership, stories, gallery preview, CTAs, partners |
| `/about` | Story, mission/vision, values, leadership, timeline, future goals |
| `/programs` | Overview grid + detail sections + "how you can help" |
| `/impact` | Stats hero + success stories + testimonials + case studies |
| `/gallery` | Masonry + filters + lightbox + awards |
| `/volunteer` | Opportunities + 3-step application form + FAQs |
| `/donate` | Impact tiers + donation card + allocation chart + partnership CTA |
| `/contact` | Form + office info + map |
| `/privacy-policy` | Privacy policy |
| `/terms-and-conditions` | Terms & conditions (new page) |

## Next Tasks
- Decide on payment gateway integration (Razorpay vs Stripe) for live donations
- Add an admin route to view submissions (Mongo-backed)
- Run a production Lighthouse pass after final image optimisation
