'use client';

import React from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

export interface ScrollProgressProps {
  className?: string;
  color?: string;
}

/**
 * <ScrollProgress> — Precision reading & scroll progress indicator bar.
 * - Hardware-accelerated scaleX transform (zero layout reflow)
 * - Pinned to the top of the viewport
 * - Fallback for prefers-reduced-motion
 */
export default function ScrollProgress({
  className = '',
}: ScrollProgressProps) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      style={{ scaleX }}
      className={`fixed top-0 left-0 right-0 h-[2.5px] origin-left z-[1000] pointer-events-none bg-gradient-to-r from-primary-electric via-accent-cyan to-accent-violet ${className}`.trim()}
      aria-hidden="true"
    />
  );
}
