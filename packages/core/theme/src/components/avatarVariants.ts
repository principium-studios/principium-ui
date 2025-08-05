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
      'align-middle',
      'text-foreground',
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
      'w-full',
      'h-full',
      'items-center',
      'justify-center',
      'peer-data-[loaded=true]:hidden',
      'overflow-hidden',
      'text-center',
    ],
    context: ''
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
          img: 'rounded-none',
          fallback: 'rounded-none',
          context: [],
        },
        sm: {
          base: 'rounded-sm',
          img: 'rounded-sm',
          fallback: 'rounded-sm',
        },
        md: {
          base: 'rounded-md',
          img: 'rounded-md',
          fallback: 'rounded-md',
        },
        lg: {
          base: 'rounded-lg',
          img: 'rounded-lg',
          fallback: 'rounded-lg',
        },
        full: {
          base: 'rounded-full',
          img: 'rounded-full',
          fallback: 'rounded-full',
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
          base: 'ring-2 ring-offset-2 ring-offset-background',
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
          base: 'ring-border',
        },
      },
      {
        color: 'primary',
        isBordered: true,
        class: {
          base: 'ring-primary',
        },
      },
      {
        color: 'secondary',
        isBordered: true,
        class: {
          base: 'ring-secondary',
        },
      },
      {
        color: 'success',
        isBordered: true,
        class: {
          base: 'ring-success',
        },
      },
      {
        color: 'warning',
        isBordered: true,
        class: {
          base: 'ring-warning',
        },
      },
      {
        color: 'danger',
        isBordered: true,
        class: {
          base: 'ring-danger',
        },
      },
    ] as const,
  },
);

export {avatarVariants};
