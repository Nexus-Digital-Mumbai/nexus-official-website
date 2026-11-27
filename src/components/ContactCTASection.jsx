import GradientText from './GradientText';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import useScrollAnimation from '../animations/useScrollAnimation';
import useTiltCard from '../animations/useTiltCard';

const CTA_OPTIONS = [
  {
    title: 'I need software built, fixed or maintained',
    desc: 'Start a project',
    to: '/collaborate?type=it-new',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: 'I finance or sell phones on EMI',
    desc: 'See NexLock',
    to: '/nexlock',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'I want to protect an appliance or device',
    desc: "See NexWarranty plans",
    to: '/nexwarrenty',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

function InteractiveCtaCard({ item }) {
  const cardRef = useTiltCard(5);

  return (
    <Link
      ref={cardRef}
      to={item.to}
      data-cta-card
      className="group relative flex items-center justify-between rounded-2xl border border-[var(--glass-edge)] bg-[var(--glass-fill)] shadow-[var(--glass-depth)] p-5 sm:p-6 transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_10px_28px_rgba(0,100,160,0.13)] will-change-transform"
    >
      <div className="flex items-center gap-3.5">
        {/* Icon */}
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-[var(--glass-active)] transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/25">
          {item.icon}
        </span>

        {/* Text */}
        <div className="text-left">
          <p className="font-display text-[0.95rem] font-bold text-navy transition-colors duration-200 group-hover:text-[var(--glass-active)]">
            {item.title}
          </p>
          <p className="text-xs text-slate-600 leading-snug">
            {item.desc}
          </p>
        </div>
      </div>

      {/* Animated Right Arrow */}
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--glass-edge)] bg-cyan-500/5 text-navy transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/20 group-hover:text-[var(--glass-active)] group-hover:translate-x-1.5">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}

export default function ContactCTASection() {
  const sectionRef = useRef(null);

  useScrollAnimation(sectionRef, (gsap) => {
    const box = sectionRef.current.querySelector('[data-cta-box]');
    const heading = sectionRef.current.querySelector('h2');
    const cards = sectionRef.current.querySelectorAll('[data-cta-card]');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      defaults: { ease: 'power3.out' },
    });

    tl.fromTo(
      box,
      { scale: 0.96, y: 40 },
      { scale: 1, y: 0, duration: 0.9 }
    )
      .fromTo(
        heading,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.75 },
        '-=0.5'
      )
      .fromTo(
        cards,
        { opacity: 0, y: 30, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.75, stagger: 0.14, ease: 'back.out(1.4)' },
        '-=0.5'
      );
  });

  return (
    <section ref={sectionRef} id="contact-cta" className="scroll-mt-12 py-20 sm:py-28 relative">
      <Container>
        <div
          data-cta-box
          className="relative overflow-hidden rounded-[32px] glass-panel px-6 py-14 sm:px-12 sm:py-16 will-change-transform"
        >

          <div className="relative z-10 mx-auto max-w-[960px]">
            {/* Heading */}
            <div className="mb-12 text-center">
              <p className="mb-2 font-mono text-xs text-slate-500">WHERE TO START</p>
              <h2 className="text-[clamp(2.1rem,3.8vw,3.3rem)] font-serif font-bold text-navy tracking-tight"><GradientText glow={0.15}>
                Tell us what you're <span className="italic font-serif">working on.</span>
              </GradientText></h2>
              <p className="mt-4 text-slate-600">Pick the part of Nexus that fits — or just get in touch and we'll route you.</p>
            </div>

            {/* 3 Interactive Cards Row */}
            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
              {CTA_OPTIONS.map((item, i) => (
                <InteractiveCtaCard key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
