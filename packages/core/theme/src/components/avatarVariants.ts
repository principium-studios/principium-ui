import type {VariantProps} from '@principium/variants';

import {pv} from '../utils/pv';
import {colorVariants, dataFocusVisibleClasses, translateCenterClasses} from '../utils';

/**
 * Avatar wrapper **Tailwind Variants** component
 *
 * @example
 *
 * <div className={avatarVariants.base({size, color, isBordered, disabled}))} data-focus={true/false} data-focus-visible={true/false}>
 *    <img className={avatarVariants.img()} src="https://picsum.photos/200/300" alt="your avatar" />
 *    <div role="img" aria-label="your name" className={avatarVariants.name()}>your name</div>
 *    <span role="img" aria-label="your icon" className={avatarVariants.icon()}>your icon</span>
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
      'rounded-full',
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
    ],
    fallback: [...translateCenterClasses, 'flex', 'items-center', 'justify-center'],
    name: [...translateCenterClasses, 'font-normal', 'text-center', 'text-inherit'],
    icon: [
      ...translateCenterClasses,
      'flex',
      'items-center',
      'justify-center',
      'text-inherit',
      'w-full',
      'h-full',
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
          base: 'ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark',
        },
      },
      disabled: {
        true: {
          base: 'opacity-disabled',
        },
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'default',
    },
    compoundVariants: [
      {
        color: 'default',
        isBordered: true,
        class: {
          base: 'ring-default',
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
    ],
  },
);

export type AvatarVariantProps = VariantProps<typeof avatarVariants.base>;

export {avatarVariants};
