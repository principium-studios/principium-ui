'use client';

import React from 'react';
import {useLayoutEffect} from '@principium/use-layout-effect';
import {useCmdkCtx} from './Wrapper';

interface OverviewGroupContextType {
  filteredChildren: Set<string>;
  subscribeItem: (item: string, title: string) => () => void;
}
const OverviewGroupContext = React.createContext<OverviewGroupContextType | null>(null);

function OverviewGroup({children, title}: {children?: React.ReactNode; title: string}) {
  const allItems = React.useRef(new Map<string, string>());
  const [filteredChildren, setFilteredChildren] = React.useState(new Set<string>());
  const {fuzzyRegex, query} = useCmdkCtx();

  const subscribeItem = React.useCallback((item: string, title: string) => {
    allItems.current.set(item, title);
    return () => {
      allItems.current.delete(item);
    };
  }, []);

  useLayoutEffect(() => {
    const filtered = Array.from(allItems.current.entries()).filter(([_, title]) =>
      fuzzyRegex.test(title),
    );
    setFilteredChildren(new Set(filtered.map(([item]) => item)));
  }, [fuzzyRegex]);

  const isVisible = React.useMemo(() => {
    return !(
      (query.length > 0 && filteredChildren.size === 0) ||
      React.Children.count(children) === 0
    );
  }, [query, filteredChildren, children]);

  return (
    <OverviewGroupContext.Provider value={{filteredChildren, subscribeItem}}>
      <div className={isVisible ? '' : 'hidden'}>
        <div className={isVisible ? 'mb-4 flex items-center gap-2' : 'hidden'}>
          <h2 className="text-background-950 text-lg font-semibold">{title}</h2>
          <span className="bg-border-100 border-border-300 flex h-6 w-6 items-center justify-center rounded-full border text-xs font-semibold">
            {Array.from(filteredChildren).length}
          </span>
        </div>
        <div
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gridAutoRows: 'max-content',
          }}
          className="mb-8 grid gap-2"
        >
          {children}
        </div>
      </div>
    </OverviewGroupContext.Provider>
  );
}

export function useOverviewGroup() {
  const context = React.useContext(OverviewGroupContext);
  if (!context) throw new Error('useOverviewGroup must be used within an OverviewGroup');
  return context;
}

export default OverviewGroup;
