'use client';

import type {VariantProps} from '@principium/variants';

import React from 'react';
import {createContext} from '@principium/context';
import {alertVariants} from '@principium/theme';
import {Slot} from '@principium/slot';

type AlertContextType = {
  variant: VariantProps<typeof alertVariants.base>['variant'];
  color: VariantProps<typeof alertVariants.base>['color'];
};
const [AlertProvider, useAlert] = createContext<AlertContextType>('Alert');

// ________________________ Alert ________________________
type AlertProps = React.ComponentPropsWithRef<'div'> & VariantProps<typeof alertVariants.base>;
const Alert = ({className, variant, color,radius, ...props}: AlertProps) => {
  return (
    <AlertProvider color={color} variant={variant}>
      <div className={alertVariants.base({variant, color, className, radius})} {...props} />
    </AlertProvider>
  );
};

// ________________________ AlertTitle ________________________
type AlertTitleProps = React.ComponentPropsWithRef<'div'>;
const AlertTitle = ({className, ...props}: AlertTitleProps) => {
  const {variant, color} = useAlert();

  return <div className={alertVariants.title({variant, color, className})} {...props} />;
};

// ________________________ AlertDescription ________________________
type AlertDescriptionProps = React.ComponentPropsWithRef<'div'>;
const AlertDescription = ({className, ...props}: AlertDescriptionProps) => {
  const {variant, color} = useAlert();

  return <div className={alertVariants.description({variant, color, className})} {...props} />;
};

// ________________________ AlertIcon ________________________
type AlertIconProps = React.ComponentPropsWithRef<'div'> & {
  hideIconWrapper?: boolean;
};
const AlertIcon = ({className, children, hideIconWrapper, ...props}: AlertIconProps) => {
  const {variant, color} = useAlert();

  const defaultAlertIcon = React.useMemo(() => {
    switch (color) {
      case 'success':
        return (
          <svg
            className={alertVariants.alertIcon({variant, color})}
            fill="currentColor"
            height="24"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background */}
            <circle cx="12" cy="12" r="10" strokeWidth={0} />
            {/* Checkmark */}
            <path d="m9 12 2 2 4-4" />
          </svg>
        );
      case 'warning':
        return (
          <svg
            className={alertVariants.alertIcon({variant, color})}
            fill="currentColor"
            height="24"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background */}
            <path
              d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
              strokeWidth={0}
            />
            {/* ! */}
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
        );
      case 'danger':
        return (
          <svg
            className={alertVariants.alertIcon({variant, color})}
            fill="currentColor"
            height="24"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background */}
            <path
              d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"
              strokeWidth={0}
            />
            {/* ! */}
            <path d="M12 16h.01" />
            <path d="M12 8v4" />
          </svg>
        );
      default:
        return (
          <svg
            className={alertVariants.alertIcon({variant, color})}
            fill="currentColor"
            height="24"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background */}
            <circle cx="12" cy="12" r="10" strokeWidth={0} />
            {/* i */}
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        );
    }
  }, [variant, color]);

  return (
    <div
      className={alertVariants.iconWrapper({variant, color, hideIconWrapper, className})}
      {...props}
    >
      {children ? (
        <Slot className={alertVariants.alertIcon({variant, color})}>{children}</Slot>
      ) : (
        defaultAlertIcon
      )}
    </div>
  );
};

export {Alert, AlertTitle, AlertDescription, AlertIcon};
export type {AlertProps, AlertTitleProps, AlertDescriptionProps, AlertIconProps};
