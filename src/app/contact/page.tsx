'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Loader2,
  Check,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import { Eyebrow, SectionHeading } from '@/components/ui/primitives';

type Status = 'idle' | 'loading' | 'success' | 'error';

function ContactHero() {
  return (
    <section
      data-testid="contact-hero"
      className="relative isolate overflow-hidden bg-brand-gradient pb-20 pt-40 text-white md:pb-28 md:pt-44"
    >
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <Eyebrow className="!text-gold">Get in touch</Eyebrow>
          <h1 className="display-xl mt-6 text-balance text-white">
            We&apos;d love to <span className="italic text-gold">hear from you.</span>
          </h1>
          <p className="lead mt-6 text-white/80">
            Whether you want to partner, volunteer, donate or simply learn more
            — drop us a message and our team will respond shortly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const offices = [
  { icon: MapPin, label: 'Address', value: 'Daisy-2, Necogarden, Viman Nagar\nPune — 411014, Maharashtra, India' },
  { icon: Phone, label: 'Phone', value: '+91 87580 00700' },
  { icon: Mail, label: 'Email', value: 'bhamorafoundation@gmail.com' },
  { icon: Clock, label: 'Office hours', value: 'Monday – Friday · 9:00 AM – 6:00 PM' },
];

const socials = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((d) => ({ ...d, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result?.detail || 'Submission failed');
      setStatus('success');
      setMessage(result.message || 'Thank you. We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Something went wrong.');
    }
  };

  return (
    <>
      <ContactHero />

      <section className="section bg-white" data-testid="contact-section">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="Contact information"
              title="Our office, your call."
            />
            <div className="mt-10 grid gap-4">
              {offices.map((o) => (
                <div
                  key={o.label}
                  className="flex items-start gap-4 rounded-2xl border border-brand/8 bg-canvas p-5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand/8 text-brand">
                    <o.icon size={18} />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-700">
                      {o.label}
                    </p>
                    <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-ink">
                      {o.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-brand/8 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-700">
                Connect with us
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {socials.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    aria-label={name}
                    className="grid h-10 w-10 place-items-center rounded-full border border-brand/15 bg-white text-brand transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-brand/8">
              <iframe
                src="https://maps.google.com/maps?q=Daisy-2%20Necogarden%20Viman%20Nagar%20Pune%20411014&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                title="Bhamora Foundation Location"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="card-premium p-7 md:p-10" data-testid="contact-form-wrapper">
              <Eyebrow>Send us a message</Eyebrow>
              <h2 className="display-md mt-3 text-ink">Tell us what&apos;s on your mind.</h2>

              {status === 'success' ? (
                <div
                  className="mt-8 rounded-2xl border border-gold/30 bg-gold/[0.06] p-8 text-center"
                  data-testid="contact-success"
                >
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold/20 text-gold-700">
                    <Check size={22} />
                  </div>
                  <p className="mt-5 font-display text-2xl font-medium text-ink">Message sent</p>
                  <p className="mt-2 text-sm text-ink-soft">{message}</p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft hover:border-brand/30 hover:text-brand"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form className="mt-8 space-y-5" onSubmit={onSubmit} data-testid="contact-form">
                  <Field label="Name" required>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={onChange}
                      className="input"
                      placeholder="Your name"
                      data-testid="contact-name"
                    />
                  </Field>
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Email" required>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={onChange}
                        className="input"
                        placeholder="you@example.com"
                        data-testid="contact-email"
                      />
                    </Field>
                    <Field label="Subject" required>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={onChange}
                        className="input"
                        placeholder="How can we help?"
                        data-testid="contact-subject"
                      />
                    </Field>
                  </div>
                  <Field label="Message" required>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={onChange}
                      rows={6}
                      className="input resize-none"
                      placeholder="Share a bit about what you have in mind…"
                      data-testid="contact-message"
                    />
                  </Field>

                  {status === 'error' && (
                    <p
                      role="alert"
                      className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
                    >
                      {message}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    data-testid="contact-submit"
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        Sending
                      </>
                    ) : (
                      <>
                        Send message
                        <ArrowRight size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
      <style jsx global>{`
        .input {
          width: 100%;
          border-radius: 14px;
          border: 1px solid rgba(15, 76, 129, 0.12);
          background: #fff;
          padding: 0.85rem 1rem;
          font-size: 0.9rem;
          color: var(--ink);
          transition: all 300ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .input:focus {
          outline: none;
          border-color: rgba(15, 76, 129, 0.45);
          box-shadow: 0 0 0 4px rgba(15, 76, 129, 0.08);
        }
        .input::placeholder {
          color: rgba(31, 41, 55, 0.4);
        }
      `}</style>
    </>
  );
}

function Field({
  label,
  children,
  required,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
        {label} {required && <span className="text-gold-700">·</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
