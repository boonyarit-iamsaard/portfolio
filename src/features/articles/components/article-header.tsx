import { CalendarIcon } from 'lucide-react';

import { Tag } from '@/common/components/tag';
import { formatDate } from '@/common/helpers/date';

import type { Article } from '@/velite';

type ArticleHeaderProps = Readonly<{
  article: Article;
}>;

export function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <div className="space-y-2">
      <div className="text-muted-foreground flex items-center gap-2 text-sm">
        <CalendarIcon className="inline-block size-4" />
        <p>Published on {formatDate(article.date)}</p>
      </div>
      <h1 className="text-2xl font-black tracking-tight sm:text-4xl">
        {article.title}
      </h1>
      <div className="flex flex-wrap">
        {article.tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
    </div>
  );
}
