import { Flame, CookingPot, Footprints } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Pillar {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const pillars: Pillar[] = [
  {
    title: 'Targeted Heat Therapy',
    description: 'The right way to use a simple hot water bag to relax uterine muscles and dramatically reduce cramps in minutes.',
    Icon: Flame,
  },
  {
    title: 'Kitchen-First Nutrition',
    description: 'Simple, 3-ingredient tea recipes using everyday items like ginger and ajwain to fight bloating and calm your system.',
    Icon: CookingPot,
  },
  {
    title: '5-Minute Gentle Movement',
    description: 'Easy, no-sweat stretches you can do on your bed to release tension in your lower back and abdomen.',
    Icon: Footprints,
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            A Simple, 3-Part Comfort System
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            This isn’t about complicated diets or impossible workout routines. It’s a simple, repeatable system designed for real, busy lives. Each part takes just 5-10 minutes.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 md:max-w-none md:grid-cols-3 md:gap-12">
          {pillars.map(({ title, description, Icon }) => (
            <div key={title} className="flex flex-col items-center text-center p-4 rounded-lg transition-all">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 font-headline text-xl font-bold">{title}</h3>
              <p className="mt-2 text-base text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
