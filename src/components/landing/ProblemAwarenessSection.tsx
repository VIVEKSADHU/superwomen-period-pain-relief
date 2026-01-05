import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const problems = [
  'Severe cramps that ruin classes or workdays',
  'Heating pad helps… but not enough',
  'Teas? Yoga? Internet advice? Confusing and inconsistent',
  'You don’t want pills every month',
];

export default function ProblemAwarenessSection() {
  const problemImage = PlaceHolderImages.find(p => p.id === 'woman-in-pain');
  return (
    <section id="problem" className="bg-secondary py-20 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            If This Sounds Like You, You’re Not Alone
          </h2>
        </div>
        <div className="mt-12 grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          {problemImage && (
            <div className="relative h-64 w-full md:h-full">
              <Image
                src={problemImage.imageUrl}
                alt={problemImage.description}
                data-ai-hint={problemImage.imageHint}
                fill
                className="rounded-lg object-cover shadow-md"
              />
            </div>
          )}
          <div className="mx-auto max-w-xl">
            <ul className="space-y-4">
              {problems.map((problem, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-lg text-muted-foreground">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 text-center text-lg italic text-foreground max-w-3xl mx-auto">
          Millions of women feel this every month — yet no one teaches us a simple routine.
        </p>
      </div>
    </section>
  );
}