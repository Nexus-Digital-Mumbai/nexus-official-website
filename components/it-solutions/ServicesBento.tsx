'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TiltCard from '../motion/TiltCard';
import SpotlightCard from '../reactbits/SpotlightCard';

export interface ServiceItem {
  name: string;
  desc: string;
  badge?: string;
  featured?: boolean;
}

export interface ServiceGroup {
  code: string;
  title: string;
  intro: string;
  highlight?: boolean;
  services: ServiceItem[];
}

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    code: 'BUILD',
    title: 'Build something new',
    intro: 'From a first website to business software designed around how your team works.',
    services: [
      { name: 'Website Development', desc: 'Company websites and landing pages that are fast, responsive and easy to update.' },
      { name: 'Web Application Development', desc: 'Browser-based applications, portals and internal tools.', featured: true },
      { name: 'Mobile Application Development', desc: 'Apps for Android and iOS, connected to your existing systems.' },
      { name: 'Custom Software Development', desc: 'Software built around your process instead of forcing your process around software.', featured: true },
      { name: 'CRM Development', desc: 'CRMs shaped to your sales, service and customer workflows.' },
      { name: 'API Development', desc: 'Clean, documented APIs for your apps, partners and integrations.' },
      { name: 'Database / Backend Development', desc: 'Data models, backend services and business logic that scale with you.' },
    ],
  },
  {
    code: 'IMPROVE',
    title: 'Improve what you already have',
    intro: 'We pick up software someone else built — or that your previous team left behind.',
    highlight: true,
    services: [
      { name: 'Existing CRM Maintenance', desc: 'Keep your current CRM stable, updated and working the way your team needs.', featured: true },
      { name: 'Existing Software Maintenance', desc: 'Ongoing care for applications that are already in production.' },
      { name: 'Bug Fixing', desc: 'Find, fix and verify the issues your users are running into.' },
      { name: 'Feature Development', desc: 'Add new capabilities to an existing codebase without starting over.' },
      { name: 'UI/UX Modernization', desc: 'Refresh outdated interfaces so they are easier and faster to use.', featured: true },
      { name: 'Legacy Software Modernization', desc: 'Move older systems onto current technology, step by step.' },
      { name: 'Performance Improvements', desc: 'Speed up slow pages, queries and workflows.' },
    ],
  },
  {
    code: 'CONNECT & RUN',
    title: 'Connect it and keep it running',
    intro: 'Integrations, releases and the long-term support that keeps software useful.',
    services: [
      { name: 'API & Third-Party Integrations', desc: 'Connect payment gateways, messaging, ERPs and other services.', featured: true },
      { name: 'Deployment / Technical Support', desc: 'Hosting, releases and hands-on help when something goes wrong.' },
      { name: 'Long-term Software Maintenance', desc: 'A technical team on call for the life of your software.', featured: true },
    ],
  },
];

