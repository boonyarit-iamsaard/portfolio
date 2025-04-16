import type { HTMLAttributes } from 'react';

import { cn } from '../helpers/cn';

export function PageHeader({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <section {...props}>
      <div className="container flex flex-col items-start gap-2 py-8 sm:py-12">
        {children}
      </div>
    </section>
  );
}

export function PageHeaderHeading({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        'text-2xl leading-tight font-bold tracking-tighter sm:text-4xl',
        className,
      )}
      {...props}
    />
  );
}

export function PageHeaderDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        'text-foreground line-clamp-1 text-base font-light text-balance sm:text-lg',
        className,
      )}
      {...props}
    />
  );
}
