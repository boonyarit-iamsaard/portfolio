import type { Metadata } from 'next';

import { z } from 'zod';

import { FilterByTags } from '@/common/components/FilterByTags';
import { PageHeader } from '@/common/components/page-header';
import {
  ArticleCard,
  ArticleCardPlaceholder,
} from '@/features/articles/components/article-card';

import { articles as allArticles, tags } from '@/velite';

type ArticlesPageProps = Readonly<{
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}>;

const tagSchema = z
  .string()
  .toLowerCase()
  .transform((tag) => tag.replace(/\s/g, ''));
const tagsParamSchema = z.object({
  tags: z.union([tagSchema, z.array(tagSchema)]).optional(),
});

// TODO: when number of articles is large, these keywords need to be explicitly defined here
const articlesKeywords = Array.from(
  new Set(
    allArticles
      .flatMap((article) => article.keywords)
      .filter((k) => k !== undefined),
  ),
);

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Insights, tutorials, and thoughts on web development.',
  keywords: articlesKeywords,
};

export default async function Page({ searchParams }: ArticlesPageProps) {
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

  const articlesTags = tags.filter((t) => t.resource === 'articles');
  const validTags = selectedTags.filter(
    (tag) => articlesTags.find((t) => t.name === tag) != null,
  );

  const filteredArticles = allArticles
    .filter((article) =>
      validTags.length === 0
        ? true
        : article.tags.some((tag) => validTags.includes(tag)),
    )
    // TODO: sort with date-fns
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // TODO: add pagination
  return (
    <div className="space-y-16 py-16">
      <PageHeader
        title="Articles"
        description="Insights, tutorials, and thoughts on web development."
      />
      <section className="container space-y-8">
        <FilterByTags
          allTags={articlesTags}
          activeTags={validTags}
          resource="articles"
        />
        <div className="grid gap-4">
          {filteredArticles.length === 0 ? (
            <ArticleCardPlaceholder />
          ) : (
            filteredArticles.map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
                activeTags={validTags}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
}
