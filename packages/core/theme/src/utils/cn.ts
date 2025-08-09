import type {ClassValue} from 'clsx';

import {clsx} from 'clsx';

import {twMerge} from './twMerge';

function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export {cn};