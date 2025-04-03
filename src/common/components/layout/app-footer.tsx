import { Icons } from '../icons';
import { Button } from '../ui/button';

export function AppFooter() {
  return (
    <footer className="py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Boonyarit Iamsa-ard. All rights
          reserved.
        </p>
        <div className="flex items-center">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/boonyarit-iamsaard"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Icons.gitHub className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/boonyarit-iamsaard"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Icons.linkedIn className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
