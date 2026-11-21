'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Container from '../Container';
import PageHeader from '../PageHeader';

export interface TocSection {
  id: string;
  number?: string;
  title: string;
}

interface LegalDocumentLayoutProps {
  eyebrow: string;
  code?: string;
  title: string;
  accentTitle?: string;
  lede: string;
  backHref: string;
  backLabel: string;
  badgeCode: string;
  effectiveDate: string;
  sections: TocSection[];
  children: React.ReactNode;
}

export default function LegalDocumentLayout({
  eyebrow,
  code,
  title,
  accentTitle,
  lede,
  backHref,
  backLabel,
  badgeCode,
  effectiveDate,
  sections,
  children,
}: LegalDocumentLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Reading progress bar calculation
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section anchor highlight observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-10% 0px -70% 0px' }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* ── Reading Progress Bar ──────────────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-[1100] h-1 bg-navy/5 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-primary-electric to-accent-cyan transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ── Page Header ──────────────────────────────────────────────── */}
      <PageHeader
        compact={true}
        breadcrumbs={[
          { label: backLabel.replace('← ', '').replace('Back to ', ''), href: backHref },
          { label: title },
        ]}
        eyebrow={eyebrow}
        code={code}
        title={title}
        accentText={accentTitle}
        lede={lede}
      >
        <Link
          href={backHref}
          className="glass-card bg-white/80 hover:bg-white px-5 py-2 rounded-full text-xs font-mono font-semibold text-text-navy border border-navy/10 shadow-xs transition-all hover:scale-105"
        >
          {backLabel}
        </Link>
      </PageHeader>

      {/* ── Document Body & Sticky Glass TOC ─────────────────────────── */}
      <section className="py-16 sm:py-24 bg-canvas relative">
        <Container size="wide">
          {/* Metadata Badge */}
          <div className="mb-12">
            <div className="glass-card bg-white/85 inline-flex items-center gap-3.5 rounded-2xl px-6 py-3.5 border border-white/95 shadow-glass">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-primary-electric text-sm text-white shadow-xs">
                📋
              </span>
              <div>
                <p className="font-mono text-xs tracking-wider text-text-muted uppercase font-semibold">
                  {badgeCode}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-text-navy">
                  {effectiveDate}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-16 items-start">
            {/* Sticky Table of Contents (Desktop) */}
            <aside className="hidden lg:block sticky top-28 z-20">
              <div className="glass-card bg-white/80 rounded-3xl p-6 border border-white/95 shadow-glass max-h-[calc(100vh-140px)] overflow-y-auto">
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-text-muted mb-4 pb-2 border-b border-navy/10">
                  Table of Contents
                </p>
                <nav className="space-y-1">
                  {sections.map((s) => {
                    const isActive = activeSection === s.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => scrollTo(s.id)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-2.5 ${
                          isActive
                            ? 'bg-primary-electric/10 text-primary-electric font-bold shadow-xs border-l-2 border-primary-electric'
                            : 'text-text-body hover:text-text-navy hover:bg-white/60'
                        }`}
                      >
                        {s.number && (
                          <span className="font-mono text-[0.65rem] opacity-70">
                            {s.number}
                          </span>
                        )}
                        <span className="truncate">{s.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Document Content with comfortable reading typography */}
            <div className="max-w-[820px] space-y-12 leading-relaxed text-text-body">
              {children}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
