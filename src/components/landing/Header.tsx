import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <a href="#" className="font-headline text-xl font-bold text-primary">
          superwomen
        </a>
        <Button asChild>
          <a href="#cta">Get the Guide</a>
        </Button>
      </div>
    </header>
  );
}
