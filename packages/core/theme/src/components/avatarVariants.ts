import {pv} from '../utils/pv';
import {colorVariants, dataFocusVisibleClasses, translateCenterClasses} from '../utils';

/**
 * Avatar
 *
 * @example
 *
 * <div className={avatarVariants.base({...})}>
 *    <img className={avatarVariants.img({...})} alt="your avatar" />
 *    <span className={avatarVariants.fallback({...})}>your fallback</span>
 * </div>
 */
const avatarVariants = pv(
  {
    base: [
      'flex',
      'relative',
      'justify-center',
      'items-center',
      'box-border',
      'overflow-hidden',
      'align-middle',
      'text-background-950',
      'z-0',
      // focus ring
      ...dataFocusVisibleClasses,
    ],
    img: [
      'flex',
      'object-cover',
      'w-full',
      'h-full',
      'transition-opacity',
      '!duration-500',
      'opacity-0',
      'data-[loaded=true]:opacity-100',
      'peer'
    ],
    fallback: [
      ...translateCenterClasses,
      'flex',
      'items-center',
      'justify-center',
      'peer-data-[loaded=true]:hidden',
    ],
  },
  {
    variants: {
      size: {
        sm: {
          base: 'w-8 h-8 text-tiny',
        },
        md: {
          base: 'w-10 h-10 text-tiny',
        },
        lg: {
          base: 'w-14 h-14 text-small',
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
        full: {
          base: 'rounded-full',
        },
      },
      color: {
        default: {
          base: colorVariants.solid.default,
        },
        primary: {
          base: colorVariants.solid.primary,
        },
        secondary: {
          base: colorVariants.solid.secondary,
        },
        success: {
          base: colorVariants.solid.success,
        },
        warning: {
          base: colorVariants.solid.warning,
        },
        danger: {
          base: colorVariants.solid.danger,
        },
      },
      isBordered: {
        true: {
          base: 'ring-2 ring-offset-2 ring-offset-background-50',
        },
      },
      disabled: {
        true: {
          base: 'opacity-50',
        },
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'default',
      radius: 'full',
    },
    compoundVariants: [
      {
        color: 'default',
        isBordered: true,
        class: {
          base: 'ring-border-300',
        },
      },
      {
        color: 'primary',
        isBordered: true,
        class: {
          base: 'ring-primary-400 dark:ring-primary-600',
        },
      },
      {
        color: 'secondary',
        isBordered: true,
        class: {
          base: 'ring-secondary-400 dark:ring-secondary-600',
        },
      },
      {
        color: 'success',
        isBordered: true,
        class: {
          base: 'ring-success-400 dark:ring-success-600',
        },
      },
      {
        color: 'warning',
        isBordered: true,
        class: {
          base: 'ring-warning-400 dark:ring-warning-600',
        },
      },
      {
        color: 'danger',
        isBordered: true,
        class: {
          base: 'ring-danger-400 dark:ring-danger-600',
        },
      },
    ] as const,
  },
);

export {avatarVariants};
