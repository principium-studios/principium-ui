import React from 'react';
import { cn } from '@principium/shared-utils';
import { useRipple, Ripple } from '@principium/ripple';

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
  const { ripples, createRipple, removeRipple } = useRipple();

  return (
    <div
      className={cn(
        'relative flex flex-col h-auto box-border overflow-hidden bg-background-100 rounded-lg shadow-sm border border-border-300 transition-[background-color_border-color_color_transform_opacity] duration-300',
        isPressable && 'cursor-pointer active:scale-97 active:opacity-97',
        className
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
const CardHeader = ({ className, ...props }: CardHeaderProps) => {
  return (
    <div
      className={cn(
        'flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased',
        className
      )}
      {...props}
    />
  );
};

//  CardTitle
type CardTitleProps = React.ComponentPropsWithRef<'div'>;
const CardTitle = ({ className, ...props }: CardTitleProps) => {
  return <div className={cn('text-lg font-semibold', className)} {...props} />;
};

//  CardDescription
type CardDescriptionProps = React.ComponentPropsWithRef<'div'>;
const CardDescription = ({ className, ...props }: CardDescriptionProps) => {
  return <div className={cn('text-sm text-muted-600', className)} {...props} />;
};

// ________________________ CardContent ________________________
type CardContentProps = React.ComponentPropsWithRef<'div'>;
const CardContent = ({ className, ...props }: CardContentProps) => {
  return (
    <div
      className={cn(
        'relative flex flex-1 w-full p-3 flex-col h-auto break-words text-left overflow-y-auto subpixel-antialiased',
        className
      )}
      {...props}
    />
  );
};

// ________________________ CardFooter ________________________
type CardFooterProps = React.ComponentPropsWithRef<'div'>;
const CardFooter = ({ className, ...props }: CardFooterProps) => {
  return (
    <div
      className={cn(
        'p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased',
        className
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
