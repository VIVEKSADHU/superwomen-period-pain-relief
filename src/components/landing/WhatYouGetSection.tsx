import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const features = [
  'The Complete Menstrual Comfort Guide (25-page PDF): A comprehensive, easy-to-read guide covering natural, effective methods to manage period discomfort.',
  'Emergency Cramp Relief Routine (1-page printable): A quick, go-to checklist for the moments you need immediate relief from severe cramps.',
  'Symptom-Specific Tea Recipes (for cramps, bloating, fatigue): Simple, delicious tea recipes using common kitchen ingredients, tailored to fight your specific symptoms.',
  'Printable Period Pain Trigger Tracker: A tool to help you identify personal patterns and triggers for your menstrual pain, empowering you to take control.',
  '‘When Cramps Are NOT Normal’ Doctor-Visit Checklist: A guide to help you understand when your symptoms may require medical attention and how to talk to your doctor.',
];

export default function WhatYouGetSection() {
  const yogaImage = PlaceHolderImages.find(p => p.id === 'yoga-illustrations');

  return (
    <section id="what-you-get" className="bg-secondary">
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What You Get
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Everything you need to build a comfort routine that works for you.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:max-w-4xl mx-auto">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>The Core Toolkit</CardTitle>
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
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Beginner-Friendly Yoga Poses</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-center items-center">
              {yogaImage && (
                <Image
                  src={yogaImage.imageUrl}
                  alt={yogaImage.description}
                  data-ai-hint={yogaImage.imageHint}
                  width={250}
                  height={250}
                  className="rounded-lg shadow-md"
                />
              )}
              <p className="mt-4 text-base text-muted-foreground text-center">
                Beautifully illustrated poses, perfect for all levels.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
