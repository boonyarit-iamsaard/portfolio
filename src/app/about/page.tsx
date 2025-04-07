import type { Metadata } from 'next';

import Image from 'next/image';

import { Download } from 'lucide-react';

import profile from '@/core/assets/images/profile.png';
import { MDX } from '@/common/components/mdx';
import { Button } from '@/common/components/ui/button';

import { about } from '@/velite';

export const metadata: Metadata = {
  title: 'About - Boonyarit I.',
  description: 'Learn more about Boonyarit I.',
};

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section className="bg-muted/50">
        <div className="h-16" />
        <div className="container-content flex min-h-[35vh] flex-col items-center justify-center gap-4 text-center">
          <div className="relative size-24 md:size-32">
            <Image
              src={profile}
              alt="Boonyarit Iamsa-ard"
              fill
              quality={95}
              priority
              sizes="(max-width: 768px) 96px, 128px"
              className="ring-background rounded-full object-cover ring-2"
            />
          </div>
          <h1 className="text-2xl font-bold tracking-tight md:text-4xl">
            Boonyarit Iamsa-ard
          </h1>
          <p className="text-muted-foreground text-lg font-medium italic">
            Full Stack Developer
          </p>
          <Button asChild className="gap-2">
            <a href="/assets/boonyarit-iamsaard-2025-02-16.pdf" download>
              <Download className="size-4" />
              Resume
            </a>
          </Button>
        </div>
      </section>
      <section className="container pb-16">
        <MDX content={about.content} />
      </section>
    </div>
  );
}
