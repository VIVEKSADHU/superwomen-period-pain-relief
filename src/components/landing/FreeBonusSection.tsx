import { Gift } from 'lucide-react';
import GentleYogaCalendarGenerator from './GentleYogaCalendarGenerator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const bonuses = [
  'Period Pain Trigger Tracker (PDF)',
  '‘When Cramps Are NOT Normal’ Doctor-Visit Checklist',
];

export default function FreeBonusSection() {
  return (
    <section id="bonus">
      <div className="container">
        <div className="relative rounded-lg bg-accent p-8 md:p-12 lg:p-16 overflow-hidden">
          <div className="relative z-10">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
                Free Gifts (Worth More Than Rs. 499)
              </h2>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Gift className="h-6 w-6 text-primary" />
                    <CardTitle>7-Day Gentle Yoga Calendar</CardTitle>
                  </div>
                  <CardDescription>
                    Get a personalized, printable yoga plan generated just for you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <GentleYogaCalendarGenerator />
                </CardContent>
              </Card>

              <div className="space-y-8 self-center">
                {bonuses.map((bonus) => (
                  <div key={bonus} className="flex items-start">
                    <Gift className="mr-4 mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <h4 className="font-bold text-lg text-accent-foreground">{bonus}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-12 text-center text-md font-semibold text-accent-foreground/80">
              Free bonuses available only with current Rs. 199 launch price.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
