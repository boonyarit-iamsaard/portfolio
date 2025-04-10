import { DownloadIcon } from 'lucide-react';

import { SocialLinks } from '@/common/components/social-links';
import { Button } from '@/common/components/ui/button';

// TODO: re-consider the background radial gradient
// <section className="space-y-8 bg-radial-[at_25%_50%] from-slate-50 via-slate-200 to-slate-300 to-95% py-16">
export function HeroSection() {
  return (
    <section className="bg-muted/50 space-y-8 py-16">
      <div className="container grid grid-cols-1 gap-4 py-16 md:grid-cols-2">
        <div className="flex flex-col items-center space-y-4 text-center md:items-start md:text-start">
          <div className="space-y-1">
            <p className="text-muted-foreground text-lg font-semibold">
              Hi, I&apos;m
            </p>
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              Boonyarit Iamsa-ard
            </h1>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              A Full Stack Developer
            </h2>
          </div>
          <p className="text-muted-foreground text-center text-lg md:text-start">
            I focus on building scalable and maintainable web applications.
          </p>
          <div className="flex flex-col items-center gap-4 pt-4 md:items-start">
            <SocialLinks />
            <div className="grid grid-cols-2 gap-2">
              <Button size="lg" className="animate-fade-in">
                Contact me
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/assets/boonyarit-iamsaard-2025-02-16.pdf" download>
                  <DownloadIcon className="size-4" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden aspect-video md:block">
          {/* Add your image component or element here */}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <span className="text-foreground flex items-center gap-2 rounded-full border border-amber-200 bg-amber-200/20 px-3 py-1.5 text-sm font-medium">
          🚧 This site is working in progress
        </span>
      </div>
    </section>
  );
}
