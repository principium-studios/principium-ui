'use client';

import type {PrimitiveProps} from '@principium/primitive';
import type {VariantProps} from '@principium/variants';

import {Primitive} from '@principium/primitive';
import {Ripple, RippleProvider} from '@principium/ripple';
import {buttonVariants} from '@principium/theme';
import React from 'react';

// ____________________ Button Component ____________________
type ButtonProps = PrimitiveProps<'button'> & VariantProps<typeof buttonVariants> & {disableRipple?: boolean};

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
  ...props
}: ButtonProps) => {
  const content = React.useMemo(() => {
    if (!asChild) {
      return (
        <>
          {children}
          <Ripple />
        </>
      );
    }

    const child = children as React.ReactElement<{children?: React.ReactNode}>;

    return React.cloneElement(child, {
      children: (
        <>
          {child.props?.children}
          <Ripple />
        </>
      ),
    });
  }, [asChild, children]);

  return (
    <RippleProvider disableRipple={disableRipple || disabled}>
      <Primitive.button
        {...props}
        aria-disabled={disabled}
        asChild={asChild}
        className={buttonVariants({variant, size, color, disabled, className})}
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
