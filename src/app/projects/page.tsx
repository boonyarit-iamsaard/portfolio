import type { Metadata } from 'next';

import { PageHeader } from '@/common/components/page-header';

export const metadata: Metadata = {
  title: 'Projects - Boonyarit I.',
  description: 'A collection of projects by Boonyarit I.',
};

export default function ProjectsPage() {
  return (
    <main className="relative flex-1">
      <PageHeader
        title="Projects"
        description="Explore the projects I've worked on."
      />
      <section className="container py-12">
        <p>Project details will go here...</p>
      </section>
    </main>
  );
}
