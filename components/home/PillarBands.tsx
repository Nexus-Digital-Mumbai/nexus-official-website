'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '../Container';
import Eyebrow from '../Eyebrow';
import Button from '../Button';
import Reveal from '../motion/Reveal';
import { useGsapScroll } from '../motion/useGsapScroll';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const IT_BUILD = [
  'Websites',
  'Web applications',
  'Mobile applications',
  'Custom business software',
  'CRM development',
  'APIs & backends',
];

const IT_EXISTING = [
  'CRM & software maintenance',
  'Bug fixing',
  'New feature development',
  'UI/UX modernization',
  'Legacy modernization',
  'Integrations & performance',
];

const NEXLOCK_FEATURES = [
  { title: 'One QR scan', desc: 'Link a device to the dashboard and customer account in a single scan.' },
  { title: 'Auto lock', desc: 'Access is restricted automatically when an EMI falls overdue.' },
  { title: 'Remote unlock', desc: 'Restore the device from the dashboard once payment is confirmed.' },
  { title: 'SIM swap detection', desc: 'SIM removal or replacement triggers a security alert.' },
];

const NEXWARRANTY_FEATURES = [
  { title: '100% parts & labour', desc: 'Mechanical and electrical breakdowns after the brand warranty expires.' },
  { title: 'Zero depreciation', desc: 'Full claim value with no deduction.' },
  { title: 'Doorstep service', desc: 'Free pickup and drop, with complimentary transportation.' },
  { title: 'Authorized repairs', desc: 'Claims route to brand-authorized service centers.' },
];

const CERT_ROWS = [
  ['Device', 'Refrigerator'],
  ['Plan term', '3 years after brand warranty'],
  ['Spare parts & labour', '100% covered'],
  ['Depreciation on claims', 'Zero'],
  ['Service', 'Doorstep pickup & drop'],
];

/* ─── Parallax Glass Shard ───────────────────────────────────────────── */
function ParallaxGlassShard({
  className,
  speed = 1,
}: {
  className?: string;
  speed?: number;
}) {
  return (
    <div
      data-speed={speed}
      className={`pillar-shard pointer-events-none absolute rounded-2xl border border-white/40 bg-white/10 backdrop-blur-md shadow-glass-sm transition-transform ${className}`}
      aria-hidden="true"
    />
  );
}

