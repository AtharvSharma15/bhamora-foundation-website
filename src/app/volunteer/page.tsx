'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  HeartPulse,
  GraduationCap,
  Users,
  Lock,
  ShieldCheck,
  Check,
  Loader2,
  CalendarDays,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import { Eyebrow, SectionHeading } from '@/components/ui/primitives';

type FormState = {
  name: string;
  email: string;
  phone: string;
  area: string;
  availability: string;
  skills: string;
  motivation: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  area: '',
  availability: '',
  skills: '',
  motivation: '',
};

const opportunities = [
  {
    title: 'Teaching Volunteers',
    icon: GraduationCap,
    description: 'Help teach children in our community schools and adult literacy programmes.',
    time: '2–4 hours per week',
    skills: 'Patience, communication',
    area: 'Teaching',
  },
  {
    title: 'Healthcare Volunteers',
    icon: HeartPulse,
    description: 'Assist in our mobile health clinics and health awareness programmes.',
    time: 'Flexible schedule',
    skills: 'Medical background preferred',
    area: 'Healthcare',
  },
  {
    title: 'Community Outreach',
    icon: Users,
    description: 'Help with community engagement and programme coordination.',
    time: 'Weekends & evenings',
    skills: 'Interpersonal & engagement skills',
    area: 'Community Outreach',
  },
  {
    title: 'Event Volunteers',
    icon: Sparkles,
    description: 'Support fundraising events and community activities.',
    time: 'As needed',
    skills: 'Event planning, organisation',
    area: 'Event Management',
  },
];

const faqs = [
  {
    q: 'Do I need any special qualifications?',
    a: 'No special qualifications are required. We welcome volunteers from all backgrounds and provide training for specific roles.',
  },
  {
    q: 'How much time do I need to commit?',
    a: 'We offer flexible opportunities — from 2 hours a month to multiple days a week, depending on your availability.',
  },
  {
    q: 'Are there age requirements?',
    a: 'Volunteers must be at least 18 years old. Some opportunities may have specific role-based requirements.',
  },
  {
    q: 'Will I receive training?',
    a: 'Yes. All volunteers receive orientation and specific training for their roles, with ongoing support thereafter.',
  },
];

