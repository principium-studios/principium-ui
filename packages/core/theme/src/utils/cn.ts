import {clsx, type ClassValue} from 'clsx';
import {extendTailwindMerge} from 'tailwind-merge';
import {twMergeConfig} from './twMergeConfig';

const twMerge = extendTailwindMerge({extend: twMergeConfig});

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}
