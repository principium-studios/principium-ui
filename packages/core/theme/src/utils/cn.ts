import type {ClassValue} from 'clsx';

import {clsx} from 'clsx';

import {twMerge} from './twMerge';

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}
