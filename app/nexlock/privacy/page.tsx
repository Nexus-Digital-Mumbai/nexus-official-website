import React from 'react';
import type { Metadata } from 'next';
import Eyebrow from '../../../components/Eyebrow';
import LegalDocumentLayout, { TocSection } from '../../../components/legal/LegalDocumentLayout';

export const metadata: Metadata = {
  title: 'NexLock Privacy Policy',
  description:
    'Privacy Policy for NexLock device management and EMI enforcement application operated by Nexus Digital Services Pvt. Ltd.',
  alternates: {
    canonical: '/nexlock/privacy',
  },
  openGraph: {
    title: 'NexLock Privacy Policy — Nexus Digital',
    description:
      'Privacy Policy for NexLock device management and EMI enforcement application operated by Nexus Digital Services Pvt. Ltd.',
    url: 'https://nexusdig.in/nexlock/privacy',
  },
};

const sections = [
  {
    number: '01',
    id: 'section-01',
    title: 'Service Description',
    content:
      'NexLock enables device management for financed devices. Devices may be enrolled and controlled by authorized finance agents, lenders, or retailers for loan compliance and EMI recovery purposes. Device management actions are performed by authorized third parties (finance agents or retailers), not directly by the Company.',
  },
  {
    number: '02',
    id: 'section-02',
    title: 'Information We Collect',
    items: [
      {
        label: 'Personal Information',
        detail: 'Name, phone number, email address, SIM number (when required), address.',
      },
      {
        label: 'Device Information',
        detail:
          'Device model, manufacturer, OS version, device identifiers (Android ID, IMEI where permitted), installed app security status, device lock status.',
      },
      {
        label: 'Usage & Technical Data',
        detail:
          'App activity logs, enrollment information, device management command history, network information.',
      },
      {
        label: 'Location Data (if enabled)',
        detail: 'Approximate device location for security and recovery purposes.',
      },
    ],
  },
  {
    number: '03',
    id: 'section-03',
    title: 'How Information Is Collected',
    items: [
      { detail: 'During device enrollment by finance agents or retailers.' },
      { detail: 'Automatically during app operation.' },
      { detail: 'From financing partners during loan processing.' },
    ],
  },
  {
    number: '04',
    id: 'section-04',
    title: 'How We Use Information',
    content:
      'Information is used solely to enable financed device management, ensure compliance with loan agreements, prevent fraud and theft, provide security features, maintain service functionality, and comply with legal obligations. We do not sell personal data.',
  },
  {
    number: '05',
    id: 'section-05',
    title: 'Device Management Responsibility',
    content:
      'NexLock provides the technical platform only. Actual device management actions are performed by authorized finance agents, lenders, or retailers. The Company does not independently initiate device restrictions without authorized partner action.',
  },
  {
    number: '06',
    id: 'section-06',
    title: 'Third-Party MDM Service Provider',
    content:
      'NexLock uses MDM infrastructure provided by Codeproof Technologies Inc. to deliver device security and management features. Relevant technical data may be processed through Codeproof systems solely to enable MDM functionality. Codeproof acts only as a technology provider and does not control loan decisions.',
  },
  {
    number: '07',
    id: 'section-07',
    title: 'Data Sharing',
    content:
      'Data may be shared with authorized finance agents, retailers involved in device sale or financing, platform service providers, and legal authorities when required by law.',
  },
  {
    number: '08',
    id: 'section-08',
    title: 'Data Retention',
    content:
      'Data is deleted after 1 year from enrollment, or after loan completion if the EMI tenure exceeds 12 months. After deletion, data is permanently removed from active systems subject to legal retention requirements.',
  },
  {
    number: '09',
    id: 'section-09',
    title: 'Data Security & Rights',
    content:
      'We implement reasonable safeguards to protect information. You have the right to request access, correction, or deletion of your data (subject to financing obligations), and withdraw consent where applicable. NexLock is not intended for individuals under 18 years of age.',
  },
];

const tocSections: TocSection[] = [
  ...sections.map((s) => ({ id: s.id, number: `§${s.number}`, title: s.title })),
  { id: 'section-10', number: '§10', title: 'Contact Information' },
];

export default function NexlockPrivacy() {
  return (
    <LegalDocumentLayout
      eyebrow="NX–LCK–LEGAL"
      code="LEGAL"
      title="Privacy Policy"
      accentTitle="for NexLock"
      lede="This Privacy Policy explains how Nexus Digital collects, uses, discloses, stores, and protects information when NexLock is used for device financing, security, and management purposes."
      backHref="/nexlock"
      backLabel="← Back to NexLock"
      badgeCode="NexLock — Nexus Digital"
      effectiveDate="Effective: August 2026 · Last updated: August 2026"
      sections={tocSections}
    >
      {/* Sections 01 to 09 */}
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
                    {'label' in item && item.label && (
                      <strong className="text-text-navy font-semibold">
                        {item.label}:{' '}
                      </strong>
                    )}
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </article>
      ))}

      {/* Section 10: Contact Information */}
      <article
        id="section-10"
        className="scroll-mt-32 rounded-3xl glass-card bg-white/90 p-8 sm:p-10 border border-white/95 shadow-glass-lg relative overflow-hidden"
      >
        <div className="h-1.5 -mx-10 -mt-10 mb-8 bg-gradient-to-r from-primary-electric via-accent-cyan to-navy" />
        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono text-xs tracking-wider text-primary-electric uppercase font-bold">
            §10
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
