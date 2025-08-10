import type {
  ClassValue,
  CompoundVariants,
  DefaultVariants,
  MultiSlot,
  PVOptions,
  SingleSlot,
  SlotFunction,
  Slots,
  VariantOptions,
  Variants,
} from './types';

import {twMerge as twMergeFn} from 'tailwind-merge';
import {clsx} from 'clsx';

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Helper Functions -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function isSingleSlot(slots: Slots): slots is SingleSlot {
  return typeof slots === 'string' || Array.isArray(slots) || slots === null || slots === undefined;
}
function normalizeVariantValue(value: unknown): string | undefined {
  if (typeof value === 'boolean') {
    return value.toString();
  }

  return value as any;
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Utility Functions -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
/**
 * Checks if compound Variant is a list and not a map
 */
function validateOptions<
  S extends Slots,
  V extends Variants<S>,
  DV extends DefaultVariants<S, V>,
  CV extends CompoundVariants<S, V>,
>(options: PVOptions<S, V, CV, DV>): void {
  if (options.compoundVariants && !Array.isArray(options.compoundVariants)) {
    throw new Error('compoundVariants must be an array');
  }
}

/**
 * Ensures that any variant props passed at runtime actually exist in the component’s variant configuration.
 */
function validateVariantProps<S extends Slots, V extends Variants<S>>(
  props: VariantOptions<V>,
  variants: V | undefined,
): void {
  if (!variants) return;

  for (const [variantName, variantOption] of Object.entries(props)) {
    // If provided variant is not in the config, throw an error
    if (!variants[variantName]) {
      throw new Error(`Provided variant name: \`${variantName}\` does not exist`);
    }

    // If provided option is not in the variant, throw an error
    const normalizedOption = normalizeVariantValue(variantOption);

    if (
      normalizedOption &&
      !(normalizedOption in variants[variantName]) &&
      typeof variantOption !== 'boolean'
    ) {
      throw new Error(
        `Provided variant: \`${variantName}\` has no entry named \`${variantOption}\``,
      );
    }
  }
}

/**
 * Evaluates which compound variant classes should apply based on the selected variants
 * and the current rendering slot
 */
function evaluateCompoundVariants<
  S extends Slots,
  V extends Variants<S>,
  CV extends CompoundVariants<S, V>,
>(pickedVariants: VariantOptions<V>, compoundVariants: CV, slotName: keyof S | null): ClassValue {
  return compoundVariants
    .filter((compound) => {
      return Object.entries(compound).every(([key, value]) => {
        if (key === 'className' || key === 'class') return true;

        // Compare the **pickedVariantOption** with the variantOption in the compound variant
        const propValue = pickedVariants[key as keyof V];
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

      if (!slotName) return null;

      // If the class value is an object, return the class for the slotName
      return classValue[slotName] ?? null;
    })
    .filter(Boolean);
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
 * Evaluates and collects the classes for the currently picked variant options for a specific slot.
 */
function evaluateVariantClasses<S extends Slots, V extends Variants<S>>(
  pickedVariants: VariantOptions<V>,
  variants: V,
  slotName: keyof S | null,
) {
  const classes: ClassValue = [];

  for (const [variantName, variantValue] of Object.entries(pickedVariants)) {
    // Return normalized value of variant value, if it is a boolean, return the string value of the boolean
    // Could also be named as pickedVariantOption
    const normalizedValue = normalizeVariantValue(variantValue);

    // If there is a variant in options by the name **variantName** add the variant class to the classes array
    if (normalizedValue && variants[variantName]) {
      const variantClass = getVariantClass(slotName, variants[variantName][normalizedValue]);

      if (variantClass) {
        classes.push(variantClass);
      }
    }
  }

  return classes;
}
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Main Functions -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// _________________________________________ Slot Function _________________________________________

/**
 * Creates a slot function
 */
function createSlotFunction<
  S extends Slots,
  V extends Variants<S>,
  CV extends CompoundVariants<S, V>,
  DV extends DefaultVariants<S, V>,
>(
  slotName: keyof S | null,
  baseClasses: ClassValue,
  options: PVOptions<S, V, CV, DV>,
  twMerge: typeof twMergeFn,
): SlotFunction<S, V, CV> {
  return (props) => {
    const {class: classProp, className: classNameProp, ...pickedVariantsProps} = props;

    validateVariantProps(pickedVariantsProps as any, options.variants);

    const pickedVariants = {
      ...options.defaultVariants,
      ...Object.fromEntries(
        Object.entries(pickedVariantsProps || {}).filter(([_, value]) => value !== undefined),
      ),
    } as Partial<VariantOptions<V>>;

    const classes: ClassValue[] = [baseClasses];

    if (options.variants) {
      const variantClasses = evaluateVariantClasses(pickedVariants, options.variants, slotName);

      classes.push(variantClasses);
    }

    if (options.compoundVariants) {
      const compoundClasses = evaluateCompoundVariants(
        pickedVariants,
        options.compoundVariants,
        slotName,
      );

      classes.push(compoundClasses);
    }

    return twMerge(clsx(classes, classProp, classNameProp));
  };
}

// _________________________________________ Overloads _________________________________________

function pvBase<
  S extends Slots,
  V extends Variants<S>,
  CV extends CompoundVariants<S, V>,
  DV extends DefaultVariants<S, V>,
>(
  twMerge: typeof twMergeFn,
  slots?: S,
  options?: PVOptions<S, V, CV, DV>,
): S extends MultiSlot
  ? {
      [K in keyof S]: SlotFunction<S, V, CV, K>;
    }
  : SlotFunction<S, V, CV> {
  // Validate options
  validateOptions(options || {});

  // If single slot just return a slot function
  if (isSingleSlot(slots)) {
    return createSlotFunction(null, slots, options || {}, twMerge) as any;
  }

  // Else, build the slot functions
  const slotFunctions: Partial<{
    [K in keyof S]: SlotFunction<S, V, CV, K>;
  }> = {};

  for (const [slotName, baseClasses] of Object.entries(slots)) {
    slotFunctions[slotName as keyof typeof slotFunctions] = createSlotFunction(
      slotName as keyof S,
      baseClasses,
      options || {},
      twMerge,
    );
  }

  return slotFunctions as any;
}

function createPv(twMerge: typeof twMergeFn) {
  return <
    S extends Slots = undefined,
    V extends Variants<S> = {},
    CV extends CompoundVariants<S, V> = [],
    DV extends DefaultVariants<S, V> = {},
  >(
    slots?: S,
    options?: PVOptions<S, V, CV, DV>,
  ) => pvBase(twMerge, slots, options);
}

const pv = createPv(twMergeFn);

export {pv, createPv, evaluateCompoundVariants, evaluateVariantClasses, getVariantClass};
