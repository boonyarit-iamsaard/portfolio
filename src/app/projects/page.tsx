import type { Metadata } from 'next';

import { PageHeader } from '@/common/components/page-header';
import { ProjectCard } from '@/features/projects/components/project-card';

import { projects } from '@/velite';

export const metadata: Metadata = {
  title: 'Projects - Boonyarit I.',
  description: 'A showcase of my projects and work.',
};

export default function Page() {
  // TODO: add pagination
  return (
    <div className="space-y-16">
      <PageHeader
        title="Projects"
        description="A showcase of my projects and work."
      />
      <section className="container grid gap-4 pb-16 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </div>
  );
}
