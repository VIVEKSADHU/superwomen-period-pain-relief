
import { Button } from '@/components/ui/button';
import type { RefObject } from 'react';

export default function Footer({ ctaRef }: { ctaRef: RefObject<HTMLAnchorElement> }) {
  return (
    <footer id="footer" className="py-16 bg-background">
      <div className="container text-center text-muted-foreground">
        <div className="pb-16">
            <p className="font-bold text-foreground mb-4">P.S. A Personal Note</p>
            <p className="max-w-3xl mx-auto text-base mb-8">
            I created this guide because I was tired of hearing friends and family say, “just take a painkiller.” I believe we deserve better than just masking the pain. We deserve to understand our bodies and have simple, natural ways to feel better. This guide is everything I wish I had in college and my early career. I hope it brings you as much comfort as it has brought me.
            </p>
        </div>

        <div className="bg-secondary rounded-lg p-8 max-w-2xl mx-auto">
          <h3 className="font-bold text-xl text-foreground">Not ready for the full guide yet?</h3>
          <p className="mt-2 mb-6 text-foreground/80">No problem at all. Start with my free, 1-page guide to immediate cramp relief. It’s my gift to you.</p>
          <Button size="lg" asChild className="text-lg px-8 py-6">
            <a ref={ctaRef} href="https://docs.google.com/document/d/1g5EpkjWkYe1k4ndiZp67oKFfDCFLUZlGU9HFaJZAPzA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Click here for Free Period Cramp Relief Tips</a>
          </Button>
        </div>

        <p className="mt-12 text-sm">
          © {new Date().getFullYear()} Period Peace. All rights reserved. | This is not medical advice.
        </p>
      </div>
    </footer>
  );
}
