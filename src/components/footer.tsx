import Link from 'next/link';

export function Footer() {
  return (
    <footer className="flex h-16 items-center border-t text-sm text-muted-foreground">
      <div className="container flex items-center justify-center">
        <p>
          Built&nbsp;by&nbsp;
          <Link
            href="https://github.com/boonyarit-iamsaard"
            target="_blank"
            className="font-medium underline underline-offset-4"
          >
            Boonyarit Iamsa-ard
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
