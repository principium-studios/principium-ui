# @principium/variants

A powerful and flexible variant system for building component libraries with TypeScript support. Similar to `tailwind-variants` or `cva`, but with a focus on multi-slot components and nested class arrays.

## Features

- 🎯 **Type-safe**: Full TypeScript support with proper type inference
- 🔄 **Multi-slot support**: Handle complex components with multiple parts
- 📦 **Compound variants**: Create complex variant combinations
- 🎨 **Nested arrays**: Flexible class organization with nested arrays
- 🎭 **Boolean variants**: Support for toggled variants
- 🔍 **Default variants**: Set default values for variants
- 🛡️ **Runtime validation**: Catch invalid variant usage early

## Installation

```bash
npm install @principium/variants
# or
yarn add @principium/variants
# or
pnpm add @principium/variants
```

## Basic Usage

```typescript
import { pv } from '@principium/variants';
import { cn } from './utils'; // your preferred class merging utility

// Single slot component
const button = pv(
  // Base classes (supports nested arrays)
  ["btn", ["hover:bg-blue-600", "active:bg-blue-700"]], 
  {
    variants: {
      size: {
        sm: ["text-sm", ["p-2", "leading-4"]],
        lg: ["text-lg", ["p-4", "leading-6"]]
      },
      color: {
        primary: ["bg-blue-500", ["text-white"]],
        secondary: ["bg-gray-500", ["text-white"]]
      }
    },
    defaultVariants: {
      size: "sm",
      color: "primary"
    }
  }
);

// Use in your component
function Button({ size, color, ...props }) {
  return (
    <button className={cn(button({ size, color }))} {...props} />
  );
}
```

## Multi-slot Components

```typescript
const card = pv({
  base: ["card", ["hover:shadow-lg"]],
  header: ["card-header", ["p-4"]],
  body: ["card-body", ["p-6"]]
}, {
  variants: {
    color: {
      primary: {
        base: ["border-blue-200", ["hover:border-blue-300"]],
        header: ["bg-blue-50", ["text-blue-700"]]
      },
      danger: {
        base: ["border-red-200", ["hover:border-red-300"]],
        header: ["bg-red-50", ["text-red-700"]]
      }
    }
  }
});

function Card({ color, children }) {
  return (
    <div className={cn(card.base({ color }))}>
      <div className={cn(card.header({ color }))}>
        Header
      </div>
      <div className={cn(card.body({ color }))}>
        {children}
      </div>
    </div>
  );
}
```

## Compound Variants

```typescript
const button = pv("btn", {
  variants: {
    size: {
      sm: "text-sm",
      lg: "text-lg"
    },
    color: {
      primary: "bg-blue-500",
      danger: "bg-red-500"
    },
    outlined: {
      true: "border-2"
    }
  },
  compoundVariants: [
    {
      // Match multiple values
      size: ["sm", "lg"],
      color: "primary",
      class: [
        "shadow-md",
        ["hover:shadow-lg", "active:shadow-sm"]
      ]
    },
    {
      color: "danger",
      outlined: true,
      class: {
        base: [
          "border-red-500",
          ["hover:bg-red-50"]
        ]
      }
    }
  ]
});
```

## Type Safety

```typescript
import type { ComponentVariantProps } from '@principium/variants';

// Extract variant props type
type ButtonVariants = ComponentVariantProps<typeof button>;

// Use in your component
interface ButtonProps extends ButtonVariants {
  children: React.ReactNode;
}

// Type-safe usage
function Button({ size, color, outlined, ...props }: ButtonProps) {
  return (
    <button 
      className={cn(button({ size, color, outlined }))} 
      {...props} 
    />
  );
}
```

## Class Merging

The variant system returns nested arrays of classes that need to be merged with a utility like `clsx` or `cn`. This gives you flexibility in how classes are combined and handled.

```typescript
// Example class merging utility
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: any[]) => {
  return twMerge(clsx(inputs));
};

// Usage
const classes = button({ size: "sm", color: "primary" });
// Returns: ["btn", ["hover:bg-blue-600"], "text-sm", "bg-blue-500"]
const className = cn(classes);
// Merged result: "btn hover:bg-blue-600 text-sm bg-blue-500"
```

## Runtime Validation

The system includes runtime validation to catch invalid variant usage:

```typescript
// These will throw helpful errors
button({ invalidVariant: "value" }); 
// Error: Invalid variant name: invalidVariant

button({ size: "invalid" });
// Error: Invalid value "invalid" for variant "size"
```

## License

MIT 