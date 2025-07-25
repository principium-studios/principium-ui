// Used to convert variant options
type StringToBoolean<T> = T extends 'true' ? boolean : T extends 'false' ? boolean : T;
type FindUndefinedKeys<T> = {
  [K in keyof T]: T[K] extends undefined ? K : never;
}[keyof T];
type ExcludeUndefinedKeys<T> = Omit<T, FindUndefinedKeys<T>>;

// Represents any valid CSS class string
export type ClassValue = ClassArray | string | null | undefined;
export type ClassArray = ClassValue[];

// Slots can be either an object mapping slot names to classes or a single slot
export type MultiSlots = {
  [slotName: string]: ClassValue;
};
export type SingleSlot = ClassValue;
export type Slots = MultiSlots | SingleSlot;

// Variant options can be either a direct class string or slot-specific classes
export type SlotVariantOption<S extends Slots> =
  | {
      [slotName in keyof S]?: ClassValue;
    }
  | ClassValue;

/**
 * Variants define named variant categories with their options
 * Each option can be either a direct class string or slot-specific overrides
 */
export type Variants<S extends Slots> = {
  [variantName: string]: {
    [optionName: string]: S extends Record<string, any> ? SlotVariantOption<S> : ClassValue;
  };
};

/**
 * DefaultVariants sets the initial option for each variant
 */
export type DefaultVariants<V extends Variants<S>, S extends Slots> = {
  [VariantName in keyof V]?: StringToBoolean<keyof V[VariantName]>;
};

/**
 * CompoundVariants apply classes when specific variant combinations are active
 */

export type ClassProp<S extends Slots> =
  | {
      class?: S extends Record<string, any>
        ? ClassValue | {[slotName in keyof S]?: ClassValue}
        : ClassValue;
      className?: never;
    }
  | {
      class?: never;
      className?: S extends Record<string, any>
        ? ClassValue | {[slotName in keyof S]?: ClassValue}
        : ClassValue;
    };

export type CompoundVariants<V extends Variants<S>, S extends Slots> = Array<
  {
    [VariantName in keyof V]?: StringToBoolean<keyof V[VariantName]> | Array<StringToBoolean<keyof V[VariantName]>>;
  } & ClassProp<S>
>;

/**
 * Configuration object for the variant system
 */
export type VariantConfig<
  S extends Slots,
  V extends Variants<S>,
  DV extends DefaultVariants<V, S>,
  CV extends CompoundVariants<V, S>,
> = {
  variants?: V;
  defaultVariants?: DV;
  compoundVariants?: CV;
};

/**
 * Props type derived from variants configuration
 */
export type BaseVariantProps<V extends Variants<S>, S extends Slots> = {
  [variantName in keyof V]?: keyof V[variantName] | boolean | null | undefined;
};
export type VariantProps<V extends Variants<S>, S extends Slots> = BaseVariantProps<V, S> &
  (
    | {
        class?: never;
        className?: ClassValue;
      }
    | {
        class?: ClassValue;
        className?: never;
      }
  );

// 1️⃣ Slots
const testSlots = {
  root: 'root-class',
  label: 'label-class',
  icon: 'icon-class',
};

// 2️⃣ Variants
const testVariants = {
  // ———————— scalar‑only variant ————————
  size: {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
  },

  // ———————— slot‑aware variant ————————
  intent: {
    primary: {root: 'bg-blue-500 text-white', label: 'uppercase'},
    secondary: {root: 'bg-gray-500 text-black', icon: 'fill-current'},
    ghost: {icon: 'opacity-50'},
  },

  // ———————— boolean‑style (true/false) variant ————————
  outlined: {
    true: {root: 'ring-2 ring-offset-2', icon: 'stroke-2'},
    false: 'none', // scalar => applies to every slot
  },

  // ———————— weird edge: empty‑object option ————————
  mood: {
    happy: {icon: 'rotate-12'},
    sad: {}, // no keys → applies nowhere
  },
};

// 3️⃣ What we expect `VariantsForSlot` to produce:

type TestResultRoot = VariantsForSlot<typeof testSlots, typeof testVariants, 'root'>;
//    → "size" | "intent" | "outlined"

type TestResultLabel = VariantsForSlot<typeof testSlots, typeof testVariants, 'label'>;
//    → "size" | "intent" | "outlined"

type TestResultIcon = VariantsForSlot<typeof testSlots, typeof testVariants, 'icon'>;
//    → "size" | "intent" | "outlined" | "mood"

/**
 * Computes which variant keys apply to a given slot
 */
export type VariantsForSlot<
  S extends Slots,
  V extends Variants<S>,
  Slot extends keyof S,
> = S extends MultiSlots
  ? ExcludeUndefinedKeys<{
      // A Map
      [VariantName in keyof V]?: {
        // of the variants
        [OptionName in keyof V[VariantName]]?: V[VariantName][OptionName] extends Record<
          // mapped to the options in the current variant
          string,
          any
        >
          ? Slot extends keyof V[VariantName][OptionName] // If the slot is in the option
            ? StringToBoolean<OptionName> // add it to the result
            : never // otherwise it's never.
          : V[VariantName][OptionName] extends ClassValue // if the option is a class value, it's any of the variant options
            ? StringToBoolean<OptionName> // add it to the result
            : never; // otherwise it's never.
      }[keyof V[VariantName]];
    }> & (
      | {
          class?: never;
          className?: ClassValue;
        }
      | {
          class?: ClassValue;
          className?: never;
        }
    )
  : VariantProps<V, S>;

/**
 * Return type for slot functions
 */
export type SlotFunction<S extends Slots, V extends Variants<S>, Slot extends keyof S> = (
  props?: VariantsForSlot<S, V, Slot>,
) => string;

/**
 * Return type for pv() - a record of slot functions
 */
export type SlotFunctions<S extends MultiSlots, V extends Variants<S>> = {
  [K in keyof S]: SlotFunction<S, V, K>;
};

// Error types for runtime validation
export class InvalidVariantError extends Error {
  constructor(variantName: string) {
    super(`Invalid variant name: ${variantName}`);
  }
}

export class InvalidVariantValueError extends Error {
  constructor(variantName: string, value: string) {
    super(`Invalid value "${value}" for variant "${variantName}"`);
  }
}

export class InvalidConfigError extends Error {
  constructor(message: string) {
    super(message);
  }
}
