import React from 'react';

export interface EyebrowProps {
  children: React.ReactNode;
  onDark?: boolean;
  code?: string;
  className?: string;
}

export default function Eyebrow({
  children,
  onDark = false,
  code,
  className = '',
}: EyebrowProps) {
  return (
    <div
      className={`mb-4 inline-flex items-center gap-2.5 font-mono text-[0.78rem] tracking-[0.14em] uppercase font-semibold ${
        onDark ? 'text-cyan-400' : 'text-navy'
      } ${className}`.trim()}
    >
      <span className="h-px w-5.5 bg-pink-500 shrink-0" aria-hidden="true" />
      {code && (
        <span
          className={`px-1.5 py-0.5 rounded text-[0.7rem] font-mono tracking-wider ${
            onDark
              ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-400/20'
              : 'bg-navy/5 text-navy border border-navy/10'
          }`}
        >
          {code}
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}
