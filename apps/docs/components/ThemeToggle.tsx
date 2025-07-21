'use client';

import React from 'react';
import {Button} from '@principium/react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@phosphor-icons/react';

export const ThemeToggle = () => {
  const [mounted, setMounted] = React.useState(false);
  const {theme, setTheme} = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button className="border-1 rounded-full" size="icon" variant="bordered" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <MoonIcon size={16} /> : <SunIcon size={16} />}
    </Button>
  );
};
