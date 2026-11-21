import React from 'react';
import type { Metadata } from 'next';
import DevMarketingModal from '../components/DevMarketingModal';
import PartnerTicker from '../components/PartnerTicker';
import HomeHero from '../components/home/HomeHero';
import PillarsOverview from '../components/home/PillarsOverview';
import PillarBands from '../components/home/PillarBands';
import TeamExpertiseStrip from '../components/home/TeamExpertiseStrip';
import HomeRoutingCTA from '../components/home/HomeRoutingCTA';

export const metadata: Metadata = {
  title: 'Nexus — IT Solutions, NexLock & NexWarranty',
  description:
    "Nexus is a technology company. Nexus IT Solutions builds and maintains software for businesses; NexLock and NexWarranty are Nexus's own products.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nexus — IT Solutions, NexLock & NexWarranty',
    description:
      "Nexus is a technology company. Nexus IT Solutions builds and maintains software for businesses; NexLock and NexWarranty are Nexus's own products.",
    url: 'https://nexusdig.in',
  },
};

export default function Home() {
  return (
    <>
      {/* DevMarketing Announcement Modal */}
      <DevMarketingModal />

      {/* Slim Glass Partner Ticker */}
      <PartnerTicker />

      {/* 3D Glass Hero Section */}
      <HomeHero />

      {/* 1. "One company. Three pillars." 3 Glass Cards with 3D Art */}
      <PillarsOverview />

      {/* 2. Three Alternating Pillar Bands (NX-ITS, NX-LCK, NX-WRT) with Restyled Visuals */}
      <PillarBands />

      {/* 3. Team & Expertise Synergy Strip */}
      <TeamExpertiseStrip />

      {/* 4. Dark Navy Routing CTA Band */}
      <HomeRoutingCTA />
    </>
  );
}
