'use client';

import React, { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from 'framer-motion';

export interface ScrollVelocityProps {
  children: React.ReactNode;
  baseVelocity?: number;
  className?: string;
}

/**
 * ScrollVelocity — React Bits component (MIT License)
 * Smooth continuous text/logo marquee that accelerates and reacts to page scroll velocity,
 * and cleanly pauses when hovered.
 */
export default function ScrollVelocity({
  children,
  baseVelocity = 2,
  className = '',
}: ScrollVelocityProps) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${(v % 50) - 50}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((_, delta) => {
    if (isHovered || shouldReduceMotion) return;

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`overflow-hidden whitespace-nowrap flex flex-nowrap ${className}`}
    >
      <motion.div className="flex flex-nowrap shrink-0 gap-8" style={{ x }}>
        {[0, 1, 2, 3].map((copyIndex) => (
          <React.Fragment key={copyIndex}>
            {React.Children.map(children, (child, itemIndex) =>
              React.isValidElement(child)
                ? React.cloneElement(child, {
                    key: `velocity-${copyIndex}-${child.key ?? itemIndex}`,
                  } as any)
                : child
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
