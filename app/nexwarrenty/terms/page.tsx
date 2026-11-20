'use client';

import HeroSection from '../../../components/HeroSection';
import Container from '../../../components/Container';
import Eyebrow from '../../../components/Eyebrow';
import useScrollReveal from '../../../hooks/useScrollReveal';

const sections = [
  {
    number: '01',
    title: 'Definitions',
    content: 'Welcome to nexusdig.in (the "Site") operated by Nexus Digital Services Pvt. Ltd. ("Nexus Digital"). Nexus Digital provides its services subject to the following conditions. Before using the Site, you must read and accept all terms and conditions in this Terms of Use ("ToU") and the linked Privacy Policy. This ToU is effective upon acceptance. Use of any functionality of the Site constitutes acceptance. If this ToU conflicts with any other documents, the ToU will control for the purposes of usage of the Site.',
  },
  {
    number: '02',
    title: 'Description of Services',
    content: 'Nexus Digital provides users with access to information primarily about Business Support Services for Electronic goods including, but not restricted to, Warranties and related services (the "Service"). You are responsible for obtaining access to the Site, and that access may involve third-party fees (such as Internet service provider or airtime charges). You must provide and are responsible for all equipment necessary to access the Site.',
  },
  {
    number: '03',
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
    title: 'Eligibility',
    content: 'The Service is not available to minors under the age of 18 or to any users suspended or removed from the system by Nexus Digital for any reason. Users may not have more than one active account. Users are prohibited from selling, trading, or otherwise transferring their accounts to another party.',
  },
  {
    number: '05',
    title: 'Your Account',
    content: 'In consideration of your use of the Site, you represent that you are of legal age to form a binding contract and are not a person barred from receiving services under the laws of India or other applicable jurisdiction. You agree to provide true, accurate, current, and complete information about yourself as prompted by the Site.',
    footer: 'You are responsible for maintaining the confidentiality of your account and password, and for restricting access to your computer. Nexus Digital reserves the right to refuse service, terminate accounts, or remove or edit content in its sole discretion.',
  },
  {
    number: '06',
    title: 'Errors, Inaccuracies and Omissions',
    content: 'Occasionally there may be information on our site that contains typographical errors, inaccuracies, or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times, and availability. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information or cancel orders if any information is inaccurate at any time without prior notice.',
  },
  {
    number: '07',
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
    title: 'Disclaimer of Liability and Warranty',
    content: 'The content, products, and services published on this site may include inaccuracies or errors, including pricing errors. Nexus Digital does not guarantee the accuracy of, and disclaims all liability for any errors or other inaccuracies relating to the information and description of products, services, or plans. Nexus Digital reserves the right to correct any pricing errors on our Site. The services are provided "AS IS" without warranties of any kind.',
  },
  {
    number: '09',
    title: 'Limitation of Liability',
    content: 'You expressly understand and agree that Nexus Digital and its subsidiaries, affiliates, officers, employees, agents, partners, and licensors shall not be liable to you for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses.',
  },
  {
    number: '10',
    title: 'Indemnity',
    content: 'You agree to indemnify and hold Nexus Digital (and its officers, directors, agents, subsidiaries, joint ventures, and employees) harmless from any claim or demand, including reasonable attorneys\' fees, made by any third party due to or arising out of your breach of this ToU, or your violation of any law or the rights of a third party.',
  },
  {
    number: '11',
    title: 'Electronic Communications',
    content: 'When you use the Site or send emails to Nexus Digital, you are communicating with Nexus Digital electronically. You consent to receive communications from Nexus Digital electronically. Nexus Digital will communicate with you by email or by posting notices on the Site. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.',
  },
  {
    number: '12',
    title: 'Links to Third-Party Sites',
    content: 'The Site may contain links to other websites ("Linked Sites"). The Linked Sites are not under the control of Nexus Digital and Nexus Digital is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site.',
  },
  {
    number: '13',
    title: 'Governing Law and Jurisdiction',
    content: 'This ToU shall be governed by and constructed in accordance with the laws of India without reference to conflict of laws principles. Any disputes arising in relation hereto shall be subject to the exclusive jurisdiction of the courts at Mumbai, Maharashtra, India.',
  },
  {
    number: '14',
    title: 'Severability',
    content: 'If any provision of this ToU is determined to be invalid or unenforceable in whole or in part, such invalidity or unenforceability shall attach only to such provision or part of such provision and the remaining part of such provision and all other provisions of this ToU shall continue to be in full force and effect.',
  },
  {
    number: '15',
    title: 'Entire Agreement',
    content: 'This ToU constitutes the entire agreement between you and Nexus Digital regarding the use of the Site and supersedes all prior communications, agreements, and understandings, whether written or oral, with respect to the subject matter hereof.',
  },
];

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="font-mono text-[0.72rem] tracking-[0.1em] text-indigo-500 uppercase">
        §{number}
      </span>
      <h2 className="text-xl font-semibold text-navy">{title}</h2>
    </div>
  );
}

