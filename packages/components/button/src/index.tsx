import { Primitive, type PrimitiveProps } from "@principium/primitive";
import { Ripple, useRipple } from "@principium/ripple";
import { cn } from "@principium/shared-utils";

// ____________________ Dynamic Classes ____________________

// bg-*
const why =
  "bg-border bg-primary bg-secondary bg-success bg-warning bg-danger bg-border/20 bg-primary/20 bg-secondary/20 bg-success/20 bg-warning/20 bg-danger/20 bg-border/50 bg-border/90 bg-primary/90 bg-secondary/90 bg-success/90 bg-warning/90 bg-danger/90";

// text-*
const why2 =
  "text-border text-primary text-secondary text-success text-warning text-danger text-foreground text-primary-foreground text-secondary-foreground text-success-foreground text-warning-foreground text-danger-foreground";

// hover:bg-*/""||"90"||"20"||"10"
const why3 =
  "hover:bg-border hover:bg-primary hover:bg-secondary hover:bg-success hover:bg-warning hover:bg-danger hover:bg-border/90 hover:bg-primary/90 hover:bg-secondary/90 hover:bg-success/90 hover:bg-warning/90 hover:bg-danger/90 hover:bg-border/20 hover:bg-primary/20 hover:bg-secondary/20 hover:bg-success/20 hover:bg-warning/20 hover:bg-danger/20 hover:bg-border/10 hover:bg-primary/10 hover:bg-secondary/10 hover:bg-success/10 hover:bg-warning/10 hover:bg-danger/10 hover:bg-border hover:bg-primary hover:bg-secondary hover:bg-success hover:bg-warning hover:bg-danger";

// hover:text-*
const why4 =
  "hover:text-foreground hover:text-primary-foreground hover:text-secondary-foreground hover:text-success-foreground hover:text-warning-foreground hover:text-danger-foreground";

// border-*
const why5 =
  "border-border border-primary border-secondary border-success border-warning border-danger";

// shadow-*
const why6 =
  "shadow-border shadow-primary shadow-secondary shadow-success shadow-warning shadow-danger";

why + why2 + why3 + why4 + why5 + why6;

// ____________________ Base Button Classes ____________________
const baseButtonClasses =
  "relative cursor-pointer overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 [&_svg]:shrink-0 active:scale-97";

// ____________________ Button Sizes ____________________
const buttonSizes = {
  md: "h-9 px-4 py-2 has-[>svg]:px-3 min-w-18",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 min-w-16",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4 min-w-20",
  icon: "size-9",
};

// ____________________ Base Colors ____________________
const baseColors = {
  default: { bg: "border", fg: "foreground" },
  primary: { bg: "primary", fg: "primary-foreground" },
  secondary: { bg: "secondary", fg: "secondary-foreground" },
  success: { bg: "success", fg: "success-foreground" },
  warning: { bg: "warning", fg: "warning-foreground" },
  danger: { bg: "danger", fg: "danger-foreground" },
} as const;

// ____________________ Variant Recipes ____________________
const variantRecipes: Record<
  "solid" | "faded" | "bordered" | "light" | "flat" | "ghost" | "shadow",
  (color: keyof typeof baseColors) => string
> = {
  solid: (color) =>
    `bg-${baseColors[color].bg} text-${baseColors[color].fg} hover:bg-${baseColors[color].bg}/90`,

  faded: (color) =>
    `border-2 border-border bg-border/50 text-${
      color === "default" ? "foreground" : baseColors[color].bg
    }`,

  bordered: (color) =>
    `border-2 border-${baseColors[color].bg} text-${
      color === "default" ? "foreground" : baseColors[color].bg
    }`,

  light: (color) =>
    `text-${baseColors[color].bg} hover:bg-${baseColors[color].bg}/20`,

  flat: (color) =>
    `bg-${baseColors[color].bg}/20 text-${baseColors[color].bg} hover:bg-${baseColors[color].bg}/10`,

  ghost: (color) =>
    `border-2 border-${baseColors[color].bg} text-${
      color === "default" ? "foreground" : baseColors[color].bg
    } hover:text-${baseColors[color].fg} hover:bg-${baseColors[color].bg}`,

  shadow: (color) =>
    `bg-${baseColors[color].bg} text-${baseColors[color].fg} hover:bg-${baseColors[color].bg}/90 shadow-lg/40 shadow-${baseColors[color].bg}`,
};

// ____________________ Button Component ____________________
type ButtonProps = PrimitiveProps<"button"> & {
  variant?: keyof typeof variantRecipes;
  size?: keyof typeof buttonSizes;
  color?: keyof typeof baseColors;
} & { disableRipple?: boolean };

const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  size = "md",
  color = "default",
  className,
  children,
  onClick,
  disableRipple = false,
  ...props
}) => {
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
        // Size
        buttonSizes[size],
        // Variant
        variantRecipes[variant](color),
        //
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
