'use client';

import React from 'react';
import {useLayoutEffect} from '@principium/use-layout-effect';
import {useStateCtx} from './Wrapper';

// Context to keep track of visible items in group
type StateCtxType = (itemId: string) => (isVisible: boolean) => void;
const OverviewGroupContext = React.createContext<StateCtxType | null>(null);

function OverviewGroup({children, title}: {children?: React.ReactNode; title: string}) {
  const groupId = React.useId();

  // Tell wrapper when group is visible
  const setIsVisible = React.useRef<((isVisible: boolean) => void) | null>(null);
  const subscribeGroup = useStateCtx();
  useLayoutEffect(() => {
    const setIsVisibleGroup = subscribeGroup(groupId);
    setIsVisible.current = setIsVisibleGroup;
    return () => {
      setIsVisibleGroup(false);
      setIsVisible.current = null;
    };
  }, []);

  // Keep track of items in group
  const [visibleItems, setVisibleItems] = React.useState(new Set<string>());
  const subscribeItem = React.useCallback((itemId: string) => {
    setVisibleItems((prev) => {
      const newItems = new Set(prev);
      newItems.add(itemId);
      return newItems;
    });
    return (isVisible: boolean) => {
      if (isVisible) {
        setVisibleItems((prev) => {
          const newItems = new Set(prev);
          newItems.add(itemId);
          return newItems;
        });
      } else {
        setVisibleItems((prev) => {
          const newItems = new Set(prev);
          newItems.delete(itemId);
          return newItems;
        });
      }
    };
  }, []);

  const isVisible = visibleItems.size > 0;

  return (
    <OverviewGroupContext.Provider value={subscribeItem}>
      <div className={isVisible ? '' : 'hidden'}>
        <div className="mb-4 flex items-center gap-2">
          <h2 className="text-background-950 text-lg font-semibold">{title}</h2>
          <span className="bg-border-100 border-border-300 flex h-6 w-6 items-center justify-center rounded-full border text-xs font-semibold">
            {visibleItems.size}
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
