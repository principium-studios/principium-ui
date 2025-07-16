import {colorVariants} from '@principium/shared-utils';
import {cva} from 'class-variance-authority';

const alertVariants = cva(
  'relative grid grid-cols-[0_1fr] grid-rows-[max-content] rounded-lg px-4 py-3 has-[svg]:grid-cols-[auto_1fr] has-[svg]:gap-x-3',
  {
    variants: {
      color: {
        default: '',
        primary: '',
        secondary: '',
        success: '',
        warning: '',
        danger: '',
      },
      variant: {
        solid: '',
        flat: '',
        faded: 'border',
        bordered: 'border',
      },
    },
    compoundVariants: [
      // solid / color
      {
        variant: 'solid',
        color: 'default',
        class: colorVariants.solid.default,
      },
      {
        variant: 'solid',
        color: 'primary',
        class: colorVariants.solid.primary,
      },
      {
        variant: 'solid',
        color: 'secondary',
        class: colorVariants.solid.secondary,
      },
      {
        variant: 'solid',
        color: 'success',
        class: colorVariants.solid.success,
      },
      {
        variant: 'solid',
        color: 'warning',
        class: colorVariants.solid.warning,
      },
      {
        variant: 'solid',
        color: 'danger',
        class: colorVariants.solid.danger,
      },
      // bordered / color
      {
        variant: 'bordered',
        color: 'default',
        class: colorVariants.bordered.default,
      },
      {
        variant: 'bordered',
        color: 'primary',
        class: colorVariants.bordered.primary,
      },
      {
        variant: 'bordered',
        color: 'secondary',
        class: colorVariants.bordered.secondary,
      },
      {
        variant: 'bordered',
        color: 'success',
        class: colorVariants.bordered.success,
      },
      {
        variant: 'bordered',
        color: 'warning',
        class: colorVariants.bordered.warning,
      },
      {
        variant: 'bordered',
        color: 'danger',
        class: colorVariants.bordered.danger,
      },
      // flat / color
      {
        variant: 'flat',
        color: 'default',
        class: colorVariants.flat.default,
      },
      {
        variant: 'flat',
        color: 'primary',
        class: colorVariants.flat.primary,
      },
      {
        variant: 'flat',
        color: 'secondary',
        class: colorVariants.flat.secondary,
      },
      {
        variant: 'flat',
        color: 'success',
        class: colorVariants.flat.success,
      },
      {
        variant: 'flat',
        color: 'warning',
        class: colorVariants.flat.warning,
      },
      {
        variant: 'flat',
        color: 'danger',
        class: colorVariants.flat.danger,
      },
      // faded / color
      {
        variant: 'faded',
        color: 'default',
        class: colorVariants.faded.default,
      },
      {
        variant: 'faded',
        color: 'primary',
        class: colorVariants.faded.primary,
      },
      {
        variant: 'faded',
        color: 'secondary',
        class: colorVariants.faded.secondary,
      },
      {
        variant: 'faded',
        color: 'success',
        class: colorVariants.faded.success,
      },
      {
        variant: 'faded',
        color: 'warning',
        class: colorVariants.faded.warning,
      },
      {
        variant: 'faded',
        color: 'danger',
        class: colorVariants.faded.danger,
      },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'default',
    },
  },
);

