import { CheckCircle, ShieldCheck, ThumbsUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SafetyPoint {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const safetyPoints: SafetyPoint[] = [
  {
    title: '100% Natural & Safe',
    description: 'Every technique is based on gentle, holistic principles. No pills, no side-effects, just your body’s natural ability to heal.',
    Icon: ShieldCheck,
  },
  {
    title: 'Doctor-Aware & Responsible',
    description: 'This guide complements medical advice, it doesn’t replace it. We’ve included a checklist to help you know when it’s time to see a professional.',
    Icon: ThumbsUp,
  },
  {
    title: '30-Day Money-Back Guarantee',
    description: 'Try the guide for a full cycle. If you don’t feel a noticeable difference in your comfort, email me for a full, no-questions-asked refund.',
    Icon: CheckCircle,
  },
];

export default function SafetyTrustSection() {
  return (
    <section id="safety" className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Your Comfort is Guaranteed
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I’m confident this guide will help you. But if it doesn’t, you don’t pay.
          </p>
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