export default function NexwarrentyTerms() {
  useScrollReveal();

  return (
    <>
      <HeroSection
        compact={true}
        eyebrow="NX–WRT–LEGAL"
        title={
          <>
            <span className="text-gradient-brand">Terms of Use</span>
            {' '}for NexWarranty
          </>
        }
        lede="These Terms of Use constitute a legally binding agreement between you and Nexus Digital Services Pvt. Ltd. regarding your access to and use of nexusdig.in and related warranty services."
        ctaButtons={[{ label: '← Back to NexWarranty', to: '/nexwarrenty', secondary: true }]}
        style={{ minHeight: '44vh', paddingTop: '120px', paddingBottom: '2rem' }}
      />

      <section className="py-20 bg-grid-paper">
        <Container>
          <div
            data-reveal
            className="mb-14 translate-y-6 opacity-0 transition-all duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
          >
            <div className="glass-panel inline-flex items-center gap-3 rounded-xl px-5 py-3 shadow-glass">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-navy to-indigo-600 text-sm text-white">
                📋
              </span>
              <div>
                <p className="font-mono text-xs tracking-widest text-slate-500 uppercase">
                  Nexwarrenty — Nexus Digital Services Pvt. Ltd.
                </p>
                <p className="text-sm font-semibold text-slate-800">
                  Governing jurisdiction: Mumbai, India
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-8">
            {sections.map((sec) => (
              <div
                key={sec.number}
                data-reveal
                className="glass-panel translate-y-6 rounded-2xl p-8 opacity-0 shadow-glass transition-all duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
              >
                <SectionHeader number={sec.number} title={sec.title} />

                {sec.content && (
                  <p className="text-[0.95rem] leading-relaxed text-slate-600">{sec.content}</p>
                )}

                {sec.items && (
                  <ul className="mt-3 space-y-3">
                    {sec.items.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-500 text-xs">✓</span>
                        <p className="text-[0.95rem] leading-relaxed text-slate-600">{item}</p>
                      </li>
                    ))}
                  </ul>
                )}

                {sec.footer && (
                  <p className="mt-4 rounded-xl border border-indigo-100 bg-indigo-50/60 px-5 py-3 text-[0.9rem] leading-relaxed text-slate-700">
                    {sec.footer}
                  </p>
                )}
              </div>
            ))}

            <div
              data-reveal
              className="glass-panel translate-y-6 overflow-hidden rounded-2xl opacity-0 shadow-glass-lg transition-all duration-500 ease-out data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
            >
              <div className="badge-stripe" />
              <div className="p-8">
                <SectionHeader number="16" title="Contact" />
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-12">
                  <div>
                    <Eyebrow>Company</Eyebrow>
                    <p className="mt-1 font-semibold text-slate-800">Nexus Digital Services Pvt. Ltd.</p>
                  </div>
                  <div>
                    <Eyebrow>Email</Eyebrow>
                    <a
                      href="mailto:info@nexusdig.in"
                      className="mt-1 inline-block font-semibold text-indigo-600 transition-colors hover:text-pink-600"
                    >
                      info@nexusdig.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
