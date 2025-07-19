import React from 'react';

import {useRipple, Ripple} from '@principium/ripple';
import {cardVariants, cn, type CardVariantProps} from '@principium/theme';

// ________________________ Card ________________________
type CardProps = React.ComponentPropsWithRef<'div'> &
  Omit<CardVariantProps, 'isFooterBlurred'> & {
    disableRipple?: boolean;
  };

const Card = ({
  className,
  children,
  disableRipple = false,
  isPressable,
  disabled,
  isHoverable,
  isBlurred,
  onClick,
  ...props
}: CardProps) => {
  const {ripples, createRipple, removeRipple} = useRipple();

  return (
    <div
      className={cn(cardVariants.base({isPressable, disabled, isHoverable, isBlurred}), className)}
      onClick={(e) => {
        if (!isPressable) return;
        !disableRipple && createRipple(e);
        onClick?.(e);
      }}
      {...props}
    >
      {children}
      {!disableRipple && <Ripple ripples={ripples} onClear={removeRipple} />}
    </div>
  );
};

// ________________________ CardHeader ________________________
type CardHeaderProps = React.ComponentPropsWithRef<'div'>;
const CardHeader = ({className, ...props}: CardHeaderProps) => {
  return <div className={cn(cardVariants.header(), className)} {...props} />;
};

//  CardTitle
type CardTitleProps = React.ComponentPropsWithRef<'div'>;
const CardTitle = ({className, ...props}: CardTitleProps) => {
  return <div className={cn(cardVariants.title(), className)} {...props} />;
};

//  CardDescription
type CardDescriptionProps = React.ComponentPropsWithRef<'div'>;
const CardDescription = ({className, ...props}: CardDescriptionProps) => {
  return <div className={cn(cardVariants.description(), className)} {...props} />;
};

// ________________________ CardContent ________________________
type CardContentProps = React.ComponentPropsWithRef<'div'>;
const CardContent = ({className, ...props}: CardContentProps) => {
  return <div className={cn(cardVariants.body(), className)} {...props} />;
};

// ________________________ CardFooter ________________________
type CardFooterProps = React.ComponentPropsWithRef<'div'> & {isBlurred?: boolean};
const CardFooter = ({className, isBlurred, ...props}: CardFooterProps) => {
  return (
    <div className={cn(cardVariants.footer({isFooterBlurred: isBlurred}), className)} {...props} />
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
