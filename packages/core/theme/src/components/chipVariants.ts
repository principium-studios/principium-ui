import {pv} from '../utils/pv';
import {colorVariants} from '../utils';

/**
 * Chip wrapper **Tailwind Variants** component
 *
 * @example
 * ```js
 * const {base, content, dot, avatar, closeButton} = chip({...})
 *
 * <div className={base())}>
 *   <svg className={dot()}/>
 *   <span className={content()}>Default</span>
 *   <svg className={closeButton()}>close button</svg>
 *    // right content
 * </div>
 * ```
 */
const chipVariants = pv(
  [
    'relative',
    'max-w-fit',
    'min-w-min',
    'inline-flex',
    'items-center',
    'justify-between',
    'box-border',
    'whitespace-nowrap',
  ],
  {
    variants: {
      variant: {
        solid: [],
        bordered: ['border-2 bg-transparent'],
        light: ['bg-transparent'],
        flat: [],
        faded: ['border-2'],
        shadow: [],
      },
      color: {
        default: [],
        primary: [],
        secondary: [],
        success: [],
        warning: [],
        danger: [],
      },
      size: {
        sm: ['px-2 h-6 text-tiny'],
        md: ['px-3 h-7 text-sm'],
        lg: ['px-4 h-8 text-md'],
      },
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        md: ['rounded-md'],
        lg: ['rounded-lg'],
        full: ['rounded-full'],
      },
      isOneChar: {
        true: [],
        false: [],
      },
      disabled: {
        true: ['opacity-disabled pointer-events-none'],
      },
    },
    defaultVariants: {
      variant: 'solid',
      color: 'default',
      size: 'md',
      radius: 'full',
      disabled: false,
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
      // light / color
      {
        variant: 'light',
        color: 'default',
        class: colorVariants.light.default,
      },
      {
        variant: 'light',
        color: 'primary',
        class: colorVariants.light.primary,
      },
      {
        variant: 'light',
        color: 'secondary',
        class: colorVariants.light.secondary,
      },
      {
        variant: 'light',
        color: 'success',
        class: colorVariants.light.success,
      },
      {
        variant: 'light',
        color: 'warning',
        class: colorVariants.light.warning,
      },
      {
        variant: 'light',
        color: 'danger',
        class: colorVariants.light.danger,
      },
      // isOneChar / size
      {
        isOneChar: true,
        size: 'sm',
        class: 'w-5 h-5 min-w-5 min-h-5',
      },
      {
        isOneChar: true,
        size: 'md',
        class: 'w-6 h-6 min-w-6 min-h-6',
      },
      {
        isOneChar: true,
        size: 'lg',
        class: 'w-7 h-7 min-w-7 min-h-7',
      },
    ],
  },
);

export {chipVariants};
