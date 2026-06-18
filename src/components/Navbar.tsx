'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Impact', href: '/impact' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Volunteer', href: '/volunteer' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const onHome = pathname === '/';
  const showLight = onHome && !isScrolled && !open;

  const headerCls = showLight
    ? 'bg-transparent text-white'
    : 'bg-white/85 backdrop-blur-xl text-ink shadow-[0_10px_40px_rgba(15,76,129,0.08)] border-b border-black/[0.04]';

  return (
    <header
      data-testid="site-navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-elegant ${headerCls}`}
    >
      <div
        className={`container-wide flex items-center justify-between transition-all duration-500 ${
          isScrolled || !onHome ? 'py-3' : 'py-5'
        }`}
      >
        <Link
          href="/"
          className="group flex items-center gap-3"
          data-testid="navbar-logo"
        >
          <span
            className={`grid h-10 w-10 place-items-center rounded-full transition-colors ${
              showLight ? 'bg-white/10 ring-1 ring-white/30' : 'bg-brand text-white'
            }`}
          >
            <span className="font-display text-lg font-semibold">B</span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold tracking-tight">
              Bhamora
            </span>
            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${
                showLight ? 'text-white/70' : 'text-gold'
              }`}
            >
              Foundation
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                data-testid={`nav-link-${item.name.toLowerCase()}`}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  showLight
                    ? 'text-white/85 hover:text-white'
                    : 'text-ink-soft hover:text-brand'
                }`}
              >
                {item.name}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className={`absolute inset-x-3 -bottom-1 h-[2px] rounded-full ${
                      showLight ? 'bg-white' : 'bg-gold'
                    }`}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/donate"
            data-testid="navbar-donate-cta"
            className={`group hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-soft transition-all duration-300 ease-elegant hover:-translate-y-0.5 hover:shadow-gold sm:inline-flex ${
              showLight
                ? 'bg-white text-brand hover:bg-gold hover:text-white'
                : 'bg-gold text-ink hover:bg-gold-600 hover:text-white'
            }`}
          >
            <Heart size={16} className="transition-transform group-hover:scale-110" strokeWidth={2.5} />
            Donate
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((o) => !o)}
            className={`grid h-10 w-10 place-items-center rounded-full transition-colors lg:hidden ${
              showLight
                ? 'bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20'
                : 'bg-brand/5 text-brand hover:bg-brand/10'
            }`}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-panel"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden"
            data-testid="mobile-menu-panel"
          >
            <div className="container-wide pb-6 pt-2">
              <div className="rounded-3xl bg-white/95 p-5 shadow-soft-lg ring-1 ring-black/5 backdrop-blur-xl">
                <nav className="flex flex-col">
                  {navigation.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        data-testid={`mobile-nav-${item.name.toLowerCase()}`}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                          active
                            ? 'bg-brand/5 text-brand'
                            : 'text-ink-soft hover:bg-brand/5 hover:text-brand'
                        }`}
                      >
                        {item.name}
                        <span
                          aria-hidden
                          className={`h-1.5 w-1.5 rounded-full ${
                            active ? 'bg-gold' : 'bg-transparent'
                          }`}
                        />
                      </Link>
                    );
                  })}
                </nav>
                <Link
                  href="/donate"
                  data-testid="mobile-donate-cta"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink shadow-soft transition hover:bg-gold-600 hover:text-white"
                >
                  <Heart size={16} strokeWidth={2.5} />
                  Donate Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
