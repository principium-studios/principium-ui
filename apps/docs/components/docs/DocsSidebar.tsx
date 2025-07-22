'use client';

import {Route} from '@/types';
import {CaretDownIcon} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import React from 'react';

const Collapsible = ({category}: {category: Route}) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const pathName = usePathname();

  return (
    <div
      className={`grid gap-2 transition-[grid-template-rows] duration-150 ${
        isOpen ? 'grid-rows-[auto_1fr]' : 'grid-rows-[auto_0fr]'
      }`}
    >
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 cursor-pointer">
        <CaretDownIcon
          size={16}
          className={`transition-transform duration-150 ${isOpen ? '' : '-rotate-90'}`}
        />
        {category.title}
      </button>
      <ul className={`flex flex-col gap-2 overflow-hidden`}>
        {category.routes?.map((route) => {
          const isSelected = pathName == `/docs/${category.key}/${route.key}`;
          return (
            <li key={route.key} className={`${isSelected ? 'text-background-950' : 'text-background-600'} ml-8 flex items-center gap-6 active:opacity-75 transition-all`}>
              {route.key !== 'overview' && <span className="bg-background-600 h-1 w-1 shrink-0 rounded-full"></span>}
              <Link href={`/docs/${category.key}/${route.key}`}>{route.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const DocsSidebar = ({routes}: {routes: Route[]}) => {
  return (
    <aside className="sticky top-[64px] col-span-2 flex flex-col gap-2 text-nowrap overflow-y-auto">
      {routes.map((route) => (
        <Collapsible key={route.key} category={route} />
      ))}
    </aside>
  );
};

export default DocsSidebar;
