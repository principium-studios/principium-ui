'use client';

import React from 'react';
import {ThemeProvider} from 'next-themes';

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <ThemeProvider   
      disableTransitionOnChange
      themes={['light', 'dark']}
      attribute="class"
      defaultTheme="dark"
    >
      {children}
    </ThemeProvider>
  );
}
