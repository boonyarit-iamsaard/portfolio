import { SectionHeader } from '@/common/components/section-header';

export function TechStackSection() {
  const tools = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'SQL',
  ];

  return (
    <section className="container space-y-8">
      <SectionHeader title="Tools" />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {tools.map((tool) => (
          <div
            key={tool}
            className="bg-muted hover:bg-muted/80 flex aspect-video items-center justify-center rounded-lg font-medium transition-all hover:scale-105"
          >
            {tool}
          </div>
        ))}
      </div>
    </section>
  );
}
