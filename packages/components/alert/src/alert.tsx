import React from 'react';
import {createContext} from '@principium/context';
import {alertVariants, AlertSlots, AlertVariantProps} from '@principium/theme';
import {Slot} from '@principium/slot';

type AlertContextType = Record<
  Exclude<AlertSlots, 'base' | 'alertIcon'>,
  (props?: any) => string
> & {
  defaultAlertIcon: React.ReactNode;
};
const [AlertProvider, useAlert] = createContext<AlertContextType>('Alert');

// ________________________ Alert ________________________
type AlertProps = React.ComponentPropsWithRef<'div'> & AlertVariantProps;
const Alert = ({className, variant, color, ...props}: AlertProps) => {
  const {base, title, description, iconWrapper, alertIcon} = alertVariants({variant, color});
  
  const defaultAlertIcon = React.useMemo(() => {
    switch (color) {
      case 'success':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={alertIcon()}
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
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={alertIcon()}
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
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={alertIcon()}
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
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={alertIcon()}
          >
            {/* Background */}
            <circle cx="12" cy="12" r="10" strokeWidth={0} />
            {/* i */}
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        );
    }
  }, [alertIcon]);

  return (
    <AlertProvider
      defaultAlertIcon={defaultAlertIcon}
      title={title}
      description={description}
      iconWrapper={iconWrapper}
    >
      <div className={base({className})} {...props} />
    </AlertProvider>
  );
};

// ________________________ AlertTitle ________________________
type AlertTitleProps = React.ComponentPropsWithRef<'div'>;
const AlertTitle = ({className, ...props}: AlertTitleProps) => {
  const {title} = useAlert();
  return <div className={title({className})} {...props} />;
};

// ________________________ AlertDescription ________________________
type AlertDescriptionProps = React.ComponentPropsWithRef<'div'>;
const AlertDescription = ({className, ...props}: AlertDescriptionProps) => {
  const {description} = useAlert();
  return <div className={description({className})} {...props} />;
};

// ________________________ AlertIcon ________________________
type AlertIconProps = React.ComponentPropsWithRef<'div'>;
const AlertIcon = ({className, children, ...props}: AlertIconProps) => {
  const {iconWrapper, defaultAlertIcon} = useAlert();
  return (
    <div className={iconWrapper({className})} {...props}>
      {children ? <Slot className={iconWrapper()}>{children}</Slot> : defaultAlertIcon}
    </div>
  );
};

export {Alert, AlertTitle, AlertDescription, AlertIcon};

export type {AlertProps, AlertTitleProps, AlertDescriptionProps, AlertIconProps};
