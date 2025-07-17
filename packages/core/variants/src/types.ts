// _______________________ Utilities _______________________
type ClassValue = ClassValueArray | string | null | undefined | 0 | 0n | false;
type ClassValueArray = ClassValue[];

// _______________________ Types _______________________

/**
 * Slots can be an object of slots like
 *
 * @example
 * ```ts
 * {
 *     base: "",
 *     title: "",
 *     description: ""
 * }
 * ```
 *
 * If u only need a single slot, you can pass a string
 */
type Slots =
  | {
      [slotName: string]: ClassValue;
    }
  | string;

/**
 * Variants can be an object of variants:
 *
 * @example
 * ```ts
 * {
 *     variant: {
 *         solid: {
 *             base: "",
 *             title: ""
 *         }
 *         flat: {
 *             base: "",
 *             description: ""
 *         }
 *         faded: {
 *             base: ""
 *         }
 *         shadow: {
 *             base: "",
 *             title: "",
 *             description: ""
 *         }
 *     }
 * }
 * ```
 *
 * If u need to apply classnames to all slots, you can pass a string:
 *
 * @example
 * ```ts
 * {
 *     variant: {
 *         solid: "",
 *         flat: "",
 *         faded: "",
 *         shadow: ""
 *     }
 *     size: {
 *         sm: "",
 *         md: "",
 *         lg: ""
 *     }
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
 * Default variants is an object of default variants and their options like
 *
 * @example
 * ```ts
 * {
 *     variant: "solid"
 *     size: "md"
 * }
 * ```
 */
type DefaultVariants<V extends Variants<Slots>> = {
  [variantName in keyof V]?: keyof V[variantName];
};

/**
 * Compound variants is an array of objects of variants and their options, with a required className property
 *
 * @example
 * ```ts
 * [
 *     {
 *         size: "md",
 *         className: {
 *             base: "",
 *             title: ""
 *         }
 *     },
 *     {
 *         variant: "flat",
 *         size: "lg",
 *         className: ""
 *     }
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

// _______________________ Factory Function Type _______________________
type PVReturnType<V extends Variants<Slots>> = Array<
  (props: {[variantName in keyof V]: V[variantName]}) => any
>;

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
) => PVReturnType<V>;

export type {PV};
