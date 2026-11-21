import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '../../components/PageHeader';
import Container from '../../components/Container';
import Reveal from '../../components/motion/Reveal';
import TiltCard from '../../components/motion/TiltCard';
import SpotlightCard from '../../components/reactbits/SpotlightCard';
import { brands } from '../../data/brands';

export const metadata: Metadata = {
  title: 'Brands & Retail Alliances',
  description: "Partnerships where Nexus brings NexLock or NexWarranty to a brand's retailers and customers across India.",
  alternates: {
    canonical: '/brands',
  },
  openGraph: {
    title: 'Brands & Retail Alliances — Nexus',
    description: "Partnerships where Nexus brings NexLock or NexWarranty to a brand's retailers and customers across India.",
    url: 'https://nexusdig.in/brands',
  },
};

export default function Brands() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: 'Brands' }]}
        eyebrow="BRAND PARTNERS"
        code="ALLIANCES"
        title="Brands we work"
        accentText="with."
        lede="Partnerships where Nexus brings NexLock or NexWarranty to a brand's retailers and customers."
      />

      <section className="py-20 sm:py-28 bg-canvas relative">
        <Container size="wide">
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((b) => (
              <li key={b.slug} className="h-full">
                <Reveal effect="fade-up">
                  <TiltCard maxTilt={5} scale={1.02} className="h-full">
                    <Link href={`/brands/${b.slug}`} className="block h-full">
                      <SpotlightCard
                        spotlightColor="rgba(37, 99, 235, 0.12)"
                        className="rounded-3xl glass-card bg-white/85 hover:bg-white border border-white/95 shadow-glass h-full flex flex-col justify-between overflow-hidden group transition-all"
                      >
                        {/* Brand Logo Banner */}
                        <div className="flex aspect-[16/10] items-center justify-center bg-white p-8 border-b border-navy/5">
                          <Image
                            src={b.logo}
                            alt={b.name}
                            width={180}
                            height={60}
                            className="max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>

                        {/* Brand Details */}
                        <div className="p-7 sm:p-8 flex flex-1 flex-col">
                          <p className="mb-2 font-mono text-xs tracking-wider text-primary-electric uppercase font-bold">
                            Partner · {b.partner}
                          </p>
                          <h2 className="mb-2 font-serif text-2xl font-bold text-text-navy group-hover:text-primary-electric transition-colors">
                            {b.name}
                          </h2>
                          <p className="mb-6 text-xs sm:text-sm text-text-body leading-relaxed">
                            {b.summary}
                          </p>

                          <div className="mt-auto pt-4 border-t border-navy/5 flex items-center justify-between text-sm font-semibold text-text-navy group-hover:text-primary-electric transition-colors">
                            <span>View brand</span>
                            <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                              &rarr;
                            </span>
                          </div>
                        </div>
                      </SpotlightCard>
                    </Link>
                  </TiltCard>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
