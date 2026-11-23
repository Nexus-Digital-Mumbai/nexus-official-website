'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function HeroAmbientMesh() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      // Continuously drifting multi-blob mesh/aurora background
      gsap.to(blob1Ref.current, {
        x: '+=80',
        y: '+=60',
        scale: 1.15,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(blob2Ref.current, {
        x: '-=70',
        y: '+=50',
        scale: 0.9,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1,
      });

      gsap.to(blob3Ref.current, {
        x: '+=50',
        y: '-=60',
        scale: 1.12,
        duration: 16,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Blob 1: Soft Electric Blue (#1F5BFF) */}
      <div
        ref={blob1Ref}
        className="absolute -top-24 -left-20 w-[480px] h-[480px] rounded-full blur-[130px] opacity-25 will-change-transform"
        style={{ backgroundColor: '#1F5BFF' }}
      />

      {/* Blob 2: Ice Cyan (#38BDF8) */}
      <div
        ref={blob2Ref}
        className="absolute top-1/4 -right-24 w-[520px] h-[520px] rounded-full blur-[140px] opacity-20 will-change-transform"
        style={{ backgroundColor: '#38BDF8' }}
      />

      {/* Blob 3: Pale Lavender-Violet (#C4B5FD) */}
      <div
        ref={blob3Ref}
        className="absolute -bottom-24 left-1/4 w-[460px] h-[460px] rounded-full blur-[130px] opacity-20 will-change-transform"
        style={{ backgroundColor: '#C4B5FD' }}
      />
    </div>
  );
}
