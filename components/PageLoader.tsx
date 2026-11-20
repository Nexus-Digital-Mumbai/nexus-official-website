'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

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

  return (
    <div className={`nx-loader ${visible ? '' : 'is-done'}`} role="status" aria-label="Loading" aria-hidden={!visible}>
      <div className="nx-loader__mark">
        <div className="nx-loader__ring" />
        <div className="nx-loader__halo" />
        <img className="nx-loader__logo" src="/favicon-180.png" alt="" />
      </div>
      <div className="nx-loader__word">NEXUS</div>
      <div className="nx-loader__bar" />
    </div>
  );
}
