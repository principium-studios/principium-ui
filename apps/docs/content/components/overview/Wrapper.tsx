'use client';

import {Divider} from '@principium/react';
import React from 'react';
import {useFuzzy} from '@principium/use-fuzzy';

const FuzzyCtx = React.createContext<{fuzzyRegex: RegExp; query: string} | null>(null);

function OverviewWrapper({children}: {children?: React.ReactNode}) {
  const [query, setQuery] = React.useState('');

  const FuzzyCtxValue = React.useMemo(() => ({fuzzyRegex: useFuzzy(query), query}), [query]);

  return (
    <FuzzyCtx.Provider value={FuzzyCtxValue}>
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
        <div className="space-y-4">{children}</div>
        <Divider className="my-8" />
      </div>
    </FuzzyCtx.Provider>
  );
}

export function useFuzzyCtx() {
  const context = React.useContext(FuzzyCtx);
  if (!context) throw new Error('useFuzzyCtx must be used within an OverviewWrapper');
  return context;
}

export default OverviewWrapper;
