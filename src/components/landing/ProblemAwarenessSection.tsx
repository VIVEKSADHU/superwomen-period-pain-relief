import { CheckCircle2 } from 'lucide-react';

const problems = [
  'Severe cramps that ruin classes or workdays',
  'Heating pad helps… but not enough',
  'Teas? Yoga? Internet advice? Confusing and inconsistent',
  'You don’t want pills every month',
];

export default function ProblemAwarenessSection() {
  return (
    <section id="problem" className="bg-secondary py-20 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            If This Sounds Like You, You’re Not Alone
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-xl">
          <ul className="space-y-4">
            {problems.map((problem, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-lg text-muted-foreground">{problem}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-12 text-center text-lg italic text-foreground max-w-3xl mx-auto">
          Millions of women feel this every month — yet no one teaches us a simple routine.
        </p>
      </div>
    </section>
  );
}
