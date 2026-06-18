'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Sparkles,
  HandHeart,
  Globe2,
  Eye,
  Scale,
  ArrowRight,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import { Eyebrow, SectionHeading } from '@/components/ui/primitives';

const values = [
  {
    title: 'Integrity',
    description: 'We uphold the highest ethical standards in every decision.',
    icon: ShieldCheck,
  },
  {
    title: 'Empowerment',
    description:
      'We enable communities to lead their own development with confidence.',
    icon: HandHeart,
  },
  {
    title: 'Inclusivity',
    description:
      'Everyone — regardless of background — deserves access to opportunity.',
    icon: Globe2,
  },
  {
    title: 'Sustainability',
    description:
      'We design for long-term, lasting change rather than short-term fixes.',
    icon: Sparkles,
  },
  {
    title: 'Collaboration',
    description:
      'We work hand-in-hand with communities, partners and stakeholders.',
    icon: HandHeart,
  },
  {
    title: 'Transparency',
    description: 'We maintain openness in operations and financial management.',
    icon: Eye,
  },
];

const timeline = [
  {
    year: '2023',
    title: 'Foundation established',
    detail:
      'Bhamora Foundation was founded with a mission to serve underserved communities.',
  },
  {
    year: '2023',
    title: 'Education initiative launched',
    detail: 'First flagship education programme in rural communities began.',
  },
  {
    year: '2024',
    title: 'Healthcare expansion',
    detail: 'Healthcare services extended to 5+ remote health centres.',
  },
  {
    year: '2025–2026',
    title: 'Women empowerment programme',
    detail: 'Launched comprehensive women empowerment initiatives at scale.',
  },
];

