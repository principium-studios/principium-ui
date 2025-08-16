import {chipVariants} from '@principium/theme';
import {Primitive, PrimitiveProps} from '@principium/primitive';
import {SlotParams} from '@principium/variants';
import React from 'react';

type ChipProps = PrimitiveProps<'span'> & Omit<SlotParams<typeof chipVariants>, 'isOneChar'>;
const Chip = ({
  children,
  variant,
  color,
  size,
  radius,
  disabled,
  className,
  ...props
}: ChipProps) => {
  const isOneChar = React.useMemo(() => String(children)?.length === 1, [children]);

  return (
    <Primitive.span
      className={chipVariants({variant, color, size, radius, disabled, isOneChar, className})}
      {...props}
    >
      {children}
    </Primitive.span>
  );
};

export {Chip};
