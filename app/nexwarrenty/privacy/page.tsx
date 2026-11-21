import React from 'react';
import type { Metadata } from 'next';
import Eyebrow from '../../../components/Eyebrow';
import LegalDocumentLayout, { TocSection } from '../../../components/legal/LegalDocumentLayout';

export const metadata: Metadata = {
  title: 'NexWarranty Privacy Policy',
  description:
    'Privacy Policy for NexWarranty extended warranty and business support services provided by Nexus Digital Services Pvt. Ltd. under DPDP Act 2023.',
  alternates: {
    canonical: '/nexwarrenty/privacy',
  },
  openGraph: {
    title: 'NexWarranty Privacy Policy — Nexus Digital',
    description:
      'Privacy Policy for NexWarranty extended warranty and business support services provided by Nexus Digital Services Pvt. Ltd. under DPDP Act 2023.',
    url: 'https://nexusdig.in/nexwarrenty/privacy',
  },
};

/* ─────────────────────────────────────────────────────────────
   Sub-processor table data
───────────────────────────────────────────────────────────── */
const processors = [
  { no: 1, name: 'Cloud Hosting Service Providers', data: 'Personal Data, Hardware Identifiers, Location Data', purpose: "Nexus Digital's Website, Applications, Databases" },
  { no: 2, name: 'Insurance Companies', data: 'Personal Data, Hardware Identifiers', purpose: 'To cover the risk under various plans of Nexus Digital' },
  { no: 3, name: 'Service Centres', data: 'Personal Data, Hardware Identifiers', purpose: 'To provide repair and replacement services' },
  { no: 4, name: 'Logistic Partners', data: 'Personal Data, Hardware Identifiers', purpose: 'To provide pick and drop services of the products' },
  { no: 5, name: 'Call Centers / Contact Centers', data: 'Personal Data, Hardware Identifiers', purpose: 'To provide customer services' },
  { no: 6, name: 'Communication Service Providers', data: 'Personal Data', purpose: 'To provide transactional, informational, and promotional messages' },
  { no: 7, name: 'Statistical & Analytics Service Provider', data: 'Personal Data', purpose: 'To analyze customer behavior, preferences, and purchasing trends' },
  { no: 8, name: 'Document Replacement Service Provider', data: 'Personal Data', purpose: 'To provide document replacement services' },
  { no: 9, name: 'Electronic Device Lessor', data: 'Personal Data', purpose: 'To provide products & services under Smart EPP program' },
  { no: 10, name: 'Electronic Device Seller', data: 'Personal Data', purpose: 'To provide products & services under Smart EPP program' },
  { no: 11, name: 'Liquidation Partner', data: 'Personal Data', purpose: 'To provide products & services under Assured Buyback (ABB) program' },
];

/* ─────────────────────────────────────────────────────────────
   Rights of the Data Principal
───────────────────────────────────────────────────────────── */
const rights = [
  {
    title: 'Right to Information',
    detail: 'Obtain a summary of Personal Data being processed, and identities of all Data Fiduciaries and Processors with whom the data has been shared.',
  },
  {
    title: 'Right to Correction & Erasure',
    detail: 'Request correction, completion, updating, and erasure of your Personal Data.',
  },
  {
    title: 'Right to Grievance Redressal',
    detail: 'Access readily available means of grievance redressal for any act or omission regarding the performance of obligations relating to Personal Data.',
  },
  {
    title: 'Right to Nominate',
    detail: 'Nominate another individual who shall, in the event of death or incapacity of the Data Principal, exercise these rights.',
  },
  {
    title: 'Right to Withdraw Consent',
    detail: 'Withdraw consent given for processing personal data at any time. The consequences of withdrawal shall be borne by the Data Principal.',
  },
];

/* ─────────────────────────────────────────────────────────────
   Duties of Data Principal
───────────────────────────────────────────────────────────── */
const duties = [
  'Comply with the provisions of all applicable laws for the time being in force while exercising rights.',
  'Ensure not to impersonate another person while providing Personal Data for a specified purpose.',
  'Ensure not to suppress any material information while providing Personal Data for any document, unique identifier, or proof of identity/address issued by the government.',
  'Ensure not to register a false or frivolous grievance or complaint with a Data Fiduciary or government authorities.',
  'Furnish only verifiably authentic information while exercising the right to correction or erasure.',
];

