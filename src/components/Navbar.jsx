import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import PillNav from './PillNav';
import SpecularButton from './SpecularButton';
import { brands } from '../data/brands';
import useMagnetic from '../animations/useMagnetic';
import { isReducedMotion } from '../animations/motionTokens';

function RouterLink({ href, to, className, children, onClick, ...rest }) {
  return (
    <NavLink
      to={to || href}
      className={className}
      onClick={onClick}
      {...rest}
    >
      {children}
    </NavLink>
  );
}

function MagneticContactButton() {
  const btnRef = useMagnetic(0.22);

  return (
    <SpecularButton
      ref={btnRef}
      to="/contact"
      className="inline-flex items-center gap-1.5 rounded-full bg-[#061A40] dark:bg-[#0057D9] px-4 sm:px-5 py-2 text-xs sm:text-[0.84rem] font-semibold text-white shadow-[0_4px_14px_rgba(6,26,64,0.2)] dark:shadow-[0_4px_18px_rgba(0,87,217,0.4)] transition-all duration-200 hover:bg-[#0057D9] dark:hover:bg-[#007BFF] hover:shadow-[0_6px_20px_rgba(0,87,217,0.35)] shrink-0"
    >
      <span>Contact</span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-200 group-hover:translate-x-0.5"
        aria-hidden="true"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </SpecularButton>
  );
}

export default function Navbar({ dark, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const navContainerRef = useRef(null);
  const location = useLocation();
  const currentPath = location.pathname;

  // Resolve active path for PillNav tracking
  let activeHref = currentPath;
  if (currentPath.startsWith('/brands')) {
    activeHref = '/brands';
  } else if (currentPath === '/nexwarranty') {
    activeHref = '/nexwarrenty';
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Smooth navbar initial entrance animation
    if (!isReducedMotion() && navContainerRef.current) {
      gsap.fromTo(
        navContainerRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.1 }
      );
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Brands dropdown menu preview
  const brandsDropdown = (
    <div className="glass-popover min-w-[240px] rounded-2xl border border-cyan-500/25 bg-white/95 dark:bg-[#061A40]/95 p-2 shadow-[0_20px_50px_rgba(0,123,255,0.18)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
      {brands.map((b) => (
        <NavLink
          key={b.slug}
          to={`/brands/${b.slug}`}
          className="block rounded-xl px-4 py-2.5 text-xs font-medium text-slate-700 dark:text-slate-200 transition-colors hover:bg-cyan-50 dark:hover:bg-cyan-900/30 hover:text-[#0057D9] dark:hover:text-[#00C8FF]"
        >
          <span className="block font-semibold text-slate-900 dark:text-white">{b.name}</span>
          <span className="block text-[0.7rem] text-slate-500 dark:text-slate-400">{b.partner} partnership</span>
        </NavLink>
      ))}
    </div>
  );

  const items = [
    { label: 'IT Solutions', href: '/it-solutions' },
    { label: 'NexLock', href: '/nexlock' },
    { label: 'NexWarranty', href: '/nexwarrenty' },
    { label: 'Brands', href: '/brands', dropdown: brandsDropdown },
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Collaborate', href: '/collaborate' },
  ];

  // Brand logo element
  const logo = (
    <div className="flex items-center gap-2 py-0.5 px-1.5 sm:px-2.5">
      <img
        src={dark ? '/nexus-logo-white.png' : '/nexus-logo.png'}
        alt="NEXUS"
        className="h-7 sm:h-8 w-auto max-h-[32px] object-contain transition-all duration-300"
      />
    </div>
  );

  // Right-side actions: Theme toggle button + Specular Contact button
  const actions = (
    <div className="flex items-center gap-1.5 sm:gap-2.5">
      <button
        type="button"
        aria-label="Toggle theme"
        aria-pressed={dark}
        title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        onClick={onToggleTheme}
        className="theme-toggle flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-slate-300/80 dark:border-cyan-400/30 text-[#061A40] dark:text-cyan-200 bg-white/70 dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/20 transition-all duration-200 shadow-sm"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="17"
          height="17"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {dark ? (
            <>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
            </>
          ) : (
            <path d="M20.5 14.4A9 9 0 0 1 9.6 3.5a9 9 0 1 0 10.9 10.9Z" />
          )}
        </svg>
      </button>
      <MagneticContactButton />
    </div>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-[1000] px-3 sm:px-6 pt-3 pointer-events-none transition-all duration-300">
      <div
        ref={navContainerRef}
        className="pointer-events-auto mx-auto max-w-[1240px] flex justify-center will-change-transform"
      >
        <PillNav
          logo={logo}
          logoAlt="NEXUS"
          logoHref="/"
          items={items}
          activeHref={activeHref}
          linkComponent={RouterLink}
          theme={dark ? 'dark' : 'light'}
          layout="joined"
          itemStyle="plain"
          hoverEffect="fill"
          indicator="dot"
          size="lg"
          surface="glass"
          actions={actions}
          className={`w-full transition-all duration-300 ${
            scrolled
              ? 'shadow-[0_16px_45px_rgba(6,26,64,0.16)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.85)]'
              : ''
          }`}
        />
      </div>
    </header>
  );
}
