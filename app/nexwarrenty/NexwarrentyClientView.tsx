'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import PhotoBand from '../../components/PhotoBand';
import Container from '../../components/Container';
import Eyebrow from '../../components/Eyebrow';
import Button from '../../components/Button';
import { PillarBadge, PillarIcon, Wordmark } from '../../components/PillarMarks';
import Reveal from '../../components/motion/Reveal';
import TiltCard from '../../components/motion/TiltCard';
import SpotlightCard from '../../components/reactbits/SpotlightCard';
import WarrantyCalculator from '../../components/nexwarranty/WarrantyCalculator';

const TiltingCertificate3D = dynamic(
  () => import('../../components/nexwarranty/TiltingCertificate3D'),
  {
    ssr: false,
    loading: () => (
      <div className="h-[480px] w-full max-w-[420px] mx-auto rounded-3xl bg-teal-500/10 animate-pulse border border-white/20" />
    ),
  }
);

const covered = [
  'Unlimited breakdown support',
  'All mechanical & electrical breakdowns after brand warranty expires',
  '100% cost of spare parts & labor charges',
  'Repair or replacement guarantee — no questions asked',
  'Zero depreciation — full claim value with no deduction',
  'Free doorstep pickup & drop service with complimentary transportation',
];

const notCovered = [
  'Damage caused by physical impact or accidents',
  'Normal wear and tear that does not affect functionality',
  'Damage resulting from fire, burns, or explosions of any kind',
  'Devices that have been tampered with or repaired without authorization, or used improperly',
  'Problems caused by liquid or water exposure',
  'Electrical issues such as wiring faults, faulty plugs or switches, or voltage fluctuations',
  'Damage due to external factors like rodent bites or insect infestations',
  'Cosmetic wear that does not impair device functionality',
  'Products with serial numbers that have been removed or altered',
  'Devices used for commercial purposes or within commercial establishments',
  'Consumable items such as cables, cartridges, batteries, chargers, and similar accessories',
];

const pricingRows = [
  ['Air Conditioner', '8.5%', '13%', '17%', '—'],
  ['Dishwasher, Dryer, Refrigerator, Washing Machine & Microwave', '8%', '12%', '16%', '20%'],
  ['Refrigerator & Washing Machine (If Brand Warranty is more than 1 year)', '9%', '14%', '—', '—'],
  ['Television', '8.5%', '12%', '17%', '—'],
  ['Television (If Brand Warranty is more than 1 year)', '10%', '14%', '—', '—'],
  ['Air & Water Purifier', '8%', '12%', '16%', '—'],
  ['Hob & Chimney', '9%', '14%', '—', '—'],
  ['Room Cooler, Heater, Atta Chakki, Water Dispenser & Geyser', '8%', '12%', '—', '—'],
  ['Personal Care, Massager, Vacuum Cleaner, Fan & Iron', '9%', '14%', '—', '—'],
  ['Chopper, Blender, Kettle, Toaster, Fryer, Griller, Food Processor, JMG & Induction Stove', '9%', '14%', '—', '—'],
  ['Home Theatre, Sound Bar, Audio System & Portable Speakers', '8.5%', '12%', '—', '—'],
  ['Bluetooth — Speakers, Neckband & Headphones', '12%', '—', '—', '—'],
  ['Laptop', '7%', '9%', '12%', '—'],
  ['Desktop, Printer & Office Solution', '7%', '10%', '—', '—'],
];

const benefits = [
  { icon: '♾️', label: 'Unlimited Breakdown Support' },
  { icon: '⚙️', label: 'All Spare Parts Covered' },
  { icon: '🛡️', label: 'Repair or Replacement Guarantee' },
  { icon: '💵', label: 'Zero Depreciation' },
  { icon: '🚪', label: 'Doorstep Service' },
];

