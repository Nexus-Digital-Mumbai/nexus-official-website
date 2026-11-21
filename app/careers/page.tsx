import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '../../components/PageHeader';
import PhotoBand from '../../components/PhotoBand';
import Container from '../../components/Container';
import Eyebrow from '../../components/Eyebrow';
import Reveal from '../../components/motion/Reveal';
import TiltCard from '../../components/motion/TiltCard';
import SpotlightCard from '../../components/reactbits/SpotlightCard';

export const metadata: Metadata = {
  title: 'Careers — Build With Nexus',
  description:
    'Build software for our clients and the products we run ourselves — NexLock and NexWarranty. Explore open roles in engineering, sales, and operations.',
  alternates: {
    canonical: '/careers',
  },
  openGraph: {
    title: 'Careers at Nexus Digital',
    description:
      'Build software for our clients and the products we run ourselves — NexLock and NexWarranty. Explore open roles in engineering, sales, and operations.',
    url: 'https://nexusdig.in/careers',
  },
};

const CAREERS_EMAIL = 'careers@nexusdig.in';
const applyHref = (role: string) =>
  `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(`Application: ${role}`)}&body=${encodeURIComponent(
    `Hi Nexus team,\n\nI'd like to apply for the ${role} role. My resume is attached.\n\nName:\nPhone:\n`
  )}`;

const JOBS = [
  {
    icon: '🤝',
    title: 'Sales on Ground',
    description:
      'We are looking for energetic ground sales executives to expand our market reach and onboard new retail partners for NexWarranty and NexLock.',
    code: 'NX-JOB-01',
    role: 'Sales on Ground',
  },
  {
    icon: '💻',
    title: 'Software Developer',
    description:
      'Join our engineering team to build client software through Nexus IT Solutions, and the platforms behind NexLock and our CRM systems.',
    code: 'NX-JOB-02',
    role: 'Software Developer',
  },
  {
    icon: '⚙️',
    title: 'Operations Coordinator',
    description:
      'Manage partner onboarding, retailer support, and daily operations across our device security and warranty networks.',
    code: 'NX-JOB-03',
    role: 'Operations Coordinator',
  },
  {
    icon: '🎨',
    title: 'UI/UX Designer',
    description:
      'Design clean, functional interfaces for client software, partner dashboards, and consumer-facing warranty registration flows.',
    code: 'NX-JOB-04',
    role: 'UI/UX Designer',
  },
];

export default function Careers() {
  return (
    <>
      <PageHeader
        compact={true}
        breadcrumbs={[{ label: 'Careers' }]}
        eyebrow="JOIN THE TEAM"
        code="HIRING"
        title="Careers at"
        accentText="Nexus."
        lede="Build software for our clients and the products we run ourselves — NexLock and NexWarranty."
      />

      <PhotoBand
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        stamp="NX · TALENT"
        eyebrow="GROW WITH US"
        heading="Software engineers and retail specialists under one roof."
      />

      <section className="py-24 sm:py-32 bg-canvas relative">
        <Container size="wide">
          <Reveal effect="fade-up">
            <div className="mb-14 sm:mb-18 max-w-[620px]">
              <Eyebrow code="POSITIONS">OPEN ROLES</Eyebrow>
              <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text-navy tracking-tight">
                Current <span className="serif-italic-accent">openings.</span>
              </h2>
              <p className="text-base sm:text-lg text-text-body leading-relaxed">
                We're always looking for capable, ambitious people who want to build real products. Send your resume directly to our hiring team.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {JOBS.map((j, i) => (
              <Reveal key={j.code} effect="fade-up" delay={i * 0.1}>
                <TiltCard maxTilt={4} scale={1.01} className="h-full">
                  <SpotlightCard
                    spotlightColor="rgba(37, 99, 235, 0.12)"
                    className="h-full rounded-3xl glass-card bg-white/85 hover:bg-white p-8 border border-white/95 shadow-glass flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-md border border-navy/5 text-2xl group-hover:scale-110 transition-transform">
                          {j.icon}
                        </span>
                        <span className="font-mono text-xs tracking-wider text-primary-electric uppercase font-bold bg-primary-electric/10 px-3 py-1 rounded-full">
                          {j.code}
                        </span>
                      </div>

                      <h3 className="mb-3 font-serif text-2xl font-bold text-text-navy group-hover:text-primary-electric transition-colors">
                        {j.title}
                      </h3>
                      <p className="text-base text-text-body leading-relaxed mb-6">
                        {j.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-navy/5">
                      <a
                        href={applyHref(j.role)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary-electric hover:underline"
                      >
                        Apply for this role &rarr;
                      </a>
                    </div>
                  </SpotlightCard>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          {/* General Application Banner */}
          <Reveal effect="fade-up" delay={0.2} className="mt-14">
            <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/90 shadow-glass-lg flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-text-navy mb-2">
                  Don't see your role?
                </h3>
                <p className="text-text-body text-base max-w-[50ch]">
                  We're always open to meeting skilled engineers, operations leads, and sales executives. Send an open application with your portfolio or resume.
                </p>
              </div>
              <a
                href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent('Open Application — General')}`}
                className="btn-shimmer whitespace-nowrap px-8 py-4 rounded-full bg-navy text-white font-medium text-sm hover:bg-navy-dark transition-colors shadow-lg"
              >
                Send Open Application &rarr;
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
