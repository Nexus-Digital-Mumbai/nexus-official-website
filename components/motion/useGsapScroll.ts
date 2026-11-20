'use client';

import { useLayoutEffect, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export interface UseGsapScrollOptions {
  scope?: React.RefObject<HTMLElement | null>;
  dependencies?: React.DependencyList;
  revertOnUnmount?: boolean;
}

/**
 * useGsapScroll — Strict-mode safe hook for GSAP ScrollTrigger animations.
 * Scopes animations inside a gsap.context() and automatically reverts triggers on unmount.
 */
export function useGsapScroll(
  animationCallback: (context: gsap.Context) => void,
  options: UseGsapScrollOptions = {}
) {
  const { scope, dependencies = [], revertOnUnmount = true } = options;
  const callbackRef = useRef(animationCallback);
  callbackRef.current = animationCallback;

  useIsomorphicLayoutEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context((self) => {
      callbackRef.current(self);
    }, scope?.current || undefined);

    return () => {
      if (revertOnUnmount) {
        ctx.revert();
      }
    };
  }, dependencies);
}
