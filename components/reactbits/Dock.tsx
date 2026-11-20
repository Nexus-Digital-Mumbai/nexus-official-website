'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion';

export interface DockItemProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  href?: string;
}

export interface DockProps {
  items: DockItemProps[];
  className?: string;
}

function DockIcon({
  icon,
  label,
  mouseX,
  onClick,
}: DockItemProps & { mouseX: MotionValue<number> }) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-120, 0, 120], [42, 64, 42]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 200, damping: 14 });

  return (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      onClick={onClick}
      className="glass-card aspect-square rounded-full flex items-center justify-center cursor-pointer relative group text-navy"
    >
      <div className="text-xl">{icon}</div>
      <span className="absolute -top-8 px-2 py-0.5 rounded text-[0.65rem] font-mono uppercase bg-navy text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  );
}

/**
 * Dock — React Bits component (MIT License)
 * Interactive magnifying dock container.
 */
export default function Dock({ items, className = '' }: DockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`glass-pill px-4 py-2.5 inline-flex items-center gap-3 ${className}`.trim()}
    >
      {items.map((item, index) => (
        <DockIcon key={index} mouseX={mouseX} {...item} />
      ))}
    </div>
  );
}
