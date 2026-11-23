import React from 'react';
import type { Metadata } from 'next';
import Container from '../../components/Container';
import SectionHeading from '../../components/SectionHeading';
import GlassCard from '../../components/GlassCard';
import Button from '../../components/Button';
import Chip from '../../components/Chip';
import Eyebrow from '../../components/Eyebrow';
import Reveal from '../../components/motion/Reveal';
import RevealGroup from '../../components/motion/RevealGroup';
import TiltCard from '../../components/motion/TiltCard';
import Magnetic from '../../components/motion/Magnetic';
import MagneticButton from '../../components/motion/MagneticButton';
import CountUp from '../../components/motion/CountUp';
import SplitHeading from '../../components/motion/SplitHeading';
import ParallaxLayer from '../../components/motion/ParallaxLayer';
import ScrollProgress from '../../components/motion/ScrollProgress';
import CursorGlow from '../../components/motion/CursorGlow';
import SplitText from '../../components/reactbits/SplitText';
import BlurText from '../../components/reactbits/BlurText';
import ShinyText from '../../components/reactbits/ShinyText';
import SpotlightCard from '../../components/reactbits/SpotlightCard';
import ScrollVelocity from '../../components/reactbits/ScrollVelocity';
import Dock from '../../components/reactbits/Dock';
import GlassIcons from '../../components/reactbits/GlassIcons';

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
            <div className="glass-card p-6">
              <span className="text-xs font-mono uppercase text-primary-electric font-semibold">.glass-card</span>
              <h4 className="mt-2 text-lg font-serif font-semibold text-text-navy">Interactive Card</h4>
              <p className="mt-2 text-sm text-text-body">
                Features dual light refraction borders, 24px blur, and hover lift.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl">
              <span className="text-xs font-mono uppercase text-accent-cyan font-semibold">.glass-panel</span>
              <h4 className="mt-2 text-lg font-serif font-semibold text-text-navy">Structural Panel</h4>
              <p className="mt-2 text-sm text-text-body">
                Luminous sheet for larger backgrounds, modals, and content zones.
              </p>
            </div>

            <div className="flex flex-col justify-between p-6 rounded-2xl border border-white/60 bg-white/40">
              <div>
                <span className="text-xs font-mono uppercase text-accent-violet font-semibold">.glass-pill</span>
                <h4 className="mt-2 text-lg font-serif font-semibold text-text-navy">Floating Pill</h4>
                <p className="mt-2 text-sm text-text-body">
                  High-saturation ultra-blurred capsule used for floating navbars.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="glass-pill px-4 py-1.5 text-xs font-semibold text-navy">
                  Floating Capsule
                </span>
              </div>
            </div>

            <div className="glass-dark p-6 rounded-2xl">
              <span className="text-xs font-mono uppercase text-accent-cyan font-semibold">.glass-dark</span>
              <h4 className="mt-2 text-lg font-serif font-semibold text-white">Dark High-Tech Glass</h4>
              <p className="mt-2 text-sm text-slate-300">
                Deep navy glass container with top specular razor highlight.
              </p>
            </div>
          </div>
        </section>

        {/* 4. MOTION LAYER PRIMITIVES */}
        <section className="mb-20">
          <SectionHeading
            eyebrow="Motion Layer / 04"
            code="MOT"
            title="Interactive Motion Primitives"
            accent="& Physics-Based Dynamics"
            description="Built using Framer Motion, GSAP ScrollTrigger, and Lenis smooth scrolling with strict reduced-motion adherence."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* TiltCard Demo */}
            <TiltCard glare maxTilt={12} scale={1.03} className="glass-card p-6 rounded-2xl">
              <span className="text-xs font-mono uppercase text-primary-electric font-semibold">&lt;TiltCard&gt;</span>
              <h4 className="mt-2 text-lg font-serif font-bold text-text-navy">3D Tilt & Specular Sheen</h4>
              <p className="mt-2 text-sm text-text-body">
                Move cursor across this card. Interactive 3D perspective rotation with dynamic cursor-tracking specular glare.
              </p>
              <div className="mt-4">
                <Chip size="sm" variant="tinted" dot="blue">Active Physics</Chip>
              </div>
            </TiltCard>

            {/* Magnetic Button Demo */}
            <GlassCard padding="md" className="flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-accent-cyan font-semibold">&lt;Magnetic&gt;</span>
                <h4 className="mt-2 text-lg font-serif font-bold text-text-navy">Magnetic Pull Button</h4>
                <p className="mt-2 text-sm text-text-body">
                  Hover near this button to feel elastic spring pull towards your cursor.
                </p>
              </div>
              <div className="mt-4">
                <Magnetic strength={0.4}>
                  <Button variant="dark-pill" size="sm">
                    Hover Near Me
                  </Button>
                </Magnetic>
              </div>
            </GlassCard>

            {/* CountUp Demo */}
            <GlassCard padding="md">
              <span className="text-xs font-mono uppercase text-accent-teal font-semibold">&lt;CountUp&gt;</span>
              <h4 className="mt-2 text-lg font-serif font-bold text-text-navy">Numeric Counter</h4>
              <div className="mt-4 space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-mono text-text-muted">Retail Stores</span>
                  <span className="text-2xl font-serif font-bold text-text-navy">
                    <CountUp to={19} duration={2} suffix="+" />
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-mono text-text-muted">Pillars</span>
                  <span className="text-2xl font-serif font-bold text-primary-electric">
                    <CountUp to={3} duration={1.5} />
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-mono text-text-muted">Experience</span>
                  <span className="text-2xl font-serif font-bold text-text-navy">
                    <CountUp to={10} duration={2} suffix=" Years" />
                  </span>
                </div>
              </div>
            </GlassCard>

            {/* Reveal Demo */}
            <GlassCard padding="md" className="flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-accent-pink font-semibold">&lt;Reveal&gt;</span>
                <h4 className="mt-2 text-lg font-serif font-bold text-text-navy">Fade-Up & Blur-In</h4>
                <p className="mt-2 text-sm text-text-body">
                  Framer Motion intersection trigger for staggered entrance animations.
                </p>
              </div>
              <div className="mt-4">
                <Reveal effect="blur-in">
                  <span className="text-xs font-mono px-3 py-1 bg-navy/5 text-navy rounded border border-navy/10 inline-block">
                    ✓ Blurred Entrance Verified
                  </span>
                </Reveal>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* 5. REACT BITS COMPONENT SUITE */}
        <section className="mb-20">
          <SectionHeading
            eyebrow="React Bits / 05"
            code="BITS"
            title="Curated React Bits Suite"
            accent="& Micro-Interactions"
            description="Verified components from reactbits.dev (MIT License) tailored for Nexus: SplitText, BlurText, ShinyText, SpotlightCard, ScrollVelocity, Dock, and GlassIcons."
          />

          <div className="mt-10 space-y-8">
            {/* Text Animations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard padding="md">
                <span className="text-xs font-mono uppercase text-primary-electric font-semibold">SplitText</span>
                <div className="mt-3">
                  <h4 className="text-xl font-serif font-bold text-text-navy">
                    <SplitText text="We build software for businesses" delay={0.03} />
                  </h4>
                </div>
                <p className="mt-3 text-xs text-text-muted">
                  Staggers individual words with spring physics on viewport entry.
                </p>
              </GlassCard>

              <GlassCard padding="md">
                <span className="text-xs font-mono uppercase text-accent-cyan font-semibold">BlurText</span>
                <div className="mt-3">
                  <h4 className="text-xl font-serif font-bold text-text-navy">
                    <BlurText text="High-security EMI lock firmware" delay={0.04} />
                  </h4>
                </div>
                <p className="mt-3 text-xs text-text-muted">
                  Words seamlessly translate and de-blur into razor sharpness.
                </p>
              </GlassCard>

              <GlassCard padding="md">
                <span className="text-xs font-mono uppercase text-accent-pink font-semibold">ShinyText</span>
                <div className="mt-3">
                  <h4 className="text-xl font-serif font-bold">
                    <ShinyText text="Extended Warranty Protection" speed={2.5} />
                  </h4>
                </div>
                <p className="mt-3 text-xs text-text-muted">
                  High-speed specular sheen sweep across brand typography.
                </p>
              </GlassCard>
            </div>

            {/* SpotlightCard & Dock */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SpotlightCard
                spotlightColor="rgba(37, 99, 235, 0.2)"
                className="p-8 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase text-primary-electric font-semibold">
                      SpotlightCard (React Bits)
                    </span>
                    <Chip dot="cyan" size="sm">Hover to illuminate</Chip>
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-text-navy">
                    Dynamic Cursor Spotlight Surface
                  </h4>
                  <p className="mt-3 text-sm text-text-body">
                    A smooth radial gradient spotlight tracks the exact cursor position within the glass card boundaries, illuminating the frosted texture.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <Button variant="dark-pill" size="sm">Explore Pillar</Button>
                </div>
              </SpotlightCard>

              <GlassCard padding="lg" className="flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono uppercase text-accent-violet font-semibold mb-2 block">
                    Interactive Dock (React Bits)
                  </span>
                  <h4 className="text-xl font-serif font-bold text-text-navy mb-4">
                    macOS Magnifying Dock
                  </h4>
                  <p className="text-sm text-text-body mb-6">
                    Move your cursor over the icons below to see smooth physics-based proximity magnification.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Dock
                    items={[
                      { label: 'IT Solutions', icon: '💻' },
                      { label: 'NexLock', icon: '🔒' },
                      { label: 'NexWarranty', icon: '🛡️' },
                      { label: 'Brands', icon: '🏷️' },
                      { label: 'Contact', icon: '📞' },
                    ]}
                  />
                </div>
              </GlassCard>
            </div>

            {/* GlassIcons */}
            <GlassCard padding="lg">
              <span className="text-xs font-mono uppercase text-text-muted mb-2 block">
                GlassIcons (React Bits)
              </span>
              <h4 className="text-xl font-serif font-bold text-text-navy mb-4">
                Prismatic Dimensional Tiles
              </h4>
              <GlassIcons
                items={[
                  { label: 'NX–ITS', icon: '⚡', color: '#2563EB' },
                  { label: 'NX–LCK', icon: '🔐', color: '#06B6D4' },
                  { label: 'NX–WRT', icon: '🛡️', color: '#0D9488' },
                  { label: 'API CORE', icon: '🔌', color: '#6366F1' },
                  { label: 'HARDWARE', icon: '📱', color: '#EC4899' },
                ]}
              />
            </GlassCard>

            {/* ScrollVelocity for Ticker */}
            <div className="glass-panel p-6 rounded-2xl overflow-hidden">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-primary-electric font-semibold">
                  ScrollVelocity Ticker (React Bits)
                </span>
                <span className="text-xs font-mono text-text-muted">Scroll the page to accelerate ticker speed</span>
              </div>
              <ScrollVelocity baseVelocity={1.5} className="py-2 font-serif text-lg font-semibold text-text-navy">
                <span className="inline-flex items-center gap-6 px-4">
                  <span>Nexus IT Solutions</span>
                  <span className="text-primary-electric">•</span>
                  <span>NexLock EMI Protection</span>
                  <span className="text-accent-cyan">•</span>
                  <span>NexWarranty Care</span>
                  <span className="text-accent-teal">•</span>
                </span>
              </ScrollVelocity>
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
            description="Demonstration of how the design system tokens, typography, and motion primitives compose into a complete section."
          />

          <div className="mt-10 max-w-xl mx-auto">
            <TiltCard maxTilt={6} scale={1.02} glare>
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
                  <Magnetic strength={0.3}>
                    <Button variant="dark-pill" size="sm" href="/nexlock">
                      Explore NexLock
                    </Button>
                  </Magnetic>
                </div>
              </GlassCard>
            </TiltCard>
          </div>
        </section>

        {/* 7. MOTION & INTERACTION PRIMITIVES KIT */}
        <section className="mt-20 pt-16 border-t border-navy/10">
          <SectionHeading
            eyebrow="Motion Kit / 07"
            code="MOT"
            title="Reusable Motion Primitives"
            accent="& Physics Engine Lab"
            description="Hardware-accelerated Framer Motion & GSAP animation kit. Zero reflow, prefers-reduced-motion safe, and strictly scoped."
          />

          <div className="mt-12 space-y-16">
            {/* SplitHeading Demo */}
            <div className="glass-panel p-8 rounded-2xl">
              <span className="text-xs font-mono uppercase text-primary-electric font-semibold block mb-3">
                1. SplitHeading (GSAP SplitText with Full Aria-Label Preservation)
              </span>
              <SplitHeading as="h3" className="text-2xl sm:text-3xl font-serif font-bold text-text-navy">
                Engineering precision software for business — and our own products.
              </SplitHeading>
              <p className="mt-2 text-xs font-mono text-text-muted">
                Inspect DOM: Character spans are animated cleanly with power2.out; full text is intact on parent element.
              </p>
            </div>

            {/* Reveal Directions Showcase */}
            <div>
              <span className="text-xs font-mono uppercase text-primary-electric font-semibold block mb-4">
                2. Reveal Primitives (LazyMotion + domAnimation)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Reveal from="up" distance={40}>
                  <div className="glass-card p-5 rounded-xl border border-navy/10 text-center">
                    <span className="text-xs font-mono text-primary-electric font-semibold">from=&quot;up&quot;</span>
                    <p className="mt-1 text-sm font-semibold text-text-navy">Entrance from bottom</p>
                  </div>
                </Reveal>
                <Reveal from="down" distance={40}>
                  <div className="glass-card p-5 rounded-xl border border-navy/10 text-center">
                    <span className="text-xs font-mono text-accent-cyan font-semibold">from=&quot;down&quot;</span>
                    <p className="mt-1 text-sm font-semibold text-text-navy">Entrance from top</p>
                  </div>
                </Reveal>
                <Reveal from="left" distance={40}>
                  <div className="glass-card p-5 rounded-xl border border-navy/10 text-center">
                    <span className="text-xs font-mono text-accent-violet font-semibold">from=&quot;left&quot;</span>
                    <p className="mt-1 text-sm font-semibold text-text-navy">Entrance from left</p>
                  </div>
                </Reveal>
                <Reveal from="right" distance={40}>
                  <div className="glass-card p-5 rounded-xl border border-navy/10 text-center">
                    <span className="text-xs font-mono text-accent-teal font-semibold">from=&quot;right&quot;</span>
                    <p className="mt-1 text-sm font-semibold text-text-navy">Entrance from right</p>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* RevealGroup with Alternating Directions */}
            <div>
              <span className="text-xs font-mono uppercase text-primary-electric font-semibold block mb-4">
                3. RevealGroup (Staggered 0.08s with Alternating Left/Right Directions)
              </span>
              <RevealGroup stagger={0.08} alternate className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="glass-card p-5 rounded-xl border border-navy/10 text-center">
                  <span className="text-xs font-mono text-text-muted">Item 01 (Left)</span>
                  <p className="mt-1 text-sm font-semibold text-text-navy">Staggered Item</p>
                </div>
                <div className="glass-card p-5 rounded-xl border border-navy/10 text-center">
                  <span className="text-xs font-mono text-text-muted">Item 02 (Right)</span>
                  <p className="mt-1 text-sm font-semibold text-text-navy">Staggered Item</p>
                </div>
                <div className="glass-card p-5 rounded-xl border border-navy/10 text-center">
                  <span className="text-xs font-mono text-text-muted">Item 03 (Left)</span>
                  <p className="mt-1 text-sm font-semibold text-text-navy">Staggered Item</p>
                </div>
              </RevealGroup>
            </div>

            {/* Interactive Physics & Numbers: MagneticButton, TiltCard, CountUp, ParallaxLayer */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* TiltCard with Cursor Spotlight */}
              <TiltCard maxTilt={8} scale={1.03} spotlight className="glass-card p-6 rounded-2xl border border-navy/10">
                <span className="text-xs font-mono uppercase text-primary-electric font-semibold">
                  4. TiltCard &amp; Spotlight
                </span>
                <h4 className="mt-3 text-lg font-serif font-bold text-text-navy">
                  3D Perspective Hover
                </h4>
                <p className="mt-2 text-xs text-text-body">
                  Moves on pointer coordinates with interactive radial spotlight glare.
                </p>
              </TiltCard>

              {/* CountUp Tabular Numbers */}
              <div className="glass-card p-6 rounded-2xl border border-navy/10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono uppercase text-accent-cyan font-semibold">
                    5. CountUp Numbers
                  </span>
                  <h4 className="mt-3 text-3xl font-serif font-bold text-text-navy">
                    <CountUp to={10000} duration={2} suffix="+" />
                  </h4>
                  <p className="mt-1 text-xs text-text-body">
                    Protected devices across retail partners in India.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-navy/8 text-xs font-mono text-text-muted">
                  Tabular-nums expo easing
                </div>
              </div>

              {/* MagneticButton & ParallaxLayer */}
              <div className="glass-card p-6 rounded-2xl border border-navy/10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono uppercase text-accent-violet font-semibold">
                    6. MagneticButton &amp; Parallax
                  </span>
                  <div className="mt-4 flex items-center justify-center">
                    <MagneticButton strength={0.35}>
                      <button
                        type="button"
                        className="px-5 py-2.5 rounded-full bg-primary-electric text-white text-xs font-semibold shadow-md hover:bg-primary-hover transition-colors cursor-pointer"
                      >
                        Magnetic Pull Hover
                      </button>
                    </MagneticButton>
                  </div>
                </div>
                <ParallaxLayer speed={0.15} className="mt-4 pt-3 border-t border-navy/8 text-center text-xs font-mono text-text-muted">
                  ✦ Floating Parallax Layer (Speed: 0.15)
                </ParallaxLayer>
              </div>
            </div>
          </div>
        </section>
      </Container>
      {/* Top Reading Progress Bar & Cursor Ambient Glow */}
      <ScrollProgress />
      <CursorGlow size={320} />
    </div>
  );
}
