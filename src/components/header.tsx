import Link from 'next/link';
import { IconAppWindow, IconMenu2 } from '@tabler/icons-react';

export function Header() {
  return (
    <header className="fixed z-10 flex h-16 w-full items-center border-b bg-background shadow-sm supports-backdrop-blur-md:bg-background/75 supports-backdrop-blur-md:backdrop-blur-md">
      <div className="container flex items-center justify-between">
        <Link
          href="/"
          className="block rounded p-2 outline-none ring-secondary transition-all duration-300 ease-in-out hover:bg-secondary focus:bg-secondary focus:ring-2 focus:ring-offset-2"
        >
          <span className="sr-only">Home</span>
          <IconAppWindow />
        </Link>
        <button
          type="button"
          className="rounded p-2 outline-none ring-secondary transition-all duration-300 ease-in-out hover:bg-secondary focus:bg-secondary focus:ring-2 focus:ring-offset-2"
        >
          <span className="sr-only">Menu</span>
          <IconMenu2 />
        </button>
      </div>
    </header>
  );
}
