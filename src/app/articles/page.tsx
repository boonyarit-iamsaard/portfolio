import type { Metadata } from 'next';

import { PageHeader } from '@/common/components/page-header';
import { ArticleCard } from '@/features/articles/components/article-card';

import { articles } from '@/velite';

export const metadata: Metadata = {
  title: 'Articles - Boonyarit I.',
  description: 'Read articles written by Boonyarit I.',
};

export default function Page() {
  const sortedArticles = articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  // TODO: add pagination
  return (
    <div className="space-y-16 py-16">
      <PageHeader
        title="Articles"
        description="Insights, tutorials, and thoughts on web development."
      />
      <section className="container grid gap-4">
        {sortedArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </section>
    </div>
  );
}
