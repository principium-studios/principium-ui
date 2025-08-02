/**
 * The order in which u need to go over these types to understand them is the following:
 * 1. -=- Helper Types (General) -=-
 * 2. ___ Slot Types ___
 * 3. ___ Utility Types ___
 * 4. ___ Variant Types ___
 * 5. -=- Function Types -=- (In the order they are present)
 */

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Helper Types (General) -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
type StringToBoolean<T> = T extends 'true' | 'false' ? boolean : T;

type ClassValue = ClassArray | string | null | undefined;
type ClassArray = ClassValue[];

type FindUndefinedKeys<T> = {
  [K in keyof T]: T[K] extends undefined ? K : never;
}[keyof T];
type ExcludeUndefinedKeys<T> = Omit<T, FindUndefinedKeys<T>>;

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Base Types -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// _________________________________________ Utility Types _________________________________________

// A helper type to get the options for variants
type VariantOptions<T> = {[K in keyof T]?: StringToBoolean<keyof T[K]>};

// Helper type for allowing either 'class' or 'className' prop, but not both
// Example: { class: 'foo' } or { className: 'foo' }
type ClassField<T> = {class?: T; className?: never} | {class?: never; className?: T};

// For multi-slot components, allows specifying classes for any subset of slots
// Example: { header: 'foo', body: 'bar' }
type SlotsClasses<S extends Slots> = Partial<Record<keyof S, ClassValue>>;

// _________________________________________ Slot Types _________________________________________

// Slot Types
type SingleSlot = ClassValue; // a single class value (string, array, etc)
type MultiSlot = Record<string, ClassValue>; // a map of slot names to class values
type Slots = SingleSlot | MultiSlot; // union of both

// _________________________________________ Variant Types _________________________________________

/**
 * Variants: maps variant names to their options, which map to class values
 * For multi-slot, options can also be a map of slot-specific classes
 *
 * @example
 * { size: { sm: 'foo', md: { header: 'bar' } } }
 **/
type Variants<S extends Slots> = {
  [variantKey in string]: {
    [optionKey in string]: S extends MultiSlot ? ClassValue | SlotsClasses<S> : ClassValue;
  };
};

/**
 * DefaultVariants: maps variant names to their default option
 *
 * @example
 * { size: 'sm', color: 'primary' }
 */
type DefaultVariants<S extends Slots, V extends Variants<S>> = VariantOptions<V>;

/**
 * CompoundVariants: array of objects specifying combinations of variant options and their associated classes
 *
 * @example
 * [ { size: 'sm', color: ['primary', 'secondary'], class: 'foo' } ]
 */
type CompoundVariants<S extends Slots, V extends Variants<S>> = Array<
  {
    [K in keyof V]?: StringToBoolean<keyof V[K]> | Array<StringToBoolean<keyof V[K]>>;
  } & ClassField<SlotsClasses<S> | ClassValue>
>;

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Function Types -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

/**
 * Determines if a given slot is targeted by any of the options in a specific variant.
 */
// prettier-ignore
type SlotIsInVariantOptions<
S extends Slots,
  V extends Variants<S>,
  SlotName extends keyof S,
  VariantName extends keyof V,
> = {
  [OptionName in keyof V[VariantName]]?: 
    // If the option value is a record, it only affects the slot if the slotName is a key of it
    V[VariantName][OptionName] extends Record<string, any>
      ? SlotName extends keyof V[VariantName][OptionName]
        ? StringToBoolean<keyof V[VariantName]>
        : never
      : // If the option value is a string then it affects all slots
        V[VariantName][OptionName] extends ClassValue
        ? StringToBoolean<keyof V[VariantName]>
        : never;
}[keyof V[VariantName]];

/**
 * Determines whether a specific slot is targeted by any compound variant's class definition,
 * based on whether that compound variant also defines a specific variant key.
 */

type SlotIsInCompoundOption<
  S extends Slots,
  V extends Variants<S>,
  CV extends CompoundVariants<S, V>,
  SlotKey extends keyof S,
  VariantKey extends keyof V,
> = CV extends never[]
  ? never
  : {
      [I in keyof CV]: CV[I] extends {class?: infer ClassType; className?: infer ClassNameType}
        ? VariantKey extends keyof CV[I]
          ? ClassType extends Record<string, any>
            ? SlotKey extends keyof ClassType
              ? StringToBoolean<keyof V[VariantKey]>
              : never
            : ClassNameType extends Record<string, any>
              ? SlotKey extends keyof ClassNameType
                ? StringToBoolean<keyof V[VariantKey]>
                : never
              : never
          : never
        : never;
    }[number];

type MultiSlotFunctionParams<
  S extends MultiSlot,
  V extends Variants<S>,
  CV extends CompoundVariants<S, V>,
  SlotName extends keyof S,
> = ExcludeUndefinedKeys<{
  [K in keyof V]?:
    | SlotIsInVariantOptions<S, V, SlotName, K>
    | SlotIsInCompoundOption<S, V, CV, SlotName, K>;
}> &
  ClassField<ClassValue>;

/**
 * The parameters accepted by a single slot function.
 * Since there is only a slot, classes can only be strings, therefore every option targets the base slot
 */
type SingleSlotFunctionParams<S extends SingleSlot, V extends Variants<S>> = VariantOptions<V> &
  ClassField<ClassValue>;

/**
 * A function that, given props, returns the computed class value for a slot.
 * Used for both single-slot and multi-slot scenarios.
 */
type SlotFunctionParams<
  S extends Slots,
  V extends Variants<S>,
  CV extends CompoundVariants<S, V>,
  SlotName extends keyof S | never = never,
> = S extends MultiSlot
  ? MultiSlotFunctionParams<S, V, CV, SlotName>
  : S extends SingleSlot
    ? SingleSlotFunctionParams<S, V>
    : never;

type SlotFunction<
  S extends Slots,
  V extends Variants<S>,
  CV extends CompoundVariants<S, V>,
  SlotName extends keyof S | never = never,
> = (props: SlotFunctionParams<S, V, CV, SlotName>) => string;

/**
 * The configuration object for the variant engine.
 * Includes variants, compound variants, and default variants.
 */
type PVOptions<
  S extends Slots,
  V extends Variants<S>,
  CV extends CompoundVariants<S, V>,
  DV extends DefaultVariants<S, V>,
> = {
  variants?: V;
  compoundVariants?: CV;
  defaultVariants?: DV;
};

export {
  // Helper Types
  ClassValue,
  VariantOptions,
  // Base Types
  SingleSlot,
  MultiSlot,
  Slots,
  Variants,
  DefaultVariants,
  CompoundVariants,
  // Function Types
  SlotIsInCompoundOption,
  PVOptions,
  SlotFunction,
  SlotFunctionParams,
};
