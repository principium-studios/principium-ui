'use client';

import type {PrimitiveProps} from '@principium/primitive';
import type {SlotParams} from '@principium/variants';

import {Primitive} from '@principium/primitive';
import {Ripple, RippleProvider} from '@principium/ripple';
import {useInsertChildren} from '@principium/use-insert-children';
import {buttonVariants} from '@principium/theme';

// ____________________ Button Component ____________________
type ButtonProps = PrimitiveProps<'button'> &
  SlotParams<typeof buttonVariants> & {disableRipple?: boolean};

const Button = ({
  variant,
  size,
  color,
  className,
  children,
  onClick,
  disableRipple,
  disabled,
  asChild,
  radius,
  disableAnimation,
  ...props
}: ButtonProps) => {
  const content = useInsertChildren(asChild, children, <Ripple />);

  return (
    <RippleProvider disableRipple={disableRipple || disabled}>
      <Primitive.button
        {...props}
        aria-disabled={disabled}
        asChild={asChild}
        className={buttonVariants({
          variant,
          size,
          color,
          disabled,
          className,
          radius,
          disableAnimation,
        })}
        disabled={disabled}
        onClick={(e) => {
          if (disabled) return;
          onClick?.(e);
        }}
      >
        {content}
      </Primitive.button>
    </RippleProvider>
  );
};

export {Button};

export type {ButtonProps};
