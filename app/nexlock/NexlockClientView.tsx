'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Container from '../../components/Container';
import Eyebrow from '../../components/Eyebrow';
import Button from '../../components/Button';
import { PillarBadge } from '../../components/PillarMarks';
import Reveal from '../../components/motion/Reveal';
import TiltCard from '../../components/motion/TiltCard';
import SpotlightCard from '../../components/reactbits/SpotlightCard';

const NexlockPhoneMockup = dynamic(
  () => import('../../components/nexlock/NexlockPhoneMockup'),
  {
    ssr: false,
    loading: () => (
      <div className="h-[580px] w-full max-w-[320px] mx-auto rounded-[42px] bg-navy/10 animate-pulse" />
    ),
  }
);

const NexlockDashboardPreview = dynamic(
  () => import('../../components/nexlock/NexlockDashboardPreview'),
  {
    ssr: false,
  }
);

const NexlockTimeline = dynamic(
  () => import('../../components/nexlock/NexlockTimeline'),
  {
    ssr: false,
  }
);

/* ─── DATA ────────────────────────────────────────────────────────────── */
const HERO_CHIPS = ['One-Tap Setup', 'Smart Lock Overlay', 'Instant Enroll', 'No Root Required'];

const MARQUEE_ITEMS = [
  'NBFC',
  'FINTECH',
  'MOBILE RETAILERS',
  'DEVICE FINANCING',
  'DISTRIBUTORS',
  'LENDING PARTNERS',
  'EMI FINANCE',
  'MICROFINANCE',
];

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h6v6H3zm0 12h6v6H3zm12-12h6v6h-6zM9 9h1v1H9zm5 0h1v1h-1zm1 1h1v1h-1zm-1 1h1v1h-1zm-2 0h1v1h-1zm0 2h1v1h-1zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zm0 2h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1z" />
      </svg>
    ),
    label: 'One QR Scan',
    desc: 'Onboard any device in seconds with a single QR scan — no double setup, no manual entry.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    label: 'Easy Installation',
    desc: 'Install like a standard Play Store app — no technical expertise or device wipe needed.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    label: 'Smart Reminders',
    desc: 'Automated notifications reduce missed payments before a lock even becomes necessary.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    label: 'Auto Lock',
    desc: 'Device access is restricted automatically when EMI falls overdue — no manual action.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: 'Device Monitoring',
    desc: 'Real-time status tracking for every financed device in your portfolio at a glance.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: 'Customer Management',
    desc: 'Manage borrower profiles, contracts, and payment history from one unified dashboard.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
    label: 'Instant Enrollment',
    desc: 'New devices go live in under 60 seconds — dramatically faster than legacy setup flows.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 5a2 2 0 0 1 2-2h12l4 4v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z M9 13h6M9 9h6" />
      </svg>
    ),
    label: 'SIM Swap Detection',
    desc: 'Detects SIM card removal or replacement and triggers an immediate security alert.',
  },
];

const PROTECTION_LEFT = [
  'Overlay lock screen (no root required)',
  'Uninstall prevention via device admin',
  'Accessibility-based policy enforcement',
  'Secure permission-gated onboarding',
];

const PROTECTION_RIGHT = [
  'SIM swap & removal detection',
  'Remote lock / unlock from dashboard',
  'Real-time missed-payment alerts',
  'Offline unlock via time-limited codes',
];

const TOOLS = [
  {
    num: '001/',
    title: 'PAYMENT MONITORING',
    desc: 'Track EMI payment status in real time with automated alerts, overdue flags, and exportable reports.',
    tags: ['EMI', 'Alerts', 'Reports'],
  },
  {
    num: '002/',
    title: 'REMOTE DEVICE ACTIONS',
    desc: 'Lock, unlock, and send payment reminders remotely — no physical access, no field agents needed.',
    tags: ['Remote', 'Control', 'Automation'],
  },
  {
    num: '003/',
    title: 'ANALYTICS DASHBOARD',
    desc: 'Gain portfolio-level insights into repayment rates, risk distribution, and device health trends.',
    tags: ['Data', 'Insights', 'Reports'],
  },
];

