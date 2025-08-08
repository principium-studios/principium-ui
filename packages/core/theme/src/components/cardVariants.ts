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
 *    <div className={cardVariants.content({...})}>Content</div>
 *    <div className={cardVariants.footer({...})}>
 *      Footer
 *    </div>
 * </div>
 */
const cardVariants = pv(
  {
    base: [
      'shadow-border-200/50 border border-border flex flex-col relative overflow-hidden text-foreground box-border bg-card transition-all',
      ...dataFocusVisibleClasses,
    ],
    header: 'flex flex-col gap-1.5 p-3 z-10 w-full shrink-0 overflow-inherit color-inherit subpixel-antialiased',
    content: 'relative p-3 flex-col break-words subpixel-antialiased',
    footer: 'p-3 flex w-full items-center overflow-hidden color-inherit subpixel-antialiased',
    title: 'font-semibold leading-none',
    description: 'text-muted text-sm',
  },
  {
    variants: {
      shadow: {
        none: {
          base: 'shadow-none',
        },
        sm: {
          base: 'shadow-sm',
        },
        md: {
          base: 'shadow-md',
        },
        lg: {
          base: 'shadow-lg',
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
          base: 'hover:bg-card-100',
        },
      },
      isPressable: {
        true: {base: 'cursor-pointer'},
      },
      isBlurred: {
        true: {
          base: 'bg-card-100/80 backdrop-blur-md backdrop-saturate-150',
        },
      },
      isFooterBlurred: {
        true: {
          footer: 'bg-card-100/10 backdrop-blur backdrop-saturate-150',
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
