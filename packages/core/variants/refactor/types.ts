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

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- Base Types -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// _________________________________________ Utility Types _________________________________________

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
type DefaultVariants<S extends Slots, V extends Variants<S>> = {
  [K in keyof V]?: StringToBoolean<keyof V[K]>;
};

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
 * The parameters accepted by a multi slot function.
 * Should be derived from the slot, variants, and compound variants configuration.
 */
type MultiSlotFunctionParams<
  S extends MultiSlot,
  V extends Variants<S>,
  CV extends CompoundVariants<S, V>,
  SlotName extends keyof S,
> = any; // TODO: Define the actual shape for slot function params

/**
 * The parameters accepted by a single slot function.
 * Since there is only a slot, classes can only be strings, therefore every option targets the base slot
 */
type SingleSlotFunctionParams<
  S extends SingleSlot,
  V extends Variants<S>
> = {
  [K in keyof V]: StringToBoolean<keyof V[K]>
} & ClassField<ClassValue>; // TODO: Define the actual shape for slot function params

/**
 * A function that, given props, returns the computed class value for a slot.
 * Used for both single-slot and multi-slot scenarios.
 */
type SlotFunction<
  S extends Slots,
  V extends Variants<S>,
  CV extends CompoundVariants<S, V>,
  SlotName extends keyof S | never = never,
> = (
  props: S extends MultiSlot
    ? MultiSlotFunctionParams<S, V, CV, SlotName>
    : S extends SingleSlot
      ? SingleSlotFunctionParams<S, V>
      : never,
) => ClassValue;

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
  // Base Types
  SingleSlot,
  MultiSlot,
  Slots,
  Variants,
  DefaultVariants,
  CompoundVariants,
  // Function Types
  PVOptions,
  SlotFunction,
};
