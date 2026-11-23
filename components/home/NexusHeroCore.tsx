'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function NexusHeroCore() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const nCoreRef = useRef<HTMLDivElement>(null);
  const nFrontRef = useRef<HTMLDivElement>(null);
  const nBackRef = useRef<HTMLDivElement>(null);
  const ring1Ref = useRef<HTMLDivElement>(null);
  const ring2Ref = useRef<HTMLDivElement>(null);
  const sphere1Ref = useRef<HTMLDivElement>(null);
  const sphere2Ref = useRef<HTMLDivElement>(null);
  const sphere3Ref = useRef<HTMLDivElement>(null);
  const sphere4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable heavy 3D transforms on reduced-motion or touch screens
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // 1. Idle Floating Levitation for spheres & core
      if (!prefersReducedMotion) {
        const floatTl = gsap.timeline({ repeat: -1, yoyo: true });
        floatTl
          .to(sphere1Ref.current, { y: -18, x: 10, duration: 4.8, ease: 'sine.inOut' }, 0)
          .to(sphere2Ref.current, { y: 22, x: -12, duration: 5.4, ease: 'sine.inOut' }, 0.3)
          .to(sphere3Ref.current, { y: -14, x: -8, duration: 4.2, ease: 'sine.inOut' }, 0.6)
          .to(sphere4Ref.current, { y: 16, x: 14, duration: 5.0, ease: 'sine.inOut' }, 0.9)
          .to(nCoreRef.current, { y: -10, rotationZ: 1.2, duration: 6, ease: 'sine.inOut' }, 0);
      }

      // 2. Mouse Tracking 3D Parallax & Tilt
      if (!prefersReducedMotion && !isTouch) {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - (rect.left + rect.width / 2);
          const y = e.clientY - (rect.top + rect.height / 2);

          // Stage tilt (preserve-3d)
          gsap.to(stageRef.current, {
            rotationY: x * 0.045,
            rotationX: -y * 0.045,
            duration: 1.2,
            ease: 'power2.out',
          });

          // Multi-layer depth differential
          gsap.to(nFrontRef.current, {
            x: x * 0.035,
            y: y * 0.035,
            duration: 1.1,
            ease: 'power2.out',
          });

          gsap.to(nBackRef.current, {
            x: -x * 0.025,
            y: -y * 0.025,
            duration: 1.4,
            ease: 'power2.out',
          });

          // Gyro rings tilt offset
          gsap.to(ring1Ref.current, {
            rotationY: x * 0.07,
            rotationX: -y * 0.07,
            duration: 1.5,
            ease: 'power2.out',
          });

          gsap.to(ring2Ref.current, {
            rotationY: -x * 0.06,
            rotationX: y * 0.06,
            duration: 1.5,
            ease: 'power2.out',
          });

          // Floating Glass Spheres Parallax (distinct Z depths)
          gsap.to(sphere1Ref.current, {
            x: x * 0.08,
            y: y * 0.08,
            duration: 1.6,
            ease: 'power2.out',
          });

          gsap.to(sphere2Ref.current, {
            x: -x * 0.065,
            y: -y * 0.065,
            duration: 1.8,
            ease: 'power2.out',
          });

          gsap.to(sphere3Ref.current, {
            x: x * 0.05,
            y: y * 0.05,
            duration: 1.3,
            ease: 'power2.out',
          });

          gsap.to(sphere4Ref.current, {
            x: -x * 0.09,
            y: -y * 0.09,
            duration: 1.9,
            ease: 'power2.out',
          });
        };

        const handleMouseLeave = () => {
          gsap.to([stageRef.current, nFrontRef.current, nBackRef.current, ring1Ref.current, ring2Ref.current], {
            rotationY: 0,
            rotationX: 0,
            x: 0,
            y: 0,
            duration: 1.6,
            ease: 'power3.out',
          });
          gsap.to([sphere1Ref.current, sphere2Ref.current, sphere3Ref.current, sphere4Ref.current], {
            x: 0,
            y: 0,
            duration: 1.8,
            ease: 'power3.out',
          });
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
          container.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[480px] lg:max-w-[540px] aspect-square flex items-center justify-center select-none [perspective:1200px]"
      aria-hidden="true"
    >
      {/* 1. Frosted Architectural Grid & Radial Light Bloom (Canvas backdrop) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Soft Radial Bloom */}
        <div className="w-[85%] h-[85%] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22)_0%,rgba(31,91,255,0.14)_40%,rgba(196,181,253,0.08)_65%,transparent_75%)] blur-3xl opacity-80" />

        {/* Faint Architectural Grid Lines */}
        <div
          className="absolute inset-8 rounded-full opacity-25 border border-primary-electric/20 [mask-image:radial-gradient(circle_at_center,black_30%,transparent_75%)]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(31, 91, 255, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(31, 91, 255, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Concentric Ambient Radar/Halo rings */}
        <div className="absolute w-[78%] h-[78%] rounded-full border border-primary-electric/15 opacity-60" />
        <div className="absolute w-[94%] h-[94%] rounded-full border border-white/60 opacity-40" />
      </div>

      {/* 2. 3D Perspective Stage */}
      <div
        ref={stageRef}
        className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d] will-change-transform"
      >
        {/* Outer Gyroscopic Orbital Ring */}
        <div
          ref={ring1Ref}
          className="absolute w-[84%] h-[84%] rounded-full border border-primary-electric/30 [transform-style:preserve-3d] shadow-[0_0_30px_rgba(31,91,255,0.15),inset_0_0_18px_rgba(56,189,248,0.12)]"
          style={{ transform: 'rotateX(68deg) rotateZ(26deg)' }}
        >
          <div className="w-full h-full rounded-full animate-[orbit-spin_28s_linear_infinite] relative">
            {/* Orbiting Satellite Beacon */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_16px_rgba(56,189,248,1)] border border-sky flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
            </div>
          </div>
        </div>

        {/* Inner Counter-Rotating Orbital Ring */}
        <div
          ref={ring2Ref}
          className="absolute w-[68%] h-[68%] rounded-full border border-white/80 [transform-style:preserve-3d] shadow-[0_4px_24px_rgba(31,91,255,0.12),inset_0_0_14px_rgba(255,255,255,0.7)]"
          style={{ transform: 'rotateX(-62deg) rotateZ(-34deg)' }}
        >
          <div className="w-full h-full rounded-full animate-[orbit-spin-rev_22s_linear_infinite] relative">
            <div className="absolute -bottom-1.5 right-1/4 w-3.5 h-3.5 rounded-full bg-accent-violet shadow-[0_0_14px_rgba(99,102,241,0.9)] border border-white" />
          </div>
        </div>

        {/* 3. Central Interactive 3D Glass Nexus Sculpture (NO flat white box!) */}
        <div
          ref={nCoreRef}
          className="relative z-20 w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center [transform-style:preserve-3d] will-change-transform"
        >
          {/* Back Refraction Silhouette Plane (Depth Layer -30px) */}
          <div
            ref={nBackRef}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ transform: 'translateZ(-30px)' }}
          >
            <svg
              viewBox="0 0 120 120"
              className="w-48 h-48 sm:w-56 sm:h-56 filter blur-md opacity-50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26 20 H44 L76 78 V20 H94 V100 H76 L44 42 V100 H26 Z"
                fill="url(#nexusBackGlow)"
              />
              <defs>
                <linearGradient id="nexusBackGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1F5BFF" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Core Dimensional Monolithic Glass "N" Prism (Z: 0px) */}
          <div
            className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center drop-shadow-[0_18px_36px_rgba(10,21,48,0.24)] [transform-style:preserve-3d]"
            style={{ transform: 'translateZ(0px)' }}
          >
            <svg
              viewBox="0 0 120 120"
              className="w-full h-full overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Core Glass Refraction Gradient */}
                <linearGradient id="nexusGlassCore" x1="10%" y1="0%" x2="90%" y2="100%">
                  <stop offset="0%" stopColor="#1F5BFF" stopOpacity="0.95" />
                  <stop offset="38%" stopColor="#38BDF8" stopOpacity="0.9" />
                  <stop offset="70%" stopColor="#0B3BD6" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#0A1530" stopOpacity="0.98" />
                </linearGradient>

                {/* Diagonal Specular Sheen */}
                <linearGradient id="nexusSpecularHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.3" />
                  <stop offset="65%" stopColor="#38BDF8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
                </linearGradient>

                {/* Bevel Stroke Gradient */}
                <linearGradient id="nexusBevelStroke" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#93C5FD" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Monolithic Glass "N" Primary Form */}
              <path
                d="M26 20 H44 L76 78 V20 H94 V100 H76 L44 42 V100 H26 Z"
                fill="url(#nexusGlassCore)"
              />

              {/* Precision Glass Outer Bevel Stroke */}
              <path
                d="M26 20 H44 L76 78 V20 H94 V100 H76 L44 42 V100 H26 Z"
                stroke="url(#nexusBevelStroke)"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />

              {/* Internal Refraction Prism Slice (Diagonal Light Ray) */}
              <path
                d="M44 20 L76 78 L71 78 L39 20 Z"
                fill="url(#nexusSpecularHighlight)"
                opacity="0.35"
              />

              {/* Upper Specular Gleam Edge */}
              <path
                d="M26 20 H44 L76 78 V20 H94"
                stroke="url(#nexusSpecularHighlight)"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.9"
              />
            </svg>

            {/* Radiant Ambient Core Spot */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-sky/30 via-white/20 to-transparent blur-xl pointer-events-none" />
          </div>

          {/* Foreground Specular Facets & Crystal Shards (Z: +30px) */}
          <div
            ref={nFrontRef}
            className="absolute inset-0 flex items-center justify-center pointer-events-none [transform-style:preserve-3d]"
            style={{ transform: 'translateZ(32px)' }}
          >
            {/* Luminous Specular Streak */}
            <div className="w-40 h-1 bg-gradient-to-r from-transparent via-white/80 to-transparent rotate-[-42deg] blur-[0.5px] opacity-75" />
            <div className="absolute top-12 left-16 w-3 h-3 rounded-full bg-white shadow-[0_0_12px_#ffffff] opacity-90" />
            <div className="absolute bottom-14 right-16 w-2.5 h-2.5 rounded-full bg-sky shadow-[0_0_10px_#38bdf8] opacity-80" />
          </div>
        </div>

        {/* 4. Floating Luminous Frosted Glass Spheres / Pearls (Staggered 3D Depths) */}
        {/* Sphere 1: Electric Blue Luminous Pearl (Top-Left, Z: +45px) */}
        <div
          ref={sphere1Ref}
          className="absolute top-6 left-4 sm:left-8 z-30 w-13 h-13 rounded-full bg-gradient-to-br from-white/95 via-blue/50 to-blue shadow-[0_10px_25px_rgba(31,91,255,0.4),inset_0_2px_4px_rgba(255,255,255,0.9)] border border-white flex items-center justify-center will-change-transform backdrop-blur-md"
          style={{ transform: 'translateZ(45px)' }}
        >
          <div className="w-3.5 h-3.5 rounded-full bg-white/90 blur-[1px] -translate-x-1.5 -translate-y-1.5" />
        </div>

        {/* Sphere 2: Luminous Ice Cyan Orb (Bottom-Right, Z: +35px) */}
        <div
          ref={sphere2Ref}
          className="absolute bottom-8 right-3 sm:right-6 z-30 w-15 h-15 rounded-full bg-gradient-to-br from-white/95 via-sky/50 to-sky shadow-[0_10px_28px_rgba(56,189,248,0.45),inset_0_2px_4px_rgba(255,255,255,0.95)] border border-white flex items-center justify-center will-change-transform backdrop-blur-md"
          style={{ transform: 'translateZ(35px)' }}
        >
          <div className="w-4 h-4 rounded-full bg-white/90 blur-[1px] -translate-x-1.5 -translate-y-1.5" />
        </div>

        {/* Sphere 3: Soft Lavender-Violet Frosted Orb (Bottom-Left, Z: -15px) */}
        <div
          ref={sphere3Ref}
          className="absolute bottom-14 left-10 z-10 w-10 h-10 rounded-full bg-gradient-to-br from-white/90 via-accent-violet/40 to-accent-violet/80 shadow-[0_8px_20px_rgba(99,102,241,0.35),inset_0_1px_3px_rgba(255,255,255,0.8)] border border-white will-change-transform backdrop-blur-md"
          style={{ transform: 'translateZ(-15px)' }}
        />

        {/* Sphere 4: Crystalline Ice White Core Bead (Top-Right, Z: +20px) */}
        <div
          ref={sphere4Ref}
          className="absolute top-14 right-10 z-10 w-8 h-8 rounded-full bg-white/90 shadow-[0_6px_18px_rgba(10,21,48,0.14),inset_0_1px_2px_#ffffff] border border-white will-change-transform backdrop-blur-md"
          style={{ transform: 'translateZ(20px)' }}
        />
      </div>
    </div>
  );
}
