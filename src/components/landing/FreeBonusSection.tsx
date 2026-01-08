
import { Gift } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import StaticYogaPlan from './StaticYogaPlan';

const bonuses = [
  {
    title: 'Printable Period Positivity Journal',
    description: 'Track your symptoms, mood, and energy levels to find patterns and celebrate your body’s cycle. (Value: Rs.499)',
  },
  {
    title: 'The ‘When Cramps Are NOT Normal’ Checklist',
    description: 'Know the critical signs that mean it’s time to see a doctor. This checklist helps you prepare for your visit and ask the right questions. (Value: Rs.299)',
  },
];

export default function FreeBonusSection() {
  return (
    <section id="bonus" className="py-20 sm:py-24">
      <div className="container">
        <div className="relative rounded-lg bg-accent p-8 md:p-12 lg:p-16 overflow-hidden">
          <div className="relative z-10">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
                Plus, Get These FREE Bonuses (Worth Rs.999)
              </h2>
              <p className="mt-4 text-lg text-accent-foreground/80">
                To make your journey even easier, I’m including these essential tools for free when you buy today.
              </p>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Gift className="h-6 w-6 text-primary" />
                    <CardTitle>7-Day Gentle Yoga Plan</CardTitle>
                  </div>
                  <CardDescription>
                    Your personal, printable yoga schedule to specifically target your symptoms. (Value: Rs.199)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <StaticYogaPlan />
                </CardContent>
              </Card>

              <div className="space-y-8 self-center">
                {bonuses.map((bonus) => (
                  <div key={bonus.title} className="flex items-start">
                    <Gift className="mr-4 mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <h4 className="font-bold text-lg text-accent-foreground">{bonus.title}</h4>
                      <p className="mt-1 text-accent-foreground/90">{bonus.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-12 text-center text-md font-semibold text-accent-foreground/80">
              Get the guide and all bonuses today for a single, one-time payment of Rs.149.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
