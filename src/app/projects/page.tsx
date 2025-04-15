import type { Metadata } from 'next';

import { z } from 'zod';

import { FilterByTags } from '@/common/components/FilterByTags';
import { PageHeader } from '@/common/components/page-header';
import { ProjectCard } from '@/features/projects/components/project-card';

import { projects, tags } from '@/velite';

type ProjectsPageProps = Readonly<{
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}>;

const tagSchema = z
  .string()
  .toLowerCase()
  .transform((tag) => tag.replace(/\s/g, ''));
const tagsParamSchema = z.object({
  tags: z.union([tagSchema, z.array(tagSchema)]).optional(),
});

// TODO: when number of projects is large, these keywords need to be explicitly defined here
const projectsKeywords = Array.from(
  new Set(
    projects
      .flatMap((project) => project.keywords)
      .filter((k) => k !== undefined),
  ),
);

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A showcase of my projects and work.',
  keywords: projectsKeywords,
};

export default async function Page({ searchParams }: ProjectsPageProps) {
  // TODO: separate page logic
  const queryParams = await searchParams;

  const selectedTags: string[] = [];
  const parsedTags = tagsParamSchema.safeParse(queryParams);
  if (parsedTags.success && parsedTags.data.tags) {
    selectedTags.push(
      ...(Array.isArray(parsedTags.data.tags)
        ? parsedTags.data.tags
        : parsedTags.data.tags.split(',')),
    );
  }

  const projectsTags = tags.filter((t) => t.resource === 'projects');
  const validTags = selectedTags.filter(
    (tag) => projectsTags.find((t) => t.name === tag) != null,
  );

  const filteredProjects = projects
    .filter((project) =>
      validTags.length === 0
        ? true
        : project.tags.some((tag) => validTags.includes(tag)),
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // TODO: add pagination
  return (
    <div className="space-y-16 py-16">
      <PageHeader
        title="Projects"
        description="A showcase of my projects and work."
      />
      <section className="container space-y-8">
        <FilterByTags
          allTags={projectsTags}
          activeTags={validTags}
          resource="projects"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              activeTags={validTags}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
