import { Construction } from 'lucide-react';

import { SectionHeader } from '@/common/components/section-header';
import { Button } from '@/common/components/ui/button';
import { ArticleCard } from '@/features/articles/components/article-card';
import { ProjectCard } from '@/features/projects/components/project-card';

import { articles, projects } from '@/velite';

export default function Page() {
  const tools = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'SQL',
  ];

  const latestArticles = articles.slice(0, 4);
  const latestProjects = projects.slice(0, 4);

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero */}
      <section className="bg-muted/50 flex flex-col items-center justify-center px-4 py-16">
        <div className="h-16" />
        <div className="flex min-h-[50vh] max-w-2xl flex-col items-center justify-center gap-6 text-center">
          <span className="text-foreground bg-primary/10 border-primary/20 flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium">
            <Construction className="text-primary size-4" />
            This site is working in progress
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Hi, I&apos;m Boonyarit
          </h1>
          <p className="text-muted-foreground text-lg">
            A&nbsp;
            <strong className="text-primary font-semibold">
              Full Stack Developer
            </strong>
            &nbsp;with a passion for building scalable and maintainable web
            applications.
          </p>
          <div className="flex flex-col items-center gap-2">
            <Button size="lg" className="animate-fade-in">
              Contact me
            </Button>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="container space-y-8">
        <SectionHeader title="Projects" viewAllLink="/projects" />
        <div className="grid gap-4 md:grid-cols-2">
          {latestProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="container space-y-8">
        <SectionHeader title="Latest Articles" viewAllLink="/articles" />
        <div className="grid gap-4">
          {latestArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section>
        <div className="container space-y-8">
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-muted/50 py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Want to work together?
            </h2>
            <p className="text-muted-foreground text-lg">
              Let&apos;s connect and discuss your next project.
            </p>
            <Button size="lg" className="transition-transform hover:scale-105">
              Contact me
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
