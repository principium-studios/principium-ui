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
      className={`grid gap-2 transition-[grid-template-rows] duration-300 ${
        isOpen ? 'grid-rows-[max-content_1fr]' : 'grid-rows-[max-content_0fr]'
      }`}
    >
      <button onClick={() => setIsOpen(!isOpen)} className="flex cursor-pointer items-center gap-2">
        <CaretDownIcon
          size={16}
          className={`transition-transform duration-150 ${isOpen ? '' : '-rotate-90'}`}
        />
        {category.title}
      </button>
      <ul className="flex flex-col gap-2 overflow-hidden transition-colors">
        {category.routes?.map((route) => {
          const isSelected = pathName == `/docs/${category.key}/${route.key}`;
          return (
            <li
              key={route.key}
              className={`${isSelected ? 'text-primary-400 dark:text-primary-600' : 'text-background-600'} ml-8 flex items-center gap-6 transition-all active:opacity-75`}
            >
              {route.key !== 'overview' && (
                <span className="bg-background-600 h-1 w-1 shrink-0 rounded-full"></span>
              )}
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
    <aside className="sticky top-20 col-span-2 flex flex-col gap-2 overflow-y-auto text-nowrap">
      {routes.map((route) => (
        <Collapsible
          key={route.key}
          category={{
            ...route,
            routes:
              route.key === 'components'
                ? [
                    route.routes?.[0]!,
                    ...(route.routes?.slice(1).toSorted((a, b) => a.title?.localeCompare(b.title ?? '') ?? 0) ?? []),
                  ]
                : route.routes,
          }}
        />
      ))}
    </aside>
  );
};

export default DocsSidebar;
