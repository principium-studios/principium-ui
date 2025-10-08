import {pv} from '../utils/pv';
import {dataFocusVisibleClasses} from '../utils';

/**
 *
 * @example
 * ```js
 * <div className={accordionVariants.base({...})}>
 *   <div className={accordionVariants.item())}>
 *      <h3 className={accordionVariants.trigger())}>
 *       Title
 *      <span className={accordionVariants.indicator())}>Indicator</span>
 *      </h3>
 *    <div className={accordionVariants.content())}>Content</div>
 *  </div>
 * </div>
 * ```
 */
const accordionVariants = pv(
  {
    base: 'px-2 divide-y divide-border',
    item: 'overflow-hidden',
    trigger: [
      'flex py-4 cursor-pointer w-full h-full gap-3 outline-solid outline-transparent items-center justify-between text-foreground text-base',
      // focus ring
      ...dataFocusVisibleClasses,
    ],
    indicator: 'text-border-400',
    content: '',
    context: '',
  },
  {
    variants: {
      variant: {
        light: {
          base: '',
          context: '',
        },
        shadow: {base: 'px-4 shadow-md rounded-md'},
        bordered: {base: 'px-4 border border-border rounded-md'},
        splitted: {
          base: 'flex flex-col gap-2 divide-y-0 divide-transparent',
          item: 'px-4 shadow-md rounded-md border border-border',
        },
      },
      fullWidth: {
        true: {
          item: 'w-full',
          trigger: 'w-full',
          indicator: 'w-full',
          content: 'w-full',
          context: '',
        },
      },
      isCompact: {
        true: {
          trigger: 'py-2',
          indicator: 'text-medium',
          content: 'py-1',
          context: '',
        },
      },
      disabled: {
        true: {
          item: 'opacity-disabled pointer-events-none',
        },
      },
      disableAnimation: {
        true: {
          content: 'hidden data-[open=true]:block',
          context: '',
        },
        false: {
          indicator: 'transition-transform',
          trigger: 'transition-opacity',
        },
      },
      disableIndicatorAnimation: {
        true: {
          indicator: 'transition-none',
        },
        false: {
          indicator:
            'rotate-0 data-[open=true]:-rotate-90 rtl:-rotate-180 rtl:data-[open=true]:-rotate-90',
        },
      },
    },
    defaultVariants: {
      size: 'md',
      radius: 'lg',
      disabled: false,
      hideIndicator: false,
      disableIndicatorAnimation: false,
      variant: 'light',
      fullWidth: true,
    },
  },
);

export {accordionVariants};
