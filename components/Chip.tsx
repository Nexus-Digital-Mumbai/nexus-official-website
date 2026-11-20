import React from 'react';

export type ChipDot = 'cyan' | 'blue' | 'teal' | 'pink' | 'emerald' | 'amber' | 'navy' | 'none';
export type ChipVariant = 'glass' | 'tinted' | 'mono' | 'outline' | 'alert';
export type ChipSize = 'sm' | 'md';

export interface ChipProps {
  children: React.ReactNode;
  dot?: ChipDot;
  variant?: ChipVariant;
  size?: ChipSize;
  icon?: React.ReactNode;
  className?: string;
}

const dotColors: Record<ChipDot, string> = {
  cyan: 'bg-accent-cyan shadow-[0_0_8px_rgba(6,182,212,0.8)]',
  blue: 'bg-primary-electric shadow-[0_0_8px_rgba(37,99,235,0.8)]',
  teal: 'bg-accent-teal shadow-[0_0_8px_rgba(13,148,136,0.8)]',
  pink: 'bg-accent-pink shadow-[0_0_8px_rgba(236,72,153,0.8)]',
  emerald: 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]',
  amber: 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]',
  navy: 'bg-navy shadow-[0_0_6px_rgba(9,33,71,0.4)]',
  none: '',
};

export default function Chip({
  children,
  dot = 'none',
  variant = 'glass',
  size = 'md',
  icon,
  className = '',
}: ChipProps) {
  const sizeClasses: Record<ChipSize, string> = {
    sm: 'text-[0.72rem] px-2.5 py-1 gap-1.5',
    md: 'text-[0.8rem] px-3.5 py-1.5 gap-2',
  };

  const variantClasses: Record<ChipVariant, string> = {
    glass:
      'glass-pill text-text-navy font-medium shadow-sm hover:shadow transition-shadow',
    tinted:
      'bg-primary-electric/8 text-primary-electric border border-primary-electric/20 font-medium rounded-full',
    mono:
      'font-mono uppercase tracking-wider text-[0.72rem] bg-navy/5 text-navy border border-navy/12 rounded-md font-semibold',
    outline:
      'border border-line bg-white/50 backdrop-blur-sm text-text-navy rounded-full font-medium',
    alert:
      'bg-red-50 text-red-600 border border-red-200/80 rounded-full font-medium shadow-sm',
  };

  return (
    <span
      className={`inline-flex items-center select-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`.trim()}
    >
      {dot !== 'none' && (
        <span
          className={`h-2 w-2 rounded-full shrink-0 ${dotColors[dot]}`}
          aria-hidden="true"
        />
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="leading-tight">{children}</span>
    </span>
  );
}
