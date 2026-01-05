import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section id="hero" className="py-20 sm:py-24 md:py-32">
      <div className="container text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Your Period Shouldn’t Put Your Life on Pause.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
          A simple, natural, doctor-aware comfort guide to reduce cramps, bloating, and fatigue — without pills.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-center text-sm text-muted-foreground">
          <span>Works for college students & working women</span>
          <span className="hidden sm:inline-block">•</span>
          <span>No medicines. No awkward talk. No guesswork.</span>
        </div>
        <div className="mt-10 flex flex-col items-center gap-4">
          <Button size="lg" className="font-bold text-lg px-8 py-6" asChild>
            <a href="#cta">Get Instant Access – Just ₹199</a>
          </Button>
          <p className="text-sm text-muted-foreground">
            Instant PDF + printable tools | Private & discreet
          </p>
        </div>
      </div>
    </section>
  );
}
