const solid = {
  default: 'bg-border text-foreground',
  primary: 'bg-primary text-primary-foreground',
  secondary: 'bg-secondary text-secondary-foreground',
  success: 'bg-success text-success-foreground',
  warning: 'bg-warning text-warning-foreground',
  danger: 'bg-danger text-danger-foreground',
};

const shadow = {
  default: `shadow-lg shadow-border-200/50 ${solid.default}`,
  primary: `shadow-lg shadow-primary/40 ${solid.primary}`,
  secondary: `shadow-lg shadow-secondary/40 ${solid.secondary}`,
  success: `shadow-lg shadow-success/40 ${solid.success}`,
  warning: `shadow-lg shadow-warning/40 ${solid.warning}`,
  danger: `shadow-lg shadow-danger/40 ${solid.danger}`,
};

const bordered = {
  default: 'bg-transparent border-border text-foreground',
  primary: 'bg-transparent border-primary text-primary',
  secondary: 'bg-transparent border-secondary text-secondary',
  success: 'bg-transparent border-success text-success',
  warning: 'bg-transparent border-warning text-warning',
  danger: 'bg-transparent border-danger text-danger',
};

const flat = {
  default: 'bg-border/40 text-foreground',
  primary: 'bg-primary/20 text-primary',
  secondary: 'bg-secondary/20 text-secondary',
  success: 'bg-success/20 text-success-800 dark:text-success',
  warning: 'bg-warning/20 text-warning-600 dark:text-warning',
  danger: 'bg-danger/20 text-danger',
};

const faded = {
  default: 'border-border bg-border-100 text-foreground',
  primary: 'border-border bg-border-100 text-primary',
  secondary: 'border-border bg-border-100 text-secondary',
  success: 'border-border bg-border-100 text-success',
  warning: 'border-border bg-border-100 text-warning',
  danger: 'border-border bg-border-100 text-danger',
};

const light = {
  default: 'bg-transparent text-foreground',
  primary: 'bg-transparent text-primary',
  secondary: 'bg-transparent text-secondary',
  success: 'bg-transparent text-success',
  warning: 'bg-transparent text-warning',
  danger: 'bg-transparent text-danger',
};

const ghost = {
  default: 'bg-transparent border-border text-foreground',
  primary: 'bg-transparent border-primary text-primary',
  secondary: 'bg-transparent border-secondary text-secondary',
  success: 'bg-transparent border-success text-success',
  warning: 'bg-transparent border-warning text-warning',
  danger: 'bg-transparent border-danger text-danger',
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
