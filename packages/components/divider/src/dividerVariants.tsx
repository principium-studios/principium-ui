import {cva} from 'class-variance-authority';

export const dividerVariants = cva('bg-border-300 shrink-0 border-none', {
  variants: {
    orientation: {
      horizontal: 'h-px w-full',
      vertical: 'h-full w-px',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});
