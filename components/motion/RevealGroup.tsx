'use client';

import React from 'react';
import Reveal, { type RevealDirection } from './Reveal';

export interface RevealGroupProps {
  children: React.ReactNode;
  stagger?: number;
  alternate?: boolean;
  baseDirection?: RevealDirection;
  distance?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

/**
 * <RevealGroup> — Automatically staggers child elements with entrance transitions.
 * - stagger: default 0.08s
 * - alternate: alternates entrance direction (left/right) by child index
 */
export default function RevealGroup({
  children,
  stagger = 0.08,
  alternate = false,
  baseDirection = 'up',
  distance,
  duration = 0.8,
  once = true,
  className = '',
}: RevealGroupProps) {
  const childArray = React.Children.toArray(children);

  return (
    <div className={className}>
      {childArray.map((child, index) => {
        let direction: RevealDirection = baseDirection;

        if (alternate) {
          direction = index % 2 === 0 ? 'left' : 'right';
        }

        return (
          <Reveal
            key={React.isValidElement(child) && child.key ? child.key : index}
            from={direction}
            delay={index * stagger}
            distance={distance}
            duration={duration}
            once={once}
          >
            {child}
          </Reveal>
        );
      })}
    </div>
  );
}
