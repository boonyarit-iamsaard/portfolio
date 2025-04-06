import type { Metadata } from 'next';

import { MDX } from '@/common/components/mdx';
import { PageHeader } from '@/common/components/page-header';

import { about } from '@/velite';

export const metadata: Metadata = {
  title: 'About - Boonyarit I.',
  description: 'Learn more about Boonyarit I.',
};

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <PageHeader title={about.title} description={about.description} />
      <section className="container">
        <MDX content={about.content} />
      </section>
    </div>
  );
}
