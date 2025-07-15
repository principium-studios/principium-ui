import { extendTailwindMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': ['text-tiny'],
    },
  },
});

function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export { cn };
