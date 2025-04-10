'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { MenuIcon, TerminalSquareIcon } from 'lucide-react';

import { Button } from '@/common/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/common/components/ui/drawer';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/common/components/ui/navigation-menu';
import { cn } from '@/common/helpers/cn';

const navItems = [
  { href: '/projects', label: 'Projects' },
  { href: '/articles', label: 'Articles' },
  { href: '/about', label: 'About' },
];

type HeaderState = 'drawerOpen' | 'closedScrolled' | 'closedNotScrolled';

const headerStateClasses: Record<HeaderState, string> = {
  drawerOpen: 'border-transparent bg-transparent ring-transparent',
  closedScrolled:
    'backdrop-blur border-border bg-background/80 ring-border ring-1',
  closedNotScrolled: 'backdrop-blur bg-transparent',
};

function getHeaderClasses(
  shouldRenderDrawer: boolean,
  isScrolled: boolean,
  isMounted: boolean,
): string {
  if (shouldRenderDrawer) {
    return headerStateClasses.drawerOpen;
  }

  if (isMounted && isScrolled) {
    return headerStateClasses.closedScrolled;
  }

  return headerStateClasses.closedNotScrolled;
}

// TODO: this component is getting too complex, break it down and ensure its performance is optimal
// TODO: re-consider debounce, transition, and animation timing
export function AppHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [shouldRenderDrawer, setShouldRenderDrawer] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleDrawerOpenChange = (open: boolean) => {
    if (open) {
      setShouldRenderDrawer(true);
      requestAnimationFrame(() => setIsDrawerOpen(true));

      return;
    }

    setIsDrawerOpen(false);
    setTimeout(() => {
      setShouldRenderDrawer(false);
    }, 50);
  };

  useEffect(() => {
    if (isDrawerOpen || shouldRenderDrawer) {
      handleDrawerOpenChange(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const threshold = 16;
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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-10 w-full transition-colors duration-100 ease-in-out',
        getHeaderClasses(shouldRenderDrawer, isScrolled, isMounted),
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          <TerminalSquareIcon className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">Boonyarit I.</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu viewport={false} className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'bg-transparent',
                    )}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-1 items-center justify-end gap-2">
          {/* Mobile Drawer */}
          <Drawer
            direction="left"
            open={isDrawerOpen}
            onOpenChange={handleDrawerOpenChange}
            autoFocus={isDrawerOpen}
          >
            <DrawerTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </DrawerTrigger>
            {shouldRenderDrawer ? (
              <DrawerContent className="flex flex-col border-r-0 shadow-none">
                <DrawerHeader>
                  <DrawerTitle
                    className="flex items-center gap-2"
                    onClick={() => router.push('/')}
                  >
                    <TerminalSquareIcon className="h-6 w-6" />
                    <span className="inline-block font-bold">Boonyarit I.</span>
                  </DrawerTitle>
                  <DrawerDescription className="sr-only">
                    Navigate to different sections of the website.
                  </DrawerDescription>
                </DrawerHeader>
                <nav className="flex flex-1 flex-col gap-2 px-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground rounded-md px-3 py-2 text-sm font-medium"
                      onClick={() => handleDrawerOpenChange(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </DrawerContent>
            ) : null}
          </Drawer>
        </div>
      </div>
    </header>
  );
}
