import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* ─── Icon marks ───────────────────────────────────────────────────────── */
function ITMark() {
  return (
    <>
      <path d="M9 7 4 12l5 5" />
      <path d="m15 7 5 5-5 5" />
      <path d="m13.5 5-3 14" />
    </>
  );
}

function LockMark() {
  return (
    <>
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <path d="M5 10h14v5c0 3.5-3.2 5.6-7 7-3.8-1.4-7-3.5-7-7z" />
      <circle cx="12" cy="15" r="1.3" />
      <path d="M12 16.3v2" />
    </>
  );
}

function WarrantyMark() {
  return (
    <>
      <path d="M12 2.5 4.5 5.5v6c0 4.8 3.2 8.3 7.5 10 4.3-1.7 7.5-5.2 7.5-10v-6z" />
      <path d="m8.5 12 2.4 2.4 4.6-4.8" />
    </>
  );
}

const MARKS: Record<string, () => React.JSX.Element> = {
  'it-solutions': ITMark,
  nexlock: LockMark,
  nexwarranty: WarrantyMark,
};

const TILE: Record<string, string> = {
  'it-solutions': 'bg-gradient-to-br from-navy to-indigo-600',
  nexlock: 'bg-gradient-to-br from-[#0c1b33] to-blue-600',
  nexwarranty: 'bg-gradient-to-br from-[#092147] to-teal-600',
};

export function PillarIcon({ id, size = 'h-13 w-13', iconSize = 26, className = '' }: { id: string; size?: string; iconSize?: number; className?: string }) {
  const Mark = MARKS[id] || ITMark;
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-xl text-white shadow-[0_8px_20px_rgba(9,33,71,0.18)] ${TILE[id] || TILE['it-solutions']} ${size} ${className}`}
      aria-hidden="true"
    >
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <Mark />
      </svg>
    </span>
  );
}

const WORDMARKS: Record<string, { stem: string; rest: string; restClass: string; restDark: string; gap?: boolean }> = {
  'it-solutions': { stem: 'NEXUS', rest: 'IT SOLUTIONS', restClass: 'text-cyan-600', restDark: 'text-cyan-400', gap: true },
  nexlock: { stem: 'NEX', rest: 'LOCK', restClass: 'text-blue-600', restDark: 'text-blue-400' },
  nexwarranty: { stem: 'NEX', rest: 'WARRANTY', restClass: 'text-teal-600', restDark: 'text-teal-300' },
};

export function Wordmark({ id, onDark = false, className = 'text-2xl' }: { id: string; onDark?: boolean; className?: string }) {
  const w = WORDMARKS[id] || WORDMARKS['it-solutions'];
  return (
    <span className={`font-display leading-tight font-bold tracking-[0.06em] ${className}`}>
      <span className={`whitespace-nowrap ${onDark ? 'text-white' : 'text-navy'}`}>{w.stem}</span>
      {w.gap && ' '}
      <span className={`whitespace-nowrap ${onDark ? w.restDark : w.restClass}`}>{w.rest}</span>
    </span>
  );
}

export function PillarBadge({ kind = 'product', onDark = false, className = '' }: { kind?: 'product' | 'services'; onDark?: boolean; className?: string }) {
  const label = kind === 'product' ? 'A Nexus product' : 'Nexus · Client services';
  return (
    <Link
      href="/#pillars"
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[0.7rem] tracking-[0.12em] uppercase transition-colors ${
        onDark
          ? 'border-white/25 bg-white/5 text-slate-200 hover:border-white/50'
          : 'border-navy/15 bg-white/70 text-navy hover:border-navy/40'
      } ${className}`}
    >
      <Image src="/favicon-32.png" alt="" width={14} height={14} className="h-3.5 w-3.5" />
      {label}
    </Link>
  );
}
