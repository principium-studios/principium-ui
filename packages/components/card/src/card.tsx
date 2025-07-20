import type {CardVariantProps} from '@principium/theme';

import React from 'react';
import {useRipple, Ripple} from '@principium/ripple';
import {cardVariants} from '@principium/theme';

// ________________________ Card ________________________
type CardProps = (
  | ({isPressable: true} & React.ComponentPropsWithRef<'button'>)
  | ({isPressable?: false | undefined | null} & React.ComponentPropsWithRef<'div'>)
) &
  (Omit<CardVariantProps, 'isFooterBlurred'> & {
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
  ...props
}: CardProps) => {
  const {ripples, createRipple, removeRipple} = useRipple();
  const Component = isPressable ? 'button' : 'div';

  return (
    // @ts-ignore
    <Component
      className={cardVariants.base({isPressable, disabled, isHoverable, isBlurred, className})}
      onClick={(e) => {
        if (!isPressable) return;
        !disableRipple && createRipple(e);
        // @ts-ignore
        onClick?.(e);
      }}
      {...props}
    >
      {children}
      {!disableRipple && <Ripple ripples={ripples} onClear={removeRipple} />}
    </Component>
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
  return <div className={cardVariants.body({className})} {...props} />;
};

// ________________________ CardFooter ________________________
type CardFooterProps = React.ComponentPropsWithRef<'div'> & {isBlurred?: boolean};
const CardFooter = ({className, isBlurred, ...props}: CardFooterProps) => {
  return (
    <div className={cardVariants.footer({isFooterBlurred: isBlurred, className})} {...props} />
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
