'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsapScroll } from '../motion/useGsapScroll';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export type PhoneState = 'enrolled' | 'overdue' | 'restricted' | 'unlocked';

const STATES: { id: PhoneState; label: string; badge: string; color: string }[] = [
  { id: 'enrolled', label: '01 · Enrolled', badge: 'Active', color: 'text-emerald-500' },
  { id: 'overdue', label: '02 · Overdue', badge: 'Warning', color: 'text-amber-500' },
  { id: 'restricted', label: '03 · Restricted', badge: 'Locked', color: 'text-red-500' },
  { id: 'unlocked', label: '04 · Unlocked', badge: 'Restored', color: 'text-cyan-500' },
];

export default function NexlockPhoneMockup() {
  const [activeState, setActiveState] = useState<PhoneState>('restricted');
  const containerRef = useRef<HTMLDivElement>(null);
  const chip1Ref = useRef<HTMLDivElement>(null);
  const chip2Ref = useRef<HTMLDivElement>(null);
  const chip3Ref = useRef<HTMLDivElement>(null);

  // GSAP scroll-driven state switching and parallax chips
  useGsapScroll(
    () => {
      if (!containerRef.current) return;

      // Parallax float for floating chips
      if (chip1Ref.current) {
        gsap.to(chip1Ref.current, {
          y: -12,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      if (chip2Ref.current) {
        gsap.to(chip2Ref.current, {
          y: 14,
          duration: 3.6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.4,
        });
      }

      if (chip3Ref.current) {
        gsap.to(chip3Ref.current, {
          y: -8,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.8,
        });
      }

      // ScrollTrigger scrub to cycle states smoothly as user scrolls past hero
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 70%',
        end: 'bottom 20%',
        onUpdate: (self) => {
          const p = self.progress;
          if (p < 0.25) {
            setActiveState('enrolled');
          } else if (p < 0.5) {
            setActiveState('overdue');
          } else if (p < 0.8) {
            setActiveState('restricted');
          } else {
            setActiveState('unlocked');
          }
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative flex flex-col items-center w-full max-w-[440px] mx-auto">
      {/* State Switcher Tabs */}
      <div className="mb-6 flex items-center gap-1.5 p-1 rounded-full glass-card bg-white/80 border border-white/90 shadow-glass-sm text-xs font-mono">
        {STATES.map((s) => {
          const isSelected = activeState === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActiveState(s.id)}
              className={`relative px-3 py-1.5 rounded-full transition-all duration-200 font-semibold ${
                isSelected
                  ? 'text-navy shadow-sm'
                  : 'text-text-muted hover:text-navy hover:bg-white/40'
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="phoneStatePill"
                  className="absolute inset-0 rounded-full bg-white shadow-sm border border-navy/10"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <span className={isSelected ? s.color : 'text-slate-400'}>●</span>
                <span>{s.label.split(' · ')[1]}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Phone Mockup Frame */}
      <div className="relative w-[260px] sm:w-[280px] rounded-[3rem] border-[7px] border-[#0c1b33] bg-[#0c1b33] shadow-[0_35px_80px_rgba(12,27,51,0.35)] overflow-hidden">
        {/* Ambient Screen Halo */}
        <div className="absolute inset-0 bg-blue-500/10 pointer-events-none" />

        {/* Speaker Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 h-4 w-24 rounded-full bg-[#0c1b33] flex items-center justify-center">
          <div className="w-10 h-1 rounded-full bg-slate-700/60" />
          <div className="w-2 h-2 rounded-full bg-slate-800 ml-2" />
        </div>

        {/* Screen Content */}
        <div className="aspect-[9/19] flex flex-col justify-between overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#f8faff] via-[#eef4ff] to-[#e1ecfe] p-5 pt-12 pb-6 text-center relative z-10">
          {/* Top Status Bar */}
          <div className="flex items-center justify-between text-[0.62rem] font-mono text-slate-500 px-1">
            <span>9:41</span>
            <span className="font-serif font-bold text-navy tracking-widest uppercase text-[0.7rem]">
              NEXLOCK
            </span>
            <span>5G 100%</span>
          </div>

          {/* Animated Dynamic State Card */}
          <AnimatePresence mode="wait">
            {activeState === 'enrolled' && (
              <motion.div
                key="enrolled"
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center justify-center my-auto"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-2xl">✓</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-navy mb-1">Device Enrolled</h4>
                <p className="text-xs text-slate-600 max-w-[200px] leading-relaxed mb-4">
                  Successfully linked to dashboard via single QR onboarding scan.
                </p>
                <div className="w-full p-2.5 rounded-xl bg-white/80 border border-white shadow-xs text-left text-[0.68rem] font-mono space-y-1">
                  <div className="flex justify-between text-slate-500">
                    <span>Contract ID:</span>
                    <span className="font-semibold text-navy">NX-78492</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>EMI Status:</span>
                    <span className="font-bold text-emerald-600">On Schedule</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeState === 'overdue' && (
              <motion.div
                key="overdue"
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center justify-center my-auto"
              >
                <div className="w-16 h-16 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-2xl text-amber-600">⚠️</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-navy mb-1">Payment Overdue</h4>
                <p className="text-xs text-slate-600 max-w-[200px] leading-relaxed mb-4">
                  Grace period active: 2 days left before automatic device lock.
                </p>
                <div className="w-full p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-left text-[0.68rem] font-mono space-y-1">
                  <div className="flex justify-between text-amber-800">
                    <span>Due Date:</span>
                    <span className="font-semibold">Yesterday</span>
                  </div>
                  <div className="flex justify-between text-amber-800">
                    <span>Outstanding:</span>
                    <span className="font-bold">₹2,499.00</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeState === 'restricted' && (
              <motion.div
                key="restricted"
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center justify-center my-auto"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl glass-card bg-white/90 border border-white shadow-md">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h4 className="font-serif text-lg font-bold text-navy">Device restricted</h4>
                <p className="mt-2 text-xs leading-snug text-slate-600 max-w-[210px]">
                  Your EMI payment is overdue. Core functions are restricted until it is cleared.
                </p>
                <div className="mt-4 w-full">
                  <div className="rounded-full border border-red-300 bg-red-100/90 px-3 py-1.5 font-mono text-[0.6rem] font-bold tracking-wider text-red-600 shadow-sm">
                    PAYMENT OVERDUE
                  </div>
                  <p className="mt-2 font-mono text-[0.62rem] text-slate-500">
                    Access is restored once payment is confirmed
                  </p>
                </div>
              </motion.div>
            )}

            {activeState === 'unlocked' && (
              <motion.div
                key="unlocked"
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center justify-center my-auto"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-2xl text-cyan-600">🔓</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-navy mb-1">Access Restored</h4>
                <p className="text-xs text-slate-600 max-w-[200px] leading-relaxed mb-4">
                  Payment confirmed. Remote unlock signal dispatched in 0.4s.
                </p>
                <div className="w-full p-2.5 rounded-xl bg-cyan-50 border border-cyan-200 text-left text-[0.68rem] font-mono space-y-1">
                  <div className="flex justify-between text-cyan-800">
                    <span>Receipt:</span>
                    <span className="font-semibold">TX-91022-PAID</span>
                  </div>
                  <div className="flex justify-between text-cyan-800">
                    <span>Device State:</span>
                    <span className="font-bold text-emerald-600">Full Access Active</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Security Assurance */}
          <div className="text-[0.6rem] font-mono text-slate-400 border-t border-navy/10 pt-2">
            Android Security Framework · No Root
          </div>
        </div>
      </div>

      {/* Floating Feature Chip 1: Enrolled (Left) */}
      <div
        ref={chip1Ref}
        className="pointer-events-auto absolute top-[20%] -left-8 sm:-left-12 z-20 rounded-2xl glass-card bg-white/95 px-4 py-2.5 text-left shadow-glass border border-white flex items-center gap-2.5 hover:scale-105 transition-transform"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan shadow-[0_0_8px_#06b6d4]" />
        <div>
          <p className="font-mono text-[0.6rem] tracking-wider text-primary-electric uppercase font-bold">
            Enrolled
          </p>
          <p className="text-xs font-bold text-text-navy">One QR scan</p>
        </div>
      </div>

      {/* Floating Feature Chip 2: Alert (Right) */}
      <div
        ref={chip2Ref}
        className="pointer-events-auto absolute bottom-[26%] -right-8 sm:-right-12 z-20 rounded-2xl glass-card bg-white/95 px-4 py-2.5 text-left shadow-glass border border-white flex items-center gap-2.5 hover:scale-105 transition-transform"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse" />
        <div>
          <p className="font-mono text-[0.6rem] tracking-wider text-red-600 uppercase font-bold">
            Alert
          </p>
          <p className="text-xs font-bold text-text-navy">SIM swap detected</p>
        </div>
      </div>

      {/* Floating Feature Chip 3: No Root (Bottom Left) */}
      <div
        ref={chip3Ref}
        className="pointer-events-auto absolute -bottom-4 -left-4 z-20 rounded-2xl glass-card bg-white/95 px-3.5 py-2 text-left shadow-glass border border-white hidden sm:flex items-center gap-2 hover:scale-105 transition-transform"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
        <span className="font-mono text-[0.64rem] font-bold text-navy uppercase">
          Zero Root Access Required
        </span>
      </div>
    </div>
  );
}
