import type {VariantProps} from '@principium/variants';

import {pv, colorVariants} from '../utils';

/**
 * Alert wrapper **Tailwind Variants** component
 *
 * @example
 * ```js
 *
 * <div className={cn(alertVariants.base({...}))}>
 *    <div className={cn(alertVariants.iconWrapper({...}))}>
 *       <svg className={cn(alertVariants.alertIcon({...}))}></svg>
 *    </div>
 *    <div className={cn(alertVariants.title({...}))}>Title</div>
 *    <div className={cn(alertVariants.description({...}))}>Description</div>
 * </div>
 * ```
 */
const alertVariants = pv(
  {
    base: 'relative grid grid-cols-[0_1fr] grid-rows-[1fr] rounded-lg px-4 py-3 has-[svg]:grid-cols-[auto_1fr] has-[svg]:gap-x-3',
    title: 'col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight',
    description:
      'text-muted-600 col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed',
    iconWrapper: 'flex-none relative w-9 h-9 rounded-full grid place-items-center',
    alertIcon: 'fill-current w-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  },
  {
    variants: {
      color: {
        default: {},
        primary: {},
        secondary: {},
        success: {},
        warning: {},
        danger: {},
      },
      variant: {
        solid: {},
        flat: {},
        faded: {
          base: 'border-1',
        },
        bordered: {
          base: 'border-1 bg-transparent',
        },
      },
      hideIconWrapper: {
        true: {
          base: 'gap-x-0',
          iconWrapper: '!bg-transparent !shadow-none !border-none',
        },
      },
    },
    defaultVariants: {
      color: 'default',
      variant: 'flat',
      hideIconWrapper: false,
    },
    compoundVariants: [
      // solid / color
      {
        variant: 'solid',
        color: 'default',
        class: {
          base: colorVariants.solid.default,
          alertIcon: 'stroke-border-300',
        },
      },
      {
        variant: 'solid',
        color: 'primary',
        class: {
          base: colorVariants.solid.primary,
          alertIcon: 'stroke-primary-400 dark:stroke-primary-600',
        },
      },
      {
        variant: 'solid',
        color: 'secondary',
        class: {
          base: colorVariants.solid.secondary,
          alertIcon: 'stroke-secondary-400 dark:stroke-secondary-600',
        },
      },
      {
        variant: 'solid',
        color: 'success',
        class: {
          base: colorVariants.solid.success,
          alertIcon: 'stroke-success-400 dark:stroke-success-600',
        },
      },
      {
        variant: 'solid',
        color: 'warning',
        class: {
          base: colorVariants.solid.warning,
          alertIcon: 'stroke-warning-400 dark:stroke-warning-600',
        },
      },
      {
        variant: 'solid',
        color: 'danger',
        class: {
          base: colorVariants.solid.danger,
          alertIcon: 'stroke-danger-400 dark:stroke-danger-600',
        },
      },
      // flat & faded / color
      {
        variant: ['flat', 'faded'],
        color: 'default',
        class: {
          base: [
            colorVariants.flat.default,
            'bg-background-100 dark:bg-background-50/50',
            'text-background-950',
          ],
          description: 'text-background-600',
          iconWrapper: 'bg-border-50 dark:bg-border-100 border-border-200',
          alertIcon: 'stroke-border-100 dark:stroke-border-200',
        },
      },
      {
        variant: ['flat', 'faded'],
        color: 'primary',
        class: {
          base: [colorVariants.flat.primary, 'bg-primary-50 dark:bg-primary-50/50'],
          iconWrapper: 'bg-primary-50 dark:bg-primary-100 border-primary-100',
          alertIcon: 'stroke-primary-100 dark:stroke-primary-200',
        },
      },
      {
        variant: ['flat', 'faded'],
        color: 'secondary',
        class: {
          base: [colorVariants.flat.secondary, 'bg-secondary-50 dark:bg-secondary-50/50'],
          iconWrapper: 'bg-secondary-50 dark:bg-secondary-100 border-secondary-100',
          alertIcon: 'stroke-secondary-100 dark:stroke-secondary-200',
        },
      },
      {
        variant: ['flat', 'faded'],
        color: 'success',
        class: {
          base: [colorVariants.flat.success, 'bg-success-50 dark:bg-success-50/50'],
          iconWrapper: 'bg-success-50 dark:bg-success-100 border-success-100',
          alertIcon: 'stroke-success-100 dark:stroke-success-200',
        },
      },
      {
        variant: ['flat', 'faded'],
        color: 'warning',
        class: {
          base: [colorVariants.flat.warning, 'bg-warning-50 dark:bg-warning-50/50'],
          iconWrapper: 'bg-warning-50 dark:bg-warning-100 border-warning-100',
          alertIcon: 'stroke-warning-100 dark:stroke-warning-200',
        },
      },
      {
        variant: ['flat', 'faded'],
        color: 'danger',
        class: {
          base: [colorVariants.flat.danger, 'bg-danger-50 dark:bg-danger-50/50'],
          iconWrapper: 'bg-danger-50 dark:bg-danger-100 border-danger-100',
          alertIcon: 'stroke-danger-100 dark:stroke-danger-200',
        },
      },
      // faded / color
      {
        variant: 'faded',
        color: 'default',
        class: {
          base: 'border-border-300 dark:border-border-200',
        },
      },
      {
        variant: 'faded',
        color: 'primary',
        class: {
          base: 'border-primary-200 dark:border-primary-100',
        },
      },
      {
        variant: 'faded',
        color: 'secondary',
        class: {
          base: 'border-secondary-200',
        },
      },
      {
        variant: 'faded',
        color: 'success',
        class: {
          base: 'border-success-300 dark:border-success-100',
        },
      },
      {
        variant: 'faded',
        color: 'warning',
        class: {
          base: 'border-warning-300 dark:border-warning-100',
        },
      },
      {
        variant: 'faded',
        color: 'danger',
        class: {
          base: 'border-danger-200 dark:border-danger-100',
        },
      },
      // bordered / color
      {
        variant: 'bordered',
        color: 'default',
        class: {
          base: [colorVariants.bordered.default],
          iconWrapper: 'bg-background-200 dark:bg-background-100',
          description: 'text-background-600',
          alertIcon: 'stroke-border-100 dark:stroke-border-200',
        },
      },
      {
        variant: 'bordered',
        color: 'primary',
        class: {
          base: [colorVariants.bordered.primary],
          iconWrapper: 'bg-primary-100 dark:bg-primary-50',
          alertIcon: 'stroke-primary-100 dark:stroke-primary-200',
        },
      },
      {
        variant: 'bordered',
        color: 'secondary',
        class: {
          base: [colorVariants.bordered.secondary],
          iconWrapper: 'bg-secondary-100 dark:bg-secondary-50',
          alertIcon: 'stroke-secondary-100 dark:stroke-secondary-200',
        },
      },
      {
        variant: 'bordered',
        color: 'success',
        class: {
          base: [colorVariants.bordered.success],
          iconWrapper: 'bg-success-100 dark:bg-success-50',
          alertIcon: 'stroke-success-100 dark:stroke-success-200',
        },
      },
      {
        variant: 'bordered',
        color: 'warning',
        class: {
          base: [colorVariants.bordered.warning],
          iconWrapper: 'bg-warning-100 dark:bg-warning-50',
          alertIcon: 'stroke-warning-100 dark:stroke-warning-200',
        },
      },
      {
        variant: 'bordered',
        color: 'danger',
        class: {
          base: [colorVariants.bordered.danger],
          iconWrapper: 'bg-danger-100 dark:bg-danger-50',
          alertIcon: 'stroke-danger-100 dark:stroke-danger-200',
        },
      },
      // flat & bordered & faded
      {
        variant: ['flat', 'bordered', 'faded'],
        class: {
          iconWrapper: 'shadow-sm',
        },
      },
      // flat & faded
      {
        variant: ['flat', 'faded'],
        class: {
          iconWrapper: 'shadow-sm border-1',
        },
      },
      // bordered & color
    ],
  },
);

export type AlertVariantProps = VariantProps<typeof alertVariants.base>;
export {alertVariants};
