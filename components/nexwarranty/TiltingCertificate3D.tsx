'use client';

import React, { useRef } from 'react';
import TiltCard from '../motion/TiltCard';
import SpotlightCard from '../reactbits/SpotlightCard';
import { useGsapScroll } from '../motion/useGsapScroll';
import gsap from 'gsap';

const CERT_ROWS = [
  ['Device', 'Refrigerator'],
  ['Plan term', '3 years after brand warranty'],
  ['Spare parts & labour', '100% covered'],
  ['Depreciation on claims', 'Zero'],
  ['Service', 'Doorstep pickup & drop'],
];

export default function TiltingCertificate3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sealRef = useRef<HTMLDivElement>(null);
  const shard1Ref = useRef<HTMLDivElement>(null);
  const shard2Ref = useRef<HTMLDivElement>(null);

  useGsapScroll(
    () => {
      if (!containerRef.current) return;

      // Subtle parallax rotation on the foil seal
      if (sealRef.current) {
        gsap.to(sealRef.current, {
          rotate: 15,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // Parallax floating shards
      if (shard1Ref.current) {
        gsap.to(shard1Ref.current, {
          y: -14,
          rotate: 6,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      if (shard2Ref.current) {
        gsap.to(shard2Ref.current, {
          y: 12,
          rotate: -8,
          duration: 3.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.5,
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative w-full max-w-[480px] mx-auto py-4">
      {/* Ambient background glows */}
      <div className="absolute -inset-4 bg-gradient-to-br from-teal-500/20 via-cyan-400/15 to-transparent rounded-[2.5rem] blur-2xl pointer-events-none" />

      {/* Floating Refractive Shards */}
      <div
        ref={shard1Ref}
        className="pointer-events-none absolute -top-6 -right-6 w-20 h-20 rounded-2xl border border-white/50 bg-teal-400/10 backdrop-blur-xl shadow-glass hidden sm:block z-0"
        aria-hidden="true"
      />
      <div
        ref={shard2Ref}
        className="pointer-events-none absolute -bottom-6 -left-6 w-16 h-16 rounded-xl border border-white/40 bg-cyan-400/15 backdrop-blur-lg shadow-glass hidden sm:block z-0"
        aria-hidden="true"
      />

      <TiltCard maxTilt={8} scale={1.02} glare className="relative z-10">
        <SpotlightCard
          spotlightColor="rgba(13, 148, 136, 0.18)"
          className="rounded-[2rem] glass-card bg-white/95 p-7 sm:p-9 text-left shadow-2xl border border-white/95 overflow-hidden group"
        >
          {/* Top Security Gradient Stripe */}
          <div className="h-2 -mx-9 -mt-9 mb-7 bg-gradient-to-r from-navy via-teal-600 to-emerald-400" />

          {/* Certificate Header */}
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_8px_#0d9488]" />
                <p className="font-mono text-[0.68rem] tracking-[0.14em] text-teal-800 uppercase font-bold">
                  Extended warranty certificate
                </p>
              </div>
              <h3 className="font-serif text-3xl font-bold text-text-navy">
                NexWarranty
              </h3>
              <p className="font-mono text-[0.62rem] text-text-muted uppercase tracking-wider mt-0.5">
                Authenticity Key: NX–WRT–CERT–2026
              </p>
            </div>

            {/* Holographic Security Shield Foil Seal */}
            <div
              ref={sealRef}
              className="w-14 h-14 rounded-full bg-gradient-to-tr from-teal-600 via-emerald-400 to-cyan-300 p-0.5 shadow-lg flex items-center justify-center shrink-0"
            >
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-inner">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-teal-600 transition-transform duration-300 group-hover:scale-110"
                >
                  <path
                    d="M12 2L4 5V11C4 16.5 7.4 21.6 12 23C16.6 21.6 20 16.5 20 11V5L12 2Z"
                    className="fill-teal-500/20 stroke-teal-600"
                    strokeWidth="1.8"
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

          {/* Certificate Terms Breakdown DL */}
          <dl className="divide-y divide-dashed divide-navy/10 border-y border-dashed border-navy/10 py-1">
            {CERT_ROWS.map(([k, v]) => (
              <div key={k} className="flex items-center justify-between gap-4 py-2.5">
                <dt className="text-xs sm:text-[0.82rem] text-text-muted font-medium">{k}</dt>
                <dd className="text-right text-xs sm:text-[0.86rem] font-semibold text-text-navy">
                  {v}
                </dd>
              </div>
            ))}
          </dl>

          {/* Pricing Summary Footer */}
          <div className="mt-6 pt-2 flex items-end justify-between">
            <div>
              <p className="font-mono text-[0.65rem] tracking-wider text-text-muted uppercase font-semibold">
                Plan price
              </p>
              <p className="font-serif text-2xl font-bold text-text-navy">
                16%{' '}
                <span className="text-xs font-normal text-text-muted font-sans">
                  of device value
                </span>
              </p>
            </div>
            <span className="font-mono text-[0.65rem] px-3 py-1 rounded-full bg-teal-500/10 text-teal-800 border border-teal-500/20 font-bold uppercase tracking-wider">
              Sample plan
            </span>
          </div>
        </SpotlightCard>
      </TiltCard>
    </div>
  );
}
