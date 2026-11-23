'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const SHOW_DELAY_MS = 1400; // let the Nexus loader finish first

export default function DevMarketingModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="devmarketing-title"
        >
          {/* Backdrop (Dark Overlay, No Fullscreen Backdrop Filter) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            className="fixed inset-0 bg-navy/60"
            aria-hidden="true"
          />

          {/* Glass Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[480px] rounded-3xl glass-card bg-white/90 backdrop-blur-2xl p-8 sm:p-10 text-center shadow-2xl border border-white/95 overflow-hidden z-10"
          >
            {/* Specular Top Gradient Line */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-navy via-primary-electric to-accent-cyan" />

            {/* Close Button */}
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full glass-pill text-slate-500 transition hover:text-navy hover:bg-white"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Eyebrow */}
            <p className="mb-5 font-mono text-[0.72rem] tracking-[0.14em] text-accent-pink uppercase font-semibold">
              New partnership
            </p>

            {/* Logo */}
            <div className="flex justify-center mb-6">
              <Image
                src="/assets/dev-marketing-logo.png"
                alt="Dev Marketing"
                width={160}
                height={60}
                className="h-auto w-[160px] object-contain drop-shadow-sm"
              />
            </div>

            {/* Title */}
            <h2
              id="devmarketing-title"
              className="mb-3 text-2xl sm:text-[1.7rem] font-serif font-bold text-text-navy leading-tight"
            >
              We've collaborated with{' '}
              <span className="serif-italic-accent">Dev Marketing</span> for NexLock
            </h2>

            {/* Description */}
            <p className="mx-auto mb-8 max-w-[38ch] text-sm sm:text-base text-text-body leading-relaxed">
              NexLock training has been delivered to the Top 10 stores across Mumbai.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                href="/brands/dev-marketing"
                onClick={close}
                variant="primary"
                size="md"
              >
                See the partnership
              </Button>
              <Button
                onClick={close}
                variant="outline-glass"
                size="md"
                arrow={false}
              >
                Close
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
