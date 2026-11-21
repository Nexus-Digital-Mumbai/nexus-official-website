import React from 'react';
import type { Metadata } from 'next';
import Eyebrow from '../../../components/Eyebrow';
import LegalDocumentLayout, { TocSection } from '../../../components/legal/LegalDocumentLayout';

export const metadata: Metadata = {
  title: 'NexWarranty Terms & Conditions',
  description:
    'Terms of Use and conditions governing access to nexusdig.in and NexWarranty protection services operated by Nexus Digital Services Pvt. Ltd.',
  alternates: {
    canonical: '/nexwarrenty/terms',
  },
  openGraph: {
    title: 'NexWarranty Terms & Conditions — Nexus Digital',
    description:
      'Terms of Use and conditions governing access to nexusdig.in and NexWarranty protection services operated by Nexus Digital Services Pvt. Ltd.',
    url: 'https://nexusdig.in/nexwarrenty/terms',
  },
};

interface TermSection {
  number: string;
  title: string;
  id: string;
  content?: string;
  items?: string[];
  footer?: string;
}

const sections: TermSection[] = [
  {
    number: '01',
    id: 'section-01',
    title: 'Definitions',
    content: 'Welcome to nexusdig.in (the "Site") operated by Nexus Digital Services Pvt. Ltd. ("Nexus Digital"). Nexus Digital provides its services subject to the following conditions. Before using the Site, you must read and accept all terms and conditions in this Terms of Use ("ToU") and the linked Privacy Policy. This ToU is effective upon acceptance. Use of any functionality of the Site constitutes acceptance. If this ToU conflicts with any other documents, the ToU will control for the purposes of usage of the Site.',
  },
  {
    number: '02',
    id: 'section-02',
    title: 'Description of Services',
    content: 'Nexus Digital provides users with access to information primarily about Business Support Services for Electronic goods including, but not restricted to, Warranties and related services (the "Service"). You are responsible for obtaining access to the Site, and that access may involve third-party fees (such as Internet service provider or airtime charges). You must provide and are responsible for all equipment necessary to access the Site.',
  },
  {
    number: '03',
    id: 'section-03',
    title: 'License and Site Access',
    content: 'Nexus Digital grants you a limited license to access and make personal use of the Site and the Service. This license does NOT include:',
    items: [
      'Any downloading or copying of any kind of information for the benefit of another individual, vendor, or any other third party.',
      'Caching, unauthorized hypertext links to the Site, or framing of any Content available through the Site.',
      'Uploading, posting, or transmitting any content that you do not have a right to make available (such as the intellectual property of another party).',
      'Uploading any material that contains software viruses or any code designed to interrupt, destroy, or limit the functionality of any computer software, hardware, or telecommunications equipment.',
      'Any action that imposes an unreasonable or disproportionately large load on Nexus Digital\'s infrastructure.',
      'Any use of data mining, robots, or similar data gathering and extraction tools.',
    ],
    footer: 'You may not bypass any measures used by Nexus Digital to prevent or restrict access to the Site. Any unauthorized use shall terminate the permission or license granted to you.',
  },
  {
    number: '04',
    id: 'section-04',
    title: 'Eligibility',
    content: 'The Service is not available to minors under the age of 18 or to any users suspended or removed from the system by Nexus Digital for any reason. Users may not have more than one active account. Users are prohibited from selling, trading, or otherwise transferring their accounts to another party.',
  },
  {
    number: '05',
    id: 'section-05',
    title: 'Your Account',
    content: 'In consideration of your use of the Site, you represent that you are of legal age to form a binding contract and are not a person barred from receiving services under the laws of India or other applicable jurisdiction. You agree to provide true, accurate, current, and complete information about yourself as prompted by the Site.',
    footer: 'You are responsible for maintaining the confidentiality of your account and password, and for restricting access to your computer. Nexus Digital reserves the right to refuse service, terminate accounts, or remove or edit content in its sole discretion.',
  },
  {
    number: '06',
    id: 'section-06',
    title: 'Errors, Inaccuracies and Omissions',
    content: 'Occasionally there may be information on our site that contains typographical errors, inaccuracies, or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times, and availability. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information or cancel orders if any information is inaccurate at any time without prior notice.',
  },
  {
    number: '07',
    id: 'section-07',
    title: 'Submitted Content',
    content: 'Nexus Digital does not claim ownership of any materials you make available through the Site. With respect to materials you submit or make available, you grant Nexus Digital a perpetual, irrevocable, non-terminable, worldwide, royalty-free and non-exclusive license to use, copy, distribute, publicly display, modify, create derivative works, and sublicense such materials.',
    items: [
      'Any unlawful, threatening, libelous, defamatory, obscene, pornographic, or other material that would violate rights of publicity, privacy, or any law.',
      'Any commercial material or content (including solicitation of funds, advertising, or marketing of any good or services).',
      'Any material that infringes, misappropriates, or violates any copyright, trademark, patent right, or other proprietary right of any third party.',
    ],
    footer: 'You shall be solely liable for any damages resulting from any violation of the foregoing restrictions.',
  },
  {
    number: '08',
    id: 'section-08',
    title: 'Disclaimer of Liability and Warranty',
    content: 'To the extent permitted by law, Nexus Digital assumes no legal liability for and does not warrant that the information contained on this website is accurate or complete, or that web pages will be free from errors or that availability will be uninterrupted. Nexus Digital expressly disclaims and excludes all express and implied warranties, terms, or conditions not stated herein.',
    footer: 'In no case shall Nexus Digital, its directors, officers, employees, affiliates, agents, contractors, or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind.',
  },
  {
    number: '09',
    id: 'section-09',
    title: 'Limitation of Liability',
    content: 'You expressly understand and agree that Nexus Digital and its subsidiaries, affiliates, officers, employees, agents, partners, and licensors shall not be liable to you for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses.',
    footer: 'If, despite the limitation above, Nexus Digital is found liable for any loss or damage, the liability will in no event exceed the greater of: (a) the service fees you paid to Nexus Digital in connection with such transaction(s), or (b) Rupees One Hundred only (INR 100).',
  },
  {
    number: '10',
    id: 'section-10',
    title: 'Indemnity',
    content: 'You agree to indemnify and hold Nexus Digital (and its officers, directors, agents, subsidiaries, joint ventures, and employees) harmless from any and against any claims, causes of action, demands, recoveries, losses, damages, fines, penalties, or other costs or expenses of any kind, including reasonable attorneys\' fees, arising out of or related to your breach of this ToU, your violation of any law or the rights of a third party, or your use of the Site.',
  },
  {
    number: '11',
    id: 'section-11',
    title: 'Electronic Communication',
    content: 'When you use the Site or send emails to Nexus Digital, you are communicating with Nexus Digital electronically. You consent to receive communications from Nexus Digital electronically. Nexus Digital may communicate with you by email, by posting notices on the Site, or by phone. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.',
  },
  {
    number: '12',
    id: 'section-12',
    title: 'Links',
    content: 'The Site or third parties may provide links to other World Wide Web sites or resources. Because Nexus Digital has no control over such sites and resources, you acknowledge and agree that Nexus Digital is not responsible for the availability of such external sites or resources, and does not endorse and is not responsible or liable for any content, advertising, products, or other materials on or available from such sites or resources.',
  },
  {
    number: '13',
    id: 'section-13',
    title: 'Local Laws',
    content: 'Nexus Digital controls and operates this Website from its headquarters in Mumbai, India and makes no representation that the materials on the website are appropriate or available for use in other locations. All marketing or promotional materials found on this Website are solely directed to individuals, companies, or other entities located in India and comply with the laws prevailing in India. Disputes, if any, shall be subject to the exclusive jurisdiction of Courts at Mumbai.',
  },
  {
    number: '14',
    id: 'section-14',
    title: 'Modification',
    content: 'Nexus Digital reserves the right to make changes to the Site, related policies and agreements, this ToU, and the Privacy Policy at any time. If Nexus Digital makes a material modification to this ToU, it may notify you by displaying a prominent announcement above the text of this ToU for thirty (30) days, being deemed sufficient notification of such changes.',
    footer: 'Should you wish to terminate your account due to a modification, you may do so by sending an email with the subject line "Termination" to: info@nexusdig.in. If you choose to continue using the Site, you agree that by doing so you will be deemed to accept the new ToU or Privacy Policy, as relevant.',
  },
  {
    number: '15',
    id: 'section-15',
    title: 'General',
    content: 'This ToU and the relationship between you and Nexus Digital will be governed by the laws of India without regard to its conflict of law provisions. You and Nexus Digital agree to submit to the personal jurisdiction of the courts located in Mumbai with respect to any legal proceedings that may arise in connection with this ToU. This ToU constitutes the entire agreement between you and Nexus Digital and governs your use of the Site, superseding any prior agreements.',
  },
];

