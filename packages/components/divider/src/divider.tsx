import React from 'react';
import {dividerVariants, cn, type DividerVariantProps} from '@principium/theme';

type DividerProps = React.ComponentPropsWithRef<'hr'> & DividerVariantProps;
const Divider = ({className, orientation, ...props}: DividerProps) => {
  return (
    <hr
      data-orientation={orientation}
      className={cn(dividerVariants({orientation}), className)}
      {...props}
    />
  );
};

export {Divider};
export type {DividerProps};
