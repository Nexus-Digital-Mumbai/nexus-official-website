'use client';

import Link from 'next/link';
import HeroSection from '../components/HeroSection';
import Container from '../components/Container';
import DevMarketingModal from '../components/DevMarketingModal';
import PartnerTicker from '../components/PartnerTicker';
import Eyebrow from '../components/Eyebrow';
import { PillarBadge, PillarIcon, Wordmark } from '../components/PillarMarks';
import { CompanyMap, ITBoardVisual, NexLockPhoneVisual, NexWarrantyCertificateVisual } from '../components/PillarVisuals';
import { PILLARS, pillarById } from '../data/pillars';
import useScrollReveal from '../hooks/useScrollReveal';
import useCountUp from '../hooks/useCountUp';
import useTiltEffect from '../hooks/useTiltEffect';

const reveal =
  'translate-y-6 opacity-0 transition-all duration-700 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100';

const IT_BUILD = ['Websites', 'Web applications', 'Mobile applications', 'Custom business software', 'CRM development', 'APIs & backends'];
const IT_EXISTING = ['CRM & software maintenance', 'Bug fixing', 'New feature development', 'UI/UX modernization', 'Legacy modernization', 'Integrations & performance'];

const NEXLOCK_FEATURES = [
  { title: 'One QR scan', desc: 'Link a device to the dashboard and customer account in a single scan.' },
  { title: 'Auto lock', desc: 'Access is restricted automatically when an EMI falls overdue.' },
  { title: 'Remote unlock', desc: 'Restore the device from the dashboard once payment is confirmed.' },
  { title: 'SIM swap detection', desc: 'SIM removal or replacement triggers a security alert.' },
];

const NEXWARRANTY_FEATURES = [
  { title: '100% parts & labour', desc: 'Mechanical and electrical breakdowns after the brand warranty expires.' },
  { title: 'Zero depreciation', desc: 'Full claim value with no deduction.' },
  { title: 'Doorstep service', desc: 'Free pickup and drop, with complimentary transportation.' },
  { title: 'Authorized repairs', desc: 'Claims route to brand-authorized service centers.' },
];

