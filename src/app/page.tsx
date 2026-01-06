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
import WhoIsThisForSection from '@/components/landing/WhoIsThisForSection';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="bg-secondary text-center p-3">
        <Button asChild>
            <a href="https://docs.google.com/document/d/1g5EpkjWkYe1k4ndiZp67oKFfDCFLUZlGU9HFaJZAPzA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">🎉 Free resource for you</a>
        </Button>
      </div>
      <main className="flex-1">
        <HeroSection />
        <ProblemAwarenessSection />
        <SolutionSection />
        <WhatYouGetSection />
        <FreeBonusSection />
        <WhoIsThisForSection />
        <PriceAnchoringSection />
        <SocialProofSection />
        <SafetyTrustSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
