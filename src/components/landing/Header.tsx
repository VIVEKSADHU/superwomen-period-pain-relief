import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <a href="#" className="font-headline text-xl font-bold text-primary mr-auto">
          superwomen.in
        </a>
        <div className="flex items-center gap-x-4">
          <Button asChild>
            <a href="https://superprofile.bio/vp/fix-your-period-pain-in-3-days-natural-remedies--yoga---heat-therapy-" target="_blank" rel="noopener noreferrer">Get the Guide</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
