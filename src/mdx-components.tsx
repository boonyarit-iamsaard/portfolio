import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-center text-4xl font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-center text-3xl font-bold">{children}</h2>
    ),
    ...components,
  };
}
