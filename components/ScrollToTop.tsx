'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

/**
 * <ScrollToTop>
 * - Scrolls to top on route change (or smoothly to anchor hash)
 * - Floating glass button that appears after 600px of scrolling
 * - Keyboard accessible with aria-label
 * - Respects prefers-reduced-motion
 */
export default function ScrollToTop() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Route change listener
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  // Scroll threshold listener for floating button
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? 'instant' : 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-[950] w-11 h-11 rounded-full glass-card border border-white/90 shadow-glass-lg flex items-center justify-center text-navy hover:text-primary-electric hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-cyan-400 group select-none"
        >
          <svg
            className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
