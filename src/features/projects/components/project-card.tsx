import type { VariantProps } from 'class-variance-authority';

import Link from 'next/link';

import { ImageIcon, MonitorIcon } from 'lucide-react';

import { Icons } from '@/common/components/icons';
import { Tag } from '@/common/components/tag';
import { Badge } from '@/common/components/ui/badge';
import { Button } from '@/common/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/common/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/common/components/ui/tooltip';
import { formatDate } from '@/common/helpers/date';

import type { badgeVariants } from '@/common/components/ui/badge';
import type { Project } from '@/velite';

type ProjectCardProps = Readonly<{
  project: Project;
  activeTags?: string[];
}>;

export function ProjectCard({ project, activeTags }: ProjectCardProps) {
  // TODO: improve status colors
  const statusVariants: Record<
    Project['status'],
    VariantProps<typeof badgeVariants>['variant']
  > = {
    active: 'default',
    stable: 'secondary',
    maintenance: 'outline',
    experimental: 'destructive',
  };

  return (
    <Card className="group hover:ring-muted-foreground overflow-hidden p-0 transition-all hover:ring-2">
      <div className="bg-muted flex aspect-video items-center justify-center transition-opacity group-hover:opacity-80">
        <ImageIcon className="text-muted-foreground size-12" />
      </div>
      <div className="space-y-4 px-6 py-4">
        <CardHeader className="p-0">
          <div className="flex flex-col gap-2">
            <CardTitle className="text-xl">
              <Link href={project.permalink} className="hover:text-primary">
                {project.title}
              </Link>
            </CardTitle>
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <time>{formatDate(project.date)}</time>
              <Badge variant={statusVariants[project.status]}>
                {project.status}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-4 p-0 text-sm">
          <p className="line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <Tag
                key={tag}
                tag={tag}
                resource="projects"
                activeTags={activeTags}
              />
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-0">
          <div className="flex items-center gap-2">
            {project.preview && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MonitorIcon className="size-5" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Live preview</p>
                </TooltipContent>
              </Tooltip>
            )}
            {project.github && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icons.gitHub className="size-5" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
          <Button variant="link" asChild className="px-0">
            <Link href={project.permalink}>Read more</Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
