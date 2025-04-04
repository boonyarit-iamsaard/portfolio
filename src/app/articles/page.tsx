import type { Metadata } from 'next';

import { PageHeader } from '@/common/components/page-header';

export const metadata: Metadata = {
  title: 'Articles - Boonyarit I.',
  description: 'Read articles written by Boonyarit I.',
};

export default function ArticlesPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Articles"
        description="Insights, tutorials, and thoughts on web development."
      />
      <section className="container py-12">
        <p>Article listings will go here...</p>
      </section>
    </div>
  );
}
