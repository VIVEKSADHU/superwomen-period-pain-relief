
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <a href="#" className="font-headline text-xl font-bold text-primary mr-auto">
          superwomen.in
        </a>
        <div className="flex items-center gap-x-2 sm:gap-x-4">
            <Link href="#footer" className="text-xs sm:text-sm text-muted-foreground font-medium hover:text-primary transition-colors text-right">
              Psst! Free resources at the bottom 👇
            </Link>
          <Button asChild>
            <a href="https://superprofile.bio/vp/fix-your-period-pain-in-3-days-natural-remedies--yoga---heat-therapy-" target="_blank" rel="noopener noreferrer">Get the Guide</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
