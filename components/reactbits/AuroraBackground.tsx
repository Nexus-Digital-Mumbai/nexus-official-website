'use client';

import React from 'react';

export interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  showRadialGradient?: boolean;
}

/**
 * AuroraBackground — React Bits component (MIT License)
 * Renders an animated luminous aurora mesh gradient background.
 */
export default function AuroraBackground({
  children,
  className = '',
  showRadialGradient = true,
  ...rest
}: AuroraBackgroundProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center bg-canvas transition-bg ${className}`}
      {...rest}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className={`
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,#2563EB_10%,#06B6D4_15%,#6366F1_20%,#EC4899_25%,#2563EB_30%)]
            [background-image:var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--aurora)] 
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-25 will-change-transform
          `}
        />
        {showRadialGradient && (
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-canvas/80 to-canvas" />
        )}
      </div>
      {children}
    </div>
  );
}
