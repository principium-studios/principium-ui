// Used to convert variant options
type StringToBoolean<T> = T extends 'true' ? boolean : T extends 'false' ? boolean : T;
type FindUndefinedKeys<T> = {
  [K in keyof T]: T[K] extends undefined ? K : never;
}[keyof T];
type ExcludeUndefinedKeys<T> = Omit<T, FindUndefinedKeys<T>>;

// Represents any valid CSS class string
export type ClassValue = ClassArray | string | null | undefined;
export type ClassArray = ClassValue[];
type ClassAttrib =
  | {
      class?: never;
      className?: ClassValue;
    }
  | {
      class?: ClassValue;
      className?: never;
    };

// ________________________________ CONFIG TYPES ________________________________

// Slots can be either an object mapping slot names to classes or a single slot
export type MultiSlots = {
  [slotKey: string]: ClassValue;
};
export type SingleSlot = ClassValue;
export type Slots = MultiSlots | SingleSlot;

/**
 * Variants define named variant categories with their options
 * Each option can be either a direct class string or slot-specific overrides
 */
export type Variants<S extends Slots> = {
  [variantKey: string]: {
    [optionKey: string]: S extends MultiSlots
      ?
          | {
              [slotKey in keyof S]?: ClassValue;
            }
          | ClassValue
      : ClassValue;
  };
};

/**
 * DefaultVariants sets the initial option for each variant
 */
export type DefaultVariants<V extends Variants<S>, S extends Slots> = {
  [VariantKey in keyof V]?: StringToBoolean<keyof V[VariantKey]>;
};

/**
 * CompoundVariants apply classes when specific variant combinations are active
 */

export type ClassProp<S extends Slots> =
  | {
      class?: S extends MultiSlots ? ClassValue | {[slotKey in keyof S]?: ClassValue} : ClassValue;
      className?: never;
    }
  | {
      class?: never;
      className?: S extends MultiSlots
        ? ClassValue | {[slotKey in keyof S]?: ClassValue}
        : ClassValue;
    };

export type CompoundVariants<V extends Variants<S>, S extends Slots> = Array<
  {
    [VariantKey in keyof V]?:
      | StringToBoolean<keyof V[VariantKey]>
      | Array<StringToBoolean<keyof V[VariantKey]>>;
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
  [variantKey in keyof V]?: StringToBoolean<keyof V[variantKey]>;
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

// ________________________________ SLOT FUNCTIONS ________________________________

/**
 * Computes which variant keys apply to a given slot
 */
type SlotIsInVariantOptions<
  V extends Variants<S>,
  S extends Slots,
  Slot extends keyof S,
  VariantKey extends keyof V,
> = {
  // Loop through the options in the variant
  [OptionKey in keyof V[VariantKey]]?: V[VariantKey][OptionKey] extends Record<string, any> // If the option is a record
    ? Slot extends keyof V[VariantKey][OptionKey] // If the slot is in the option
      ? StringToBoolean<keyof V[VariantKey]> // add the variant as an option
      : never
    : V[VariantKey][OptionKey] extends ClassValue // If the option is a class value
      ? StringToBoolean<keyof V[VariantKey]> // add the variant as an option
      : never;
}[keyof V[VariantKey]];

// TODO: Fix this type, I have no clue why it doesn't work, I will crash out if I spend any more time on it
type SlotIsInCompoundOption<
  S extends Slots,
  V extends Variants<S>,
  CV extends CompoundVariants<V, S>,
  SlotKey extends keyof S,
  VariantKey extends keyof V,
> = {
  [I in keyof CV]: CV[I]['class' | 'className'] extends Record<string, any> // If the class of the current compound variant is a record
    ? SlotKey extends keyof CV[I]['class' | 'className'] // and the slot is in the class
      ? VariantKey extends keyof CV[I]
        ? StringToBoolean<keyof V[VariantKey]>
        : never
      : never
    : CV[I]['class' | 'className'] extends ClassValue
      ? VariantKey extends keyof CV[I]
        ? StringToBoolean<keyof V[VariantKey]>
        : never
      : never;
}[number];

type SuggestedVariantsForSlot<
  S extends Slots,
  V extends Variants<S>,
  Slot extends keyof S,
> = ExcludeUndefinedKeys<{
  [VariantName in keyof V]?:
    | SlotIsInVariantOptions<V, S, Slot, VariantName>
    | SlotIsInCompoundOption<S, V, CompoundVariants<V, S>, Slot, VariantName>;
}>;

export type VariantsForSlot<S extends Slots, V extends Variants<S>, Slot extends keyof S> =
// TODO: Uncomment this when SlotIsInCompoundOption is fixed
  // S extends MultiSlots ? SuggestedVariantsForSlot<S, V, Slot> & ClassAttrib :
  VariantProps<V, S>;

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

// ________________________________ ERROR TYPES ________________________________

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
