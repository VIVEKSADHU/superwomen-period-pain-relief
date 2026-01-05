import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import ProblemAwarenessSection from '@/components/landing/ProblemAwarenessSection';
import SolutionSection from '@/components/landing/SolutionSection';
import WhatYouGetSection from '@/components/landing/WhatYouGetSection';
import FreeBonusSection from '@/components/landing/FreeBonusSection';
import PriceAnchoringSection from '@/components/landing/PriceAnchoringSection';
import SocialProofSection from '@/components/landing/SocialProofSection';
import SafetyTrustSection from '@/components/landing/SafetyTrustSection';
import FinalCTASection from '@/components/landing/FinalCTASection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemAwarenessSection />
        <SolutionSection />
        <WhatYouGetSection />
        <FreeBonusSection />
        <PriceAnchoringSection />
        <SocialProofSection />
        <SafetyTrustSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
