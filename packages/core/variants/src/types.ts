/**
 * Base types for variant configuration and usage
 */

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
export type SlotVariantOption =
  | {
      [slotName: string]: ClassValue;
    }
  | ClassValue;

/**
 * Variants define named variant categories with their options
 * Each option can be either a direct class string or slot-specific overrides
 */
export type Variants<S extends Slots> = {
  [variantName: string]: {
    [optionName: string]: S extends Record<string, any> ? SlotVariantOption : ClassValue;
  };
};

/**
 * DefaultVariants sets the initial option for each variant
 */
export type DefaultVariants<V extends Variants<S>, S extends Slots> = {
  [variantName in keyof V]?: keyof V[variantName] | boolean;
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

type VariantOption<V extends Variants<S>, S extends Slots, K extends keyof V> =
  | keyof V[K]
  | boolean;
export type CompoundVariants<V extends Variants<S>, S extends Slots> = Array<
  {
    [K in keyof V]?: VariantOption<V, S, K> | Array<VariantOption<V, S, K>>;
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
 * Return type for slot functions
 */
export type SlotFunction<V extends Variants<S>, S extends Slots> = (
  props?: VariantProps<V, S>,
) => string;

/**
 * Return type for pv() - a record of slot functions
 */
export type SlotFunctions<S extends MultiSlots, V extends Variants<S>> = {
  [K in keyof S]: SlotFunction<V, S>;
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
