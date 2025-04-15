import { Tag as TagComponent } from '@/common/components/tag';

import type { Tag } from '@/velite';

interface FilterByTagsProps {
  allTags: Tag[];
  activeTags: string[];
  resource: 'articles' | 'projects';
}

export function FilterByTags({
  allTags,
  activeTags,
  resource,
}: FilterByTagsProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-sm leading-none font-medium">Filter by tags</h2>
      <div className="flex flex-wrap gap-1">
        {allTags.map((tag) => (
          <TagComponent
            key={tag.name}
            tag={tag.name}
            activeTags={activeTags}
            resource={resource}
          />
        ))}
      </div>
    </div>
  );
}
