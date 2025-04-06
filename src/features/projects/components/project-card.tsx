import Link from 'next/link';

import { ImageIcon, MonitorIcon } from 'lucide-react';

import { Icons } from '@/common/components/icons';
import { Button } from '@/common/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/common/components/ui/tooltip';

import type { Project } from '@/velite';

type ProjectCardProps = Readonly<{
  project: Project;
}>;

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-card hover:ring-muted-foreground overflow-hidden rounded-xl border transition-all hover:ring-2">
      {/* Image */}
      <div className="bg-muted flex aspect-video items-center justify-center transition-opacity group-hover:opacity-80">
        <ImageIcon className="text-muted-foreground size-12" />
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        {/* Title */}
        <h3 className="text-xl font-bold">
          <Link href={project.permalink} className="hover:text-primary">
            {project.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm">{project.description}</p>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" asChild>
                  {/* TODO: add live preview link */}
                  <a
                    href={project.permalink}
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
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" asChild>
                  {/* TODO: add github repo link */}
                  <a
                    href={project.permalink}
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
          </div>
          <Button variant="link" asChild>
            <Link href={project.permalink}>Read more</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
