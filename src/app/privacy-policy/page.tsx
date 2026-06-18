import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy · Bhamora Foundation',
};

const sections = [
  {
    title: 'Information we collect',
    body: 'We may collect personal information such as your name, email address, phone number and any information you voluntarily provide through our contact forms, volunteer forms or donation forms.',
  },
  {
    title: 'How we use information',
    body: 'We use collected information to respond to inquiries, process donations, manage volunteer activities, improve our services and communicate with supporters.',
  },
  {
    title: 'Cookies and advertising',
    body: 'This website may use cookies to enhance user experience. Google AdSense may use cookies to serve ads based on your prior visits to this or other websites. Google\'s advertising partners may use cookies and similar technologies to personalise advertisements.',
  },
  {
    title: 'Third-party services',
    body: 'We may use trusted third-party services such as Google Analytics and Google AdSense to analyse website traffic and display advertisements.',
  },
  {
    title: 'Data security',
    body: 'We take reasonable measures to protect your information from unauthorised access or disclosure.',
  },
  {
    title: 'Contact us',
    body: 'If you have any questions regarding this Privacy Policy, please contact us through the Contact page on this website.',
  },
];

export default function PrivacyPolicy() {
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
          <h1 className="display-xl mt-6 text-white">Privacy Policy</h1>
          <p className="lead mt-4 max-w-2xl text-white/80">
            At Bhamora Foundation, we value your privacy and are committed to
            protecting your personal information.
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
