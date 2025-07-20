'use client';

import type {PrimitiveProps} from '@principium/primitive';
import type {ButtonVariantProps} from '@principium/theme';

import {Primitive} from '@principium/primitive';
import {Ripple, useRipple} from '@principium/ripple';
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
  disableRipple = false,
  disabled,
  ...props
}: ButtonProps) => {
  const {ripples, createRipple, removeRipple} = useRipple();

  return (
    <Primitive.button
      {...props}
      aria-disabled={disabled}
      className={buttonVariants({variant, size, color, disabled, className})}
      disabled={disabled}
      onClick={(e) => {
        if (disabled) return;
        !disableRipple && createRipple(e);
        onClick?.(e);
      }}
    >
      {children}
      {!disableRipple && <Ripple ripples={ripples} onClear={removeRipple} />}
    </Primitive.button>
  );
};

export {Button};

export type {ButtonProps};
