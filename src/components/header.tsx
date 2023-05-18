import Link from 'next/link';
import { IconAppWindow, IconMenu2 } from '@tabler/icons-react';

export function Header() {
  return (
    <header className="fixed z-10 flex h-16 w-full items-center border-b border-b-slate-100 bg-white supports-backdrop-blur-md:bg-white/75 supports-backdrop-blur-md:backdrop-blur-md">
      <div className="container flex items-center justify-between">
        <Link
          href="/"
          className="block rounded p-2 outline-none ring-slate-200 transition-all duration-300 ease-in-out hover:bg-slate-100 focus:bg-slate-100 focus:ring-2 focus:ring-offset-2"
        >
          <span className="sr-only">Home</span>
          <IconAppWindow />
        </Link>
        <button
          type="button"
          className="rounded p-2 outline-none ring-slate-200 transition-all duration-300 ease-in-out hover:bg-slate-100 focus:bg-slate-100 focus:ring-2 focus:ring-offset-2"
        >
          <span className="sr-only">Menu</span>
          <IconMenu2 />
        </button>
      </div>
    </header>
  );
}
