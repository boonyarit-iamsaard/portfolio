import { type Metadata } from 'next';
import Link from 'next/link';

import { getAllArticlesMeta } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Articles',
};

export default async function Page() {
  const articles = await getAllArticlesMeta();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-center text-4xl font-bold">Articles</h1>
      </div>
      <div className="grid gap-4">
        {articles.map(({ title, slug, author, publishDate }) => (
          <Link key={slug} href={`/articles/${slug}`} className="group block">
            <div className="rounded-lg border p-4 transition-colors duration-300 ease-in-out group-hover:bg-muted">
              <p className="text-2xl font-bold">{title}</p>
              <p className="text-muted-foreground">{author}</p>
              <p className="text-muted-foreground">{publishDate}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