export default function NexlockClientView() {
  return (
    <div className="bg-canvas text-text-navy overflow-x-hidden w-full selection:bg-primary-electric/20 selection:text-navy">
      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <section
        id="nexlock-hero"
        className="relative overflow-hidden pt-36 sm:pt-44 pb-20 sm:pb-28 min-h-[90vh] flex items-center"
      >
        {/* Background ambient radial glow blobs */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary-electric/15 blur-[130px]" />
          <div className="absolute -right-20 top-20 h-[450px] w-[450px] rounded-full bg-accent-cyan/15 blur-[120px]" />
          <div className="absolute bottom-10 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-accent-teal/10 blur-[100px]" />
        </div>

        <Container size="wide" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column — Text */}
            <div className="text-left flex flex-col items-start">
              <Reveal effect="fade-up">
                <div className="mb-5">
                  <PillarBadge kind="product" className="shadow-sm" />
                </div>
              </Reveal>

              <Reveal effect="fade-up" delay={0.06}>
                <Eyebrow code="NX–LCK">EMI SECURITY PLATFORM</Eyebrow>
              </Reveal>

              <Reveal effect="fade-up" delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-serif font-bold tracking-tight leading-[1.12] mb-5 text-text-navy">
                  Smart Device Lock &amp;{' '}
                  <span className="serif-italic-accent">EMI Recovery</span> Platform
                </h1>
              </Reveal>

              <Reveal effect="fade-up" delay={0.14}>
                <p className="text-base sm:text-lg text-text-body leading-relaxed mb-7 max-w-xl">
                  Recover mobile financing loans and minimise default risks — no field agents, no repossession, no root access required.
                </p>
              </Reveal>

              {/* Chips */}
              <Reveal effect="fade-up" delay={0.18}>
                <div className="flex flex-wrap gap-2 mb-8">
                  {HERO_CHIPS.map((chip) => (
                    <span
                      key={chip}
                      className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold glass-card bg-white/80 border border-white/95 text-primary-electric shadow-xs"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </Reveal>

              {/* Stats */}
              <Reveal effect="fade-up" delay={0.22}>
                <div className="flex gap-8 mb-8 pb-6 border-b border-navy/10 w-full">
                  <div>
                    <p className="text-3xl sm:text-4xl font-serif font-bold text-primary-electric">99%</p>
                    <p className="text-xs sm:text-sm text-text-muted mt-1">Repayment Success</p>
                  </div>
                  <div className="h-10 w-px bg-navy/10 my-auto" />
                  <div>
                    <p className="text-3xl sm:text-4xl font-serif font-bold text-primary-electric">50K+</p>
                    <p className="text-xs sm:text-sm text-text-muted mt-1">Active Devices</p>
                  </div>
                </div>
              </Reveal>

              {/* CTAs */}
              <Reveal effect="fade-up" delay={0.26}>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a
                    id="nexlock-get-started"
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-primary-electric to-navy shadow-glass-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                    </svg>
                    <span>Get Started</span>
                  </a>
                  <Button
                    id="nexlock-contact-cta"
                    variant="outline-glass"
                    size="lg"
                    href="/collaborate?type=nexlock"
                    arrow={true}
                  >
                    Become a Partner
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Right Column — Glass Phone Mockup with Scroll-Driven States */}
            <Reveal effect="fade-scale" delay={0.2} className="flex justify-center items-center relative py-6 lg:py-0 w-full">
              <NexlockPhoneMockup />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 2. MARQUEE TICKER ───────────────────────────────────────── */}
      <section
        id="nexlock-marquee"
        className="py-4 overflow-hidden bg-ink border-y border-white/10 relative z-20"
      >
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex items-center gap-8 sm:gap-12 animate-marquee shrink-0">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={i}
                className="text-xs sm:text-sm font-mono font-bold tracking-widest text-slate-300 flex items-center gap-8 sm:gap-12 uppercase"
              >
                <span>{item}</span>
                <span className="text-cyan-400 text-xs">◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. VALUE PROPOSITION ─────────────────────────────────────── */}
      <section id="nexlock-value" className="py-24 sm:py-32 bg-canvas-alt relative overflow-hidden border-b border-navy/5">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal effect="fade-up">
              <div>
                <Eyebrow code="ROI">Why NexLock</Eyebrow>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text-navy leading-tight mb-5">
                  Leading EMI Risk<br />
                  <span className="serif-italic-accent">Management Platform</span>
                </h2>
                <p className="text-base sm:text-lg text-text-body leading-relaxed mb-6">
                  NexLock gives device finance businesses a powerful, app-level tool to enforce EMI compliance automatically — keeping repayment rates high and default costs low, without any physical intervention.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Zero physical intervention or field agents',
                    'Works on any Android device without root',
                    'Compliant with RBI EMI collection guidelines',
                    'Real-time portfolio visibility',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm sm:text-base text-text-navy font-medium">
                      <span className="w-5 h-5 rounded-full bg-cyan-500/15 text-cyan-700 flex items-center justify-center font-bold text-xs shrink-0">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#nexlock-features"
                    id="nexlock-explore-features"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white bg-navy hover:bg-slate-800 shadow-md transition-all"
                  >
                    <span>Explore Features</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                  <Button
                    id="nexlock-partner-cta"
                    variant="outline-glass"
                    size="md"
                    href="/collaborate?type=nexlock"
                    arrow={false}
                  >
                    Become a Partner
                  </Button>
                </div>
              </div>
            </Reveal>

            {/* Stat Cards Bento Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {[
                { value: '63%', label: 'Default reduction in 90 days' },
                { value: '60s', label: 'Device enrollment time' },
                { value: 'ZERO', label: 'Field agent cost required' },
                { value: '99.9%', label: 'Platform uptime SLA' },
              ].map((stat, i) => (
                <Reveal key={stat.label} effect="fade-up" delay={i * 0.08}>
                  <TiltCard maxTilt={6} scale={1.02} className="h-full">
                    <SpotlightCard
                      spotlightColor="rgba(37, 99, 235, 0.12)"
                      className="p-6 sm:p-7 rounded-2xl glass-card bg-white/85 hover:bg-white border border-white/95 shadow-glass text-center h-full flex flex-col justify-center"
                    >
                      <p className="text-3xl sm:text-4xl font-serif font-bold text-primary-electric mb-2">
                        {stat.value}
                      </p>
                      <p className="text-xs sm:text-sm text-text-muted leading-snug">
                        {stat.label}
                      </p>
                    </SpotlightCard>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. HOW IT WORKS (TIMELINE WITH GSAP SCRUB) ──────────────── */}
      <section id="nexlock-workflow" className="py-24 sm:py-32 bg-canvas relative overflow-hidden">
        <Container size="wide">
          <Reveal effect="fade-up">
            <div className="mx-auto mb-16 max-w-[700px] text-center flex flex-col items-center">
              <Eyebrow code="PROCESS">Workflow</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text-navy mb-4">
                How NexLock <span className="serif-italic-accent">Works</span>
              </h2>
              <p className="text-base sm:text-lg text-text-body max-w-xl leading-relaxed">
                From installation to repayment, manage every device in one seamless flow.
              </p>
            </div>
          </Reveal>

          {/* GSAP Scrubbed Workflow Timeline */}
          <NexlockTimeline />
        </Container>
      </section>

      {/* ── 5. FEATURES GRID ─────────────────────────────────────────── */}
      <section id="nexlock-features" className="py-24 sm:py-32 bg-canvas-alt relative overflow-hidden border-t border-navy/5">
        <Container size="wide">
          <Reveal effect="fade-up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
              <div>
                <Eyebrow code="SOLUTIONS">Solutions</Eyebrow>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text-navy leading-tight">
                  Built For Device<br />
                  <span className="serif-italic-accent">Financing Businesses</span>
                </h2>
              </div>
              <div>
                <Button
                  id="nexlock-all-features"
                  variant="dark-pill"
                  size="md"
                  href="/contact"
                  arrow={true}
                >
                  All Features
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((feat, i) => (
              <Reveal key={feat.label} effect="fade-up" delay={i * 0.05}>
                <TiltCard maxTilt={5} scale={1.02} className="h-full">
                  <SpotlightCard
                    spotlightColor="rgba(37, 99, 235, 0.14)"
                    className="p-6 rounded-2xl glass-card bg-white/85 hover:bg-white border border-white/95 shadow-glass h-full flex flex-col justify-between group transition-all"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-electric to-navy text-white flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform">
                        {feat.icon}
                      </div>
                      <p className="text-xs font-mono font-bold tracking-wider uppercase text-text-navy mb-2">
                        {feat.label}
                      </p>
                      <p className="text-xs sm:text-sm text-text-body leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-navy/5 flex items-center justify-between text-[0.68rem] font-mono text-text-muted">
                      <span>NexLock Feature</span>
                      <span className="text-primary-electric group-hover:translate-x-1 transition-transform">
                        &rarr;
                      </span>
                    </div>
                  </SpotlightCard>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 6. ADVANCED PROTECTION (DARK GLASS TECHNICAL BLOCKS) ──────── */}
      <section id="nexlock-protection" className="py-24 sm:py-32 bg-ink text-slate-100 relative overflow-hidden border-y border-white/10">
        {/* Background ambient lighting */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary-electric/20 blur-[130px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-accent-cyan/15 blur-[130px]" />

        <Container size="wide" className="relative z-10">
          <Reveal effect="fade-up">
            <div className="mx-auto mb-16 max-w-[700px] text-center flex flex-col items-center">
              <Eyebrow onDark code="SECURITY">Advanced Protection</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">
                App-Grade EMI<br />
                <span className="serif-italic-accent">Device Protection</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
            {/* Left Card: App-Level Security (Dark Glass) */}
            <Reveal effect="fade-up" delay={0.1}>
              <div className="glass-dark p-7 sm:p-9 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden border-l-4 border-l-primary-electric">
                <span className="font-mono text-xs tracking-wider text-cyan-300 uppercase font-semibold block mb-2">
                  L2 Architecture
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">
                  App-Level Security
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  Powerful protection implemented entirely through Android built-in permission system — no rooting, no enterprise enrollment.
                </p>
                <ul className="space-y-3 font-mono text-xs text-slate-200">
                  {PROTECTION_LEFT.map((item) => (
                    <li key={item} className="flex gap-3 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#06b6d4]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Center Logo Emblem */}
            <Reveal effect="fade-scale" delay={0.2} className="flex justify-center my-4 lg:my-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full glass-card bg-white/10 border border-white/25 flex items-center justify-center p-4 shadow-2xl backdrop-blur-xl relative">
                <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-pulse" />
                <Image
                  src="/nexlock-logo.png"
                  alt="NexLock Emblem"
                  width={112}
                  height={112}
                  className="w-24 sm:w-28 h-auto object-contain drop-shadow-lg"
                />
              </div>
            </Reveal>

            {/* Right Card: Reliable Protection (Dark Glass) */}
            <Reveal effect="fade-up" delay={0.15}>
              <div className="glass-dark p-7 sm:p-9 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden border-r-4 border-r-blue-400">
                <span className="font-mono text-xs tracking-wider text-blue-300 uppercase font-semibold block mb-2">
                  Tamper Resistance
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">
                  Reliable Protection
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  Multi-layer safeguards ensure financed devices remain protected against tampering, SIM swaps, and evasion attempts.
                </p>
                <ul className="space-y-3 font-mono text-xs text-slate-200">
                  {PROTECTION_RIGHT.map((item) => (
                    <li key={item} className="flex gap-3 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-electric shadow-[0_0_6px_#2563eb]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 7. INTELLIGENT TOOLS & DASHBOARD PREVIEW ──────────────────── */}
      <section id="nexlock-tools" className="py-24 sm:py-32 bg-canvas relative overflow-hidden">
        <Container size="wide">
          <Reveal effect="fade-up">
            <div className="mx-auto mb-16 max-w-[700px] text-center flex flex-col items-center">
              <Eyebrow code="CONSOLE">Platform Capabilities</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text-navy mb-4">
                Intelligent <span className="serif-italic-accent">EMI Tools</span>
              </h2>
            </div>
          </Reveal>

          {/* Interactive Glass Dashboard Preview Frame */}
          <Reveal effect="fade-scale" delay={0.1} className="mb-14">
            <NexlockDashboardPreview />
          </Reveal>

          {/* 3 Platform Capabilities Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TOOLS.map((tool, i) => (
              <Reveal key={tool.num} effect="fade-up" delay={i * 0.1}>
                <TiltCard maxTilt={5} scale={1.02} className="h-full">
                  <SpotlightCard
                    spotlightColor="rgba(37, 99, 235, 0.12)"
                    className="p-7 rounded-2xl glass-card bg-white/85 hover:bg-white border border-white/90 shadow-glass flex flex-col justify-between h-full group"
                  >
                    <div>
                      <div className="h-1 w-full bg-gradient-to-r from-primary-electric to-accent-cyan rounded-full mb-6" />
                      <p className="text-3xl font-mono font-black text-primary-electric mb-2">
                        {tool.num}
                      </p>
                      <p className="text-xs font-mono font-bold tracking-widest mb-3 uppercase text-text-navy">
                        {tool.title}
                      </p>
                      <p className="text-xs sm:text-sm text-text-body leading-relaxed mb-6">
                        {tool.desc}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-navy/5">
                      {tool.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full border border-navy/10 bg-navy/5 text-xs font-mono font-semibold text-primary-electric"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 8. EMI OVERDUE ───────────────────────────────────────────── */}
      <section id="nexlock-emi" className="py-24 sm:py-32 bg-canvas-alt relative overflow-hidden border-t border-navy/5">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal effect="fade-up">
              <div>
                <Eyebrow code="POLICY">EMI Protection</Eyebrow>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text-navy leading-tight mb-6">
                  What Happens When<br />
                  <span className="serif-italic-accent">You Miss An EMI?</span>
                </h2>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { value: '7 Days', label: 'Grace Period' },
                    { value: '24/7', label: 'Device Monitoring' },
                    { value: '100%', label: 'Data Encryption' },
                    { value: '₹10L', label: 'EMI Cover*' },
                  ].map((s, i) => (
                    <div
                      key={s.label}
                      className="p-4 sm:p-5 rounded-2xl glass-card bg-white/80 border border-white/95 shadow-sm text-center"
                    >
                      <p className="text-xl sm:text-2xl font-serif font-bold text-navy mb-1">
                        {s.value}
                      </p>
                      <p className="text-xs text-text-muted">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    id="nexlock-learn-more"
                    variant="outline-glass"
                    size="md"
                    href="/contact"
                    arrow={false}
                  >
                    Learn More
                  </Button>
                  <Button
                    id="nexlock-become-partner"
                    variant="dark-pill"
                    size="md"
                    href="/collaborate?type=nexlock"
                    arrow={true}
                  >
                    Become Partner
                  </Button>
                </div>
              </div>
            </Reveal>

            {/* Auto-Lock Visual Card */}
            <Reveal effect="fade-scale" delay={0.2}>
              <div className="rounded-3xl glass-card bg-gradient-to-br from-white/90 via-blue-50/70 to-indigo-50/60 border border-white p-8 sm:p-12 flex flex-col items-center justify-center text-center shadow-glass-lg min-h-[320px]">
                <div className="w-20 h-20 rounded-full bg-primary-electric/10 border-2 border-primary-electric/30 flex items-center justify-center mb-5 shadow-inner">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0c1b33" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-navy mb-2">
                  Auto-Lock Activated
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs mb-6">
                  The device displays a payment reminder screen. Core functions are restricted until the overdue EMI is cleared.
                </p>
                <div className="px-5 py-2.5 rounded-full bg-red-100 border border-red-300 text-xs font-mono font-bold text-red-600 tracking-wider shadow-sm">
                  PAYMENT OVERDUE — DEVICE RESTRICTED
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 9. DOWNLOAD CTA ──────────────────────────────────────────── */}
      <section
        id="nexlock-download"
        className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden bg-ink text-white border-t border-white/10"
      >
        {/* Background Ambient Glows */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary-electric/20 blur-[130px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-accent-cyan/15 blur-[130px]" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Logo Container */}
          <Reveal effect="fade-scale">
            <div className="flex justify-center mb-6">
              <div className="glass-card bg-white/95 rounded-2xl px-6 py-3.5 inline-flex items-center justify-center shadow-lg border border-white">
                <Image
                  src="/nexlock-logo.png"
                  alt="NexLock"
                  width={144}
                  height={60}
                  className="w-28 sm:w-36 h-auto object-contain"
                />
              </div>
            </div>
          </Reveal>

          <Reveal effect="fade-up" delay={0.08}>
            <Eyebrow onDark code="GET STARTED">Get Started Today</Eyebrow>
          </Reveal>

          <Reveal effect="fade-up" delay={0.12}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
              Download NexLock Today
            </h2>
          </Reveal>

          <Reveal effect="fade-up" delay={0.16}>
            <p className="text-base sm:text-lg text-slate-300 mb-9 max-w-md mx-auto leading-relaxed">
              Join 50,000+ users who manage their device EMIs smarter.
            </p>
          </Reveal>

          <Reveal effect="fade-up" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                id="nexlock-google-play"
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider text-white bg-primary-electric hover:bg-blue-600 shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <span>Google Play</span>
              </a>
              <a
                id="nexlock-app-store"
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider text-white border border-white/30 bg-white/10 hover:bg-white/20 transition-all"
              >
                <span>⊕ App Store</span>
              </a>
            </div>
          </Reveal>

          <Reveal effect="fade-up" delay={0.25}>
            <p className="mt-10 text-xs text-slate-400 leading-relaxed max-w-xl mx-auto">
              *₹10L EMI Cover subject to terms and conditions. NexLock operates under Android standard permission framework.{' '}
              <Link href="/nexlock/privacy" className="text-cyan-300 underline hover:text-cyan-200">
                Privacy Policy
              </Link>
              {' · '}
              <Link href="/nexlock/terms" className="text-cyan-300 underline hover:text-cyan-200">
                Terms of Service
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
