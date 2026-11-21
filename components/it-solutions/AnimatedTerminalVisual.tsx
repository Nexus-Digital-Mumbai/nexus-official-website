'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = [
  { id: 'tickets', label: 'maintenance-board', ext: '.crm' },
  { id: 'code', label: 'system-sync', ext: '.ts' },
  { id: 'logs', label: 'telemetry', ext: '.log' },
];

const TICKETS = [
  {
    type: 'Bug fix',
    title: 'Invoice totals not syncing to reports',
    status: 'Fixed',
    badge: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
  },
  {
    type: 'Feature',
    title: 'Customer notifications via third-party API',
    status: 'In progress',
    badge: 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30',
  },
  {
    type: 'UI/UX',
    title: 'Modernize the sales dashboard',
    status: 'In review',
    badge: 'bg-indigo-500/20 text-indigo-200 border border-indigo-500/30',
  },
  {
    type: 'Performance',
    title: 'Slow customer search on large datasets',
    status: 'Planned',
    badge: 'bg-white/10 text-slate-300 border border-white/15',
  },
];

const CODE_LINES = [
  { num: '01', line: '// Nexus IT Solutions — CRM sync engine' },
  { num: '02', line: 'export async function syncCustomerRecords(id: string) {' },
  { num: '03', line: '  const record = await db.clientCRM.findById(id);' },
  { num: '04', line: '  if (!record.isNormalized) {' },
  { num: '05', line: '    await telemetry.log("modernizing schema...");' },
  { num: '06', line: '    return migrateLegacyRecord(record);' },
  { num: '07', line: '  }' },
  { num: '08', line: '  return pipeline.dispatch(record, { retry: 3 });' },
  { num: '09', line: '}' },
];

const LOG_LINES = [
  { time: '12:04:18', level: 'OK', text: 'Telemetry daemon listening on port 9042' },
  { time: '12:04:22', level: 'SYNC', text: 'Database replication verified (latency 1.4ms)' },
  { time: '12:04:27', level: 'FIXED', text: 'Patch applied: report calculation formula v2.1' },
  { time: '12:04:31', level: 'LIVE', text: '4 active client microservices healthy' },
];

export default function AnimatedTerminalVisual() {
  const [activeTab, setActiveTab] = useState('tickets');
  const [pulseIndex, setPulseIndex] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % TICKETS.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[520px]">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute -top-10 -right-8 w-60 h-60 rounded-full bg-accent-cyan/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-8 w-52 h-52 rounded-full bg-primary-electric/15 blur-3xl" />

      {/* Floating Refractive Glass Shards */}
      <div
        className="pointer-events-none absolute -top-8 -left-6 w-16 h-16 rounded-2xl border border-white/40 bg-white/10 backdrop-blur-xl shadow-glass -rotate-12 hidden sm:block z-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-6 right-6 w-14 h-14 rounded-xl border border-white/30 bg-cyan-400/10 backdrop-blur-lg shadow-glass rotate-12 hidden sm:block z-0"
        aria-hidden="true"
      />

      {/* Main Glass IDE Container */}
      <div className="relative z-10 glass-dark rounded-3xl border border-white/15 shadow-2xl overflow-hidden text-left">
        {/* Titlebar with traffic lights and tabs */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 sm:px-5 py-3 bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />

            {/* Clickable tabs */}
            <div className="ml-3 flex items-center gap-1">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-2.5 py-1 rounded-lg font-mono text-[0.66rem] transition-colors ${
                      isActive
                        ? 'text-cyan-300 bg-white/10 font-medium'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span className="opacity-50">{tab.ext}</span>
                    {isActive && (
                      <motion.div
                        layoutId="terminalTabGlow"
                        className="absolute inset-0 rounded-lg border border-cyan-400/30"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 font-mono text-[0.6rem] text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>PRODUCTION</span>
          </div>
        </div>

        {/* Tab Body */}
        <div className="p-5 sm:p-6 min-h-[260px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {activeTab === 'tickets' && (
              <motion.div
                key="tickets"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-3.5 flex items-center justify-between">
                  <p className="font-mono text-xs tracking-wider text-cyan-400 uppercase font-semibold">
                    Existing system · ongoing
                  </p>
                  <span className="font-mono text-[0.62rem] tracking-wider text-slate-500 uppercase">
                    Illustrative
                  </span>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {TICKETS.map((t, idx) => {
                    const isPulsing = idx === pulseIndex;
                    return (
                      <li
                        key={t.title}
                        className={`flex items-center gap-3 rounded-xl border px-3.5 py-2.5 transition-all duration-300 ${
                          isPulsing
                            ? 'border-cyan-400/40 bg-white/[0.08] shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                            : 'border-white/8 bg-white/[0.03] hover:bg-white/[0.06]'
                        }`}
                      >
                        <span className="w-20 shrink-0 font-mono text-[0.68rem] tracking-wider text-cyan-300 uppercase font-medium">
                          {t.type}
                        </span>
                        <span className="min-w-0 flex-1 truncate text-xs sm:text-[0.84rem] text-slate-100">
                          {t.title}
                        </span>
                        <span className={`shrink-0 rounded-full px-2.5 py-0.5 font-mono text-[0.62rem] uppercase font-semibold ${t.badge}`}>
                          {t.status}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            )}

            {activeTab === 'code' && (
              <motion.div
                key="code"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="font-mono text-[0.74rem] leading-relaxed"
              >
                <div className="mb-2 text-[0.64rem] text-slate-400 uppercase tracking-widest">
                  Modernization Script / Refactoring
                </div>
                {CODE_LINES.map((c, i) => (
                  <div key={i} className="flex gap-3 hover:bg-white/[0.04] px-1 rounded">
                    <span className="text-slate-500 select-none w-5 text-right shrink-0">
                      {c.num}
                    </span>
                    <span className={i === 0 ? 'text-slate-400 italic' : i === 4 ? 'text-amber-300' : 'text-slate-200'}>
                      {c.line}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'logs' && (
              <motion.div
                key="logs"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="font-mono text-[0.72rem] space-y-2"
              >
                <div className="mb-2 text-[0.64rem] text-slate-400 uppercase tracking-widest">
                  Live Stream / Healthcheck
                </div>
                {LOG_LINES.map((l, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-2 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-slate-500 text-[0.65rem] shrink-0">{l.time}</span>
                    <span className="px-1.5 py-0.2 rounded text-[0.6rem] font-bold bg-cyan-500/20 text-cyan-300 shrink-0">
                      {l.level}
                    </span>
                    <span className="text-slate-300 truncate">{l.text}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Status footer bar */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-slate-400 font-mono text-[0.62rem]">
            <span>Nexus DevEngine · High Availability</span>
            <span className="text-emerald-400 font-medium">99.98% Uptime</span>
          </div>
        </div>
      </div>

      {/* Floating Shard Card (New Build) */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute -right-4 -bottom-8 z-20 w-[240px] rounded-2xl glass-card bg-white/95 p-4 shadow-glass-lg border border-white hidden sm:block"
      >
        <p className="font-mono text-[0.65rem] tracking-wider text-text-muted uppercase font-semibold">
          New build
        </p>
        <p className="mt-1 font-serif text-sm font-bold text-text-navy">
          Customer mobile app
        </p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-navy/10">
          <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-primary-electric to-accent-cyan" />
        </div>
        <p className="mt-2 text-xs font-mono text-text-muted">Web · Android · iOS</p>
      </motion.div>
    </div>
  );
}
