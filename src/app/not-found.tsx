import Link from 'next/link';

import { FileQuestion } from 'lucide-react';

import { Button } from '@/common/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 text-center">
      <FileQuestion className="text-muted-foreground size-12" />
      <h1 className="text-2xl font-semibold tracking-tight">Page Not Found</h1>
      <p className="text-muted-foreground text-lg">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Button asChild>
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
}
