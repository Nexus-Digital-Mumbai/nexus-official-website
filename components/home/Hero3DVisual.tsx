'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Hero3DVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nLogoRef = useRef<HTMLDivElement>(null);
  const ring1Ref = useRef<HTMLDivElement>(null);
  const ring2Ref = useRef<HTMLDivElement>(null);
  const sphere1Ref = useRef<HTMLDivElement>(null);
  const sphere2Ref = useRef<HTMLDivElement>(null);
  const sphere3Ref = useRef<HTMLDivElement>(null);
  const sphere4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on reduced motion or coarse pointer (touch devices)
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(pointer: coarse)').matches
    ) {
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // Subtle continuous floating levitation for spheres
    const floatTl = gsap.timeline({ repeat: -1, yoyo: true });
    floatTl
      .to(sphere1Ref.current, { y: -16, x: 8, duration: 4.5, ease: 'sine.inOut' }, 0)
      .to(sphere2Ref.current, { y: 20, x: -10, duration: 5.2, ease: 'sine.inOut' }, 0.4)
      .to(sphere3Ref.current, { y: -12, x: -6, duration: 3.8, ease: 'sine.inOut' }, 0.8)
      .to(sphere4Ref.current, { y: 14, x: 12, duration: 4.8, ease: 'sine.inOut' }, 1.2);

    // Mouse tracking 3D parallax
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      gsap.to(nLogoRef.current, {
        rotationY: x * 0.05,
        rotationX: -y * 0.05,
        x: x * 0.02,
        y: y * 0.02,
        duration: 1.2,
        ease: 'power2.out',
      });

      gsap.to(ring1Ref.current, {
        rotationY: x * 0.08,
        rotationX: -y * 0.08,
        duration: 1.5,
        ease: 'power2.out',
      });

      gsap.to(ring2Ref.current, {
        rotationY: -x * 0.06,
        rotationX: y * 0.06,
        duration: 1.5,
        ease: 'power2.out',
      });

      gsap.to(sphere1Ref.current, {
        x: x * 0.08,
        y: y * 0.08,
        duration: 1.6,
        ease: 'power2.out',
      });

      gsap.to(sphere2Ref.current, {
        x: -x * 0.06,
        y: -y * 0.06,
        duration: 1.8,
        ease: 'power2.out',
      });

      gsap.to(sphere3Ref.current, {
        x: x * 0.05,
        y: y * 0.05,
        duration: 1.4,
        ease: 'power2.out',
      });

      gsap.to(sphere4Ref.current, {
        x: -x * 0.09,
        y: -y * 0.09,
        duration: 2.0,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to([nLogoRef.current, ring1Ref.current, ring2Ref.current], {
        rotationY: 0,
        rotationX: 0,
        x: 0,
        y: 0,
        duration: 1.6,
        ease: 'power3.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      floatTl.kill();
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[480px] lg:max-w-[540px] aspect-square flex items-center justify-center select-none perspective-[1200px]"
      aria-hidden="true"
    >
      {/* Ambient background glow backdrop */}
      <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-primary-electric/20 via-accent-cyan/15 to-accent-pink/10 blur-3xl opacity-75" />

      {/* Outer Gyroscopic Orbital Ring */}
      <div
        ref={ring1Ref}
        className="absolute w-[82%] h-[82%] rounded-full border border-primary-electric/25 [transform-style:preserve-3d] shadow-[0_0_24px_rgba(37,99,235,0.12),inset_0_0_16px_rgba(6,182,212,0.1)]"
        style={{ transform: 'rotateX(68deg) rotateZ(25deg)' }}
      >
        <div className="w-full h-full rounded-full animate-[orbit-spin_28s_linear_infinite] relative">
          {/* Orbiting Satellite Node */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_12px_rgba(6,182,212,0.9)] border border-accent-cyan flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
          </div>
        </div>
      </div>

      {/* Inner Counter-Rotating Orbital Ring */}
      <div
        ref={ring2Ref}
        className="absolute w-[66%] h-[66%] rounded-full border border-white/80 [transform-style:preserve-3d] shadow-[0_4px_24px_rgba(37,99,235,0.15),inset_0_0_12px_rgba(255,255,255,0.6)]"
        style={{ transform: 'rotateX(-62deg) rotateZ(-35deg)' }}
      >
        <div className="w-full h-full rounded-full animate-[orbit-spin-rev_20s_linear_infinite] relative">
          <div className="absolute -bottom-1.5 right-1/4 w-3 h-3 rounded-full bg-accent-pink shadow-[0_0_10px_rgba(236,72,153,0.9)]" />
        </div>
      </div>

      {/* Central Sculptural Glass "N" Pedestal */}
      <div
        ref={nLogoRef}
        className="relative z-20 w-44 h-44 sm:w-52 sm:h-52 rounded-3xl glass-card bg-white/75 backdrop-blur-2xl p-6 sm:p-7 flex items-center justify-center shadow-glass-lg border border-white/95 transition-transform will-change-transform"
      >
        {/* Specular internal refraction rim */}
        <div className="absolute inset-2 rounded-2xl border border-white/80 opacity-60 pointer-events-none" />

        {/* 3D Frosted Glass "N" SVG Glyph */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_12px_24px_rgba(9,33,71,0.18)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="glassNGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#092147" stopOpacity="0.98" />
            </linearGradient>
            <linearGradient id="specularHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Bold Sculptural "N" Path */}
          <path
            d="M22 18 H38 L65 68 V18 H80 V82 H64 L37 32 V82 H22 Z"
            fill="url(#glassNGradient)"
          />

          {/* Top/Left Specular Light Refraction Stroke */}
          <path
            d="M22 18 H38 L65 68 V18 H80"
            stroke="url(#specularHighlight)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Floating Specular Sheen Glare */}
        <div className="absolute -top-10 -left-10 w-28 h-28 rounded-full bg-white/40 blur-xl pointer-events-none" />
      </div>

      {/* Floating Glass Sphere 1: Electric Blue (Top-Left) */}
      <div
        ref={sphere1Ref}
        className="absolute top-8 left-6 sm:left-10 z-30 w-12 h-12 rounded-full glass-card bg-gradient-to-br from-white/90 via-primary-electric/40 to-primary-electric/80 shadow-[0_8px_20px_rgba(37,99,235,0.35)] border border-white flex items-center justify-center will-change-transform"
      >
        <div className="w-3 h-3 rounded-full bg-white/80 blur-[1px] -translate-x-1 -translate-y-1" />
      </div>

      {/* Floating Glass Sphere 2: Luminous Cyan (Bottom-Right) */}
      <div
        ref={sphere2Ref}
        className="absolute bottom-10 right-4 sm:right-8 z-30 w-14 h-14 rounded-full glass-card bg-gradient-to-br from-white/95 via-accent-cyan/40 to-accent-cyan/85 shadow-[0_8px_24px_rgba(6,182,212,0.4)] border border-white flex items-center justify-center will-change-transform"
      >
        <div className="w-3.5 h-3.5 rounded-full bg-white/90 blur-[1px] -translate-x-1.5 -translate-y-1.5" />
      </div>

      {/* Floating Glass Sphere 3: Soft Pink Accent (Bottom-Left) */}
      <div
        ref={sphere3Ref}
        className="absolute bottom-16 left-12 z-10 w-9 h-9 rounded-full glass-card bg-gradient-to-br from-white/90 via-accent-pink/35 to-accent-pink/70 shadow-[0_6px_16px_rgba(236,72,153,0.35)] border border-white will-change-transform"
      />

      {/* Floating Glass Sphere 4: Ice White Core (Top-Right) */}
      <div
        ref={sphere4Ref}
        className="absolute top-16 right-12 z-10 w-8 h-8 rounded-full glass-card bg-white/85 shadow-[0_6px_16px_rgba(9,33,71,0.12)] border border-white will-change-transform"
      />
    </div>
  );
}
