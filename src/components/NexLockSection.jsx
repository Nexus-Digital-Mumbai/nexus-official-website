import { Link } from 'react-router-dom';
import { PillarBadge } from './PillarMarks';
import { FeatureGrid, ProblemSolution, Audience } from './ProductDetails';
import { pillarById } from '../data/pillars';
import SpecularButton from './SpecularButton';
import GradientText from './GradientText';
import { useRef } from 'react';
import Container from './Container';
import { SmartphoneLockVisual } from './Pillar3DVisuals';
import useScrollAnimation from '../animations/useScrollAnimation';
import useMagnetic from '../animations/useMagnetic';

const NEXLOCK_FEATURES = [
  { title: 'One QR scan', desc: 'Link a device to the dashboard and customer account in a single scan.' },
  { title: 'Auto lock', desc: 'Access is restricted automatically when an EMI falls overdue.' },
  { title: 'Remote unlock', desc: 'Restore the device from the dashboard once payment is confirmed.' },
  { title: 'SIM swap detection', desc: 'SIM removal or replacement triggers a security alert.' },
];

function MagneticLearnMoreButton() {
  const btnRef = useMagnetic(0.25);
  return (
    <SpecularButton
      ref={btnRef}
      to="/nexlock"
      className="inline-flex items-center gap-2 rounded-full bg-[#061A40] px-7 py-3 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(6,26,64,0.22)] transition-colors duration-300 hover:bg-[#0057D9] hover:shadow-[0_10px_25px_rgba(0,87,217,0.35)]"
    >
      <span>Explore NexLock</span>
      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
    </SpecularButton>
  );
}

export default function NexLockSection() {
  const sectionRef = useRef(null);

  useScrollAnimation(sectionRef, (gsap) => {
    const phoneCol = sectionRef.current.querySelector('[data-phone-col]');
    const textCol = sectionRef.current.querySelector('[data-text-col]');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 78%',
      },
      defaults: { ease: 'power3.out' },
    });

    tl.fromTo(
      phoneCol,
      { opacity: 0, x: -50, scale: 0.92, rotateY: 10 },
      { opacity: 1, x: 0, scale: 1, rotateY: 0, duration: 1.1, ease: 'expo.out' }
    ).fromTo(
      textCol.children,
      { opacity: 0, x: 35 },
      { opacity: 1, x: 0, duration: 0.85, stagger: 0.12 },
      '-=0.7'
    );
  });

  return (
    <section
      ref={sectionRef}
      id="nexlock-preview"
      className="scroll-mt-24 py-20 sm:py-28 relative overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Smartphone 3D Visual (6 cols on lg) */}
          <div data-phone-col className="lg:col-span-6 flex justify-center lg:justify-start order-2 lg:order-1 will-change-transform">
            <SmartphoneLockVisual />
          </div>

          {/* Right Column: NexLock Copy (6 cols on lg) */}
          <div data-text-col className="lg:col-span-6 text-left order-1 lg:order-2">
            {/* Eyebrow */}
            <span className="mb-2 block font-mono text-[0.72rem] tracking-[0.16em] uppercase text-[#007BFF] font-semibold">
              Pillar 02 · NX-LCK
            </span>

            <PillarBadge kind="product" className="mb-3" />

            {/* Heading */}
            <h2 className="mb-4 font-serif text-[clamp(2.1rem,3.4vw,3.2rem)] font-bold text-[#061A40] leading-[1.1] tracking-tight"><GradientText>
              NEXLOCK
            </GradientText></h2>

            {/* Supporting description */}
            <p className="mb-8 max-w-[44ch] text-[clamp(1.05rem,1.5vw,1.2rem)] leading-relaxed text-[#52627A]">
              Recover device-finance EMIs without field agents or repossession.
            </p>

            <p className="mb-5 leading-relaxed text-slate-600">NexLock is an Android app and management dashboard built by Nexus for businesses that sell or finance phones on EMI.</p>
            <ProblemSolution
              accent={pillarById('nexlock').accent}
              problem="When an EMI on a financed phone goes unpaid, recovery means reminders, field visits and, at worst, repossession."
              solution="NexLock restricts the device automatically once an EMI is overdue, and restores it the moment payment is confirmed."
            />
            <FeatureGrid items={NEXLOCK_FEATURES} accent={pillarById('nexlock').accent} />
            <Audience label="Built for" items={['NBFCs', 'Fintech lenders', 'Mobile retailers', 'Distributors']} />

            {/* CTA Button */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <MagneticLearnMoreButton />
              <Link to="/collaborate?type=nexlock" className="font-semibold text-[#0057D9] hover:underline">Become a NexLock partner</Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
