import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { registerGsapPlugins, isReducedMotion } from './motionTokens';

/**
 * useScrollAnimation — Lifecycle-safe GSAP ScrollTrigger hook using gsap.context().
 * Executes the provided animation callback with ScrollTrigger, automatically cleaning
 * up all triggers and tweens when the component unmounts.
 */
export default function useScrollAnimation(scopeRef, callback, deps = []) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    registerGsapPlugins();

    if (isReducedMotion()) {
      // If user prefers reduced motion, set elements visible immediately without transitions
      if (scopeRef.current) {
        gsap.set(scopeRef.current.querySelectorAll('[data-animate-target]'), {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          clearProps: 'transform,opacity',
        });
      }
      return;
    }

    const ctx = gsap.context(() => {
      callback(gsap, ScrollTrigger);
    }, scopeRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
