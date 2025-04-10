import { SectionHeader } from '@/common/components/section-header';
import { ArticleCard } from '@/features/articles/components/article-card';

import { articles } from '@/velite';

export function ArticlesSection() {
  const latestArticles = articles.slice(0, 4);

  return (
    <section className="container space-y-8">
      <SectionHeader title="Latest Articles" viewAllLink="/articles" />
      <div className="grid gap-4">
        {latestArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
