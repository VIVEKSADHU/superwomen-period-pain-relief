import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function PriceAnchoringSection() {
  const ctaImage = PlaceHolderImages.find(p => p.id === 'cta-guide-mockup');

  return (
    <section id="cta" className="py-24 sm:py-32">
      <div className="container grid gap-12 md:grid-cols-2 md:items-center">
        <div className="text-center md:text-left">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            An Investment in Your Comfort
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 text-lg sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
            <div className="flex flex-col gap-2">
              <span className="text-muted-foreground">One painkiller strip</span>
              <span className="font-bold text-2xl">Rs. 100+</span>
              <span className="text-sm text-muted-foreground">every month</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-muted-foreground">One doctor visit</span>
              <span className="font-bold text-2xl">Rs. 500-Rs. 1500</span>
              <span className="text-sm text-muted-foreground">per consultation</span>
            </div>
            <div className="flex flex-col gap-2 rounded-lg border-2 border-primary p-4 bg-secondary">
              <span className="text-foreground">This complete comfort toolkit</span>
              <span className="font-bold text-3xl text-primary">Rs. 199</span>
              <span className="text-sm text-foreground">one-time</span>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center gap-4 md:items-start">
            <Button size="lg" className="font-bold text-lg px-8 py-6">
              Download the Comfort Guide – Rs. 199
            </Button>
          </div>
        </div>
        {ctaImage && (
          <div className="relative order-first h-80 w-full md:order-last">
            <Image
              src={ctaImage.imageUrl}
              alt={ctaImage.description}
              data-ai-hint={ctaImage.imageHint}
              fill
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}
