
import type { RefObject } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check } from 'lucide-react';

export default function HeroSection({ ctaRef }: { ctaRef: RefObject<HTMLAnchorElement> }) {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-comfort');

  return (
    <section id="hero" className="relative flex items-center pt-12 pb-20 md:pt-24 md:pb-32">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        {heroImage && (
          <div className="relative h-80 w-full rounded-lg overflow-hidden lg:hidden">
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              data-ai-hint={heroImage.imageHint}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        <div className="text-center z-10">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            That “Just Take a Painkiller” Feeling Stops Today.
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg sm:text-xl text-muted-foreground">
            Get instant, natural relief for severe period cramps. Download your Fix Your Period Pain in 3 Days ebook for Rs.199 — a simple, doctor-aware guide for busy women.
          </p>
          <ul className="mt-6 mx-auto max-w-xl space-y-2 text-muted-foreground text-lg">
            <li className="flex items-center justify-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Fast, natural comfort</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Eases intense cramps</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Simple at-home steps</span>
            </li>
          </ul>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Button size="lg" className="font-bold text-lg px-8 py-6 animate-beat" asChild>
              <a ref={ctaRef} href="https://superprofile.bio/vp/fix-your-period-pain-in-3-days-natural-remedies--yoga---heat-therapy-" target="_blank" rel="noopener noreferrer">
                Unlock Comfortable Periods — Just Rs.199
              </a>
            </Button>
            <p className="text-sm font-medium text-muted-foreground transition-colors">Instant PDF download • No spam • No signup hassle</p>
          </div>
        </div>
      </div>
      {heroImage && (
        <div className="hidden lg:block absolute top-0 right-0 h-full w-1/2">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
    </section>
  );
}