/* ─────────────────────────────────────────────────────────────
   Mobile app data collected
───────────────────────────────────────────────────────────── */
const appData = [
  { label: 'Phone Number', detail: 'Uniquely identifies a Nexus Digital customer.' },
  { label: 'IMEI', detail: 'Primary hardware identifier required to provide protection plans.' },
  { label: 'Location', detail: 'Enables address capture for technician visits and checks location eligibility for services.' },
  { label: 'Phone Components', detail: 'Tests hardware elements (camera, Bluetooth, sensors, mic, battery, GPS, Wi-Fi) for malfunction, executed only upon explicit user action.' },
  { label: 'Technical Information', detail: 'MAC address, IP address, and Wi-Fi details to offer personalized gadget protection.' },
  { label: 'Contact List', detail: 'Facilitates contact selection and fraud detection via secondary devices.' },
  { label: 'Android Advertising ID', detail: 'Used in compliance with Google Play Services guidelines solely for advertising and analytics without connecting to personally identifiable information without explicit consent.' },
];

/* ─────────────────────────────────────────────────────────────
   Basic Terms
───────────────────────────────────────────────────────────── */
const basicTerms = [
  { term: 'Applicable Law', definition: 'The applicable laws of India.' },
  { term: 'Data Fiduciary', definition: 'Any person who alone or in conjunction with other persons determines the purpose and means of processing of Personal Data.' },
  { term: 'Data Principal', definition: 'The individual to whom the Personal Data relates, including parents/guardians of children or persons with disability.' },
  { term: 'Data Processor', definition: 'Any person who processes Personal Data on behalf of a Data Fiduciary.' },
  { term: 'Hardware Identifiers', definition: 'Make, Model Number, Serial Number, IMEI number, MAC address, etc., as applicable.' },
  { term: 'Location Data', definition: "Device's Internet Protocol (IP) Address, GPS Latitude & Longitude coordinates, etc., as applicable." },
  { term: 'Personal Data', definition: 'Any data about an individual who is identifiable by or in relation to such data as per The Digital Personal Data Protection Act, 2023, India.' },
  { term: 'Processing', definition: 'A wholly or partly automated operation on digital Personal Data, including collection, recording, storage, retrieval, use, sharing, disclosure, restriction, erasure, or destruction.' },
];

const tocSections: TocSection[] = [
  { id: 'section-00', number: '§00', title: 'Overview' },
  { id: 'section-01', number: '§01', title: 'Information Security Standards & Compliances' },
  { id: 'section-02', number: '§02', title: 'Basic Terms' },
  { id: 'section-03', number: '§03', title: 'Scope of Processing Personal Data' },
  { id: 'section-04', number: '§04', title: 'Sharing of Personal Data with Third Parties' },
  { id: 'section-05', number: '§05', title: 'Sub-Processing' },
  { id: 'section-06', number: '§06', title: 'Rights of the Data Principal' },
  { id: 'section-07', number: '§07', title: 'Grievance Redressal' },
  { id: 'section-08', number: '§08', title: 'Duties of Data Principal' },
  { id: 'section-09', number: '§09', title: 'Security of Processing' },
  { id: 'section-10', number: '§10', title: 'Website & Mobile Applications' },
  { id: 'section-11', number: '§11', title: 'Termination of Service' },
  { id: 'section-12', number: '§12', title: 'Personal Data Purging' },
  { id: 'section-13', number: '§13', title: 'Cross Border Transfer' },
  { id: 'section-14', number: '§14', title: 'Personal Data Breach' },
  { id: 'section-15', number: '§15', title: 'Cookies Policy' },
  { id: 'section-16', number: '§16', title: 'Inquiries & Complaints' },
];