export default function NexwarrentyClientView() {
  return (
    <div className="bg-canvas text-text-navy overflow-x-hidden w-full selection:bg-accent-teal/20 selection:text-navy">
      {/* ── PRODUCT HERO ─────────────────────────────────────────── */}
      <header className="relative overflow-hidden pt-36 sm:pt-44 pb-20 sm:pb-28">
        {/* Background ambient radial gradients */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full bg-accent-teal/15 blur-[130px]" />
          <div className="absolute -left-20 bottom-0 h-[450px] w-[450px] rounded-full bg-accent-cyan/15 blur-[120px]" />
          <div className="absolute top-1/2 left-1/3 h-[350px] w-[350px] rounded-full bg-emerald-400/10 blur-[110px]" />
        </div>

        <Container size="wide" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            {/* Left Column — Text */}
            <Reveal effect="fade-up">
              <div className="flex flex-col items-start">
                <PillarBadge kind="product" className="mb-6 shadow-sm" />

                <div className="mb-5 flex items-center gap-4">
                  <PillarIcon id="nexwarranty" size="h-12 w-12" iconSize={24} />
                  <Wordmark id="nexwarranty" className="text-2xl sm:text-3xl" />
                </div>

                <h1 className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text-navy tracking-tight leading-[1.12]">
                  Extended warranty for the appliances you{' '}
                  <span className="serif-italic-accent">rely on every day.</span>
                </h1>

                <p className="mb-7 max-w-[50ch] text-base sm:text-lg text-text-body leading-relaxed">
                  NexWarranty picks up where the brand warranty ends — 100% of parts and labour, zero depreciation and doorstep pickup and drop, for devices worth up to{' '}
                  <strong className="text-text-navy font-bold">₹20 lakh</strong>.
                </p>

                {/* Chips */}
                <ul className="mb-8 flex flex-wrap gap-2">
                  {[
                    '1–4 year plans',
                    'Priced as % of device value',
                    'Zero depreciation',
                    'Brand-authorized repairs',
                  ].map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full border border-teal-500/25 bg-teal-500/10 px-3.5 py-1.5 text-xs font-mono font-semibold text-teal-800 shadow-xs"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="dark-pill"
                    size="lg"
                    href="#calculator"
                    arrow={true}
                  >
                    Calculate your plan price
                  </Button>
                  <Button
                    variant="outline-glass"
                    size="lg"
                    href="/collaborate?type=nexwarranty"
                    arrow={false}
                  >
                    Offer NexWarranty in your store
                  </Button>
                </div>
              </div>
            </Reveal>

            {/* Right Column — 3D Tilting Certificate */}
            <Reveal effect="fade-scale" delay={0.2} className="flex justify-center">
              <TiltingCertificate3D />
            </Reveal>
          </div>
        </Container>
      </header>

      {/* ── PROBLEM / SOLUTION ───────────────────────────────────────── */}
      <section className="bg-ink py-16 sm:py-20 text-slate-50 relative overflow-hidden border-y border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px]" />
        <Container size="wide" className="relative z-10">
          <Reveal effect="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="glass-card bg-white/[0.03] p-7 sm:p-9 rounded-3xl border border-white/10 shadow-glass">
                <p className="mb-3 font-mono text-xs tracking-wider text-slate-400 uppercase font-semibold">
                  The problem
                </p>
                <p className="font-serif text-xl sm:text-2xl font-bold leading-snug text-white">
                  When the manufacturer's warranty expires, every breakdown becomes an out-of-pocket repair bill — and some plans deduct depreciation from what they pay.
                </p>
              </div>

              <div className="glass-card bg-teal-500/[0.05] p-7 sm:p-9 rounded-3xl border border-teal-500/25 shadow-glass">
                <p className="mb-3 font-mono text-xs tracking-wider text-teal-300 uppercase font-semibold">
                  How NexWarranty solves it
                </p>
                <p className="font-serif text-xl sm:text-2xl font-bold leading-snug text-white">
                  Mechanical and electrical breakdowns are covered in full: parts, labour and transport, with repair or replacement guaranteed and no depreciation deducted.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── PHOTO BAND (Unsplash via next/image) ─────────────────────── */}
      <PhotoBand
        backgroundImage="https://images.unsplash.com/photo-1775210727386-4c798dfae209?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        stamp="NEXWARRANTY · NX–WRT–01"
        eyebrow="EVERY APPLIANCE, ACCOUNTED FOR"
        heading="From the first breakdown to the last service call."
        description="Whatever's plugged in at home — it's covered, doorstep to doorstep, at zero deduction."
      />

      {/* ── COVERAGE CARDS ───────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 relative">
        <Container size="wide">
          <Reveal effect="fade-up">
            <div className="mb-14 max-w-[640px]">
              <Eyebrow code="TERMS">COVERAGE</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text-navy tracking-tight">
                What's in the{' '}
                <span className="serif-italic-accent">certificate.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* What's Covered */}
            <Reveal effect="fade-up" delay={0.1}>
              <TiltCard maxTilt={5} scale={1.015} className="h-full">
                <SpotlightCard
                  spotlightColor="rgba(13, 148, 136, 0.12)"
                  className="rounded-3xl glass-card bg-white/85 p-8 sm:p-10 border border-white/95 shadow-glass h-full flex flex-col"
                >
                  <h3 className="mb-6 flex items-center gap-3 border-b-2 border-teal-500/20 pb-4 text-xl font-serif font-bold text-text-navy">
                    <span className="w-7 h-7 rounded-full bg-teal-500/15 text-teal-700 flex items-center justify-center text-sm font-bold">
                      ✓
                    </span>
                    <span>WHAT'S COVERED</span>
                  </h3>
                  <ul className="space-y-4">
                    {covered.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-text-navy font-medium leading-relaxed">
                        <span className="text-teal-600 font-bold mt-1 text-xs shrink-0">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </TiltCard>
            </Reveal>

            {/* Not Covered */}
            <Reveal effect="fade-up" delay={0.15}>
              <TiltCard maxTilt={5} scale={1.015} className="h-full">
                <SpotlightCard
                  spotlightColor="rgba(239, 68, 68, 0.08)"
                  className="rounded-3xl glass-card bg-white/85 p-8 sm:p-10 border border-white/95 shadow-glass h-full flex flex-col"
                >
                  <h3 className="mb-6 flex items-center gap-3 border-b-2 border-red-500/20 pb-4 text-xl font-serif font-bold text-red-600">
                    <span className="w-7 h-7 rounded-full bg-red-500/15 text-red-600 flex items-center justify-center text-sm font-bold">
                      ✕
                    </span>
                    <span>NOT COVERED</span>
                  </h3>
                  <ul className="space-y-3.5">
                    {notCovered.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-text-body leading-relaxed">
                        <span className="text-red-500 font-bold mt-1 text-xs shrink-0">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </TiltCard>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── PRICING TABLE ────────────────────────────────────────────── */}
      <section className="bg-canvas-alt py-24 sm:py-32 border-t border-navy/5 relative overflow-hidden">
        <Container size="wide">
          <Reveal effect="fade-up">
            <div className="mb-14 max-w-[680px]">
              <Eyebrow code="RATE CARD">PRICING</Eyebrow>
              <h2 className="mb-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text-navy tracking-tight">
                Plan price as % of{' '}
                <span className="serif-italic-accent">device value.</span>
              </h2>
              <p className="text-base sm:text-lg text-text-body leading-relaxed max-w-xl">
                Choose your coverage duration. All prices are a percentage of device purchase price.
              </p>
            </div>
          </Reveal>

          <Reveal effect="fade-up" delay={0.1}>
            <div className="glass-card bg-white/90 overflow-x-auto rounded-3xl border border-white/95 shadow-glass-lg">
              <table className="w-full min-w-[820px] border-collapse font-mono text-left">
                <thead>
                  <tr className="border-b border-navy/10 bg-navy text-white">
                    <th className="p-4 sm:p-5 text-xs font-bold tracking-wider uppercase">
                      Product category
                    </th>
                    <th className="p-4 sm:p-5 text-center text-xs font-bold tracking-wider uppercase">
                      1 year
                    </th>
                    <th className="p-4 sm:p-5 text-center text-xs font-bold tracking-wider uppercase">
                      2 years
                    </th>
                    <th className="p-4 sm:p-5 text-center text-xs font-bold tracking-wider uppercase">
                      3 years
                    </th>
                    <th className="p-4 sm:p-5 text-center text-xs font-bold tracking-wider uppercase">
                      4 years
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy/5 font-sans">
                  {pricingRows.map((row) => (
                    <tr
                      key={row[0]}
                      className="even:bg-canvas-alt/50 hover:bg-teal-500/[0.06] transition-colors"
                    >
                      <td className="p-4 sm:p-5 font-semibold text-text-navy text-sm">
                        {row[0]}
                      </td>
                      {row.slice(1).map((val, i) => (
                        <td
                          key={i}
                          className="p-4 sm:p-5 text-center font-mono font-bold text-sm text-teal-800"
                        >
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal effect="fade-up" delay={0.15}>
            <p className="mt-8 text-center font-serif text-lg font-bold text-red-600">
              ⚠️ Plan Available for Max device Price of 20 Lakh
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ── WARRANTY CALCULATOR COMPONENT ───────────────────────────── */}
      <WarrantyCalculator />

      {/* ── HOW A CLAIM ACTUALLY WORKS ───────────────────────────────── */}
      <section className="py-24 sm:py-32 relative bg-canvas-alt border-t border-navy/5">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image (Unsplash via next/image) */}
            <Reveal effect="fade-scale" delay={0.1} className="order-2 md:order-2">
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-white/90 shadow-glass-lg">
                <Image
                  src="https://images.unsplash.com/photo-1562941995-17dc31eaaf6d?fm=jpg&q=80&w=1200&auto=format&fit=crop"
                  alt="Technician repairing an electronic device"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover filter saturate-[0.94]"
                />
                <span className="absolute bottom-4 left-4 z-10 rounded-full bg-navy/80 px-3 py-1 font-mono text-xs text-white backdrop-blur-md border border-white/20">
                  NX–WRT–01
                </span>
              </div>
            </Reveal>

            {/* Text */}
            <Reveal effect="fade-up" className="order-1 md:order-1">
              <div>
                <Eyebrow code="CLAIMS">HOW A CLAIM ACTUALLY WORKS</Eyebrow>
                <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text-navy tracking-tight leading-tight">
                  Upload the invoice.{' '}
                  <span className="serif-italic-accent">We take it from there.</span>
                </h2>
                <p className="mb-4 text-base sm:text-lg text-text-body leading-relaxed">
                  Share your purchase invoice and IMEI or serial number, and we route the device to a brand-authorized center — same parts, same standards as the manufacturer.
                </p>
                <p className="text-base sm:text-lg text-text-body leading-relaxed">
                  No paperwork chase, no back-and-forth on cost. If it's covered, it's fixed.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── WHY NEXWARRANTY & ADVANTAGES ─────────────────────────────── */}
      <section className="bg-canvas py-24 sm:py-32 relative">
        <Container size="wide">
          <Reveal effect="fade-up">
            <div className="mb-14">
              <Eyebrow code="BENEFITS">WHY NEXWARRANTY</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text-navy tracking-tight">
                The NexWarranty <span className="serif-italic-accent">advantage</span>
              </h2>
            </div>
          </Reveal>

          {/* 5 Benefits Grid */}
          <Reveal effect="fade-up" delay={0.1}>
            <div className="glass-card bg-white/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 rounded-3xl p-8 sm:p-10 border border-white/95 shadow-glass">
              {benefits.map((b) => (
                <div key={b.label} className="flex items-center gap-3.5 text-base font-semibold text-text-navy">
                  <span className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-lg shrink-0">
                    {b.icon}
                  </span>
                  <span>{b.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Important Points & Maximum Liability */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Reveal effect="fade-up" delay={0.15}>
              <div className="glass-card bg-white/85 rounded-3xl border-t-4 border-navy p-8 sm:p-9 shadow-glass h-full">
                <h3 className="mb-3 text-lg font-serif font-bold text-navy flex items-center gap-2">
                  <span>📌</span> IMPORTANT POINTS TO CONSIDER
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-text-body">
                  To qualify, your device needs at least 12 months of valid Indian warranty and must be free of pre-existing issues. Repairs are handled at approved centers, with complimentary transportation included if needed.
                </p>
              </div>
            </Reveal>

            <Reveal effect="fade-up" delay={0.2}>
              <div className="glass-card bg-white/85 rounded-3xl border-t-4 border-navy p-8 sm:p-9 shadow-glass h-full">
                <h3 className="mb-3 text-lg font-serif font-bold text-navy flex items-center gap-2">
                  <span>⚖️</span> MAXIMUM LIABILITY
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-text-body">
                  The total coverage available will be limited to the product's initial purchase price. When the sum of all repair or replacement expenses equals this amount, the warranty will be regarded as complete, and no additional responsibilities will remain.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Raise a Service Request Call Block */}
          <Reveal effect="fade-up" delay={0.25}>
            <div className="mt-12 rounded-3xl glass-dark p-8 sm:p-12 text-center text-white border border-white/15 shadow-2xl relative overflow-hidden">
              <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-teal-500/20 blur-[100px]" />
              <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-cyan-500/20 blur-[100px]" />

              <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                <h3 className="mb-3 font-serif text-2xl sm:text-3xl font-bold tracking-tight">
                  📞 RAISE A SERVICE REQUEST
                </h3>
                <p className="mb-8 text-base text-slate-300 leading-relaxed max-w-lg">
                  Have an issue with your device? Call our support desk directly to register a service request.
                </p>
                <a
                  href="tel:7710070322"
                  className="inline-flex items-center gap-3 rounded-full bg-cyan-400 hover:bg-cyan-300 px-9 py-4 text-xl sm:text-2xl font-mono font-bold text-navy shadow-lg hover:scale-105 transition-all"
                >
                  <span>📞</span>
                  <span>7710070322</span>
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
