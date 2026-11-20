import React from 'react';
import type { Metadata } from 'next';
import Container from '../../components/Container';
import SectionHeading from '../../components/SectionHeading';
import GlassCard from '../../components/GlassCard';
import Button from '../../components/Button';
import Chip from '../../components/Chip';
import Eyebrow from '../../components/Eyebrow';

export const metadata: Metadata = {
  title: 'Nexus Design System & Token Lab',
  description: 'Internal design system reference showcasing color tokens, typography, glassmorphism utilities, and reusable components.',
};

const colorPalette = [
  {
    category: 'Canvas & Foundations',
    tokens: [
      { name: 'Canvas Foundation', hex: '#EEF2FB', cssVar: '--color-canvas', border: true, desc: 'Pale lavender-blue page ground' },
      { name: 'Canvas Alternate', hex: '#E8EEFA', cssVar: '--color-canvas-alt', border: true, desc: 'Slightly deeper section tint' },
      { name: 'Paper Base', hex: '#F4F6FC', cssVar: '--color-paper', border: true, desc: 'Light neutral paper tone' },
      { name: 'Ice-White Glass', hex: 'rgba(255,255,255,0.65)', cssVar: '--color-paper-raised', border: true, desc: 'Semi-translucent card surface' },
    ],
  },
  {
    category: 'Deep Contrast Anchors',
    tokens: [
      { name: 'Deep Navy', hex: '#092147', cssVar: '--color-navy', lightText: true, desc: 'Primary corporate grounding' },
      { name: 'Navy Dark Display', hex: '#0B192C', cssVar: '--color-navy-dark', lightText: true, desc: 'Headlines & high-contrast titles' },
      { name: 'Deep Ink Footer', hex: '#050A12', cssVar: '--color-ink', lightText: true, desc: 'Terminal footers and code windows' },
    ],
  },
  {
    category: 'Brand Primaries & Accents',
    tokens: [
      { name: 'Electric Blue', hex: '#2563EB', cssVar: '--color-primary-electric', lightText: true, desc: 'Core brand CTA & key active states' },
      { name: 'Electric Hover', hex: '#1D4ED8', cssVar: '--color-primary-hover', lightText: true, desc: 'High-intensity hover shade' },
      { name: 'Accent Cyan', hex: '#06B6D4', cssVar: '--color-accent-cyan', lightText: true, desc: 'Highlight nodes & NexLock glow' },
      { name: 'Accent Violet', hex: '#6366F1', cssVar: '--color-accent-violet', lightText: true, desc: 'Gradient bridge & ambient drift' },
      { name: 'Accent Teal', hex: '#0D9488', cssVar: '--color-accent-teal', lightText: true, desc: 'NexWarranty signature security' },
      { name: 'Accent Pink', hex: '#EC4899', cssVar: '--color-accent-pink', lightText: true, desc: 'Eyebrow bar & neon specular edge' },
    ],
  },
  {
    category: 'Typography & Neutral Hierarchy',
    tokens: [
      { name: 'Text Navy', hex: '#0B192C', cssVar: '--color-text-navy', lightText: true, desc: 'High-priority headlines & cards' },
      { name: 'Text Slate Body', hex: '#334155', cssVar: '--color-text-body', lightText: true, desc: 'Optimized reading text' },
      { name: 'Text Muted', hex: '#64748B', cssVar: '--color-text-muted', lightText: true, desc: 'Metadata, labels, disabled copy' },
    ],
  },
];

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-canvas py-16 sm:py-24 selection:bg-primary-electric/20">
      <Container size="wide">
        {/* Page Header */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Chip dot="cyan" variant="glass">
              Internal Tooling
            </Chip>
            <Chip dot="blue" variant="mono">
              SPEC V1.0.0 APPROVED
            </Chip>
            <span className="text-xs font-mono text-text-muted">Route: /design-system (Unlinked)</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-text-navy tracking-tight">
            Nexus Design System & <span className="serif-italic-accent">Token Lab</span>
          </h1>
          <p className="mt-4 text-lg text-text-body max-w-3xl">
            Live implementation of the client-approved high-end glassmorphism design specification.
            All tokens, utility classes, and primitive UI components are rendered below for visual inspection.
          </p>
        </div>

        {/* 1. COLOR TOKEN MATRIX */}
        <section className="mb-20">
          <SectionHeading
            eyebrow="Tokens / 01"
            code="CLR"
            title="Color Palette"
            accent="& Surface Hierarchy"
            description="Derived directly from the approved spec. High-contrast ice glass balanced with deep navy grounding and vibrant electric accents."
          />

          <div className="mt-10 space-y-8">
            {colorPalette.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-mono uppercase tracking-wider text-text-muted mb-4">
                  {group.category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {group.tokens.map((token) => (
                    <div
                      key={token.cssVar}
                      className="glass-card p-4 rounded-xl flex flex-col justify-between"
                    >
                      <div
                        className={`h-20 w-full rounded-lg mb-3 shadow-inner flex items-end p-2.5 ${
                          token.border ? 'border border-navy/10' : ''
                        }`}
                        style={{ backgroundColor: token.hex }}
                      >
                        <span
                          className={`font-mono text-xs font-semibold ${
                            token.lightText ? 'text-white' : 'text-navy'
                          }`}
                        >
                          {token.hex}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-text-navy">{token.name}</div>
                        <div className="text-xs font-mono text-text-muted mt-0.5">{token.cssVar}</div>
                        <div className="text-xs text-text-body mt-2 leading-relaxed">{token.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. TYPOGRAPHY SYSTEM */}
        <section className="mb-20">
          <SectionHeading
            eyebrow="Tokens / 02"
            code="TYP"
            title="Typography Hierarchy"
            accent="& Font Pairings"
            description="Sculptural display serif headlines paired with high-contrast electric blue italic accents, ultra-legible Inter body text, and IBM Plex Mono precision codes."
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassCard padding="lg">
              <span className="text-xs font-mono uppercase text-text-muted">Display Headlines (Serif)</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold text-text-navy leading-tight">
                One company.{' '}
                <span className="serif-italic-accent">Three pillars.</span>
              </h2>
              <h3 className="mt-4 text-2xl font-serif font-semibold text-text-navy">
                We build technology for businesses —{' '}
                <span className="serif-italic-accent">and our own products.</span>
              </h3>
              <p className="mt-4 text-xs font-mono text-text-muted">
                Font: Newsreader Display / Source Serif 4 | Class: font-serif, serif-italic-accent
              </p>
            </GlassCard>

            <GlassCard padding="lg">
              <span className="text-xs font-mono uppercase text-text-muted">Precision Data & Codes (Mono)</span>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="font-mono text-xs px-2.5 py-1 bg-navy/5 text-navy border border-navy/10 rounded">
                  NX–ITS
                </span>
                <span className="font-mono text-xs px-2.5 py-1 bg-cyan-500/10 text-cyan-700 border border-cyan-500/20 rounded">
                  NX–LCK
                </span>
                <span className="font-mono text-xs px-2.5 py-1 bg-teal-500/10 text-teal-700 border border-teal-500/20 rounded">
                  NX–WRT
                </span>
                <span className="font-mono text-xs px-2.5 py-1 bg-navy/5 text-navy border border-navy/10 rounded">
                  BRANCH: T37E01
                </span>
                <span className="font-mono text-xs px-2.5 py-1 bg-navy/5 text-navy border border-navy/10 rounded">
                  GSTIN: 27AAMCN2980K1ZX
                </span>
              </div>
              <div className="mt-6 space-y-2">
                <p className="text-sm text-text-body font-mono">
                  &gt; STATUS: DEVICE RESTRICTED // OVERDUE EMI LOCK ENABLED
                </p>
                <p className="text-sm text-text-body font-mono">
                  &gt; SECURE PROTOCOL: AES-256 HARDWARE CRYPTO
                </p>
              </div>
              <p className="mt-6 text-xs font-mono text-text-muted">
                Font: IBM Plex Mono | Class: font-mono
              </p>
            </GlassCard>
          </div>
        </section>

        {/* 3. GLASSMORPHISM RECIPES */}
        <section className="mb-20">
          <SectionHeading
            eyebrow="Utilities / 03"
            code="GLS"
            title="Glassmorphism Scale"
            accent="& Specular Refraction"
            description="Multi-layered specular highlights, directional light refraction borders, and subtle blue ambient depth."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Glass Card */}
            <div className="glass-card p-6">
              <span className="text-xs font-mono uppercase text-primary-electric font-semibold">.glass-card</span>
              <h4 className="mt-2 text-lg font-serif font-semibold text-text-navy">Interactive Card</h4>
              <p className="mt-2 text-sm text-text-body">
                Features dual light refraction borders (top/left 0.95 white, bottom/right 0.45 blue), 24px blur, and hover lift.
              </p>
              <div className="mt-4 text-xs font-mono text-text-muted">Hover over me to see lift & glow</div>
            </div>

            {/* Glass Panel */}
            <div className="glass-panel p-6 rounded-2xl">
              <span className="text-xs font-mono uppercase text-accent-cyan font-semibold">.glass-panel</span>
              <h4 className="mt-2 text-lg font-serif font-semibold text-text-navy">Structural Panel</h4>
              <p className="mt-2 text-sm text-text-body">
                Luminous sheet for larger backgrounds, modals, tables, and nested content zones.
              </p>
              <div className="mt-4 text-xs font-mono text-text-muted">Static non-lifting elevation</div>
            </div>

            {/* Glass Pill */}
            <div className="flex flex-col justify-between p-6 rounded-2xl border border-white/60 bg-white/40">
              <div>
                <span className="text-xs font-mono uppercase text-accent-violet font-semibold">.glass-pill</span>
                <h4 className="mt-2 text-lg font-serif font-semibold text-text-navy">Floating Pill</h4>
                <p className="mt-2 text-sm text-text-body">
                  High-saturation ultra-blurred capsule used for floating navbars, filter pills, and quick tags.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="glass-pill px-4 py-1.5 text-xs font-semibold text-navy">
                  Floating Capsule
                </span>
              </div>
            </div>

            {/* Glass Dark */}
            <div className="glass-dark p-6 rounded-2xl">
              <span className="text-xs font-mono uppercase text-accent-cyan font-semibold">.glass-dark</span>
              <h4 className="mt-2 text-lg font-serif font-semibold text-white">Dark High-Tech Glass</h4>
              <p className="mt-2 text-sm text-slate-300">
                Deep navy glass container with top specular razor highlight, used in code windows and footer CTAs.
              </p>
              <div className="mt-4 font-mono text-xs text-cyan-400">01 // STATUS: SECURE</div>
            </div>
          </div>
        </section>

        {/* 4. COMPONENT LIBRARY */}
        <section className="mb-20">
          <SectionHeading
            eyebrow="Components / 04"
            code="CMP"
            title="Primitive Component Suite"
            accent="& Interactive States"
            description="Standardized reusable building blocks engineered for the full website redesign."
          />

          <div className="mt-10 space-y-10">
            {/* Button Component Showcase */}
            <GlassCard padding="lg">
              <h3 className="text-lg font-serif font-bold text-text-navy mb-2">
                1. Button Component (`Button.tsx`)
              </h3>
              <p className="text-sm text-text-muted mb-6">
                Supports `variant` (dark-pill, primary, outline-glass, ghost), `size` (sm, md, lg), animated arrow toggle, custom icons, and `href` (Next.js Link integration).
              </p>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase text-text-muted block mb-3">Variants</span>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant="dark-pill">Dark Pill (Default)</Button>
                    <Button variant="primary">Electric Blue CTA</Button>
                    <Button variant="outline-glass">Outline Frosted Glass</Button>
                    <Button variant="ghost">Ghost Button</Button>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase text-text-muted block mb-3">Sizes</span>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant="dark-pill" size="sm">Small Action</Button>
                    <Button variant="dark-pill" size="md">Medium Standard</Button>
                    <Button variant="dark-pill" size="lg">Large Hero CTA</Button>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase text-text-muted block mb-3">Arrow Toggled Off / Disabled</span>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant="primary" arrow={false}>Without Arrow</Button>
                    <Button variant="dark-pill" disabled>Disabled State</Button>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Chip Component Showcase */}
            <GlassCard padding="lg">
              <h3 className="text-lg font-serif font-bold text-text-navy mb-2">
                2. Chip Component (`Chip.tsx`)
              </h3>
              <p className="text-sm text-text-muted mb-6">
                Used for live status indicators, metadata tags, and floating UI notification chips.
              </p>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase text-text-muted block mb-3">Status Indicator Dots</span>
                  <div className="flex flex-wrap items-center gap-3">
                    <Chip dot="cyan" variant="glass">Cyan Active (NexLock)</Chip>
                    <Chip dot="blue" variant="glass">Electric Blue (Platform)</Chip>
                    <Chip dot="teal" variant="glass">Teal Shield (NexWarranty)</Chip>
                    <Chip dot="pink" variant="glass">Pink Accent</Chip>
                    <Chip dot="emerald" variant="glass">System Operational</Chip>
                    <Chip dot="amber" variant="glass">EMI Due Notice</Chip>
                    <Chip dot="navy" variant="glass">Corporate Node</Chip>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase text-text-muted block mb-3">Variants & Real-world Scenarios</span>
                  <div className="flex flex-wrap items-center gap-3">
                    <Chip variant="mono">NX–ITS CODE</Chip>
                    <Chip variant="tinted">Live Product</Chip>
                    <Chip variant="outline">Client Partnership</Chip>
                    <Chip variant="alert" dot="amber">Device restricted</Chip>
                    <Chip variant="glass" dot="cyan">SIM swap detected</Chip>
                    <Chip variant="glass" dot="teal">One QR scan</Chip>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Eyebrow & SectionHeading Showcase */}
            <GlassCard padding="lg">
              <h3 className="text-lg font-serif font-bold text-text-navy mb-2">
                3. Eyebrow & SectionHeading (`Eyebrow.tsx`, `SectionHeading.tsx`)
              </h3>
              <p className="text-sm text-text-muted mb-6">
                Standardizes section openers with pink accent line, optional monospace code block, and high-contrast italic accent title styling.
              </p>

              <div className="space-y-8">
                <div className="p-6 rounded-xl bg-canvas-alt border border-navy/5">
                  <SectionHeading
                    eyebrow="Pillars of Nexus"
                    code="01/03"
                    title="One company."
                    accent="Three pillars."
                    description="From custom enterprise software to hardware lock firmware and extended warranty administration."
                  />
                </div>

                <div className="p-6 rounded-xl bg-navy text-white">
                  <SectionHeading
                    onDark
                    eyebrow="Enterprise Protection"
                    code="NX-SEC"
                    title="Hardware-enforced control"
                    accent="for mobile retailers."
                    description="NexLock gives retailers zero-evasion EMI enforcement with multi-stage locks and tamper detection."
                  />
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* 5. 3D & MOTION UTILITIES */}
        <section className="mb-20">
          <SectionHeading
            eyebrow="Motion / 05"
            code="MOT"
            title="Atmospheric & Dimensional"
            accent="Utilities"
            description="CSS 3D orbital rings, luminous ambient glow, and animated aurora gradients."
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Aurora Background */}
            <div className="bg-aurora p-8 rounded-2xl border border-white/80 shadow-glass flex flex-col justify-between min-h-[260px]">
              <div>
                <span className="text-xs font-mono uppercase text-primary-electric font-semibold">.bg-aurora</span>
                <h4 className="mt-2 text-xl font-serif font-bold text-text-navy">Luminous Mesh Aurora</h4>
                <p className="mt-2 text-sm text-text-body">
                  Subtle shifting radial mesh gradient blending cyan, electric blue, and soft pink.
                </p>
              </div>
              <div className="mt-4">
                <Chip variant="glass" dot="blue">Ambient Drift Active</Chip>
              </div>
            </div>

            {/* Orbital Rings */}
            <div className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center min-h-[260px] relative overflow-hidden">
              <span className="absolute top-4 left-4 text-xs font-mono uppercase text-text-muted">.orbit-ring</span>
              <div className="relative w-36 h-36 flex items-center justify-center">
                <div className="absolute inset-0 orbit-ring animate-[orbit-spin_20s_linear_infinite]" />
                <div className="absolute inset-3 orbit-ring-solid animate-[orbit-spin-rev_15s_linear_infinite]" />
                <div className="w-12 h-12 rounded-full bg-primary-electric/15 flex items-center justify-center border border-primary-electric/30 soft-glow">
                  <span className="font-serif font-bold text-primary-electric text-xl">N</span>
                </div>
              </div>
              <span className="mt-4 text-xs font-mono text-text-muted">Celestial Gyroscopic Rings</span>
            </div>

            {/* Soft Glow */}
            <div className="glass-dark p-8 rounded-2xl flex flex-col justify-between min-h-[260px]">
              <div>
                <span className="text-xs font-mono uppercase text-accent-cyan font-semibold">.soft-glow</span>
                <h4 className="mt-2 text-xl font-serif font-bold text-white">Luminous Nodes</h4>
                <p className="mt-2 text-sm text-slate-300">
                  Neon drop shadow filters that cast diffuse light onto translucent glass layers.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <div className="h-10 w-10 rounded-full bg-primary-electric soft-glow" />
                <div className="h-10 w-10 rounded-full bg-accent-cyan soft-glow-cyan" />
                <div className="h-10 w-10 rounded-full bg-accent-pink shadow-[0_0_20px_rgba(236,72,153,0.5)]" />
              </div>
            </div>
          </div>
        </section>

        {/* 6. COMPOUND PREVIEW */}
        <section>
          <SectionHeading
            eyebrow="Compound Preview / 06"
            code="SYN"
            title="Integrated Component Synthesis"
            accent="Sample Preview"
            description="Demonstration of how the design system tokens, typography, and primitives compose into a complete section."
          />

          <div className="mt-10 max-w-xl mx-auto">
            <GlassCard glow="blue" padding="lg">
              <div className="flex items-center justify-between">
                <Chip dot="cyan" variant="glass">NX–LCK</Chip>
                <span className="text-xs font-mono text-text-muted">B2B FIRMWARE</span>
              </div>

              <h3 className="mt-4 text-2xl font-serif font-bold text-text-navy">
                NexLock — <span className="serif-italic-accent">Hardware Security</span>
              </h3>

              <p className="mt-3 text-sm text-text-body leading-relaxed">
                Zero-evasion EMI enforcement for mobile retailers. Built to protect device financed sales with hardware-level security.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Chip variant="tinted" size="sm">One QR scan</Chip>
                <Chip variant="tinted" size="sm">SIM swap detected</Chip>
                <Chip variant="tinted" size="sm">Device restricted</Chip>
              </div>

              <div className="mt-8 pt-6 border-t border-navy/8 flex items-center justify-between">
                <span className="text-xs font-mono text-text-muted">STATUS: OPERATIONAL</span>
                <Button variant="dark-pill" size="sm" href="/nexlock">
                  Explore NexLock
                </Button>
              </div>
            </GlassCard>
          </div>
        </section>
      </Container>
    </div>
  );
}
