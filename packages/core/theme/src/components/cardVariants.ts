import {pv} from '../utils/pv';
import {dataFocusVisibleClasses} from '../utils';

/**
 * Card
 *
 * @example
 * <div className={cardVariants.base({...})}>
 *    <div className={cardVariants.header({...})}>
 *      <div className={cardVariants.title({...})}>Title</div>
 *      <div className={cardVariants.description({...})}>Description</div>
 *    </div>
 *    <div className={cardVariants.body({...})}>Body</div>
 *    <div className={cardVariants.footer({...})}>
 *      Footer
 *    </div>
 * </div>
 */
const cardVariants = pv(
  {
    base: [
      'shadow-border-300/50 border border-border-300 flex flex-col relative overflow-hidden text-background-950 box-border bg-background-100 transition-all',
      ...dataFocusVisibleClasses,
    ],
    header: 'flex p-3 z-10 w-full shrink-0 overflow-inherit color-inherit subpixel-antialiased',
    title: 'font-semibold leading-none',
    description: 'text-background-600 text-sm',
    body: 'relative flex w-full p-3 flex-auto flex-col break-words text-left overflow-y-auto subpixel-antialiased',
    footer: 'p-3 flex w-full items-center overflow-hidden color-inherit subpixel-antialiased',
  },
  {
    variants: {
      shadow: {
        none: {
          base: 'shadow-none',
        },
        sm: {
          base: 'shadow-small',
        },
        md: {
          base: 'shadow-medium',
        },
        lg: {
          base: 'shadow-large',
        },
      },
      radius: {
        none: {
          base: 'rounded-none',
        },
        sm: {
          base: 'rounded-sm',
        },
        md: {
          base: 'rounded-md',
        },
        lg: {
          base: 'rounded-lg',
        },
      },
      isHoverable: {
        true: {
          base: 'hover:bg-background-200 dark:hover:bg-background-800',
        },
      },
      isPressable: {
        true: {base: 'cursor-pointer'},
      },
      isBlurred: {
        true: {
          base: 'bg-background-100/80 dark:bg-background-100/20 backdrop-blur-md backdrop-saturate-150',
        },
      },
      isFooterBlurred: {
        true: {
          footer: 'bg-background-100/10 backdrop-blur backdrop-saturate-150',
        },
      },
      disabled: {
        true: {
          base: 'opacity-50 cursor-not-allowed',
        },
      },
    },
    compoundVariants: [
      {
        isPressable: true,
        class: {base: 'active:scale-97'},
      },
    ] as const,
    defaultVariants: {
      isHoverable: false,
      isPressable: false,
      disabled: false,
      isFooterBlurred: false,
      radius: 'md',
      shadow: 'sm',
    },
  },
);

export {cardVariants};
