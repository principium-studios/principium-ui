import { colorVariants } from "@principium/shared-utils";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "relative cursor-pointer overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[background-color, border-color, color, transform, opacity] hover:opacity-97 duration-300 disabled:pointer-events-none disabled:opacity-50 shrink-0 [&_svg]:shrink-0 active:scale-97 focus:z-10 focus-visible:outline-2 focus-visible:outline-transparent focus-visible:outline-offset-2 focus-visible:outline-outline transform-gpu",
  {
    variants: {
      variant: {
        solid: "",
        bordered: "border-2",
        light: "",
        flat: "",
        faded: "border-2",
        shadow: "",
        ghost: "border-2",
      },
      size: {
        sm: "px-3 min-w-16 h-8 gap-2 rounded-sm",
        md: "px-4 min-w-20 h-10 gap-2 rounded-md",
        lg: "px-6 min-w-24 h-12 gap-3 rounded-lg",
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
      // solid / color
      {
        variant: "solid",
        color: "default",
        class: colorVariants.solid.default,
      },
      {
        variant: "solid",
        color: "primary",
        class: colorVariants.solid.primary,
      },
      {
        variant: "solid",
        color: "secondary",
        class: colorVariants.solid.secondary,
      },
      {
        variant: "solid",
        color: "success",
        class: colorVariants.solid.success,
      },
      {
        variant: "solid",
        color: "warning",
        class: colorVariants.solid.warning,
      },
      {
        variant: "solid",
        color: "danger",
        class: colorVariants.solid.danger,
      },
      // shadow / color
      {
        variant: "shadow",
        color: "default",
        class: colorVariants.shadow.default,
      },
      {
        variant: "shadow",
        color: "primary",
        class: colorVariants.shadow.primary,
      },
      {
        variant: "shadow",
        color: "secondary",
        class: colorVariants.shadow.secondary,
      },
      {
        variant: "shadow",
        color: "success",
        class: colorVariants.shadow.success,
      },
      {
        variant: "shadow",
        color: "warning",
        class: colorVariants.shadow.warning,
      },
      {
        variant: "shadow",
        color: "danger",
        class: colorVariants.shadow.danger,
      },
      // bordered / color
      {
        variant: "bordered",
        color: "default",
        class: colorVariants.bordered.default,
      },
      {
        variant: "bordered",
        color: "primary",
        class: colorVariants.bordered.primary,
      },
      {
        variant: "bordered",
        color: "secondary",
        class: colorVariants.bordered.secondary,
      },
      {
        variant: "bordered",
        color: "success",
        class: colorVariants.bordered.success,
      },
      {
        variant: "bordered",
        color: "warning",
        class: colorVariants.bordered.warning,
      },
      {
        variant: "bordered",
        color: "danger",
        class: colorVariants.bordered.danger,
      },
      // flat / color
      {
        variant: "flat",
        color: "default",
        class: colorVariants.flat.default,
      },
      {
        variant: "flat",
        color: "primary",
        class: colorVariants.flat.primary,
      },
      {
        variant: "flat",
        color: "secondary",
        class: colorVariants.flat.secondary,
      },
      {
        variant: "flat",
        color: "success",
        class: colorVariants.flat.success,
      },
      {
        variant: "flat",
        color: "warning",
        class: colorVariants.flat.warning,
      },
      {
        variant: "flat",
        color: "danger",
        class: colorVariants.flat.danger,
      },
      // faded / color
      {
        variant: "faded",
        color: "default",
        class: colorVariants.faded.default,
      },
      {
        variant: "faded",
        color: "primary",
        class: colorVariants.faded.primary,
      },
      {
        variant: "faded",
        color: "secondary",
        class: colorVariants.faded.secondary,
      },
      {
        variant: "faded",
        color: "success",
        class: colorVariants.faded.success,
      },
      {
        variant: "faded",
        color: "warning",
        class: colorVariants.faded.warning,
      },
      {
        variant: "faded",
        color: "danger",
        class: colorVariants.faded.danger,
      },
      // light / color
      {
        variant: "light",
        color: "default",
        class: [colorVariants.light.default, "hover:bg-border/40"],
      },
      {
        variant: "light",
        color: "primary",
        class: [colorVariants.light.primary, "hover:bg-primary/20"],
      },
      {
        variant: "light",
        color: "secondary",
        class: [colorVariants.light.secondary, "hover:bg-secondary/20"],
      },
      {
        variant: "light",
        color: "success",
        class: [colorVariants.light.success, "hover:bg-success/20"],
      },
      {
        variant: "light",
        color: "warning",
        class: [colorVariants.light.warning, "hover:bg-warning/20"],
      },
      {
        variant: "light",
        color: "danger",
        class: [colorVariants.light.danger, "hover:bg-danger/20"],
      },
      // ghost / color
      {
        variant: "ghost",
        color: "default",
        class: [colorVariants.ghost.default, "hover:bg-default"],
      },
      {
        variant: "ghost",
        color: "primary",
        class: [
          colorVariants.ghost.primary,
          "hover:bg-primary hover:text-primary-foreground",
        ],
      },
      {
        variant: "ghost",
        color: "secondary",
        class: [
          colorVariants.ghost.secondary,
          "hover:bg-secondary hover:text-secondary-foreground",
        ],
      },
      {
        variant: "ghost",
        color: "success",
        class: [
          colorVariants.ghost.success,
          "hover:bg-success hover:text-success-foreground",
        ],
      },
      {
        variant: "ghost",
        color: "warning",
        class: [
          colorVariants.ghost.warning,
          "hover:bg-warning hover:text-warning-foreground",
        ],
      },
      {
        variant: "ghost",
        color: "danger",
        class: [
          colorVariants.ghost.danger,
          "hover:bg-danger hover:text-danger-foreground",
        ],
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      color: "default",
    },
  }
);

export default buttonVariants;
