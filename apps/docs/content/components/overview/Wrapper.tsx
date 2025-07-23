'use client';

import {Divider} from '@principium/react';
import React from 'react';
import {useFuzzy} from '@principium/use-fuzzy';

interface CmdkCtxType {
  fuzzyRegex: RegExp;
  query: string;
}
const CmdkCtx = React.createContext<CmdkCtxType | null>(null);

function OverviewWrapper({children}: {children?: React.ReactNode}) {
  const [query, setQuery] = React.useState('');

  const cmdkCtxValue = React.useMemo(() => ({fuzzyRegex: useFuzzy(query), query}), [query]);

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
