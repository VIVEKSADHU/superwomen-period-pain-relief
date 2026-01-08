
'use client';

import { useRef } from 'react';
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
import FreeOfferSection from '@/components/landing/FreeOfferSection';

export default function Home() {
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const ebookCtaRef = useRef<HTMLAnchorElement>(null);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection ctaRef={ctaRef} />
        <ProblemAwarenessSection />
        <WhoIsThisForSection />
        <SolutionSection />
        <FreeOfferSection ctaRef={ctaRef} />
        <SafetyTrustSection />
        <SocialProofSection />
        {/* The Paid Offer Starts Here */}
        <WhatYouGetSection />
        <FreeBonusSection />
        <PriceAnchoringSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