function PageHero() {
  return (
    <section
      data-testid="about-hero"
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
          <Eyebrow className="!text-gold">About Bhamora Foundation</Eyebrow>
          <h1 className="display-xl mt-6 text-balance text-white">
            Built on dignity. <span className="italic text-gold">Driven by purpose.</span>
          </h1>
          <p className="lead mt-6 text-white/80">
            Bhamora Foundation has been at the forefront of community
            development since 2023, working tirelessly to create sustainable
            change in underserved communities across India.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function StoryMissionVision() {
  const blocks = [
    {
      eyebrow: 'Our story',
      title: 'From a single classroom to a multi-state movement.',
      body: 'What began as a small community initiative in 2023 has grown into a comprehensive foundation serving 5,000+ beneficiaries across multiple states. Our journey started with education and healthcare — and continues to expand alongside the communities we partner with.',
    },
    {
      eyebrow: 'Our mission',
      title: 'Empower communities through opportunity, not charity.',
      body: 'To empower communities through education, healthcare and sustainable development — ensuring every individual has access to opportunities for growth and prosperity.',
    },
    {
      eyebrow: 'Our vision',
      title: 'A world where dignity has no postcode.',
      body: 'Every person, regardless of their background, has equal opportunity to lead a dignified life and contribute meaningfully to society&apos;s progress.',
    },
  ];

  return (
    <section className="section bg-white" data-testid="about-story-section">
      <div className="container-wide grid gap-10 lg:grid-cols-3">
        {blocks.map((b, i) => (
          <Reveal key={b.eyebrow} delay={i * 0.1}>
            <article className="card-premium h-full p-8">
              <Eyebrow>{b.eyebrow}</Eyebrow>
              <h3 className="mt-4 font-display text-2xl font-medium text-ink">
                {b.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{b.body}</p>
              <span className="mt-6 block h-[3px] w-10 rounded-full bg-gold" />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CoreValues() {
  return (
    <section className="section bg-canvas" data-testid="about-values-section">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Core values"
            title="The principles that guide every decision."
            description="Six commitments that anchor our work — from board rooms to bastis."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div className="card-premium card-premium-hover h-full p-7">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/8 text-brand">
                  <v.icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-xl font-medium text-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {v.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipFull() {
  return (
    <section className="section bg-white" data-testid="about-leadership-section">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Leadership team"
            title="Meet the leaders behind Bhamora."
            description="Dedicated leaders working together to create sustainable change, empower communities and build a brighter future."
          />
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <article className="card-premium card-premium-hover h-full p-8 md:p-10">
              <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-3xl md:h-64 md:w-64">
                <Image
                  src="/images/leadership/founder.jpeg"
                  alt="Dr. Krishna Nand Bhatt"
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>
              <div className="mt-8">
                <span className="chip">Founder &amp; Director</span>
                <h3 className="mt-4 font-display text-3xl font-medium text-ink">
                  Dr. Krishna Nand Bhatt
                </h3>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-soft">
                  <p>
                    With over 29 years of experience in community development,
                    Krishna Bhatt has led Bhamora Foundation since its
                    inception. His vision for social transformation has
                    positively impacted thousands of lives.
                  </p>
                  <p>
                    Under his leadership, the foundation expanded to numerous
                    communities — implementing sustainable programmes across
                    education, healthcare, livelihood development and women&apos;s
                    empowerment.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="card-premium card-premium-hover h-full p-8 md:p-10">
              <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-3xl md:h-64 md:w-64">
                <Image
                  src="/images/leadership/Preeti-Bhatt.png"
                  alt="Preeti Bhatt"
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>
              <div className="mt-8">
                <span className="chip !border-gold/30 !bg-gold/10 !text-gold-700">
                  Co-Founder
                </span>
                <h3 className="mt-4 font-display text-3xl font-medium text-ink">
                  Preeti Bhatt
                </h3>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-soft">
                  <p>
                    Preeti Bhatt is a dedicated social development leader and
                    Co-Founder of Bhamora Foundation. She has played a key role
                    in designing women&apos;s empowerment, education and community
                    welfare initiatives.
                  </p>
                  <p>
                    Through her leadership, the foundation has expanded
                    opportunities for women, children and underserved
                    families — creating pathways to education, self-reliance
                    and long-term progress.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="section bg-canvas" data-testid="about-timeline-section">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Our journey"
            title="Milestones along the way."
          />
        </Reveal>
        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-gradient-to-b from-brand via-gold to-brand md:left-1/2" />
          <ul className="space-y-12">
            {timeline.map((t, i) => {
              const right = i % 2 === 0;
              return (
                <Reveal as="li" key={`${t.year}-${t.title}`} delay={i * 0.08} className="relative">
                  <div className={`flex flex-col items-start gap-6 md:flex-row ${right ? 'md:justify-start' : 'md:flex-row-reverse'}`}>
                    <div className="absolute left-4 top-1.5 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-gold ring-4 ring-canvas md:left-1/2" />
                    <div className={`ml-12 w-full md:ml-0 md:w-[calc(50%-2rem)] ${right ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="card-premium p-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                          {t.year}
                        </p>
                        <h4 className="mt-2 font-display text-xl font-medium text-ink">
                          {t.title}
                        </h4>
                        <p className="mt-2 text-sm text-ink-soft">{t.detail}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FutureGoals() {
  const goals = [
    'Sustainability focus: implementation of green energy across project sites',
    'Community expansion: 200+ communities by 2026',
    'Healthcare access: extend services to 100+ remote areas',
  ];
  return (
    <section className="relative isolate overflow-hidden bg-brand py-24 text-white" data-testid="about-future-goals">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Looking ahead"
            title="Our future goals."
            description="Bold, measurable commitments for the next chapter."
            light
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {goals.map((g, i) => (
            <Reveal key={g} delay={i * 0.1}>
              <div className="h-full rounded-[24px] border border-white/15 bg-white/[0.06] p-6 backdrop-blur">
                <p className="font-display text-lg font-medium text-white/95">{g}</p>
                <span className="mt-5 block h-[3px] w-10 rounded-full bg-gold" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 flex justify-center">
            <Link href="/donate" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-ink shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-brand">
              Support our next chapter
              <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero />
      <StoryMissionVision />
      <CoreValues />
      <LeadershipFull />
      <Timeline />
      <FutureGoals />
    </>
  );
}
