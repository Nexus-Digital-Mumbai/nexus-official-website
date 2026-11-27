import { Link } from 'react-router-dom';
import { PillarBadge } from './PillarMarks';
import SpecularButton from './SpecularButton';
import GradientText from './GradientText';
import { useRef } from 'react';
import Container from './Container';
import { ITCodeVisual } from './Pillar3DVisuals';
import useScrollAnimation from '../animations/useScrollAnimation';
import useMagnetic from '../animations/useMagnetic';

const IT_BUILD = ['Websites', 'Web applications', 'Mobile applications', 'Custom business software', 'CRM development', 'APIs & backends'];
const IT_EXISTING = ['CRM & software maintenance', 'Bug fixing', 'New feature development', 'UI/UX modernization', 'Legacy modernization', 'Integrations & performance'];

function MagneticDiscoverButton() {
  const btnRef = useMagnetic(0.25);
  return (
    <SpecularButton
      ref={btnRef}
      to="/it-solutions"
      className="inline-flex items-center gap-2 rounded-full bg-[#061A40] px-7 py-3 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(6,26,64,0.22)] transition-colors duration-300 hover:bg-[#0057D9] hover:shadow-[0_10px_25px_rgba(0,87,217,0.35)]"
    >
      <span>Explore IT Solutions</span>
      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
    </SpecularButton>
  );
}

export default function ITSolutionsSection() {
  const sectionRef = useRef(null);

  useScrollAnimation(sectionRef, (gsap) => {
    const textCol = sectionRef.current.querySelector('[data-text-col]');
    const visualCol = sectionRef.current.querySelector('[data-visual-col]');
    const badges = sectionRef.current.querySelectorAll('[data-badge]');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      defaults: { ease: 'power3.out' },
    });

    tl.fromTo(
      textCol.children,
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 0.85, stagger: 0.12 }
    );

    if (badges.length) {
      tl.fromTo(
        badges,
        { opacity: 0, scale: 0.9, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.5)' },
        '-=0.5'
      );
    }

    tl.fromTo(
      visualCol,
      { opacity: 0, x: 50, scale: 0.94 },
      { opacity: 1, x: 0, scale: 1, duration: 1.1, ease: 'expo.out' },
      '-=0.8'
    );
  });

  return (
    <section
      ref={sectionRef}
      id="it-solutions-preview"
      className="scroll-mt-24 py-20 sm:py-28 relative overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column (5 cols on lg) */}
          <div data-text-col className="lg:col-span-5 text-left">
            {/* Eyebrow */}
            <span className="mb-2 block font-mono text-[0.72rem] tracking-[0.16em] uppercase text-[#007BFF] font-semibold">
              Pillar 01 · NX-ITS
            </span>

            <PillarBadge kind="services" className="mb-3" />

            {/* Heading */}
            <h2 className="mb-3 font-serif text-[clamp(2.1rem,3.4vw,3.2rem)] font-bold text-[#061A40] leading-[1.1] tracking-tight"><GradientText>
              NEXUS IT<br />SOLUTIONS
            </GradientText></h2>

            {/* Subheading */}
            <p className="mb-6 font-display text-[1.12rem] font-semibold text-[#0057D9]">
              New software when you need it. A dependable team for the software you already run.
            </p>

            {/* Feature Badges */}
            <div className="mb-8 flex flex-wrap gap-3">
              <span
                data-badge
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-50/70 px-3.5 py-2 text-xs font-semibold text-[#061A40] shadow-sm transition-transform duration-200 hover:scale-105"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#007BFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                  <line x1="6" y1="6" x2="6.01" y2="6" />
                  <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
                Scalable Architecture
              </span>
              <span
                data-badge
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-50/70 px-3.5 py-2 text-xs font-semibold text-[#061A40] shadow-sm transition-transform duration-200 hover:scale-105"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#007BFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Expert Engineering
              </span>
            </div>

            <p className="mb-5 leading-relaxed text-slate-600">Most businesses already have a website, an app or a CRM that needs attention. Nexus IT Solutions builds new systems from scratch — and takes on existing ones: fixing bugs, adding features, modernizing the UI and keeping them running long-term.</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-navy/10 bg-white/60 p-5">
                <p className="mb-3 font-mono text-[0.68rem] tracking-[0.14em] text-slate-500 uppercase">Build new</p>
                <ul className="space-y-1.5 text-[0.9rem] text-slate-700">
                  {IT_BUILD.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
              <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/8 p-5">
                <p className="mb-3 font-mono text-[0.68rem] tracking-[0.14em] text-cyan-700 uppercase">Work with what exists</p>
                <ul className="space-y-1.5 text-[0.9rem] text-slate-800">
                  {IT_EXISTING.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <MagneticDiscoverButton />
              <Link to="/collaborate?type=it-existing" className="font-semibold text-[#0057D9] hover:underline">Get help with existing software</Link>
            </div>
          </div>

          {/* Right Column: Code Window Visual (7 cols on lg) */}
          <div data-visual-col className="lg:col-span-7 flex justify-center lg:justify-end">
            <ITCodeVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
