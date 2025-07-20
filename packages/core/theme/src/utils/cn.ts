import type {ClassValue} from 'clsx';

import {clsx} from 'clsx';

import {twMerge} from './customTwMerge';

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}
