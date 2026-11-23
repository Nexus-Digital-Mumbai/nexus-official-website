'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useIsDesktop } from '../hooks/useIsDesktop';

/**
 * <HeroMobileVideoCard> — Mobile & Tablet (< 1024px) centered floating video card.
 * - Sits cleanly between the CTAs and the stats row on mobile/tablet.
 * - 1:1 aspect ratio, max-width 420px, rounded 28px, white glass border, soft blue shadow.
 * - Gentle floating animation (0 to -8px, 6s easeInOut loop), reduced-motion safe.
 * - Pre-reserves 1:1 aspect ratio via next/image priority poster (zero layout shift / CLS 0).
 * - Fades video in (0.6s) upon canplay.
 * - Auto-pauses off-screen and on tab background.
 * - Strictly mounted only on < 1024px (never loads alongside desktop video).
 */
export default function HeroMobileVideoCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const isDesktop = useIsDesktop();

  // Condition to mount mobile video: must be on mobile/tablet (< 1024px)
  const canPlay = Boolean(
    isDesktop === false &&
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

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else if (isIntersecting) {
        video.play().catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (entry.isIntersecting && !document.hidden) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
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
    <div className="block lg:hidden w-full my-7 sm:my-9">
      <motion.div
        ref={containerRef}
        animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative w-full max-w-[420px] aspect-square mx-auto rounded-[28px] border border-white/80 shadow-[0_18px_50px_rgba(31,91,255,0.18)] overflow-hidden bg-white/40"
      >
        {/* Instant Priority Poster Image (Guarantees zero blank flash & CLS 0) */}
        <Image
          src="/assets/hero/nexus-hero-mobile-poster.jpg"
          alt=""
          fill
          priority
          sizes="(max-width: 1023px) 100vw, 420px"
          className="object-cover"
        />

        {/* Mobile Square Video Player — Mounted strictly on mobile/tablet only (< 1024px) */}
        {canPlay && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/assets/hero/nexus-hero-mobile-poster.jpg"
            disablePictureInPicture
            disableRemotePlayback
            controls={false}
            onCanPlay={() => setIsVideoLoaded(true)}
            onError={() => setIsVideoLoaded(false)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-600 ease-out ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source
              src="/assets/hero/nexus-hero-mobile-square.mp4"
              type="video/mp4"
            />
          </video>
        )}
      </motion.div>
    </div>
  );
}
