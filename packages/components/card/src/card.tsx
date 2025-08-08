'use client';

import React from 'react';

import type {SlotParams} from '@principium/variants';
import type {PrimitiveProps} from '@principium/primitive';

import {Ripple, RippleProvider} from '@principium/ripple';
import {cardVariants} from '@principium/theme';
import {Primitive} from '@principium/primitive';
import {useInsertChildren} from '@principium/use-insert-children';

// ________________________ Card ________________________
type CardProps = (
  | ({isPressable: true} & PrimitiveProps<'button'>)
  | ({isPressable?: false | undefined | null} & PrimitiveProps<'div'>)
) &
  (SlotParams<typeof cardVariants.base> & {
    disableRipple?: boolean;
  });

// TODO: fix types
const Card = ({
  disableRipple = false,
  isPressable,
  disabled,
  isHoverable,
  isBlurred,
  className,
  children,
  onClick,
  radius,
  shadow,
  asChild,
  ...props
}: CardProps) => {
  const Component = isPressable ? Primitive.button : Primitive.div;

  const content = useInsertChildren(asChild, children, <Ripple />);

  return (
    <RippleProvider disableRipple={disableRipple || !isPressable}>
      {/* @ts-ignore */}
      <Component
        asChild={asChild}
        className={cardVariants.base({
          isPressable,
          disabled,
          isHoverable,
          isBlurred,
          radius,
          shadow,
          className,
        })}
        onClick={(e) => {
          if (!isPressable) return;
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
type CardFooterProps = React.ComponentPropsWithRef<'div'> & {isBlurred?: boolean};
const CardFooter = ({className, isBlurred, ...props}: CardFooterProps) => {
  return (
    <div className={cardVariants.footer({className, isFooterBlurred: isBlurred})} {...props} />
  );
};

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  //
  CardProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardContentProps,
  CardFooterProps,
};
