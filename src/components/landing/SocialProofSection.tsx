'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    quote:
      'I finally stopped panicking before my periods. This guide felt like a friend holding my hand.',
    author: 'Ananya K.',
    location: 'Mumbai',
    avatar: '/avatars/01.png',
  },
  {
    quote: 'The tea + heat routine helped in my first cycle itself. So simple, but so effective.',
    author: 'Sneha P.',
    location: 'Delhi',
    avatar: '/avatars/02.png',
  },
  {
    quote: 'Loved that it’s simple and not preachy. I could actually stick with it.',
    author: 'Riya M.',
    location: 'Pune',
    avatar: '/avatars/03.png',
  },
  {
    quote:
      'I was skeptical, but the pain relief techniques are a game-changer. My productivity at work has improved so much during my period.',
    author: 'Priya S.',
    location: 'Bengaluru',
    avatar: '/avatars/04.png',
  },
  {
    quote:
      'As a student, dealing with period pain during exams was a nightmare. This guide is a lifesaver.',
    author: 'Aisha B.',
    location: 'Hyderabad',
    avatar: '/avatars/05.png',
  },
  {
    quote:
      "The 'When to see a doctor' checklist gave me the confidence to have an informed conversation with my gynecologist. Invaluable.",
    author: 'Fatima Z.',
    location: 'Kolkata',
    avatar: '/avatars/06.png',
  },
];

export default function SocialProofSection() {
  return (
    <section id="social-proof" className="bg-secondary">
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Relief, Redefined by Women Like You
          </h2>
        </div>
        <div className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardContent className="flex-1 p-6">
                <blockquote className="flex h-full flex-col justify-between">
                  <p className="text-foreground">“{testimonial.quote}”</p>
                  <footer className="mt-4 flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={`https://i.pravatar.cc/40?u=${testimonial.author}`}
                        alt={testimonial.author}
                      />
                      <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
