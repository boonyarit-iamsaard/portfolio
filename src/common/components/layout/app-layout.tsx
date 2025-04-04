import type { ReactNode } from 'react';

import { AppFooter } from './app-footer';
import { AppHeader } from './app-header';

type AppLayoutProps = Readonly<{
  children: ReactNode;
}>;

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <AppHeader />
      <main className="flex-1">{children}</main>
      <AppFooter />
    </>
  );
}
