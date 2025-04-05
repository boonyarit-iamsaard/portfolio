import type { Metadata } from 'next';

import Link from 'next/link';

import { PageHeader } from '@/common/components/page-header';
import { formatDate } from '@/common/helpers/date';

import { projects } from '@/velite';

export const metadata: Metadata = {
  title: 'Projects - Boonyarit I.',
  description: 'A showcase of my projects and work.',
};

export default function Page() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Projects"
        description="A showcase of my projects and work."
      />
      <section className="container py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group relative flex flex-col space-y-2"
            >
              <h2 className="text-xl font-semibold">
                <Link href={project.permalink} className="hover:text-primary">
                  {project.title}
                </Link>
              </h2>
              <time
                dateTime={project.date}
                className="text-muted-foreground text-sm"
              >
                {formatDate(project.date)}
              </time>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
