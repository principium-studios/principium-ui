import {cva} from 'class-variance-authority';
import {colorVariants} from '@principium/theme';

export const BadgeVariants = cva(
  'absolute box-border flex origin-center scale-100 select-none items-center justify-center rounded-full subpixel-antialiased opacity-100 data-[hidden]:scale-0 data-[hidden]:opacity-0',
  {
    variants: {
      variant: {
        solid: {},
        flat: {},
        faded: 'border-2',
        shadow: 'shadow-lg/40',
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
        sm: 'text-tiny px-1',
        md: 'px-1 text-xs',
        lg: 'px-1 text-sm',
      },
      shape: {
        circle: {},
        rectangle: {},
      },
      placement: {
        'top-right': '-translate-y-1/2 translate-x-1/2',
        'top-left': '-translate-x-1/2 -translate-y-1/2',
        'bottom-right': 'translate-x-1/2 translate-y-1/2',
        'bottom-left': '-translate-x-1/2 translate-y-1/2',
      },
      showOutline: {
        true: 'border-background-50 border-2',
        false: 'border-0 border-transparent',
      },
      isOneChar: {
        true: 'px-0',
      },
      isDot: {
        true: '',
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
        class: 'h-4 min-h-4 w-4 min-w-4',
      },
      {
        isOneChar: true,
        size: 'md',
        class: 'h-5 min-h-5 w-5 min-w-5',
      },
      {
        isOneChar: true,
        size: 'lg',
        class: 'h-6 min-h-6 w-6 min-w-6',
      },
      // isDot / size
      {
        isDot: true,
        size: 'sm',
        class: 'h-3 min-h-3 w-3 min-w-3',
      },
      {
        isDot: true,
        size: 'md',
        class: 'h-3.5 min-h-3.5 w-3.5 min-w-3.5',
      },
      {
        isDot: true,
        size: 'lg',
        class: 'h-4 min-h-4 w-4 min-w-4',
      },
      // placement / rectangle
      {
        placement: 'top-right',
        shape: 'rectangle',
        class: 'right-[5%] top-[5%]',
      },
      {
        placement: 'top-left',
        shape: 'rectangle',
        class: 'left-[5%] top-[5%]',
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
        class: 'right-[10%] top-[10%]',
      },
      {
        placement: 'top-left',
        shape: 'circle',
        class: 'left-[10%] top-[10%]',
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
    defaultVariants: {
      variant: 'solid',
      size: 'md',
      color: 'default',
      shape: 'rectangle',
      placement: 'top-right',
      showOutline: true,
    },
  },
);
