'use client';

import React from 'react';
import Link from 'next/link';
import Container from '../Container';
import Eyebrow from '../Eyebrow';
import Button from '../Button';
import Reveal from '../motion/Reveal';
import TiltCard from '../motion/TiltCard';

export default function HomeRoutingCTA() {
  const options = [
    {
      id: 'it-solutions',
      title: 'Nexus IT Solutions',
      code: 'NX–ITS',
      need: 'I need software built, fixed or maintained',
      to: '/collaborate?type=it-new',
      action: 'Start a project',
      dot: 'bg-accent-cyan shadow-[0_0_8px_#06b6d4]',
    },
    {
      id: 'nexlock',
      title: 'NexLock',
      code: 'NX–LCK',
      need: 'I finance or sell phones on EMI',
      to: '/nexlock',
      action: 'See NexLock',
      dot: 'bg-primary-electric shadow-[0_0_8px_#2563eb]',
    },
    {
      id: 'nexwarranty',
      title: 'NexWarranty',
      code: 'NX–WRT',
      need: 'I want to protect an appliance or device',
      to: '/nexwarrenty',
      action: 'See NexWarranty plans',
      dot: 'bg-accent-teal shadow-[0_0_8px_#0d9488]',
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-canvas">
      <Container size="wide">
        {/* Main Dark Navy Glass Container */}
        <div className="relative rounded-[2.5rem] glass-dark p-8 sm:p-14 lg:p-16 border border-white/15 shadow-2xl overflow-hidden">
          {/* Background Ambient Glows */}
          <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary-electric/20 blur-[130px]" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-accent-cyan/15 blur-[130px]" aria-hidden="true" />

          {/* Section Header */}
          <Reveal effect="fade-up">
            <div className="mx-auto mb-14 max-w-[680px] text-center flex flex-col items-center relative z-10">
              <Eyebrow onDark code="START">
                WHERE TO START
              </Eyebrow>
              <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white">
                Tell us what you're{' '}
                <span className="serif-italic-accent">working on.</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                Pick the part of Nexus that fits — or just get in touch and we'll route you.
              </p>
            </div>
          </Reveal>

          {/* 3 Glass Option Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 mb-14">
            {options.map((r, i) => (
              <Reveal key={r.id} effect="fade-up" delay={i * 0.1}>
                <TiltCard maxTilt={5} scale={1.02} glare className="h-full">
                  <Link
                    href={r.to}
                    className="group flex flex-col justify-between h-full rounded-2xl glass-card bg-white/[0.06] hover:bg-white/[0.12] p-7 border border-white/15 hover:border-white/35 transition-all duration-300 shadow-lg select-none"
                  >
                    <div>
                      {/* Top Header: Title & Code */}
                      <div className="mb-6 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className={`w-2 h-2 rounded-full ${r.dot}`} />
                          <span className="font-serif font-bold text-lg text-white">
                            {r.title}
                          </span>
                        </div>
                        <span className="font-mono text-[0.65rem] px-2 py-0.5 rounded bg-white/10 text-slate-300 uppercase font-semibold">
                          {r.code}
                        </span>
                      </div>

                      {/* Need Statement */}
                      <p className="font-serif text-lg sm:text-xl font-semibold leading-snug text-white mb-6">
                        {r.need}
                      </p>
                    </div>

                    {/* Bottom Action CTA */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-semibold tracking-wide">
                        {r.action}
                      </span>
                      <span className="text-base transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden="true">
                        &rarr;
                      </span>
                    </div>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          {/* Direct Contact CTAs */}
          <Reveal effect="fade-up" delay={0.3}>
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-white/10">
              <Button
                variant="primary"
                size="lg"
                href="/collaborate"
                arrow={true}
              >
                Start a conversation
              </Button>

              <Button
                variant="outline-glass"
                size="lg"
                href="/contact"
                arrow={false}
                className="text-white hover:text-navy"
              >
                Contact details
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
