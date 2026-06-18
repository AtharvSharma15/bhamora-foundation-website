'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  BadgeCheck,
  ReceiptText,
  Lock,
  Heart,
  Sparkles,
  GraduationCap,
  HeartPulse,
  Droplets,
  ArrowRight,
  Building2,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import { Eyebrow, SectionHeading } from '@/components/ui/primitives';

const amounts = [500, 1000, 2500, 5000, 10000, 25000];

type Frequency = 'one-time' | 'monthly' | 'yearly';

const impactByAmount: { threshold: number; icon: React.ElementType; text: string }[] = [
  { threshold: 25000, icon: Droplets, text: 'Funds a community water project for a village' },
  { threshold: 10000, icon: Droplets, text: 'Provides clean water infrastructure for one community' },
  { threshold: 5000, icon: Sparkles, text: 'Funds vocational training for one woman' },
  { threshold: 2500, icon: HeartPulse, text: 'Supports healthcare for one family for a month' },
  { threshold: 1000, icon: GraduationCap, text: 'Provides educational materials for a child for a year' },
  { threshold: 0, icon: Heart, text: 'Every contribution supports a community on its journey' },
];

const trustBadges = [
  { icon: ShieldCheck, title: '80G & 12A certified', detail: 'Donations are tax exempt under Indian law' },
  { icon: BadgeCheck, title: 'Audited & verified', detail: 'Annual reports independently audited' },
  { icon: ReceiptText, title: 'Receipt within 24h', detail: 'Digital receipt for every contribution' },
  { icon: Lock, title: 'Secure payments', detail: '256-bit SSL encrypted gateways' },
];

const allocation = [
  { label: 'Programme services', value: 85, color: 'bg-brand' },
  { label: 'Administrative costs', value: 10, color: 'bg-gold' },
  { label: 'Fundraising', value: 5, color: 'bg-ink/40' },
];

