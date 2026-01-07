
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const features = [
  'The Core 3-Part Comfort Routine: A step-by-step walkthrough of the Heat, Nutrition, and Movement system.',
  'Emergency SOS Plan: A 1-page printable for when the pain is severe and you need relief, fast.',
  'Symptom-Specific Recipes: Quick tea and snack recipes to specifically target cramps, bloating, or fatigue.',
  'Beautifully Illustrated Yoga Poses: Gentle, beginner-friendly stretches designed for period comfort.',
  'Printable Pain & Trigger Tracker: A simple tool to help you identify what makes your symptoms better or worse.',
];

export default function WhatYouGetSection() {
  const yogaImage = PlaceHolderImages.find(p => p.id === 'cta-guide-mockup');

  return (
    <section id="what-you-get" className="bg-secondary py-20 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What's Inside The Guide?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            This 25-page, beautifully designed PDF is your complete playbook for a more comfortable period. Here’s exactly what you get:
          </p>
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:max-w-5xl mx-auto items-start">
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>The Complete Toolkit</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-base text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          {yogaImage && (
            <a href="https://superprofile.bio/vp/fix-your-period-pain-in-3-days-natural-remedies--yoga---heat-therapy-" target="_blank" rel="noopener noreferrer" className="relative h-96 w-full rounded-lg overflow-hidden">
               <Image
                  src={yogaImage.imageUrl}
                  alt={yogaImage.description}
                  data-ai-hint={yogaImage.imageHint}
                  fill
                  className="rounded-lg object-cover shadow-lg"
                />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
