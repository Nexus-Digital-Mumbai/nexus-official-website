'use client';

import React from 'react';
import Link from 'next/link';
import { brands } from '../data/brands';
import ScrollVelocity from './reactbits/ScrollVelocity';

export default function PartnerTicker() {
  const items = brands.map((b) => ({
    key: b.slug,
    to: `/brands/${b.slug}`,
    text: `Nexus has collaborated with ${b.name} for ${b.partner}`,
  }));

  if (!items.length) return null;

  return (
    <div
      className="relative z-30 w-full pt-24 sm:pt-28 pb-1"
      role="region"
      aria-label="Partner news"
    >
      <div className="mx-auto max-w-[1060px] px-4 sm:px-6">
        <div className="glass-pill px-4 py-1.5 border border-white/85 shadow-sm backdrop-blur-xl bg-white/70 overflow-hidden flex items-center">
          <ScrollVelocity baseVelocity={1.1} className="text-xs sm:text-[0.8rem] font-medium text-text-navy">
            {items.map((it) => (
              <Link
                key={it.key}
                href={it.to}
                className="inline-flex items-center gap-3.5 transition-colors hover:text-primary-electric px-4 group"
              >
                <span className="font-mono text-[0.65rem] px-1.5 py-0.5 rounded bg-primary-electric/10 text-primary-electric uppercase tracking-wider font-semibold group-hover:bg-primary-electric group-hover:text-white transition-colors shrink-0">
                  PARTNERSHIP
                </span>
                <span className="whitespace-nowrap">{it.text}</span>
                <span className="text-[8px] text-accent-cyan shrink-0" aria-hidden="true">
                  ◆
                </span>
              </Link>
            ))}
          </ScrollVelocity>
        </div>
      </div>
    </div>
  );
}
