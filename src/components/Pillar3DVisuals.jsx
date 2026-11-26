import React from 'react';

/**
 * ─── 1. IT SOLUTIONS: Floating 3D Isometric Software Architecture Layers ───
 * Stacked transparent blue and cyan glass panels with glowing nodes and circuit traces.
 */
export function ITLayersVisual() {
  return (
    <div className="relative w-full max-w-[200px] h-[160px] flex items-center justify-center select-none" aria-hidden="true">
      <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '600px' }}>
        {/* Ambient cyan glow */}
        <div className="absolute inset-0 bg-cyan-400/20 blur-2xl rounded-full" />

        {/* Isometric stacked panels */}
        <div
          className="relative w-[130px] h-[110px] transition-transform duration-500 hover:scale-105"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(58deg) rotateZ(-38deg)',
          }}
        >
          {/* Layer 1 (Bottom Panel - Database / Infra) */}
          <div
            className="absolute inset-0 rounded-xl border border-cyan-400/40 bg-gradient-to-br from-[#0057D9]/40 to-[#061A40]/80 shadow-[0_10px_20px_rgba(0,123,255,0.25)] backdrop-blur-md"
            style={{ transform: 'translateZ(0px)' }}
          >
            {/* Grid circuit pattern */}
            <div className="absolute inset-2 grid grid-cols-3 grid-rows-3 gap-1.5 opacity-60">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="rounded-sm border border-cyan-300/30 bg-cyan-500/10" />
              ))}
            </div>
          </div>

          {/* Layer 2 (Middle Panel - API / Logic) */}
          <div
            className="absolute inset-0 rounded-xl border border-cyan-300/60 bg-gradient-to-br from-[#00C8FF]/35 to-[#0057D9]/50 shadow-[0_10px_25px_rgba(0,200,255,0.3)] backdrop-blur-md"
            style={{ transform: 'translateZ(30px)' }}
          >
            <div className="absolute inset-2.5 flex flex-col justify-between p-1">
              <div className="h-1.5 w-12 rounded-full bg-cyan-200/80" />
              <div className="h-1.5 w-16 rounded-full bg-cyan-300/60" />
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#00E5FF] shadow-[0_0_6px_#00E5FF]" />
                <span className="h-2 w-2 rounded-full bg-blue-400" />
              </div>
            </div>
          </div>

          {/* Layer 3 (Top Panel - UI / Frontend) */}
          <div
            className="absolute inset-0 rounded-xl border border-white/80 bg-gradient-to-br from-white/40 via-cyan-200/30 to-[#007BFF]/40 shadow-[0_15px_30px_rgba(0,200,255,0.4)] backdrop-blur-md"
            style={{
              transform: 'translateZ(60px)',
              animation: 'float-slow 4s ease-in-out infinite',
            }}
          >
            {/* Glossy top edge highlight */}
            <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-xl bg-gradient-to-b from-white/60 to-transparent" />
            <div className="p-2.5">
              <div className="flex items-center gap-1 mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              </div>
              <div className="h-2 w-8 rounded-full bg-white/90 shadow-[0_0_8px_white]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ─── 2. NEXLOCK: 3D Metallic Padlock Standing on a Glowing Cyan Glass Platform ───
 */
