import React from 'react';
import {Primitive, type PrimitiveProps} from '@principium/primitive';
import {badgeVariants, type BadgeVariantProps} from '@principium/theme';

type BadgeProps = PrimitiveProps<'div'> &
  BadgeVariantProps & {
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

  const {badge, base} = badgeVariants({
    variant,
    size,
    shape,
    placement,
    color,
    showOutline,
    isOneChar,
    isDot,
    className,
  });

  return (
    <div className={base()}>
      {/* Badge */}
      <Primitive.span
        className={badge()}
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
