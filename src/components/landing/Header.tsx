
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-4 z-50 w-full rounded-lg border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <a href="#" className="font-headline text-xl font-bold text-primary mr-auto">
          Period Peace
        </a>
        <div className="hidden sm:flex items-center gap-x-4">
          <Button asChild>
            <a href="https://docs.google.com/document/d/1g5EpkjWkYe1k4ndiZp67oKFfDCFLUZlGU9HFaJZAPzA/export?format=pdf" target="_blank" rel="noopener noreferrer">Get Relief Kit (Rs.199)</a>
          </Button>
        </div>
        <div className="sm:hidden flex items-center">
           <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8">
                 <a href="https://docs.google.com/document/d/1g5EpkjWkYe1k4ndiZp67oKFfDCFLUZlGU9HFaJZAPzA/export?format=pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-medium">Get Relief Kit (Rs.199)</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
