import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions · Bhamora Foundation',
};

const sections = [
  {
    title: 'Acceptance of terms',
    body: 'By accessing and using the Bhamora Foundation website, you accept and agree to be bound by these Terms & Conditions. If you do not agree, please discontinue use of the site.',
  },
  {
    title: 'Use of content',
    body: 'All content on this website — including text, graphics, logos and images — is the property of Bhamora Foundation and protected by applicable copyright and intellectual property laws. You may not reproduce, distribute or republish content without prior written permission.',
  },
  {
    title: 'Donations',
    body: 'All donations made to Bhamora Foundation are voluntary and non-refundable. Donations are utilised for programmatic activities, administrative costs and fundraising, as outlined on our Donate page.',
  },
  {
    title: 'Volunteer participation',
    body: 'Volunteers participating in Bhamora Foundation programmes do so on a voluntary basis. Participation is subject to programme guidelines, code of conduct and applicable laws.',
  },
  {
    title: 'External links',
    body: 'Our website may contain links to external sites that are not operated by Bhamora Foundation. We have no control over the content and practices of these third-party sites.',
  },
  {
    title: 'Limitation of liability',
    body: 'Bhamora Foundation shall not be held liable for any damages arising out of or in connection with the use of this website or any content displayed on it.',
  },
  {
    title: 'Contact',
    body: 'If you have questions regarding these Terms & Conditions, please reach out via the Contact page on this website.',
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-gradient pb-20 pt-40 text-white md:pb-24 md:pt-44">
        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="container-wide relative">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 transition hover:bg-white hover:text-brand"
          >
            <ArrowLeft size={14} />
            Home
          </Link>
          <h1 className="display-xl mt-6 text-white">Terms &amp; Conditions</h1>
          <p className="lead mt-4 max-w-2xl text-white/80">
            Thank you for visiting Bhamora Foundation. Please review the
            following terms that govern the use of this website.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-narrow">
          <div className="card-premium p-8 md:p-12">
            <div className="prose-content space-y-10">
              {sections.map((s) => (
                <div key={s.title}>
                  <h2 className="font-display text-2xl font-medium text-ink">{s.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-ink-soft">{s.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-xs uppercase tracking-[0.22em] text-ink-soft">
              Last updated: June 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
