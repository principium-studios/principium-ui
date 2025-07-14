const solid = {
  default: "bg-border text-foreground",
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  success: "bg-success text-success-foreground",
  warning: "bg-warning text-warning-foreground",
  danger: "bg-danger text-danger-foreground",
  foreground: "bg-foreground text-background",
};

const shadow = {
  default: `shadow-lg shadow-border/50 ${solid.default}`,
  primary: `shadow-lg shadow-primary/40 ${solid.primary}`,
  secondary: `shadow-lg shadow-secondary/40 ${solid.secondary}`,
  success: `shadow-lg shadow-success/40 ${solid.success}`,
  warning: `shadow-lg shadow-warning/40 ${solid.warning}`,
  danger: `shadow-lg shadow-danger/40 ${solid.danger}`,
  foreground: `shadow-lg shadow-foreground/40 ${solid.foreground}`,
};

const bordered = {
  default: "bg-transparent border-border text-foreground",
  primary: "bg-transparent border-primary text-primary",
  secondary: "bg-transparent border-secondary text-secondary",
  success: "bg-transparent border-success text-success",
  warning: "bg-transparent border-warning text-warning",
  danger: "bg-transparent border-danger text-danger",
  foreground: "bg-transparent border-foreground text-foreground",
};

const flat = {
  default: "bg-border/40 text-foreground",
  primary: "bg-primary/20 text-primary",
  secondary: "bg-secondary/20 text-secondary",
  success: "bg-success/20 text-success",
  warning: "bg-warning/20 text-warning",
  danger: "bg-danger/20 text-danger",
  foreground: "bg-foreground/10 text-foreground",
};

const faded = {
  default: "border-border bg-border-50 dark:bg-border-900 text-foreground",
  primary: "border-border bg-border-50 dark:bg-border-900 text-primary",
  secondary: "border-border bg-border-50 dark:bg-border-900 text-secondary",
  success: "border-border bg-border-50 dark:bg-border-900 text-success",
  warning: "border-border bg-border-50 dark:bg-border-900 text-warning",
  danger: "border-border bg-border-50 dark:bg-border-900 text-danger",
  foreground: "border-border bg-border-50 dark:bg-border-900 text-foreground",
};

const light = {
  default: "bg-transparent text-foreground",
  primary: "bg-transparent text-primary",
  secondary: "bg-transparent text-secondary",
  success: "bg-transparent text-success",
  warning: "bg-transparent text-warning",
  danger: "bg-transparent text-danger",
  foreground: "bg-transparent text-foreground",
};

const ghost = {
  default: "bg-transparent border-border text-foreground",
  primary: "bg-transparent border-primary text-primary",
  secondary: "bg-transparent border-secondary text-secondary",
  success: "bg-transparent border-success text-success",
  warning: "bg-transparent border-warning text-warning",
  danger: "bg-transparent border-danger text-danger",
  foreground: "bg-transparent border-foreground text-foreground",
};

export const colorVariants = {
  solid,
  shadow,
  bordered,
  flat,
  faded,
  light,
  ghost,
};
