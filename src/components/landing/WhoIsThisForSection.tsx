import { GraduationCap, Briefcase, UserCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface TargetAudience {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const audience: TargetAudience[] = [
  {
    title: 'Students',
    description: 'Who need to focus on exams and deadlines, not on debilitating cramps.',
    Icon: GraduationCap,
  },
  {
    title: 'Working Professionals',
    description: 'Who want to stay productive and energized throughout the month, without faking a smile through the pain.',
    Icon: Briefcase,
  },
  {
    title: 'Anyone Seeking a Natural Path',
    description: 'Who is tired of popping pills and wants to work with their body, not against it.',
    Icon: UserCheck,
  },
];

export default function WhoIsThisForSection() {
  return (
    <section id="who-is-this-for" className="py-20 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Who Is This For?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            This guide is designed for any woman who believes her period shouldn't be a monthly punishment.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 md:max-w-4xl md:grid-cols-3">
          {audience.map(({ title, description, Icon }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                <Icon className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="mt-6 font-headline text-xl font-bold">{title}</h3>
              <p className="mt-2 text-base text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
