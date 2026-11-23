'use client';

import { useLayoutEffect, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export type GsapScrollBuilder = (context: gsap.Context) => void;

export interface UseGsapScrollOptions {
  scope?: React.RefObject<HTMLElement | null>;
  dependencies?: React.DependencyList;
  revertOnUnmount?: boolean;
}

/**
 * useGsapScroll — Strict-mode safe hook for GSAP ScrollTrigger animations.
 * Supports both signatures:
 * 1. useGsapScroll(ref, build, deps?)
 * 2. useGsapScroll(build, options?)
 */
export function useGsapScroll(
  targetOrBuild: React.RefObject<HTMLElement | null> | GsapScrollBuilder,
  buildOrOptions?: GsapScrollBuilder | UseGsapScrollOptions,
  deps: React.DependencyList = []
) {
  // Disambiguate arguments
  const isTargetFirst = typeof targetOrBuild !== 'function';
  const targetRef = isTargetFirst ? (targetOrBuild as React.RefObject<HTMLElement | null>) : undefined;
  const buildCallback = (isTargetFirst ? buildOrOptions : targetOrBuild) as GsapScrollBuilder;
  const options = (!isTargetFirst && typeof buildOrOptions === 'object' ? buildOrOptions : undefined) as UseGsapScrollOptions | undefined;

  const dependencies = isTargetFirst ? deps : (options?.dependencies || []);
  const scopeRef = targetRef || options?.scope;

  const callbackRef = useRef(buildCallback);
  callbackRef.current = buildCallback;

  useIsomorphicLayoutEffect(() => {
    // Check prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const scopeElement = scopeRef?.current || undefined;

    const ctx = gsap.context((self) => {
      callbackRef.current(self);
    }, scopeElement);

    // Refresh ScrollTrigger when images load to ensure trigger positions are pixel-accurate
    const refreshScrollTriggers = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', refreshScrollTriggers);

    // Also monitor image loads within target scope if scopeElement is provided
    let scopedImages: NodeListOf<HTMLImageElement> | undefined;
    if (scopeElement) {
      scopedImages = scopeElement.querySelectorAll('img');
      scopedImages.forEach((img) => {
        if (!img.complete) {
          img.addEventListener('load', refreshScrollTriggers, { once: true });
        }
      });
    }

    return () => {
      window.removeEventListener('load', refreshScrollTriggers);
      if (scopedImages) {
        scopedImages.forEach((img) => {
          img.removeEventListener('load', refreshScrollTriggers);
        });
      }
      ctx.revert();
    };
  }, dependencies);
}

export default useGsapScroll;
