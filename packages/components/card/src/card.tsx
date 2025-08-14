'use client';

import type {SlotParams} from '@principium/variants';
import type {PrimitiveProps} from '@principium/primitive';

import React from 'react';
import {Ripple, RippleProvider} from '@principium/ripple';
import {cardVariants} from '@principium/theme';
import {Primitive} from '@principium/primitive';
import {useInsertChildren} from '@principium/use-insert-children';

// ________________________ Card ________________________
type CardProps = (
  | ({pressable: true} & PrimitiveProps<'button'>)
  | ({pressable?: false | undefined | null} & PrimitiveProps<'div'>)
) &
  (SlotParams<typeof cardVariants.base> & {
    disableRipple?: boolean;
  });

// TODO: fix types
const Card = ({
  disableRipple = false,
  pressable,
  disabled,
  hoverable,
  blurred,
  className,
  children,
  onClick,
  radius,
  shadow,
  asChild,
  ...props
}: CardProps) => {
  const Component = pressable ? Primitive.button : Primitive.div;

  const content = useInsertChildren(asChild, children, <Ripple />);

  return (
    <RippleProvider disableRipple={disableRipple || !pressable}>
      {/* @ts-ignore */}
      <Component
        asChild={asChild}
        className={cardVariants.base({
          pressable,
          disabled,
          hoverable,
          blurred,
          radius,
          shadow,
          className,
        })}
        data-disabled={disabled}
        onClick={(e) => {
          if (!pressable) return;
          // @ts-ignore
          onClick?.(e);
        }}
        {...props}
      >
        {content}
      </Component>
    </RippleProvider>
  );
};

// ________________________ CardHeader ________________________
type CardHeaderProps = React.ComponentPropsWithRef<'div'>;
const CardHeader = ({className, ...props}: CardHeaderProps) => {
  return <div className={cardVariants.header({className})} {...props} />;
};

//  CardTitle
type CardTitleProps = React.ComponentPropsWithRef<'div'>;
const CardTitle = ({className, ...props}: CardTitleProps) => {
  return <div className={cardVariants.title({className})} {...props} />;
};

//  CardDescription
type CardDescriptionProps = React.ComponentPropsWithRef<'div'>;
const CardDescription = ({className, ...props}: CardDescriptionProps) => {
  return <div className={cardVariants.description({className})} {...props} />;
};

// ________________________ CardContent ________________________
type CardContentProps = React.ComponentPropsWithRef<'div'>;
const CardContent = ({className, ...props}: CardContentProps) => {
  return <div className={cardVariants.content({className})} {...props} />;
};

// ________________________ CardFooter ________________________
type CardFooterProps = React.ComponentPropsWithRef<'div'> & {blurred?: boolean};
const CardFooter = ({className, blurred, ...props}: CardFooterProps) => {
  return <div className={cardVariants.footer({className, footerBlurred: blurred})} {...props} />;
};

export {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter};
export type {
  CardProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardContentProps,
  CardFooterProps,
};
