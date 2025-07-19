import type {PrimitiveProps} from '@principium/primitive';
import type {BadgeVariantProps} from '@principium/theme';

import React from 'react';
import {Primitive} from '@principium/primitive';
import {badgeVariants, cn} from '@principium/theme';

type BadgeProps = PrimitiveProps<'div'> &
  Omit<BadgeVariantProps, 'isOneChar' | 'isDot'> & {
    content?: React.ReactNode;
  };
const Badge = ({
  variant,
  size,
  shape,
  placement,
  showOutline,
  className,
  content,
  color,
  children,
  ...props
}: BadgeProps) => {
  const isOneChar = React.useMemo(() => String(content)?.length === 1, [content]);
  const isDot = React.useMemo(() => String(content)?.length === 0, [content]);

  return (
    <div className={cn(badgeVariants.base(), className)}>
      {/* Badge */}
      <Primitive.span
        className={cn(
          badgeVariants.badge({
            variant,
            size,
            shape,
            placement,
            color,
            isOneChar,
            isDot,
            showOutline,
          }),
        )}
        {...props}
      >
        {content}
      </Primitive.span>
      {/* Content */}
      {children}
    </div>
  );
};

export {Badge};
export type {BadgeProps};
