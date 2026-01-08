
import { Button } from '@/components/ui/button';

export default function FinalCTASection() {
  return (
    <section className="bg-secondary py-20 sm:py-24">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Get a Lifetime of Comfortable Periods
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Stop letting period pain dictate your life. For less than the price of one coffee, get the complete system to find natural, effective relief.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <Button size="lg" className="font-bold text-lg px-8 py-6" asChild>
            <a href="https://superprofile.bio/vp/fix-your-period-pain-in-3-days-natural-remedies--yoga---heat-therapy-" target="_blank" rel="noopener noreferrer">Get Instant Access — Just Rs.149<span className="line-through mx-2">Rs.999</span></a>
          </Button>
          <p className="text-sm text-muted-foreground">
            Instant PDF + all bonuses | Private & discreet | One-time purchase
          </p>
        </div>
      </div>
    </section>
  );
}
