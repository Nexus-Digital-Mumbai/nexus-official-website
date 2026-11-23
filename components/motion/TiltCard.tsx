'use client';

import React, { useRef, useState, useCallback } from 'react';

export interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  spotlight?: boolean;
  glare?: boolean;
  className?: string;
}

/**
 * <TiltCard> — Interactive 3D perspective tilt card with cursor spotlight.
 * - Hardware-accelerated 3D transform (rotateX, rotateY, scale3d)
 * - Cursor spotlight & glare beam that follows pointer
 * - Automatically disabled on touch / mobile and prefers-reduced-motion
 * - will-change set only while active
 */
export default function TiltCard({
  children,
  maxTilt = 7,
  perspective = 1100,
  scale = 1.015,
  spotlight = true,
  glare = true,
  className = '',
  ...rest
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [spotlightStyle, setSpotlightStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const hasSpotlight = spotlight || glare;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // Disable on touch devices or prefers-reduced-motion
      if (
        typeof window !== 'undefined' &&
        (window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
          window.matchMedia('(pointer: coarse)').matches)
      ) {
        return;
      }

      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      setStyle({
        transform: `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: 'transform 0.08s ease-out',
      });

      if (hasSpotlight) {
        setSpotlightStyle({
          opacity: 1,
          background: `radial-gradient(circle 240px at ${x}px ${y}px, rgba(37, 99, 235, 0.12), rgba(6, 182, 212, 0.06), transparent 70%)`,
          transition: 'opacity 0.15s ease-out',
        });
      }
    },
    [maxTilt, perspective, scale, hasSpotlight]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
    });
    if (hasSpotlight) {
      setSpotlightStyle({
        opacity: 0,
        transition: 'opacity 0.35s ease-out',
      });
    }
  }, [perspective, hasSpotlight]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative ${isHovered ? 'will-change-transform' : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
      {hasSpotlight && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden"
          style={spotlightStyle}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
