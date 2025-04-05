import type { MDXComponents, MDXContent } from 'mdx/types';
import type { ComponentType } from 'react';

import * as runtime from 'react/jsx-runtime';

import { runSync } from '@mdx-js/mdx';

type MDXProps = {
  content: string;
  components?: Record<string, ComponentType>;
};

const sharedComponents: MDXComponents = {
  h2: ({ children }) => <h2 className="font-bold">{children}</h2>,
  h3: ({ children }) => <h3 className="font-bold">{children}</h3>,
  p: ({ children }) => <p className="text-muted-foreground">{children}</p>,
};

function useMDXComponent(content: string): MDXContent {
  const { default: Component } = runSync(content, { ...runtime });

  return Component;
}

export const MDX = ({ content, components }: MDXProps) => {
  const Component = useMDXComponent(content);

  return <Component components={{ ...sharedComponents, ...components }} />;
};
