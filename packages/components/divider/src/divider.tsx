import type {DividerVariantProps} from '@principium/theme';

import React from 'react';
import {dividerVariants, cn} from '@principium/theme';

type DividerProps = React.ComponentPropsWithRef<'hr'> & DividerVariantProps;
const Divider = ({className, orientation, ...props}: DividerProps) => {
  return (
    <hr
      className={cn(dividerVariants({orientation}), className)}
      data-orientation={orientation}
      {...props}
    />
  );
};

export {Divider};
export type {DividerProps};
