import { defineCollection, defineConfig, s } from 'velite';

const articles = defineCollection({
  name: 'Article',
  pattern: 'articles/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(100),
      slug: s.slug('article'),
      date: s.isodate(),
      metadata: s.metadata(),
      content: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      permalink: `/articles/${data.slug}`,
    })),
});

const projects = defineCollection({
  name: 'Project',
  pattern: 'projects/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(100),
      description: s.string().max(255),
      slug: s.slug('project'),
      date: s.isodate(),
      metadata: s.metadata(),
      content: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      permalink: `/projects/${data.slug}`,
    })),
});

export default defineConfig({
  collections: {
    articles,
    projects,
  },
});
