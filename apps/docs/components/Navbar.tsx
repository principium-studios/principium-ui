import {Button, Divider} from '@principium/react';
import Link from 'next/link';
import {GithubIcon, MoonIcon} from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 flex h-16 items-center backdrop-blur-xl backdrop-saturate-150">
      <header className="relative flex flex-1 items-center justify-between gap-4 px-6">
        {/* Link to Home Page  */}
        <div className="flex items-center gap-2 text-xl">
          <Link href="/">Principium UI</Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Links to Docs, Components, Blog, */}
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/docs">Docs</Link>
            </li>
            <li>
              <Link href="/components">Components</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/themes">Themes</Link>
            </li>
          </ul>
          <Divider className="h-7" orientation="vertical" />
          <div className="flex items-center gap-2">
            <Button className="border-1 rounded-full" size="icon" variant="bordered">
              <Link href="https://github.com/principium-studios/principium" target="_blank">
                <GithubIcon size={16} />
              </Link>
            </Button>
            <Button className="border-1 rounded-full" size="icon" variant="bordered">
              <MoonIcon size={16} />
            </Button>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
