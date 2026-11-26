import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import useScrollAnimation from '../animations/useScrollAnimation';

import { PILLARS } from '../data/pillars';
import './Footer.css';

const serviceLinks = PILLARS.filter(p => p.kind === 'services').map(p => ({to: p.to, label: p.name}));
const productLinks = PILLARS.filter(p => p.kind === 'product').map(p => ({to: p.to, label: p.name}));

const columns = [
  { title: 'Services', links: [
    ...serviceLinks,
    { to: '/it-solutions#services', label: 'All services' },
    { to: '/collaborate?type=it-existing', label: 'Existing software help' },
  ] },
  { title: 'Products', links: productLinks },
  { title: 'Company', links: [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About & leadership' },
    { to: '/brands', label: 'Brands' },
    { to: '/careers', label: 'Careers' },
    { to: '/collaborate', label: 'Collaborate' },
    { to: '/contact', label: 'Contact' },
  ] },
];

const legal = [
  { to: '/nexlock/privacy', label: 'NexLock Privacy Policy' },
  { to: '/nexlock/terms', label: 'NexLock Terms & Conditions' },
  { to: '/nexwarrenty/privacy', label: 'NexWarranty Privacy Policy' },
  { to: '/nexwarrenty/terms', label: 'NexWarranty Terms & Conditions' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);

  useScrollAnimation(footerRef, (gsap) => {
    const cols = footerRef.current.querySelectorAll('[data-footer-col]');
    gsap.fromTo(
      cols,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
        },
      }
    );
  });

  return (
    <footer ref={footerRef} className="mountain-footer relative overflow-hidden text-slate-300">
      {/* ── Decorative Background Emblem Watermark ── */}
      <div
        className="pointer-events-none absolute right-[-5%] bottom-[-15%] w-[480px] h-[480px] opacity-[0.035] select-none transition-transform duration-1000 hover:scale-105"
        aria-hidden="true"
      >
        <img
          src="/nexus-emblem.png"
          alt=""
          className="w-full h-full object-contain filter grayscale invert"
        />
      </div>

      <Container className="mountain-footer__glass relative z-10">
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-2 gap-x-5 gap-y-5 border-b border-white/10 pb-5 lg:grid-cols-12 lg:gap-8">
          {/* Col 1: Logo & Tagline (lg: 5 cols) */}
          <div data-footer-col className="lg:col-span-5 text-left">
            <Link to="/" className="inline-block transition-transform duration-200 hover:scale-[1.02]">
              <img
                src="/nexus-logo-white.png"
                alt="NEXUS"
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="mt-2 max-w-[34ch] text-xs text-slate-400 leading-relaxed">
              A technology company: software engineering for businesses, and products of our own — NexLock and NexWarranty.
            </p>
          </div>

          {columns.map(({title, links}, index) => (
            <div key={title} data-footer-col className={index === 2 ? 'lg:col-span-3 text-left' : 'lg:col-span-2 text-left'}>
              <p className="mb-2 font-display text-sm font-bold text-white tracking-wide">{title}</p>
              <ul className="flex flex-col gap-0.5">
                {links.map(({to, label}) => (
                  <li key={to}>
                    <Link to={to} className="text-xs text-slate-400 transition-colors hover:text-cyan-400 hover:translate-x-0.5 inline-block">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Copyright, GSTIN, Legal links, and Tagline */}
        <div className="mt-4 flex flex-col items-start justify-between gap-3 text-xs text-slate-400 sm:flex-row">
          <div className="flex flex-wrap items-center gap-4">
            <p>&copy; {currentYear} NEXUS. All rights reserved.</p>
            <span className="hidden text-slate-600 sm:inline">|</span>
            <span className="font-mono text-slate-400">GSTIN: 27ABAFN2902R1ZZ</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {legal.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-cyan-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
