import type { Tag } from '@/velite';

export interface ActiveResourceTags {
  activeTags: string[];
  resourceTags: Tag[];
}

export interface BaseResource {
  date: string;
  tags: string[];
}

export interface FilteredResource<T extends BaseResource> {
  filteredResource: T[];
  activeTags: string[];
  resourceTags: Tag[];
}

export type ResourceType = 'articles' | 'projects';
