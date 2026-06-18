import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Impact', href: '/impact' },
  { name: 'Gallery', href: '/gallery' },
];

const supportLinks = [
  { name: 'Volunteer', href: '/volunteer' },
  { name: 'Donate', href: '/donate' },
  { name: 'Partnerships', href: '/contact' },
  { name: 'Contact Us', href: '/contact' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms-and-conditions' },
];

const socials = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'YouTube', href: '#', icon: Youtube },
];

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative overflow-hidden bg-[#081f33] text-white"
    >
      {/* background flourishes */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />

      <div className="container-wide relative">
        {/* Newsletter band */}
        <div
          data-testid="footer-newsletter"
          className="mt-20 grid gap-8 rounded-[28px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md md:grid-cols-[1.1fr_1fr] md:p-12"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-8 bg-gold/70" /> Stay in the circle
            </span>
            <h3 className="mt-3 font-display text-3xl font-medium leading-tight text-white md:text-4xl">
              Updates from the field — straight to your inbox.
            </h3>
            <p className="mt-3 max-w-md text-sm text-white/70">
              Quarterly stories, programme milestones and invitations to volunteer.
              No spam, just impact.
            </p>
          </div>
          <div className="flex items-center">
            <NewsletterForm />
          </div>
        </div>

        {/* Columns */}
        <div className="mt-16 grid gap-12 pb-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gold text-ink">
                <span className="font-display text-xl font-semibold">B</span>
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-xl font-semibold">Bhamora</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                  Foundation
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Working towards a better future for all through education,
              healthcare, women empowerment and sustainable community
              development across India.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {socials.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  data-testid={`footer-social-${name.toLowerCase()}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all duration-300 ease-elegant hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-ink"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display text-base font-semibold text-white">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-white/70 transition-colors hover:text-gold"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display text-base font-semibold text-white">Support</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {supportLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-white/70 transition-colors hover:text-gold"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-display text-base font-semibold text-white">Reach Us</h4>
            <ul className="mt-5 space-y-4 text-sm text-white/75">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                <span>
                  Daisy-2, Necogarden, Viman Nagar
                  <br />
                  Pune — 411014, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold" />
                <a href="tel:+918758000700" className="hover:text-gold">
                  +91 87580 00700
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold" />
                <a
                  href="mailto:bhamorafoundation@gmail.com"
                  className="hover:text-gold"
                >
                  bhamorafoundation@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/60 md:flex-row">
          <p>
            © {new Date().getFullYear()} Bhamora Foundation. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                className="transition-colors hover:text-gold"
              >
                {l.name}
              </Link>
            ))}
            <span className="text-white/40">Registered Indian Non-Profit · 80G & 12A</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
