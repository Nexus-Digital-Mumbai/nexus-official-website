import DevMarketingModal from '../components/DevMarketingModal';
import PartnerTicker from '../components/PartnerTicker';
import HeroSection from '../components/HeroSection';
import ThreePillarsSection from '../components/ThreePillarsSection';
import ITSolutionsSection from '../components/ITSolutionsSection';
import NexLockSection from '../components/NexLockSection';
import NexWarrantySection from '../components/NexWarrantySection';
import ContactCTASection from '../components/ContactCTASection';
import useScrollReveal from '../hooks/useScrollReveal';
import useCountUp from '../hooks/useCountUp';
import useTiltEffect from '../hooks/useTiltEffect';

export default function Home() {
  useScrollReveal();
  useCountUp();
  useTiltEffect();

  return (
    <>
      <DevMarketingModal />

      {/* ── 1. HERO SECTION ── */}
      <HeroSection style={{ paddingTop: '7rem' }} />
      <PartnerTicker />

      {/* ── 2. THREE PILLARS SECTION ── */}
      <ThreePillarsSection />

      {/* ── 3. IT SOLUTIONS SECTION (NX-ITS) ── */}
      <ITSolutionsSection />

      {/* ── 4. NEXLOCK PRODUCT SECTION (NX-LCK) ── */}
      <NexLockSection />

      {/* ── 5. NEXWARRANTY PRODUCT SECTION (NX-WRT) ── */}
      <NexWarrantySection />

      {/* ── 6. PREMIUM CONTACT CTA SECTION ── */}
      <ContactCTASection />
    </>
  );
}
