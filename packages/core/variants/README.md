# @principium/variants

A powerful and flexible variant system for building component libraries with TypeScript support. Similar to `tailwind-variants` or `cva`, but with a focus on multi-slot components and nested class arrays.

### Features

- 🎯 **Type-safe**: Full TypeScript support with proper type inference
- 🔄 **Multi-slot support**: Handle complex components with multiple parts
- 📦 **Compound variants**: Create complex variant combinations
- 🎨 **Nested arrays**: Flexible class organization with nested arrays
- 🎭 **Boolean variants**: Support for toggled variants
- 🔍 **Default variants**: Set default values for variants
- 🛡️ **Runtime validation**: Catch invalid variant usage early
- 🎪 **Slot-aware types**: Helper types that suggest only variants affecting specific slots

### Installation

```bash
npm install @principium/variants
# or
yarn add @principium/variants
# or
pnpm add @principium/variants
```

## API

### `Exports`

| Name                           | Description                                                                                        |
| ------------------------------ | -------------------------------------------------------------------------------------------------- |
| **pv**                         | An instance of createPv with default twMerge instance                                              |
| **createPv**                   | A function that creates a custom PV instance with a custom twMerge instance                        |
| **type ComponentVariantProps** | A type that represents the props of a PV component (in the case of slots, pass in a slot function) |

### `createPv`

| Props       | Description                            |
| ----------- | -------------------------------------- |
| **twMerge** | The twMerge instance for the component |

### `pv`

| Component Type  | Description                                                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Single-slot** | For single-slot components, pass a string. The return type of pv will be a slot function.                                                                                 |
| **Multi-slot**  | For multi-slot components, pass an object with the slots as keys and the base classes as values. The return type of pv will be an object with the slot functions as keys. |

| Props                | Description                             |
| -------------------- | --------------------------------------- |
| **variants**         | The variants for the component          |
| **compoundVariants** | The compound variants for the component |
| **defaultVariants**  | The default variants for the component  |

#### <p style="color: red;">Important ‼️‼️‼️</p>

- For multi-slot components, class or className accepts either:
  - a string or array which will be <p style="color: red; display: inline-block;">**applied to all slots**</p>, or
  - an object with slot names as keys and class values (applied to individual slots).

## Basic Usage

```typescript
import { pv, type ComponentVariantProps } from '@principium/variants';

// Single-slot component
const button = pv(
  // Base classes (supports nested arrays)
  [
    'btn',
    ['hover:bg-blue-600', 'active:bg-blue-700'],
  ],
  {
    variants: {
      size: {
        sm: ['text-sm', ['p-2', 'leading-4']],
        lg: ['text-lg', ['p-4', 'leading-6']],
      },
      color: {
        primary: ['bg-blue-500', ['text-white']],
        secondary: ['bg-gray-500', ['text-white']],
      },
    },
    defaultVariants: {
      size: 'sm',
      color: 'primary',
    },
  }
);

// Use in your component
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ComponentVariantProps<typeof button>;

function Button({ size, color, className, ...props }: ButtonProps) {
  // `button()` now merges nested arrays and accepts `className` or `class`
  return (
    <button
      className={button({ size, color, className: className })}
      {...props}
    />
  );
}
```

## Multi-slot Components

```typescript
import { pv, type ComponentVariantProps } from '@principium/variants';

const card = pv(
  {
    base: ['card', ['hover:shadow-lg']],
    header: ['card-header', ['p-4']],
    body: ['card-body', ['p-6']],
  },
  {
    variants: {
      color: {
        primary: {
          base: ['border-blue-200', ['hover:border-blue-300']],
          header: ['bg-blue-50', ['text-blue-700']],
        },
        danger: {
          base: ['border-red-200', ['hover:border-red-300']],
          header: ['bg-red-50', ['text-red-700']],
        },
      },
    },
  }
);

// Type inference for card component (can use any of the slots)
type CardProps = React.HTMLAttributes<HTMLDivElement> & ComponentVariantProps<typeof card.base>;

function Card({ color, className, children, ...props }: CardProps) {
  return (
    <div className={card.base({ color, className })} {...props}>
      <div className={card.header({ color })}>Header</div>
      <div className={card.body({ color })}>{children}</div>
    </div>
  );
}
```

## Compound Variants and Type Safety

```typescript
import {pv, type ComponentVariantProps} from '@principium/variants';

const button = pv('btn', {
  variants: {
    size: {sm: 'text-sm', lg: 'text-lg'},
    color: {primary: 'bg-blue-500', danger: 'bg-red-500'},
    outlined: {true: 'border-2'},
  },
  compoundVariants: [
    {
      size: ['sm', 'lg'],
      color: 'primary',
      class: ['shadow-md', ['hover:shadow-lg', 'active:shadow-sm']],
    },
    {
      color: 'danger',
      outlined: true,
      class: {
        base: ['border-red-500', ['hover:bg-red-50']],
      },
    },
  ] as const, // 👈 Important! This ensures proper type inference
});

type ButtonProps = ComponentVariantProps<typeof button> & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ size, color, outlined, className, ...props }: ButtonProps) {
  return <button className={button({ size, color, outlined, className })} {...props} />;
}
```

### Why `as const`?

The `as const` assertion in compound variants is crucial for proper TypeScript type inference. Without it:

1. TypeScript will widen the types of class values in compound variants, making them less specific.
2. This affects the `suggestedParamsForSlot` helper type, which helps you by only suggesting variants that actually affect a specific slot.
3. For example, without `as const`, TypeScript might infer a class value as `Record<"otherSlot", string[]>` in a scenario where the class value is empty, losing information about which slots are affected.

## Runtime Validation

```typescript
// These will throw helpful errors
button({invalidVariant: 'value'}); // Error: Invalid variant name: invalidVariant
button({size: 'invalid'}); // Error: Invalid value "invalid" for variant "size"
```

## License

MIT
