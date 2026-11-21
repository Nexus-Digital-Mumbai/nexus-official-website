import React from 'react';
import type { Metadata } from 'next';
import Eyebrow from '../../../components/Eyebrow';
import LegalDocumentLayout, { TocSection } from '../../../components/legal/LegalDocumentLayout';

export const metadata: Metadata = {
  title: 'NexLock Terms of Service',
  description:
    'Terms of Service and conditions of use for the NexLock application and platform operated by Nexus Digital Services Pvt. Ltd.',
  alternates: {
    canonical: '/nexlock/terms',
  },
  openGraph: {
    title: 'NexLock Terms of Service — Nexus Digital',
    description:
      'Terms of Service and conditions of use for the NexLock application and platform operated by Nexus Digital Services Pvt. Ltd.',
    url: 'https://nexusdig.in/nexlock/terms',
  },
};

const sections = [
  {
    number: '01',
    id: 'section-01',
    title: 'Authorized Use Only',
    content:
      'NexLock is a restricted application intended solely for use by authorized personnel acting on behalf of financing organizations or retailers. End customers are not permitted to use the application.',
  },
  {
    number: '02',
    id: 'section-02',
    title: 'Role of the Company',
    content:
      'The Company provides a technical platform for device management. It does not provide loans, collect EMIs, determine recovery actions, or enter into agreements with device end users.',
  },
  {
    number: '03',
    id: 'section-03',
    title: 'Agent Responsibilities',
    content:
      'Authorized users agree to the following obligations when using NexLock:',
    items: [
      { detail: 'Use the application only for lawful financing activities.' },
      { detail: 'Obtain customer consent before device enrollment.' },
      { detail: 'Enter accurate and truthful information at all times.' },
      { detail: 'Protect login credentials and account access.' },
      { detail: 'Comply with all applicable laws and regulations.' },
    ],
    footer:
      'Agents are solely responsible for all actions taken using their accounts.',
  },
  {
    number: '04',
    id: 'section-04',
    title: 'Device Management Actions',
    content:
      'Authorized partners may perform actions including device enrollment, lock or unlock commands, security enforcement, and status monitoring at the direction of the financing organization or retailer.',
  },
  {
    number: '05',
    id: 'section-05',
    title: 'Third-Party Technology',
    content:
      'NexLock uses MDM infrastructure provided by Codeproof Technologies Inc. to enable device security and management. Use of the application implies consent to necessary data processing for MDM functionality.',
  },
  {
    number: '06',
    id: 'section-06',
    title: 'Limitation of Liability & Prohibited Activities',
    content: 'Users must NOT:',
    items: [
      { detail: 'Use the app for unauthorized surveillance.' },
      { detail: 'Manage devices without proper authorization.' },
      { detail: 'Attempt to bypass or circumvent security features.' },
      { detail: 'Use the platform for any illegal purposes.' },
    ],
    footer:
      'The Company shall not be liable for actions taken by agents or retailers, loan recovery disputes, partner-initiated device restrictions, or losses arising from financing arrangements.',
  },
];

const tocSections: TocSection[] = [
  ...sections.map((s) => ({ id: s.id, number: `§${s.number}`, title: s.title })),
  { id: 'section-07', number: '§07', title: 'Contact Information' },
];

export default function NexlockTerms() {
  return (
    <LegalDocumentLayout
      eyebrow="NX–LCK–LEGAL"
      code="LEGAL"
      title="Terms & Conditions"
      accentTitle="for NexLock"
      lede="These Terms & Conditions govern access to and use of the NexLock application by authorized finance agents, lenders, and retailers. By using NexLock, you agree to these terms."
      backHref="/nexlock"
      backLabel="← Back to NexLock"
      badgeCode="NexLock — Nexus Digital"
      effectiveDate="Effective: August 2026 · Last updated: August 2026"
      sections={tocSections}
    >
      {/* Sections 01 to 06 */}
      {sections.map((sec) => (
        <article
          key={sec.id}
          id={sec.id}
          className="scroll-mt-32 rounded-3xl glass-card bg-white/85 p-8 sm:p-10 border border-white/95 shadow-glass transition-opacity duration-300"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-xs tracking-wider text-primary-electric uppercase font-bold">
              §{sec.number}
            </span>
            <h2 className="font-serif text-2xl font-bold text-text-navy">
              {sec.title}
            </h2>
          </div>

          {sec.content && (
            <p className="text-base text-text-body leading-relaxed">
              {sec.content}
            </p>
          )}

          {sec.items && (
            <ul className="mt-4 space-y-3.5">
              {sec.items.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-electric/10 text-primary-electric text-xs font-bold">
                    ✓
                  </span>
                  <p className="text-base leading-relaxed text-text-body">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          )}

          {sec.footer && (
            <div className="mt-6 rounded-2xl border border-navy/10 bg-navy/[0.03] p-5 text-sm text-text-navy font-medium leading-relaxed">
              {sec.footer}
            </div>
          )}
        </article>
      ))}

      {/* Section 07: Contact Information */}
      <article
        id="section-07"
        className="scroll-mt-32 rounded-3xl glass-card bg-white/90 p-8 sm:p-10 border border-white/95 shadow-glass-lg relative overflow-hidden"
      >
        <div className="h-1.5 -mx-10 -mt-10 mb-8 bg-gradient-to-r from-primary-electric via-accent-cyan to-navy" />
        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono text-xs tracking-wider text-primary-electric uppercase font-bold">
            §07
          </span>
          <h2 className="font-serif text-2xl font-bold text-text-navy">
            Contact Information
          </h2>
        </div>
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-14">
          <div>
            <Eyebrow code="ENTITY">Company</Eyebrow>
            <p className="mt-1.5 text-base font-bold text-text-navy font-serif">
              Nexus Digital
            </p>
          </div>
          <div>
            <Eyebrow code="DIRECT">Email</Eyebrow>
            <a
              href="mailto:info@nexusdig.in"
              className="mt-1.5 inline-block text-base font-semibold text-primary-electric hover:underline font-mono"
            >
              info@nexusdig.in
            </a>
          </div>
        </div>
      </article>
    </LegalDocumentLayout>
  );
}
