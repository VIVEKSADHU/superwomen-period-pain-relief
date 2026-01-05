import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "I finally stopped panicking before my periods. This guide felt like a friend holding my hand.",
  },
  {
    quote: "The tea + heat routine helped in my first cycle itself. So simple, but so effective.",
  },
  {
    quote: "Loved that it’s simple and not preachy. I could actually stick with it.",
  },
];

export default function SocialProofSection() {
  return (
    <section id="social-proof" className="bg-secondary py-20 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Relief, Redefined by Women Like You
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <blockquote className="text-lg text-foreground">
                  <p>“{testimonial.quote}”</p>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
