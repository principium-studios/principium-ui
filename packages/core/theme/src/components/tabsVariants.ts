import {colorVariants, dataFocusVisibleClasses} from '../utils';
import {pv} from '../utils/pv';

/**
 *
 * @example
 * ```js
 *
 *  <div className={tabs.tabList({...})}>
 *    <button className={tabs.tab({...})} data-selected="boolean">
 *      <span className={tabs.cursor({...})} />
 *      <span className={tabs.tabContent({...})}>
 *        Tab 1
 *      </span>
 *    </button>
 *    <button className={tabs.tab({...})} data-selected="boolean">
 *      <span className={tabs.tabContent({...})}>
 *        Tab 2
 *      </span>
 *    </button>
 *    <button className={tabs.tab({...})} data-selected="boolean">
 *      <span className={tabs.tabContent({...})}>
 *        Tab 3
 *      </span>
 *    </button>
 *  </div>
 *  <div className={tabs.panel({...})}>Selected panel</div>
 * ```
 */
const tabsVariants = pv(
  {
    context: [],
    tabList: [
      'inline-flex',
      'p-1',
      'h-fit',
      'gap-2',
      'items-center',
      'flex-nowrap',
      'overflow-x-scroll',
      '[&::-webkit-scrollbar]:hidden',
      '[-ms-overflow-style:none]',
      '[scrollbar-width:none]',
      'bg-border',
      'data-[disabled=true]:opacity-50',
      'data-[disabled=true]:pointer-events-none',
    ],
    tab: [
      'z-0',
      'w-full',
      'px-3',
      'py-1',
      'flex',
      'group',
      'relative',
      'justify-center',
      'items-center',
      'outline-hidden',
      'cursor-pointer',
      'transition-opacity',
      'data-[disabled=true]:cursor-not-allowed',
      'data-[disabled=true]:opacity-50',
      'hover:[&:not([data-selected=true]):not([data-disabled=true])]:opacity-90',
      'active:[&:not([data-selected=true]):not([data-disabled=true])]:opacity-50',
      // focus ring
      ...dataFocusVisibleClasses,
    ],
    tabContent: [
      'relative',
      'z-10',
      'text-inherit',
      'whitespace-nowrap',
      'transition-colors',
      'text-background-600',
      'group-data-[selected=true]:text-background-950',
    ],
    cursor: ['absolute', 'z-0'],
    panel: [
      'outline-hidden',
      // focus ring
      ...dataFocusVisibleClasses,
    ],
  },
  {
    variants: {
      variant: {
        solid: {
          context: [],
          cursor: 'inset-0',
        },
        light: {
          tabList: 'bg-transparent dark:bg-transparent',
          cursor: 'inset-0',
        },
        underlined: {
          tabList: 'bg-transparent dark:bg-transparent',
          cursor: 'h-[2px] w-[80%] bottom-0 shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]',
        },
        bordered: {
          tabList: 'bg-transparent dark:bg-transparent border-2 border-border-200 shadow-xs',
          cursor: 'inset-0',
        },
      },
      color: {
        default: {
          context: [],
        },
        primary: {},
        secondary: {},
        success: {},
        warning: {},
        danger: {},
      },
      size: {
        sm: {
          context: [],
          tabList: 'rounded-md',
          tab: 'h-7 text-tiny rounded-sm',
          cursor: 'rounded-sm',
        },
        md: {
          tabList: 'rounded-md',
          tab: 'h-8 text-sm rounded-sm',
          cursor: 'rounded-sm',
        },
        lg: {
          tabList: 'rounded-lg',
          tab: 'h-9 text-sm rounded-sm',
          cursor: 'rounded-sm',
        },
      },
      radius: {
        none: {
          context: [],
          tabList: 'rounded-none',
          tab: 'rounded-none',
          cursor: 'rounded-none',
        },
        sm: {
          tabList: 'rounded-md',
          tab: 'rounded-sm',
          cursor: 'rounded-sm',
        },
        md: {
          tabList: 'rounded-md',
          tab: 'rounded-sm',
          cursor: 'rounded-sm',
        },
        lg: {
          tabList: 'rounded-lg',
          tab: 'rounded-lg',
          cursor: 'rounded-lg',
        },
        full: {
          tabList: 'rounded-full',
          tab: 'rounded-full',
          cursor: 'rounded-full',
        },
      },
      fullWidth: {
        true: {
          tabList: 'w-full',
        },
        false: {
          tabList: 'w-fit',
        },
      },
      disableAnimation: {
        true: {
          context: [],
          tab: 'transition-none',
          tabContent: 'transition-none',
        },
      },
    },
    compoundVariants: [
      {
        variant: 'bordered',
        class: {
          cursor: ['bg-border-100', 'shadow-sm'],
        },
      },
      /**
       * Variants & Colors
       */
      // solid + bordered + light && color
      {
        variant: ['solid', 'light'],
        color: 'default',
        class: {
          cursor: ['bg-background dark:bg-background-300', 'shadow-sm'],
          tabContent: 'group-data-[selected=true]:text-foreground',
        },
      },
      {
        variant: ['solid', 'bordered', 'light'],
        color: 'primary',
        class: {
          cursor: colorVariants.solid.primary,
          tabContent: 'group-data-[selected=true]:text-primary-foreground',
        },
      },
      {
        variant: ['solid', 'bordered', 'light'],
        color: 'secondary',
        class: {
          cursor: colorVariants.solid.secondary,
          tabContent: 'group-data-[selected=true]:text-secondary-foreground',
        },
      },
      {
        variant: ['solid', 'bordered', 'light'],
        color: 'success',
        class: {
          cursor: colorVariants.solid.success,
          tabContent: 'group-data-[selected=true]:text-success-foreground',
        },
      },
      {
        variant: ['solid', 'bordered', 'light'],
        color: 'warning',
        class: {
          cursor: colorVariants.solid.warning,
          tabContent: 'group-data-[selected=true]:text-warning-foreground',
        },
      },
      {
        variant: ['solid', 'bordered', 'light'],
        color: 'danger',
        class: {
          cursor: colorVariants.solid.danger,
          tabContent: 'group-data-[selected=true]:text-danger-foreground',
        },
      },
      // underlined && color
      {
        variant: 'underlined',
        color: 'default',
        class: {
          cursor: 'bg-foreground',
          tabContent: 'group-data-[selected=true]:text-foreground',
        },
      },
      {
        variant: 'underlined',
        color: 'primary',
        class: {
          cursor: 'bg-primary',
          tabContent:
            'group-data-[selected=true]:text-primary',
        },
      },
      {
        variant: 'underlined',
        color: 'secondary',
        class: {
          cursor: 'bg-secondary',
          tabContent:
            'group-data-[selected=true]:text-secondary',
        },
      },
      {
        variant: 'underlined',
        color: 'success',
        class: {
          cursor: 'bg-success',
          tabContent:
            'group-data-[selected=true]:text-success',
        },
      },
      {
        variant: 'underlined',
        color: 'warning',
        class: {
          cursor: 'bg-warning',
          tabContent:
            'group-data-[selected=true]:text-warning',
        },
      },
      {
        variant: 'underlined',
        color: 'danger',
        class: {
          cursor: 'bg-danger',
          tabContent:
            'group-data-[selected=true]:text-danger',
        },
      },
      /**
       * Disable animation & Variants & Colors
       */
      // disabledAnimation && underlined
      {
        disableAnimation: true,
        variant: 'underlined',
        class: {
          tab: [
            "after:content-['']",
            'after:absolute',
            'after:bottom-0',
            'after:h-[2px]',
            'after:w-[80%]',
            'after:opacity-0',
            'after:shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]',
            'data-[selected=true]:after:opacity-100',
          ],
        },
      },

      // disableAnimation && color && solid/bordered
      {
        disableAnimation: true,
        color: 'default',
        variant: ['solid', 'bordered', 'light'],
        class: {
          tab: 'data-[selected=true]:bg-border-50 data-[selected=true]:text-foreground',
        },
      },
      {
        disableAnimation: true,
        color: 'primary',
        variant: ['solid', 'bordered', 'light'],
        class: {
          tab: 'data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground',
        },
      },
      {
        disableAnimation: true,
        color: 'secondary',
        variant: ['solid', 'bordered', 'light'],
        class: {
          tab: 'data-[selected=true]:bg-secondary data-[selected=true]:text-secondary-foreground',
        },
      },
      {
        disableAnimation: true,
        color: 'success',
        variant: ['solid', 'bordered', 'light'],
        class: {
          tab: 'data-[selected=true]:bg-success data-[selected=true]:text-success-foreground',
        },
      },
      {
        disableAnimation: true,
        color: 'warning',
        variant: ['solid', 'bordered', 'light'],
        class: {
          tab: 'data-[selected=true]:bg-warning data-[selected=true]:text-warning-foreground',
        },
      },
      {
        disableAnimation: true,
        color: 'danger',
        variant: ['solid', 'bordered', 'light'],
        class: {
          tab: 'data-[selected=true]:bg-danger data-[selected=true]:text-danger-foreground',
        },
      },
      // disableAnimation && color && underlined
      {
        disableAnimation: true,
        color: 'default',
        variant: 'underlined',
        class: {
          tab: 'data-[selected=true]:after:bg-foreground',
        },
      },
      {
        disableAnimation: true,
        color: 'primary',
        variant: 'underlined',
        class: {
          tab: 'data-[selected=true]:after:bg-primary',
        },
      },
      {
        disableAnimation: true,
        color: 'secondary',
        variant: 'underlined',
        class: {
          tab: 'data-[selected=true]:after:bg-secondary',
        },
      },
      {
        disableAnimation: true,
        color: 'success',
        variant: 'underlined',
        class: {
          tab: 'data-[selected=true]:after:bg-success',
        },
      },
      {
        disableAnimation: true,
        color: 'warning',
        variant: 'underlined',
        class: {
          tab: 'data-[selected=true]:after:bg-warning',
        },
      },
      {
        disableAnimation: true,
        color: 'danger',
        variant: 'underlined',
        class: {
          tab: 'data-[selected=true]:after:bg-danger',
        },
      },
      // rounded none - underlined
      {
        variant: 'underlined',
        class: {
          tab: 'rounded-none',
          tabList: 'rounded-none',
          cursor: 'rounded-none',
        },
      },
    ] as const,
    defaultVariants: {
      color: 'default',
      variant: 'solid',
      size: 'md',
      fullWidth: false,
    },
  },
);

export {tabsVariants};
