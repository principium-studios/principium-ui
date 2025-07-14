import { Primitive, type PrimitiveProps } from "@principium/primitive";
import { Ripple, useRipple } from "@principium/ripple";
import { cn } from "@principium/shared-utils";
import { type VariantProps } from "class-variance-authority";
import buttonVariants from "./buttonVariants";

// ____________________ Button Component ____________________
type ButtonProps = PrimitiveProps<"button"> &
  VariantProps<typeof buttonVariants> & { disableRipple?: boolean };

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  color,
  className,
  children,
  onClick,
  disableRipple = false,
  disabled,
  ...props
}) => {
  const { ripples, createRipple, removeRipple } = useRipple();

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
      className={cn(buttonVariants({ variant, size, color, className }))}
    >
      {children}
      {!disableRipple && (
        <Ripple ripples={ripples} removeRipple={removeRipple} />
      )}
    </Primitive.button>
  );
};

export default Button;
