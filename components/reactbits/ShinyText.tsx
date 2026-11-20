'use client';

import React from 'react';

export interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

/**
 * ShinyText — React Bits component (MIT License)
 * Renders high-speed specular shimmer sheen across text.
 */
export default function ShinyText({
  text,
  disabled = false,
  speed = 3,
  className = '',
}: ShinyTextProps) {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block bg-clip-text text-transparent bg-gradient-to-r from-navy via-primary-electric to-navy bg-[length:200%_100%] ${
        disabled ? '' : 'animate-shimmer'
      } ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(9, 33, 71, 0.9) 0%, rgba(37, 99, 235, 1) 50%, rgba(9, 33, 71, 0.9) 100%)',
        animationDuration,
      }}
    >
      {text}
    </span>
  );
}
