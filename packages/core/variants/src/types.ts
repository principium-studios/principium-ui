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
    [VariantName in keyof V]?:
      | StringToBoolean<keyof V[VariantName]>
      | Array<StringToBoolean<keyof V[VariantName]>>;
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

/**
 * Computes which variant keys apply to a given slot
 */
type SlotIsInVariantOptions<
  V extends Variants<S>,
  S extends Slots,
  Slot extends keyof S,
  VariantName extends keyof V,
> = {
  // Loop through the options in the variant
  [OptionName in keyof V[VariantName]]?: V[VariantName][OptionName] extends Record<string, any> // If the option is a record
    ? Slot extends keyof V[VariantName][OptionName] // If the slot is in the option
      ? StringToBoolean<keyof V[VariantName]> // add the variant as an option
      : never
    : V[VariantName][OptionName] extends ClassValue // If the option is a class value
      ? StringToBoolean<keyof V[VariantName]> // add the variant as an option
      : never;
}[keyof V[VariantName]];

type SlotIsInCompoundOption<
  S extends Slots,
  V extends Variants<S>,
  CV extends CompoundVariants<V, S>,
  Slot extends keyof S,
> = CV[number] extends infer CVItem // Get the current compound variant
  ? CVItem extends CompoundVariants<V, S>[number] // Check if the current compound variant is valid
    ? CVItem['class' | 'className'] extends Record<string, any> // If the class of the current compound variant is a record
      ? Slot extends keyof CVItem['class' | 'className'] // and the slot is in the class
        ? {
            [K in Extract<Exclude<keyof CVItem, 'class' | 'className'>, keyof V>]?: StringToBoolean<
              keyof V[K]
            >;
          } // add the variant as an option
        : never
      : CVItem['class' | 'className'] extends ClassValue
        ? {
            [K in Extract<Exclude<keyof CVItem, 'class' | 'className'>, keyof V>]?: StringToBoolean<
              keyof V[K]
            >;
          }
        : never
    : never
  : never;

type SuggestedVariantsForSlot<
  S extends Slots,
  V extends Variants<S>,
  Slot extends keyof S,
> = ExcludeUndefinedKeys<{
  [VariantName in keyof V]?:
    | SlotIsInVariantOptions<V, S, Slot, VariantName>
    | SlotIsInCompoundOption<S, V, CompoundVariants<V, S>, Slot>;
}>;

export type VariantsForSlot<
  S extends Slots,
  V extends Variants<S>,
  Slot extends keyof S,
> = S extends MultiSlots ? SuggestedVariantsForSlot<S, V, Slot> & ClassAttrib : VariantProps<V, S>;

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
