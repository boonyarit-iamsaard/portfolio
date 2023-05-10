import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-t-slate-100">
      <div className="container grid justify-center">
        <div className="p-4">
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
      </div>
    </footer>
  );
}
