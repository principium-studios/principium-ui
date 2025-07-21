'use client';

import {CaretDownIcon} from '@phosphor-icons/react/dist/ssr';
import React from 'react';

export interface Route {
  key?: string;
  title?: string;
  keywords?: string;
  path?: string;
  routes?: Route[];
}

const Collapsible = ({route}: {route: Route}) => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div
      className={`grid gap-2 transition-[grid-template-rows] duration-300 ${
        isOpen ? 'grid-rows-[auto_1fr]' : 'grid-rows-[auto_0fr]'
      }`}
    >
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2">
        {route.title}{' '}
        <CaretDownIcon
          size={16}
          className={`transition-transform duration-300 ${isOpen ? '' : 'rotate-90'}`}
        />
      </button>
      <ul className={`flex flex-col gap-2 overflow-hidden`}>
        {route.routes?.map((route) => (
          <li key={route.key} className="text-background-600 ml-8">
            {route.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

const DocsSidebar = ({routes}: {routes: Route[]}) => {
  return (
    <aside className="sticky top-[64px] col-span-2 flex flex-col gap-2">
      {routes.map((route) => (
        <Collapsible key={route.key} route={route} />
      ))}
    </aside>
  );
};

export default DocsSidebar;
