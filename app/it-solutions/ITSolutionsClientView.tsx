'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Container from '../../components/Container';
import Eyebrow from '../../components/Eyebrow';
import Button from '../../components/Button';
import { PillarBadge, PillarIcon, Wordmark } from '../../components/PillarMarks';
import Reveal from '../../components/motion/Reveal';
import TiltCard from '../../components/motion/TiltCard';
import SpotlightCard from '../../components/reactbits/SpotlightCard';
import ServicesBento from '../../components/it-solutions/ServicesBento';

const AnimatedTerminalVisual = dynamic(
  () => import('../../components/it-solutions/AnimatedTerminalVisual'),
  {
    ssr: false,
    loading: () => (
      <div className="h-[440px] w-full rounded-2xl bg-navy/20 animate-pulse border border-white/10" />
    ),
  }
);

const WHEN = [
  'You need a new website',
  'You need a web application',
  'You need a mobile application',
  'You need custom business software',
  'Your existing CRM needs maintenance',
  'Your application has bugs',
  'You need new features',
  'Your software UI is outdated',
  'You need integrations',
  'Your application needs modernization',
  'You need a technical team for ongoing maintenance',
];

const STEPS = [
  {
    num: '01',
    title: 'Understand',
    desc: 'We learn the business goal — and for existing software, review the code, data and hosting before promising anything.',
  },
  {
    num: '02',
    title: 'Scope',
    desc: 'A clear plan of what will be built or fixed, in what order, and what it will take.',
  },
  {
    num: '03',
    title: 'Build & fix',
    desc: 'Work ships in small, reviewable increments so you see progress early.',
  },
  {
    num: '04',
    title: 'Deploy',
    desc: 'We release to your environment and make sure it runs as expected.',
  },
  {
    num: '05',
    title: 'Maintain',
    desc: 'Stay on with us for bug fixes, updates and new features over time.',
  },
];

