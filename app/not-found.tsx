import React from 'react';
import Link from 'next/link';
import Container from '../components/Container';
import Eyebrow from '../components/Eyebrow';

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center pt-32 pb-20 px-4 relative overflow-hidden bg-aurora">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent-cyan/15 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary-electric/15 blur-[130px]" />
      </div>

      <Container size="narrow" className="relative z-10 text-center">
        <div className="glass-card bg-white/90 p-8 sm:p-14 rounded-3xl border border-white/95 shadow-glass-lg max-w-2xl mx-auto">
          <Eyebrow code="NX–404">PAGE NOT FOUND</Eyebrow>

          <h1 className="mt-4 text-6xl sm:text-7xl font-serif font-black text-navy tracking-tight">
            404
          </h1>

          <h2 className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-text-navy">
            Looking for something else?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-text-body leading-relaxed max-w-md mx-auto">
            The page you requested could not be found or may have moved. Explore our main pillars below:
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-slate-800 transition-all"
            >
              &larr; Return Home
            </Link>
            <Link
              href="/it-solutions"
              className="inline-flex items-center gap-2 rounded-full glass-card bg-white/80 px-5 py-3 text-sm font-semibold text-navy hover:bg-white transition-all border border-navy/10"
            >
              IT Solutions
            </Link>
            <Link
              href="/nexlock"
              className="inline-flex items-center gap-2 rounded-full glass-card bg-white/80 px-5 py-3 text-sm font-semibold text-navy hover:bg-white transition-all border border-navy/10"
            >
              NexLock
            </Link>
            <Link
              href="/nexwarrenty"
              className="inline-flex items-center gap-2 rounded-full glass-card bg-white/80 px-5 py-3 text-sm font-semibold text-navy hover:bg-white transition-all border border-navy/10"
            >
              NexWarranty
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
