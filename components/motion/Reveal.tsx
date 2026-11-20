'use client';

import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

export type RevealEffect = 'fade-up' | 'blur-in' | 'fade-scale' | 'slide-left' | 'slide-right';

export interface RevealProps {
  children: React.ReactNode;
  effect?: RevealEffect;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  className?: string;
  as?: React.ElementType;
}

export default function Reveal({
  children,
  effect = 'fade-up',
  delay = 0,
  duration = 0.65,
  staggerChildren,
  className = '',
  as: Component = 'div',
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const effectVariants: Record<RevealEffect, Variants> = {
    'fade-up': {
      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: shouldReduceMotion ? 0.01 : duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
          staggerChildren: shouldReduceMotion ? 0 : staggerChildren,
        },
      },
    },
    'blur-in': {
      hidden: {
        opacity: 0,
        filter: shouldReduceMotion ? 'none' : 'blur(12px)',
        y: shouldReduceMotion ? 0 : 16,
      },
      visible: {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        transition: {
          duration: shouldReduceMotion ? 0.01 : duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
          staggerChildren: shouldReduceMotion ? 0 : staggerChildren,
        },
      },
    },
    'fade-scale': {
      hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: shouldReduceMotion ? 0.01 : duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    },
    'slide-left': {
      hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -32 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: shouldReduceMotion ? 0.01 : duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    },
    'slide-right': {
      hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 32 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: shouldReduceMotion ? 0.01 : duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    },
  };

  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={effectVariants[effect]}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
