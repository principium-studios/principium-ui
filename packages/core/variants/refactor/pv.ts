import {twMerge as twMergeFn} from 'tailwind-merge';
import {
  ClassValue,
  CompoundVariants,
  DefaultVariants,
  MultiSlot,
  PVOptions,
  SingleSlot,
  SlotFunction,
  Slots,
  Variants,
} from './types';

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Helper Functions -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function isSingleSlot(slots: Slots): slots is SingleSlot {
  return typeof slots === 'string' || Array.isArray(slots) || slots === null || slots === undefined;
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Utility Functions -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
/**
 * Checks if compound Variant is a list and not a map
 */
export function validateOptions<
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
 * Finds the default variants that affect a given slot.
 *
 * For each default variant:
 * - Checks if any of its variant options apply classes to the given slot.
 * - Checks if any compound variants involving the default variant affect the slot.
 *
 * In single-slot mode (`slotName === null`), all class-based options are assumed to affect the slot.
 */
export function findAffectingDefaultVariants<
  S extends Slots,
  V extends Variants<S>,
  CV extends CompoundVariants<S, V>,
  DV extends DefaultVariants<S, V>,
  SlotName extends keyof S,
>(slotName: SlotName | null, options: PVOptions<S, V, CV, DV>): Partial<DV> {
  // If there are no defaultVariants defined, just return an empty object
  if (!options.defaultVariants) return {};

  // In single-slot mode (no slotName), all defaultVariants apply to the base slot.
  // No need to filter - return them as-is.
  if (!slotName) return options.defaultVariants;

  // ___ Filter Variants
  const result = {};

  for (const [defaultVariant, defaultOption] of Object.entries(options.defaultVariants)) {
    // Check the options in the variant. Do any of these affect our slot ?
    const variantValue = options.variants ? options.variants[defaultVariant] : {};
    const variantOptionValue = variantValue[defaultOption];
    const variantOptionAffectsSlot =
      // If affects all slots then it must affect our slot
      typeof variantOptionValue === 'string' ||
      Array.isArray(variantOptionValue) ||
      // If it is a record and our slot is in it it must affect it
      (variantOptionValue !== null &&
        typeof variantOptionValue === 'object' &&
        !Array.isArray(variantOptionValue) &&
        slotName in variantOptionValue);

    // If the current variant affects our slot when we include it,
    // Add it to result and continue
    if (variantOptionAffectsSlot) {
      result[defaultVariant] = defaultOption;
      continue;
    }

    // Loop through all compound variants and try to find one
    // that includes our defaultVariant and affects our slot
    const compoundVariantsAffectSlot = (options.compoundVariants || []).some((compoundVariant) => {
      // If the defaultVariant is not in the compoundVariant then it can't possibly make a difference if we add it
      if (!(defaultVariant in compoundVariant)) return false;

      // Skip this compound rule if its condition for the current variant
      // doesn`t match the default option value (either not the same string
      // or not included in the array of allowed values)
      const option = compoundVariant[defaultVariant];
      if(!(typeof option === 'string' && defaultOption === option || Array.isArray(option) && option.includes(defaultOption))) return false;

      // Extract the classVal, we allow for either `class` or `className`
      const classVal = compoundVariant.class ?? (compoundVariant as any).className;

      // As with `variantOptionsAffectSlot`, a string/array affects all slots.
      const affectsAll = typeof classVal === 'string' || Array.isArray(classVal);
      if (affectsAll) return true;

      // Or it may be a record mapping specific slots to classes.
      const affectsOurSlot =
        classVal !== null &&
        typeof classVal === 'object' &&
        !Array.isArray(classVal) &&
        slotName in classVal;
      if (affectsOurSlot) return true;

      return false;
    });

    // If there is a compoundVariant where including the variant affects our slot,
    // Add it
    if (compoundVariantsAffectSlot) {
      result[defaultVariant] = defaultOption;
    }
  }

  return result as Partial<DV>;
}
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Main Functions -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// _________________________________________ Slot Function _________________________________________

/**
 * Creates a slot function
 */
export function createSlotFunction<
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
  const affectingDefaultVariants = findAffectingDefaultVariants(slotName, options);
  return (props) => {
    return '';
  };
}

// _________________________________________ Overloads _________________________________________

// 1) SINGLESLOT OVERLOAD
export function pvBase<
  S extends SingleSlot,
  V extends Variants<S>,
  CV extends CompoundVariants<S, V>,
  DV extends DefaultVariants<S, V>,
>(twMerge: typeof twMergeFn, slots?: S, options?: PVOptions<S, V, CV, DV>): SlotFunction<S, V, CV>;

// 2) MULTISLOT OVERLOAD
export function pvBase<
  S extends MultiSlot,
  V extends Variants<S>,
  CV extends CompoundVariants<S, V>,
  DV extends DefaultVariants<S, V>,
>(
  twMerge: typeof twMergeFn,
  slots?: S,
  options?: PVOptions<S, V, CV, DV>,
): {
  [SlotName in keyof S]: SlotFunction<S, V, CV, SlotName>;
};

// 3) IMPLEMENTATION
export function pvBase<
  S extends Slots,
  V extends Variants<S>,
  CV extends CompoundVariants<S, V>,
  DV extends DefaultVariants<S, V>,
>(twMerge: typeof twMergeFn, slots?: S, options?: PVOptions<S, V, CV, DV>) {
  if (!slots) return;

  // Validate options
  validateOptions(options || {});

  // If single slot just return a slot function
  if (isSingleSlot(slots)) {
    return createSlotFunction(null, slots, options || {}, twMerge);
  }

  // Else, build the slot functions
  const slotFunctions: Partial<{
    [SlotName in keyof S]: SlotFunction<S, V, CV, SlotName>;
  }> = {};

  for (const [slotName, baseClasses] of Object.entries(slots)) {
    slotFunctions[slotName] = createSlotFunction(
      slotName as keyof S,
      baseClasses,
      options || {},
      twMerge,
    );
  }

  return slotFunctions;
}
