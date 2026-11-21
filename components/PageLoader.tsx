'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const ROUTE_MS = 550; // brief brand beat when moving between pages

export default function PageLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (pathname === prevPath.current) return;
    prevPath.current = pathname;
    setVisible(true);
    const t = setTimeout(() => setVisible(false), ROUTE_MS);
    return () => clearTimeout(t);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-canvas/80 backdrop-blur-xl transition-opacity duration-300"
      role="status"
      aria-label="Loading"
    >
      <div className="glass-card p-8 rounded-3xl flex flex-col items-center shadow-glass-lg border border-white/90">
        {/* Orbital Glass Nexus Mark */}
        <div className="relative w-28 h-28 flex items-center justify-center mb-6">
          <div className="absolute inset-0 rounded-full border border-primary-electric/25 animate-[orbit-spin_4s_linear_infinite]" />
          <div className="absolute inset-2 rounded-full border-t border-b border-accent-cyan/60 animate-[orbit-spin-rev_3s_linear_infinite]" />
          <div className="absolute inset-4 rounded-full bg-white/70 backdrop-blur-md shadow-inner flex items-center justify-center border border-white/80">
            <Image
              className="w-12 h-12 object-contain"
              src="/favicon-180.png"
              alt="Nexus"
              width={48}
              height={48}
              priority
            />
          </div>
        </div>

        {/* Wordmark */}
        <div className="font-serif font-bold text-sm tracking-[0.35em] text-navy uppercase pl-1 mb-4">
          NEXUS
        </div>

        {/* High-speed gradient progress bar */}
        <div className="w-32 h-1 rounded-full bg-navy/8 overflow-hidden">
          <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-primary-electric to-accent-cyan animate-[nx-sweep_1.1s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
