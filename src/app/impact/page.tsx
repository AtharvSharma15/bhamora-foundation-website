'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, Users, GraduationCap, HeartPulse, Sparkles, Building2 } from 'lucide-react';
import CountUp from '@/components/CountUp';
import Reveal from '@/components/Reveal';
import { Eyebrow, SectionHeading } from '@/components/ui/primitives';

const stats = [
  { icon: Users, value: 5000, suffix: '+', label: 'Beneficiaries helped' },
  { icon: GraduationCap, value: 700, suffix: '+', label: 'Children in school' },
  { icon: HeartPulse, value: 25000, suffix: '+', label: 'Patients reached' },
  { icon: Sparkles, value: 600, suffix: '+', label: 'Women empowered' },
  { icon: Building2, value: 6, suffix: '+', label: 'Communities transformed' },
  { icon: GraduationCap, value: 98, suffix: '%', label: 'Programme success rate' },
];

const stories = [
  {
    title: 'Education transformation',
    body: 'How our community schools and scholarships changed the lives of hundreds of children in rural areas.',
    impact: 'Over 700 children gained access to quality education',
  },
  {
    title: 'Healthcare initiative',
    body: 'Mobile health clinics and community health workers delivered critical and preventive care to thousands of remote patients.',
    impact: 'Healthcare services delivered to 25,000+ patients annually',
  },
  {
    title: "Women's empowerment",
    body: 'Vocational training and self-help groups empowered local women with sustainable livelihoods.',
    impact: '600+ women achieved economic independence',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Community Leader',
    image: '/images/education/children learning.jpg',
    quote:
      'Bhamora Foundation\'s education programme transformed our village. Our children now have access to quality schooling that was previously unavailable.',
  },
  {
    name: 'Ramesh Kumar',
    role: 'Healthcare Beneficiary',
    image: '/images/healthcare/preventive helathcare.jpg',
    quote:
      "The healthcare initiative saved my wife's life during childbirth. The mobile clinic provided care we couldn't have accessed otherwise.",
  },
  {
    name: 'Sunita Devi',
    role: 'Self-Help Group Member',
    image: '/images/women/self help group.jpg',
    quote:
      'The vocational training programme gave me the skills to start my own tailoring business. I now support my entire family.',
  },
];

const caseStudies = [
  {
    title: 'Rural education initiative',
    body: 'Over 700 children in underserved communities gained access to quality schooling.',
    duration: '2023–Present',
    image: '/images/education/lietaracy class.jpg',
  },
  {
    title: 'Healthcare access programme',
    body: 'Delivered critical and preventive care services to over 25,000 patients annually.',
    duration: 'Annual impact',
    image: '/images/healthcare/health camp.png',
  },
  {
    title: "Women's economic empowerment",
    body: 'More than 600 women achieved complete financial independence through skill development.',
    duration: 'Ongoing',
    image: '/images/women/women empoverment.jpg',
  },
];

function ImpactHero() {
  return (
    <section
      data-testid="impact-hero"
      className="relative isolate overflow-hidden bg-brand-gradient pb-24 pt-40 text-white md:pb-32 md:pt-44"
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
          <Eyebrow className="!text-gold">Our impact</Eyebrow>
          <h1 className="display-xl mt-6 text-balance text-white">
            Measurable change.{' '}
            <span className="italic text-gold">Independently verified.</span>
          </h1>
          <p className="lead mt-6 text-white/80">
            A clear picture of the difference we make in communities — across
            education, health, livelihoods and infrastructure.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.06 }}
              className="rounded-[20px] border border-white/15 bg-white/[0.06] p-5 backdrop-blur"
              data-testid={`impact-hero-stat-${i}`}
            >
              <s.icon size={20} className="text-gold" />
              <p className="mt-4 font-display text-3xl font-medium text-white">
                <CountUp end={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/65">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SuccessStories() {
  return (
    <section className="section bg-white" data-testid="impact-stories">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Success stories"
            title="The work behind the numbers."
          />
        </Reveal>
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <article className="card-premium card-premium-hover h-full p-8">
                <h3 className="font-display text-xl font-medium text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.body}</p>
                <div className="mt-6 rounded-[16px] bg-canvas p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">
                    Impact
                  </p>
                  <p className="mt-1 text-sm font-medium text-ink">{s.impact}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section bg-canvas" data-testid="impact-testimonials">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Community voices"
            title="In their own words."
            description="Real testimonies from the people our programmes have served."
          />
        </Reveal>
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <article className="card-premium card-premium-hover h-full p-8">
                <Quote className="text-gold" size={28} />
                <p className="mt-3 text-pretty text-sm leading-relaxed text-ink-soft md:text-base">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-4 border-t border-black/5 pt-5">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image src={t.image} alt={t.name} fill sizes="48px" className="object-cover" />
                  </div>
                  <div>
                    <p className="font-display text-base font-medium text-ink">{t.name}</p>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                      {t.role}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="section bg-white" data-testid="impact-case-studies">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Case studies"
            title="From the field, with evidence."
          />
        </Reveal>
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {caseStudies.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article className="card-premium card-premium-hover group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-elegant group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-medium text-ink">{c.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{c.body}</p>
                  <span className="mt-5 inline-flex w-fit items-center rounded-full bg-brand/[0.06] px-3 py-1 text-xs font-semibold text-brand">
                    {c.duration}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ImpactPage() {
  return (
    <>
      <ImpactHero />
      <SuccessStories />
      <Testimonials />
      <CaseStudies />
    </>
  );
}
