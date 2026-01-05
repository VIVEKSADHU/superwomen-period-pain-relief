import { Heart, Shield, FileText } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SafetyPoint {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const safetyPoints: SafetyPoint[] = [
  {
    title: 'Natural Methods Only',
    description: 'We focus on gentle, non-medicinal routines like heat, teas, and movement.',
    Icon: Heart,
  },
  {
    title: 'Beginner-Friendly',
    description: 'No complicated yoga or hard-to-find ingredients. Everything is simple and accessible.',
    Icon: Shield,
  },
  {
    title: 'Doctor-Aware',
    description: 'This is not a replacement for medical advice and we guide you on when to see a doctor.',
    Icon: FileText,
  },
];

export default function SafetyTrustSection() {
  return (
    <section id="safety" className="py-20 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Your Safety and Trust Come First
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
          {safetyPoints.map((point) => (
            <div key={point.title} className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <point.Icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium leading-6 text-foreground">{point.title}</h3>
                <p className="mt-2 text-base text-muted-foreground">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
