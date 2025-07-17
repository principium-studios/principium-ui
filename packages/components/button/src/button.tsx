import {Primitive, type PrimitiveProps} from '@principium/primitive';
import {Ripple, useRipple} from '@principium/ripple';
import {button, type ButtonVariantProps} from "@principium/theme";

// ____________________ Button Component ____________________
type ButtonProps = PrimitiveProps<'button'> &
  ButtonVariantProps & {disableRipple?: boolean};

const Button = ({
  variant,
  size,
  color,
  className,
  children,
  onClick,
  disableRipple = false,
  disabled,
  ...props
}: ButtonProps) => {
  const {ripples, createRipple, removeRipple} = useRipple();

  return (
    <Primitive.button
      {...props}
      onClick={(e) => {
        if (disabled) return;
        !disableRipple && createRipple(e);
        onClick?.(e);
      }}
      disabled={disabled}
      aria-disabled={disabled}
      className={button({variant, size, color, className})}
    >
      {children}
      {!disableRipple && <Ripple ripples={ripples} onClear={removeRipple} />}
    </Primitive.button>
  );
};

export {Button};

export type {ButtonProps};
