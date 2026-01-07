import { AlertCircle } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const problems = [
  'Missing important classes or work meetings because the pain is unbearable.',
  'Relying on painkillers that you know aren’t a long-term solution.',
  'Feeling bloated, irritable, and completely drained of energy for days.',
  'Googling remedies for hours, only to find confusing or impractical advice.',
  'Fearing that your pain isn’t “normal” but feeling too awkward to talk about it.',
];

export default function ProblemAwarenessSection() {
  const problemImage = PlaceHolderImages.find(p => p.id === 'woman-in-pain');
  return (
    <section id="problem" className="bg-secondary py-20 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Problem: Why is This So Unnecessarily Hard?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            If you dread that time of the month, you’re not just “being dramatic.” You’re one of millions of Indian women silently battling a problem that’s largely ignored.
          </p>
        </div>
        <div className="mt-16 grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          {problemImage && (
            <div className="relative h-80 w-full md:h-full rounded-lg overflow-hidden order-last md:order-first">
              <Image
                src={problemImage.imageUrl}
                alt={problemImage.description}
                data-ai-hint={problemImage.imageHint}
                fill
                className="object-cover shadow-md"
              />
            </div>
          )}
          <div className="mx-auto max-w-xl">
             <h3 className="font-bold text-xl text-foreground mb-6">Does this sound familiar?</h3>
            <ul className="space-y-4">
              {problems.map((problem, i) => (
                <li key={i} className="flex items-start">
                  <AlertCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-lg text-muted-foreground">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