/* ─── Visual 1: High-Tech Glass IDE / CRM Window ─────────────────────── */
function ITBoardGlassVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shard1Ref = useRef<HTMLDivElement>(null);
  const shard2Ref = useRef<HTMLDivElement>(null);
  const newBuildCardRef = useRef<HTMLDivElement>(null);

  useGsapScroll(
    () => {
      if (!containerRef.current) return;

      // Parallax Glass Shards Scrub
      if (shard1Ref.current) {
        gsap.fromTo(
          shard1Ref.current,
          { y: -30, rotate: -6 },
          {
            y: 45,
            rotate: 8,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      }

      if (shard2Ref.current) {
        gsap.fromTo(
          shard2Ref.current,
          { y: 40, rotate: 12 },
          {
            y: -35,
            rotate: -4,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          }
        );
      }

      // Floating Shard Card Parallax
      if (newBuildCardRef.current) {
        gsap.fromTo(
          newBuildCardRef.current,
          { y: 30, opacity: 0.9 },
          {
            y: -25,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: 1,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  const tickets = [
    { type: 'Bug fix', title: 'Invoice totals not syncing to reports', status: 'Fixed', tone: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' },
    { type: 'Feature', title: 'Customer notifications via third-party API', status: 'In progress', tone: 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30' },
    { type: 'UI/UX', title: 'Modernize the sales dashboard', status: 'In review', tone: 'bg-indigo-500/20 text-indigo-200 border border-indigo-500/30' },
    { type: 'Performance', title: 'Slow customer search on large datasets', status: 'Planned', tone: 'bg-white/10 text-slate-300 border border-white/15' },
  ];

  return (
    <div ref={containerRef} className="relative w-full max-w-[500px]">
      {/* Background ambient refraction shard */}
      <div className="absolute -top-8 -right-8 w-52 h-52 rounded-full bg-accent-cyan/15 blur-3xl pointer-events-none" />

      {/* Parallax Floating Glass Shards */}
      <div
        ref={shard1Ref}
        className="pointer-events-none absolute -top-10 -left-8 w-20 h-20 rounded-2xl border border-white/50 bg-white/15 backdrop-blur-xl shadow-glass -rotate-6 z-0 hidden sm:block"
        aria-hidden="true"
      />
      <div
        ref={shard2Ref}
        className="pointer-events-none absolute -bottom-6 right-2 w-16 h-16 rounded-xl border border-white/40 bg-cyan-400/10 backdrop-blur-lg shadow-glass rotate-12 z-0 hidden sm:block"
        aria-hidden="true"
      />

      {/* Main Glass IDE Terminal */}
      <div className="glass-dark rounded-3xl border border-white/15 shadow-2xl overflow-hidden relative z-10 text-left">
        {/* IDE Titlebar */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
            <span className="ml-3 truncate font-mono text-xs text-slate-400">
              client-crm / maintenance-board
            </span>
          </div>
          <span className="font-mono text-[0.62rem] px-2 py-0.5 rounded bg-white/10 text-slate-400 uppercase tracking-widest">
            LIVE TELEMETRY
          </span>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <p className="font-mono text-xs tracking-wider text-cyan-400 uppercase font-semibold">
              Existing system · ongoing
            </p>
            <span className="font-mono text-[0.62rem] tracking-wider text-slate-500 uppercase">
              Illustrative
            </span>
          </div>

          <ul className="flex flex-col gap-2.5">
            {tickets.map((t) => (
              <li
                key={t.title}
                className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 hover:bg-white/[0.06] transition-colors"
              >
                <span className="w-20 shrink-0 font-mono text-[0.68rem] tracking-wider text-cyan-300 uppercase font-medium">
                  {t.type}
                </span>
                <span className="min-w-0 flex-1 truncate text-xs sm:text-[0.84rem] text-slate-100">
                  {t.title}
                </span>
                <span className={`shrink-0 rounded-full px-2.5 py-0.5 font-mono text-[0.62rem] uppercase font-semibold ${t.tone}`}>
                  {t.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Floating Shard Card (New Build) */}
      <div
        ref={newBuildCardRef}
        className="absolute -right-4 -bottom-8 z-20 w-[240px] rounded-2xl glass-card bg-white/95 p-4 shadow-glass-lg border border-white hidden sm:block"
      >
        <p className="font-mono text-[0.65rem] tracking-wider text-text-muted uppercase font-semibold">
          New build
        </p>
        <p className="mt-1 font-serif text-sm font-bold text-text-navy">
          Customer mobile app
        </p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-navy/10">
          <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-primary-electric to-accent-cyan" />
        </div>
        <p className="mt-2 text-xs font-mono text-text-muted">Web · Android · iOS</p>
      </div>
    </div>
  );
}

/* ─── Visual 2: Sleek Glass Phone with Floating Security Chips ───────── */
function NexLockPhoneGlassVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const chip1Ref = useRef<HTMLDivElement>(null);
  const chip2Ref = useRef<HTMLDivElement>(null);
  const shardRef = useRef<HTMLDivElement>(null);

  useGsapScroll(
    () => {
      if (!containerRef.current) return;

      // Chip 1: Scrubbed fly-in from left with smooth spring settle
      if (chip1Ref.current) {
        gsap.fromTo(
          chip1Ref.current,
          { x: -50, opacity: 0, scale: 0.9 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 75%',
              end: 'top 45%',
              scrub: 0.8,
            },
          }
        );

        // Subtle sine float once visible
        gsap.to(chip1Ref.current, {
          y: -8,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.2,
        });
      }

      // Chip 2: Scrubbed fly-in from right with smooth spring settle
      if (chip2Ref.current) {
        gsap.fromTo(
          chip2Ref.current,
          { x: 50, opacity: 0, scale: 0.9 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 75%',
              end: 'top 45%',
              scrub: 0.8,
            },
          }
        );

        // Subtle sine float once visible
        gsap.to(chip2Ref.current, {
          y: 10,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.6,
        });
      }

      // Parallax glass shard
      if (shardRef.current) {
        gsap.fromTo(
          shardRef.current,
          { y: -30, rotate: -8 },
          {
            y: 40,
            rotate: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.3,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative mx-auto w-full max-w-[420px] px-6 sm:px-8 flex justify-center">
      {/* Background ambient halo */}
      <div className="absolute inset-0 rounded-full bg-primary-electric/15 blur-3xl pointer-events-none" />

      {/* Decorative Parallax Glass Shard */}
      <div
        ref={shardRef}
        className="pointer-events-none absolute -bottom-8 -left-4 w-20 h-20 rounded-2xl border border-white/50 bg-blue-500/10 backdrop-blur-xl shadow-glass hidden sm:block"
        aria-hidden="true"
      />

      {/* Glass Smartphone Mockup */}
      <div className="relative w-[240px] sm:w-[260px] rounded-[2.6rem] border-[6px] border-[#0c1b33] bg-[#0c1b33] shadow-[0_30px_70px_rgba(12,27,51,0.35)] overflow-hidden">
        {/* Speaker notch */}
        <div className="absolute top-2.5 left-1/2 z-20 h-4 w-20 -translate-x-1/2 rounded-full bg-[#0c1b33]" />

        {/* Screen */}
        <div className="flex aspect-[9/19] flex-col items-center justify-between overflow-hidden rounded-[2.1rem] bg-gradient-to-b from-[#f0f5ff] via-[#e5edff] to-[#dfe8fd] px-5 pt-12 pb-7 text-center relative">
          <div className="font-serif font-bold text-xs tracking-widest text-navy uppercase">
            NEXLOCK
          </div>

          <div>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl glass-card bg-white/90 border border-white shadow-md">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <p className="font-serif text-lg font-bold text-navy">Device restricted</p>
            <p className="mt-2 text-xs leading-snug text-text-body">
              Your EMI payment is overdue. Core functions are restricted until it is cleared.
            </p>
          </div>

          <div className="w-full">
            <div className="rounded-full border border-red-300 bg-red-100/90 px-3 py-1.5 font-mono text-[0.62rem] font-bold tracking-wider text-red-600 shadow-sm">
              PAYMENT OVERDUE
            </div>
            <p className="mt-2 font-mono text-[0.65rem] text-text-muted">
              Access is restored once payment is confirmed
            </p>
          </div>
        </div>
      </div>

      {/* Floating Interactive Chip 1: Enrolled */}
      <div
        ref={chip1Ref}
        className="absolute top-[22%] -left-2 sm:left-2 z-20 rounded-2xl glass-card bg-white/95 px-4 py-2.5 text-left shadow-glass border border-white flex items-center gap-2.5"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan shadow-[0_0_8px_#06b6d4]" />
        <div>
          <p className="font-mono text-[0.6rem] tracking-wider text-primary-electric uppercase font-bold">
            Enrolled
          </p>
          <p className="text-xs font-bold text-text-navy">One QR scan</p>
        </div>
      </div>

      {/* Floating Interactive Chip 2: Alert */}
      <div
        ref={chip2Ref}
        className="absolute bottom-[28%] -right-2 sm:right-2 z-20 rounded-2xl glass-card bg-white/95 px-4 py-2.5 text-left shadow-glass border border-white flex items-center gap-2.5"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse" />
        <div>
          <p className="font-mono text-[0.6rem] tracking-wider text-red-600 uppercase font-bold">
            Alert
          </p>
          <p className="text-xs font-bold text-text-navy">SIM swap detected</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Visual 3: Ultra-Luxurious Glass Warranty Certificate ────────────── */
function NexWarrantyCertificateGlassVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const certRef = useRef<HTMLDivElement>(null);
  const sealRef = useRef<HTMLDivElement>(null);
  const shardRef = useRef<HTMLDivElement>(null);

  useGsapScroll(
    () => {
      if (!containerRef.current) return;

      // Certificate scrubbed tilt & depth parallax
      if (certRef.current) {
        gsap.fromTo(
          certRef.current,
          { y: 30, rotateX: 6 },
          {
            y: -20,
            rotateX: -2,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              end: 'bottom 15%',
              scrub: 1.2,
            },
          }
        );
      }

      // Metallic foil seal slight shine rotation on scrub
      if (sealRef.current) {
        gsap.fromTo(
          sealRef.current,
          { rotate: -15 },
          {
            rotate: 25,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              end: 'bottom 15%',
              scrub: 1,
            },
          }
        );
      }

      // Parallax glass shard
      if (shardRef.current) {
        gsap.fromTo(
          shardRef.current,
          { y: -35, rotate: -10 },
          {
            y: 45,
            rotate: 12,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.4,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative mx-auto w-full max-w-[460px]">
      {/* Background angled colored backing */}
      <div className="absolute -inset-3 -z-0 rotate-[-2deg] rounded-3xl bg-gradient-to-br from-teal-500/20 via-emerald-400/10 to-transparent blur-md" />

      {/* Decorative Parallax Glass Shard */}
      <div
        ref={shardRef}
        className="pointer-events-none absolute -top-8 -right-6 w-20 h-20 rounded-2xl border border-white/50 bg-teal-400/15 backdrop-blur-xl shadow-glass hidden sm:block"
        aria-hidden="true"
      />

      {/* Certificate Sheet */}
      <div
        ref={certRef}
        className="relative overflow-hidden rounded-3xl glass-card bg-white/90 p-7 sm:p-8 text-left shadow-glass-lg border border-white/95"
      >
        {/* Stripe Header */}
        <div className="h-1.5 -mx-8 -mt-8 mb-6 bg-gradient-to-r from-navy via-teal-600 to-emerald-400" />

        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[0.68rem] tracking-[0.14em] text-teal-700 uppercase font-bold">
              Extended warranty certificate
            </p>
            <h4 className="mt-1 font-serif text-2xl font-bold text-text-navy">
              NexWarranty
            </h4>
          </div>

          {/* Foil Seal Mark */}
          <div
            ref={sealRef}
            className="w-12 h-12 rounded-full bg-gradient-to-tr from-teal-600 to-emerald-400 p-0.5 shadow-md flex items-center justify-center shrink-0"
          >
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-teal-600">
                <path
                  d="M12 2L4 5V11C4 16.5 7.4 21.6 12 23C16.6 21.6 20 16.5 20 11V5L12 2Z"
                  className="fill-teal-500/20 stroke-teal-600"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
        </div>

        {/* Rows */}
        <dl className="divide-y divide-dashed divide-navy/10 border-y border-dashed border-navy/10">
          {CERT_ROWS.map(([k, v]) => (
            <div key={k} className="flex items-center justify-between gap-4 py-2.5">
              <dt className="text-xs text-text-muted">{k}</dt>
              <dd className="text-right text-xs sm:text-sm font-semibold text-text-navy">{v}</dd>
            </div>
          ))}
        </dl>

        {/* Plan price summary */}
        <div className="mt-6 flex items-end justify-between">
          <div>
            <p className="font-mono text-[0.65rem] tracking-wider text-text-muted uppercase font-semibold">
              Plan price
            </p>
            <p className="font-serif text-xl font-bold text-text-navy">
              16% <span className="text-xs font-normal text-text-muted">of device value</span>
            </p>
          </div>
          <span className="font-mono text-[0.65rem] px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-700 border border-teal-500/20 font-semibold uppercase">
            Sample plan
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PillarBands() {
  return (
    <div className="relative">
      {/* ── PILLAR 01 · NEXUS IT SOLUTIONS ───────────────────────────── */}
      <section className="py-24 sm:py-32 bg-canvas-alt relative overflow-hidden border-t border-navy/5">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <Reveal effect="fade-up">
              <div className="flex flex-col items-start">
                <Eyebrow code="NX–ITS">
                  01 · CLIENT SERVICES
                </Eyebrow>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-text-navy leading-tight mb-5">
                  New software when you need it.{' '}
                  <span className="serif-italic-accent">
                    A dependable team for the software you already run.
                  </span>
                </h3>
                <p className="text-base sm:text-lg text-text-body leading-relaxed mb-8 max-w-xl">
                  Most businesses already have a website, an app or a CRM that needs attention. Nexus IT Solutions builds new systems from scratch — and takes on existing ones: fixing bugs, adding features, modernizing the UI and keeping them running long-term.
                </p>

                {/* Build New / Work With What Exists Sub-Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
                  <div className="glass-card bg-white/70 p-5 rounded-2xl border border-white/90">
                    <p className="font-mono text-xs tracking-wider text-text-muted uppercase font-bold mb-3">
                      Build new
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-text-body">
                      {IT_BUILD.map((s) => (
                        <li key={s} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-electric shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="glass-card bg-cyan-500/8 p-5 rounded-2xl border border-cyan-500/20">
                    <p className="font-mono text-xs tracking-wider text-cyan-700 uppercase font-bold mb-3">
                      Work with what exists
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800">
                      {IT_EXISTING.map((s) => (
                        <li key={s} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <Button variant="dark-pill" size="md" href="/it-solutions">
                    Explore IT Solutions
                  </Button>
                  <Button variant="outline-glass" size="md" href="/collaborate?type=it-existing">
                    Get help with existing software
                  </Button>
                </div>
              </div>
            </Reveal>

            {/* Right Visual */}
            <Reveal effect="fade-scale" delay={0.2} className="flex justify-center">
              <ITBoardGlassVisual />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── PILLAR 02 · NEXLOCK (Reverse Alternating) ─────────────────── */}
      <section className="py-24 sm:py-32 bg-canvas relative overflow-hidden border-t border-navy/5">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
            {/* Visual First on Desktop */}
            <Reveal effect="fade-scale" delay={0.2} className="order-2 lg:order-1 flex justify-center">
              <NexLockPhoneGlassVisual />
            </Reveal>

            {/* Content Second on Desktop */}
            <Reveal effect="fade-up" className="order-1 lg:order-2 flex flex-col items-start">
              <Eyebrow code="NX–LCK">
                02 · NEXUS PRODUCT
              </Eyebrow>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-text-navy leading-tight mb-5">
                Recover device-finance EMIs{' '}
                <span className="serif-italic-accent">
                  without field agents or repossession.
                </span>
              </h3>
              <p className="text-base sm:text-lg text-text-body leading-relaxed mb-6 max-w-xl">
                NexLock is an Android app and management dashboard built by Nexus for businesses that sell or finance phones on EMI.
              </p>

              {/* Problem / Solution Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-6">
                <div className="glass-card bg-white/70 p-4.5 rounded-2xl border border-white/90">
                  <p className="font-mono text-[0.68rem] tracking-wider text-text-muted uppercase font-bold mb-1.5">
                    The problem
                  </p>
                  <p className="text-xs sm:text-sm text-text-body leading-snug">
                    When an EMI on a financed phone goes unpaid, recovery means reminders, field visits and, at worst, repossession.
                  </p>
                </div>
                <div className="glass-card bg-blue-500/8 p-4.5 rounded-2xl border border-blue-500/20">
                  <p className="font-mono text-[0.68rem] tracking-wider text-blue-700 uppercase font-bold mb-1.5">
                    What it does
                  </p>
                  <p className="text-xs sm:text-sm text-slate-800 leading-snug">
                    NexLock restricts the device automatically once an EMI is overdue, and restores it the moment payment is confirmed.
                  </p>
                </div>
              </div>

              {/* Feature 4-Grid */}
              <div className="grid grid-cols-2 gap-3.5 w-full mb-6">
                {NEXLOCK_FEATURES.map((f) => (
                  <div key={f.title} className="p-3 rounded-xl bg-white/40 border border-white/70">
                    <p className="font-serif text-sm font-bold text-text-navy mb-1">{f.title}</p>
                    <p className="text-xs text-text-muted leading-tight">{f.desc}</p>
                  </div>
                ))}
              </div>

              {/* Audience */}
              <p className="text-xs sm:text-sm text-text-muted mb-8">
                <span className="font-mono text-xs uppercase tracking-wider text-primary-electric font-semibold mr-2">
                  Built for:
                </span>
                NBFCs · Fintech lenders · Mobile retailers · Distributors
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Button variant="dark-pill" size="md" href="/nexlock">
                  Explore NexLock
                </Button>
                <Button variant="outline-glass" size="md" href="/collaborate?type=nexlock">
                  Become a NexLock partner
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── PILLAR 03 · NEXWARRANTY ──────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-canvas-alt relative overflow-hidden border-t border-navy/5">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <Reveal effect="fade-up">
              <div className="flex flex-col items-start">
                <Eyebrow code="NX–WRT">
                  03 · CONSUMER & RETAIL
                </Eyebrow>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-text-navy leading-tight mb-5">
                  Cover that begins{' '}
                  <span className="serif-italic-accent">
                    where the brand warranty ends.
                  </span>
                </h3>
                <p className="text-base sm:text-lg text-text-body leading-relaxed mb-6 max-w-xl">
                  NexWarranty is Nexus's extended warranty for home appliances and electronics — 1 to 4 year plans for devices worth up to ₹20 lakh, priced as a simple percentage of device value.
                </p>

                {/* Problem / Solution Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-6">
                  <div className="glass-card bg-white/70 p-4.5 rounded-2xl border border-white/90">
                    <p className="font-mono text-[0.68rem] tracking-wider text-text-muted uppercase font-bold mb-1.5">
                      The problem
                    </p>
                    <p className="text-xs sm:text-sm text-text-body leading-snug">
                      Once the manufacturer's warranty expires, every breakdown becomes an out-of-pocket repair bill.
                    </p>
                  </div>
                  <div className="glass-card bg-teal-500/8 p-4.5 rounded-2xl border border-teal-500/20">
                    <p className="font-mono text-[0.68rem] tracking-wider text-teal-700 uppercase font-bold mb-1.5">
                      What it does
                    </p>
                    <p className="text-xs sm:text-sm text-slate-800 leading-snug">
                      NexWarranty pays for parts and labour in full, with zero depreciation and doorstep pickup and drop.
                    </p>
                  </div>
                </div>

                {/* Feature 4-Grid */}
                <div className="grid grid-cols-2 gap-3.5 w-full mb-6">
                  {NEXWARRANTY_FEATURES.map((f) => (
                    <div key={f.title} className="p-3 rounded-xl bg-white/40 border border-white/70">
                      <p className="font-serif text-sm font-bold text-text-navy mb-1">{f.title}</p>
                      <p className="text-xs text-text-muted leading-tight">{f.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Audience */}
                <p className="text-xs sm:text-sm text-text-muted mb-8">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent-teal font-semibold mr-2">
                    Built for:
                  </span>
                  Households · Appliance & electronics retailers
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <Button variant="dark-pill" size="md" href="/nexwarrenty">
                    Explore NexWarranty
                  </Button>
                  <Button variant="outline-glass" size="md" href="/nexwarrenty#calculator">
                    Calculate a plan price
                  </Button>
                </div>
              </div>
            </Reveal>

            {/* Right Visual */}
            <Reveal effect="fade-scale" delay={0.2} className="flex justify-center">
              <NexWarrantyCertificateGlassVisual />
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
