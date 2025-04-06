import '@/core/styles/globals.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { fontSans } from '@/core/styles/fonts';
import { AppLayout } from '@/common/components/layout/app-layout';
import { TooltipProvider } from '@/common/components/ui/tooltip';
import { cn } from '@/common/helpers/cn';

export const metadata: Metadata = {
  title: 'Boonyarit I.',
  description:
    'A Full Stack Developer with a passion for building scalable and maintainable web applications.',
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          'bg-background min-h-svh font-sans antialiased',
          fontSans.variable,
        )}
      >
        <div className="bg-background relative flex min-h-svh flex-col">
          <TooltipProvider>
            <AppLayout>{children}</AppLayout>
          </TooltipProvider>
        </div>
      </body>
    </html>
  );
}
