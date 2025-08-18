import {pv} from '../utils/pv';
import {dataFocusVisibleClasses} from '../utils';

/**
 * Toggle (Switch) wrapper **Tailwind Variants** component
 *
 * const {base, wrapper, thumb, thumbIcon, label, startContent, endContent} = toggle({...})
 *
 * @example
 * <button
 *   className={switchVariants.base()}
 *   role="switch"
 *   data-disabled={true/false}
 *   aria-checked={true/false}
 *   data-checked={true/false}
 *   aria-label="Label"
 * >
 *  <span className={switchVariants.wrapper()} aria-hidden="true">
 *    <span className={switchVariants.thumb()}>
 *  </span>
 * </button>
 */
const switchVariants = pv(
  {
    base: 'group/switch peer relative max-w-fit inline-flex items-center justify-start cursor-pointer touch-none select-none',
    wrapper: [
      'px-1',
      'relative',
      'inline-flex',
      'items-center',
      'justify-start',
      'shrink-0',
      'overflow-hidden',
      'bg-border',
      'rounded-full',
      // focus ring
      ...dataFocusVisibleClasses,
    ],
    thumb: [
      'z-10',
      'flex',
      'items-center',
      'justify-center',
      'bg-white',
      'shadow-sm',
      'rounded-full',
      'origin-right',
      'pointer-events-none',
    ],
  },
  {
    variants: {
      color: {
        default: {
          wrapper: [
            'group-data-[selected=true]/switch:bg-muted',
            'group-data-[selected=true]/switch:text-background',
          ],
        },
        primary: {
          wrapper: [
            'group-data-[selected=true]/switch:bg-primary',
            'group-data-[selected=true]/switch:text-primary-foreground',
          ],
        },
        secondary: {
          wrapper: [
            'group-data-[selected=true]/switch:bg-secondary',
            'group-data-[selected=true]/switch:text-secondary-foreground',
          ],
        },
        success: {
          wrapper: [
            'group-data-[selected=true]/switch:bg-success',
            'group-data-[selected=true]/switch:text-success-foreground',
          ],
        },
        warning: {
          wrapper: [
            'group-data-[selected=true]/switch:bg-warning',
            'group-data-[selected=true]/switch:text-warning-foreground',
          ],
        },
        danger: {
          wrapper: [
            'group-data-[selected=true]/switch:bg-danger',
            'group-data-[selected=true]/switch:text-danger-foreground',
          ],
        },
      },
      size: {
        sm: {
          wrapper: 'w-10 h-6',
          thumb: ['w-4 h-4 text-tiny', 'group-data-[selected=true]/switch:ms-4'],
        },
        md: {
          wrapper: 'w-12 h-7',
          thumb: ['w-5 h-5 text-sm', 'group-data-[selected=true]/switch:ms-5'],
        },
        lg: {
          wrapper: 'w-14 h-8',
          thumb: ['w-6 h-6 text-base', 'group-data-[selected=true]/switch:ms-6'],
        },
      },
      disabled: {
        true: {
          base: 'opacity-disabled pointer-events-none',
        },
      },
      disableAnimation: {
        true: {
          wrapper: 'transition-none',
          thumb: 'transition-none',
        },
        false: {
          wrapper: 'transition-background',
          thumb: 'transition-all',
        },
      },
    },
    defaultVariants: {
      color: 'primary',
      size: 'md',
      disabled: false,
      disableAnimation: false,
    },
    compoundVariants: [
      {
        disableAnimation: false,
        size: 'sm',
        class: {
          thumb: [
            'group-active/switch:w-5',
            'group-data-[selected=true]/switch:group-active/switch:ml-3',
          ],
        },
      },
      {
        disableAnimation: false,
        size: 'md',
        class: {
          thumb: [
            'group-active/switch:w-6',
            'group-data-[selected=true]/switch:group-active/switch:ml-4',
          ],
        },
      },
      {
        disableAnimation: false,
        size: 'lg',
        class: {
          thumb: [
            'group-active/switch:w-7',
            'group-data-[selected=true]/switch:group-active/switch:ml-5',
          ],
        },
      },
    ],
  },
);

export {switchVariants};
