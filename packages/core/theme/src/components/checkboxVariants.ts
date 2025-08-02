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
      'relative',
      'inline-flex',
      'items-center',
      'justify-center',
      'shrink-0',
      'overflow-hidden',
      // before
      "before:content-['']",
      'before:absolute',
      'before:inset-0',
      'before:border-solid',
      'before:border-2',
      'before:box-border',
      'before:border-default',
      // after
      "after:content-['']",
      'after:absolute',
      'after:inset-0',
      'after:scale-50',
      'after:opacity-0',
      'after:origin-center',
      'group-data-[selected=true]:after:scale-100',
      'group-data-[selected=true]:after:opacity-100',
      // hover
      'group-hover:before:bg-border-100',
      // focus ring
      ...dataFocusVisibleClasses,
    ],
    icon: 'z-10 w-4 h-3 opacity-0 group-data-[selected=true]:opacity-100 pointer-events-none',
  },
  {
    variants: {
      color: {
        default: {
          base: 'after:bg-border-100 after:text-background-950 text-background-950',
        },
        primary: {
          base: 'after:bg-primary-400 dark:after:bg-primary-600 after:text-primary-950 text-primary-950',
        },
        secondary: {
          base: 'after:bg-secondary-400 dark:after:bg-secondary-600 after:text-secondary-950 text-secondary-950',
        },
        success: {
          base: 'after:bg-success-400 dark:after:bg-success-600 after:text-success-950 text-success-950',
        },
        warning: {
          base: 'after:bg-warning-400 dark:after:bg-warning-600 after:text-warning-950 text-warning-950',
        },
        danger: {
          base: 'after:bg-danger-400 dark:after:bg-danger-600 after:text-danger-950 text-danger-950',
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
      isDisabled: {
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
            'group-active:scale-95',
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
      isDisabled: false,
    },
  },
);

export {checkboxVariants};