export function NexLockPadlockVisual() {
  return (
    <div className="relative w-full max-w-[200px] h-[160px] flex items-center justify-center select-none" aria-hidden="true">
      {/* Background glow */}
      <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />

      <div className="relative flex flex-col items-center justify-center">
        {/* Floating Padlock Graphic */}
        <div
          className="relative z-10 w-20 h-24 flex flex-col items-center transition-transform duration-500 hover:scale-105"
          style={{ animation: 'float-slow 5s ease-in-out infinite' }}
        >
          {/* Shackle */}
          <div className="relative w-12 h-11 rounded-t-full border-[5px] border-cyan-200 shadow-[0_0_15px_rgba(0,200,255,0.6)] bg-gradient-to-b from-[#00E5FF] to-[#0057D9]" />
          
          {/* Padlock Body */}
          <div className="relative -mt-2 w-16 h-14 rounded-xl border border-white/60 bg-gradient-to-br from-[#00C8FF] via-[#0057D9] to-[#061A40] shadow-[0_10px_25px_rgba(0,87,217,0.5)] flex items-center justify-center overflow-hidden">
            {/* Metallic surface gleam */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/35 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
            {/* Keyhole */}
            <div className="flex flex-col items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_white]" />
              <div className="w-1.5 h-3 bg-white -mt-0.5 rounded-b-sm" />
            </div>
          </div>
        </div>

        {/* Glowing circular glass podium platform */}
        <div className="relative -mt-3 w-28 h-6 rounded-full border border-cyan-400/50 bg-gradient-to-r from-cyan-400/20 via-blue-500/30 to-cyan-400/20 shadow-[0_0_20px_rgba(0,200,255,0.4)] backdrop-blur-sm" />
      </div>
    </div>
  );
}

/**
 * ─── 3. NEXWARRANTY: 3D Metallic Shield with Glossy Blue Checkmark ───
 */
export function NexWarrantyShieldVisual() {
  return (
    <div className="relative w-full max-w-[200px] h-[160px] flex items-center justify-center select-none" aria-hidden="true">
      <div className="absolute inset-0 bg-cyan-400/20 blur-2xl rounded-full" />

      <div
        className="relative z-10 transition-transform duration-500 hover:scale-105"
        style={{ animation: 'float-slow 5.5s ease-in-out infinite' }}
      >
        {/* Shield Outer Container */}
        <div className="relative w-22 h-26 flex items-center justify-center filter drop-shadow-[0_12px_28px_rgba(0,87,217,0.45)]">
          <svg viewBox="0 0 100 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="25%" stopColor="#00C8FF" stopOpacity="0.85" />
                <stop offset="70%" stopColor="#0057D9" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#061A40" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="shield-rim" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#00E5FF" />
                <stop offset="100%" stopColor="#0057D9" />
              </linearGradient>
            </defs>

            {/* Shield Outline & Body */}
            <path
              d="M50 8 L88 22 C88 68 50 108 50 108 C50 108 12 68 12 22 Z"
              fill="url(#shield-grad)"
              stroke="url(#shield-rim)"
              strokeWidth="3.5"
            />

            {/* Inner reflective facet */}
            <path
              d="M50 15 L80 26 C80 64 50 98 50 98 Z"
              fill="rgba(255, 255, 255, 0.22)"
            />

            {/* Radiant Checkmark */}
            <path
              d="M34 56 L46 68 L68 44"
              stroke="#FFFFFF"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="drop-shadow(0 0 8px #00E5FF)"
            />
          </svg>
        </div>

        {/* Small floating cyan accent orb */}
        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-tr from-[#0057D9] via-[#00C8FF] to-white shadow-[0_0_10px_#00E5FF]" />
      </div>
    </div>
  );
}

/**
 * ─── 4. IT SOLUTIONS SECTION: Floating Code Editor Window ───
 */
export function ITCodeVisual() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto select-none" aria-hidden="true">
      {/* Background glass layered panels */}
      <div className="absolute -top-6 -right-6 w-full h-full rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-transparent shadow-[0_20px_50px_rgba(0,123,255,0.15)] backdrop-blur-xl" />
      <div className="absolute -bottom-5 -left-5 w-[85%] h-[85%] rounded-2xl border border-blue-500/20 bg-gradient-to-tr from-[#061A40]/15 to-transparent backdrop-blur-lg" />

      {/* Main Code Editor Window */}
      <div
        className="relative z-10 overflow-hidden rounded-2xl border border-white/20 bg-[#061A40] text-left shadow-[0_30px_70px_rgba(3,17,43,0.45)] transition-transform duration-500 hover:scale-[1.01]"
        style={{ animation: 'float-slow 6s ease-in-out infinite' }}
      >
        {/* Window Titlebar */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#03112B]/90 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF5F56] shadow-[0_0_6px_#FF5F56]" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E] shadow-[0_0_6px_#FFBD2E]" />
            <span className="h-3 w-3 rounded-full bg-[#27C93F] shadow-[0_0_6px_#27C93F]" />
          </div>
          <span className="font-mono text-[0.7rem] text-slate-400 tracking-wider">nexus.config.js</span>
          <div className="w-8" />
        </div>

        {/* Code Content */}
        <div className="p-5 sm:p-6 font-mono text-[0.78rem] sm:text-[0.84rem] leading-relaxed text-slate-300 overflow-x-auto">
          <div className="flex gap-4">
            {/* Line numbers */}
            <div className="flex flex-col text-slate-500 select-none text-right w-4">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
              <span>11</span>
            </div>

            {/* Code syntax */}
            <div className="flex flex-col">
              <div>
                <span className="text-[#FF7B72]">const</span>{' '}
                <span className="text-[#79C0FF]">nexus</span> = {'{'}
              </div>
              <div className="pl-4">
                <span className="text-[#FFA657]">build</span>:{' '}
                <span className="text-[#A5D6FF]">"solutions"</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#FFA657]">innovate</span>:{' '}
                <span className="text-[#79C0FF]">true</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#FFA657]">scale</span>:{' '}
                <span className="text-[#A5D6FF]">"global"</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#FFA657]">products</span>: [
                <span className="text-[#A5D6FF]">"NexLock"</span>,{' '}
                <span className="text-[#A5D6FF]">"NexWarranty"</span>],
              </div>
              <div className="pl-4">
                <span className="text-[#FFA657]">mission</span>:{' '}
                <span className="text-[#A5D6FF]">"Technology for a better tomorrow"</span>
              </div>
              <div>{'}'};</div>
              <div className="mt-2">
                <span className="text-[#FF7B72]">function</span>{' '}
                <span className="text-[#D2A8FF]">getStarted</span>() {'{'}
              </div>
              <div className="pl-4">
                <span className="text-[#FF7B72]">return</span>{' '}
                <span className="text-[#79C0FF]">nexus</span>.
                <span className="text-[#D2A8FF]">build</span>();
              </div>
              <div>{'}'}</div>
              <div className="mt-2">
                <span className="text-[#79C0FF]">console</span>.
                <span className="text-[#D2A8FF]">log</span>(
                <span className="text-[#A5D6FF]">"Nexus"</span>);
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ─── 5. NEXLOCK SECTION: Sleek Smartphone with Device Restricted Screen ───
 */
export function SmartphoneLockVisual() {
  return (
    <div className="relative w-full max-w-[380px] mx-auto select-none" aria-hidden="true">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-blue-500/25 blur-3xl rounded-full" />

      {/* Orbital cyan light ribbon encircling phone */}
      <div
        className="absolute -inset-4 rounded-full border-2 border-dashed border-cyan-400/40 pointer-events-none"
        style={{
          transform: 'rotateX(62deg) rotateY(-20deg)',
          boxShadow: '0 0 30px rgba(0, 200, 255, 0.35)',
          animation: 'orbit-cw 20s linear infinite',
        }}
      />

      {/* Floating Badge Chip 1: One QR Scan */}
      <div
        className="absolute top-8 -right-4 sm:-right-8 z-30 flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-white/90 px-3.5 py-2 shadow-[0_10px_25px_rgba(0,123,255,0.18)] backdrop-blur-md"
        style={{ animation: 'float-slow 4.5s ease-in-out infinite' }}
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-[#0057D9]">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <path d="M14 14h3v3h-3z" fill="currentColor" />
          </svg>
        </span>
        <span className="font-display text-[0.82rem] font-semibold text-slate-900">One QR scan</span>
      </div>

      {/* Floating Badge Chip 2: SIM swap detected */}
      <div
        className="absolute bottom-12 -left-4 sm:-left-8 z-30 flex items-center gap-2 rounded-xl border border-amber-400/50 bg-white/95 px-3.5 py-2 shadow-[0_10px_25px_rgba(245,158,11,0.18)] backdrop-blur-md"
        style={{ animation: 'float-slow 5s ease-in-out 1.5s infinite' }}
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </span>
        <span className="font-display text-[0.82rem] font-semibold text-slate-900">SIM swap detected</span>
      </div>

      {/* Smartphone Frame */}
      <div
        className="relative z-20 mx-auto w-[240px] sm:w-[260px] rounded-[44px] border-[7px] border-slate-900 bg-black p-3 shadow-[0_25px_60px_rgba(6,26,64,0.35)]"
        style={{ animation: 'float-slow 6s ease-in-out infinite' }}
      >
        {/* Dynamic Island / Notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 h-4 w-20 rounded-full bg-black z-30" />

        {/* Phone Screen: Navy Restricted UI */}
        <div className="relative h-[480px] w-full overflow-hidden rounded-[34px] bg-gradient-to-b from-[#061A40] via-[#03112B] to-[#020A1A] p-6 text-center flex flex-col items-center justify-center text-white">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-grid-ink opacity-30" />

          {/* Central Security Lock Emblem */}
          <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-3xl border border-cyan-400/40 bg-gradient-to-br from-[#00C8FF]/20 via-[#0057D9]/40 to-[#061A40] shadow-[0_0_35px_rgba(0,200,255,0.45)] backdrop-blur-md">
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_#00E5FF]">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>

          {/* Status Label */}
          <p className="relative z-10 font-display text-xl font-bold tracking-tight text-white mb-2">
            Device restricted
          </p>
          <p className="relative z-10 text-xs text-slate-300 max-w-[20ch] leading-relaxed">
            EMI payment overdue. Clear payment to restore access instantly.
          </p>

          {/* Unlock action simulation */}
          <div className="relative z-10 mt-8 w-full rounded-xl border border-cyan-400/40 bg-cyan-500/15 py-2.5 text-xs font-semibold text-cyan-300 shadow-[0_0_15px_rgba(0,200,255,0.2)]">
            Pay Now & Unlock &rarr;
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ─── 6. NEXWARRANTY SECTION: Digital Warranty Certificate with Metallic Seal ───
 */
export function WarrantyCertificateVisual() {
  return (
    <div className="relative w-full max-w-[440px] mx-auto select-none" aria-hidden="true">
      {/* Background glow and rings */}
      <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full" />
      <div
        className="absolute -top-4 -right-4 w-28 h-28 rounded-full border border-cyan-400/30 opacity-70"
        style={{ animation: 'orbit-cw 20s linear infinite' }}
      />

      {/* Floating Cyan Sphere Accent */}
      <div
        className="absolute -top-4 -right-2 w-7 h-7 rounded-full shadow-[0_6px_16px_rgba(0,123,255,0.4)] z-30"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #FFFFFF, #00C8FF, #0057D9)',
          animation: 'float-slow 5s ease-in-out infinite',
        }}
      />

      {/* Certificate Card Container */}
      <div
        className="relative z-10 rounded-2xl border border-cyan-200/60 bg-white/95 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,87,217,0.18)] backdrop-blur-xl transition-transform duration-500 hover:scale-[1.01]"
        style={{ animation: 'float-slow 6.5s ease-in-out infinite' }}
      >
        {/* Subtle security certificate guilloche border */}
        <div className="absolute inset-2 rounded-xl border border-dashed border-cyan-500/25 pointer-events-none" />

        {/* Certificate Header */}
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 mb-5">
          <div>
            <span className="font-display text-lg font-bold tracking-tight text-[#061A40]">
              NEXWARRANTY
            </span>
            <span className="block font-mono text-[0.62rem] tracking-[0.14em] text-slate-500 uppercase">
              Official Coverage Certificate
            </span>
          </div>
          <span className="rounded-full bg-cyan-50 border border-cyan-300 px-2.5 py-1 font-mono text-[0.64rem] font-semibold text-[#0057D9]">
            ACTIVE
          </span>
        </div>

        {/* Certificate Fields Table matching Reference Image 1 */}
        <div className="space-y-3 font-mono text-xs text-slate-700">
          <div className="flex justify-between items-center py-1 border-b border-slate-100">
            <span className="text-slate-500">Product:</span>
            <span className="font-semibold text-slate-900">Home Appliances</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-slate-100">
            <span className="text-slate-500">Plan Term:</span>
            <span className="font-semibold text-slate-900">1 to 4 Years</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-slate-100">
            <span className="text-slate-500">Cover up to:</span>
            <span className="font-semibold text-[#0057D9]">₹20 Lakh</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-slate-100">
            <span className="text-slate-500">Deductible:</span>
            <span className="font-semibold text-emerald-600">Zero</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-slate-500">Depreciation:</span>
            <span className="font-semibold text-emerald-600">0%</span>
          </div>
        </div>

        {/* Metallic Blue Stamp / Rosette Seal Badge */}
        <div className="mt-5 pt-3 flex items-center justify-between">
          <span className="font-mono text-[0.6rem] text-slate-400">
            CERT ID: NXW-2026-902R
          </span>

          <div className="relative flex items-center justify-center">
            {/* Outer Rosette Ring */}
            <div className="w-12 h-12 rounded-full border-2 border-cyan-400 bg-gradient-to-br from-[#00C8FF] to-[#0057D9] flex items-center justify-center shadow-[0_4px_14px_rgba(0,123,255,0.35)]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            {/* Ribbons hanging below */}
            <div className="absolute -bottom-2.5 flex gap-1">
              <div className="w-2.5 h-3.5 bg-[#0057D9] clip-ribbon" />
              <div className="w-2.5 h-3.5 bg-[#007BFF] clip-ribbon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
