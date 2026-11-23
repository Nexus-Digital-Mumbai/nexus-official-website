'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  separator?: string;
  prefix?: string;
  suffix?: string;
  className?: string;
}

/**
 * <CountUp> — High-performance numeric counter with tabular figures.
 * - Triggered via IntersectionObserver
 * - Exponential ease-out curve
 * - Tabular numbers to prevent layout jitter
 * - Instant fallback for prefers-reduced-motion
 */
export default function CountUp({
  to,
  from = 0,
  duration = 1.8,
  separator = ',',
  prefix = '',
  suffix = '',
  className = '',
}: CountUpProps) {
  const [value, setValue] = useState(from);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(to);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const totalDuration = duration * 1000;

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / totalDuration, 1);
            // Ease-out expo curve
            const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = Math.floor(from + (to - from) * easeOut);

            setValue(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setValue(to);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [from, to, duration]);

  const formatted = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  return (
    <span ref={elementRef} className={`tabular-nums ${className}`.trim()}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
