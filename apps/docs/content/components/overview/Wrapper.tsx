'use client';

import {Divider} from '@principium/react';
import React from 'react';
import {useFuzzy} from '@principium/use-fuzzy';

// Context that allows groups (children) to share their visibility state
type StateCtxType = (groupId: string) => (isVisible: boolean) => void;
const StateCtx = React.createContext<StateCtxType | null>(null);

// Query Context for controlling the search
const CmdkCtx = React.createContext<RegExp | null>(null);

function OverviewWrapper({children}: {children?: React.ReactNode}) {
  // Keep track of the query
  const [query, setQuery] = React.useState('');
  const cmdkCtxValue = React.useMemo(() => useFuzzy(query), [query]);

  // Keep track of visible groups
  const [visibleGroups, setVisibleGroups] = React.useState(new Set<string>());
  const subscribeGroup = React.useCallback((groupId: string) => {
    setVisibleGroups((prev) => {
      const newGroups = new Set(prev);
      newGroups.add(groupId);
      return newGroups;
    });
    return (isVisible: boolean) => {
      if (isVisible) {
        setVisibleGroups((prev) => {
          const newGroups = new Set(prev);
          newGroups.add(groupId);
          return newGroups;
        });
      } else {
        setVisibleGroups((prev) => {
          const newGroups = new Set(prev);
          newGroups.delete(groupId);
          return newGroups;
        });
      }
    };
  }, []);

  const isEmptyVisible = visibleGroups.size === 0;

  return (
    <CmdkCtx value={cmdkCtxValue}>
      <StateCtx value={subscribeGroup}>
        <div className="not-prose mt-3">
          <Divider />
          <input
            type="text"
            className="w-full py-4 outline-none"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Divider className="mb-8" />
          {children}
          {isEmptyVisible && <p className="text-foreground-500 text-center text-sm">Not Found</p>}
        </div>
      </StateCtx>
    </CmdkCtx>
  );
}

export function useQueryCtx() {
  const context = React.useContext(CmdkCtx);
  if (!context) throw new Error('useQueryCtx must be used within an OverviewWrapper');
  return context;
}

export function useStateCtx() {
  const context = React.useContext(StateCtx);
  if (!context) throw new Error('useStateCtx must be used within an OverviewWrapper');
  return context;
}

export default OverviewWrapper;