export default function NexwarrentyPrivacy() {
  return (
    <LegalDocumentLayout
      eyebrow="NX–WRT–LEGAL"
      code="LEGAL"
      title="Privacy Policy"
      accentTitle="for Nexwarrenty"
      lede="At Nexus Digital, we maintain the highest levels of security standards. This policy explains how we collect, use, and protect your Digital Personal Data in compliance with applicable laws of India."
      backHref="/nexwarrenty"
      backLabel="← Back to Nexwarrenty"
      badgeCode="Nexwarrenty — Nexus Digital"
      effectiveDate="Last Updated: 06 July 2026"
      sections={tocSections}
    >
      {/* ── §00 Overview ── */}
      <article
        id="section-00"
        className="scroll-mt-32 rounded-3xl glass-card bg-white/85 p-8 sm:p-10 border border-white/95 shadow-glass"
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs tracking-wider text-teal-700 uppercase font-bold">
            §00
          </span>
          <h2 className="font-serif text-2xl font-bold text-text-navy">Overview</h2>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-text-body">
          <p>
            At Nexus Digital, we maintain the highest levels of security standards. Digital Personal Data Protection & Privacy is crucial as it safeguards sensitive information from unauthorized access, misuse, or disclosure. It allows individuals to control how their Personal Data is collected, used, and shared, thereby protecting their privacy and maintaining control over their personal information.
          </p>
          <p>
            We collect Personal Data so that we can serve better services for the Nexus Digital Plans availed. We are fully committed to ensuring the privacy, confidentiality, and integrity of any personal information. We protect this information by maintaining lawful physical, electronic, and procedural security means.
          </p>
        </div>
      </article>

      {/* ── §01 Security Standards ── */}
      <article
        id="section-01"
        className="scroll-mt-32 rounded-3xl glass-card bg-white/85 p-8 sm:p-10 border border-white/95 shadow-glass"
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs tracking-wider text-teal-700 uppercase font-bold">
            §01
          </span>
          <h2 className="font-serif text-2xl font-bold text-text-navy">
            Information Security Standards & Compliances
          </h2>
        </div>
        <p className="mb-6 text-base text-text-body leading-relaxed">
          Nexus Digital is audited and certified by CERT-In empanelled auditing organizations for:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-teal-500/20 bg-teal-500/[0.04] p-6 shadow-xs">
            <p className="mb-2 font-serif text-base font-bold text-text-navy">
              ISO/IEC 27001 – ISMS
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-text-body">
              An international standard providing a framework for establishing, implementing, maintaining, and continually improving an information security management system, ensuring confidentiality, integrity, and availability of information assets.
            </p>
          </div>
          <div className="rounded-2xl border border-teal-500/20 bg-teal-500/[0.04] p-6 shadow-xs">
            <p className="mb-2 font-serif text-base font-bold text-text-navy">PCI-DSS</p>
            <p className="text-xs sm:text-sm leading-relaxed text-text-body">
              A set of security standards ensuring that all companies that accept, process, store, or transmit credit card information maintain a secure environment to protect cardholder data from theft and misuse.
            </p>
          </div>
        </div>
      </article>

      {/* ── §02 Basic Terms ── */}
      <article
        id="section-02"
        className="scroll-mt-32 rounded-3xl glass-card bg-white/85 p-8 sm:p-10 border border-white/95 shadow-glass"
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs tracking-wider text-teal-700 uppercase font-bold">
            §02
          </span>
          <h2 className="font-serif text-2xl font-bold text-text-navy">Basic Terms</h2>
        </div>
        <ul className="space-y-4">
          {basicTerms.map((t) => (
            <li key={t.term} className="flex gap-3 items-start">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-teal-700 text-xs font-bold">
                ✓
              </span>
              <p className="text-base leading-relaxed text-text-body">
                <strong className="text-text-navy font-semibold">{t.term}: </strong>
                {t.definition}
              </p>
            </li>
          ))}
        </ul>
      </article>

      {/* ── §03 Scope ── */}
      <article
        id="section-03"
        className="scroll-mt-32 rounded-3xl glass-card bg-white/85 p-8 sm:p-10 border border-white/95 shadow-glass"
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs tracking-wider text-teal-700 uppercase font-bold">
            §03
          </span>
          <h2 className="font-serif text-2xl font-bold text-text-navy">
            Scope of Processing Personal Data
          </h2>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-text-body">
          <p>
            This policy applies to the processing of Personal Data of Customers (the Data Principal) by Nexus Digital (as a Data Fiduciary). Processing will be governed by this policy; in particular, Nexus Digital will process Personal Data only on consent given by the Data Principal with a clear affirmative action.
          </p>
          <p>
            The subject matter is the Personal Data provided in respect of Services under the Plan Terms & Conditions. The duration of processing is the duration of provision of Services until disposal of Personal Data in accordance with applicable laws.
          </p>
        </div>
      </article>

      {/* ── §04 Data Sharing ── */}
      <article
        id="section-04"
        className="scroll-mt-32 rounded-3xl glass-card bg-white/85 p-8 sm:p-10 border border-white/95 shadow-glass"
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs tracking-wider text-teal-700 uppercase font-bold">
            §04
          </span>
          <h2 className="font-serif text-2xl font-bold text-text-navy">
            Sharing of Personal Data with Third Parties
          </h2>
        </div>
        <p className="text-base leading-relaxed text-text-body">
          Nexus Digital does not publish, sell, lease, or share data to any third parties, except for performance of its service obligations or as may be required by law, or pursuant to the order of a court or regulatory authority, or in order for Nexus Digital to enforce its rights.
        </p>
      </article>

      {/* ── §05 Sub-Processing Table ── */}
      <article
        id="section-05"
        className="scroll-mt-32 rounded-3xl glass-card bg-white/85 p-8 sm:p-10 border border-white/95 shadow-glass overflow-hidden"
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs tracking-wider text-teal-700 uppercase font-bold">
            §05
          </span>
          <h2 className="font-serif text-2xl font-bold text-text-navy">Sub-Processing</h2>
        </div>
        <p className="mb-6 text-base leading-relaxed text-text-body">
          Nexus Digital maintains a list of sub-processors engaged for processing Personal Data in accordance with this policy:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-navy/10">
          <table className="w-full min-w-[560px] border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-navy/10 bg-navy text-white font-mono">
                <th className="p-3.5 text-left text-xs uppercase font-bold">No.</th>
                <th className="p-3.5 text-left text-xs uppercase font-bold">Processor</th>
                <th className="p-3.5 text-left text-xs uppercase font-bold">Data</th>
                <th className="p-3.5 text-left text-xs uppercase font-bold">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy/5 font-sans">
              {processors.map((p, i) => (
                <tr key={p.no} className={i % 2 === 0 ? 'bg-teal-500/[0.03]' : ''}>
                  <td className="p-3.5 font-mono text-teal-700 font-bold">
                    {String(p.no).padStart(2, '0')}
                  </td>
                  <td className="p-3.5 font-semibold text-text-navy">{p.name}</td>
                  <td className="p-3.5 text-text-muted">{p.data}</td>
                  <td className="p-3.5 text-text-body">{p.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      {/* ── §06 Rights ── */}
      <article
        id="section-06"
        className="scroll-mt-32 rounded-3xl glass-card bg-white/85 p-8 sm:p-10 border border-white/95 shadow-glass"
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs tracking-wider text-teal-700 uppercase font-bold">
            §06
          </span>
          <h2 className="font-serif text-2xl font-bold text-text-navy">
            Rights of the Data Principal
          </h2>
        </div>
        <ul className="space-y-4">
          {rights.map((r) => (
            <li key={r.title} className="flex gap-3 items-start">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-teal-700 text-xs font-bold">
                ✓
              </span>
              <p className="text-base leading-relaxed text-text-body">
                <strong className="text-text-navy font-semibold">{r.title}: </strong>
                {r.detail}
              </p>
            </li>
          ))}
        </ul>
      </article>

      {/* ── §07 Grievance Redressal ── */}
      <article
        id="section-07"
        className="scroll-mt-32 rounded-3xl glass-card bg-white/85 p-8 sm:p-10 border border-white/95 shadow-glass"
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs tracking-wider text-teal-700 uppercase font-bold">
            §07
          </span>
          <h2 className="font-serif text-2xl font-bold text-text-navy">
            Grievance Redressal
          </h2>
        </div>
        <p className="mb-4 text-base leading-relaxed text-text-body">
          Customers or Data Principals can raise grievances, requests, or any queries related to their personal data:
        </p>
        <a
          href="mailto:happytoassist@nexusdigital.in"
          className="inline-flex items-center gap-2 font-mono font-semibold text-primary-electric hover:underline"
        >
          <span>✉</span> happytoassist@nexusdigital.in
        </a>
      </article>

      {/* ── §08 Duties ── */}
      <article
        id="section-08"
        className="scroll-mt-32 rounded-3xl glass-card bg-white/85 p-8 sm:p-10 border border-white/95 shadow-glass"
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs tracking-wider text-teal-700 uppercase font-bold">
            §08
          </span>
          <h2 className="font-serif text-2xl font-bold text-text-navy">
            Duties of Data Principal
          </h2>
        </div>
        <ul className="space-y-3.5">
          {duties.map((d, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-teal-700 text-xs font-bold">
                ✓
              </span>
              <p className="text-base leading-relaxed text-text-body">{d}</p>
            </li>
          ))}
        </ul>
      </article>

      {/* ── §09 Security of Processing ── */}
      <article
        id="section-09"
        className="scroll-mt-32 rounded-3xl glass-card bg-white/85 p-8 sm:p-10 border border-white/95 shadow-glass"
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs tracking-wider text-teal-700 uppercase font-bold">
            §09
          </span>
          <h2 className="font-serif text-2xl font-bold text-text-navy">
            Security of Processing
          </h2>
        </div>
        <p className="mb-4 text-base leading-relaxed text-text-body">
          Nexus Digital implements appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including:
        </p>
        <ul className="space-y-3.5">
          {[
            'Masking and encryption of Personal Data.',
            'Ongoing confidentiality, integrity, availability, and resilience of processing systems and services.',
            'Ability to restore availability and access to Personal Data in a timely manner after a physical or technical incident.',
            'Risk assessment against accidental or unlawful destruction, loss, alteration, or unauthorized disclosure of Personal Data.',
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-teal-700 text-xs font-bold">
                ✓
              </span>
              <p className="text-base leading-relaxed text-text-body">{item}</p>
            </li>
          ))}
        </ul>
      </article>

      {/* ── §10 Website & Mobile Applications ── */}
      <article
        id="section-10"
        className="scroll-mt-32 rounded-3xl glass-card bg-white/85 p-8 sm:p-10 border border-white/95 shadow-glass"
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs tracking-wider text-teal-700 uppercase font-bold">
            §10
          </span>
          <h2 className="font-serif text-2xl font-bold text-text-navy">
            Nexus Digital Website &amp; Mobile Applications
          </h2>
        </div>
        <div className="mb-6 space-y-3 text-base leading-relaxed text-text-body">
          <p>
            Nexus Digital has developed website and mobile applications targeted at Indian consumers. The website and mobile applications can be used to activate a subscription plan, renew subscriptions, interact with chat support and contact centers, and avail various value-added services.
          </p>
        </div>
        <p className="mb-3 font-mono text-xs uppercase tracking-wider font-bold text-text-navy">
          Mobile App Data Collected:
        </p>
        <ul className="space-y-3.5">
          {appData.map((a) => (
            <li key={a.label} className="flex gap-3 items-start">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-teal-700 text-xs font-bold">
                ✓
              </span>
              <p className="text-base leading-relaxed text-text-body">
                <strong className="text-text-navy font-semibold">{a.label}: </strong>
                {a.detail}
              </p>
            </li>
          ))}
        </ul>
      </article>

      {/* ── §11 to §15 ── */}
      {[
        {
          id: 'section-11',
          number: '11',
          title: 'Termination of Service',
          content:
            "Upon the expiration of membership or termination of the Services, storage of Personal Data will cease unless any business partner's contractual obligations or applicable law requires continued storage.",
        },
        {
          id: 'section-12',
          number: '12',
          title: 'Personal Data Purging',
          content:
            'Nexus Digital will irrevocably scramble or purge Personal Data in accordance with the Personal Data Protection Act, 2023, India, or its contractual obligations.',
        },
        {
          id: 'section-13',
          number: '13',
          title: 'Cross Border Transfer',
          content:
            'To the extent any Personal Data is transferred outside India, such transfer will be subject to appropriate safeguards that provide an adequate level of protection in accordance with applicable laws.',
        },
        {
          id: 'section-14',
          number: '14',
          title: 'Personal Data Breach',
          content:
            "Nexus Digital will notify Customer without undue delay after becoming aware of a Personal Data breach and will reasonably respond to Customer's request for further information.",
        },
        {
          id: 'section-15',
          number: '15',
          title: 'Cookies Policy',
          content:
            'We use "Cookies" to analyze web page flow, measure promotional effectiveness, and ensure a safe experience. Cookies do not contain personal information. Users can accept, reject, or delete cookies via browser settings, though disabling them may affect website functionality.',
        },
      ].map((sec) => (
        <article
          key={sec.id}
          id={sec.id}
          className="scroll-mt-32 rounded-3xl glass-card bg-white/85 p-8 sm:p-10 border border-white/95 shadow-glass"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-xs tracking-wider text-teal-700 uppercase font-bold">
              §{sec.number}
            </span>
            <h2 className="font-serif text-2xl font-bold text-text-navy">
              {sec.title}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-text-body">{sec.content}</p>
        </article>
      ))}

      {/* ── §16 Inquiries & Complaints ── */}
      <article
        id="section-16"
        className="scroll-mt-32 rounded-3xl glass-card bg-white/90 p-8 sm:p-10 border border-white/95 shadow-glass-lg relative overflow-hidden"
      >
        <div className="h-1.5 -mx-10 -mt-10 mb-8 bg-gradient-to-r from-teal-600 via-emerald-400 to-navy" />
        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono text-xs tracking-wider text-teal-700 uppercase font-bold">
            §16
          </span>
          <h2 className="font-serif text-2xl font-bold text-text-navy">
            Inquiries &amp; Complaints
          </h2>
        </div>
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-14 mb-6">
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
              className="mt-1.5 inline-block text-base font-semibold text-teal-700 hover:underline font-mono"
            >
              info@nexusdig.in
            </a>
          </div>
        </div>
        <p className="rounded-2xl border border-navy/10 bg-navy/[0.03] p-5 text-sm text-text-body leading-relaxed">
          Nexus Digital reserves the right to modify this policy periodically. Significant changes will be communicated via prominent notifications on the website, login screen, or by email.
        </p>
      </article>
    </LegalDocumentLayout>
  );
}
