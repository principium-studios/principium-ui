import { Primitive, type PrimitiveProps } from "@principium/primitive";
import { Ripple, useRipple } from "@principium/ripple";
import { cn } from "@principium/shared-utils";
import { cva, type VariantProps } from "class-variance-authority";

// ____________________ Button Variants ____________________
const buttonVariants = cva(
  "relative cursor-pointer overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors transition-transform duration-300 disabled:pointer-events-none disabled:opacity-50 shrink-0 [&_svg]:shrink-0 active:scale-97 focus:z-10 focus-visible:outline-2 focus-visible:outline-transparent focus-visible:outline-offset-2 focus-visible:outline-outline",
  {
    variants: {
      variant: {
        solid: "",
        bordered: "border-2 bg-transparent",
        light: "bg-transparent",
        flat: "",
        faded: "border-2 border-border bg-border/50 hover:bg-border/40",
        shadow: "shadow-lg/50",
        ghost: "border-2 bg-transparent",
      },
      size: {
        md: "h-9 px-4 py-2 has-[>svg]:px-3 min-w-18",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 min-w-16",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4 min-w-20",
        icon: "size-9",
      },
      color: {
        default: "",
        primary: "",
        secondary: "",
        success: "",
        warning: "",
        danger: "",
      },
    },
    compoundVariants: [
      // Solid Background Colors
      {
        variant: ["solid", "shadow"],
        color: "default",
        className: "bg-border hover:bg-border/80",
      },
      {
        variant: ["solid", "shadow"],
        color: "primary",
        className: "bg-primary hover:bg-primary/80",
      },
      {
        variant: ["solid", "shadow"],
        color: "secondary",
        className: "bg-secondary hover:bg-secondary/80",
      },
      {
        variant: ["solid", "shadow"],
        color: "success",
        className: "bg-success hover:bg-success/80",
      },
      {
        variant: ["solid", "shadow"],
        color: "warning",
        className: "bg-warning hover:bg-warning/80",
      },
      {
        variant: ["solid", "shadow"],
        color: "danger",
        className: "bg-danger hover:bg-danger/80",
      },
      // Transparent background Colors
      {
        variant: ["flat"],
        color: "default",
        className: "bg-border/20",
      },
      {
        variant: ["flat"],
        color: "primary",
        className: "bg-primary/20",
      },
      {
        variant: ["flat"],
        color: "secondary",
        className: "bg-secondary/20",
      },
      {
        variant: ["flat"],
        color: "success",
        className: "bg-success/20",
      },
      {
        variant: ["flat"],
        color: "warning",
        className: "bg-warning/20",
      },
      {
        variant: ["flat"],
        color: "danger",
        className: "bg-danger/20",
      },
      // Hover transparent colors
      {
        variant: ["flat", "light"],
        color: "default",
        className: "hover:bg-border/10",
      },
      {
        variant: ["flat", "light"],
        color: "primary",
        className: "hover:bg-primary/10",
      },
      {
        variant: ["flat", "light"],
        color: "secondary",
        className: "hover:bg-secondary/10",
      },
      {
        variant: ["flat", "light"],
        color: "success",
        className: "hover:bg-success/10",
      },
      {
        variant: ["flat", "light"],
        color: "warning",
        className: "hover:bg-warning/10",
      },
      {
        variant: ["flat", "light"],
        color: "danger",
        className: "hover:bg-danger/10",
      },
      // Foreground Text Colors
      {
        variant: ["solid", "shadow"],
        color: "default",
        className: "text-foreground",
      },
      {
        variant: ["solid", "shadow"],
        color: "primary",
        className: "text-primary-foreground",
      },
      {
        variant: ["solid", "shadow"],
        color: "secondary",
        className: "text-secondary-foreground",
      },
      {
        variant: ["solid", "shadow"],
        color: "success",
        className: "text-success-foreground",
      },
      {
        variant: ["solid", "shadow"],
        color: "warning",
        className: "text-warning-foreground",
      },
      {
        variant: ["solid", "shadow"],
        color: "danger",
        className: "text-danger-foreground",
      },
      // Background Text Colors
      {
        variant: ["faded", "bordered", "light", "flat", "ghost"],
        color: "default",
        className: "text-foreground",
      },
      {
        variant: ["faded", "bordered", "light", "flat", "ghost"],
        color: "primary",
        className: "text-primary",
      },
      {
        variant: ["faded", "bordered", "light", "flat", "ghost"],
        color: "secondary",
        className: "text-secondary",
      },
      {
        variant: ["faded", "bordered", "light", "flat", "ghost"],
        color: "success",
        className: "text-success",
      },
      {
        variant: ["faded", "bordered", "light", "flat", "ghost"],
        color: "warning",
        className: "text-warning",
      },
      {
        variant: ["faded", "bordered", "light", "flat", "ghost"],
        color: "danger",
        className: "text-danger",
      },
      // Ghost additional styles
      {
        variant: "ghost",
        color: "default",
        className: "hover:bg-border hover:text-foreground",
      },
      {
        variant: "ghost",
        color: "primary",
        className: "hover:bg-primary hover:text-primary-foreground",
      },
      {
        variant: "ghost",
        color: "secondary",
        className: "hover:bg-secondary hover:text-secondary-foreground",
      },
      {
        variant: "ghost",
        color: "success",
        className: "hover:bg-success hover:text-success-foreground",
      },
      {
        variant: "ghost",
        color: "warning",
        className: "hover:bg-warning hover:text-warning-foreground",
      },
      {
        variant: "ghost",
        color: "danger",
        className: "hover:bg-danger hover:text-danger-foreground",
      },
      // Border Colors
      {
        variant: ["bordered", "ghost"],
        color: "default",
        className: "border-border",
      },
      {
        variant: ["bordered", "ghost"],
        color: "primary",
        className: "border-primary",
      },
      {
        variant: ["bordered", "ghost"],
        color: "secondary",
        className: "border-secondary",
      },
      {
        variant: ["bordered", "ghost"],
        color: "success",
        className: "border-success",
      },
      {
        variant: ["bordered", "ghost"],
        color: "warning",
        className: "border-warning",
      },
      {
        variant: ["bordered", "ghost"],
        color: "danger",
        className: "border-danger",
      },
      // Shadow Colors
      {
        variant: "shadow",
        color: "default",
        className: "shadow-border",
      },
      {
        variant: "shadow",
        color: "primary",
        className: "shadow-primary",
      },
      {
        variant: "shadow",
        color: "secondary",
        className: "shadow-secondary",
      },
      {
        variant: "shadow",
        color: "success",
        className: "shadow-success",
      },
      {
        variant: "shadow",
        color: "warning",
        className: "shadow-warning",
      },
      {
        variant: "shadow",
        color: "danger",
        className: "shadow-danger",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      color: "default",
    },
  }
);

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
