'use client';

import React from 'react';
import Link from 'next/link';
import Container from '../Container';
import Eyebrow from '../Eyebrow';
import { PILLARS } from '../../data/pillars';
import TiltCard from '../motion/TiltCard';
import SpotlightCard from '../reactbits/SpotlightCard';
import Reveal from '../motion/Reveal';

function Pillar3DIcon({ id }: { id: string }) {
  if (id === 'it-solutions') {
    // 3D Glass Layered Stack Icon
    return (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute inset-0 rounded-2xl bg-accent-cyan/15 blur-lg" />
        <div className="relative w-12 h-12 flex flex-col items-center justify-center gap-1">
          <div className="w-10 h-3 rounded-md bg-gradient-to-r from-accent-cyan to-primary-electric opacity-90 shadow-sm border border-white/80 transform -rotate-3" />
          <div className="w-11 h-3 rounded-md bg-gradient-to-r from-primary-electric to-accent-violet opacity-95 shadow-sm border border-white/90 transform rotate-1" />
          <div className="w-10 h-3 rounded-md bg-gradient-to-r from-accent-violet to-navy opacity-90 shadow-sm border border-white/70 transform -rotate-1" />
        </div>
      </div>
    );
  }

  if (id === 'nexlock') {
    // 3D Glass Padlock on Pedestal
    return (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute inset-0 rounded-2xl bg-primary-electric/20 blur-lg" />
        <div className="relative flex flex-col items-center">
          {/* Shackle */}
          <div className="w-6 h-6 rounded-t-full border-[3px] border-primary-electric border-b-0 -mb-1" />
          {/* Lock Body */}
          <div className="w-11 h-9 rounded-xl bg-gradient-to-br from-white via-primary-electric/30 to-navy shadow-md border border-white/90 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan shadow-[0_0_8px_#06b6d4]" />
          </div>
          {/* Pedestal */}
          <div className="w-14 h-2 rounded-full bg-navy/20 -mt-1 blur-[1px]" />
        </div>
      </div>
    );
  }

  // NexWarranty: 3D Security Shield
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <div className="absolute inset-0 rounded-2xl bg-accent-teal/20 blur-lg" />
      <div className="relative w-11 h-12">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-md">
          <path
            d="M12 2L4 5V11C4 16.5 7.4 21.6 12 23C16.6 21.6 20 16.5 20 11V5L12 2Z"
            className="fill-teal-500/25 stroke-teal-500"
            strokeWidth="1.8"
          />
          <path
            d="M9 11.5L11 13.5L15 9.5"
            stroke="#0D9488"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default function PillarsOverview() {
  return (
    <section id="pillars" className="scroll-mt-24 py-24 sm:py-32 relative">
      {/* Legacy anchor: older links point to /#products */}
      <span id="products" className="block scroll-mt-24" aria-hidden="true" />

      <Container size="wide">
        {/* Section Header */}
        <Reveal effect="fade-up">
          <div className="mx-auto mb-16 max-w-[720px] text-center flex flex-col items-center">
            <Eyebrow>01 · WHAT NEXUS DOES</Eyebrow>
            <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-text-navy">
              One company.{' '}
              <span className="serif-italic-accent">Three pillars.</span>
            </h2>
            <p className="text-base sm:text-lg text-text-body leading-relaxed max-w-2xl">
              We engineer software for other businesses, and we build technology products of our own. Each pillar has its own focus — all three share the same Nexus team and standards.
            </p>
          </div>
        </Reveal>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.id} effect="fade-up" delay={i * 0.12}>
              <TiltCard maxTilt={6} scale={1.015} glare className="h-full">
                <SpotlightCard
                  spotlightColor={
                    p.id === 'it-solutions'
                      ? 'rgba(6, 182, 212, 0.16)'
                      : p.id === 'nexlock'
                      ? 'rgba(37, 99, 235, 0.16)'
                      : 'rgba(13, 148, 136, 0.16)'
                  }
                  className="flex flex-col h-full rounded-3xl border border-white/90 bg-white/70 shadow-glass backdrop-blur-2xl overflow-hidden group hover:shadow-glass-lg transition-all duration-300"
                >
                  {/* Accent Top Bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${p.accent.bar}`} />

                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                    {/* Header: 3D Art & Kind Badge */}
                    <div className="mb-6 flex items-center justify-between gap-3">
                      <Pillar3DIcon id={p.id} />
                      <span
                        className={`rounded-full px-3 py-1 font-mono text-[0.66rem] tracking-[0.12em] uppercase font-semibold ${p.accent.soft} ${p.accent.text} border border-current/20`}
                      >
                        {p.kindLabel}
                      </span>
                    </div>

                    {/* Wordmark & Tagline */}
                    <h3 className="font-serif text-2xl font-bold text-text-navy mb-2">
                      {p.name}
                    </h3>
                    <p className="font-serif text-[1.02rem] font-semibold text-primary-electric mb-3">
                      {p.tagline}
                    </p>
                    <p className="text-sm text-text-body leading-relaxed mb-6">
                      {p.summary}
                    </p>

                    {/* Feature Points */}
                    <ul className="mb-8 space-y-3">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <svg
                            className={`mt-0.5 shrink-0 ${p.accent.text}`}
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                          <span className="leading-snug">{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Footer: Code and CTA */}
                    <div className="mt-auto flex items-center justify-between border-t border-dashed border-navy/10 pt-5">
                      <span className="font-mono text-xs tracking-wider text-text-muted font-semibold">
                        {p.code}
                      </span>
                      <Link
                        href={p.to}
                        className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-2.5 ${p.accent.text}`}
                      >
                        <span>{p.cta}</span>
                        <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </SpotlightCard>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* Sub-bar: Services vs Products */}
        <Reveal effect="fade-up" delay={0.3}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center text-sm text-text-muted sm:flex-row sm:gap-8">
            <p>
              <span className="mr-2 font-mono text-xs tracking-wider text-accent-cyan uppercase font-semibold">
                Services
              </span>
              We build and maintain software for you.
            </p>
            <span className="hidden h-4 w-px bg-navy/15 sm:block" />
            <p>
              <span className="mr-2 font-mono text-xs tracking-wider text-primary-electric uppercase font-semibold">
                Products
              </span>
              Technology Nexus owns, builds and operates.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
