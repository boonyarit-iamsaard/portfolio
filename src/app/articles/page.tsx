import type { Metadata } from 'next';

import Link from 'next/link';

import { PageHeader } from '@/common/components/page-header';
import { formatDate } from '@/common/helpers/date';

import { articles } from '@/velite';

export const metadata: Metadata = {
  title: 'Articles - Boonyarit I.',
  description: 'Read articles written by Boonyarit I.',
};

export default function Page() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Articles"
        description="Insights, tutorials, and thoughts on web development."
      />
      <section className="container py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group relative flex flex-col space-y-2"
            >
              <h2 className="text-xl font-semibold">
                <Link href={article.permalink} className="hover:text-primary">
                  {article.title}
                </Link>
              </h2>
              <time
                dateTime={article.date}
                className="text-muted-foreground text-sm"
              >
                {formatDate(article.date)}
              </time>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
