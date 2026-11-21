'use client';

import React from 'react';
import Link from 'next/link';
import Container from './Container';
import Eyebrow from './Eyebrow';
import Reveal from './motion/Reveal';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  eyebrow?: string;
  code?: string;
  title: React.ReactNode;
  accentText?: string;
  lede?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
  compact?: boolean;
}

export default function PageHeader({
  eyebrow,
  code,
  title,
  accentText,
  lede,
  breadcrumbs,
  children,
  compact = false,
}: PageHeaderProps) {
  return (
    <header
      className={`relative overflow-hidden ${
        compact ? 'pt-32 sm:pt-40 pb-16 sm:pb-20' : 'pt-36 sm:pt-44 pb-20 sm:pb-28'
      }`}
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-36 -left-36 h-[460px] w-[460px] rounded-full bg-accent-cyan/15 blur-[120px]" />
        <div className="absolute -right-24 top-12 h-[420px] w-[420px] rounded-full bg-primary-electric/15 blur-[130px]" />
      </div>

      <Container size="wide" className="relative z-10 text-center max-w-[880px] mx-auto flex flex-col items-center">
        {/* Breadcrumb Navigation Pill */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Reveal effect="fade-up">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-card bg-white/70 border border-white/80 shadow-xs text-xs font-mono">
                <li>
                  <Link href="/" className="text-text-muted hover:text-navy transition-colors">
                    Home
                  </Link>
                </li>
                {breadcrumbs.map((crumb, idx) => (
                  <React.Fragment key={crumb.label}>
                    <li className="text-slate-400 select-none">/</li>
                    <li>
                      {crumb.href ? (
                        <Link href={crumb.href} className="text-text-muted hover:text-navy transition-colors">
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className="text-primary-electric font-semibold">{crumb.label}</span>
                      )}
                    </li>
                  </React.Fragment>
                ))}
              </ol>
            </nav>
          </Reveal>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <Reveal effect="fade-up" delay={0.05}>
            <div className="mb-4">
              <Eyebrow code={code}>{eyebrow}</Eyebrow>
            </div>
          </Reveal>
        )}

        {/* Title */}
        <Reveal effect="fade-up" delay={0.1}>
          <h1 className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text-navy tracking-tight leading-[1.12]">
            {title}{' '}
            {accentText && <span className="serif-italic-accent">{accentText}</span>}
          </h1>
        </Reveal>

        {/* Lede */}
        {lede && (
          <Reveal effect="fade-up" delay={0.15}>
            <p className="mx-auto max-w-[58ch] text-base sm:text-lg text-text-body leading-relaxed mb-6">
              {lede}
            </p>
          </Reveal>
        )}

        {/* Extra header actions / badges */}
        {children && (
          <Reveal effect="fade-up" delay={0.2}>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              {children}
            </div>
          </Reveal>
        )}
      </Container>
    </header>
  );
}
