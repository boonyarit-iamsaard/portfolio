import Link from 'next/link';

export function Footer() {
  return (
    <footer className="flex h-16 items-center border-t border-t-slate-100">
      <div className="container flex items-center justify-center">
        <p className="text-sm text-slate-500">
          Built&nbsp;by&nbsp;
          <Link
            href="https://github.com/boonyarit-iamsaard"
            target="_blank"
            className="font-semibold underline underline-offset-4"
          >
            Boonyarit Iamsa-ard
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
