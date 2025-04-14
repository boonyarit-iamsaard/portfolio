import Image from 'next/image';
import Link from 'next/link';

import { FileSearch } from 'lucide-react';

import { Tag } from '@/common/components/tag';
import { Button } from '@/common/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/common/components/ui/card';
import { formatDate } from '@/common/helpers/date';

import type { Article } from '@/velite';

type ArticleCardProps = Readonly<{
  article: Article;
  activeTags?: string[];
}>;

export function ArticleCard({ article, activeTags }: ArticleCardProps) {
  return (
    <Card className="group hover:ring-muted-foreground grid gap-0 overflow-hidden p-0 transition-all hover:ring-2 md:grid-cols-4">
      <div className="bg-muted relative aspect-video md:col-span-1 md:aspect-auto md:h-full">
        <Image
          src={article.cover}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw"
          className="object-cover transition-transform duration-300 will-change-transform group-hover:scale-105"
          priority={false}
          quality={85}
        />
      </div>
      <div className="flex flex-col p-6 md:col-span-3">
        <CardHeader className="p-0">
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between md:gap-4">
            <CardTitle className="text-xl">
              <Link href={article.permalink} className="hover:text-primary">
                {article.title}
              </Link>
            </CardTitle>
            <time className="text-muted-foreground shrink-0 text-sm">
              {formatDate(article.date)}
            </time>
          </div>
          <CardDescription className="mt-2 line-clamp-2">
            {article.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 p-0">
          <div className="flex flex-wrap gap-2 py-4">
            {article.tags.map((tag) => (
              <Tag key={tag} tag={tag} activeTags={activeTags} />
            ))}
          </div>
        </CardContent>
        <CardFooter className="items-end justify-end p-0">
          <Button variant="link" asChild className="px-0">
            <Link href={article.permalink}>Read more</Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export function ArticleCardPlaceholder() {
  return (
    <Card className="items-center py-8">
      <CardContent className="text-center">
        <FileSearch className="text-muted-foreground mx-auto mb-4 size-12" />
        <CardTitle className="text-xl">No articles found</CardTitle>
        <CardDescription className="mt-1">
          Try removing some filters or check back later
        </CardDescription>
      </CardContent>
    </Card>
  );
}
