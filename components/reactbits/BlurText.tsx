'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
}

/**
 * BlurText — React Bits component (MIT License)
 * Text reveals with an animated blur reduction and subtle vertical translation.
 */
export default function BlurText({
  text,
  delay = 0.05,
  className = '',
  animateBy = 'words',
  direction = 'top',
}: BlurTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const yOffset = direction === 'top' ? -18 : 18;

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: delay,
          },
        },
      }}
    >
      {elements.map((segment, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { filter: 'blur(10px)', opacity: 0, y: yOffset },
            visible: {
              filter: 'blur(0px)',
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              },
            },
          }}
        >
          {segment}
          {animateBy === 'words' && i < elements.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </motion.span>
  );
}
