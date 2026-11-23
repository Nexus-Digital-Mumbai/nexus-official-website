'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useIsDesktop } from '../hooks/useIsDesktop';

/**
 * <HeroVideo> — Desktop-only (>= 1024px) full-bleed background video layer.
 * - Hidden on mobile/tablet (< 1024px) where text sits on pure gradient background.
 * - Only mounts the video element on desktop (>= 1024px) to ensure only ONE video is loaded across the page.
 * - Instant next/image priority poster ensures zero CLS and zero blank flash.
 * - Fades video in (opacity 0 -> 1, 0.6s) once canplay fires.
 * - Object position: right center so the glass 'N' stays prominently visible.
 * - Auto-pauses when off-screen or tab is backgrounded.
 * - Hardware-accelerated gentle scroll parallax scale-out (max 8%, zero filter/blur).
 */
export default function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const isDesktop = useIsDesktop();

  // Scroll parallax / scale-out: max 8% scale, pure transform, no filter/blur
  const { scrollY } = useScroll();
  const videoScale = useTransform(scrollY, [0, 900], [1, 1.08]);
  const videoY = useTransform(scrollY, [0, 900], [0, 48]);

  // Check if conditions allow video playback
  const canPlay = Boolean(
    isDesktop === true &&
    !shouldReduceMotion &&
    typeof navigator !== 'undefined' &&
    !(
      ((navigator as any).connection?.saveData) ||
      ['slow-2g', '2g', '3g'].includes((navigator as any).connection?.effectiveType)
    )
  );

  useEffect(() => {
    if (!canPlay) return;
    const video = videoRef.current;
    if (!video) return;

    let isIntersecting = true;

    // Pause / resume on tab visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else if (isIntersecting) {
        video.play().catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Pause / resume on viewport scroll via IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (entry.isIntersecting && !document.hidden) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.08 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
    };
  }, [canPlay]);

  return (
    <div
      ref={containerRef}
      className="hidden lg:block absolute inset-0 z-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      <motion.div
        style={{
          scale: shouldReduceMotion ? 1 : videoScale,
          y: shouldReduceMotion ? 0 : videoY,
        }}
        className="relative w-full h-full will-change-transform"
      >
        {/* Instant Priority Poster Image (Prevents blank flash & guarantees zero CLS) */}
        <Image
          src="/assets/hero/nexus-hero-poster.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />

        {/* Video Player — Mounted strictly on desktop only (>= 1024px) */}
        {canPlay && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/assets/hero/nexus-hero-poster.jpg"
            disablePictureInPicture
            disableRemotePlayback
            controls={false}
            onCanPlay={() => setIsVideoLoaded(true)}
            onError={() => setIsVideoLoaded(false)}
            className={`absolute inset-0 w-full h-full object-cover object-right transition-opacity duration-600 ease-out ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src="/assets/hero/nexus-hero.webm" type="video/webm" />
            <source src="/assets/hero/nexus-hero.mp4" type="video/mp4" />
          </video>
        )}

        {/* Light Left-Side White Gradient (35% white to transparent over 55%) for WCAG AA readability */}
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/35 via-white/15 to-transparent w-full max-w-[55%]"
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}
