import { Button } from '@/components/ui/button';

export default function PriceAnchoringSection() {
  return (
    <section id="cta" className="py-20 sm:py-24">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          An Investment in Your Comfort
        </h2>
        <div className="mt-8 max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-lg">
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
        <div className="mt-12 flex flex-col items-center gap-4">
          <Button size="lg" className="font-bold text-lg px-8 py-6">
            Download the Comfort Guide – Rs. 199
          </Button>
        </div>
      </div>
    </section>
  );
}
