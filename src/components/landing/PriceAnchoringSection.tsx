
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';

export default function PriceAnchoringSection() {
  const ctaImage = PlaceHolderImages.find(p => p.id === 'cta-guide-mockup');

  return (
    <section id="cta" className="py-20 sm:py-24">
      <div className="container grid gap-12 md:grid-cols-2 md:items-center">
        <div className="text-center md:text-left">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Your Investment in a Happier Period
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            For less than a single coffee date, you can get a lifetime of comfort. Let’s compare the usual monthly costs:
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 text-lg sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col gap-2 p-4 rounded-lg bg-background">
              <span className="text-muted-foreground">Painkillers & Visits</span>
              <span className="font-bold text-2xl">Rs.900-2300+/mo</span>
              <span className="text-sm text-muted-foreground">Temporary relief, potential side-effects.</span>
            </div>
            <div className="flex flex-col gap-2 rounded-lg border-2 border-primary p-4 bg-secondary">
              <span className="text-foreground">The Complete Comfort Guide</span>
              <div>
                <span className="font-bold text-3xl text-primary">Rs.199</span>
                <span className="line-through text-muted-foreground ml-2">Rs.499</span>
              </div>
              <span className="text-sm text-foreground">One-time purchase for lifetime relief.</span>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center gap-4 md:items-start">
            <Button size="lg" className="font-bold text-lg px-8 py-6" asChild>
              <a href="https://superprofile.bio/vp/fix-your-period-pain-in-3-days-natural-remedies--yoga---heat-therapy-" target="_blank" rel="noopener noreferrer">Get The Guide & All Bonuses — Just Rs.199!</a>
            </Button>
             <p className="text-sm text-muted-foreground">
              Instant PDF + printable tools | Private & discreet
            </p>
          </div>
        </div>
        {ctaImage && (
           <a href="https://superprofile.bio/vp/fix-your-period-pain-in-3-days-natural-remedies--yoga---heat-therapy-" target="_blank" rel="noopener noreferrer" className="relative order-first h-80 w-full md:order-last md:h-[500px]">
            <Image
              src={ctaImage.imageUrl}
              alt={ctaImage.description}
              data-ai-hint={ctaImage.imageHint}
              fill
              className="rounded-lg object-cover shadow-lg"
            />
          </a>
        )}
      </div>
    </section>
  );
}
