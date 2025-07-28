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
      'bg-border-100',
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
      'hover:[&:not([data-selected=true])]:opacity-90',
      'active:[&:not([data-selected=true])]:opacity-50',
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
        default: {},
        primary: {},
        secondary: {},
        success: {},
        warning: {},
        danger: {},
      },
      size: {
        sm: {
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
      },
      isDisabled: {
        true: {
          tabList: 'opacity-50 pointer-events-none',
        },
      },
      disableAnimation: {
        true: {
          tab: 'transition-none',
          tabContent: 'transition-none',
        },
      },
    },
    compoundVariants: [
      {
        variant: 'bordered',
        class: {
          cursor: ['bg-background-100', 'shadow-sm'],
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
          cursor: ['bg-background-200', 'shadow-sm'],
          tabContent: 'group-data-[selected=true]:text-background-950',
        },
      },
      {
        variant: ['solid', 'bordered', 'light'],
        color: 'primary',
        class: {
          cursor: colorVariants.solid.primary,
          tabContent: 'group-data-[selected=true]:text-primary-950',
        },
      },
      {
        variant: ['solid', 'bordered', 'light'],
        color: 'secondary',
        class: {
          cursor: colorVariants.solid.secondary,
          tabContent: 'group-data-[selected=true]:text-secondary-950',
        },
      },
      {
        variant: ['solid', 'bordered', 'light'],
        color: 'success',
        class: {
          cursor: colorVariants.solid.success,
          tabContent: 'group-data-[selected=true]:text-success-950',
        },
      },
      {
        variant: ['solid', 'bordered', 'light'],
        color: 'warning',
        class: {
          cursor: colorVariants.solid.warning,
          tabContent: 'group-data-[selected=true]:text-warning-950',
        },
      },
      {
        variant: ['solid', 'bordered', 'light'],
        color: 'danger',
        class: {
          cursor: colorVariants.solid.danger,
          tabContent: 'group-data-[selected=true]:text-danger-950',
        },
      },
      // underlined && color
      {
        variant: 'underlined',
        color: 'default',
        class: {
          cursor: 'bg-background-950',
          tabContent: 'group-data-[selected=true]:text-background-950',
        },
      },
      {
        variant: 'underlined',
        color: 'primary',
        class: {
          cursor: 'bg-primary-400 dark:bg-primary-600',
          tabContent:
            'group-data-[selected=true]:text-primary-400 dark:group-data-[selected=true]:text-primary-600',
        },
      },
      {
        variant: 'underlined',
        color: 'secondary',
        class: {
          cursor: 'bg-secondary-400 dark:bg-secondary-600',
          tabContent:
            'group-data-[selected=true]:text-secondary-400 dark:group-data-[selected=true]:text-secondary-600',
        },
      },
      {
        variant: 'underlined',
        color: 'success',
        class: {
          cursor: 'bg-success-400 dark:bg-success-600',
          tabContent:
            'group-data-[selected=true]:text-success-400 dark:group-data-[selected=true]:text-success-600',
        },
      },
      {
        variant: 'underlined',
        color: 'warning',
        class: {
          cursor: 'bg-warning-400 dark:bg-warning-600',
          tabContent:
            'group-data-[selected=true]:text-warning-400 dark:group-data-[selected=true]:text-warning-600',
        },
      },
      {
        variant: 'underlined',
        color: 'danger',
        class: {
          cursor: 'bg-danger-400 dark:bg-danger-600',
          tabContent:
            'group-data-[selected=true]:text-danger-400 dark:group-data-[selected=true]:text-danger-600',
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
          tab: 'data-[selected=true]:bg-border-50 data-[selected=true]:text-background-950',
        },
      },
      {
        disableAnimation: true,
        color: 'primary',
        variant: ['solid', 'bordered', 'light'],
        class: {
          tab: 'data-[selected=true]:bg-primary data-[selected=true]:text-primary-950',
        },
      },
      {
        disableAnimation: true,
        color: 'secondary',
        variant: ['solid', 'bordered', 'light'],
        class: {
          tab: 'data-[selected=true]:bg-secondary data-[selected=true]:text-secondary-950',
        },
      },
      {
        disableAnimation: true,
        color: 'success',
        variant: ['solid', 'bordered', 'light'],
        class: {
          tab: 'data-[selected=true]:bg-success data-[selected=true]:text-success-950',
        },
      },
      {
        disableAnimation: true,
        color: 'warning',
        variant: ['solid', 'bordered', 'light'],
        class: {
          tab: 'data-[selected=true]:bg-warning data-[selected=true]:text-warning-950',
        },
      },
      {
        disableAnimation: true,
        color: 'danger',
        variant: ['solid', 'bordered', 'light'],
        class: {
          tab: 'data-[selected=true]:bg-danger data-[selected=true]:text-danger-950',
        },
      },
      // disableAnimation && color && underlined
      {
        disableAnimation: true,
        color: 'default',
        variant: 'underlined',
        class: {
          tab: 'data-[selected=true]:after:bg-background-950',
        },
      },
      {
        disableAnimation: true,
        color: 'primary',
        variant: 'underlined',
        class: {
          tab: 'data-[selected=true]:after:bg-primary-400 dark:data-[selected=true]:after:bg-primary-600',
        },
      },
      {
        disableAnimation: true,
        color: 'secondary',
        variant: 'underlined',
        class: {
          tab: 'data-[selected=true]:after:bg-secondary-400 dark:data-[selected=true]:after:bg-secondary-600',
        },
      },
      {
        disableAnimation: true,
        color: 'success',
        variant: 'underlined',
        class: {
          tab: 'data-[selected=true]:after:bg-success-400 dark:data-[selected=true]:after:bg-success-600',
        },
      },
      {
        disableAnimation: true,
        color: 'warning',
        variant: 'underlined',
        class: {
          tab: 'data-[selected=true]:after:bg-warning-400 dark:data-[selected=true]:after:bg-warning-600',
        },
      },
      {
        disableAnimation: true,
        color: 'danger',
        variant: 'underlined',
        class: {
          tab: 'data-[selected=true]:after:bg-danger-400 dark:data-[selected=true]:after:bg-danger-600',
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
    ],
    defaultVariants: {
      color: 'default',
      variant: 'solid',
      size: 'md',
      fullWidth: false,
      isDisabled: false,
    },
  },
);

export {tabsVariants};
