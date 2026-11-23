'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

/**
 * <PageLoader> — Session-gated initial brand loader.
 * - Shows only once per browser session via sessionStorage (with strict try/catch guard)
 * - Maximum display duration: 1.0s
 * - Exits with a smooth curtain wipe; pointer-events: none during exit
 * - Hard fallback timeout: 1.5s (strictly forces exit and unconditional unmount from DOM)
 * - NEVER uses backdrop-filter or backdrop-blur (prevents viewport freezing/blurring bugs)
 * - Completely unmounts from DOM after exit
 * - Prevents hydration mismatch by mounting client-side only
 * - Immediately skipped when prefers-reduced-motion is active
 */
export default function PageLoader() {
  const [mounted, setMounted] = useState(false);
  const [inDOM, setInDOM] = useState(false);
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const exitTriggeredRef = useRef(false);

  useEffect(() => {
    setMounted(true);

    if (shouldReduceMotion) {
      return;
    }

    let hasLoadedThisSession = false;
    try {
      hasLoadedThisSession = !!sessionStorage.getItem('nexus_session_loaded');
    } catch {
      // sessionStorage unavailable (e.g. private browsing or strict cookies)
    }

    if (hasLoadedThisSession) {
      return;
    }

    // Mark session as loaded
    try {
      sessionStorage.setItem('nexus_session_loaded', 'true');
    } catch {}

    setInDOM(true);
    setVisible(true);

    // Normal exit: start wipe-out at 1.0s
    const exitTimer = setTimeout(() => {
      if (!exitTriggeredRef.current) {
        exitTriggeredRef.current = true;
        setVisible(false);
      }
    }, 1000);

    // Hard fallback timeout: 1.4s unconditionally unmounts from DOM
    const hardTimeout = setTimeout(() => {
      exitTriggeredRef.current = true;
      setVisible(false);
      setInDOM(false);
    }, 1400);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hardTimeout);
    };
  }, [shouldReduceMotion]);

  // Prevent hydration mismatch and ensure DOM unmount
  if (!mounted || !inDOM) return null;

  return (
    <AnimatePresence onExitComplete={() => setInDOM(false)}>
      {visible && (
        <motion.div
          key="nexus-page-loader"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            y: '-100%',
            opacity: 0.98,
            transition: { duration: 0.3, ease: [0.65, 0, 0.35, 1] },
          }}
          style={{ pointerEvents: visible ? 'auto' : 'none' }}
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-canvas select-none"
          role="status"
          aria-label="Loading Nexus"
        >
          <div className="p-8 rounded-3xl flex flex-col items-center shadow-glass-lg border border-white/90 bg-white/95">
            {/* Orbital Glass Nexus Mark */}
            <div className="relative w-28 h-28 flex items-center justify-center mb-6">
              <div className="absolute inset-0 rounded-full border border-primary-electric/25 animate-[orbit-spin_4s_linear_infinite]" />
              <div className="absolute inset-2 rounded-full border-t border-b border-accent-cyan/60 animate-[orbit-spin-rev_3s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full bg-white shadow-inner flex items-center justify-center border border-white/80">
                <Image
                  className="w-12 h-12 object-contain"
                  src="/favicon-180.png"
                  alt="Nexus"
                  width={48}
                  height={48}
                  priority
                />
              </div>
            </div>

            {/* Wordmark */}
            <div className="font-serif font-bold text-sm tracking-[0.35em] text-navy uppercase pl-1 mb-4">
              NEXUS
            </div>

            {/* High-speed gradient progress bar */}
            <div className="w-32 h-1 rounded-full bg-navy/8 overflow-hidden">
              <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-primary-electric to-accent-cyan animate-[nx-sweep_1.1s_ease-in-out_infinite]" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
