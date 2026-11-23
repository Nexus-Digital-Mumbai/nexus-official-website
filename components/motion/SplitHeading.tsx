'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export interface SplitHeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  className?: string;
  delay?: number;
  stagger?: number;
}

/**
 * <SplitHeading> — Accessible GSAP SplitText character/word reveal on existing DOM.
 * - Extracts and retains full original text in `aria-label` for screen readers
 * - Splits characters without dropping inline styling
 * - Runs inside gsap.context() with complete ctx.revert() & split.revert() cleanup
 * - Falls back to static text when prefers-reduced-motion is active
 */
export default function SplitHeading({
  children,
  as: Component = 'h2',
  className = '',
  delay = 0,
  stagger = 0.015,
}: SplitHeadingProps) {
  const headingRef = useRef<HTMLElement>(null);
  const textContentRef = useRef<string>('');

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    // Cache clean text string for screen readers
    textContentRef.current = el.textContent || '';
    if (!el.getAttribute('aria-label')) {
      el.setAttribute('aria-label', textContentRef.current);
    }

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let splitInstance: SplitText | null = null;

    const ctx = gsap.context(() => {
      try {
        splitInstance = new SplitText(el, {
          type: 'words,chars',
          charsClass: 'inline-block will-change-transform',
        });

        gsap.from(splitInstance.chars, {
          opacity: 0,
          y: 20,
          duration: 0.65,
          stagger,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        });
      } catch (err) {
        console.warn('SplitHeading animation skipped:', err);
      }
    }, el);

    return () => {
      try {
        splitInstance?.revert();
      } catch {}
      ctx.revert();
    };
  }, [delay, stagger]);

  return React.createElement(
    Component,
    {
      ref: headingRef,
      className: `${className}`.trim(),
    },
    children
  );
}
