'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHeader from '../../components/PageHeader';
import PhotoBand from '../../components/PhotoBand';
import Container from '../../components/Container';
import Eyebrow from '../../components/Eyebrow';
import Reveal from '../../components/motion/Reveal';
import TiltCard from '../../components/motion/TiltCard';
import SpotlightCard from '../../components/reactbits/SpotlightCard';

const partnershipTypes = [
  'IT Solutions — New Website, App or Software Project',
  'IT Solutions — Existing Software / CRM Maintenance',
  'NexLock — EMI Security & Device Lock Integration',
  'NexWarranty — Extended Warranty Retail Partner',
  'Corporate IT Hardware & Infrastructure',
  'Brand / Manufacturer Alliance',
  'Other Corporate Collaboration',
];

const typeFromParam: Record<string, string> = {
  'it-new': partnershipTypes[0],
  'it-existing': partnershipTypes[1],
  nexlock: partnershipTypes[2],
  nexwarranty: partnershipTypes[3],
};

function CollaborateForm() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    designation: '',
    email: '',
    phone: '',
    partnershipType: typeFromParam[searchParams.get('type') || ''] || partnershipTypes[0],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const typeParam = searchParams.get('type');
  useEffect(() => {
    if (typeParam && typeFromParam[typeParam]) {
      setFormData((prev) => ({ ...prev, partnershipType: typeFromParam[typeParam] }));
    }
  }, [typeParam]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`Collaboration Request from ${formData.companyName}`);
    const body = encodeURIComponent(
      `Company Name: ${formData.companyName}\n` +
        `Contact Person: ${formData.contactName} (${formData.designation || 'N/A'})\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Partnership Type: ${formData.partnershipType}\n\n` +
        `Message / Details:\n${formData.message}`
    );

    window.location.href = `mailto:info@nexusdig.in?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <PageHeader
        compact={true}
        breadcrumbs={[{ label: 'Collaborate' }]}
        eyebrow="B2B & CORPORATE ALLIANCES"
        code="ALLIANCES"
        title="Partner & Collaborate"
        accentText="With Nexus"
        lede="Work with Nexus on a software project, bring NexLock to your device-finance business, or offer NexWarranty to your customers."
      />

      <PhotoBand
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        stamp="NX · PARTNERSHIPS"
        eyebrow="GROW WITH US"
        heading="Software for businesses. Products for retailers, lenders and OEMs."
      />

      {/* Ways to Work with Nexus */}
      <section className="py-24 sm:py-32 bg-canvas relative">
        <Container size="wide">
          <Reveal effect="fade-up">
            <div className="mb-16 text-center max-w-[680px] mx-auto">
              <Eyebrow code="MODELS">WHY PARTNER WITH NEXUS?</Eyebrow>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text-navy">
                Ways to work with{' '}
                <span className="serif-italic-accent">Nexus</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: '🛡️',
                title: 'NexWarranty for Retailers',
                desc: 'Offer NexWarranty extended warranty plans directly at your checkout or retail counter.',
              },
              {
                icon: '🔒',
                title: 'NexLock for Lenders',
                desc: 'Protect EMI payments and finance risk with NexLock remote device locking for retailers and lenders.',
              },
              {
                icon: '💻',
                title: 'Nexus IT Solutions',
                desc: 'Websites, apps, custom software and CRMs — built new, or maintained and modernized when they already exist.',
              },
              {
                icon: '📈',
                title: 'High Margin Share',
                desc: 'Maximize revenue per unit with transparent commission structures and zero setup overhead.',
              },
            ].map((card, i) => (
              <Reveal key={card.title} effect="fade-up" delay={i * 0.08}>
                <TiltCard maxTilt={6} scale={1.02} className="h-full">
                  <SpotlightCard
                    spotlightColor="rgba(37, 99, 235, 0.12)"
                    className="p-7 rounded-3xl glass-card bg-white/85 hover:bg-white border border-white/95 shadow-glass h-full flex flex-col justify-between group"
                  >
                    <div>
                      <div className="mb-5 text-3xl sm:text-4xl">{card.icon}</div>
                      <h4 className="mb-2 font-serif text-lg font-bold text-text-navy group-hover:text-primary-electric transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-text-body leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-3 border-t border-navy/5 flex items-center justify-between text-[0.68rem] font-mono text-text-muted">
                      <span>Partnership Stream</span>
                      <span className="text-primary-electric group-hover:translate-x-1 transition-transform">
                        &rarr;
                      </span>
                    </div>
                  </SpotlightCard>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Direct Collaboration Form Section */}
      <section className="py-24 sm:py-32 bg-canvas-alt border-t border-navy/5 relative">
        <Container size="wide">
          <div className="mx-auto max-w-3xl">
            <Reveal effect="fade-up">
              <div className="rounded-[2.5rem] glass-card bg-white/90 p-8 sm:p-12 lg:p-14 border border-white/95 shadow-glass-lg relative overflow-hidden">
                <div className="mb-10 text-center">
                  <Eyebrow code="DIRECT">DIRECT COLLABORATION FORM</Eyebrow>
                  <h3 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-text-navy">
                    Submit Your <span className="serif-italic-accent">Proposal</span>
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-text-body">
                    Fill out the form below. Your request will be sent straight to our corporate desk at{' '}
                    <a
                      href="mailto:info@nexusdig.in"
                      className="font-semibold text-primary-electric hover:underline"
                    >
                      info@nexusdig.in
                    </a>
                    .
                  </p>
                </div>

                {submitted && (
                  <div className="mb-8 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-6 text-center text-slate-800">
                    <span className="text-3xl">✅</span>
                    <h4 className="mt-2 font-serif text-lg font-bold text-navy">Proposal Prepared!</h4>
                    <p className="mt-1 text-sm text-slate-600">
                      If your email app didn't open automatically, click below to send your details directly:
                    </p>
                    <a
                      href={`mailto:info@nexusdig.in?subject=${encodeURIComponent(
                        `Collaboration Request from ${formData.companyName}`
                      )}&body=${encodeURIComponent(
                        `Company Name: ${formData.companyName}\nContact Person: ${formData.contactName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPartnership Type: ${formData.partnershipType}\n\nMessage:\n${formData.message}`
                      )}`}
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 shadow-md"
                    >
                      ✉️ Send Email to info@nexusdig.in
                    </a>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Company + Contact */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="relative group">
                      <label className="block mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-text-navy">
                        Company / Business Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Acme Retail Pvt Ltd"
                        className="w-full rounded-2xl border border-navy/15 bg-white/80 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-primary-electric focus:bg-white focus:ring-4 focus:ring-primary-electric/15 focus:shadow-glass"
                      />
                    </div>

                    <div className="relative group">
                      <label className="block mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-text-navy">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        required
                        value={formData.contactName}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full rounded-2xl border border-navy/15 bg-white/80 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-primary-electric focus:bg-white focus:ring-4 focus:ring-primary-electric/15 focus:shadow-glass"
                      />
                    </div>
                  </div>

                  {/* Row 2: Designation + Email + Phone */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    <div className="relative group">
                      <label className="block mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-text-navy">
                        Designation
                      </label>
                      <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        placeholder="e.g. Business Manager"
                        className="w-full rounded-2xl border border-navy/15 bg-white/80 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-primary-electric focus:bg-white focus:ring-4 focus:ring-primary-electric/15 focus:shadow-glass"
                      />
                    </div>

                    <div className="relative group">
                      <label className="block mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-text-navy">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@acmeretail.com"
                        className="w-full rounded-2xl border border-navy/15 bg-white/80 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-primary-electric focus:bg-white focus:ring-4 focus:ring-primary-electric/15 focus:shadow-glass"
                      />
                    </div>

                    <div className="relative group">
                      <label className="block mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-text-navy">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 9876543210"
                        className="w-full rounded-2xl border border-navy/15 bg-white/80 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-primary-electric focus:bg-white focus:ring-4 focus:ring-primary-electric/15 focus:shadow-glass"
                      />
                    </div>
                  </div>

                  {/* Row 3: Partnership Category */}
                  <div className="relative group">
                    <label className="block mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-text-navy">
                      Partnership Category *
                    </label>
                    <div className="relative">
                      <select
                        name="partnershipType"
                        value={formData.partnershipType}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-2xl border border-navy/15 bg-white/80 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-primary-electric focus:bg-white focus:ring-4 focus:ring-primary-electric/15 cursor-pointer"
                      >
                        {partnershipTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-text-muted">
                        ▼
                      </span>
                    </div>
                  </div>

                  {/* Row 4: Proposal Textarea */}
                  <div className="relative group">
                    <label className="block mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-text-navy">
                      Collaboration Details / Proposal *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business and what you need — a new project, the software you already have, expected volumes, or collaboration goals..."
                      className="w-full rounded-2xl border border-navy/15 bg-white/80 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-primary-electric focus:bg-white focus:ring-4 focus:ring-primary-electric/15 focus:shadow-glass"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 text-center">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-primary-electric to-navy px-10 py-4 font-semibold text-white shadow-glass-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] transition-all cursor-pointer"
                    >
                      <span>🤝</span>
                      <span>Submit Collaboration Proposal</span>
                    </button>
                    <p className="mt-3 text-xs font-mono text-text-muted">
                      Submitting will open your mail client to send structured details to{' '}
                      <strong className="text-text-navy">info@nexusdig.in</strong>
                    </p>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

export default function CollaborateClientView() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-36 text-center text-text-muted font-mono">Loading collaboration desk...</div>}>
      <CollaborateForm />
    </Suspense>
  );
}
