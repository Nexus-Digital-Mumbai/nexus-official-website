'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsapScroll } from '../motion/useGsapScroll';
import TiltCard from '../motion/TiltCard';
import SpotlightCard from '../reactbits/SpotlightCard';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const WORKFLOW_STEPS = [
  {
    num: '01',
    title: 'Install NexLock',
    desc: 'Download and install directly from Google Play — no special provisioning or device wipe required.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Grant Permissions',
    desc: 'Enable overlay, accessibility, and device admin permissions during a simple guided setup.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'QR Scan & Link',
    desc: 'Scan one QR code to instantly link the device to your dashboard and customer account.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h6v6H3zm0 12h6v6H3zm12-12h6v6h-6zM9 9h1v1H9zm5 0h1v1h-1zm1 1h1v1h-1zm-1 1h1v1h-1zm-2 0h1v1h-1zm0 2h1v1h-1zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1h-1zm0 2h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Set EMI Schedule',
    desc: 'Configure payment dates, grace periods, and automated reminder sequences.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Monitor & Auto-Lock',
    desc: 'NexLock automatically restricts device access when a payment is overdue — hands-free.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Restore Access',
    desc: 'Unlock instantly via the dashboard the moment payment is confirmed.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

export default function NexlockTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useGsapScroll(
    () => {
      if (!containerRef.current || !progressBarRef.current) return;

      gsap.fromTo(
        progressBarRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          transformOrigin: 'left center',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            end: 'bottom 40%',
            scrub: 0.8,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative w-full">
      {/* GSAP Scrubbed Timeline Connecting Bar (desktop) */}
      <div className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-1 bg-navy/10 rounded-full z-0 overflow-hidden">
        <div
          ref={progressBarRef}
          className="h-full w-full bg-gradient-to-r from-primary-electric via-accent-cyan to-navy rounded-full"
        />
      </div>

      {/* 6 Step Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {WORKFLOW_STEPS.map((step, idx) => (
          <div key={step.num} className="h-full">
            <TiltCard maxTilt={5} scale={1.02} className="h-full">
              <SpotlightCard
                spotlightColor="rgba(37, 99, 235, 0.12)"
                className="h-full p-6 sm:p-7 rounded-2xl glass-card bg-white/85 hover:bg-white border border-white/90 shadow-glass flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-electric to-navy text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      {step.icon}
                    </div>
                    <span className="font-mono text-2xl font-black text-primary-electric/25 group-hover:text-primary-electric/40 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-text-navy mb-2 group-hover:text-primary-electric transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-body leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-navy/5 flex items-center justify-between text-[0.68rem] font-mono text-text-muted">
                  <span>Step {step.num} of 06</span>
                  <span className="text-primary-electric font-semibold">Guided Flow</span>
                </div>
              </SpotlightCard>
            </TiltCard>
          </div>
        ))}
      </div>
    </div>
  );
}
