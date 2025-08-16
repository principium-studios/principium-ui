import {pv} from '../utils/pv';

const skeletonVariants = pv(
  [
    'group',
    'relative',
    'overflow-hidden',
    'bg-border',
    'pointer-events-none',
    // before
    'before:opacity-100',
    'before:absolute',
    'before:inset-0',
    'before:-translate-x-full',
    'before:animate-shimmer',
    'before:border-t',
    'before:border-border-300/30',
    'before:bg-gradient-to-r',
    'before:from-transparent',
    'before:via-border-100',
    'dark:before:via-border-300',
    'before:to-transparent',
    //after
    'after:opacity-100',
    'after:absolute',
    'after:inset-0',
    'after:-z-10',
    'after:bg-background-100',
    "dark:after:bg-background-200"
  ],
  {
    variants: {
      disableAnimation: {
        true: 'before:animate-none before:transition-none after:transition-none',
        false: 'transition-background duration-300',
      },
    },
  },
);

export {skeletonVariants};
