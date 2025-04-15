import type { Metadata } from 'next';

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

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const article = getArticleBySlug(slug);
  if (!article) {
    return {};
  }

  // TODO: define SEO configuration in 'core/configs/app.config.ts'
  return {
    title: article.title,
    description: article.description,
    authors: [
      {
        name: 'Boonyarit Iamsa-ard',
        url: 'https://boonyarit.me',
      },
    ],
    keywords: article.keywords,
    openGraph: {
      siteName: 'boonyarit.me',
      url: `https://boonyarit.me/articles/${article.slug}`,
      images: [
        {
          url: article.cover.src,
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export const dynamicParams = false;

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
