# @principium/shades

A powerful Tailwind CSS plugin for creating dynamic, HSL-based color systems with automatic shade generation and theme support.

## Features

- 🎨 **HSL-based Colors**: Define colors using HSL (Hue, Saturation, Lightness) for intuitive color manipulation
- 🌈 **Automatic Shade Generation**: Generate consistent color shades (50-950) from a single base color
- 🌗 **Theme Support**: Flexible theme system with normal and flipped modes
- 🎯 **Semantic Colors**: Pre-configured semantic color system inspired by modern design systems
- 🔄 **Foreground Colors**: Generate matching foreground colors with customizable contrast
- ⚡ **Zero Runtime**: All colors are generated at build time as CSS variables

## Installation

```bash
npm install @principium/shades
# or
yarn add @principium/shades
# or
pnpm add @principium/shades
```

## Setup

1. Add the plugin to your `tailwind.config.ts`:

```typescript
import { shadesPlugin } from '@principium/shades';

export default {
  plugins: [
    shadesPlugin({
      defaults: true, // Use Principium's default themes
      themes: {
        coffee: {
          mode: 'flipped',
          colors: {
            ...your colors
          }
        }
      }
    }),
  ],
};
```

2. Add theme selectors to your CSS. This defines which classes will trigger your dark theme:

```css
/* globals.css or your main CSS file */
@custom-variant dark (&:is(.dark *, .coffee *));
```

This example enables dark theme when:
- Parent has `.dark` class (e.g., `<html class="dark">`)
- Parent has `.coffee` class (you can add any theme classes you want)

## Usage

### Basic Color Classes

```html
<!-- Light theme (default) -->
<div class="bg-primary text-primary-foreground">
  Primary with contrast text
</div>

<!-- Dark theme -->
<div class="dark">
  <div class="bg-primary text-primary-foreground">
    Primary with contrast text (dark theme)
  </div>
</div>

<!-- Another theme -->
<div class="coffee">
  <div class="bg-card text-card-foreground">
    Card (coffee theme)
  </div>
</div>
```

### Theme Configuration

```typescript
shadesPlugin({
  themes: {
    light: {
      mode: 'normal',
      colors: {
        primary: {
          hue: 215,
          saturation: 90,
          lightness: 60, // Optional base lightness
          foreground: { // Optional foreground color (if not provided, foreground won't be generated)
            lightness: 98, // Contrast text
          },
          generateShades: true, // Default is true
        },
      },
    },
    dark: {
      mode: 'flipped', // Flips the shade scale
      colors: {
        primary: {
          hue: 215,
          saturation: 90,
          lightness: 60,
          foreground: {
            lightness: 95,
          },
        },
      },
    },
  },
  defaultTheme: 'light',
})
```

### Default Semantic Colors

When using `defaults: true`, you get these semantic colors pre-configured:

```typescript
{
  light: {
    mode: 'normal',
    colors: {
      // Core colors
      background: { hue: 0, saturation: 0, lightness: 99, foreground: { lightness: 5 } },
      card: { hue: 0, saturation: 0, lightness: 96, foreground: { lightness: 5 } },
      muted: { hue: 0, saturation: 0, lightness: 50, generateShades: false },

      // Brand colors
      primary: { hue: 212, saturation: 90, lightness: 60, foreground: { lightness: 98 } },
      secondary: { hue: 270, saturation: 90, lightness: 60, foreground: { lightness: 98 } },

      // State colors
      danger: { hue: 339, saturation: 90, lightness: 60, foreground: { lightness: 98 } },
      success: { hue: 146, saturation: 90, lightness: 60, foreground: { lightness: 5 } },
      warning: { hue: 37, saturation: 90, lightness: 60, foreground: { lightness: 5 } },

      // Utility colors
      border: { hue: 0, saturation: 0, lightness: 95 },
      ring: { hue: 212, saturation: 90, lightness: 60, generateShades: false },
    },
  },
  dark: {
    mode: 'flipped',
    colors: {
      // Core colors
      background: { hue: 220, saturation: 15, lightness: 5, foreground: { lightness: 95 } },
      card: { hue: 220, saturation: 15, lightness: 10, foreground: { lightness: 95 } },
      muted: { hue: 220, saturation: 15, lightness: 50, generateShades: false },

      // Brand colors
      primary: { hue: 212, saturation: 90, lightness: 60, foreground: { lightness: 95 } },
      secondary: { hue: 270, saturation: 90, lightness: 60, foreground: { lightness: 95 } },

      // State colors
      danger: { hue: 339, saturation: 90, lightness: 60, foreground: { lightness: 95 } },
      success: { hue: 146, saturation: 90, lightness: 60, foreground: { lightness: 5 } },
      warning: { hue: 37, saturation: 90, lightness: 60, foreground: { lightness: 5 } },

      // Utility colors
      border: { hue: 220, saturation: 15, lightness: 15 },
      ring: { hue: 212, saturation: 90, lightness: 60, generateShades: false },
    },
  },
}
```

### Generated CSS Variables

For each color, the plugin generates:

```css
:root {
  /* Base color (if lightness provided) */
  --primary: hsl(215, 90%, 60%);
  
  /* Shades (if generateShades: true) */
  --primary-50: hsl(215, 90%, 95%);
  --primary-100: hsl(215, 90%, 90%);
  --primary-200: hsl(215, 90%, 80%);
  /* ... */
  --primary-900: hsl(215, 90%, 10%);
  --primary-950: hsl(215, 90%, 5%);

  /* Foreground color (if foreground provided) */
  --primary-foreground: hsl(215, 90%, 98%);
}
.dark * {
  /* ... */
}
.coffee * {
  /* ... */
}
```

### Generated Tailwind Classes

```typescript
colors: {
  primary: {
    DEFAULT: 'var(--primary)', // Only if lightness is provided
    50: 'var(--primary-50)',   // Only if generateShades is true
    100: 'var(--primary-100)',
    // ...
    900: 'var(--primary-900)',
    950: 'var(--primary-950)',
    foreground: 'var(--primary-foreground)', // Only if foreground is provided
  },
  // Special case: background's foreground becomes the root foreground color
  foreground: 'var(--foreground)',
}
```

## Best Practices

1. **Theme Setup**: Always add the `@custom-variant` rule to your CSS to enable theme switching
2. **Theme Modes**: Use `mode: 'normal'` for light themes and `mode: 'flipped'` for dark themes
3. **Base Colors**: Provide `lightness` when you want a direct color reference (e.g., `bg-primary`)
4. **Shades Control**: Use `generateShades: false` for utility colors that don't need variations
5. **Foreground Colors**: Add `foreground` to colors that need contrast text

## License

MIT