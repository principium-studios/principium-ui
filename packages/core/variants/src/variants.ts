import {
  Slots,
  MultiSlots,
  Variants,
  DefaultVariants,
  CompoundVariants,
  VariantConfig,
  VariantProps,
  PvReturn,
  ClassValue,
  InvalidVariantError,
  InvalidVariantValueError,
} from './types';

/**
 * Converts a variant value to a string
 */
function normalizeVariantValue(value: unknown): string | undefined {
  if (typeof value === 'boolean') {
    return value.toString();
  }
  return value as string | undefined;
}

/**
 * Validates variant props against the configuration
 */
function validateVariantProps<
  S extends Slots,
  V extends Variants<S>,
  DV extends DefaultVariants<V, S>,
  CV extends CompoundVariants<V, S>,
>(props: VariantProps<V, S> | undefined, config: VariantConfig<S, V, DV, CV>): void {
  if (!props || !config.variants) return;

  for (const [key, value] of Object.entries(props)) {
    if (!config.variants[key]) {
      throw new InvalidVariantError(key);
    }
    const normalizedValue = normalizeVariantValue(value);
    if (normalizedValue && !config.variants[key][normalizedValue]) {
      throw new InvalidVariantValueError(key, String(value));
    }
  }
}

/**
 * Gets the variant class for a specific slot
 */
function getVariantClass<S extends Slots>(
  slotName: keyof S | null,
  variantValue: unknown,
): ClassValue {
  if (typeof variantValue === 'object' && variantValue !== null && slotName) {
    return (variantValue as Record<string, ClassValue>)[slotName as string];
  }
  return variantValue as ClassValue;
}

/**
 * Evaluates compound variants for a specific slot
 */
function evaluateCompoundVariants<
  S extends Slots,
  V extends Variants<S>,
  DV extends DefaultVariants<V, S>,
  CV extends CompoundVariants<V, S>,
>(
  props: VariantProps<V, S>,
  config: VariantConfig<S, V, DV, CV>,
  slotName: keyof S | null,
): ClassValue {
  if (!config.compoundVariants) return '';

  return config.compoundVariants
    .filter((compound) => {
      return Object.entries(compound).every(([key, value]) => {
        if (key === 'className') return true;
        const propValue = props[key as keyof V];
        const compoundValue = normalizeVariantValue(value);
        return normalizeVariantValue(propValue) === compoundValue;
      });
    })
    .map((compound) => {
      if (typeof compound.className === 'string') {
        return compound.className;
      }
      if (slotName) {
        return (compound.className as Record<string, ClassValue>)[slotName as string] || '';
      }
      return '';
    })
    .filter(Boolean)
    .join(' ');
}

/**
 * Creates a slot function that evaluates variants and returns classes
 */
function createSlotFunction<
  S extends Slots,
  V extends Variants<S>,
  DV extends DefaultVariants<V, S>,
  CV extends CompoundVariants<V, S>,
>(
  slotName: keyof S | null,
  baseClasses: ClassValue,
  config: VariantConfig<S, V, DV, CV>,
): (props?: VariantProps<V, S>) => ClassValue {
  return (props?: VariantProps<V, S>) => {
    validateVariantProps(props, config);

    const mergedProps = {
      ...config.defaultVariants,
      ...props,
    } as VariantProps<V, S>;

    // Start with base classes
    const classes: ClassValue[] = [baseClasses];

    // Add variant classes
    if (config.variants) {
      for (const [variantName, variantValue] of Object.entries(mergedProps)) {
        const normalizedValue = normalizeVariantValue(variantValue);
        if (normalizedValue && config.variants[variantName]) {
          const variantClass = getVariantClass(
            slotName,
            config.variants[variantName][normalizedValue],
          );
          if (variantClass) {
            classes.push(variantClass);
          }
        }
      }
    }

    // Add compound variants
    const compoundClass = evaluateCompoundVariants(mergedProps, config, slotName);
    if (compoundClass) {
      classes.push(compoundClass);
    }

    return classes.filter(Boolean).join(' ');
  };
}

/**
 * Main variant engine function that creates slot-split variant functions
 */
export function pv<
  S extends Slots,
  V extends Variants<S>,
  DV extends DefaultVariants<V, S>,
  CV extends CompoundVariants<V, S>,
>(
  slots: S,
  config: VariantConfig<S, V, DV, CV>,
): S extends MultiSlots ? PvReturn<S, V> : (props?: VariantProps<V, S>) => ClassValue {
  // Handle single slot case
  if (typeof slots === 'string' || slots === null || slots === undefined) {
    return createSlotFunction(null, slots, config) as any;
  }

  // Handle multi-slot case
  const result = {} as PvReturn<S & MultiSlots, V>;
  for (const [slotName, baseClasses] of Object.entries(slots)) {
    result[slotName as keyof S] = createSlotFunction(slotName as keyof S, baseClasses, config);
  }
  return result as any;
}

// Example usage:
// Single slot
const button = pv('btn', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

// Multi-slot
const card = pv(
  {
    header: 'card-header',
    body: 'card-body',
    footer: 'card-footer',
  },
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-md',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);
