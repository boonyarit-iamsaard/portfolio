import Link from 'next/link';

import { cn } from '../helpers/cn';
import { Button } from './ui/button';

type TagProps = Readonly<{
  tag: string;
  resource: 'articles' | 'projects';
  activeTags?: string[];
}>;

export function Tag({ tag, resource, activeTags = [] }: TagProps) {
  const isActive = activeTags.includes(tag);
  const tagsFilter = isActive
    ? activeTags.filter((t) => t !== tag)
    : activeTags.concat(tag);
  const href =
    tagsFilter.length === 0
      ? `/${resource}`
      : `/${resource}?tags=${tagsFilter.join(',')}`;

  return (
    <Button
      asChild
      variant={isActive ? 'default' : 'outline'}
      className={cn(
        'h-auto rounded-full px-2.5 py-0.5 shadow-none',
        !isActive && 'bg-card',
      )}
    >
      <Link href={href} scroll={false}>
        #{tag}
      </Link>
    </Button>
  );
}
