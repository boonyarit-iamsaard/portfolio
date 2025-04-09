import { DownloadIcon } from 'lucide-react';

import { SectionHeader } from '@/common/components/section-header';
import { SocialLinks } from '@/common/components/social-links';
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

  // TODO: re-consider the background radial gradient
  // <section className="space-y-8 bg-radial-[at_25%_50%] from-slate-50 via-slate-200 to-slate-300 to-95% py-16">
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero */}
      <section className="bg-muted/50 space-y-8 py-16">
        <div className="container grid grid-cols-1 gap-4 py-16 md:grid-cols-2">
          <div className="flex flex-col items-center space-y-4 text-center md:items-start md:text-start">
            <div className="space-y-1">
              <p className="text-muted-foreground text-lg font-semibold">
                Hi, I&apos;m
              </p>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                Boonyarit Iamsa-ard
              </h1>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                A Full Stack Developer
              </h2>
            </div>
            <p className="text-muted-foreground text-center text-lg md:text-start">
              I focus on building scalable and maintainable web applications.
            </p>
            <div className="flex flex-col items-center gap-4 pt-4 md:items-start">
              <SocialLinks />
              <div className="grid grid-cols-2 gap-2">
                <Button size="lg" className="animate-fade-in">
                  Contact me
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="/assets/boonyarit-iamsaard-2025-02-16.pdf" download>
                    <DownloadIcon className="size-4" />
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="hidden aspect-video md:block">
            {/* Add your image component or element here */}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-foreground flex items-center gap-2 rounded-full border border-amber-200 bg-amber-200/20 px-3 py-1.5 text-sm font-medium">
            🚧 This site is working in progress
          </span>
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
