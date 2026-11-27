import SpecularButton from './SpecularButton';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import Container from './Container';
import Hero3DVisual from './Hero3DVisual';
import useMagnetic from '../animations/useMagnetic';
import { isReducedMotion } from '../animations/motionTokens';

function MagneticButton({ to, primary, children }) {
  const ButtonLink = primary ? SpecularButton : Link;
  const btnRef = useMagnetic(0.25);
  return (
    <ButtonLink
      ref={btnRef}
      to={to}
      className={`inline-flex items-center gap-2 rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-[0.95rem] font-semibold transition-colors duration-300 ${
        primary
          ? 'bg-[#061A40] text-white shadow-[0_8px_24px_rgba(6,26,64,0.25)] hover:bg-[#0057D9] hover:shadow-[0_12px_32px_rgba(0,87,217,0.4)]'
          : 'shimmer-sweep border border-[#061A40]/15 bg-white/85 text-[#061A40] shadow-[0_4px_16px_rgba(6,26,64,0.06)] hover:border-[#0057D9]/50 hover:bg-white hover:text-[#0057D9]'
      }`}
    >
      {children}
    </ButtonLink>
  );
}

export default function HeroSection({
  compact = false,
  eyebrow = 'NEXUS · TECHNOLOGY COMPANY',
  title = null,
  lede = "Nexus IT Solutions builds and maintains software for clients. NexLock and NexWarranty are products Nexus has built and runs itself. Three pillars, one technology company.",
  ctaButtons = [
    { label: 'Explore the three pillars', to: '/#pillars', primary: true },
    { label: 'Start a software project', to: '/collaborate?type=it-new', secondary: true },
  ],
  stats = [
    { countTo: 3, label: 'Pillars' },
    { countTo: 2, label: 'Own products' },
    { countTo: 10, suffix: '+', label: 'Years leadership experience' },
  ],
  aside = null,
  style = {},
  children,
}) {
  const heroRef = useRef(null);
  const eyebrowRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const titleRef = useRef(null);
  const ledeRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduced = isReducedMotion();

    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set(
          [
            eyebrowRef.current,
            line1Ref.current,
            line2Ref.current,
            line3Ref.current,
            titleRef.current,
            ledeRef.current,
            ctaRef.current,
            statsRef.current,
          ].filter(Boolean),
          { opacity: 1, y: 0 }
        );
        return;
      }

      // ── Master Hero Entrance Timeline ──
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.1 });

      // Eyebrow reveal
      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          0.2
        );
      }

      // Kinetic headline line-by-line reveal
      const lines = [line1Ref.current, line2Ref.current, line3Ref.current].filter(Boolean);
      if (lines.length) {
        tl.fromTo(
          lines,
          { y: '115%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 0.95, stagger: 0.14, ease: 'power3.out' },
          0.35
        );
      } else if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out' },
          0.35
        );
      }

      // Supporting lede fade-up
      if (ledeRef.current) {
        tl.fromTo(
          ledeRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.75
        );
      }

      // Action buttons stagger
      if (ctaRef.current && ctaRef.current.children.length) {
        tl.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 20, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, ease: 'back.out(1.4)' },
          0.9
        );
      }

      // Stats row reveal
      if (statsRef.current && statsRef.current.children.length) {
        tl.fromTo(
          statsRef.current.children,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
          1.05
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={heroRef}
      className={`relative overflow-hidden pt-8 pb-16 sm:pb-20 ${
        compact ? 'min-h-[400px] text-center' : 'min-h-[680px] lg:min-h-[760px] flex items-center'
      }`}
      style={style}
      id="home"
    >

      <Container className="relative z-10 w-full">
        <div
          className={`grid items-center gap-12 lg:gap-8 ${
            compact ? 'grid-cols-1 justify-center' : 'grid-cols-1 lg:grid-cols-12'
          }`}
        >
          {/* Left Column: Typography & CTAs */}
          <div
            className={
              compact
                ? 'mx-auto max-w-[760px] text-center'
                : 'lg:col-span-6 xl:col-span-7 text-left'
            }
          >
            {/* Eyebrow with horizontal dash */}
            {eyebrow && (
              <div ref={eyebrowRef} className="mb-5 inline-flex items-center gap-3">
                <span className="font-mono text-[0.74rem] sm:text-[0.78rem] tracking-[0.16em] text-[#061A40] font-semibold uppercase">
                  {eyebrow}
                </span>
                <span className="h-px w-8 bg-[#007BFF]/60" aria-hidden="true" />
              </div>
            )}

            {/* Kinetic Main Headline */}
            <h1
              ref={titleRef}
              className="mb-5 text-[clamp(2.35rem,4.4vw,4.1rem)] font-serif font-bold text-[#061A40] leading-[1.08] tracking-tight"
            >
              {title ? (
                title
              ) : (
                <>
                  <span className="block overflow-hidden py-0.5">
                    <span ref={line1Ref} className="block will-change-transform">
                      We build technology
                    </span>
                  </span>
                  <span className="block overflow-hidden py-0.5">
                    <span ref={line2Ref} className="block will-change-transform">
                      for businesses —
                    </span>
                  </span>
                  <span className="block overflow-hidden py-0.5">
                    <span
                      ref={line3Ref}
                      className="inline-block will-change-transform italic font-serif text-gradient-hero"
                    >
                      and our own products.
                    </span>
                  </span>
                </>
              )}
            </h1>

            {/* Supporting Lede */}
            {lede && (
              <p
                ref={ledeRef}
                className="mb-8 max-w-[52ch] text-[clamp(1.02rem,1.5vw,1.18rem)] leading-relaxed text-[#52627A]"
              >
                {lede}
              </p>
            )}

            {children}

            {/* Action Buttons with Magnetic micro-interaction */}
            {ctaButtons.length > 0 && (
              <div ref={ctaRef} className="mb-12 flex flex-wrap items-center gap-4">
                {ctaButtons.map((btn, i) => (
                  <MagneticButton key={i} to={btn.to} primary={btn.primary || !btn.secondary}>
                    <span>{btn.label}</span>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </MagneticButton>
                ))}
              </div>
            )}

            {/* Statistics Row */}
            {stats.length > 0 && (
              <div ref={statsRef} className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-6 sm:gap-8">
                    <div>
                      <span
                        className="block font-serif text-[1.85rem] sm:text-[2.1rem] font-bold text-[#061A40] leading-none"
                        data-count-to={stat.countTo}
                        data-prefix={stat.prefix || ''}
                        data-suffix={stat.suffix || ''}
                      >
                        {stat.prefix || ''}
                        {stat.countTo}
                        {stat.suffix || ''}
                      </span>
                      <span className="mt-1.5 block font-mono text-[0.68rem] sm:text-[0.72rem] tracking-[0.1em] text-[#52627A] uppercase">
                        {stat.label}
                      </span>
                    </div>
                    {i < stats.length - 1 && (
                      <span className="h-10 w-px bg-slate-300/60" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: 3D NEXUS Visual */}
          {!compact && (
            <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
              {aside ? aside : <Hero3DVisual />}
            </div>
          )}
        </div>
      </Container>

    </header>
  );
}
