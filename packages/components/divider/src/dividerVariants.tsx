import {cva} from 'class-variance-authority';

export const dividerVariants = cva('shrink-0 border-none bg-border-300', {
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
