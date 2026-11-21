import React from 'react';
import Link from 'next/link';
import Container from './Container';

interface CtaButton {
  label: string;
  to: string;
  secondary?: boolean;
}

interface StatItem {
  countTo?: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface HeroSectionProps {
  compact?: boolean;
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  lede?: React.ReactNode;
  ctaButtons?: CtaButton[];
  stats?: StatItem[];
  showSeal?: boolean;
  aside?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

export default function HeroSection({
  compact = false,
  eyebrow,
  title,
  lede,
  ctaButtons = [],
  stats = [],
  showSeal = false,
  aside = null,
  style = {},
  className = '',
  children,
}: HeroSectionProps) {
  return (
    <header
      className={`relative overflow-hidden pt-28 sm:pt-36 pb-16 ${
        compact ? 'min-h-[58vh] pb-12 text-center' : 'min-h-[90vh]'
      } ${className}`.trim()}
      style={style}
      id="home"
    >
      {(showSeal || aside) && (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-50 -left-50 h-150 w-150 animate-drift rounded-full bg-cyan-500 opacity-25 mix-blend-multiply blur-[120px]" />
          <div className="absolute -right-25 -bottom-25 h-125 w-125 animate-drift rounded-full bg-pink-500 opacity-25 mix-blend-multiply blur-[120px] [animation-delay:-6s]" />
          <div className="absolute top-[30%] right-[10%] h-100 w-100 animate-drift rounded-full bg-indigo-600 opacity-20 mix-blend-multiply blur-[140px] [animation-direction:alternate-reverse]" />
        </div>
      )}

      <Container
        className={`relative z-10 grid items-center gap-8 ${
          compact ? '' : 'min-[900px]:grid-cols-[1.1fr_0.9fr]'
        }`}
      >
        <div
          className={
            compact
              ? 'mx-auto max-w-[720px] text-center'
              : 'mx-auto max-w-[720px] text-center min-[900px]:mx-0 min-[900px]:max-w-none min-[900px]:text-left'
          }
        >
          {eyebrow && (
            <p className="mb-4.5 inline-flex items-center gap-2.5 font-mono text-[0.78rem] tracking-[0.14em] text-navy uppercase before:h-px before:w-5.5 before:bg-pink-500 before:content-['']">
              {eyebrow}
            </p>
          )}
          {title && (
            <h1 className="mb-4.5 translate-y-7 text-[clamp(2.4rem,4.6vw,4.2rem)] leading-[1.05] opacity-0 animate-fade-up">
              {title}
            </h1>
          )}
          {lede && (
            <p
              className={`mx-auto mb-9 max-w-[46ch] translate-y-6 text-[clamp(1.05rem,1.6vw,1.25rem)] text-slate-600 opacity-0 animate-fade-up [animation-delay:150ms] ${
                compact ? '' : 'min-[900px]:mx-0'
              }`}
            >
              {lede}
            </p>
          )}
          {children}

          {ctaButtons.length > 0 && (
            <div
              className={`mb-12 flex translate-y-5 flex-wrap gap-4 opacity-0 animate-fade-up [animation-delay:300ms] ${
                compact ? 'justify-center' : ''
              }`}
            >
              {ctaButtons.map((btn, i) => (
                <Link
                  key={i}
                  href={btn.to}
                  className={
                    btn.secondary
                      ? 'inline-flex items-center gap-2 rounded-lg border border-line px-8 py-3.5 text-base font-semibold text-navy transition hover:border-navy hover:bg-paper-raised hover:backdrop-blur-2xl'
                      : 'inline-flex items-center gap-2 rounded-lg bg-navy px-8 py-3.5 text-base font-semibold text-white shadow-[0_8px_20px_rgba(9,33,71,0.2)] transition hover:-translate-y-0.5 hover:bg-indigo-600'
                  }
                >
                  {btn.label} {!btn.secondary && <span aria-hidden="true">&rarr;</span>}
                </Link>
              ))}
            </div>
          )}

          {stats.length > 0 && (
            <div
              className={`grid max-w-[520px] grid-cols-3 gap-6 border-t border-line pt-8 opacity-0 animate-fade-up [animation-delay:450ms] ${
                compact ? 'mx-auto' : 'mx-auto min-[900px]:mx-0'
              }`}
            >
              {stats.map((s, i) => (
                <div key={i} className="text-left">
                  <span
                    className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-navy"
                    data-count-to={s.countTo}
                    data-prefix={s.prefix}
                    data-suffix={s.suffix}
                  >
                    {s.prefix}{s.countTo}{s.suffix}
                  </span>
                  <span className="block text-[0.82rem] text-slate-500">{s.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {aside && <div className="flex justify-center">{aside}</div>}
      </Container>
    </header>
  );
}