function DonateHero() {
  return (
    <section
      data-testid="donate-hero"
      className="relative isolate overflow-hidden bg-brand-gradient pb-20 pt-40 text-white md:pb-28 md:pt-44"
    >
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <Eyebrow className="!text-gold">Donate</Eyebrow>
          <h1 className="display-xl mt-6 text-balance text-white">
            Your gift becomes a{' '}
            <span className="italic text-gold">life rebuilt.</span>
          </h1>
          <p className="lead mt-6 text-white/80">
            Every rupee — recurring or one-time — supports a community on its
            journey toward dignity and self-reliance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ImpactCards() {
  const tiers = [
    {
      amount: 1000,
      icon: GraduationCap,
      title: 'Light a classroom',
      detail: 'Provides educational materials for one child for a year.',
    },
    {
      amount: 2500,
      icon: HeartPulse,
      title: 'Family of care',
      detail: 'Supports healthcare services for a family for one month.',
    },
    {
      amount: 5000,
      icon: Sparkles,
      title: 'Empower a woman',
      detail: 'Funds vocational training for one woman to become economically independent.',
    },
    {
      amount: 10000,
      icon: Droplets,
      title: 'Community water',
      detail: 'Funds a complete community water project for sustainable access.',
    },
  ];
  return (
    <section className="section bg-canvas" data-testid="donate-impact-cards">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Your impact"
            title="Where your contribution travels."
            description="Concrete outcomes for every tier — no vague promises."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t, i) => (
            <Reveal key={t.amount} delay={i * 0.08}>
              <article className="card-premium card-premium-hover h-full p-7" data-testid={`donate-tier-${t.amount}`}>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/15 text-gold-700">
                  <t.icon size={22} />
                </div>
                <p className="mt-5 font-display text-3xl font-medium text-brand">
                  ₹{t.amount.toLocaleString('en-IN')}
                </p>
                <h3 className="mt-2 font-display text-lg font-medium text-ink">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.detail}</p>
                <span className="mt-5 block h-[3px] w-10 rounded-full bg-gold" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DonationCard() {
  const [amount, setAmount] = useState<number>(2500);
  const [custom, setCustom] = useState('');
  const [frequency, setFrequency] = useState<Frequency>('one-time');

  const finalAmount = useMemo(() => {
    const c = parseInt(custom, 10);
    return Number.isFinite(c) && c > 0 ? c : amount;
  }, [custom, amount]);

  const impact = useMemo(() => {
    const match = impactByAmount.find((tier) => finalAmount >= tier.threshold);
    return match ?? impactByAmount[impactByAmount.length - 1];
  }, [finalAmount]);

  return (
    <section className="section bg-white" data-testid="donate-card-section">
      <div className="container-wide grid items-start gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <article
            className="card-premium relative overflow-hidden p-7 md:p-10"
            data-testid="donate-card"
          >
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gold/10 blur-3xl" />
            <Eyebrow>Make a donation</Eyebrow>
            <h2 className="display-md mt-4 text-ink">Choose your contribution.</h2>

            {/* Frequency */}
            <div className="mt-7" role="radiogroup" aria-label="Donation frequency">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
                Frequency
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {(
                  [
                    { id: 'one-time', label: 'One-time' },
                    { id: 'monthly', label: 'Monthly' },
                    { id: 'yearly', label: 'Yearly' },
                  ] as { id: Frequency; label: string }[]
                ).map((f) => {
                  const active = frequency === f.id;
                  return (
                    <button
                      key={f.id}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => setFrequency(f.id)}
                      data-testid={`donate-freq-${f.id}`}
                      className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all ${
                        active
                          ? 'bg-brand text-white shadow-soft'
                          : 'border border-brand/15 bg-canvas text-ink-soft hover:border-brand/30 hover:text-brand'
                      }`}
                    >
                      {f.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Amount chips */}
            <div className="mt-7">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
                Amount (₹)
              </span>
              <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-6">
                {amounts.map((a) => {
                  const active = !custom && amount === a;
                  return (
                    <button
                      key={a}
                      type="button"
                      onClick={() => {
                        setAmount(a);
                        setCustom('');
                      }}
                      data-testid={`donate-amount-${a}`}
                      className={`rounded-2xl px-3 py-3 text-sm font-semibold transition-all ${
                        active
                          ? 'bg-brand text-white shadow-soft'
                          : 'border border-brand/15 bg-canvas text-ink hover:border-brand/30'
                      }`}
                    >
                      ₹{a.toLocaleString('en-IN')}
                    </button>
                  );
                })}
              </div>
              <div className="mt-4">
                <label className="block text-xs font-medium uppercase tracking-[0.18em] text-ink-soft">
                  Or enter a custom amount
                </label>
                <div className="mt-2 flex items-center gap-3">
                  <span className="font-display text-2xl font-medium text-ink">₹</span>
                  <input
                    type="number"
                    inputMode="numeric"
                    min={1}
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    className="h-12 flex-1 rounded-xl border border-brand/15 bg-white px-4 text-base font-medium text-ink outline-none transition focus:border-brand/45 focus:ring-4 focus:ring-brand/10"
                    placeholder="e.g. 7500"
                    data-testid="donate-custom-amount"
                  />
                </div>
              </div>
            </div>

            {/* Impact preview */}
            <div
              className="mt-7 flex items-start gap-4 rounded-2xl border border-gold/30 bg-gold/[0.07] p-5"
              data-testid="donate-impact-preview"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gold/20 text-gold-700">
                <impact.icon size={20} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-700">
                  Impact of your ₹{finalAmount.toLocaleString('en-IN')}
                  {frequency !== 'one-time' && ` / ${frequency === 'monthly' ? 'month' : 'year'}`}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink">{impact.text}</p>
              </div>
            </div>

            {/* CTA */}
            <button
              type="button"
              data-testid="donate-submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-soft-lg"
            >
              Continue to payment
              <ArrowRight size={14} />
            </button>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-ink-soft">
              <span className="inline-flex items-center gap-1.5">
                <Lock size={12} className="text-gold-700" /> 256-bit SSL secured
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={12} className="text-gold-700" /> 80G eligible
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ReceiptText size={12} className="text-gold-700" /> Instant receipt
              </span>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="card-premium h-full p-7 md:p-8">
            <Eyebrow>Why give to Bhamora</Eyebrow>
            <h3 className="mt-4 font-display text-2xl font-medium text-ink">
              Trust earned, audit-ready.
            </h3>
            <div className="mt-6 space-y-5">
              {trustBadges.map((b) => (
                <div key={b.title} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-brand/8 text-brand">
                    <b.icon size={18} />
                  </span>
                  <div>
                    <p className="font-display text-base font-medium text-ink">{b.title}</p>
                    <p className="text-xs text-ink-soft">{b.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AllocationChart() {
  return (
    <section className="section bg-canvas" data-testid="donate-allocation">
      <div className="container-wide grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Financial transparency"
            title="Where every rupee goes."
            description="A clear, auditable allocation of every contribution we receive."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card-premium p-8">
            {allocation.map((a) => (
              <div key={a.label} className="mb-6 last:mb-0">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-ink">{a.label}</span>
                  <span className="font-display text-2xl font-medium text-brand">{a.value}%</span>
                </div>
                <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-brand/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${a.value}%` }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    className={`h-full ${a.color}`}
                  />
                </div>
              </div>
            ))}
            <p className="mt-4 text-xs leading-relaxed text-ink-soft">
              85% of every contribution funds direct programme services on the
              ground. We keep operations lean to maximise the impact of your
              generosity.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PartnerCTA() {
  return (
    <section className="section relative isolate overflow-hidden bg-brand text-white" data-testid="donate-partner-cta">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-gold/30 blur-3xl" />
      <div className="container-wide relative grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow className="!text-gold">Corporate partnerships</Eyebrow>
          <h2 className="display-lg mt-5 text-balance text-white">
            CSR partnerships that deliver{' '}
            <span className="italic text-gold">verifiable impact.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Bhamora Foundation co-designs measurable, audit-ready CSR
            initiatives — across rural healthcare, education and women&apos;s
            livelihoods.
          </p>
        </div>
        <div className="rounded-[24px] border border-white/15 bg-white/[0.06] p-6 backdrop-blur md:p-8">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <Building2 className="mt-1 text-gold" size={18} />
              <div>
                <p className="font-display text-base text-white">CSR + 80G</p>
                <p className="text-xs text-white/70">100% compliant routing</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BadgeCheck className="mt-1 text-gold" size={18} />
              <div>
                <p className="font-display text-base text-white">Quarterly reporting</p>
                <p className="text-xs text-white/70">Impact dashboards</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 text-gold" size={18} />
              <div>
                <p className="font-display text-base text-white">On-ground audits</p>
                <p className="text-xs text-white/70">Independent verification</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Sparkles className="mt-1 text-gold" size={18} />
              <div>
                <p className="font-display text-base text-white">Co-branded stories</p>
                <p className="text-xs text-white/70">For your stakeholders</p>
              </div>
            </div>
          </div>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-brand"
            data-testid="donate-partner-contact"
          >
            Talk to our team
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function DonatePage() {
  return (
    <>
      <DonateHero />
      <ImpactCards />
      <DonationCard />
      <AllocationChart />
      <PartnerCTA />
    </>
  );
}
