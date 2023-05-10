import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed z-10 flex h-16 w-full items-center border-b border-b-slate-100 bg-white supports-backdrop-blur-md:bg-white/60 supports-backdrop-blur-md:backdrop-blur-md">
      <div className="container flex items-center justify-between">
        <Link
          href="/"
          className="block rounded p-1 text-2xl uppercase text-slate-500 outline-none ring-slate-200 transition-colors duration-300 ease-in-out hover:bg-slate-100 focus:ring-2"
        >
          <span className="sr-only">Home</span>
          🏠
        </Link>
      </div>
    </header>
  );
}
