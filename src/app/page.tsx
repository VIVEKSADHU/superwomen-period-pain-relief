
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
import Link from 'next/link';

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
      <main className="flex-1">
        <div className="bg-secondary text-center py-3">
            <Link href="#footer" className="font-bold text-secondary-foreground hover:underline">
                Not ready? Check out the free resources at the bottom 👇
            </Link>
        </div>
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
      <Footer ctaRef={ctaRef} />
    </div>
  );
}
