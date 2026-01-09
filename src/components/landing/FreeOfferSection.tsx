
'use client';
import { Button } from '@/components/ui/button';
import type { RefObject } from 'react';

export default function FreeOfferSection({ ctaRef }: { ctaRef: RefObject<HTMLAnchorElement> }) {
  return (
    <section id="free-offer" className="bg-secondary py-20 sm:py-24">
      <div className="container text-center">
        <div className="bg-card rounded-lg p-8 md:p-12 max-w-2xl mx-auto shadow-xl">
          <h3 className="font-headline text-2xl font-bold text-foreground">First, Try The Emergency Relief Kit.</h3>
          <p className="mt-4 mb-8 text-lg text-muted-foreground">
            Experience the relief for yourself. This 1-page guide gives you the exact steps to calm severe cramps in under 5 minutes for just Rs.199. No fluff, just fast comfort.
          </p>
          <div className="flex justify-center">
            <Button size="lg" asChild className="font-bold text-lg px-8 py-6 animate-beat">
              <a ref={ctaRef} href="https://docs.google.com/document/d/1g5EpkjWkYe1k4ndiZp67oKFfDCFLUZlGU9HFaJZAPzA/export?format=pdf" target="_blank" rel="noopener noreferrer">
                Yes! Send Me The Kit — Rs.199
              </a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Instant PDF download. No email required.</p>
        </div>
      </div>
    </section>
  );
}
