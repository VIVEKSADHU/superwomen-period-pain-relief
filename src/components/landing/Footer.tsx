
import type { RefObject } from 'react';

export default function Footer() {
  return (
    <footer id="footer" className="py-16 bg-background">
      <div className="container text-center text-muted-foreground">
        <div className="pb-16">
            <p className="font-bold text-foreground mb-4">P.S. A Personal Note</p>
            <p className="max-w-3xl mx-auto text-base mb-8">
            I created this guide because I was tired of hearing friends and family say, “just take a painkiller.” I believe we deserve better than just masking the pain. We deserve to understand our bodies and have simple, natural ways to feel better. This guide is everything I wish I had in college and my early career. I hope it brings you as much comfort as it has brought me.
            </p>
        </div>
        <p className="mt-12 text-sm">
          © {new Date().getFullYear()} Period Peace. All rights reserved.
        </p>
        <p className="text-xs mt-2 max-w-2xl mx-auto">
          Natural comfort support • Not a replacement for medical care
        </p>
      </div>
    </footer>
  );
}
