const solid = {
  default: "bg-border-300 text-background-950",
  primary: "bg-primary-600 text-primary-50",
  secondary: "bg-secondary-600 text-secondary-50",
  success: "bg-success-600 text-success-950",
  warning: "bg-warning-600 text-warning-950",
  danger: "bg-danger-600 text-danger-50",
};

const shadow = {
  default: `shadow-lg shadow-border-300/50 ${solid.default}`,
  primary: `shadow-lg shadow-primary-600/40 ${solid.primary}`,
  secondary: `shadow-lg shadow-secondary-600/40 ${solid.secondary}`,
  success: `shadow-lg shadow-success-600/40 ${solid.success}`,
  warning: `shadow-lg shadow-warning-600/40 ${solid.warning}`,
  danger: `shadow-lg shadow-danger-600/40 ${solid.danger}`,
};

const bordered = {
  default: "bg-transparent border-border-300 text-background-950",
  primary: "bg-transparent border-primary-600 text-primary-600",
  secondary: "bg-transparent border-secondary-600 text-secondary-600",
  success: "bg-transparent border-success-600 text-success-600",
  warning: "bg-transparent border-warning-600 text-warning-600",
  danger: "bg-transparent border-danger-600 text-danger-600",
};

const flat = {
  default: "bg-border-300/40 text-background-950",
  primary: "bg-primary-600/20 text-primary-600",
  secondary: "bg-secondary-600/20 text-secondary-600",
  success: "bg-success-600/20 text-success-600",
  warning: "bg-warning-600/20 text-warning-600",
  danger: "bg-danger-600/20 text-danger-600",
};

const faded = {
  default: "border-border-300 bg-border-100 text-background-950",
  primary: "border-border-300 bg-border-100 text-primary-600",
  secondary: "border-border-300 bg-border-100 text-secondary-600",
  success: "border-border-300 bg-border-100 text-success-600",
  warning: "border-border-300 bg-border-100 text-warning-600",
  danger: "border-border-300 bg-border-100 text-danger-600",
};

const light = {
  default: "bg-transparent text-background-950",
  primary: "bg-transparent text-primary-600",
  secondary: "bg-transparent text-secondary-600",
  success: "bg-transparent text-success-600",
  warning: "bg-transparent text-warning-600",
  danger: "bg-transparent text-danger-600",
};

const ghost = {
  default: "bg-transparent border-border-300 text-background-950",
  primary: "bg-transparent border-primary-600 text-primary-600",
  secondary: "bg-transparent border-secondary-600 text-secondary-600",
  success: "bg-transparent border-success-600 text-success-600",
  warning: "bg-transparent border-warning-600 text-warning-600",
  danger: "bg-transparent border-danger-600 text-danger-600",
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
