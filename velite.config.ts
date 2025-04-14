import rehypeShiki from '@shikijs/rehype';
import { defineCollection, defineConfig, s } from 'velite';

export const tagSchema = s
  .string()
  .toLowerCase()
  .transform((tag) => tag.replace(/\s/g, ''));

const count = s
  .object({ total: s.number(), articles: s.number() })
  .default({ total: 0, articles: 0 });

const about = defineCollection({
  name: 'About',
  single: true,
  pattern: 'about.mdx',
  schema: s
    .object({
      title: s.string().max(100),
      description: s.string().max(255),
      slug: s.slug('about'),
      date: s.isodate(),
      metadata: s.metadata(),
      content: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      permalink: `/about`,
    })),
});

const articles = defineCollection({
  name: 'Article',
  pattern: 'articles/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(100),
      description: s.string().max(255),
      cover: s.image(),
      slug: s.slug('article'),
      tags: s.array(tagSchema),
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

const tags = defineCollection({
  name: 'Tag',
  pattern: 'tags/tags.json',
  // TODO: remove unnecessary fields
  schema: s
    .object({
      name: s.string().max(20),
      slug: s.slug('global'),
      cover: s.image().optional(),
      description: s.string().max(255).optional(),
      count,
    })
    .transform((data) => ({ ...data, permalink: `/${data.slug}` })),
});

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: {
    about,
    articles,
    projects,
    tags,
  },
  mdx: {
    rehypePlugins: [
      [
        rehypeShiki as any, // eslint-disable-line @typescript-eslint/no-explicit-any
        {
          theme: 'dracula',
        },
      ],
    ],
  },
  prepare({ articles, tags }) {
    /**
     * Prepare tags
     */
    const tagsFromArticles = Array.from(
      new Set(articles.flatMap((a) => a.tags)),
    ).filter((a) => tags.find((t) => t.name === a) == null);
    tags.push(
      ...tagsFromArticles.map((name) => ({
        name,
        slug: name,
        permalink: '',
        count: { total: 0, articles: 0 },
      })),
    );
    for (const tag of tags) {
      tag.count.articles = articles.filter((a) =>
        a.tags.includes(tag.name),
      ).length;
      tag.count.total = tag.count.articles;
      tag.permalink = `/articles?tag=${tag.slug}`;
    }
  },
});
