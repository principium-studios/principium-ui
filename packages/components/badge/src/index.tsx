import React from 'react';
import {Primitive, type PrimitiveProps} from '@principium/primitive';
import {cn} from '@principium/shared-utils';
import {type VariantProps} from 'class-variance-authority';
import {BadgeVariants} from './badgeVariants';

type BadgeProps = PrimitiveProps<'div'> &
  VariantProps<typeof BadgeVariants> & {
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
    <div className="relative shrink-0">
      {/* Badge */}
      <Primitive.span
        className={cn(
          BadgeVariants({
            variant,
            size,
            shape,
            placement,
            color,
            showOutline,
            isOneChar,
            isDot,
            className,
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

export {
  Badge,
  //
  BadgeProps,
};
