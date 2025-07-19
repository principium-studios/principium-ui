import type {
  Slots,
  MultiSlots,
  Variants,
  DefaultVariants,
  CompoundVariants,
  VariantConfig,
  VariantProps,
  ClassValue,
  SlotFunction,
  SlotFunctions,
} from './types';

import {InvalidVariantError, InvalidVariantValueError} from './types';

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

  for (const [variantName, variantOption] of Object.entries(props)) {
    // If provided variant is not in the config, throw an error
    if (!config.variants[variantName]) {
      throw new InvalidVariantError(variantName);
    }

    // If provided option is not in the variant, throw an error
    const normalizedOption = normalizeVariantValue(variantOption);

    if (
      normalizedOption &&
      !(normalizedOption in config.variants[variantName]) &&
      normalizedOption !== 'false' &&
      normalizedOption !== 'true'
    ) {
      throw new InvalidVariantValueError(variantName, String(variantOption));
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
  /**
   * This handles:
   * - If the variant option is an object apply it only to the slotName, otherwise apply it to all slots
   * - If slotName is null, apply the variant to the base (baisically still all slots)
   */
  if (typeof variantValue === 'object' && variantValue !== null && slotName) {
    return (variantValue as Record<string, ClassValue>)[slotName as string] ?? null;
  }

  return (variantValue as ClassValue) ?? null;
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
  if (!config.compoundVariants) return null;

  return config.compoundVariants
    .filter((compound) => {
      return Object.entries(compound).every(([key, value]) => {
        if (key === 'className' || key === 'class') return true;

        // Compare the **pickedVariantOption** with the variantOption in the compound variant
        const propValue = props[key as keyof V];
        const compoundValue = normalizeVariantValue(value);

        // If the compound value is an array, check if the pickedOption matches every option in the array
        if (Array.isArray(compoundValue)) {
          return compoundValue.some(
            (v) => normalizeVariantValue(propValue) === normalizeVariantValue(v),
          );
        }

        // Otherwise do a direct comparison
        return normalizeVariantValue(propValue) === compoundValue;
      });
    })
    .map((compound) => {
      // Get the class value from either className or class property
      const classValue = compound.className || compound.class;

      // If there is no class value, return null
      if (!classValue) return null;

      // If the class value is a string or array, return it directly
      if (typeof classValue === 'string' || Array.isArray(classValue)) {
        return classValue;
      }

      // If the class value is an object, return the class for the slotName
      return classValue[slotName as string] ?? null;
    })
    .filter(Boolean);
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

    // Merge default variants with provided props, filtering out undefined values
    const pickedVariants = {
      ...config.defaultVariants,
      ...Object.fromEntries(
        Object.entries(props || {}).filter(([_, value]) => value !== undefined),
      ),
    } as VariantProps<V, S>;

    // Start with base classes
    const classes: ClassValue[] = [baseClasses];

    // Add variant classes
    if (config.variants) {
      // Loop through picked variants and add variant classes
      for (const [variantName, variantValue] of Object.entries(pickedVariants)) {
        // Return normalized value of variant value, if it is a boolean, return the string value of the boolean
        // Could also be named as pickedVariantOption
        const normalizedValue = normalizeVariantValue(variantValue);

        // If there is a variant in config by the name **variantName** add the variant class to the classes array
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
    const compoundClasses = evaluateCompoundVariants(pickedVariants, config, slotName);

    if (compoundClasses) {
      classes.push(compoundClasses);
    }

    return classes.filter(Boolean);
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
): S extends MultiSlots ? SlotFunctions<S, V> : SlotFunction<V, S> {
  // Handle single slot case
  if (typeof slots === 'string' || Array.isArray(slots) || slots === null || slots === undefined) {
    return createSlotFunction(null, slots, config) as any;
  }

  // Handle multi-slot case
  const result = {} as SlotFunctions<S & MultiSlots, V>;

  for (const [slotName, baseClasses] of Object.entries(slots)) {
    result[slotName as keyof S] = createSlotFunction(slotName as keyof S, baseClasses, config);
  }

  return result as any;
}
