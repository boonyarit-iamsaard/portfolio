import type { MDXComponents, MDXContent } from 'mdx/types';
import type { ComponentProps, ComponentType } from 'react';

import { useMemo } from 'react';
import * as runtime from 'react/jsx-runtime';

import { runSync } from '@mdx-js/mdx';

import { cn } from '@/common/helpers/cn';

type MDXProps = {
  content: string;
  components?: Record<string, ComponentType>;
};

const sharedComponents: MDXComponents = {
  h2: ({ className, ...props }: ComponentProps<'h2'>) => (
    <h2
      className={cn(
        'mt-6 mb-4 border-b pb-2 text-2xl font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: ComponentProps<'h3'>) => (
    <h3
      className={cn(
        'mt-5 mb-3 text-xl font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: ComponentProps<'p'>) => (
    <p
      className={cn('text-muted-foreground mb-4 leading-7', className)}
      {...props}
    />
  ),
  a: ({ className, ...props }: ComponentProps<'a'>) => (
    <a
      className={cn(
        'text-primary font-medium underline underline-offset-4',
        className,
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: ComponentProps<'ul'>) => (
    <ul
      className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }: ComponentProps<'ol'>) => (
    <ol
      className={cn('my-6 ml-6 list-decimal [&>li]:mt-2', className)}
      {...props}
    />
  ),
  li: ({ className, ...props }: ComponentProps<'li'>) => (
    <li className={cn('text-muted-foreground', className)} {...props} />
  ),
  blockquote: ({ className, ...props }: ComponentProps<'blockquote'>) => (
    <blockquote
      className={cn(
        'text-muted-foreground mt-6 border-l-2 pl-6 italic',
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: ComponentProps<'code'>) => (
    <code
      className={cn(
        'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm',
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: ComponentProps<'pre'>) => (
    <pre
      className={cn(
        'bg-muted mt-6 mb-4 overflow-x-auto rounded-lg border p-4 font-mono text-sm',
        className,
      )}
      {...props}
    />
  ),
};

function useMDXComponent(content: string): MDXContent {
  return useMemo(() => {
    const { default: Component } = runSync(content, {
      ...runtime,
      baseUrl: import.meta.url,
    });

    return Component;
  }, [content]);
}

export const MDX = ({ content, components }: MDXProps) => {
  const Component = useMDXComponent(content);

  return <Component components={{ ...sharedComponents, ...components }} />;
};
