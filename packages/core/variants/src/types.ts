// _______________________ Utilities _______________________
type ClassValue = ClassValueArray | string | null | undefined | 0 | 0n | false;
type ClassValueArray = ClassValue[];

// _______________________ Types _______________________

/**
 * Slots can be either:
 *  - an object mapping slot names to ClassValue, e.g.:
 *    ```ts
 *    { base: "", title: "", description: "" }
 *    ```
 *  - a single slot name (string), for components without multiple parts
 */
type Slots =
  | {
      [slotName: string]: ClassValue;
    }
  | ClassValue;

/**
 * Variants define named variant categories, each with options that
 * assign classes (or per-slot overrides) for that variant.
 *
 * @example
 * ```ts
 * variants: {
 *   size: {
 *     sm: { base: "px-2 py-1" },
 *     md: { base: "px-3 py-1.5" },
 *     lg: "px-4 py-2",
 *   },
 *   color: {
 *     primary: "bg-blue-500 text-white",
 *     secondary: { base: "bg-gray-200 text-black" }
 *   }
 * }
 * ```
 */
type Variants<S extends Slots | undefined> = {
  [variantName: string]: {
    [option: string]:
      | {
          [slotName in keyof S]?: ClassValue;
        }
      | ClassValue;
  };
};

/**
 * DefaultVariants sets the initial option for each named variant.
 *
 * @example
 * ```ts
 * defaultVariants: {
 *   size: "md",
 *   color: "primary"
 * }
 * ```
 */
type DefaultVariants<V extends Variants<Slots>> = {
  [variantName in keyof V]?: keyof V[variantName];
};

/**
 * CompoundVariants is an array of configurations that apply when
 * a specific combination of variant values is selected.
 * Each entry must include a `className` override, either global
 * or per-slot.
 *
 * @example
 * ```ts
 * compoundVariants: [
 *   {
 *     size: "md",
 *     color: "primary",
 *     className: { base: "font-bold", title: "uppercase" }
 *   },
 *   {
 *     size: "lg",
 *     className: "shadow-lg"
 *   }
 * ]
 * ```
 */
type CompoundVariants<V extends Variants<Slots>, S extends Slots> = Array<
  {
    [variantName in keyof V]?: keyof V[variantName];
  } & {
    className:
      | {
          [slotName in keyof S]?: ClassValue;
        }
      | ClassValue;
  }
>;

// _______________________ Factory Function Types _______________________

/**
 * Core function signature for a single-slot component.
 * Accepts exact variant props and returns any result (e.g., class string).
 */
type PVSlotFNType<V extends Variants<Slots>> = (props: {[variantName in keyof V]: keyof V[variantName]}) => any;

/**
 * The return type of the `pv` factory function:
 * - When `S` is a `string`, returns one function (for single slot).
 * - When `S` is an object, returns a map of functions keyed by slot names.
 */
type PVReturnType<V extends Variants<Slots>, S extends Slots> = S extends string
  ? PVSlotFNType<V>
  : Record<keyof S, PVSlotFNType<V>>;

/**
 * Variant factory:
 * Alternative to multiple `cva()` calls for each slot.
 * Define slots, variants, compoundVariants, and defaultVariants
 * in a single primitive factory invocation.
 */
type PV = <
  S extends Slots,
  V extends Variants<S>,
  DV extends DefaultVariants<V>,
  CV extends CompoundVariants<V, S>,
>(
  slots: S,
  options: {
    variants?: V;
    compoundVariants?: CV;
    defaultVariants?: DV;
  },
) => PVReturnType<V, S>;

export type {PV};
