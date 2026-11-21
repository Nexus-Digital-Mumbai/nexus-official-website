'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DEVICES = [
  { id: 'NX-8921', model: 'Galaxy A54 5G', borrower: 'Amit K.', emi: '₹2,190', due: 'Paid', status: 'Active', tone: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' },
  { id: 'NX-8922', model: 'Redmi Note 13', borrower: 'Pooja S.', emi: '₹1,850', due: 'Yesterday', status: 'Warning', tone: 'bg-amber-500/15 text-amber-300 border-amber-500/30' },
  { id: 'NX-8923', model: 'Vivo V29e', borrower: 'Rahul M.', emi: '₹2,600', due: '7d overdue', status: 'Restricted', tone: 'bg-red-500/15 text-red-400 border-red-500/30' },
  { id: 'NX-8924', model: 'OnePlus Nord CE3', borrower: 'Sneha D.', emi: '₹2,400', due: 'In 5 days', status: 'Active', tone: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' },
];

export default function NexlockDashboardPreview() {
  const [selectedDevice, setSelectedDevice] = useState(DEVICES[2]);
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  const triggerAction = (action: string) => {
    setActionNotice(`${action} command dispatched to ${selectedDevice.id}`);
    setTimeout(() => setActionNotice(null), 3000);
  };

  return (
    <div className="relative w-full rounded-3xl glass-dark border border-white/15 shadow-2xl overflow-hidden text-left">
      {/* Dashboard Topbar */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/10 px-5 sm:px-6 py-4 bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/90" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
          </div>
          <span className="font-mono text-xs text-slate-300 font-semibold tracking-wider ml-2">
            NEXLOCK · ENTERPRISE CONSOLE
          </span>
          <span className="hidden sm:inline-block font-mono text-[0.62rem] px-2 py-0.5 rounded bg-blue-500/20 text-cyan-300 border border-blue-500/30 uppercase">
            v3.4 Live
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-200">50,420 Enrolled</span>
          </span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6">
        {/* Left: Device Telemetry Table */}
        <div>
          <div className="flex items-center justify-between mb-3.5">
            <h4 className="font-serif text-sm sm:text-base font-bold text-white tracking-wide">
              Portfolio Device Roster
            </h4>
            <span className="font-mono text-[0.62rem] text-slate-400 uppercase">
              Auto-Sync: 15s
            </span>
          </div>

          <div className="space-y-2">
            {DEVICES.map((d) => {
              const isSelected = selectedDevice.id === d.id;
              return (
                <div
                  key={d.id}
                  onClick={() => setSelectedDevice(d)}
                  className={`flex flex-wrap items-center justify-between gap-2 p-3 sm:p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white/10 border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                      : 'bg-white/[0.03] border-white/5 hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-cyan-300">
                      {d.id}
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-white">{d.model}</p>
                      <p className="text-[0.68rem] text-slate-400 font-mono">{d.borrower}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                      <p className="text-xs font-mono font-semibold text-white">{d.emi}</p>
                      <p className="text-[0.65rem] text-slate-400 font-mono">{d.due}</p>
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full font-mono text-[0.62rem] uppercase font-bold border ${d.tone}`}>
                      {d.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {actionNotice && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 p-2.5 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 font-mono text-xs flex items-center gap-2"
            >
              <span>⚡</span>
              <span>{actionNotice}</span>
            </motion.div>
          )}
        </div>

        {/* Right: Remote Control & Quick Action Panel */}
        <div className="flex flex-col justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/8">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <span className="font-mono text-xs text-slate-400 uppercase font-semibold">
                Device Command Center
              </span>
              <span className="font-mono text-xs text-cyan-400 font-bold">
                {selectedDevice.id}
              </span>
            </div>

            <div className="space-y-2 mb-6 text-xs font-mono">
              <div className="flex justify-between text-slate-400">
                <span>Model:</span>
                <span className="text-slate-100">{selectedDevice.model}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Borrower:</span>
                <span className="text-slate-100">{selectedDevice.borrower}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Lock Policy:</span>
                <span className="text-cyan-300">Automated L2 Overlay</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>SIM Status:</span>
                <span className="text-emerald-400">Original Verified</span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-2.5">
              <button
                onClick={() => triggerAction('Automated Reminder')}
                className="w-full py-2.5 px-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <span>🔔</span> Send Payment Reminder
              </button>
              <button
                onClick={() => triggerAction('Remote Lock Overlay')}
                className="w-full py-2.5 px-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-red-600/30 hover:bg-red-600/50 text-red-200 border border-red-500/40 transition-all flex items-center justify-center gap-2"
              >
                <span>🔒</span> Remote Lock Device
              </button>
              <button
                onClick={() => triggerAction('Instant Restore')}
                className="w-full py-2.5 px-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>⚡</span> Instant Restore & Unlock
              </button>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[0.62rem] font-mono text-slate-400">
            <span>Latency: 28ms</span>
            <span className="text-emerald-400">Encrypted (TLS 1.3)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
