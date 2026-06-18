'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';

export function LinkArrow({
  href,
  children,
  className = '',
  ...rest
}: {
  href: string;
  children: ReactNode;
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-brand transition-colors hover:text-gold ${className}`}
      {...rest}
    >
      {children}
      <ArrowRight
        size={14}
        className="transition-transform duration-300 ease-elegant group-hover:translate-x-1"
      />
    </Link>
  );
}

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span className={`eyebrow ${className}`}>
      <span aria-hidden className="h-px w-8 bg-gold/70" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'center' | 'left';
  light?: boolean;
  className?: string;
}) {
  const isCenter = align === 'center';
  return (
    <div
      className={`${isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-left'} ${className}`}
    >
      {eyebrow && (
        <div className={isCenter ? 'flex justify-center' : ''}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={`display-lg mt-4 text-balance ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-pretty text-base leading-relaxed md:text-lg ${
            light ? 'text-white/80' : 'text-ink-soft'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
