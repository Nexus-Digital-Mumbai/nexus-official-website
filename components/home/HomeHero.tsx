'use client';

import React, { useRef } from 'react';
import Container from '../Container';
import Eyebrow from '../Eyebrow';
import Button from '../Button';
import CountUp from '../motion/CountUp';
import SplitText from '../reactbits/SplitText';
import HeroVideo from '../HeroVideo';
import HeroMobileVideoCard from '../HeroMobileVideoCard';

export default function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);

  const stats = [
    { countTo: 3, label: 'PILLARS' },
    { countTo: 2, label: 'OWN PRODUCTS' },
    { countTo: 10, suffix: '+', label: 'YEARS LEADERSHIP' },
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[88vh] min-h-[100svh] flex items-center justify-center pt-8 sm:pt-10 md:pt-12 lg:pt-8 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#EEF2FC] to-[#F7F9FF] lg:bg-canvas noise-overlay"
    >
      {/* Desktop Full-Bleed Video (>= 1024px only; hidden below 1024px) */}
      <HeroVideo />

      <Container size="wide" className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] items-center gap-8 lg:gap-8">
          {/* Left Content Column */}
          <div className="flex flex-col items-start text-left max-w-2xl w-full">
            {/* Mono Eyebrow */}
            <Eyebrow className="mb-4 sm:mb-5">
              NEXUS · TECHNOLOGY COMPANY
            </Eyebrow>

            {/* Serif Headline with SplitText & Blue Italic Accent */}
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] tracking-tight leading-[1.08] text-text-navy mb-5 sm:mb-6">
              <SplitText text="We build technology for businesses — " delay={0.03} />
              <span className="serif-italic-accent block sm:inline">
                and our own products.
              </span>
            </h1>

            {/* Subcopy / Lede */}
            <p className="text-base sm:text-lg lg:text-[1.12rem] text-text-body leading-relaxed max-w-[48ch] mb-7 sm:mb-9">
              Nexus IT Solutions builds and maintains software for clients. NexLock and NexWarranty are products Nexus has built and runs itself. Three pillars, one technology company.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
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

            {/* Mobile & Tablet Video Card Block (< 1024px only: after buttons, before stats) */}
            <HeroMobileVideoCard />

            {/* 3 Stats (CountUp) */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-navy/8 w-full max-w-lg">
              {stats.map((stat, i) => (
                <div key={i} className="border-l-2 border-accent-pink pl-3 sm:pl-4">
                  <span className="block font-mono text-2xl sm:text-3xl font-bold text-text-navy tracking-tight">
                    <CountUp
                      to={stat.countTo}
                      suffix={stat.suffix || ''}
                      duration={2}
                    />
                  </span>
                  <span className="block text-[0.68rem] sm:text-[0.76rem] font-mono tracking-wider text-text-muted uppercase mt-1 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Spacer (Preserves exact layout balance and reveals the desktop video's glass 'N' on desktop) */}
          <div className="hidden lg:block min-h-[420px]" aria-hidden="true" />
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
