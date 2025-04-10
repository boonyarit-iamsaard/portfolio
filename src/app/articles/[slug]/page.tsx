import Image from 'next/image';
import { notFound } from 'next/navigation';

import { MDX } from '@/common/components/mdx';
import { ArticleHeader } from '@/features/articles/components/article-header';

import { articles } from '@/velite';

type PageProps = Readonly<{
  params: Promise<{ slug: string }>;
}>;

function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const article = getArticleBySlug(slug);
  if (!article) {
    return notFound();
  }

  // TODO: refine cover ratio for better visualization
  return (
    <div className="container-content space-y-16 py-16">
      <div className="py-4">
        <div className="relative h-[35vh] overflow-hidden rounded-lg">
          <Image
            src={article.cover}
            alt={article.title}
            fill
            // TODO: improve sizes property
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>
      <section>
        <ArticleHeader article={article} />
        <MDX content={article.content} />
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export const dynamicParams = false;
