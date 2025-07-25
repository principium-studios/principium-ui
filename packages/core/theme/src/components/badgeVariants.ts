import type {VariantProps} from '@principium/variants';

import {pv} from '../utils/pv';
import {colorVariants, dataFocusVisibleClasses} from '../utils';

/**
 * Badge wrapper **Tailwind Variants** component
 *
 * @example
 * <div className={badgeVariants.base({...})}>
 *   // children
 *   <span className={badgeVariants.badge({...})}>5+</span>
 * </div>
 */
const badgeVariants = pv(
  ['flex z-10 flex-wrap absolute box-border rounded-full whitespace-nowrap justify-center origin-center items-center text-inherit select-none font-regular scale-100 opacity-100 subpixel-antialiased data-[invisible=true]:scale-0 data-[invisible=true]:opacity-0', ...dataFocusVisibleClasses],
  {
    variants: {
      variant: {
        solid: '',
        flat: '',
        faded: 'border-2',
        shadow: '',
      },
      color: {
        default: '',
        primary: '',
        secondary: '',
        success: '',
        warning: '',
        danger: '',
      },
      size: {
        sm: 'px-1 text-tiny',
        md: 'px-1 text-small',
        lg: 'px-1 text-small',
      },
      placement: {
        'top-right': 'translate-x-1/2 -translate-y-1/2',
        'top-left': '-translate-x-1/2 -translate-y-1/2',
        'bottom-right': 'translate-x-1/2 translate-y-1/2',
        'bottom-left': '-translate-x-1/2 translate-y-1/2',
      },
      shape: {
        circle: '',
        rectangle: '',
      },
      isOneChar: {
        true: 'px-0',
      },
      isDot: {
        true: '',
      },
      showOutline: {
        true: 'border-background-50 border-2',
        false: 'border-0 border-transparent',
      },
    },
    defaultVariants: {
      variant: 'solid',
      color: 'default',
      size: 'md',
      shape: 'rectangle',
      placement: 'top-right',
      showOutline: true,
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
      // shadow / color
      {
        variant: 'shadow',
        color: 'default',
        class: colorVariants.shadow.default,
      },
      {
        variant: 'shadow',
        color: 'primary',
        class: colorVariants.shadow.primary,
      },
      {
        variant: 'shadow',
        color: 'secondary',
        class: colorVariants.shadow.secondary,
      },
      {
        variant: 'shadow',
        color: 'success',
        class: colorVariants.shadow.success,
      },
      {
        variant: 'shadow',
        color: 'warning',
        class: colorVariants.shadow.warning,
      },
      {
        variant: 'shadow',
        color: 'danger',
        class: colorVariants.shadow.danger,
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
      // isOneChar / size
      {
        isOneChar: true,
        size: 'sm',
        class: 'w-4 h-4 min-w-4 min-h-4',
      },
      {
        isOneChar: true,
        size: 'md',
        class: 'w-5 h-5 min-w-5 min-h-5',
      },
      {
        isOneChar: true,
        size: 'lg',
        class: 'w-6 h-6 min-w-6 min-h-6',
      },
      // isDot / size
      {
        isDot: true,
        size: 'sm',
        class: 'w-3 h-3 min-w-3 min-h-3',
      },
      {
        isDot: true,
        size: 'md',
        class: 'w-3.5 h-3.5 min-w-3.5 min-h-3.5',
      },
      {
        isDot: true,
        size: 'lg',
        class: 'w-4 h-4 min-w-4 min-h-4',
      },
      // placement / rectangle
      {
        placement: 'top-right',
        shape: 'rectangle',
        class: 'top-[5%] right-[5%] ',
      },
      {
        placement: 'top-left',
        shape: 'rectangle',
        class: 'top-[5%] left-[5%] ',
      },
      {
        placement: 'bottom-right',
        shape: 'rectangle',
        class: 'bottom-[5%] right-[5%]',
      },
      {
        placement: 'bottom-left',
        shape: 'rectangle',
        class: 'bottom-[5%] left-[5%]',
      },
      // placement / circle
      {
        placement: 'top-right',
        shape: 'circle',
        class: 'top-[10%] right-[10%]',
      },
      {
        placement: 'top-left',
        shape: 'circle',
        class: 'top-[10%] left-[10%]',
      },
      {
        placement: 'bottom-right',
        shape: 'circle',
        class: 'bottom-[10%] right-[10%]',
      },
      {
        placement: 'bottom-left',
        shape: 'circle',
        class: 'bottom-[10%] left-[10%]',
      },
    ],
  },
);

export type BadgeVariantProps = VariantProps<typeof badgeVariants>;

export {badgeVariants};
