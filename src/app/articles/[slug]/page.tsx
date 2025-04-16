import type { Metadata } from 'next';

import Image from 'next/image';
import { notFound } from 'next/navigation';

import { appConfig } from '@/core/configs/app.config';
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
    authors: appConfig.authors,
    keywords: article.keywords,
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.description,
      siteName: appConfig.name,
      url: `${appConfig.url}/articles/${article.slug}`,
      images: [
        {
          url: article.cover.src,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      creator: appConfig.creator,
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
      <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
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
