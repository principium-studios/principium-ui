import React from 'react';
import {dividerVariants} from '@principium/theme';

type VerticalProps = React.ComponentPropsWithRef<'div'> & {
  orientation: 'vertical';
};
type HorizontalProps = React.ComponentPropsWithRef<'hr'> & {
  orientation?: 'horizontal' | undefined | null;
};
type DividerProps = VerticalProps | HorizontalProps;

const Divider = ({className, orientation, ...props}: DividerProps) => {
  const Component = orientation === 'vertical' ? 'div' : 'hr';

  return (
    // @ts-ignore
    <Component
      className={dividerVariants({orientation, className})}
      data-orientation={orientation}
      role="separator"
      {...props}
    />
  );
};

export {Divider};
export type {DividerProps};
