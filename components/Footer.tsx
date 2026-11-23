import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';
import FooterCredit from './FooterCredit';
import Reveal from './motion/Reveal';
import { PILLARS } from '../data/pillars';

const companyLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About & leadership' },
  { to: '/brands', label: 'Brands' },
  { to: '/careers', label: 'Careers' },
  { to: '/collaborate', label: 'Collaborate' },
  { to: '/contact', label: 'Contact' },
];

const legalLinks = [
  { to: '/nexlock/privacy', label: 'NexLock Privacy Policy' },
  { to: '/nexlock/terms', label: 'NexLock Terms & Conditions' },
  { to: '/nexwarrenty/privacy', label: 'NexWarranty Privacy Policy' },
  { to: '/nexwarrenty/terms', label: 'NexWarranty Terms & Conditions' },
];

export default function Footer() {
  const services = PILLARS.filter((p) => p.kind === 'services');
  const products = PILLARS.filter((p) => p.kind === 'product');

  return (
    <footer className="relative bg-ink text-slate-300 pt-20 pb-12 overflow-hidden border-t border-white/10 selection:bg-cyan-500/30 selection:text-white">
      {/* Large Faded 'N' Watermark */}
      <div
        className="pointer-events-none absolute -bottom-16 -right-12 select-none opacity-[0.035] text-white"
        aria-hidden="true"
      >
        <svg
          width="540"
          height="540"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M20 15 L38 15 L68 70 L68 15 L82 15 L82 85 L64 85 L34 30 L34 85 L20 85 Z" />
        </svg>
      </div>

      <Container size="wide">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.1fr] gap-10 pb-16 border-b border-white/8 relative z-10">
          {/* Brand & Overview */}
          <Reveal from="up" distance={24} delay={0} className="lg:pr-8">
            <Link
              href="/"
              className="inline-flex items-center px-3.5 py-2 rounded-xl bg-white/95 shadow-md border border-white/20 mb-6 group"
            >
              <Image
                src="/logo.png"
                alt="NEXUS"
                width={120}
                height={36}
                style={{ maxHeight: '36px', width: 'auto' }}
                className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-sm leading-relaxed text-slate-400 max-w-[36ch]">
              A technology company: software engineering for businesses, and products of our own — NexLock and NexWarranty.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span className="font-mono text-xs text-slate-400">All Systems Operational</span>
            </div>
          </Reveal>

          {/* Column 1: Services */}
          <Reveal from="up" distance={24} delay={0.06}>
            <p className="mb-4 font-mono text-[0.72rem] tracking-[0.14em] text-cyan-400 uppercase font-semibold">
              Services
            </p>
            <ul className="flex flex-col gap-2.5 text-sm">
              {services.map((p) => (
                <li key={p.id}>
                  <Link
                    href={p.to}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/it-solutions#services"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  All services
                </Link>
              </li>
              <li>
                <Link
                  href="/collaborate?type=it-existing"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Existing software help
                </Link>
              </li>
            </ul>
          </Reveal>

          {/* Column 2: Products */}
          <Reveal from="up" distance={24} delay={0.12}>
            <p className="mb-4 font-mono text-[0.72rem] tracking-[0.14em] text-cyan-400 uppercase font-semibold">
              Products
            </p>
            <ul className="flex flex-col gap-2.5 text-sm">
              {products.map((p) => (
                <li key={p.id}>
                  <Link
                    href={p.to}
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span>{p.name}</span>
                    <span className="text-xs text-slate-500 group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Column 3: Company */}
          <Reveal from="up" distance={24} delay={0.18}>
            <p className="mb-4 font-mono text-[0.72rem] tracking-[0.14em] text-cyan-400 uppercase font-semibold">
              Company
            </p>
            <ul className="flex flex-col gap-2.5 text-sm">
              {companyLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    href={l.to}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Column 4: Connect */}
          <Reveal from="up" distance={24} delay={0.24}>
            <p className="mb-4 font-mono text-[0.72rem] tracking-[0.14em] text-cyan-400 uppercase font-semibold">
              Connect
            </p>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <span className="block text-[0.7rem] font-mono text-slate-500 uppercase">Headquarters</span>
                <span className="text-slate-300">Mumbai, Maharashtra, India</span>
              </li>
              <li>
                <span className="block text-[0.7rem] font-mono text-slate-500 uppercase">Email</span>
                <a
                  href="mailto:info@nexusdig.in"
                  className="text-slate-300 hover:text-cyan-400 transition-colors font-mono text-xs"
                >
                  info@nexusdig.in
                </a>
              </li>
              <li>
                <span className="block text-[0.7rem] font-mono text-slate-500 uppercase">Direct Phone</span>
                <a
                  href="tel:7710070322"
                  className="text-slate-300 hover:text-cyan-400 transition-colors font-mono text-xs"
                >
                  +91 7710070322
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Bottom Legal & Meta Bar (2-Column on Desktop >= 1024px, Stacked on Tablet & Mobile) */}
        <Reveal from="none" delay={0.1}>
          <div className="pt-8 relative z-10 flex flex-col lg:grid lg:grid-cols-[1fr_auto] gap-4 lg:gap-8 items-start justify-between">
            {/* Left Column: Row 1 (Copyright & GSTIN) and Row 2 (Legal Links) */}
            <div className="flex flex-col gap-4 lg:gap-2.5">
              {/* Row 1: Copyright & GSTIN */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs text-slate-400">
                <p>&copy; 2026 NEXUS. All rights reserved.</p>
                <span className="text-slate-600">|</span>
                <p className="font-mono text-slate-400">GSTIN: 27ABAFN2902R1ZZ</p>
              </div>

              {/* Row 2: Legal Links */}
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.78rem] text-slate-400">
                {legalLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      href={l.to}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: DIMISI Credit (Desktop: aligned with Row 1 baseline; Tablet/Mobile: stacked below with 16px gap, left-aligned) */}
            <div className="flex items-center lg:justify-end text-xs text-slate-400 leading-normal">
              <FooterCredit />
            </div>
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}
