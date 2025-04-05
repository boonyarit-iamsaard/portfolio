import { notFound } from 'next/navigation';

import { MDX } from '@/common/components/mdx';
import { PageHeader } from '@/common/components/page-header';

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
    <div className="space-y-16">
      <PageHeader title={article.title} />
      <section className="container py-12">
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
