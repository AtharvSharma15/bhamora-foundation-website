'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  HeartPulse,
  Sparkles,
  Building2,
  ArrowRight,
  Check,
  Heart,
  Megaphone,
  HandCoins,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import { Eyebrow, SectionHeading } from '@/components/ui/primitives';

const programs = [
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Education Programme',
    image: '/images/education/lietaracy class.jpg',
    description:
      'Providing quality education to children in underserved communities through community schools, scholarships and adult literacy programmes.',
    initiatives: [
      'Community schools in rural areas',
      'Scholarship programmes for underprivileged students',
      'Adult literacy & vocational training',
      'Digital learning initiatives',
    ],
    impact:
      'Over 700 children have gained access to quality education through our programmes since 2023.',
  },
  {
    id: 'healthcare',
    icon: HeartPulse,
    title: 'Healthcare Programme',
    image: '/images/healthcare/health camp.png',
    description:
      'Delivering accessible healthcare services through mobile clinics, health camps and community health workers.',
    initiatives: [
      'Mobile health clinics in remote areas',
      'Preventive healthcare awareness',
      'Maternal & child health services',
      'Healthcare worker training',
    ],
    impact:
      'We deliver healthcare services to over 25,000 patients annually through our mobile health initiatives.',
  },
  {
    id: 'women-empowerment',
    icon: Sparkles,
    title: 'Women Empowerment Programme',
    image: '/images/women/women empoverment.jpg',
    description:
      'Creating opportunities for women to achieve economic independence and social equality through skill development and support networks.',
    initiatives: [
      'Vocational training in multiple skills',
      'Self-help group formation & support',
      'Financial literacy programmes',
      'Leadership development workshops',
    ],
    impact:
      'More than 600 women have achieved economic independence through our training programmes.',
  },
  {
    id: 'community-development',
    icon: Building2,
    title: 'Community Development Programme',
    image: '/images/award/conmunity healt comapnion.jpg',
    description:
      'Building sustainable infrastructure and fostering local economic growth through community-driven development initiatives.',
    initiatives: [
      'Infrastructure development projects',
      'Clean water & sanitation initiatives',
      'Sustainable agriculture programmes',
      'Local entrepreneurship support',
    ],
    impact:
      'Infrastructure deployed in 6+ communities, directly benefiting more than 150 households.',
  },
];

function PageHero() {
  return (
    <section
      data-testid="programs-hero"
      className="relative isolate overflow-hidden bg-brand-gradient pb-24 pt-40 text-white md:pb-32 md:pt-44"
    >
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <Eyebrow className="!text-gold">Our programmes</Eyebrow>
          <h1 className="display-xl mt-6 text-balance text-white">
            Four programmes designed to{' '}
            <span className="italic text-gold">unlock human potential.</span>
          </h1>
          <p className="lead mt-6 text-white/80">
            Each initiative is co-designed with the community it serves —
            carefully monitored and evaluated to maximise effectiveness.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ProgramsGrid() {
  return (
    <section className="section bg-canvas" data-testid="programs-grid">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Overview"
            title="Transforming lives through our work."
            description="Designed with community input. Measured by community outcomes."
          />
        </Reveal>
        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {programs.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <article
                className="card-premium card-premium-hover group flex h-full flex-col overflow-hidden"
                data-testid={`program-overview-${p.id}`}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-elegant group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/60 to-transparent" />
                  <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl bg-white/90 text-brand backdrop-blur">
                    <p.icon size={22} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-display text-2xl font-medium text-ink">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.description}</p>
                  <Link
                    href={`#${p.id}`}
                    className="mt-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand transition-colors hover:text-gold"
                  >
                    Learn more
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramDetails() {
  return (
    <section className="section bg-white" data-testid="programs-details">
      <div className="container-wide space-y-24">
        <Reveal>
          <SectionHeading
            eyebrow="Programme details"
            title="A closer look at the work."
            description="The initiatives, the methods and the impact behind each programme."
          />
        </Reveal>

        {programs.map((p, i) => (
          <Reveal key={p.id}>
            <article
              id={p.id}
              data-testid={`program-detail-${p.id}`}
              className="grid gap-10 lg:grid-cols-2 lg:items-center"
            >
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-soft">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/8 text-brand">
                    <p.icon size={22} />
                  </span>
                  <Eyebrow>Programme · {i + 1}</Eyebrow>
                </div>
                <h3 className="display-md mt-5 text-ink">{p.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
                  {p.description}
                </p>

                <h4 className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                  Key initiatives
                </h4>
                <ul className="mt-4 space-y-3">
                  {p.initiatives.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink-soft">
                      <Check size={16} className="mt-1 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 rounded-[20px] border border-gold/30 bg-gold/[0.06] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">
                    Impact to date
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink">{p.impact}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function HowYouCanHelp() {
  const ways = [
    {
      icon: HandCoins,
      title: 'Donate',
      copy: 'Your financial contributions directly support programmes and help us expand our reach.',
      href: '/donate',
      cta: 'Donate now',
    },
    {
      icon: Heart,
      title: 'Volunteer',
      copy: 'Join our team and create direct impact in communities that need it most.',
      href: '/volunteer',
      cta: 'Volunteer',
    },
    {
      icon: Megaphone,
      title: 'Spread awareness',
      copy: 'Help us reach more people by sharing our mission with your network.',
      href: '/contact',
      cta: 'Learn more',
    },
  ];
  return (
    <section className="section bg-canvas" data-testid="programs-help-section">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Get involved"
            title="Three ways to support our programmes."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ways.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08}>
              <article className="card-premium card-premium-hover h-full p-8">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/15 text-gold-700">
                  <w.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-xl font-medium text-ink">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{w.copy}</p>
                <Link
                  href={w.href}
                  className="mt-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand transition-colors hover:text-gold"
                >
                  {w.cta}
                  <ArrowRight size={14} />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProgramsPage() {
  return (
    <>
      <PageHero />
      <ProgramsGrid />
      <ProgramDetails />
      <HowYouCanHelp />
    </>
  );
}
