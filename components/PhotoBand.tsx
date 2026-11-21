import React from 'react';
import Image from 'next/image';
import Container from './Container';

interface PhotoBandProps {
  backgroundImage: string;
  stamp?: string;
  eyebrow: string;
  heading: string;
  description?: string;
  style?: React.CSSProperties;
}

export default function PhotoBand({
  backgroundImage,
  stamp,
  eyebrow,
  heading,
  description,
  style = {},
}: PhotoBandProps) {
  return (
    <section
      className="relative isolate flex min-h-[46vh] items-end overflow-hidden"
      style={style}
    >
      {/* Next.js optimized background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={heading}
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.65] contrast-[1.05]"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
      </div>

      {stamp && (
        <div className="pointer-events-none absolute inset-x-0 top-6.5 z-[2]">
          <Container className="flex justify-end">
            <span className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-3.5 py-1.5 font-mono text-[0.72rem] tracking-[0.1em] text-slate-50 uppercase backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
              <span>{stamp}</span>
            </span>
          </Container>
        </div>
      )}

      <Container className="relative z-[2] w-full">
        <div className="max-w-[720px] py-16 sm:py-20">
          <p className="mb-3 inline-flex items-center gap-2.5 font-mono text-xs tracking-wider text-cyan-400 uppercase font-semibold">
            <span className="h-px w-6 bg-cyan-400" />
            <span>{eyebrow}</span>
          </p>
          <h2 className="mb-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            {heading}
          </h2>
          {description && (
            <p className="max-w-[56ch] text-base sm:text-lg text-slate-200 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
