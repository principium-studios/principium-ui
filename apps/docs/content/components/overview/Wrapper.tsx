'use client';

import {Divider} from '@principium/react';
import React from 'react';
import {useFuzzy} from '@principium/use-fuzzy';

interface CmdkCtxType {
  fuzzyRegex: RegExp;
  query: string;
  subscribeGroup: (groupId: string) => {
    setIsVisible: (isVisible: boolean) => void;
    unsubscribe: () => void;
  };
}
const CmdkCtx = React.createContext<CmdkCtxType | null>(null);

function OverviewWrapper({children}: {children?: React.ReactNode}) {
  const [query, setQuery] = React.useState('');

  const [groups, setGroups] = React.useState(new Set<string>());
  const subscribeGroup = React.useCallback((groupId: string) => {
    setGroups((prev) => {
      const newGroups = new Set(prev);
      newGroups.add(groupId);
      return newGroups;
    });
    return {
      setIsVisible: (isVisible: boolean) => {
        if (isVisible) {
          setGroups((prev) => {
            const newGroups = new Set(prev);
            newGroups.add(groupId);
            return newGroups;
          });
        } else {
          setGroups((prev) => {
            const newGroups = new Set(prev);
            newGroups.delete(groupId);
            return newGroups;
          });
        }
      },
      unsubscribe: () => {
        setGroups((prev) => {
          const newGroups = new Set(prev);
          newGroups.delete(groupId);
          return newGroups;
        });
      },
    };
  }, []);

  const cmdkCtxValue = React.useMemo(
    () => ({fuzzyRegex: useFuzzy(query), query, subscribeGroup}),
    [query],
  );

  return (
    <CmdkCtx value={cmdkCtxValue}>
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
        {groups.size === 0 && <p className="text-foreground-500 text-sm text-center">Not Found</p>}
      </div>
    </CmdkCtx>
  );
}

export function useCmdkCtx() {
  const context = React.useContext(CmdkCtx);
  if (!context) throw new Error('useCmdkCtx must be used within an OverviewWrapper');
  return context;
}

export default OverviewWrapper;
