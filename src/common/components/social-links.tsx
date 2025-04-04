import { Icons } from '@/common/components/icons';
import { Button } from '@/common/components/ui/button';

export function SocialLinks() {
  return (
    <div className="flex items-center">
      <Button variant="ghost" size="icon" asChild>
        <a
          href="https://github.com/boonyarit-iamsaard"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Icons.gitHub className="size-5" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a
          href="https://linkedin.com/in/boonyarit-iamsaard"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Icons.linkedIn className="size-5" />
        </a>
      </Button>
    </div>
  );
}
