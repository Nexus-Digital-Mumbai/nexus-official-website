'use client';

import React from 'react';

export interface GlassIconItem {
  icon: React.ReactNode;
  label: string;
  color?: string;
  customClass?: string;
}

export interface GlassIconsProps {
  items: GlassIconItem[];
  className?: string;
}

/**
 * GlassIcons — React Bits component (MIT License)
 * Renders dimensional prismatic glass icon tiles with specular rim lighting.
 */
export default function GlassIcons({ items, className = '' }: GlassIconsProps) {
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`.trim()}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="group relative flex flex-col items-center justify-center p-4 rounded-2xl glass-card w-24 h-24 cursor-pointer select-none"
        >
          {/* Subtle colored glow background */}
          <div
            className="absolute inset-2 rounded-xl opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300"
            style={{ backgroundColor: item.color || '#2563EB' }}
          />

          <div className="relative z-10 text-2xl transition-transform duration-300 group-hover:scale-110 text-navy">
            {item.icon}
          </div>

          <span className="relative z-10 mt-2 text-[0.68rem] font-mono tracking-wider text-text-muted uppercase text-center line-clamp-1">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
