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
        'relative box-border flex h-auto flex-col overflow-hidden rounded-lg border border-border-300 bg-background-100 shadow-sm transition-[background-color_border-color_color_transform_opacity] duration-300',
        isPressable && 'cursor-pointer active:scale-97 active:opacity-97',
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
        'overflow-inherit color-inherit z-10 flex w-full shrink-0 items-center justify-start p-3 subpixel-antialiased',
        className,
      )}
      {...props}
    />
  );
};

//  CardTitle
type CardTitleProps = React.ComponentPropsWithRef<'div'>;
const CardTitle = ({className, ...props}: CardTitleProps) => {
  return <div className={cn('text-lg font-semibold', className)} {...props} />;
};

//  CardDescription
type CardDescriptionProps = React.ComponentPropsWithRef<'div'>;
const CardDescription = ({className, ...props}: CardDescriptionProps) => {
  return <div className={cn('text-muted-600 text-sm', className)} {...props} />;
};

// ________________________ CardContent ________________________
type CardContentProps = React.ComponentPropsWithRef<'div'>;
const CardContent = ({className, ...props}: CardContentProps) => {
  return (
    <div
      className={cn(
        'relative flex h-auto w-full flex-1 flex-col overflow-y-auto p-3 text-left break-words subpixel-antialiased',
        className,
      )}
      {...props}
    />
  );
};

// ________________________ CardFooter ________________________
type CardFooterProps = React.ComponentPropsWithRef<'div'>;
const CardFooter = ({className, ...props}: CardFooterProps) => {
  return (
    <div
      className={cn(
        'color-inherit flex h-auto w-full items-center overflow-hidden p-3 subpixel-antialiased',
        className,
      )}
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
