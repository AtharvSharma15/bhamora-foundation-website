'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Trophy, ZoomIn } from 'lucide-react';
import {
  galleryItems,
  galleryCategories,
  awardItems,
} from '@/content/galleryData';
import Lightbox, { type LightboxItem } from '@/components/Lightbox';
import Reveal from '@/components/Reveal';
import { Eyebrow, SectionHeading } from '@/components/ui/primitives';

function GalleryHero() {
  return (
    <section
      data-testid="gallery-hero"
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
          <Eyebrow className="!text-gold">Our gallery</Eyebrow>
          <h1 className="display-xl mt-6 text-balance text-white">
            A visual journey of our work{' '}
            <span className="italic text-gold">in communities.</span>
          </h1>
          <p className="lead mt-6 text-white/80">
            Photographs from across our education, healthcare, women empowerment
            and community programmes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    return activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const lightboxItems: LightboxItem[] = useMemo(
    () =>
      filteredItems.map((g) => ({
        src: g.imageUrl,
        title: g.title,
        description: g.description,
        alt: g.title,
      })),
    [filteredItems]
  );

  return (
    <>
      <GalleryHero />

      {/* Filters + Masonry */}
      <section className="section-tight bg-canvas" data-testid="gallery-grid-section">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-3" data-testid="gallery-filters">
              {galleryCategories.map((c) => {
                const active = activeCategory === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActiveCategory(c.id)}
                    data-testid={`gallery-filter-${c.id}`}
                    className={`rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
                      active
                        ? 'bg-brand text-white shadow-soft'
                        : 'border border-brand/15 bg-white text-ink-soft hover:border-brand/30 hover:text-brand'
                    }`}
                  >
                    {c.name}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <div
            data-testid="gallery-masonry"
            className="mt-12 columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4 [&>*]:mb-4"
          >
            {filteredItems.map((item, i) => (
              <Reveal key={item.id} delay={(i % 8) * 0.04}>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  data-testid={`gallery-item-${item.id}`}
                  className="group relative block w-full overflow-hidden rounded-2xl bg-white text-left shadow-soft transition-all duration-500 hover:shadow-soft-lg"
                  aria-label={`Open ${item.title}`}
                >
                  <div className="relative w-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full transition-transform duration-700 ease-elegant group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/65 via-brand/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/85 text-brand opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100">
                      <ZoomIn size={16} />
                    </div>
                    <div className="absolute inset-x-4 bottom-4 translate-y-2 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                        {item.category}
                      </p>
                      <p className="mt-1 font-display text-base font-medium text-white">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        items={lightboxItems}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() =>
          setLightboxIndex((idx) =>
            idx === null ? null : (idx - 1 + lightboxItems.length) % lightboxItems.length
          )
        }
        onNext={() =>
          setLightboxIndex((idx) =>
            idx === null ? null : (idx + 1) % lightboxItems.length
          )
        }
      />

      {/* Awards */}
      <section
        className="relative isolate overflow-hidden bg-gradient-to-br from-[#fff7e6] via-[#fef5e7] to-[#fef2f0] py-24"
        data-testid="awards-section"
      >
        <div className="container-wide relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-gold-700">
                <Trophy size={22} />
              </div>
              <Eyebrow className="mt-5 !justify-center">Recognised excellence</Eyebrow>
              <h2 className="display-lg mt-4 text-ink">Awards &amp; recognition</h2>
              <p className="lead mt-4 text-ink-soft">
                Honoured by leading institutions for our commitment to creating
                positive change in communities.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {awardItems.map((a, i) => (
              <Reveal key={a.id} delay={(i % 6) * 0.06}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 180, damping: 22 }}
                  animate={{ y: [0, -4, 0] }}
                  data-testid={`award-card-${a.id}`}
                  className="relative h-full overflow-hidden rounded-[24px] border border-gold/30 bg-white shadow-soft"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gold/15 to-white">
                    {a.imageUrl && (
                      <Image
                        src={a.imageUrl}
                        alt={a.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                        style={
                          a.title === 'Best NGO Award'
                            ? { objectPosition: 'center 15%' }
                            : {}
                        }
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-700 shadow">
                      <Award size={14} />
                      {a.year}
                    </div>
                  </div>
                  <div className="p-7">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-700">
                      {a.organization}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-medium text-ink">
                      {a.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {a.description}
                    </p>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
