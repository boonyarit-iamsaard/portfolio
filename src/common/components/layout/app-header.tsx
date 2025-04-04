'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { TerminalSquareIcon } from 'lucide-react';

import { SocialLinks } from '@/common/components/social-links';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/common/components/ui/navigation-menu';
import { cn } from '@/common/helpers/cn';

export function AppHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const threshold = 64;
    let scrollTimeout: number | null = null;

    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = window.setTimeout(() => {
        setIsScrolled(window.scrollY > threshold);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full backdrop-blur transition-colors duration-300 ease-in-out',
        isScrolled
          ? 'border-border bg-background/80 ring-border ring-1'
          : 'bg-transparent',
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <TerminalSquareIcon className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              Boonyarit I.
            </span>
          </Link>

          {/* Navigation */}
          <NavigationMenu viewport={false} className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/projects" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'bg-transparent',
                    )}
                  >
                    Projects
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/articles" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'bg-transparent',
                    )}
                  >
                    Articles
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'bg-transparent',
                    )}
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Social Links */}
        <div className="flex flex-1 items-center justify-end">
          <SocialLinks />
        </div>
      </div>
    </header>
  );
}
