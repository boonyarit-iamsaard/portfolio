import Image from 'next/image';
import Link from 'next/link';

import { DownloadIcon } from 'lucide-react';

import profile from '@/core/assets/images/profile.png';
import { SocialLinks } from '@/common/components/social-links';
import { Button } from '@/common/components/ui/button';

// TODO: re-consider the background radial gradient
// <section className="space-y-8 bg-radial-[at_25%_50%] from-slate-50 via-slate-200 to-slate-300 to-95% py-16">
export function HeroSection() {
  return (
    <section className="flex min-h-dvh flex-col items-center justify-center space-y-8 py-16">
      <div className="container flex flex-col gap-8">
        <div className="flex items-center justify-center">
          <div className="relative size-24 sm:size-32">
            <Image
              src={profile}
              alt="Boonyarit Iamsa-ard"
              fill
              quality={95}
              priority
              sizes="(max-width: 768px) 96px, 128px"
              className="ring-muted rounded-full object-cover ring-2"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="space-y-1">
            <p className="text-muted-foreground text-lg font-semibold">
              Hi, I&apos;m
            </p>
            <h1 className="text-2xl font-black tracking-tight sm:text-4xl">
              Boonyarit Iamsa-ard
            </h1>
            <h2 className="text-lg font-bold tracking-tight sm:text-2xl">
              A Full Stack Developer
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            I focus on building scalable and maintainable web applications.
          </p>
          <div className="flex flex-col items-center gap-4 pt-4">
            <SocialLinks />
            <div className="grid grid-cols-2 gap-2">
              <Button asChild size="lg">
                <Link href="#contact-form">Contact me</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href="/assets/boonyarit-iamsaard-2025-04-15.pdf" download>
                  <DownloadIcon className="size-4" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <span className="text-foreground flex items-center gap-2 rounded-full border border-amber-200 bg-amber-200/20 px-3 py-1.5 text-sm font-medium">
          🚧 This site is under active development
        </span>
      </div>
    </section>
  );
}
