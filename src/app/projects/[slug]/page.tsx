import { notFound } from 'next/navigation';

import { MDX } from '@/common/components/mdx';
import { PageHeader } from '@/common/components/page-header';

import { projects } from '@/velite';

type PageProps = Readonly<{
  params: Promise<{ slug: string }>;
}>;

function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);
  if (!project) {
    return notFound();
  }

  return (
    <div className="space-y-16">
      <PageHeader title={project.title} />
      <section className="container py-12">
        <MDX content={project.content} />
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export const dynamicParams = false;