function PillarSection({
  pillarId,
  number,
  heading,
  intro,
  visual,
  reverse = false,
  tinted = false,
  ctas,
  children,
}: {
  pillarId: string;
  number: string;
  heading: string;
  intro: string;
  visual: React.ReactNode;
  reverse?: boolean;
  tinted?: boolean;
  ctas: Array<{ label: string; to: string }>;
  children?: React.ReactNode;
}) {
  const p = pillarById(pillarId)!;
  return (
    <section id={pillarId} className={`relative scroll-mt-24 overflow-hidden py-24 sm:py-28 ${tinted ? 'bg-paper-raised' : ''}`}>
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.accent.bar}`} aria-hidden="true" />
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div data-reveal className={`${reveal} ${reverse ? 'lg:order-2' : ''}`}>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className={`font-mono text-[0.72rem] tracking-[0.14em] uppercase ${p.accent.text}`}>Pillar {number}</span>
              <span className="h-px w-6 bg-navy/20" />
              <PillarBadge kind={p.kind} />
            </div>
            <div className="mb-5 flex items-center gap-4">
              <PillarIcon id={p.id} />
              <Wordmark id={p.id} className="text-[clamp(1.4rem,2.6vw,1.9rem)]" />
            </div>
            <h2 className="mb-4 text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.12] text-slate-900">{heading}</h2>
            <p className="mb-8 max-w-[58ch] text-slate-600">{intro}</p>
            {children}
            <div className="mt-9 flex flex-wrap gap-3.5">
              {ctas.map((cta, i) => {
                const cls =
                  i === 0
                    ? `inline-flex items-center gap-2 rounded-lg px-6 py-3 text-[0.95rem] font-semibold text-white shadow-[0_8px_20px_rgba(9,33,71,0.18)] transition hover:-translate-y-0.5 bg-gradient-to-r ${p.accent.bar}`
                    : 'inline-flex items-center gap-2 rounded-lg border border-navy/20 bg-white/60 px-6 py-3 text-[0.95rem] font-semibold text-navy transition hover:border-navy';
                return (
                  <Link key={cta.label} href={cta.to} className={cls}>
                    {cta.label} {i === 0 && <span aria-hidden="true">&rarr;</span>}
                  </Link>
                );
              })}
            </div>
          </div>
          <div data-reveal data-animate={reverse ? 'fade-right' : 'fade-left'} className={`flex justify-center ${reveal} ${reverse ? 'lg:order-1' : ''}`}>
            {visual}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FeatureGrid({ items, accent }: { items: Array<{ title: string; desc: string }>; accent: any }) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map((f) => (
        <li key={f.title} className="glass-panel rounded-xl p-4 shadow-glass">
          <p className="mb-1 flex items-center gap-2 font-display text-[0.98rem] font-semibold text-slate-900">
            <span className={`h-1.5 w-1.5 rounded-full ${accent.bg}`} />
            {f.title}
          </p>
          <p className="text-[0.85rem] leading-snug text-slate-600">{f.desc}</p>
        </li>
      ))}
    </ul>
  );
}

function ProblemSolution({ problem, solution, accent }: { problem: string; solution: string; accent: any }) {
  return (
    <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
      <div className="rounded-xl border border-navy/10 bg-white/50 p-4">
        <p className="mb-1.5 font-mono text-[0.66rem] tracking-[0.14em] text-slate-500 uppercase">The problem</p>
        <p className="text-[0.9rem] leading-snug text-slate-700">{problem}</p>
      </div>
      <div className={`rounded-xl border p-4 ${accent.border} ${accent.soft}`}>
        <p className={`mb-1.5 font-mono text-[0.66rem] tracking-[0.14em] uppercase ${accent.text}`}>What it does</p>
        <p className="text-[0.9rem] leading-snug text-slate-800">{solution}</p>
      </div>
    </div>
  );
}

function Audience({ label, items }: { label: string; items: string[] }) {
  return (
    <p className="mt-6 text-[0.85rem] text-slate-600">
      <span className="mr-2 font-mono text-[0.66rem] tracking-[0.14em] text-slate-500 uppercase">{label}</span>
      {items.join(' · ')}
    </p>
  );
}

export default function Home() {
  useScrollReveal();
  useCountUp();
  useTiltEffect();

  const it = pillarById('it-solutions')!;
  const nexlock = pillarById('nexlock')!;
  const nexwarranty = pillarById('nexwarranty')!;

  return (
    <>
      <DevMarketingModal />
      <PartnerTicker />

      <HeroSection
        eyebrow="NEXUS · TECHNOLOGY COMPANY"
        title={<>We build technology for businesses — <span className="text-gradient-brand">and our own products.</span></>}
        lede="Nexus IT Solutions builds and maintains software for clients. NexLock and NexWarranty are products Nexus has built and runs itself. Three pillars, one technology company."
        ctaButtons={[
          { label: 'Explore the three pillars', to: '/#pillars' },
          { label: 'Start a software project', to: '/collaborate?type=it-new', secondary: true },
        ]}
        stats={[
          { countTo: 3, label: 'Pillars' },
          { countTo: 2, label: 'Own products' },
          { countTo: 10, suffix: '+', label: 'Years leadership experience' },
        ]}
        aside={<CompanyMap />}
      />

      {/* ── COMPANY ARCHITECTURE ─────────────────────────────────────── */}
      <section id="pillars" className="scroll-mt-24 py-24 sm:py-28">
        <span id="products" className="block scroll-mt-24" aria-hidden="true" />
        <Container>
          <div className="mx-auto mb-14 max-w-[720px] text-center">
            <Eyebrow>01 · WHAT NEXUS DOES</Eyebrow>
            <h2 className="mb-4 text-[clamp(1.9rem,3.2vw,2.8rem)] text-slate-900">One company. Three pillars.</h2>
            <p className="text-slate-600">
              We engineer software for other businesses, and we build technology products of our own. Each pillar has its own focus — all three share the same Nexus team and standards.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PILLARS.map((p, i) => (
              <article
                key={p.id}
                data-reveal
                data-delay={String(i * 120)}
                data-tilt
                className={`glass-panel flex flex-col overflow-hidden rounded-2xl shadow-glass transition-shadow duration-300 hover:shadow-glass-lg ${reveal}`}
              >
                <div className={`h-1.5 bg-gradient-to-r ${p.accent.bar}`} />
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <div className="mb-6 flex items-center justify-between gap-3">
                    <PillarIcon id={p.id} />
                    <span className={`rounded-full px-3 py-1 font-mono text-[0.64rem] tracking-[0.12em] uppercase ${p.accent.soft} ${p.accent.text}`}>
                      {p.kindLabel}
                    </span>
                  </div>
                  <Wordmark id={p.id} className="mb-2 block text-[1.45rem]" />
                  <p className="mb-3 font-display text-[1.05rem] font-semibold text-slate-900">{p.tagline}</p>
                  <p className="mb-6 text-[0.92rem] text-slate-600">{p.summary}</p>
                  <ul className="mb-8 space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5 text-[0.88rem] text-slate-700">
                        <svg className={`mt-1 shrink-0 ${p.accent.text}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between border-t border-dashed border-navy/10 pt-5">
                    <span className="font-mono text-[0.72rem] tracking-[0.06em] text-slate-500">{p.code}</span>
                    <Link href={p.to} className={`inline-flex items-center gap-1.5 text-[0.95rem] font-semibold transition-[gap] duration-250 hover:gap-2.5 ${p.accent.text}`}>
                      {p.cta} &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center text-[0.88rem] text-slate-600 sm:flex-row sm:gap-8">
            <p><span className="mr-2 font-mono text-[0.68rem] tracking-[0.12em] text-cyan-700 uppercase">Services</span>We build and maintain software for you.</p>
            <span className="hidden h-4 w-px bg-navy/15 sm:block" />
            <p><span className="mr-2 font-mono text-[0.68rem] tracking-[0.12em] text-blue-700 uppercase">Products</span>Technology Nexus owns, builds and operates.</p>
          </div>
        </Container>
      </section>

      {/* ── PILLAR 01 · NEXUS IT SOLUTIONS ───────────────────────────── */}
      <PillarSection
        pillarId="it-solutions"
        number="01"
        tinted
        heading="New software when you need it. A dependable team for the software you already run."
        intro="Most businesses already have a website, an app or a CRM that needs attention. Nexus IT Solutions builds new systems from scratch — and takes on existing ones: fixing bugs, adding features, modernizing the UI and keeping them running long-term."
        visual={<ITBoardVisual />}
        ctas={[
          { label: it.cta, to: it.to },
          { label: 'Get help with existing software', to: '/collaborate?type=it-existing' },
        ]}
      >
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
      </PillarSection>

      {/* ── PILLAR 02 · NEXLOCK ──────────────────────────────────────── */}
      <PillarSection
        pillarId="nexlock"
        number="02"
        reverse
        heading="Recover device-finance EMIs without field agents or repossession."
        intro="NexLock is an Android app and management dashboard built by Nexus for businesses that sell or finance phones on EMI."
        visual={<NexLockPhoneVisual />}
        ctas={[
          { label: nexlock.cta, to: '/nexlock' },
          { label: 'Become a NexLock partner', to: '/collaborate?type=nexlock' },
        ]}
      >
        <ProblemSolution
          problem="When borrowers stop paying, repossession is expensive, confrontational and often impossible. Devices disappear."
          solution="NexLock restricts phone functionality the moment an EMI is overdue — keeping it locked until payment clears, with no physical intervention needed."
          accent={nexlock.accent}
        />
        <FeatureGrid items={NEXLOCK_FEATURES} accent={nexlock.accent} />
        <Audience label="Built for" items={['Mobile retailers', 'Device-finance NBFCs', 'Fintech lenders', 'Microfinance institutions']} />
      </PillarSection>

      {/* ── PILLAR 03 · NEXWARRANTY ──────────────────────────────────── */}
      <PillarSection
        pillarId="nexwarranty"
        number="03"
        tinted
        heading="Extended warranty that starts where the brand warranty ends."
        intro="NexWarranty protects home appliances and electronics with 100% parts and labour coverage, zero depreciation on claims, and doorstep pickup and drop."
        visual={<NexWarrantyCertificateVisual />}
        ctas={[
          { label: nexwarranty.cta, to: '/nexwarrenty' },
          { label: 'Offer NexWarranty to your customers', to: '/collaborate?type=nexwarranty' },
        ]}
      >
        <ProblemSolution
          problem="Out-of-warranty repairs are unpredictable and expensive. Many warranty plans deduct depreciation, leaving customers with unexpected bills."
          solution="NexWarranty pays 100% of parts and labour, deducts zero depreciation, and arranges doorstep pickup and drop with brand-authorized service centers."
          accent={nexwarranty.accent}
        />
        <FeatureGrid items={NEXWARRANTY_FEATURES} accent={nexwarranty.accent} />
        <Audience label="Coverage for" items={['Air conditioners', 'Refrigerators', 'Washing machines', 'Televisions', 'Laptops & 10+ more categories']} />
      </PillarSection>

      {/* ── ONE TEAM / EXPERTISE STRIP ───────────────────────────────── */}
      <section className="bg-ink py-20 text-slate-50">
        <Container>
          <div data-reveal className={`grid grid-cols-1 items-center gap-10 md:grid-cols-[1.2fr_0.8fr] ${reveal}`}>
            <div>
              <p className="mb-3 font-mono text-[0.72rem] tracking-[0.14em] text-cyan-400 uppercase">One team, three focuses</p>
              <h2 className="mb-4 text-[clamp(1.9rem,3.2vw,2.7rem)] text-white">We run live products every day. That makes our client engineering better.</h2>
              <p className="text-[1.02rem] leading-relaxed text-slate-300">
                Operating NexLock and NexWarranty means we face the same problems our clients face: reliability, data integrity, user trust and keeping software running after launch day. That's the mindset we bring to every IT Solutions engagement.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="font-mono text-[0.68rem] tracking-[0.12em] text-cyan-400 uppercase">Nexus IT Solutions</p>
                <p className="text-[0.92rem] text-slate-200">We engineer, maintain and modernize software for your business.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="font-mono text-[0.68rem] tracking-[0.12em] text-blue-400 uppercase">NexLock &amp; NexWarranty</p>
                <p className="text-[0.92rem] text-slate-200">Products Nexus owns and operates — serving retailers, lenders and customers.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28">
        <Container>
          <div data-reveal className={`relative overflow-hidden rounded-[20px] bg-ink px-6 py-14 text-center text-slate-50 sm:px-12 ${reveal}`}>
            <div className="bg-grid-ink pointer-events-none absolute inset-0 opacity-15" />
            <div className="relative">
              <p className="mb-3 font-mono text-[0.72rem] tracking-[0.14em] text-cyan-400 uppercase">Ready to talk?</p>
              <h2 className="mb-4 text-[clamp(1.9rem,3.2vw,2.7rem)] text-white">Tell us what you're working on.</h2>
              <p className="mx-auto mb-8 max-w-[48ch] text-[1.02rem] text-slate-300">
                Whether you need software built, want to resolve an issue with an existing system, or are looking to partner on NexLock or NexWarranty — we'd be glad to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/collaborate"
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-7 py-3.5 text-base font-semibold text-ink transition hover:bg-cyan-400"
                >
                  Start a conversation &rarr;
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition hover:border-white/50"
                >
                  Contact details
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
