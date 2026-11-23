'use client';

import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface SmoothScrollProps {
  children: React.ReactNode;
}

/**
 * <SmoothScroll> — Lenis smooth scrolling synced directly to GSAP ticker.
 * - Synced to GSAP ticker for 1:1 timeline & ScrollTrigger alignment
 * - Fully destroyed on unmount, leaving zero leftover styles or overflow locks
 * - Calls ScrollTrigger.refresh() after page and image assets finish loading
 * - Disabled when prefers-reduced-motion is active
 * - Smoothly handles anchor/hash link clicks
 */
export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion: disable smooth scrolling
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let lenis: Lenis | null = null;
    let updateLenis: ((time: number) => void) | null = null;
    let onScroll: (() => void) | null = null;

    try {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
      });

      lenisRef.current = lenis;

      // Synchronize Lenis scroll events with GSAP ScrollTrigger
      onScroll = () => {
        ScrollTrigger.update();
      };
      lenis.on('scroll', onScroll);

      // Connect Lenis to GSAP's high-precision internal RAF ticker
      updateLenis = (time: number) => {
        lenis?.raf(time * 1000);
      };
      gsap.ticker.add(updateLenis);
      gsap.ticker.lagSmoothing(0);

      // Refresh ScrollTrigger once DOM and images settle
      const onWindowLoad = () => {
        ScrollTrigger.refresh();
      };

      if (document.readyState === 'complete') {
        ScrollTrigger.refresh();
      } else {
        window.addEventListener('load', onWindowLoad);
      }

      // Handle anchor / hash link clicks (#pillars, #services, etc.)
      const handleAnchorClick = (e: MouseEvent) => {
        const target = (e.target as HTMLElement)?.closest('a');
        if (!target) return;

        const href = target.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
          const targetEl = document.querySelector(href);
          if (targetEl) {
            e.preventDefault();
            lenis?.scrollTo(targetEl as HTMLElement, { offset: -60, duration: 1.2 });
          }
        }
      };

      document.addEventListener('click', handleAnchorClick);

      return () => {
        try {
          window.removeEventListener('load', onWindowLoad);
          document.removeEventListener('click', handleAnchorClick);
          if (onScroll) lenis?.off('scroll', onScroll);
          if (updateLenis) gsap.ticker.remove(updateLenis);
          lenis?.destroy();
          lenisRef.current = null;

          // Ensure root and body are never left with filter or locked overflow
          if (typeof document !== 'undefined') {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
          }
        } catch {
          // Graceful cleanup
        }
      };
    } catch (err) {
      console.warn('SmoothScroll initialization skipped:', err);
    }
  }, []);

  return <>{children}</>;
}
