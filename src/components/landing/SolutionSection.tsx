import { Flame, PersonStanding, GlassWater } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Pillar {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const pillars: Pillar[] = [
  {
    title: 'Heat Therapy',
    description: 'Learn what to use, when, and for how long to effectively soothe cramps.',
    Icon: Flame,
  },
  {
    title: 'Herbal Teas',
    description: 'Get exact recipes for comforting teas and know which ones to avoid during your cycle.',
    Icon: GlassWater,
  },
  {
    title: 'Gentle Yoga',
    description: 'Discover simple, 10-minute yoga flows you can do even on your bed for relief.',
    Icon: PersonStanding,
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            One Simple Comfort System for Your Entire Cycle
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 md:max-w-4xl md:grid-cols-3">
          {pillars.map(({ title, description, Icon }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                <Icon className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="mt-6 font-headline text-xl font-bold">{title}</h3>
              <p className="mt-2 text-base text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
        <p className="mt-16 text-center text-lg italic text-foreground max-w-3xl mx-auto">
          Not a “cure”. Not magic. Just proven comfort routines that actually fit real life.
        </p>
      </div>
    </section>
  );
}
