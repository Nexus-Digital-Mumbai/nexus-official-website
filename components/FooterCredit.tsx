'use client';

import React from 'react';
import Image from 'next/image';

export default function FooterCredit() {
  return (
    <div className="inline-flex items-center gap-2.5 sm:gap-3 text-xs text-slate-400">
      <span className="shrink-0 text-slate-400">Design &amp; Developed by</span>
      <a
        href="https://www.dimisi.tech/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="DIMISI, visit dimisi.tech"
        className="group relative inline-flex items-center justify-center rounded-md p-0.5 transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 motion-reduce:transform-none motion-reduce:transition-none cursor-pointer"
      >
        {/* Transparent logo container with chrome sheen sweep */}
        <div className="relative inline-flex items-center overflow-hidden">
          <Image
            src="/assets/dimisi-logo.png"
            alt="DIMISI"
            width={132}
            height={44}
            quality={100}
            loading="lazy"
            className="h-[38px] lg:h-[44px] w-auto object-contain transition-all duration-300 drop-shadow-[0_1px_4px_rgba(255,255,255,0.12)] group-hover:drop-shadow-[0_0_16px_rgba(56,189,248,0.5)] group-hover:brightness-110 motion-reduce:transition-none"
          />
          {/* Light chrome sheen sweep across the logo */}
          <span
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full motion-reduce:hidden"
            style={{
              WebkitMaskImage: 'url(/assets/dimisi-logo.png)',
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskImage: 'url(/assets/dimisi-logo.png)',
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
            }}
            aria-hidden="true"
          />
        </div>
      </a>
    </div>
  );
}
