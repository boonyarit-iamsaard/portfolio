import { SocialLinks } from '@/common/components/social-links';

export function AppFooter() {
  return (
    <footer className="py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Boonyarit Iamsa-ard. All rights
          reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
