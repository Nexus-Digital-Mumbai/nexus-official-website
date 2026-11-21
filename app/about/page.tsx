import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../../components/Container';
import Eyebrow from '../../components/Eyebrow';
import PageHeader from '../../components/PageHeader';
import { PillarIcon, Wordmark } from '../../components/PillarMarks';
import { PILLARS } from '../../data/pillars';
import Reveal from '../../components/motion/Reveal';
import TiltCard from '../../components/motion/TiltCard';
import SpotlightCard from '../../components/reactbits/SpotlightCard';

export const metadata: Metadata = {
  title: 'About Us — Operators & Engineers',
  description:
    'Industry operators and software engineers under one roof — building software for clients, and running NexLock and NexWarranty ourselves.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Nexus — Operators & Software Engineers',
    description:
      'Industry operators and software engineers under one roof — building software for clients, and running NexLock and NexWarranty ourselves.',
    url: 'https://nexusdig.in/about',
    images: [
      {
        url: '/nexus-team.jpg',
        width: 1200,
        height: 800,
        alt: 'The Nexus team at headquarters',
      },
    ],
  },
};

const leadership = [
  {
    name: 'Sagar',
    role: 'Chief Executive Officer',
    bio: 'Working for the past 10 years in IT and Business Development fields.',
    photo: '/team-sagar.jpg',
    focus: 'center 20%',
  },
  {
    name: 'Kunal Kurmi',
    role: 'Chief Operating Officer',
    bio: 'B.Tech graduate of Thakur College of Engineering and Technology. Experienced with Spectrum, driving OnAssist and VWarranty.',
    photo: '/team-kunal.jpg',
    focus: 'center 25%',
  },
  {
    name: 'Vivek Sharma',
    role: 'Chief Technology Officer',
    bio: 'MCA graduate from NMIMS. Expertise in modern web technologies, cloud infrastructure, and software architecture.',
    photo: '/team-vivek.jpg',
    focus: 'center 25%',
  },
  {
    name: 'Ashish Vishwakarma',
    role: 'Chief Product Officer',
    bio: 'BE graduate in Electronics and Telecommunication from Mumbai University.',
    photo: '/team-ashish.jpg',
    focus: 'center 20%',
  },
  {
    name: 'Janak',
    role: 'Head of Sales',
    bio: 'Heading on-ground sales and partner operations across retail networks.',
    photo: '/team-janak.jpg',
    focus: 'center 20%',
    crop: 1.15,
  },
  {
    name: 'Ketan',
    role: 'Legal and Operations Head',
    bio: 'Leading compliance, regulatory affairs, and core operational execution.',
    photo: '/team-ketan.jpg',
    focus: 'center 20%',
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: 'About' }]}
        eyebrow="ABOUT NEXUS"
        code="TEAM"
        title="Software builders &"
        accentText="industry operators."
        lede="Industry operators and software engineers under one roof — building software for clients, and running NexLock and NexWarranty ourselves."
      >
        <div className="flex flex-wrap items-center gap-3">
          {PILLARS.map((p) => (
            <Link
              key={p.id}
              href={p.to}
              className="glass-pill flex items-center gap-2 px-3 py-1.5 text-xs text-text-navy hover:text-primary-electric transition-colors"
            >
              <PillarIcon id={p.id} size="h-7 w-7" iconSize={14} />
              <Wordmark id={p.id} className="text-xs" />
            </Link>
          ))}
        </div>
      </PageHeader>

      {/* ── STORY ────────────────────────────────────────────────────── */}
      <section className="bg-canvas-alt py-24 sm:py-32 border-y border-navy/5 relative overflow-hidden">
        <Container size="wide">
          <div className="grid grid-cols-1 items-center gap-12 lg:gap-16 md:grid-cols-2">
            <Reveal effect="fade-scale">
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-white/90 shadow-glass-lg">
                <Image
                  src="/nexus-team.jpg"
                  alt="The Nexus team at the headquarters office"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal effect="fade-up">
              <div>
                <Eyebrow code="STORY">HOW NEXUS WORKS</Eyebrow>
                <h2 className="mb-5 text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-bold text-text-navy leading-tight">
                  Built from inside the industry,{' '}
                  <span className="serif-italic-accent">engineered in-house.</span>
                </h2>
                <p className="mb-5 text-base sm:text-lg text-text-body leading-relaxed">
                  Nexus was formed by bringing together people who have spent years in retail distribution, consumer finance, and software engineering. We saw that the software powering device protection and retail financing was disconnected from the reality of store counters.
                </p>
                <p className="text-base sm:text-lg text-text-body leading-relaxed">
                  So we built both: a dedicated engineering house for bespoke client software, and two purpose-built products that solve real problems in device financing and extended warranty.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── LEADERSHIP ───────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-canvas relative">
        <Container size="wide">
          <Reveal effect="fade-up">
            <div className="mb-14 sm:mb-18 max-w-[620px]">
              <Eyebrow code="LEADERSHIP">WHO WE ARE</Eyebrow>
              <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text-navy tracking-tight">
                Leadership <span className="serif-italic-accent">team.</span>
              </h2>
              <p className="text-base sm:text-lg text-text-body leading-relaxed">
                Founders and executives who stay close to both the code and the retail floor.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((m, i) => (
              <Reveal key={m.name} effect="fade-up" delay={(i % 3) * 0.1}>
                <TiltCard maxTilt={5} scale={1.02} className="h-full">
                  <SpotlightCard
                    spotlightColor="rgba(37, 99, 235, 0.12)"
                    className="h-full rounded-3xl glass-card bg-white/85 hover:bg-white p-6 border border-white/95 shadow-glass flex flex-col justify-between group"
                  >
                    <div>
                      {/* Portrait Container */}
                      <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-2xl bg-navy/5 shadow-md">
                        <div
                          className="h-full w-full relative"
                          style={m.crop ? { transform: `scale(${m.crop})` } : undefined}
                        >
                          <Image
                            src={m.photo}
                            alt={`${m.name}, ${m.role}`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            style={{ objectPosition: m.focus }}
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                        </div>
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/60 to-transparent" />
                      </div>

                      {/* Info */}
                      <div className="border-l-2 border-primary-electric pl-4">
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-text-navy group-hover:text-primary-electric transition-colors">
                          {m.name}
                        </h3>
                        <p className="mb-2 font-mono text-xs tracking-wider text-primary-electric uppercase font-semibold">
                          {m.role}
                        </p>
                        <p className="text-sm text-text-muted leading-relaxed">
                          {m.bio}
                        </p>
                      </div>
                    </div>
                  </SpotlightCard>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
