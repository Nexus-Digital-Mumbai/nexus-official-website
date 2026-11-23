'use client';

import { useState, useEffect } from 'react';

/**
 * useIsDesktop — SSR-safe breakpoint hook for 1024px desktop boundary.
 * Listens to both matchMedia and window resize events to guarantee instant,
 * 100% reliable synchronization on all viewports, devices, and orientation changes.
 */
export function useIsDesktop(): boolean | null {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => {
      if (typeof window !== 'undefined') {
        setIsDesktop(window.innerWidth >= 1024);
      }
    };

    check();

    window.addEventListener('resize', check, { passive: true });

    let mql: MediaQueryList | null = null;
    try {
      mql = window.matchMedia('(min-width: 1024px)');
      mql.addEventListener('change', check);
    } catch {}

    return () => {
      window.removeEventListener('resize', check);
      if (mql) {
        try {
          mql.removeEventListener('change', check);
        } catch {}
      }
    };
  }, []);

  return isDesktop;
}
