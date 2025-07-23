'use client';

import {Divider} from '@principium/react';
import {createContext, useMemo, useState} from 'react';
import {useFuzzy} from '@principium/use-fuzzy';

interface OverviewContextType {
  fuzzyRegex: RegExp;
}
const OverviewContext = createContext<OverviewContextType>({fuzzyRegex: new RegExp('')});

export default function OverviewWrapper({children}: {children?: React.ReactNode}) {
  const [search, setSearch] = useState('');

  const value = useMemo(() => ({fuzzyRegex: useFuzzy(search)}), [search]);

  return (
    <OverviewContext.Provider value={value}>
      <div className="not-prose mt-3">
        <Divider />
        <input
          type="text"
          className="w-full py-4 outline-none"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Divider className='mb-8'/>
        <div className='space-y-4'>
        {children}

        </div>
      </div>
    </OverviewContext.Provider>
  );
}
