'use client';

import { useEffect } from 'react';

/**
 * useScrollReveal — Extended AOS-style scroll reveal hook.
 *
 * Supported data attributes on any element with [data-reveal]:
 *   data-animate  = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in"
 *                   Defaults to "fade-up" if omitted.
 *   data-delay    = number in ms (e.g. "100", "200"). Applied as transition-delay.
 *   data-duration = number in ms (e.g. "600"). Applied as transition-duration.
 */

const INIT_STATES: Record<string, { opacity: string; transform: string }> = {
  'fade-up':    { opacity: '0', transform: 'translateY(40px)' },
  'fade-down':  { opacity: '0', transform: 'translateY(-40px)' },
  'fade-left':  { opacity: '0', transform: 'translateX(50px)' },
  'fade-right': { opacity: '0', transform: 'translateX(-50px)' },
  'zoom-in':    { opacity: '0', transform: 'scale(0.88)' },
};

const END_STATE = { opacity: '1', transform: 'none' };

export default function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');

    // Apply starting states
    elements.forEach((el) => {
      if (prefersReducedMotion) return;

      const animate  = el.dataset.animate  || 'fade-up';
      const delay    = el.dataset.delay    || '0';
      const duration = el.dataset.duration || '700';

      const init = INIT_STATES[animate] || INIT_STATES['fade-up'];

      Object.assign(el.style, {
        ...init,
        transition: `opacity ${duration}ms cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}ms,
                     transform ${duration}ms cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      });
    });

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.setAttribute('data-visible', 'true');

            if (!prefersReducedMotion) {
              Object.assign(el.style, END_STATE);
            }

            obs.unobserve(el);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -60px 0px', threshold: 0.08 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