export default function ServicesBento() {
  const [activeTab, setActiveTab] = useState<'all' | 'BUILD' | 'IMPROVE' | 'CONNECT & RUN'>('all');
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  const filterGroups =
    activeTab === 'all'
      ? SERVICE_GROUPS
      : SERVICE_GROUPS.filter((g) => g.code === activeTab);

  const toggleGroup = (code: string) => {
    setExpandedGroup((prev) => (prev === code ? null : code));
  };

  return (
    <div className="w-full">
      {/* Category Filter Tabs with Framer layoutId */}
      <div className="mb-12 flex flex-wrap items-center justify-start sm:justify-center gap-2">
        <button
          onClick={() => setActiveTab('all')}
          className={`relative px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
            activeTab === 'all'
              ? 'text-navy shadow-sm'
              : 'text-text-muted hover:text-navy hover:bg-white/40'
          }`}
        >
          {activeTab === 'all' && (
            <motion.div
              layoutId="serviceFilterPill"
              className="absolute inset-0 rounded-full bg-white shadow-glass border border-navy/10"
              transition={{ type: 'spring', stiffness: 380, damping: 28 }}
            />
          )}
          <span className="relative z-10">All Services (17)</span>
        </button>

        {SERVICE_GROUPS.map((g) => {
          const isActive = activeTab === g.code;
          return (
            <button
              key={g.code}
              onClick={() => setActiveTab(g.code as any)}
              className={`relative px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                isActive
                  ? 'text-navy shadow-sm'
                  : 'text-text-muted hover:text-navy hover:bg-white/40'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="serviceFilterPill"
                  className="absolute inset-0 rounded-full bg-white shadow-glass border border-navy/10"
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <span>{g.code}</span>
                <span className="text-[0.65rem] opacity-70">({g.services.length})</span>
                {g.highlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_6px_#06b6d4]" />
                )}
              </span>
            </button>
          );
        })}
      </div>

      {/* Animated Groups Container */}
      <motion.div layout className="flex flex-col gap-12">
        <AnimatePresence mode="popLayout">
          {filterGroups.map((g) => {
            const isAccordionOpen = expandedGroup === null || expandedGroup === g.code;

            return (
              <motion.div
                key={g.code}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className={`rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-500 ${
                  g.highlight
                    ? 'glass-card bg-cyan-500/[0.04] border border-cyan-500/25 shadow-glass-lg'
                    : 'glass-card bg-white/60 border border-white/80 shadow-glass'
                }`}
              >
                {/* Group Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-navy/10 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`font-mono text-xs tracking-widest uppercase font-bold px-2.5 py-0.5 rounded-full ${
                          g.highlight
                            ? 'bg-cyan-500/15 text-cyan-800 border border-cyan-500/30'
                            : 'bg-navy/8 text-text-muted border border-navy/10'
                        }`}
                      >
                        {g.code}
                      </span>
                      {g.highlight && (
                        <span className="font-mono text-[0.65rem] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 font-semibold border border-emerald-500/20">
                          HIGH DEMAND
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text-navy">
                      {g.title}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-text-body max-w-2xl leading-relaxed">
                      {g.intro}
                    </p>
                  </div>

                  {/* Accordion Toggle Pill */}
                  <button
                    onClick={() => toggleGroup(g.code)}
                    className="self-start md:self-center shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-full glass-card bg-white/80 hover:bg-white text-xs font-mono text-text-navy border border-navy/10 transition-all"
                  >
                    <span>{isAccordionOpen ? 'Collapse' : 'Expand'}</span>
                    <motion.span
                      animate={{ rotate: isAccordionOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-xs"
                    >
                      ▼
                    </motion.span>
                  </button>
                </div>

                {/* Bento Grid with Layout Animation */}
                <AnimatePresence>
                  {isAccordionOpen && (
                    <motion.div
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
                    >
                      {g.services.map((s, idx) => {
                        // Create visual variety: featured cards take 2 columns on medium screens if appropriate
                        const isWide = s.featured && (idx % 3 === 0 || idx === g.services.length - 1);

                        return (
                          <motion.div
                            key={s.name}
                            layout
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, delay: idx * 0.04 }}
                            className={isWide ? 'md:col-span-2 lg:col-span-1' : ''}
                          >
                            <TiltCard maxTilt={5} scale={1.015} className="h-full">
                              <SpotlightCard
                                spotlightColor={
                                  g.highlight
                                    ? 'rgba(6, 182, 212, 0.14)'
                                    : 'rgba(37, 99, 235, 0.1)'
                                }
                                className="h-full p-5 sm:p-6 rounded-2xl glass-card bg-white/85 hover:bg-white border border-white/95 shadow-sm hover:shadow-glass transition-all duration-300 flex flex-col justify-between group"
                              >
                                <div>
                                  <div className="flex items-center justify-between gap-2 mb-3">
                                    <div className="flex items-center gap-2">
                                      <span
                                        className={`w-2 h-2 rounded-full ${
                                          g.highlight
                                            ? 'bg-accent-cyan shadow-[0_0_6px_#06b6d4]'
                                            : 'bg-primary-electric shadow-[0_0_6px_#2563eb]'
                                        }`}
                                      />
                                      <span className="font-mono text-[0.65rem] tracking-wider text-text-muted uppercase font-semibold">
                                        Service 0{idx + 1}
                                      </span>
                                    </div>
                                    {s.featured && (
                                      <span className="font-mono text-[0.62rem] px-2 py-0.5 rounded bg-primary-electric/8 text-primary-electric font-semibold border border-primary-electric/15">
                                        CORE
                                      </span>
                                    )}
                                  </div>

                                  <h4 className="font-serif text-lg font-bold text-text-navy mb-2 group-hover:text-primary-electric transition-colors">
                                    {s.name}
                                  </h4>
                                  <p className="text-xs sm:text-sm text-text-body leading-relaxed">
                                    {s.desc}
                                  </p>
                                </div>

                                <div className="mt-4 pt-3 border-t border-navy/5 flex items-center justify-between text-[0.72rem] font-mono text-text-muted">
                                  <span>Nexus SLA Verified</span>
                                  <span className="text-cyan-700 font-semibold group-hover:translate-x-1 transition-transform">
                                    &rarr;
                                  </span>
                                </div>
                              </SpotlightCard>
                            </TiltCard>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
