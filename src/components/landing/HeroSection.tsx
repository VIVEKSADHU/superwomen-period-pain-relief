import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-comfort');

  return (
    <section id="hero" className="relative min-h-[calc(100vh-56px)] flex items-center">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left z-10 py-12">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Your Period Shouldn’t Put Your Life on Pause.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto lg:mx-0 text-lg text-muted-foreground">
            A simple, natural, doctor-aware comfort guide to reduce cramps, bloating, and fatigue — without pills.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-center lg:justify-start text-sm text-muted-foreground">
            <span>Works for college students & working women</span>
            <span className="hidden sm:inline-block">•</span>
            <span>No medicines. No awkward talk. No guesswork.</span>
          </div>
          <div className="mt-10 flex flex-col items-center lg:items-start gap-4">
            <Button size="lg" className="font-bold text-lg px-8 py-6" asChild>
              <a href="#cta">Get Instant Access – Rs. 199</a>
            </Button>
            <p className="text-sm text-muted-foreground">
              Instant PDF + printable tools | Private & discreet
            </p>
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
          />
        </div>
      )}
    </section>
  );
}