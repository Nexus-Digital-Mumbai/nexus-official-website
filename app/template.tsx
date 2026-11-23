'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Route Transition Template
 * - Soft fade + 12px rise on route change
 * - ZERO filter or blur (ensures instant sharpness)
 * - Clears transform and will-change immediately upon animation completion
 * - Respects prefers-reduced-motion
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{
        opacity: 1,
        y: 0,
        transitionEnd: {
          transform: 'none',
          willChange: 'auto',
        },
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
