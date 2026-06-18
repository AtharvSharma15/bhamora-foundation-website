'use client';

import { useState } from 'react';
import { Mail, Loader2, Check } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.detail || 'Subscription failed.');
      setStatus('success');
      setMessage(data.message || 'Thank you for subscribing!');
      setEmail('');
      setTimeout(() => setStatus('idle'), 4500);
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Something went wrong.');
      setTimeout(() => setStatus('idle'), 4500);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full"
      data-testid="newsletter-form"
      noValidate
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <div className="relative flex-1">
          <Mail
            size={16}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
          />
          <input
            id="newsletter-email"
            data-testid="newsletter-email-input"
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 w-full rounded-full border border-white/20 bg-white/10 pl-11 pr-4 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-gold/60 focus:bg-white/15 focus:ring-2 focus:ring-gold/20"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          data-testid="newsletter-submit"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 text-sm font-semibold text-ink shadow-soft transition-all duration-300 ease-elegant hover:-translate-y-0.5 hover:bg-gold-600 hover:text-white hover:shadow-gold disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'loading' ? (
            <Loader2 size={16} className="animate-spin" />
          ) : status === 'success' ? (
            <Check size={16} />
          ) : null}
          {status === 'success' ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
      {message && (
        <p
          data-testid="newsletter-feedback"
          role={status === 'error' ? 'alert' : 'status'}
          className={`mt-3 text-xs ${
            status === 'error' ? 'text-rose-200' : 'text-gold/90'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
