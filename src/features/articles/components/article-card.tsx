import Image from 'next/image';
import Link from 'next/link';

import { Tag } from '@/common/components/tag';
import { Button } from '@/common/components/ui/button';
import { formatDate } from '@/common/helpers/date';

import type { Article } from '@/velite';

type ArticleCardProps = Readonly<{
  article: Article;
}>;

export function ArticleCard({ article }: ArticleCardProps) {
  const thumbnail = article.thumbnail ?? article.cover;

  // TODO: refine thumbnail ratio for better visualization
  return (
    <div className="group bg-card hover:ring-muted-foreground grid overflow-hidden rounded-xl border transition-all hover:ring-2 md:grid-cols-4">
      <div className="bg-muted relative flex aspect-video items-center justify-center transition-opacity md:col-span-1 md:aspect-auto">
        <Image
          src={thumbnail}
          alt={article.title}
          fill
          // TODO: improve sizes property
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-all group-hover:scale-105"
        />
      </div>
      <div className="space-y-4 p-6 md:col-span-3">
        <div className="flex items-center justify-between space-y-2">
          <h3 className="text-xl font-bold">
            <Link href={article.permalink} className="hover:text-primary">
              {article.title}
            </Link>
          </h3>
          <time className="text-muted-foreground text-sm">
            {formatDate(article.date)}
          </time>
        </div>
        <p className="text-muted-foreground">{article.description}</p>
        <div className="flex flex-wrap">
          {article.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <div className="flex items-center justify-end">
          <Button variant="link" asChild>
            <Link href={article.permalink}>Read more</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
