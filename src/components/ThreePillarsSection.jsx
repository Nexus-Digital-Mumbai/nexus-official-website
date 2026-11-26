import GradientText from './GradientText';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import { PILLARS } from '../data/pillars';
import { ITLayersVisual, NexLockPadlockVisual, NexWarrantyShieldVisual } from './Pillar3DVisuals';
import useTiltCard from '../animations/useTiltCard';
import useScrollAnimation from '../animations/useScrollAnimation';

const PILLAR_3D_VISUALS = {
  'it-solutions': <ITLayersVisual />,
  'nexlock': <NexLockPadlockVisual />,
  'nexwarranty': <NexWarrantyShieldVisual />,
};

const PILLAR_ICONS = {
  'it-solutions': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  'nexlock': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  'nexwarranty': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

const PILLAR_ICON_COLORS = {
  'it-solutions': 'bg-[#00C8FF]/15 text-[#007BFF] border-cyan-400/30',
  'nexlock': 'bg-[#007BFF]/15 text-[#0057D9] border-blue-400/30',
  'nexwarranty': 'bg-[#061A40]/10 text-[#061A40] border-slate-300',
};

function PillarCard({ pillar }) {
  const cardRef = useTiltCard(8);

  return (
    <article
      ref={cardRef}
      data-card-item
      className="glass-card-futuristic card-spotlight group relative flex flex-col justify-between overflow-hidden rounded-[26px] p-7 sm:p-8 will-change-transform"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Top Row: Icon Badge */}
      <div className="mb-6 flex items-center justify-between">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-xl border shadow-sm transition-transform duration-300 group-hover:scale-110 ${PILLAR_ICON_COLORS[pillar.id]}`}
        >
          {PILLAR_ICONS[pillar.id]}
        </span>
        <span className="font-mono text-[0.66rem] tracking-[0.12em] uppercase text-slate-400 font-semibold">
          {pillar.code}
        </span>
      </div>

      {/* Title & Description */}
      <div className="mb-6">
        <h3 className="mb-2 text-xl font-bold font-display text-[#061A40] tracking-tight group-hover:text-[#0057D9] transition-colors duration-200">
          {pillar.name.toUpperCase()}
        </h3>
        <p className="text-[0.92rem] leading-relaxed text-[#52627A]">
          {pillar.id === 'it-solutions'
            ? 'Custom software development, product engineering and tech consulting.'
            : pillar.id === 'nexlock'
            ? 'Smart device lock & EMI recovery platform.'
            : 'Extended warranty for home appliances & electronics.'}
        </p>
      </div>

      {/* Bottom Row: Link on Left + 3D Visual on Right */}
      <div className="mt-auto flex items-end justify-between pt-4">
        <Link
          to={pillar.to}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0057D9] transition-all duration-300 group-hover:gap-2.5 group-hover:text-[#007BFF]"
        >
          <span>Explore</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
        </Link>

        {/* 3D Visual Asset with slight hover lift */}
        <div className="shrink-0 scale-90 sm:scale-100 origin-bottom-right transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1">
          {PILLAR_3D_VISUALS[pillar.id]}
        </div>
      </div>
    </article>
  );
}

export default function ThreePillarsSection() {
  const sectionRef = useRef(null);

  useScrollAnimation(sectionRef, (gsap) => {
    const heading = sectionRef.current.querySelector('h2');
    const cards = sectionRef.current.querySelectorAll('[data-card-item]');

    // Heading reveal
    gsap.fromTo(
      heading,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 88%',
        },
      }
    );

    // Cards staggered sequence
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.85,
        stagger: 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cards[0],
          start: 'top 85%',
        },
      }
    );
  });

  return (
    <section ref={sectionRef} id="pillars" className="scroll-mt-24 py-20 sm:py-28 relative">
      <span id="products" className="block scroll-mt-24" aria-hidden="true" />
      <Container>
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-[720px] text-center">
          <h2 className="text-[clamp(2.1rem,3.6vw,3.2rem)] font-serif font-bold text-[#061A40] tracking-tight opacity-0"><GradientText>
            One company. <span className="italic font-serif">Three pillars.</span>
          </GradientText></h2>
        </div>

        {/* 3 Pillar Cards in Responsive Grid */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
          {PILLARS.map((p) => (
            <PillarCard key={p.id} pillar={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
