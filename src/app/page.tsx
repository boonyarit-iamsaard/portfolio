import { Construction, ImageIcon } from 'lucide-react';

import { Button } from '@/common/components/ui/button';

export default function Home() {
  const tools = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'SQL',
  ];
  const projects = Array.from({ length: 4 }, (_, i) => ({
    id: `project-${i + 1}`,
    title: `Project ${i + 1}`,
    description: `Project ${i + 1} description`,
  }));
  const articles = Array.from({ length: 6 }, (_, i) => ({
    id: `article-${i + 1}`,
    title: `Article ${i + 1}`,
    description: `Article ${i + 1} description`,
  }));

  return (
    <div className="space-y-16">
      <section className="bg-muted/50 flex flex-col items-center justify-center px-4 py-16">
        <div className="h-16" />
        <div className="flex min-h-[50vh] max-w-2xl flex-col items-center justify-center gap-6 text-center">
          <span className="text-muted-foreground/80 bg-muted/80 flex animate-pulse items-center gap-1.5 rounded-full px-2 py-1 text-xs">
            <Construction className="text-primary h-3.5 w-3.5" />
            This site is work in progress
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

      <section>
        <div className="container space-y-6">
          <h2 className="sr-only">Tech Stack</h2>
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

      <section className="bg-muted/50 py-16">
        <div className="container space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
            <Button variant="link">View all</Button>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-card hover:ring-muted-foreground overflow-hidden rounded-xl border transition-all hover:ring-2"
              >
                <div className="bg-muted flex aspect-video items-center justify-center transition-opacity group-hover:opacity-80">
                  <ImageIcon className="text-muted-foreground size-12" />
                </div>
                <div className="space-y-4 p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Articles</h2>
            <Button variant="link">View all</Button>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <div
                key={article.id}
                className="group bg-card hover:ring-muted-foreground overflow-hidden rounded-xl border transition-all hover:ring-2"
              >
                <div className="bg-muted flex aspect-video items-center justify-center transition-opacity group-hover:opacity-80">
                  <ImageIcon className="text-muted-foreground size-12" />
                </div>
                <div className="space-y-4 p-6">
                  <h3 className="group-hover:text-primary text-xl font-semibold transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
