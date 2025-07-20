import {pv} from '../utils/pv';

/**
 * Divider **Tailwind Variants** component
 *
 * @example
 * <hr className={cn(dividerVariants({...}))} />
 */
const dividerVariants = pv('bg-border-300 shrink-0 border-none', {
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

export {dividerVariants};
