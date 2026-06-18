'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  HeartPulse,
  Sparkles,
  Building2,
  ArrowRight,
  Quote,
  ShieldCheck,
  Award,
  Users,
  Globe2,
} from 'lucide-react';
import CountUp from '@/components/CountUp';
import Reveal from '@/components/Reveal';
import { Eyebrow, SectionHeading, LinkArrow } from '@/components/ui/primitives';

/* -------------------- HERO -------------------- */
function Hero() {
  return (
    <section
      data-testid="home-hero"
      className="relative isolate flex min-h-[92vh] items-end overflow-hidden text-white"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/education/children learning.jpg"
          alt="Children learning at a Bhamora Foundation programme"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_30%,rgba(15,76,129,0.35),transparent_60%)]" />
      </div>

      <div className="container-wide relative w-full pb-24 pt-40 md:pb-32 md:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <Eyebrow className="!text-gold">A registered Indian non-profit · Est. 2023</Eyebrow>
          <h1 className="display-xl mt-6 text-balance text-white">
            Empowering communities,
            <span className="italic text-gold"> transforming lives.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
            For over two decades of collective experience, Bhamora Foundation has
            worked alongside underserved communities to create lasting change
            through education, healthcare, women empowerment and sustainable
            development.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/donate"
              data-testid="hero-donate-btn"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-600 hover:text-white hover:shadow-gold"
            >
              Donate now
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/volunteer"
              data-testid="hero-volunteer-btn"
              className="inline-flex items-center gap-2 rounded-full border border-white/60 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-brand"
            >
              Become a volunteer
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating impact card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid w-full max-w-4xl grid-cols-2 gap-6 rounded-[24px] border border-white/20 bg-white/10 p-6 backdrop-blur-2xl md:grid-cols-4 md:p-8"
          data-testid="hero-impact-strip"
        >
          {[
            { value: 5000, suffix: '+', label: 'Beneficiaries' },
            { value: 25, suffix: '+', label: 'Programmes' },
            { value: 6, suffix: '+', label: 'Communities' },
            { value: 98, suffix: '%', label: 'Success rate' },
          ].map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display text-3xl font-medium text-white md:text-4xl">
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* subtle scroll cue */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
          className="grid h-9 w-6 place-items-center rounded-full border border-white/40"
          aria-hidden
        >
          <span className="h-2 w-px bg-white/70" />
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------- IMPACT STATS -------------------- */
function ImpactStats() {
  const stats = [
    {
      icon: Users,
      value: 5000,
      suffix: '+',
      label: 'Lives Touched',
      detail: 'Beneficiaries across our four core programmes',
    },
    {
      icon: GraduationCap,
      value: 700,
      suffix: '+',
      label: 'Children in School',
      detail: 'Access to quality education in underserved areas',
    },
    {
      icon: HeartPulse,
      value: 25000,
      suffix: '+',
      label: 'Patients Annually',
      detail: 'Care delivered through mobile health camps',
    },
    {
      icon: Sparkles,
      value: 600,
      suffix: '+',
      label: 'Women Empowered',
      detail: 'Through vocational training & self-help groups',
    },
  ];

  return (
    <section className="section bg-canvas" data-testid="home-impact-section">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Our impact"
            title={
              <>
                Numbers that signal <em className="font-display italic text-brand">measurable change</em>
              </>
            }
            description="Independently verified outcomes across 2023–2025."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div
                data-testid={`impact-stat-${i}`}
                className="card-premium card-premium-hover relative h-full p-8"
              >
                <div className="absolute right-7 top-7 grid h-11 w-11 place-items-center rounded-full bg-gold/15 text-gold">
                  <s.icon size={20} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  {s.label}
                </p>
                <p className="mt-3 font-display text-5xl font-medium leading-none text-brand">
                  <CountUp end={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.detail}</p>
                <span className="mt-6 block h-[3px] w-10 rounded-full bg-gold" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- ABOUT -------------------- */
function AboutPreview() {
  return (
    <section className="section bg-white" data-testid="home-about-section">
      <div className="container-wide grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] shadow-soft">
            <Image
              src="/images/women/women empoverment.jpg"
              alt="Women being empowered through Bhamora Foundation"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/85 p-5 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Established 2023
              </p>
              <p className="mt-1 font-display text-xl font-medium text-ink">
                Built around dignity, agency & local leadership.
              </p>
            </div>
          </div>
        </Reveal>
        <div className="lg:col-span-7 lg:pl-4">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Who we are"
              title={
                <>
                  An equal, just & sustainable society — built one community at
                  a time.
                </>
              }
              description="Bhamora Foundation was started with a vision to bring deep-rooted, sustainable change to people's lives. We believe everyone has a right to life and security, a sustainable livelihood, an identity and access to basic social services."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-[20px] border border-brand/10 bg-canvas p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  Our Mission
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  To empower underserved communities through education,
                  healthcare and sustainable livelihoods — fostering
                  self-reliance and long-term development.
                </p>
              </div>
              <div className="rounded-[20px] border border-brand/10 bg-canvas p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  Our Vision
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  A world where every individual — regardless of background —
                  has equal opportunities to lead a dignified life and
                  contribute meaningfully.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <LinkArrow href="/about" data-testid="about-read-more">
                Read our story
              </LinkArrow>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------- PROGRAMS -------------------- */
function Programs() {
  const programs = [
    {
      title: 'Education',
      icon: GraduationCap,
      image: '/images/education/digital literacy.jpg',
      copy: 'Community schools, scholarships, adult literacy & digital learning that ends the cycle of inequality.',
    },
    {
      title: 'Healthcare',
      icon: HeartPulse,
      image: '/images/healthcare/health camp.png',
      copy: 'Mobile clinics, maternal-child health and worker training delivered to communities that need it most.',
    },
    {
      title: 'Women Empowerment',
      icon: Sparkles,
      image: '/images/women/women empoverment.jpg',
      copy: 'Vocational training, self-help groups and leadership programmes that unlock economic independence.',
    },
    {
      title: 'Community Development',
      icon: Building2,
      image: '/images/award/conmunity healt comapnion.jpg',
      copy: 'Clean water, sustainable agriculture and infrastructure projects co-designed with local leaders.',
    },
  ];

  return (
    <section
      className="section relative overflow-hidden bg-canvas"
      data-testid="home-programs-section"
    >
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Four programmes. One <em className="font-display italic text-brand">unified mission.</em>
              </>
            }
            description="Each programme is co-designed with the community it serves — and measured by the dignity it returns."
          />
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <Link
                href="/programs"
                data-testid={`program-card-${p.title.toLowerCase().replace(' ', '-')}`}
                className="card-premium card-premium-hover group relative flex h-full flex-col overflow-hidden"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-elegant group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/60 via-brand/10 to-transparent" />
                  <div className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/85 text-brand backdrop-blur">
                    <p.icon size={20} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl font-medium text-ink">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{p.copy}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand transition-colors group-hover:text-gold">
                    Explore programme
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- LEADERSHIP MESSAGES -------------------- */
function Leadership() {
  const leaders = [
    {
      name: 'Dr. Krishna Nand Bhatt',
      role: 'Founder & Director',
      image: '/images/leadership/founder.jpeg',
      quote:
        'Sustainable change begins when communities take ownership of their own development. Our role is to walk alongside, not ahead.',
      accent: 'text-brand',
    },
    {
      name: 'Preeti Bhatt',
      role: 'Co-Founder',
      image: '/images/leadership/Preeti-Bhatt.png',
      quote:
        'Empowering women, strengthening families and creating real opportunity for underserved communities — that is our north star.',
      accent: 'text-gold-700',
    },
  ];
  return (
    <section className="section bg-white" data-testid="home-leadership-section">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Leadership"
            title="Voices from our founders"
            description="A message from the team building Bhamora alongside the communities we serve."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {leaders.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.08}>
              <article
                data-testid={`leader-card-${i}`}
                className="card-premium card-premium-hover h-full p-8 md:p-10"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl">
                    <Image
                      src={l.image}
                      alt={l.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <Quote className="text-gold" size={28} />
                    <p className="mt-2 text-pretty text-base leading-relaxed text-ink-soft md:text-lg">
                      {l.quote}
                    </p>
                    <div className="mt-5">
                      <p className="font-display text-lg font-medium text-ink">{l.name}</p>
                      <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${l.accent}`}>
                        {l.role}
                      </p>
                    </div>
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

/* -------------------- STORIES -------------------- */
function Stories() {
  const stories = [
    {
      title: 'Building dreams in Ladakh',
      copy: 'A solar-heated, all-weather community school removed geography as a barrier to education for 100+ children.',
      image: '/images/education/children learning.jpg',
      tag: 'Education',
    },
    {
      title: 'Maternal health initiative',
      copy: 'A 40% reduction in maternal mortality across our intervention areas through mobile clinics.',
      image: '/images/healthcare/preventive helathcare.jpg',
      tag: 'Healthcare',
    },
    {
      title: "Women's self-help groups",
      copy: 'Financial literacy and income-generating skills for 1,200+ women — and counting.',
      image: '/images/women/self help group.jpg',
      tag: 'Empowerment',
    },
  ];
  return (
    <section className="section bg-canvas" data-testid="home-stories-section">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Stories from the field"
            title="What change looks like, up close."
            description="Each programme is a portfolio of stories. Here are three you might want to know."
          />
        </Reveal>
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <article className="card-premium card-premium-hover group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-elegant group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand backdrop-blur">
                    {s.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-medium text-ink">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{s.copy}</p>
                  <LinkArrow href="/impact" className="mt-6">
                    Read story
                  </LinkArrow>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- GALLERY PREVIEW -------------------- */
function GalleryPreview() {
  const images = [
    { src: '/images/education/lietaracy class.jpg', span: 'md:col-span-2 md:row-span-2' },
    { src: '/images/healthcare/heltcare initative.jpg', span: '' },
    { src: '/images/women/women education.jpg', span: '' },
    { src: '/images/award/excellence in education.jpg', span: '' },
    { src: '/images/healthcare/preventive helathcare.jpg', span: '' },
    { src: '/images/women/women empoverment.jpg', span: 'md:col-span-2' },
  ];

  return (
    <section className="section bg-white" data-testid="home-gallery-preview">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Field gallery"
              title="A visual archive of dignity restored."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/gallery" className="btn-outline-dark" data-testid="gallery-view-all">
              View full gallery
              <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:auto-rows-[220px]">
          {images.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.05} className={`relative overflow-hidden rounded-2xl ${img.span}`}>
              <div className="group relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src={img.src}
                  alt="Gallery image"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-[900ms] ease-elegant group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CTAs -------------------- */
function CTAStrip() {
  return (
    <section className="section relative overflow-hidden bg-brand text-white" data-testid="home-cta-strip">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-gold/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="container-wide relative grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Eyebrow className="!text-gold">Join the movement</Eyebrow>
          <h2 className="display-lg mt-5 text-balance text-white">
            Every contribution writes a new
            <span className="italic text-gold"> chapter of change.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Whether you donate, volunteer or simply share — your support helps a
            community build the future it deserves.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/donate"
              data-testid="cta-donate-btn"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-ink shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-brand"
            >
              Donate now
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/volunteer"
              data-testid="cta-volunteer-btn"
              className="inline-flex items-center gap-2 rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-brand"
            >
              Volunteer
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
          {[
            { icon: ShieldCheck, label: '80G & 12A', detail: 'Tax-exempt donations' },
            { icon: Award, label: 'Recognised', detail: 'NITI Aayog, 6+ awards' },
            { icon: Globe2, label: 'On the ground', detail: '6+ communities served' },
            { icon: Users, label: 'Volunteer led', detail: '2,500+ contributors' },
          ].map((t) => (
            <div
              key={t.label}
              className="rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur"
            >
              <t.icon className="text-gold" size={22} />
              <p className="mt-4 font-display text-lg font-medium">{t.label}</p>
              <p className="text-xs text-white/70">{t.detail}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------- PARTNERS -------------------- */
function Partners() {
  return (
    <section className="section bg-canvas" data-testid="home-partners-section">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Corporate partnerships"
            title="Partner with us on meaningful CSR."
            description="Co-design measurable, audit-ready impact initiatives — from rural healthcare to women's livelihoods."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 rounded-[28px] border border-brand/10 bg-white p-8 shadow-soft md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-4">
              <div className="grid h-20 place-items-center rounded-2xl border border-brand/10 bg-canvas px-4 text-center">
                <span className="font-display text-base font-medium text-brand">
                  Hotel Shri Krishna Palace
                </span>
              </div>
              <div className="grid h-20 place-items-center rounded-2xl border border-dashed border-brand/15 bg-canvas px-4 text-center text-xs uppercase tracking-[0.22em] text-ink-soft">
                Your brand here
              </div>
              <div className="grid h-20 place-items-center rounded-2xl border border-dashed border-brand/15 bg-canvas px-4 text-center text-xs uppercase tracking-[0.22em] text-ink-soft">
                Your brand here
              </div>
              <div className="grid h-20 place-items-center rounded-2xl border border-dashed border-brand/15 bg-canvas px-4 text-center text-xs uppercase tracking-[0.22em] text-ink-soft">
                Your brand here
              </div>
            </div>
            <div className="mt-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <p className="max-w-xl text-sm leading-relaxed text-ink-soft">
                Already trusted by leading organisations. Let&apos;s build a
                CSR programme that delivers verified impact and brand-aligned
                storytelling.
              </p>
              <Link href="/contact" className="btn-primary" data-testid="partners-cta">
                Explore partnership
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <AboutPreview />
      <Programs />
      <Leadership />
      <Stories />
      <GalleryPreview />
      <CTAStrip />
      <Partners />
    </>
  );
}
