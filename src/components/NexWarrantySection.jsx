import { Link } from 'react-router-dom';
import { PillarBadge } from './PillarMarks';
import { FeatureGrid, ProblemSolution, Audience } from './ProductDetails';
import { pillarById } from '../data/pillars';
import SpecularButton from './SpecularButton';
import GradientText from './GradientText';
import { useRef } from 'react';
import Container from './Container';
import { WarrantyCertificateVisual } from './Pillar3DVisuals';
import useScrollAnimation from '../animations/useScrollAnimation';
import useMagnetic from '../animations/useMagnetic';

const NEXWARRANTY_FEATURES = [
  { title: '100% parts & labour', desc: 'Mechanical and electrical breakdowns after the brand warranty expires.' },
  { title: 'Zero depreciation', desc: 'Full claim value with no deduction.' },
  { title: 'Doorstep service', desc: 'Free pickup and drop, with complimentary transportation.' },
  { title: 'Authorized repairs', desc: 'Claims route to brand-authorized service centers.' },
];

function MagneticExplorePlansButton() {
  const btnRef = useMagnetic(0.25);
  return (
    <SpecularButton
      ref={btnRef}
      to="/nexwarrenty"
      className="inline-flex items-center gap-2 rounded-full bg-[#061A40] px-7 py-3 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(6,26,64,0.22)] transition-colors duration-300 hover:bg-[#0057D9] hover:shadow-[0_10px_25px_rgba(0,87,217,0.35)]"
    >
      <span>Explore NexWarranty</span>
      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
    </SpecularButton>
  );
}

export default function NexWarrantySection() {
  const sectionRef = useRef(null);

  useScrollAnimation(sectionRef, (gsap) => {
    const textCol = sectionRef.current.querySelector('[data-text-col]');
    const certCol = sectionRef.current.querySelector('[data-cert-col]');
    const badges = sectionRef.current.querySelectorAll('[data-pill]');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 78%',
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
      certCol,
      { opacity: 0, y: 45, rotateX: 10, scale: 0.94 },
      { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 1.1, ease: 'expo.out' },
      '-=0.7'
    );
  });

  return (
    <section
      ref={sectionRef}
      id="nexwarranty-preview"
      className="scroll-mt-24 py-20 sm:py-28 relative overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column (5-6 cols on lg) */}
          <div data-text-col className="lg:col-span-5 xl:col-span-6 text-left">
            {/* Eyebrow */}
            <span className="mb-2 block font-mono text-[0.72rem] tracking-[0.16em] uppercase text-[#007BFF] font-semibold">
              Pillar 03 · NX-WRT
            </span>

            <PillarBadge kind="product" className="mb-3" />

            {/* Heading */}
            <h2 className="mb-3 font-serif text-[clamp(2.1rem,3.4vw,3.2rem)] font-bold text-[#061A40] leading-[1.1] tracking-tight"><GradientText>
              NEXWARRANTY
            </GradientText></h2>

            {/* Subhead */}
            <p className="mb-6 font-display text-[1.12rem] font-semibold text-[#0057D9]">
              Cover that begins where the brand warranty ends.
            </p>

            {/* Feature Pills */}
            <div className="mb-8 flex flex-wrap gap-3">
              <span
                data-pill
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-50/70 px-3.5 py-2 text-xs font-semibold text-[#061A40] shadow-sm transition-transform duration-200 hover:scale-105"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#007BFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Zero Depreciation
              </span>
              <span
                data-pill
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-50/70 px-3.5 py-2 text-xs font-semibold text-[#061A40] shadow-sm transition-transform duration-200 hover:scale-105"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#007BFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                100% Coverage
              </span>
            </div>

            <p className="mb-5 leading-relaxed text-slate-600">NexWarranty is Nexus's extended warranty for home appliances and electronics — 1 to 4 year plans for devices worth up to ₹20 lakh, priced as a simple percentage of device value.</p>
            <ProblemSolution
              accent={pillarById('nexwarranty').accent}
              problem="Once the manufacturer's warranty expires, every breakdown becomes an out-of-pocket repair bill."
              solution="NexWarranty pays for parts and labour in full, with zero depreciation and doorstep pickup and drop."
            />
            <FeatureGrid items={NEXWARRANTY_FEATURES} accent={pillarById('nexwarranty').accent} />
            <Audience label="Built for" items={['Households', 'Appliance & electronics retailers']} />

            {/* CTA Button */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <MagneticExplorePlansButton />
              <Link to="/nexwarrenty#calculator" className="font-semibold text-[#0057D9] hover:underline">Calculate a plan price</Link>
            </div>
          </div>

          {/* Right Column: Warranty Certificate 3D Visual (7 or 6 cols on lg) */}
          <div data-cert-col className="lg:col-span-7 xl:col-span-6 flex justify-center lg:justify-end will-change-transform">
            <WarrantyCertificateVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
