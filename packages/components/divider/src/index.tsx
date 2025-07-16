import React from 'react';
import {cn} from '@principium/shared-utils';
import {dividerVariants} from './dividerVariants';
import {VariantProps} from 'class-variance-authority';

type DividerProps = React.ComponentPropsWithRef<'hr'> & VariantProps<typeof dividerVariants>;
const Divider = ({className, orientation, ...props}: DividerProps) => {
  return (
    <hr
      data-orientation={orientation}
      className={cn(dividerVariants({orientation, className}))}
      {...props}
    />
  );
};

export {
  Divider,
  //
  DividerProps,
};