function VolunteerHero() {
  return (
    <section
      data-testid="volunteer-hero"
      className="relative isolate overflow-hidden bg-brand-gradient pb-24 pt-40 text-white md:pb-32 md:pt-44"
    >
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="container-wide relative grid gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Eyebrow className="!text-gold">Join the movement</Eyebrow>
          <h1 className="display-xl mt-6 text-balance text-white">
            Lend your time. <span className="italic text-gold">Change a life.</span>
          </h1>
          <p className="lead mt-6 text-white/80">
            Join a community of passionate volunteers making real difference in
            underserved communities — across teaching, healthcare, outreach and events.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { label: 'Active volunteers', value: '2,500+' },
            { label: 'Hours contributed', value: '120,000+' },
            { label: 'Programmes touched', value: '4' },
            { label: 'Cities reached', value: '6+' },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-[20px] border border-white/15 bg-white/[0.06] p-5 backdrop-blur"
            >
              <p className="font-display text-3xl font-medium text-white">{s.value}</p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/65">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Opportunities({ onApply }: { onApply: (area: string) => void }) {
  return (
    <section className="section bg-canvas" data-testid="volunteer-opportunities">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Opportunities"
            title="Ways you can contribute."
            description="Four flexible programmes, each with clear time commitments and roles."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {opportunities.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.08}>
              <article
                className="card-premium card-premium-hover h-full p-8"
                data-testid={`volunteer-opportunity-${o.area.toLowerCase().replace(/ /g, '-')}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/8 text-brand">
                    <o.icon size={22} />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-700">
                    <CalendarDays size={12} /> {o.time}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium text-ink">{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{o.description}</p>
                <p className="mt-4 text-xs text-ink-soft">
                  <span className="font-semibold text-ink">Skills:</span> {o.skills}
                </p>
                <button
                  type="button"
                  onClick={() => onApply(o.area)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700"
                  data-testid={`volunteer-apply-${o.area.toLowerCase().replace(/ /g, '-')}`}
                >
                  Apply for this role
                  <ArrowRight size={14} />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepIndicator({ step }: { step: number }) {
  const steps = ['Your details', 'Where you fit', 'Why you help'];
  return (
    <div className="flex items-center justify-between" data-testid="volunteer-stepper">
      {steps.map((s, i) => {
        const number = i + 1;
        const active = number === step;
        const done = number < step;
        return (
          <div key={s} className="flex flex-1 items-center">
            <div
              className={`flex items-center gap-3 ${active || done ? 'text-brand' : 'text-ink-soft'}`}
            >
              <div
                className={`grid h-9 w-9 place-items-center rounded-full text-xs font-semibold transition-all ${
                  done
                    ? 'bg-gold text-ink'
                    : active
                    ? 'bg-brand text-white shadow-soft'
                    : 'border border-black/10 bg-white text-ink-soft'
                }`}
                data-testid={`volunteer-step-${number}`}
              >
                {done ? <Check size={14} /> : number}
              </div>
              <span className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] sm:inline">
                {s}
              </span>
            </div>
            {i < steps.length - 1 && (
              <span className={`mx-3 h-px flex-1 ${number < step ? 'bg-gold' : 'bg-black/10'}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function VolunteerForm({ initialArea }: { initialArea: string }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormState>({ ...initialState, area: initialArea });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  // sync area if changed from outside
  useMemo(() => {
    if (initialArea && initialArea !== data.area) {
      setData((d) => ({ ...d, area: initialArea }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialArea]);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const canProceed = () => {
    if (step === 1)
      return (
        data.name.trim().length > 1 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
        data.phone.trim().length >= 6
      );
    if (step === 2) return data.area && data.availability;
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      if (!canProceed()) return;
      setStep(step + 1);
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          area: data.area || undefined,
          availability: data.availability || undefined,
          skills: data.skills || undefined,
          interest: data.motivation || undefined,
        }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result?.detail || 'Submission failed');
      setStatus('success');
      setMessage(result.message || 'Application received.');
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Something went wrong.');
    }
  };

  if (status === 'success') {
    return (
      <div
        className="card-premium p-10 text-center"
        data-testid="volunteer-success"
      >
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold/20 text-gold-700">
          <Check size={22} />
        </div>
        <h3 className="mt-5 font-display text-2xl font-medium text-ink">
          Application received
        </h3>
        <p className="mt-3 text-sm text-ink-soft">{message}</p>
        <button
          type="button"
          onClick={() => {
            setData({ ...initialState, area: initialArea });
            setStep(1);
            setStatus('idle');
            setMessage('');
          }}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand/30 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand hover:bg-brand hover:text-white"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card-premium p-7 md:p-10"
      data-testid="volunteer-form"
    >
      <StepIndicator step={step} />

      <div className="mt-8">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-5"
            >
              <Field label="Full name" required>
                <input
                  type="text"
                  required
                  value={data.name}
                  onChange={(e) => update('name', e.target.value)}
                  className="input"
                  placeholder="Your full name"
                  data-testid="volunteer-name"
                />
              </Field>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Email" required>
                  <input
                    type="email"
                    required
                    value={data.email}
                    onChange={(e) => update('email', e.target.value)}
                    className="input"
                    placeholder="you@example.com"
                    data-testid="volunteer-email"
                  />
                </Field>
                <Field label="Phone" required>
                  <input
                    type="tel"
                    required
                    value={data.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className="input"
                    placeholder="+91 ___ ___ ____"
                    data-testid="volunteer-phone"
                  />
                </Field>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-5"
            >
              <Field label="Area of contribution" required>
                <select
                  required
                  value={data.area}
                  onChange={(e) => update('area', e.target.value)}
                  className="input"
                  data-testid="volunteer-area"
                >
                  <option value="">Choose an area</option>
                  <option value="Teaching">Education / Teaching</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Community Outreach">Community Outreach</option>
                  <option value="Event Management">Events</option>
                  <option value="Women Empowerment">Women Empowerment</option>
                </select>
              </Field>
              <Field label="Availability" required>
                <select
                  required
                  value={data.availability}
                  onChange={(e) => update('availability', e.target.value)}
                  className="input"
                  data-testid="volunteer-availability"
                >
                  <option value="">When can you contribute?</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="evenings">Evenings</option>
                  <option value="flexible">Flexible</option>
                </select>
              </Field>
              <Field label="Skills & experience" hint="Optional, but helpful">
                <textarea
                  value={data.skills}
                  onChange={(e) => update('skills', e.target.value)}
                  className="input min-h-[110px] resize-none"
                  placeholder="e.g. teaching, public health, design, social media…"
                  data-testid="volunteer-skills"
                />
              </Field>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-5"
            >
              <Field label="Why do you want to volunteer with us?" hint="A few sentences are enough">
                <textarea
                  value={data.motivation}
                  onChange={(e) => update('motivation', e.target.value)}
                  className="input min-h-[140px] resize-none"
                  placeholder="Share what draws you to Bhamora and what you hope to contribute."
                  data-testid="volunteer-motivation"
                />
              </Field>
              <div className="rounded-[16px] border border-brand/10 bg-canvas p-5 text-xs text-ink-soft">
                <p className="font-semibold text-ink">Almost done.</p>
                <p className="mt-1">
                  We&apos;ll review your application and reach out within 5 working days.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {status === 'error' && (
        <p
          role="alert"
          className="mt-6 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
        >
          {message}
        </p>
      )}

      <div className="mt-9 flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4 text-[11px] text-ink-soft">
          <span className="inline-flex items-center gap-1.5">
            <Lock size={13} className="text-gold-700" /> Secure submission
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck size={13} className="text-gold-700" /> Privacy protected
          </span>
        </div>
        <div className="flex items-center gap-3">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="inline-flex items-center gap-2 rounded-full border border-brand/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft transition hover:border-brand/30 hover:text-brand"
              data-testid="volunteer-back"
            >
              <ArrowLeft size={14} /> Back
            </button>
          )}
          <button
            type="submit"
            disabled={!canProceed() || status === 'loading'}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
            data-testid={step === 3 ? 'volunteer-submit' : 'volunteer-next'}
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                Submitting
              </>
            ) : step === 3 ? (
              <>
                Submit application
                <ArrowRight size={14} />
              </>
            ) : (
              <>
                Continue
                <ArrowRight size={14} />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  children,
  required,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
        <span>
          {label} {required && <span className="text-gold-700">·</span>}
        </span>
        {hint && <span className="text-[10px] normal-case tracking-normal text-ink-soft">{hint}</span>}
      </span>
      <div className="mt-2">{children}</div>
      <style jsx>{`
        :global(.input) {
          width: 100%;
          border-radius: 14px;
          border: 1px solid rgba(15, 76, 129, 0.12);
          background: #fff;
          padding: 0.85rem 1rem;
          font-size: 0.9rem;
          color: var(--ink);
          transition: all 300ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        :global(.input:focus) {
          outline: none;
          border-color: rgba(15, 76, 129, 0.45);
          box-shadow: 0 0 0 4px rgba(15, 76, 129, 0.08);
        }
        :global(.input::placeholder) {
          color: rgba(31, 41, 55, 0.4);
        }
      `}</style>
    </label>
  );
}

function FAQs() {
  return (
    <section className="section bg-canvas" data-testid="volunteer-faqs">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow="FAQs"
            title="Common questions."
          />
        </Reveal>
        <div className="mt-12 space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <details className="group card-premium overflow-hidden p-6">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <span className="font-display text-base font-medium text-ink md:text-lg">
                    {f.q}
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-brand/[0.06] text-brand transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function VolunteerPage() {
  const [selectedArea, setSelectedArea] = useState('');

  return (
    <>
      <VolunteerHero />
      <Opportunities
        onApply={(area) => {
          setSelectedArea(area);
          const el = document.getElementById('apply');
          el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
      />

      <section id="apply" className="section bg-white" data-testid="volunteer-form-section">
        <div className="container-narrow">
          <Reveal>
            <SectionHeading
              eyebrow="Volunteer application"
              title="Submit your application in three quick steps."
              description="It takes less than a minute. We'll respond within 5 working days."
            />
          </Reveal>
          <div className="mt-12">
            <VolunteerForm initialArea={selectedArea} />
          </div>
        </div>
      </section>

      <FAQs />
    </>
  );
}