export default function ITSolutionsClientView() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <header className="relative overflow-hidden pt-36 sm:pt-44 pb-20 sm:pb-28">
        {/* Background ambient radial gradients */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent-cyan/15 blur-[120px]" />
          <div className="absolute -right-20 top-20 h-[450px] w-[450px] rounded-full bg-primary-electric/15 blur-[130px]" />
          <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-accent-violet/10 blur-[100px]" />
        </div>

        <Container size="wide" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <Reveal effect="fade-up">
              <div className="flex flex-col items-start">
                <PillarBadge kind="services" className="mb-6 shadow-sm" />

                <div className="mb-5 flex items-center gap-4">
                  <PillarIcon id="it-solutions" size="h-12 w-12" iconSize={24} />
                  <Wordmark id="it-solutions" className="text-2xl sm:text-3xl" />
                </div>

                <h1 className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text-navy tracking-tight leading-[1.12]">
                  Software engineering for businesses —{' '}
                  <span className="serif-italic-accent">
                    new builds and the systems you already run.
                  </span>
                </h1>

                <p className="mb-9 max-w-[54ch] text-base sm:text-lg text-text-body leading-relaxed">
                  We build websites, web and mobile applications, custom software and CRMs. And we don't only start from scratch: bring us the software you already have, and we'll maintain it, fix it, extend it and modernize it.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="dark-pill"
                    size="lg"
                    href="/collaborate?type=it-new"
                    arrow={true}
                  >
                    Discuss a new project
                  </Button>
                  <Button
                    variant="outline-glass"
                    size="lg"
                    href="/collaborate?type=it-existing"
                    arrow={false}
                  >
                    Get help with existing software
                  </Button>
                </div>
              </div>
            </Reveal>

            {/* Right Terminal Visual */}
            <Reveal effect="fade-scale" delay={0.2} className="flex justify-center">
              <AnimatedTerminalVisual />
            </Reveal>
          </div>
        </Container>
      </header>

      {/* ── POSITIONING STRIP ────────────────────────────────────────── */}
      <section className="bg-ink py-14 sm:py-16 text-slate-50 relative overflow-hidden border-y border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px]" />
        <Container size="wide" className="relative z-10">
          <Reveal effect="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 lg:gap-12">
              <div className="glass-card bg-white/[0.03] p-6 rounded-2xl border border-white/10 shadow-glass">
                <p className="mb-2 font-mono text-xs tracking-wider text-slate-400 uppercase font-semibold">
                  Starting from zero?
                </p>
                <p className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
                  We design and build it with you — web, mobile, backend and everything in between.
                </p>
              </div>

              <span className="hidden md:block h-20 w-px bg-white/15" />

              <div className="glass-card bg-cyan-500/[0.05] p-6 rounded-2xl border border-cyan-500/20 shadow-glass">
                <p className="mb-2 font-mono text-xs tracking-wider text-cyan-400 uppercase font-semibold">
                  Already have software?
                </p>
                <p className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
                  We take it over, fix what's broken, add what's missing and keep it running.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── SERVICES (BENTO GRID + TAB/ACCORDION) ────────────────────── */}
      <section id="services" className="scroll-mt-24 py-24 sm:py-32 relative">
        <Container size="wide">
          <Reveal effect="fade-up">
            <div className="mx-auto mb-16 max-w-[720px] text-center flex flex-col items-center">
              <Eyebrow code="NX–ITS">SERVICES</Eyebrow>
              <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text-navy tracking-tight">
                What we do for{' '}
                <span className="serif-italic-accent">clients.</span>
              </h2>
              <p className="text-base sm:text-lg text-text-body leading-relaxed max-w-2xl">
                Grouped by where you're starting from — a blank page, a system that needs work, or software that needs to connect and keep running.
              </p>
            </div>
          </Reveal>

          {/* Interactive Bento & Framer Tab/Accordion */}
          <ServicesBento />
        </Container>
      </section>

      {/* ── WHEN TO CALL US ──────────────────────────────────────────── */}
      <section className="bg-canvas-alt py-24 sm:py-32 border-t border-navy/5 relative overflow-hidden">
        <Container size="wide">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal effect="fade-up">
              <div className="lg:sticky lg:top-32">
                <Eyebrow code="TRIGGER">WHEN TO CALL US</Eyebrow>
                <h2 className="mb-4 text-3xl sm:text-4xl font-serif font-bold text-text-navy tracking-tight leading-tight">
                  If any of these sound familiar,{' '}
                  <span className="serif-italic-accent">we can help.</span>
                </h2>
                <p className="text-base sm:text-lg text-text-body leading-relaxed max-w-md">
                  You don't need a full specification to get started. Tell us where things stand and we'll suggest the next step.
                </p>
              </div>
            </Reveal>

            {/* Staggered Glass Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {WHEN.map((w, i) => (
                <Reveal key={w} effect="fade-up" delay={i * 0.04}>
                  <div className="glass-card bg-white/80 hover:bg-white p-4.5 rounded-2xl border border-white/90 shadow-glass-sm hover:shadow-glass transition-all duration-300 flex items-center gap-3.5 group">
                    <span className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <svg
                        className="text-cyan-600"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-[0.95rem] font-medium text-text-navy group-hover:text-primary-electric transition-colors">
                      {w}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── HOW WE WORK ──────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 relative">
        <Container size="wide">
          <Reveal effect="fade-up">
            <div className="mb-14 max-w-[640px]">
              <Eyebrow code="PROCESS">HOW WE WORK</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text-navy tracking-tight">
                From first conversation to{' '}
                <span className="serif-italic-accent">long-term support.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {STEPS.map((s, i) => (
              <Reveal key={s.num} effect="fade-up" delay={i * 0.08}>
                <TiltCard maxTilt={6} scale={1.02} className="h-full">
                  <SpotlightCard
                    spotlightColor="rgba(6, 182, 212, 0.12)"
                    className="h-full rounded-2xl glass-card bg-white/75 p-6 border border-white/90 shadow-glass flex flex-col justify-between"
                  >
                    <div>
                      <p className="mb-4 font-mono text-2xl font-bold text-cyan-600">
                        {s.num}
                      </p>
                      <h3 className="mb-2 font-serif text-lg font-bold text-text-navy">
                        {s.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-text-body leading-relaxed">
                        {s.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-navy/5 flex items-center justify-between text-[0.68rem] font-mono text-text-muted">
                      <span>Phase {s.num}</span>
                      <span className="text-cyan-600">Step</span>
                    </div>
                  </SpotlightCard>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── SAME TEAM AS OUR PRODUCTS (CROSS LINKS) ──────────────────── */}
      <section className="bg-canvas-alt py-24 sm:py-32 border-t border-navy/5 relative overflow-hidden">
        <Container size="wide">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal effect="fade-up">
              <div>
                <Eyebrow code="SYNERGY">PART OF NEXUS</Eyebrow>
                <h2 className="mb-4 text-3xl sm:text-4xl font-serif font-bold text-text-navy tracking-tight leading-tight">
                  We build and run software of{' '}
                  <span className="serif-italic-accent">our own, too.</span>
                </h2>
                <p className="text-base sm:text-lg text-text-body leading-relaxed max-w-xl">
                  Nexus IT Solutions sits alongside Nexus's own products, NexLock and NexWarranty. Building and operating live products every day is what we bring to client work: we know what it takes to keep software working after launch.
                </p>
              </div>
            </Reveal>

            {/* Cross-Link Cards */}
            <div className="flex flex-col gap-4">
              {[
                {
                  id: 'nexlock',
                  to: '/nexlock',
                  line: 'Smart device lock & EMI recovery platform',
                  badge: 'NX–LCK',
                },
                {
                  id: 'nexwarranty',
                  to: '/nexwarrenty',
                  line: 'Extended warranty for appliances & electronics',
                  badge: 'NX–WRT',
                },
              ].map((p, i) => (
                <Reveal key={p.id} effect="fade-up" delay={i * 0.12}>
                  <Link
                    href={p.to}
                    className="group glass-card bg-white/80 hover:bg-white p-5 sm:p-6 rounded-2xl border border-white/95 shadow-glass hover:shadow-glass-lg transition-all duration-300 flex items-center gap-5"
                  >
                    <PillarIcon id={p.id} size="h-12 w-12" iconSize={24} />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <Wordmark id={p.id} className="text-lg" />
                        <span className="font-mono text-[0.62rem] px-2 py-0.5 rounded bg-navy/5 text-text-muted font-semibold">
                          {p.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-text-body">{p.line}</p>
                    </div>
                    <span className="text-navy group-hover:text-primary-electric text-xl transition-all duration-200 group-hover:translate-x-1.5" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 relative bg-canvas">
        <Container size="wide">
          <Reveal effect="fade-up">
            <div className="relative rounded-[2.5rem] glass-dark p-8 sm:p-14 lg:p-16 border border-white/15 shadow-2xl overflow-hidden text-center">
              {/* Background Ambient Glows */}
              <div
                className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary-electric/20 blur-[130px]"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-accent-cyan/15 blur-[130px]"
                aria-hidden="true"
              />

              <div className="relative z-10 mx-auto max-w-[700px] flex flex-col items-center">
                <Eyebrow onDark code="START">
                  START A CONVERSATION
                </Eyebrow>
                <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white">
                  New project or existing system —{' '}
                  <span className="serif-italic-accent">tell us about it.</span>
                </h2>
                <p className="mx-auto mb-9 max-w-[52ch] text-base sm:text-lg text-slate-300 leading-relaxed">
                  Share what you need and what you already have. We'll reply with questions and a suggested next step.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    href="/collaborate?type=it-new"
                    arrow={true}
                  >
                    Discuss a new project
                  </Button>
                  <Button
                    variant="outline-glass"
                    size="lg"
                    href="/collaborate?type=it-existing"
                    arrow={false}
                    className="text-white hover:text-navy"
                  >
                    Get help with existing software
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
