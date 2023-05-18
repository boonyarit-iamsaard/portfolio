import Link from 'next/link';
import { IconAppWindow, IconMenu2 } from '@tabler/icons-react';

import { Button } from './ui/button';

const links = [
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Articles',
    href: '/articles',
  },
  {
    name: 'About',
    href: '/about',
  },
];

export function Header() {
  return (
    <header className="fixed z-10 flex h-16 w-full items-center border-b bg-background shadow-sm supports-backdrop-blur-md:bg-background/75 supports-backdrop-blur-md:backdrop-blur-md">
      <div className="container flex items-center justify-between">
        <Button asChild size="icon" variant="ghost">
          <Link href="/">
            <span className="sr-only">Home</span>
            <IconAppWindow />
          </Link>
        </Button>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-4">
            {links.map(link => (
              <li key={link.name}>
                <Button asChild variant="ghost">
                  <Link href={link.href}>{link.name}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <Button asChild size="icon" variant="ghost" className="md:hidden">
          <span>
            <span className="sr-only">Home</span>
            <IconMenu2 />
          </span>
        </Button>
      </div>
    </header>
  );
}
