import {dataFocusVisibleClasses} from '../utils';
import {pv} from '../utils/pv';

/**
 * Checkbox
 *
 * @example
 *  <button className={base()} aria-hidden="true" data-selected={selected}>
 *     <svg className={icon()}>
 *       // check icon
 *     </svg>
 *  </button>
 */
const checkboxVariants = pv(
  {
    base: [
      'group',
      'peer',
      'relative',
      'inline-flex',
      'items-center',
      'justify-center',
      'shrink-0',
      'overflow-hidden',
      'cursor-pointer',
      // before
      "before:content-['']",
      'before:absolute',
      'before:inset-0',
      'before:border-solid',
      'before:border-2',
      'before:box-border',
      'before:border-border',
      // after
      "after:content-['']",
      'after:absolute',
      'after:inset-0',
      'after:scale-50',
      'after:opacity-0',
      'after:origin-center',
      'data-[selected=true]:after:scale-100',
      'data-[selected=true]:after:opacity-100',
      // hover
      'hover:before:bg-border-100',
      // focus ring
      ...dataFocusVisibleClasses,
    ],
    icon: 'z-10 w-4 h-3 opacity-0 group-data-[selected=true]:opacity-100 pointer-events-none subpixel-antialiased',
  },
  {
    variants: {
      color: {
        default: {
          base: 'after:bg-border after:text-foreground text-foreground',
        },
        primary: {
          base: 'after:bg-primary after:text-primary-foreground text-primary-foreground',
        },
        secondary: {
          base: 'after:bg-secondary after:text-secondary-foreground text-secondary-foreground',
        },
        success: {
          base: 'after:bg-success after:text-success-foreground text-success-foreground',
        },
        warning: {
          base: 'after:bg-warning after:text-warning-foreground text-warning-foreground',
        },
        danger: {
          base: 'after:bg-danger after:text-danger-foreground text-danger-foreground',
        },
      },
      size: {
        sm: {
          base: ['w-4 h-4 me-2', 'rounded-sm', 'before:rounded-sm', 'after:rounded-sm'],
          icon: 'w-3 h-2',
        },
        md: {
          base: ['w-5 h-5 me-2', 'rounded-md', 'before:rounded-md', 'after:rounded-md'],
          icon: 'w-4 h-3',
        },
        lg: {
          base: ['w-6 h-6 me-2', 'rounded-lg', 'before:rounded-lg', 'after:rounded-lg'],
          icon: 'w-5 h-4',
        },
      },
      radius: {
        none: {
          base: 'rounded-none before:rounded-none after:rounded-none',
        },
        sm: {
          base: ['rounded-sm', 'before:rounded-sm', 'after:rounded-sm'],
        },
        md: {
          base: ['rounded-md', 'before:rounded-md', 'after:rounded-md'],
        },
        lg: {
          base: ['rounded-lg', 'before:rounded-lg', 'after:rounded-lg'],
        },
        full: {
          base: 'rounded-full before:rounded-full after:rounded-full',
        },
      },
      disabled: {
        true: {
          base: 'opacity-50 pointer-events-none',
        },
      },
      disableAnimation: {
        true: {
          base: 'transition-none',
          icon: 'transition-none',
        },
        false: {
          base: [
            'before:transition-colors',
            'group-data-[disabled=false]:group-active:scale-95',
            'transition-transform',
            'after:transition-transform-opacity',
            'after:ease-linear',
            'after:duration-200',
            'motion-reduce:transition-none',
          ],
          icon: 'transition-opacity motion-reduce:transition-none',
        },
      },
    },
    defaultVariants: {
      color: 'primary',
      size: 'md',
      disabled: false,
      disableAnimation: false,
    },
  },
);

export {checkboxVariants};
