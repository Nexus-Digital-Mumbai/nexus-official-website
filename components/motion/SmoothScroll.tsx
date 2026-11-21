'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    try {
      const lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.8,
      });

      // Synchronize Lenis scroll events with GSAP ScrollTrigger
      // Wrapped in an anonymous zero-argument function to prevent Lenis event object
      // from colliding with GSAP ScrollTrigger.update(reset, all) parameters
      const onScroll = () => {
        ScrollTrigger.update();
      };

      lenis.on('scroll', onScroll);

      const updateLenis = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(updateLenis);
      gsap.ticker.lagSmoothing(0);

      return () => {
        try {
          lenis.off('scroll', onScroll);
          gsap.ticker.remove(updateLenis);
          lenis.destroy();
        } catch {
          // graceful cleanup
        }
      };
    } catch (err) {
      console.warn('SmoothScroll skipped:', err);
    }
  }, []);

  return <>{children}</>;
}
