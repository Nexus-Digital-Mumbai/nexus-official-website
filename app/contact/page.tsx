import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '../../components/PageHeader';
import PhotoBand from '../../components/PhotoBand';
import Container from '../../components/Container';
import Reveal from '../../components/motion/Reveal';
import TiltCard from '../../components/motion/TiltCard';
import SpotlightCard from '../../components/reactbits/SpotlightCard';

export const metadata: Metadata = {
  title: 'Contact Us — Nexus Digital Support',
  description:
    'Software projects, NexLock and NexWarranty enquiries, or technical support — talk to the Nexus team in Andheri East, Mumbai.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Nexus Digital Services',
    description:
      'Software projects, NexLock and NexWarranty enquiries, or technical support — talk to the Nexus team in Andheri East, Mumbai.',
    url: 'https://nexusdig.in/contact',
  },
};

export default function Contact() {
  return (
    <>
      <PageHeader
        compact={true}
        breadcrumbs={[{ label: 'Contact' }]}
        eyebrow="GET IN TOUCH"
        code="DESK"
        title="Contact"
        accentText="Us"
        lede="Software projects, NexLock and NexWarranty enquiries, or support — talk to the Nexus team."
      />

      <PhotoBand
        backgroundImage="https://images.unsplash.com/photo-1603114595741-e60bf9486e04?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        stamp="NX · SUPPORT"
        eyebrow="TALK TO A HUMAN"
        heading="Real people, close by in Andheri East."
      />

      <section className="py-24 sm:py-32 bg-canvas relative">
        <Container size="wide">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            {/* Left: Office Details Glass Card */}
            <Reveal effect="fade-up">
              <TiltCard maxTilt={5} scale={1.01} className="h-full">
                <SpotlightCard
                  spotlightColor="rgba(37, 99, 235, 0.12)"
                  className="rounded-3xl glass-card bg-white/85 p-8 sm:p-12 border border-white/95 shadow-glass-lg text-left h-full flex flex-col justify-between"
                >
                  <div>
                    <h3 className="mb-8 font-serif text-2xl sm:text-3xl font-bold text-text-navy pb-4 border-b border-navy/10">
                      Office Details
                    </h3>

                    {/* Address */}
                    <div className="mb-7 flex items-start gap-4">
                      <span className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-xl shrink-0">
                        📍
                      </span>
                      <div>
                        <p className="font-mono text-xs tracking-wider text-primary-electric uppercase font-bold mb-1">
                          Headquarters
                        </p>
                        <p className="text-base sm:text-lg text-text-body font-medium leading-snug">
                          A-301, Sagar Tech Plaza, Sakinaka Junction,
                          <br />
                          Andheri East, Mumbai, Maharashtra 400072
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="mb-7 flex items-start gap-4">
                      <span className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl shrink-0">
                        ✉️
                      </span>
                      <div>
                        <p className="font-mono text-xs tracking-wider text-primary-electric uppercase font-bold mb-1">
                          Email Enquiries
                        </p>
                        <a
                          href="mailto:info@nexusdig.in"
                          className="text-base sm:text-lg font-semibold text-text-navy hover:text-primary-electric transition-colors"
                        >
                          info@nexusdig.in
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="mb-7 flex items-start gap-4">
                      <span className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-xl shrink-0">
                        📞
                      </span>
                      <div>
                        <p className="font-mono text-xs tracking-wider text-primary-electric uppercase font-bold mb-1">
                          Direct Line
                        </p>
                        <a
                          href="tel:+919820123456"
                          className="text-base sm:text-lg font-semibold text-text-navy hover:text-primary-electric transition-colors"
                        >
                          +91 98201 23456
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <span className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-xl shrink-0">
                        ⏰
                      </span>
                      <div>
                        <p className="font-mono text-xs tracking-wider text-primary-electric uppercase font-bold mb-1">
                          Working Hours
                        </p>
                        <p className="text-base text-text-body">
                          Monday &ndash; Saturday: 10:00 AM &ndash; 7:00 PM IST
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-navy/10 flex items-center justify-between text-xs text-text-muted">
                    <span>Nexus Digital Services Pvt. Ltd.</span>
                    <span>CIN &middot; Registered</span>
                  </div>
                </SpotlightCard>
              </TiltCard>
            </Reveal>

            {/* Right: Google Maps Embed in Glass Frame */}
            <Reveal effect="fade-up" delay={0.15}>
              <div className="rounded-3xl glass-card bg-white/85 p-4 sm:p-6 border border-white/95 shadow-glass-lg overflow-hidden h-full">
                <div className="relative w-full h-[450px] sm:h-[550px] rounded-2xl overflow-hidden border border-navy/10 bg-canvas-alt">
                  <iframe
                    title="Nexus Headquarters Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0124844787964!2d72.88722241538466!3d19.09647248707767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8702b800001%3A0x63e6fa11f42aa8f4!2sSagar%20Tech%20Plaza!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale-[20%] contrast-[1.05]"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
