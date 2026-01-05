import { Button } from '@/components/ui/button';

export default function FinalCTASection() {
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          You manage studies, work, life — your period should not control you.
        </h2>
        <div className="mt-10 flex flex-col items-center gap-4">
          <Button size="lg" className="font-bold text-lg px-8 py-6">
            Start Your Comfort Routine Today – Rs. 199
          </Button>
          <p className="text-sm text-muted-foreground">
            Instant PDF + printable tools | Private & discreet
          </p>
        </div>
      </div>
    </section>
  );
}
