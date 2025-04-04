import type { Metadata } from 'next';

import { PageHeader } from '@/common/components/page-header';

export const metadata: Metadata = {
  title: 'About - Boonyarit I.',
  description: 'Learn more about Boonyarit I.',
};

export default function AboutPage() {
  return (
    <main className="relative flex-1">
      <PageHeader
        title="About Me"
        description="Discover my background, skills, and passion for development."
      />
      <section className="container py-12">
        <p>More details about me will go here...</p>
      </section>
    </main>
  );
}
