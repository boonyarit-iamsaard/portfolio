import { defineConfig, s } from 'velite';

export default defineConfig({
  collections: {
    articles: {
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
    },
  },
});
