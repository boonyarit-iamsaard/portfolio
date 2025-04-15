import type { Metadata } from 'next';

import Image from 'next/image';
import { notFound } from 'next/navigation';

import { MDX } from '@/common/components/mdx';
import { ProjectHeader } from '@/features/projects/components/project-header';

import { projects } from '@/velite';

type PageProps = Readonly<{
  params: Promise<{ slug: string }>;
}>;

function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getProjectBySlug(slug);
  if (!project) {
    return {};
  }

  // TODO: define SEO configuration in 'core/configs/app.config.ts'
  return {
    title: project.title,
    description: project.description,
    authors: [
      {
        name: 'Boonyarit Iamsa-ard',
        url: 'https://boonyarit.me',
      },
    ],
    keywords: project.keywords,
    openGraph: {
      siteName: 'boonyarit.me',
      url: `https://boonyarit.me/projects/${project.slug}`,
      images: [
        {
          url: project.cover.src,
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export const dynamicParams = false;

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);
  if (!project) {
    return notFound();
  }

  return (
    <div className="container-content pt-32 pb-16">
      <div className="relative min-h-[calc(100svh*0.382)] overflow-hidden rounded-t-lg">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="bg-muted space-y-4 rounded-b-lg p-4 sm:px-16 sm:py-8">
        <ProjectHeader project={project} />
        <MDX content={project.content} />
      </div>
    </div>
  );
}
