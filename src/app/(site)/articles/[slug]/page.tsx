import { type Metadata } from 'next';

import { getPageContent } from '@/lib/mdx';

type PageProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const {
    meta: { title },
  } = await getPageContent(params.slug);

  return {
    title,
  };
}

// TODO: Consider using generateStaticParams to statically generate routes at build time instead of on-demand at request time.

export default async function Page({ params: { slug } }: PageProps) {
  const {
    meta: { title, author, publishDate },
    content,
  } = await getPageContent(slug);

  return (
    <section>
      <div className="space-y-16">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-sm text-slate-500">
            By {author} on {publishDate}
          </p>
        </div>
        <div className="prose max-w-none">{content}</div>
      </div>
    </section>
  );
}
