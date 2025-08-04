const solid = {
  default: 'bg-border-100 text-background-950',
  primary: 'bg-primary-400 text-primary-50',
  secondary: 'bg-secondary-400 text-secondary-50',
  success: 'bg-success-400 text-success-50',
  warning: 'bg-warning-400 text-warning-50',
  danger: 'bg-danger-400 text-danger-50',
};

const shadow = {
  default: `shadow-lg shadow-border-200/50 ${solid.default}`,
  primary: `shadow-lg shadow-primary-400/40 ${solid.primary}`,
  secondary: `shadow-lg shadow-secondary-400/40 ${solid.secondary}`,
  success: `shadow-lg shadow-success-400/40 ${solid.success}`,
  warning: `shadow-lg shadow-warning-400/40 ${solid.warning}`,
  danger: `shadow-lg shadow-danger-400/40 ${solid.danger}`,
};

const bordered = {
  default: 'bg-transparent border-border-200 text-background-950',
  primary: 'bg-transparent border-primary-400 text-primary-500',
  secondary: 'bg-transparent border-secondary-400 text-secondary-500',
  success: 'bg-transparent border-success-400 text-success-500',
  warning: 'bg-transparent border-warning-400 text-warning-500',
  danger: 'bg-transparent border-danger-400 text-danger-500',
};

const flat = {
  default: 'bg-border-200/40 text-background-950',
  primary: 'bg-primary-400/20 text-primary-400',
  secondary: 'bg-secondary-400/20 text-secondary-400',
  success: 'bg-success-400/20 text-success-600',
  warning: 'bg-warning-400/20 text-warning-600',
  danger: 'bg-danger-400/20 text-danger-400',
};

const faded = {
  default: 'border-border-200 bg-border-100 text-background-950',
  primary: 'border-border-200 bg-border-100 text-primary-400',
  secondary: 'border-border-200 bg-border-100 text-secondary-400',
  success: 'border-border-200 bg-border-100 text-success-400',
  warning: 'border-border-200 bg-border-100 text-warning-400',
  danger: 'border-border-200 bg-border-100 text-danger-400',
};

const light = {
  default: 'bg-transparent text-background-950',
  primary: 'bg-transparent text-primary-500',
  secondary: 'bg-transparent text-secondary-500',
  success: 'bg-transparent text-success-500',
  warning: 'bg-transparent text-warning-500',
  danger: 'bg-transparent text-danger-500',
};

const ghost = {
  default: 'bg-transparent border-border-200 text-background-950',
  primary: 'bg-transparent border-primary-400 text-primary-500',
  secondary: 'bg-transparent border-secondary-400 text-secondary-500',
  success: 'bg-transparent border-success-400 text-success-500',
  warning: 'bg-transparent border-warning-400 text-warning-500',
  danger: 'bg-transparent border-danger-400 text-danger-500',
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
