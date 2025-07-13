import { Primitive, type PrimitiveProps } from "@principium/primitive";
import { Ripple, useRipple } from "@principium/ripple";
import { cn } from "@principium/shared-utils";

const baseButtonClasses =
  "relative cursor-pointer overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 [&_svg]:shrink-0 aria-invalid:outline-danger/20 dark:aria-invalid:outline-danger/40 active:scale-97";

const buttonVariants = {
  variant: {
    solid: "border-0",
    faded:
      "bg-border/50 hover:bg-border/40 dark:bg-border/60 border-2 border-border",
    bordered: "border-2 bg-transparent",
    light: "bg-transparent ",
    flat: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
    ghost: "bg-transparent border-2",
    shadow: "shadow-lg/40",
  },
  size: {
    md: "h-9 px-4 py-2 has-[>svg]:px-3 min-w-18",
    sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 min-w-16",
    lg: "h-10 rounded-md px-6 has-[>svg]:px-4 min-w-20",
    icon: "size-9",
  },
  color: {
    background: {
      default: "bg-border hover:bg-border/90",
      primary: "bg-primary hover:bg-primary/90",
      secondary: "bg-secondary hover:bg-secondary/90",
      danger: "bg-danger hover:bg-danger/90",
      success: "bg-success hover:bg-success/90",
      warning: "bg-warning hover:bg-warning/90",
    },
    backgroundFlat: {
      default: "bg-border/20",
      primary: "bg-primary/20",
      secondary: "bg-secondary/20",
      danger: "bg-danger/20",
      success: "bg-success/20",
      warning: "bg-warning/20",
    },
    backgroundFlatHover: {
      default: "hover:bg-border/20",
      primary: "hover:bg-primary/20",
      secondary: "hover:bg-secondary/20",
      danger: "hover:bg-danger/20",
      success: "hover:bg-success/20",
      warning: "hover:bg-warning/20",
    },
    border: {
      default: "border-border",
      primary: "border-primary",
      secondary: "border-secondary",
      danger: "border-danger",
      success: "border-success",
      warning: "border-warning",
    },
    textNoForeground: {
      default: "text-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      danger: "text-danger",
      success: "text-success",
      warning: "text-warning",
    },
    text: {
      default: "text-foreground",
      primary: "text-primary-foreground",
      secondary: "text-secondary-foreground",
      danger: "text-danger-foreground",
      success: "text-success-foreground",
      warning: "text-warning-foreground",
    },
    textGhost: {
      default: "text-foreground",
      primary: "text-primary hover:text-background",
      secondary: "text-secondary hover:text-background",
      danger: "text-danger hover:text-danger-foreground",
      success: "text-success hover:text-success-foreground",
      warning: "text-warning hover:text-warning-foreground",
    },
    shadow: {
      default: "shadow-border",
      primary: "shadow-primary",
      secondary: "shadow-secondary",
      danger: "shadow-danger",
      success: "shadow-success",
      warning: "shadow-warning",
    },
  },
};

type ButtonVariants = {
  variant?: keyof typeof buttonVariants.variant;
  size?: keyof typeof buttonVariants.size;
  color?: keyof typeof buttonVariants.color.background;
};

const Button = ({
  variant = "solid",
  size = "md",
  color = "default",
  className,
  children,
  onClick,
  disableRipple = false,
  ...props
}: PrimitiveProps<"button"> & ButtonVariants & { disableRipple?: boolean }) => {
  const { ripples, createRipple, removeRipple } = useRipple();

  return (
    <Primitive.button
      {...props}
      onClick={(e) => {
        (!disableRipple || props.disabled) && createRipple(e);
        onClick?.(e);
      }}
      className={cn(
        // Base classes
        baseButtonClasses,
        // Background color
        variant === "flat"
          ? buttonVariants.color.backgroundFlat[color] +
              " " +
              buttonVariants.color.backgroundFlatHover[color]
          : variant === "bordered"
          ? ""
          : variant === "light"
          ? buttonVariants.color.backgroundFlatHover[color]
          : buttonVariants.color.background[color],
        // Border color
        buttonVariants.color.border[color],
        // Text color
        variant === "faded" || variant === "bordered" || variant === "flat"
          ? buttonVariants.color.textNoForeground[color]
          : variant === "ghost"
          ? buttonVariants.color.textGhost[color]
          : variant === "light"
          ? buttonVariants.color.textNoForeground[color]
          : buttonVariants.color.text[color],
        // Size
        buttonVariants.size[size],
        // Variant (eliminates classes)
        buttonVariants.variant[variant],
        // Shadow
        buttonVariants.color.shadow[color],
        // Custom classes
        className
      )}
    >
      {children}
      {!disableRipple && (
        <Ripple ripples={ripples} removeRipple={removeRipple} />
      )}
    </Primitive.button>
  );
};

export default Button;
