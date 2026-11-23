'use client';

import React, { useState, useEffect } from 'react';
import { LazyMotion, domAnimation, m, useReducedMotion, type Variants } from 'framer-motion';

export type RevealDirection = 'left' | 'right' | 'up' | 'down' | 'scale' | 'none';
export type LegacyRevealEffect = 'fade-up' | 'blur-in' | 'fade-scale' | 'slide-left' | 'slide-right';

export interface RevealProps {
  children: React.ReactNode;
  from?: RevealDirection;
  effect?: LegacyRevealEffect | string;
  delay?: number;
  distance?: number;
  duration?: number;
  stagger?: number;
  staggerChildren?: number;
  once?: boolean;
  className?: string;
  as?: keyof typeof m | React.ElementType;
}

/**
 * <Reveal> — Lightweight entrance animation built on Framer Motion's LazyMotion + domAnimation.
 * - Supports `from="left|right|up|down|scale|none"` (and legacy `effect` prop)
 * - Defaults: distance 80px desktop / 32px mobile
 * - Opacity 0 to 1, transform only (ZERO blur, preventing viewport blur bugs)
 * - Duration: 0.8s, Ease: [0.22, 1, 0.36, 1]
 * - Initial hidden state applies ONLY after client mount (content is fully visible by default)
 * - Elements already in the viewport on load animate to visible immediately (viewport margin: 0px)
 * - Full prefers-reduced-motion fallback
 */
export default function Reveal({
  children,
  from,
  effect,
  delay = 0,
  distance,
  duration = 0.8,
  stagger,
  staggerChildren,
  once = true,
  className = '',
  as: Component = 'div',
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Map legacy effect to direction if from is not passed
  let resolvedDirection: RevealDirection = from || 'up';
  if (!from && effect) {
    if (effect === 'fade-up' || effect === 'blur-in') resolvedDirection = 'up';
    else if (effect === 'fade-scale') resolvedDirection = 'scale';
    else if (effect === 'slide-left') resolvedDirection = 'left';
    else if (effect === 'slide-right') resolvedDirection = 'right';
  }

  const effectiveDistance = distance !== undefined ? distance : isMobile ? 24 : 48;
  const effectiveStagger = stagger ?? staggerChildren;

  // Before client mount or when reduced motion is preferred: render content completely visible and static
  if (!mounted || shouldReduceMotion) {
    const Tag = Component as React.ElementType;
    return <Tag className={className}>{children}</Tag>;
  }

  const getHiddenVariant = () => {
    const base: Record<string, any> = {
      opacity: 0,
    };

    switch (resolvedDirection) {
      case 'up':
        base.y = effectiveDistance;
        break;
      case 'down':
        base.y = -effectiveDistance;
        break;
      case 'left':
        base.x = -effectiveDistance;
        break;
      case 'right':
        base.x = effectiveDistance;
        break;
      case 'scale':
        base.scale = 0.95;
        break;
      case 'none':
        break;
    }

    return base;
  };

  const getVisibleVariant = () => {
    return {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
        ...(effectiveStagger ? { staggerChildren: effectiveStagger } : {}),
      },
      transitionEnd: {
        transform: 'none',
      },
    };
  };

  const variants: Variants = {
    hidden: getHiddenVariant() as any,
    visible: getVisibleVariant() as any,
  };

  const MotionComponent = (m as unknown as Record<string, React.ComponentType<any>>)[Component as string] || m.div;

  return (
    <LazyMotion features={domAnimation}>
      <MotionComponent
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: '0px', once }}
        variants={variants}
        className={className}
      >
        {children}
      </MotionComponent>
    </LazyMotion>
  );
}
