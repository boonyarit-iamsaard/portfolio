import Link from 'next/link';

import { Button } from './ui/button';

type TagProps = Readonly<{
  tag: string;
  activeTags?: string[];
}>;

export function Tag({ tag, activeTags = [] }: TagProps) {
  const isActive = activeTags.includes(tag);
  const tagsFilter = isActive
    ? activeTags.filter((t) => t !== tag)
    : activeTags.concat(tag);
  const href =
    tagsFilter.length === 0
      ? '/articles'
      : `/articles?tags=${tagsFilter.join(',')}`;

  return (
    <Button
      asChild
      variant={isActive ? 'default' : 'ghost'}
      className="h-auto rounded-full px-2.5 py-0.5"
    >
      <Link href={href}>#{tag}</Link>
    </Button>
  );
}
