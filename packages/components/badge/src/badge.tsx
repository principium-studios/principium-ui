import type {PrimitiveProps} from '@principium/primitive';
import type {SlotParams} from '@principium/variants';

import React from 'react';
import {Primitive} from '@principium/primitive';
import {badgeVariants} from '@principium/theme';

type BadgeProps = PrimitiveProps<'div'> &
  Omit<SlotParams<typeof badgeVariants>, 'isOneChar' | 'isDot'>;
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
  const isDot = React.useMemo(() => String(children)?.length === 0 || !children, [children]);

  return (
    <Primitive.span
      className={badgeVariants({
        variant,
        size,
        shape,
        placement,
        color,
        isOneChar,
        isDot,
        showOutline,
        className,
      })}
      {...props}
    >
      {children}
    </Primitive.span>
  );
};

export {Badge};
export type {BadgeProps};
