import type {PrimitiveProps} from '@principium/primitive';
import type {BadgeVariantProps} from '@principium/theme';

import React from 'react';
import {Primitive} from '@principium/primitive';
import {badgeVariants, cn} from '@principium/theme';

type BadgeProps = PrimitiveProps<'div'> & Omit<BadgeVariantProps, 'isOneChar' | 'isDot'>;
const Badge = ({
  variant,
  size,
  shape,
  placement,
  showOutline,
  className,
  color,
  children,
  ...props
}: BadgeProps) => {
  const isOneChar = React.useMemo(() => String(children)?.length === 1, [children]);
  const isDot = React.useMemo(() => String(children)?.length === 0, [children]);

  return (
    <Primitive.span
      className={cn(
        badgeVariants({
          variant,
          size,
          shape,
          placement,
          color,
          isOneChar,
          isDot,
          showOutline,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </Primitive.span>
  );
};

export {Badge};
export type {BadgeProps};
