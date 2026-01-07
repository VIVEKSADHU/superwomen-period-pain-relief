
'use client';

import { useRef, useEffect, useState } from 'react';
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
import CelebrationEffect from '@/components/landing/CelebrationEffect';

export default function Home() {
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    // Trigger the animation shortly after the component mounts
    const timer = setTimeout(() => {
      setShowCelebration(true);
    }, 100); // Small delay to ensure button is rendered

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {showCelebration && ctaRef.current && (
          <CelebrationEffect originRef={ctaRef} />
      )}
       <div className="bg-primary text-center p-3 text-primary-foreground font-bold animate-beat">
          🎉 Special Launch Offer! Get 50% OFF with code: <span className="underline">NEW50</span> 🎉
      </div>
      <div className="bg-background text-center p-3">
        <Button size="lg" asChild className="text-lg px-8 py-6">
            <a ref={ctaRef} href="https://docs.google.com/document/d/1g5EpkjWkYe1k4ndiZp67oKFfDCFLUZlGU9HFaJZAPzA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Click here for Free Period Cramp Relief Tips</a>
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
