import {pv} from '../utils/pv';
import {dataFocusVisibleClasses} from '../utils';

/**
 *
 * @example
 * ```js
 * <div className={accordionVariants.wrapper({...})}>
 *   <div className={accordionVariants.base())}>
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
    wrapper: 'px-2 divide-y divide-border',
    base: '',
    trigger: [
      'flex py-4 w-full h-full gap-3 outline-solid outline-transparent items-center justify-between text-foreground text-base',
      // focus ring
      ...dataFocusVisibleClasses,
    ],
    indicator: 'text-border-400',
    content: 'py-2',
    context: '',
  },
  {
    variants: {
      variant: {
        light: {
          wrapper: '',
          context: '',
        },
        shadow: {wrapper: 'px-4 shadow-medium rounded-medium bg-content1'},
        bordered: {wrapper: 'px-4 border-medium border-divider rounded-medium'},
        splitted: {
          wrapper: 'flex flex-col gap-2',
          base: 'px-4 bg-content1 shadow-medium rounded-medium',
        },
      },
      fullWidth: {
        true: {
          base: 'w-full',
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
          base: 'opacity-disabled pointer-events-none',
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
