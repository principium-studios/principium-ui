'use client';

import {Button, Divider} from '@principium/react';
import Link from 'next/link';
import {GithubLogoIcon} from '@phosphor-icons/react/dist/ssr';
import {usePathname} from 'next/navigation';

import {ThemeToggle} from './ThemeToggle';

const Navbar = () => {
  const pathname = usePathname();
  const isDocs = pathname.startsWith('/docs');
  const isComponents = pathname.startsWith('/components');
  const isBlog = pathname.startsWith('/blog');
  const isPlayground = pathname.startsWith('/playground');

  return (
    <nav className="sticky top-0 z-40 flex h-16 items-center backdrop-blur-xl backdrop-saturate-150">
      <header className="max-w-8xl relative mx-auto flex flex-1 items-center justify-between gap-4 px-6">
        {/* Link to Home Page  */}
        <div className="flex items-center gap-2 text-xl">
          <Link href="/">Principium UI</Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Links to Docs, Components, Blog, */}
          <ul className="flex items-center gap-4">
            <li>
              <Link className={isDocs ? 'text-primary' : ''} href="/docs/guide/introduction">
                Docs
              </Link>
            </li>
            <li>
              <Link className={isComponents ? 'text-primary' : ''} href="/components">
                Components
              </Link>
            </li>
            <li>
              <Link className={isBlog ? 'text-primary' : ''} href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className={isPlayground ? 'text-primary' : ''} href="/playground">
                Playground
              </Link>
            </li>
          </ul>
          <Divider className="h-7" orientation="vertical" />
          <div className="flex items-center gap-2">
            <Button className="border-1 rounded-full" size="icon" variant="bordered">
              <Link href="https://github.com/principium-studios/principium" target="_blank">
                <GithubLogoIcon size={16} />
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
