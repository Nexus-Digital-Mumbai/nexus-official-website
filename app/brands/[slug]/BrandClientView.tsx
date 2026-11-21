'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../../../components/Container';
import Eyebrow from '../../../components/Eyebrow';
import Button from '../../../components/Button';
import Reveal from '../../../components/motion/Reveal';
import TiltCard from '../../../components/motion/TiltCard';
import SpotlightCard from '../../../components/reactbits/SpotlightCard';
import type { Brand } from '../../../data/brands';
import type { TrainingStore } from '../../../data/trainingStores';

export default function BrandClientView({ brand }: { brand: Brand }) {
  const [selectedStoreIndex, setSelectedStoreIndex] = useState<number | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedStoreIndex(null);
      if (e.key === 'ArrowRight' && brand.stores && selectedStoreIndex !== null) {
        setSelectedStoreIndex((prev) => (prev! + 1) % brand.stores!.length);
      }
      if (e.key === 'ArrowLeft' && brand.stores && selectedStoreIndex !== null) {
        setSelectedStoreIndex((prev) => (prev! - 1 + brand.stores!.length) % brand.stores!.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedStoreIndex, brand.stores]);

  const activeStore: TrainingStore | null =
    selectedStoreIndex !== null && brand.stores ? brand.stores[selectedStoreIndex] : null;

  return (
    <>
      {/* ── BRAND HERO ──────────────────────────────────────────────── */}
      <header className="relative overflow-hidden pt-36 sm:pt-44 pb-20 sm:pb-28">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-36 -left-36 h-[460px] w-[460px] rounded-full bg-primary-electric/15 blur-[120px]" />
          <div className="absolute -right-24 top-12 h-[420px] w-[420px] rounded-full bg-accent-cyan/15 blur-[130px]" />
        </div>

        <Container size="wide" className="relative z-10">
          {/* Breadcrumb Navigation Pill */}
          <Reveal effect="fade-up">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-card bg-white/70 border border-white/80 shadow-xs text-xs font-mono">
                <li>
                  <Link href="/" className="text-text-muted hover:text-navy transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-slate-400 select-none">/</li>
                <li>
                  <Link href="/brands" className="text-text-muted hover:text-navy transition-colors">
                    Brands
                  </Link>
                </li>
                <li className="text-slate-400 select-none">/</li>
                <li>
                  <span className="text-primary-electric font-semibold">{brand.name}</span>
                </li>
              </ol>
            </nav>
          </Reveal>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left Brand Logo Frame */}
            <Reveal effect="fade-scale">
              <div className="glass-card bg-white/95 flex items-center justify-center rounded-3xl p-10 sm:p-14 border border-white/95 shadow-glass-lg">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={260}
                  height={90}
                  priority
                  className="h-auto w-full max-w-[260px] object-contain drop-shadow-sm"
                />
              </div>
            </Reveal>

            {/* Right Brand Info */}
            <Reveal effect="fade-up">
              <div>
                <Eyebrow code="PARTNER">BRAND PARTNER</Eyebrow>
                <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text-navy tracking-tight leading-tight">
                  {brand.partner}{' '}
                  <span className="serif-italic-accent">&times; {brand.name}</span>
                </h1>
                <p className="mb-8 max-w-[54ch] text-base sm:text-lg text-text-body leading-relaxed">
                  {brand.summary}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="dark-pill"
                    size="lg"
                    href={`/collaborate?type=${brand.partner.toLowerCase()}`}
                    arrow={true}
                  >
                    Partner with Nexus
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </header>

      {/* ── 19 TRAINING-STORE PHOTOS (MASONRY & LIGHTBOX) ────────────── */}
      {brand.stores && brand.stores.length > 0 && (
        <section className="bg-canvas-alt py-24 sm:py-32 border-t border-navy/5 relative overflow-hidden">
          <Container size="wide">
            <Reveal effect="fade-up">
              <div className="mb-14 max-w-[680px]">
                <Eyebrow code="TRAINING">TRAINING ACROSS MUMBAI</Eyebrow>
                <h2 className="flex flex-wrap items-center gap-x-4 gap-y-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text-navy tracking-tight mt-2">
                  <Image
                    src="/assets/brands/top-10-logo.png"
                    alt="Top-10"
                    width={90}
                    height={36}
                    className="h-8 sm:h-10 w-auto object-contain inline-block"
                  />
                  <span>branches, trained on {brand.partner}.</span>
                </h2>
                <p className="mt-3 text-base sm:text-lg text-text-body leading-relaxed">
                  Click on any training session below to view high-resolution store photos and branch details.
                </p>
              </div>
            </Reveal>

            {/* Masonry / Grid */}
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {brand.stores.map((s, i) => (
                <li key={`${s.code}-${i}`}>
                  <Reveal effect="fade-up" delay={(i % 3) * 0.08}>
                    <TiltCard maxTilt={5} scale={1.02} className="h-full">
                      <div
                        onClick={() => setSelectedStoreIndex(i)}
                        className="rounded-3xl glass-card bg-white/90 hover:bg-white border border-white/95 shadow-glass overflow-hidden cursor-pointer group transition-all duration-300 h-full flex flex-col justify-between"
                      >
                        {/* Store Photo */}
                        <div className="relative aspect-[4/3] sm:aspect-[4/5] overflow-hidden bg-navy/5">
                          <Image
                            src={s.image}
                            alt={`${brand.partner} training at ${s.store} ${s.branch}`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <span className="absolute top-3 right-3 rounded-full bg-navy/80 px-3 py-1 font-mono text-[0.68rem] font-bold text-white backdrop-blur-md border border-white/20">
                            {s.code}
                          </span>
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Store Meta */}
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-1">
                            <Image
                              src="/assets/brands/top-10-logo.png"
                              alt={s.store}
                              width={40}
                              height={16}
                              className="h-4 w-auto object-contain"
                            />
                            <span className="font-serif text-lg font-bold text-text-navy">
                              · {s.branch}
                            </span>
                          </div>
                          <p className="font-mono text-[0.68rem] tracking-wider text-primary-electric uppercase font-bold mb-2">
                            Store code {s.code}
                          </p>
                          <p className="text-xs sm:text-sm text-text-body leading-relaxed">
                            {s.message}
                          </p>
                        </div>
                      </div>
                    </TiltCard>
                  </Reveal>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* ── LIGHTBOX MODAL (FRAMER MOTION) ────────────────────────────── */}
      <AnimatePresence>
        {activeStore && selectedStoreIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 bg-navy/85 backdrop-blur-xl"
            onClick={() => setSelectedStoreIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl glass-dark border border-white/20 shadow-2xl overflow-hidden flex flex-col md:flex-row bg-[#081324]/95 text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedStoreIndex(null)}
                aria-label="Close Lightbox"
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full glass-card bg-white/20 hover:bg-white/30 text-white flex items-center justify-center font-bold text-lg transition-transform hover:scale-105"
              >
                ✕
              </button>

              {/* Lightbox Image */}
              <div className="relative md:w-3/5 aspect-[4/3] md:aspect-auto overflow-hidden bg-black/40 min-h-[300px]">
                <Image
                  src={activeStore.image}
                  alt={`${brand.partner} at ${activeStore.branch}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>

              {/* Lightbox Content & Navigation */}
              <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs tracking-wider text-cyan-400 uppercase font-semibold block mb-2">
                    Store Code: {activeStore.code}
                  </span>
                  <div className="flex items-center gap-2 mb-3">
                    <Image
                      src="/assets/brands/top-10-logo.png"
                      alt={activeStore.store}
                      width={60}
                      height={24}
                      className="h-6 w-auto object-contain invert brightness-200"
                    />
                    <h3 className="font-serif text-2xl font-bold text-white">
                      · {activeStore.branch}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {activeStore.message}
                  </p>
                  <div className="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono text-slate-300 space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Partner:</span>
                      <span className="font-bold text-cyan-300">{brand.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Integration:</span>
                      <span className="font-bold text-white">{brand.partner}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Status:</span>
                      <span className="font-bold text-emerald-400">Training Delivered</span>
                    </div>
                  </div>
                </div>

                {/* Prev / Next Lightbox Controls */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() =>
                      setSelectedStoreIndex(
                        (selectedStoreIndex - 1 + brand.stores!.length) % brand.stores!.length
                      )
                    }
                    className="px-4 py-2 rounded-full glass-card bg-white/10 hover:bg-white/20 text-xs font-mono font-semibold transition-all flex items-center gap-1.5"
                  >
                    <span>&larr;</span> Prev
                  </button>
                  <span className="font-mono text-xs text-slate-400">
                    {selectedStoreIndex + 1} / {brand.stores.length}
                  </span>
                  <button
                    onClick={() =>
                      setSelectedStoreIndex((selectedStoreIndex + 1) % brand.stores!.length)
                    }
                    className="px-4 py-2 rounded-full glass-card bg-white/10 hover:bg-white/20 text-xs font-mono font-semibold transition-all flex items-center gap-1.5"
                  >
                    Next <span>&rarr;</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
