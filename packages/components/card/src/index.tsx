import React from 'react';
import {cn} from '@principium/shared-utils';
import {useRipple, Ripple} from '@principium/ripple';

// ________________________ Card ________________________
type CardProps = React.ComponentPropsWithRef<'div'> & {
  disableRipple?: boolean;
  isPressable?: boolean;
};

const Card = ({
  className,
  children,
  disableRipple = false,
  isPressable = false,
  onClick,
  ...props
}: CardProps) => {
  const {ripples, createRipple, removeRipple} = useRipple();

  return (
    <div
      className={cn(
        'border-border-300 bg-background-100 relative box-border flex flex-col overflow-hidden rounded-lg border shadow-sm transition-[background-color_border-color_color_transform_opacity] duration-300',
        isPressable && 'active:scale-97 active:opacity-97 cursor-pointer',
        className,
      )}
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
  return (
    <div
      className={cn(
        'overflow-inherit color-inherit z-10 grid shrink-0 auto-rows-min grid-rows-[auto_auto] items-start items-center justify-start gap-1.5 p-3 subpixel-antialiased',
        className,
      )}
      {...props}
    />
  );
};

//  CardTitle
type CardTitleProps = React.ComponentPropsWithRef<'div'>;
const CardTitle = ({className, ...props}: CardTitleProps) => {
  return <div className={cn('font-semibold leading-none', className)} {...props} />;
};

//  CardDescription
type CardDescriptionProps = React.ComponentPropsWithRef<'div'>;
const CardDescription = ({className, ...props}: CardDescriptionProps) => {
  return <div className={cn('text-muted-600 text-sm', className)} {...props} />;
};

// ________________________ CardContent ________________________
type CardContentProps = React.ComponentPropsWithRef<'div'>;
const CardContent = ({className, ...props}: CardContentProps) => {
  return <div className={cn('p-3 subpixel-antialiased', className)} {...props} />;
};

// ________________________ CardFooter ________________________
type CardFooterProps = React.ComponentPropsWithRef<'div'>;
const CardFooter = ({className, ...props}: CardFooterProps) => {
  return (
    <div
      className={cn('flex items-center overflow-hidden p-3 subpixel-antialiased', className)}
      {...props}
    />
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
