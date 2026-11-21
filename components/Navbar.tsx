'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { brands } from '../data/brands';
import Button from './Button';

interface NavItem {
  to: string;
  label: string;
  dot?: string;
  brandsMenu?: boolean;
}

const navItems: NavItem[] = [
  { to: '/it-solutions', label: 'IT Solutions', dot: 'bg-accent-cyan' },
  { to: '/nexlock', label: 'NexLock', dot: 'bg-primary-electric' },
  { to: '/nexwarrenty', label: 'NexWarranty', dot: 'bg-accent-teal' },
  { to: '/brands', label: 'Brands', brandsMenu: true },
  { to: '/about', label: 'About' },
  { to: '/careers', label: 'Careers' },
  { to: '/collaborate', label: 'Collaborate' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [brandsDropdownOpen, setBrandsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setBrandsDropdownOpen(false);
  };

  const isRouteActive = (to: string) => {
    if (to === '/') return pathname === '/';
    return pathname === to || pathname?.startsWith(to);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[1000] flex justify-center px-4 transition-all duration-300 pointer-events-none ${
          isScrolled ? 'pt-2 sm:pt-3' : 'pt-4 sm:pt-5'
        }`}
      >
        <nav
          className={`pointer-events-auto flex items-center justify-between w-full max-w-[1180px] px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'glass-pill bg-white/85 shadow-glass-lg border border-white/90 backdrop-blur-3xl'
              : 'glass-pill bg-white/70 shadow-glass border border-white/80 backdrop-blur-2xl'
          }`}
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2 group shrink-0 focus-visible:outline-none"
            aria-label="Nexus Home"
          >
            <div className="relative h-10 w-auto flex items-center">
              <Image
                src="/logo.png"
                alt="NEXUS"
                width={130}
                height={40}
                priority
                style={{ maxHeight: '40px', width: 'auto' }}
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const active = isRouteActive(item.to);

              if (item.brandsMenu) {
                return (
                  <li
                    key={item.to}
                    className="relative"
                    onMouseEnter={() => setBrandsDropdownOpen(true)}
                    onMouseLeave={() => setBrandsDropdownOpen(false)}
                  >
                    <Link
                      href={item.to}
                      onClick={closeMenu}
                      className={`relative px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-colors duration-200 inline-flex items-center gap-1.5 ${
                        active ? 'text-primary-electric font-semibold' : 'text-text-navy hover:text-primary-electric'
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute inset-0 rounded-full bg-primary-electric/8 -z-10 border border-primary-electric/20"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span>{item.label}</span>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          brandsDropdownOpen ? 'rotate-180 text-primary-electric' : 'text-slate-400'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>

                    {/* Brands Dropdown */}
                    <AnimatePresence>
                      {brandsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-0 mt-2 min-w-[240px] p-2 glass-card rounded-2xl shadow-glass-lg border border-white/90 z-50 bg-white/85 backdrop-blur-2xl"
                        >
                          <div className="px-3 py-1.5 text-[0.68rem] font-mono uppercase tracking-wider text-text-muted border-b border-navy/5 mb-1">
                            Brand Collaborations
                          </div>
                          <ul className="space-y-1">
                            {brands.map((b) => (
                              <li key={b.slug}>
                                <Link
                                  href={`/brands/${b.slug}`}
                                  onClick={closeMenu}
                                  className="block px-3 py-2 rounded-xl text-xs sm:text-sm text-text-navy hover:bg-primary-electric/8 hover:text-primary-electric transition-colors"
                                >
                                  <div className="font-semibold">{b.name}</div>
                                  <div className="text-[0.7rem] text-text-muted font-normal">
                                    {b.partner} partnership
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              return (
                <li key={item.to} className="relative">
                  <Link
                    href={item.to}
                    onClick={closeMenu}
                    className={`relative px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-colors duration-200 inline-flex items-center gap-1.5 ${
                      active ? 'text-primary-electric font-semibold' : 'text-text-navy hover:text-primary-electric'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full bg-primary-electric/8 -z-10 border border-primary-electric/20"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.dot && (
                      <span
                        className={`h-1.5 w-1.5 rounded-full shrink-0 ${item.dot} shadow-[0_0_6px_currentColor]`}
                        aria-hidden="true"
                      />
                    )}
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Quick CTA & Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            <Button
              href="/contact"
              variant="dark-pill"
              size="sm"
              arrow={false}
              className="hidden sm:inline-flex text-xs px-4 py-1.5"
            >
              Get in Touch
            </Button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-full glass-card p-1.5 border border-white/80 text-navy cursor-pointer focus-visible:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className={`h-0.5 w-4.5 rounded-full bg-navy transition-transform duration-300 ease-out ${
                  isOpen ? 'translate-y-[5px] rotate-45' : ''
                }`}
              />
              <span
                className={`h-0.5 w-4.5 rounded-full bg-navy my-1 transition-opacity duration-200 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`h-0.5 w-4.5 rounded-full bg-navy transition-transform duration-300 ease-out ${
                  isOpen ? '-translate-y-[5px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-[998] bg-navy/40 backdrop-blur-sm md:hidden"
            />

            {/* Drawer Sheet */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-[min(320px,85vw)] z-[999] glass-panel bg-white/95 backdrop-blur-3xl shadow-2xl p-6 flex flex-col justify-between border-l border-white/80 md:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-navy/8 mb-6">
                  <Image
                    src="/logo.png"
                    alt="NEXUS"
                    width={104}
                    height={32}
                    style={{ maxHeight: '32px', width: 'auto' }}
                    className="h-8 w-auto object-contain"
                  />
                  <button
                    type="button"
                    onClick={closeMenu}
                    aria-label="Close menu"
                    className="w-8 h-8 rounded-full glass-card flex items-center justify-center text-text-muted hover:text-navy"
                  >
                    ✕
                  </button>
                </div>

                <ul className="space-y-1.5">
                  {navItems.map((item) => {
                    const active = isRouteActive(item.to);

                    return (
                      <li key={item.to}>
                        <Link
                          href={item.to}
                          onClick={closeMenu}
                          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                            active
                              ? 'bg-primary-electric/10 text-primary-electric font-semibold'
                              : 'text-text-navy hover:bg-navy/5'
                          }`}
                        >
                          <span className="flex items-center gap-2.5">
                            {item.dot && (
                              <span className={`h-2 w-2 rounded-full ${item.dot}`} />
                            )}
                            {item.label}
                          </span>
                          {item.brandsMenu && (
                            <span className="text-[0.7rem] font-mono uppercase text-text-muted">
                              {brands.length}
                            </span>
                          )}
                        </Link>

                        {/* Expandable sub-links for brands if on mobile */}
                        {item.brandsMenu && (
                          <div className="pl-6 pr-2 py-1 space-y-1">
                            {brands.map((b) => (
                              <Link
                                key={b.slug}
                                href={`/brands/${b.slug}`}
                                onClick={closeMenu}
                                className="block py-1.5 px-3 rounded-lg text-xs text-text-muted hover:text-navy hover:bg-navy/5"
                              >
                                {b.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Drawer Footer CTA */}
              <div className="pt-6 border-t border-navy/8">
                <Button href="/contact" variant="primary" size="md" className="w-full" onClick={closeMenu}>
                  Get in Touch
                </Button>
                <div className="mt-4 text-center font-mono text-[0.7rem] text-text-muted">
                  GSTIN: 27ABAFN2902R1ZZ
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
