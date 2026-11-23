'use client';

import React, { useRef } from 'react';
import useGsapScroll from './useGsapScroll';
import gsap from 'gsap';

export interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number; // e.g., 0.2 = floats slightly up as you scroll down
  className?: string;
}

/**
 * <ParallaxLayer> — Hardware-accelerated parallax layer for decorative elements only.
 * - Animates only transform: translate3d (zero layout reflow)
 * - Strict prefers-reduced-motion fallback
 * - Auto-reverted when unmounted
 */
export default function ParallaxLayer({
  children,
  speed = 0.2,
  className = '',
}: ParallaxLayerProps) {
  const layerRef = useRef<HTMLDivElement>(null);

  useGsapScroll(layerRef, () => {
    if (!layerRef.current) return;

    gsap.to(layerRef.current, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: layerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  return (
    <div
      ref={layerRef}
      className={`will-change-transform ${className}`.trim()}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}
