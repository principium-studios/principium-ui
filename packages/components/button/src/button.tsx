'use client';

import type {PrimitiveProps} from '@principium/primitive';
import type {ButtonVariantProps} from '@principium/theme';

import {Primitive} from '@principium/primitive';
import {Ripple, RippleProvider} from '@principium/ripple';
import {buttonVariants} from '@principium/theme';

// ____________________ Button Component ____________________
type ButtonProps = PrimitiveProps<'button'> & ButtonVariantProps & {disableRipple?: boolean};

const Button = ({
  variant,
  size,
  color,
  className,
  children,
  onClick,
  disableRipple,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <RippleProvider disableRipple={disableRipple || disabled}>
      <Primitive.button
        {...props}
        aria-disabled={disabled}
        className={buttonVariants({variant, size, color, disabled, className})}
        disabled={disabled}
        onClick={(e) => {
          if (disabled) return;
          onClick?.(e);
        }}
      >
        {children}
        <Ripple />
      </Primitive.button>
    </RippleProvider>
  );
};

export {Button};

export type {ButtonProps};
