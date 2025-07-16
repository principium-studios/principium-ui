import React from 'react';
import {VariantProps} from 'class-variance-authority';
import {alertIconVariants, alertIconWrapperVariants, alertVariants} from './alertVariants';
import {cn} from '@principium/shared-utils';
import {createContext} from '@principium/context';
import {CircleCheck, ShieldAlert, OctagonAlert, Info} from 'lucide-react';

interface AlertContextType {
  variant: VariantProps<typeof alertVariants>['variant'];
  color: VariantProps<typeof alertVariants>['color'];
}
const [AlertProvider, useAlert] = createContext<AlertContextType>('Alert');

// ________________________ Alert ________________________
type AlertProps = React.ComponentPropsWithRef<'div'> & VariantProps<typeof alertVariants>;
const Alert = ({className, variant, color, ...props}: AlertProps) => {
  return (
    <AlertProvider variant={variant} color={color}>
      <div className={cn(alertVariants({variant, color}), className)} {...props} />
    </AlertProvider>
  );
};

// ________________________ AlertTitle ________________________
type AlertTitleProps = React.ComponentPropsWithRef<'div'>;
const AlertTitle = ({className, ...props}: AlertTitleProps) => {
  return <div className={cn('col-start-2 text-lg font-semibold', className)} {...props} />;
};

// ________________________ AlertDescription ________________________
type AlertDescriptionProps = React.ComponentPropsWithRef<'div'>;
const AlertDescription = ({className, ...props}: AlertDescriptionProps) => {
  return <div className={cn('col-start-2 text-sm', className)} {...props} />;
};

// ________________________ AlertIcon ________________________
type AlertIconProps = React.ComponentPropsWithRef<'div'>;
const AlertIcon = ({className, children, ...props}: AlertIconProps) => {
  const {variant, color} = useAlert();
  return (
    <div className={cn(alertIconWrapperVariants({variant, color, className}))} {...props}>
      {children ? (
        children
      ) : color === 'success' ? (
        <CircleCheck
          fill="currentColor"
          strokeWidth={2}
          className={cn(alertIconVariants({variant, color}), '[&>circle]:stroke-0')}
        />
      ) : color === 'warning' ? (
        <ShieldAlert
          fill="currentColor"
          strokeWidth={2}
          className={cn(alertIconVariants({variant, color}), '[&>path:nth-child(1)]:stroke-0')}
        />
      ) : color === 'danger' ? (
        <OctagonAlert
          fill="currentColor"
          strokeWidth={2}
          className={cn(alertIconVariants({variant, color}), '[&>path:nth-child(3)]:stroke-0')}
        />
      ) : (
        <Info
          fill="currentColor"
          strokeWidth={2}
          className={cn(alertIconVariants({variant, color}), '[&>circle]:stroke-0')}
        />
      )}
    </div>
  );
};

export {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIcon,
  //
  AlertProps,
  AlertTitleProps,
  AlertDescriptionProps,
  AlertIconProps,
};
