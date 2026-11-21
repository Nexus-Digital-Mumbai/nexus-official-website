'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Container from '../Container';
import Eyebrow from '../Eyebrow';
import Button from '../Button';
import CountUp from '../motion/CountUp';
import SplitText from '../reactbits/SplitText';

const Hero3DVisual = dynamic(() => import('./Hero3DVisual'), {
  ssr: false,
  loading: () => (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto rounded-3xl bg-primary-electric/5 animate-pulse" />
  ),
});

export default function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);

  const stats = [
    { countTo: 3, label: 'Pillars' },
    { countTo: 2, label: 'Own products' },
    { countTo: 10, suffix: '+', label: 'Years leadership experience' },
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-aurora noise-overlay"
    >
      {/* Background Decorative Ambient Radial Lighting */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-accent-cyan/15 blur-[120px]" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-primary-electric/15 blur-[130px]" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-accent-pink/10 blur-[110px]" />
      </div>

      <Container size="wide" className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] items-center gap-12 lg:gap-8">
          {/* Left Content Column */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            {/* Mono Eyebrow */}
            <Eyebrow className="mb-4">
              NEXUS · TECHNOLOGY COMPANY
            </Eyebrow>

            {/* Serif Headline with SplitText & Blue Italic Accent */}
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] tracking-tight leading-[1.08] text-text-navy mb-6">
              <SplitText text="We build technology for businesses — " delay={0.03} />
              <span className="serif-italic-accent block sm:inline">
                and our own products.
              </span>
            </h1>

            {/* Subcopy / Lede */}
            <p className="text-base sm:text-lg lg:text-[1.12rem] text-text-body leading-relaxed max-w-[48ch] mb-9">
              Nexus IT Solutions builds and maintains software for clients. NexLock and NexWarranty are products Nexus has built and runs itself. Three pillars, one technology company.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12 sm:mb-14">
              <Button
                variant="dark-pill"
                size="lg"
                href="/#pillars"
                arrow={true}
              >
                Explore the three pillars
              </Button>

              <Button
                variant="outline-glass"
                size="lg"
                href="/collaborate?type=it-new"
                arrow={false}
              >
                Start a software project
              </Button>
            </div>

            {/* 3 Stats (CountUp) */}
            <div className="grid grid-cols-3 gap-6 sm:gap-10 pt-6 border-t border-navy/8 w-full max-w-lg">
              {stats.map((stat, i) => (
                <div key={i} className="border-l-2 border-accent-pink pl-3.5 sm:pl-4">
                  <span className="block font-mono text-2xl sm:text-3xl font-bold text-text-navy tracking-tight">
                    <CountUp
                      to={stat.countTo}
                      suffix={stat.suffix || ''}
                      duration={2}
                    />
                  </span>
                  <span className="block text-[0.72rem] sm:text-[0.76rem] font-mono tracking-wider text-text-muted uppercase mt-1 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Column: 3D Glass "N" + Celestial Orbit Rings */}
          <div className="flex justify-center items-center relative">
            <Hero3DVisual />
          </div>
        </div>
      </Container>

      {/* "Scroll Down" Interactive Rail on the Right */}
      <div
        className="hidden xl:flex absolute right-8 bottom-12 flex-col items-center gap-3 z-20 pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="font-mono text-[0.65rem] tracking-[0.22em] text-text-muted uppercase [writing-mode:vertical-rl]">
          SCROLL DOWN
        </span>
        <div className="relative w-px h-16 bg-gradient-to-b from-primary-electric/40 via-accent-cyan/80 to-transparent overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-white shadow-[0_0_8px_#06b6d4] animate-[nx-sweep_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