const tocSections: TocSection[] = [
  ...sections.map((sec) => ({
    id: sec.id,
    number: `§${sec.number}`,
    title: sec.title,
  })),
  {
    id: 'section-16',
    number: '§16',
    title: 'Contact Information',
  },
];

export default function NexwarrentyTermsPage() {
  return (
    <LegalDocumentLayout
      eyebrow="NX–WRT–LEGAL"
      title="Terms & Conditions for Nexwarrenty"
      lede="Please read these Terms of Use carefully before using nexusdig.in. By accessing or using any part of this Site, you agree to be bound by these Terms of Use and our linked Privacy Policy."
      badgeCode="Nexwarrenty — Nexus Digital Services Pvt. Ltd."
      effectiveDate="Governing Jurisdiction: Mumbai, India"
      backHref="/nexwarrenty"
      backLabel="← Back to Nexwarrenty"
      sections={tocSections}
    >
      <div className="space-y-10">
        {sections.map((sec) => (
          <section
            key={sec.number}
            id={sec.id}
            className="scroll-mt-32 rounded-2xl border border-line bg-white/70 p-6 md:p-8 backdrop-blur-md shadow-glass transition-all hover:bg-white/85"
          >
            <div className="flex items-baseline gap-3 mb-4 border-b border-line pb-3">
              <span className="font-mono text-xs font-semibold tracking-wider text-primary-electric uppercase">
                §{sec.number}
              </span>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-navy">
                {sec.title}
              </h2>
            </div>

            {sec.content && (
              <p className="text-[0.95rem] leading-relaxed text-slate-700">
                {sec.content}
              </p>
            )}

            {sec.items && (
              <ul className="mt-4 space-y-2.5">
                {sec.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[0.92rem] text-slate-600">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary-electric/10 text-[10px] font-bold text-primary-electric">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {sec.footer && (
              <div className="mt-5 rounded-xl border border-primary-electric/15 bg-primary-electric/5 p-4 text-[0.9rem] leading-relaxed text-slate-700">
                {sec.footer}
              </div>
            )}
          </section>
        ))}

        {/* ── §16 Contact Information ── */}
        <section
          id="section-16"
          className="scroll-mt-32 rounded-2xl border border-primary-electric/25 bg-gradient-to-br from-white/90 via-primary-electric/5 to-white/70 p-6 md:p-8 backdrop-blur-md shadow-glass"
        >
          <div className="flex items-baseline gap-3 mb-4 border-b border-line pb-3">
            <span className="font-mono text-xs font-semibold tracking-wider text-primary-electric uppercase">
              §16
            </span>
            <h2 className="font-serif text-xl md:text-2xl font-bold text-navy">
              Contact Information
            </h2>
          </div>

          <p className="text-[0.95rem] leading-relaxed text-slate-700 mb-6">
            If you have questions, concerns, or notices regarding these Terms of Use, please reach our legal and support team:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl border border-line bg-white/60">
              <Eyebrow>Company</Eyebrow>
              <p className="mt-1 font-semibold text-navy">Nexus Digital Services Pvt. Ltd.</p>
              <p className="text-xs text-slate-500 mt-0.5">Mumbai, Maharashtra, India</p>
            </div>
            <div className="p-4 rounded-xl border border-line bg-white/60">
              <Eyebrow>Official Email</Eyebrow>
              <a
                href="mailto:info@nexusdig.in"
                className="mt-1 inline-block font-semibold text-primary-electric hover:underline"
              >
                info@nexusdig.in
              </a>
              <p className="text-xs text-slate-500 mt-0.5">Subject line: Terms of Use Inquiry</p>
            </div>
          </div>
        </section>
      </div>
    </LegalDocumentLayout>
  );
}
