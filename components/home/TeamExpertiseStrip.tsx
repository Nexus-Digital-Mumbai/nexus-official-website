'use client';

import React from 'react';
import Container from '../Container';
import Eyebrow from '../Eyebrow';
import Reveal from '../motion/Reveal';

export default function TeamExpertiseStrip() {
  return (
    <section className="py-24 sm:py-32 bg-canvas relative overflow-hidden border-t border-navy/5">
      <Container size="wide">
        <Reveal effect="fade-up">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <Eyebrow code="SYNERGY">
                One team, three focuses
              </Eyebrow>
              <h2 className="mb-5 text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-bold text-text-navy leading-tight">
                We run live products every day.{' '}
                <span className="serif-italic-accent">
                  That makes our client engineering better.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-text-body leading-relaxed max-w-xl">
                Operating NexLock and NexWarranty means we face the same problems our clients face: reliability, data integrity, user trust and keeping software running after launch day. That's the mindset we bring to every IT Solutions engagement.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="glass-card bg-white/75 p-6 rounded-2xl border border-white/90 shadow-glass">
                <p className="font-mono text-xs tracking-wider text-accent-cyan uppercase font-bold mb-2">
                  Nexus IT Solutions
                </p>
                <p className="text-sm sm:text-base text-text-navy font-medium leading-relaxed">
                  We engineer, maintain and modernize software for your business.
                </p>
              </div>

              <div className="glass-card bg-white/75 p-6 rounded-2xl border border-white/90 shadow-glass">
                <p className="font-mono text-xs tracking-wider text-primary-electric uppercase font-bold mb-2">
                  NexLock &amp; NexWarranty
                </p>
                <p className="text-sm sm:text-base text-text-navy font-medium leading-relaxed">
                  Products Nexus owns and operates — serving retailers, lenders and customers.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
