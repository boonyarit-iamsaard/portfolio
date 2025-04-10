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

  return (
    <div className="container-content pt-32 pb-16">
      <div className="relative min-h-[calc(100svh*0.382)] overflow-hidden rounded-t-lg">
        <Image
          src={article.cover}
          alt={article.title}
          fill
          // TODO: improve sizes property
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="bg-muted space-y-4 rounded-b-lg p-4 sm:px-16 sm:py-8">
        <ArticleHeader article={article} />
        <MDX content={article.content} />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export const dynamicParams = false;
