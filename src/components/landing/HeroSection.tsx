
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-comfort');

  return (
    <section id="hero" className="relative flex items-center pt-12 pb-20 md:pt-24 md:pb-32 lg:min-h-[calc(80vh-56px)]">
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
        <div className="text-center lg:text-left z-10">
            <Badge variant="outline" className="mb-4 text-base py-1 px-4 border-primary text-primary animate-beat">
                ✨ 50% OFF! Use Code: NEW50 ✨
            </Badge>
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Your Period Shouldn't Control Your Life.
          </h1>
          <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg sm:text-xl text-muted-foreground">
            Finally, a simple, doctor-aware comfort guide for busy women to manage menstrual pain naturally — without letting it disrupt your work, or life.
          </p>
          <div className="mt-10 flex flex-col items-center lg:items-start gap-4">
            <Button size="lg" className="font-bold text-lg px-8 py-6" asChild>
              <a href="https://superprofile.bio/vp/fix-your-period-pain-in-3-days-natural-remedies--yoga---heat-therapy-" target="_blank" rel="noopener noreferrer">Get Instant Access — Just <span className="line-through mx-2">Rs.999</span> Rs.399!</a>
            </Button>
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