const alertIconVariants = cva('', {
  variants: {
    variant: {
      solid: '',
      outline: '',
      flat: '',
      faded: '',
      bordered: '',
    },
    color: {
      default: '',
      primary: '',
      secondary: '',
      success: '',
      warning: '',
      danger: '',
    },
  },
  compoundVariants: [
    // solid / color
    {
      variant: 'solid',
      color: 'default',
      class: 'stroke-border-300',
    },
    {
      variant: 'solid',
      color: 'primary',
      class: 'stroke-primary-500 dark:stroke-primary-600',
    },
    {
      variant: 'solid',
      color: 'secondary',
      class: 'stroke-secondary-500 dark:stroke-secondary-600',
    },
    {
      variant: 'solid',
      color: 'success',
      class: 'stroke-success-500 dark:stroke-success-600',
    },
    {
      variant: 'solid',
      color: 'warning',
      class: 'stroke-warning-500 dark:stroke-warning-600',
    },
    {
      variant: 'solid',
      color: 'danger',
      class: 'stroke-danger-500 dark:stroke-danger-600',
    },
    // flat & faded / color
    {
      variant: ['flat', 'faded'],
      color: 'default',
      class: 'stroke-border-100 dark:stroke-border-200',
    },
    {
      variant: ['flat', 'faded'],
      color: 'primary',
      class: 'stroke-primary-100 dark:stroke-primary-200',
    },
    {
      variant: ['flat', 'faded'],
      color: 'secondary',
      class: 'stroke-secondary-100 dark:stroke-secondary-200',
    },
    {
      variant: ['flat', 'faded'],
      color: 'success',
      class: 'stroke-success-100 dark:stroke-success-200',
    },
    {
      variant: ['flat', 'faded'],
      color: 'warning',
      class: 'stroke-warning-100 dark:stroke-warning-200',
    },
    {
      variant: ['flat', 'faded'],
      color: 'danger',
      class: 'stroke-danger-100 dark:stroke-danger-200',
    },
    // bordered / color
    {
      variant: 'bordered',
      color: 'default',
      class: 'stroke-border-200 dark:stroke-border-100',
    },
    {
      variant: 'bordered',
      color: 'primary',
      class: 'stroke-primary-100 dark:stroke-primary-50',
    },
    {
      variant: 'bordered',
      color: 'secondary',
      class: 'stroke-secondary-100 dark:stroke-secondary-50',
    },
    {
      variant: 'bordered',
      color: 'success',
      class: 'stroke-success-100 dark:stroke-success-50',
    },
    {
      variant: 'bordered',
      color: 'warning',
      class: 'stroke-warning-100 dark:stroke-warning-50',
    },
    {
      variant: 'bordered',
      color: 'danger',
      class: 'stroke-danger-100 dark:stroke-danger-50',
    },
  ],
  defaultVariants: {
    variant: 'solid',
    color: 'default',
  },
});

const alertIconWrapperVariants = cva(
  '[>svg]:size-4 [>svg]:w-6 [>svg]:h-6 [>svg]:absolute [>svg]:top-1/2 [>svg]:left-1/2 [>svg]:-translate-x-1/2 [>svg]:-translate-y-1/2 relative grid h-9 w-9 flex-none place-items-center rounded-full',
  {
    variants: {
      variant: {
        solid: '',
        flat: '',
        faded: '',
        bordered: '',
      },
      color: {
        default: '',
        primary: '',
        secondary: '',
        success: '',
        warning: '',
        danger: '',
      },
    },
    compoundVariants: [
      // flat & faded / color
      {
        variant: ['flat', 'faded'],
        color: 'default',
        class: 'border-border-300 bg-border-100 dark:bg-border-200',
      },
      {
        variant: ['flat', 'faded'],
        color: 'primary',
        class: 'border-primary-300 bg-primary-100 dark:bg-primary-200',
      },
      {
        variant: ['flat', 'faded'],
        color: 'secondary',
        class: 'border-secondary-300 bg-secondary-100 dark:bg-secondary-200',
      },
      {
        variant: ['flat', 'faded'],
        color: 'success',
        class: 'border-success-300 bg-success-100 dark:bg-success-200',
      },
      {
        variant: ['flat', 'faded'],
        color: 'warning',
        class: 'border-warning-300 bg-warning-100 dark:bg-warning-200',
      },
      {
        variant: ['flat', 'faded'],
        color: 'danger',
        class: 'border-danger-300 bg-danger-100 dark:bg-danger-200',
      },
      // flat & bordered & faded / shadow
      {
        variant: ['flat', 'bordered', 'faded'],
        class: 'shadow-sm',
      },
      // flat & faded
      {
        variant: ['flat', 'faded'],
        class: 'border-1 shadow-sm',
      },
      // bordered & color
      {
        variant: 'bordered',
        color: 'default',
        class: 'bg-border-200 dark:bg-border-100',
      },
      {
        variant: 'bordered',
        color: 'primary',
        class: 'bg-primary-100 dark:bg-primary-50',
      },
      {
        variant: 'bordered',
        color: 'secondary',
        class: 'bg-secondary-100 dark:bg-secondary-50',
      },
      {
        variant: 'bordered',
        color: 'success',
        class: 'bg-success-100 dark:bg-success-50',
      },
      {
        variant: 'bordered',
        color: 'warning',
        class: 'bg-warning-100 dark:bg-warning-50',
      },
      {
        variant: 'bordered',
        color: 'danger',
        class: 'bg-danger-100 dark:bg-danger-50',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'default',
    },
  },
);

export {alertVariants, alertIconVariants, alertIconWrapperVariants};
