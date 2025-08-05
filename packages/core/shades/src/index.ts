import type {Themes} from './types';

import plugin from 'tailwindcss/plugin.js';

// lightness maps for the shades
const LIGHTNESS = {
  50: '95%',
  100: '90%',
  200: '80%',
  300: '70%',
  400: '60%',
  500: '50%',
  600: '40%',
  700: '30%',
  800: '20%',
  900: '10%',
  950: '5%',
};
const LIGHTNESS_DARK = {
  50: '5%',
  100: '10%',
  200: '20%',
  300: '30%',
  400: '40%',
  500: '50%',
  600: '60%',
  700: '70%',
  800: '80%',
  900: '90%',
  950: '95%',
};

// Default Principium themes (light and dark)
const PRINCIPIUM_DEFAULTS: Themes = {
  light: {
    mode: 'normal',
    colors: {
      // Core colors
      background: {hue: 0, saturation: 0, lightness: 100, foreground: {lightness: 5}},
      muted: {hue: 0, saturation: 0, lightness: 25, generateShades: false},

      // Brand colors
      primary: {hue: 212, saturation: 90, lightness: 60, foreground: {lightness: 95}},
      secondary: {hue: 270, saturation: 90, lightness: 60, foreground: {lightness: 95}},

      // State colors
      danger: {hue: 339, saturation: 90, lightness: 60, foreground: {lightness: 95}},
      success: {hue: 146, saturation: 90, lightness: 60, foreground: {lightness: 95}},
      warning: {hue: 37, saturation: 90, lightness: 60, foreground: {lightness: 95}},

      // Utility colors
      border: {hue: 0, saturation: 0, lightness: 90, foreground: {lightness: 95}},
      ring: {hue: 212, saturation: 90, lightness: 60, foreground: {lightness: 95}, generateShades: false},
    },
  },
  dark: {
    mode: 'flipped',
    colors: {
      // Core colors
      background: {hue: 220, saturation: 15, lightness: 5, foreground: {lightness: 95}},
      muted: {hue: 220, saturation: 15, lightness: 75, generateShades: false},

      // Brand colors
      primary: {hue: 212, saturation: 90, lightness: 60, foreground: {lightness: 95}},
      secondary: {hue: 270, saturation: 90, lightness: 60, foreground: {lightness: 95}},

      // State colors
      danger: {hue: 339, saturation: 90, lightness: 60, foreground: {lightness: 95}},
      success: {hue: 146, saturation: 90, lightness: 60, foreground: {lightness: 5}},
      warning: {hue: 37, saturation: 90, lightness: 60, foreground: {lightness: 5}},

      // Utility colors
      border: {hue: 220, saturation: 15, lightness: 15, foreground: {lightness: 95}},
      ring: {hue: 212, saturation: 90, lightness: 60, foreground: {lightness: 95}, generateShades: false},
    },
  },
};

export const shadesPlugin = <T extends Themes>(opts: {
  themes?: T;
  defaultTheme?: keyof T;
  defaults?: boolean;
}): ReturnType<typeof plugin> => {
  const {themes, defaultTheme, defaults = false} = opts;

  /**
   * If user wants defaults but doesn't provide a default theme, use the 'light' theme (which is in the default themes)
   * Otherwise, use the default theme (assume user provided one of his own themes)
   */
  let actualDefaultTheme;
  if (defaults && !defaultTheme) {
    actualDefaultTheme = 'light';
  } else {
    actualDefaultTheme = defaultTheme;
  }

  // Merge themes with defaults if requested
  let finalThemes: Themes = {};
  if (defaults) {
    finalThemes = {
      // Start with user themes
      ...themes,
      // Merge the colors provided by the user with the defaults
      light: {
        ...PRINCIPIUM_DEFAULTS.light, // defaults
        ...(themes?.light || {}), // user theme config
        colors: {
          ...PRINCIPIUM_DEFAULTS.light.colors, // defaults
          ...(themes?.light?.colors || {}), // user theme colors
        },
      },
      dark: {
        ...PRINCIPIUM_DEFAULTS.dark, // defaults
        ...(themes?.dark || {}), // user theme config
        colors: {
          ...PRINCIPIUM_DEFAULTS.dark.colors, // defaults
          ...(themes?.dark?.colors || {}), // user theme colors
        },
      },
    };
  } else {
    finalThemes = themes || {};
  }

  /**
   * The baseVars are the CSS variables that will be added to the CSS
   * baseVars will look something like this
   *
   *  {
   *    ':root': {
   *      --background-50: `hsl(240, 10%, 95%)`,
   *      --background-100: `hsl(240, 10%, 90%)`,
   *      --background-200: `hsl(240, 10%, 80%)`,
   *      ...
   *    },
   *    '.dark': {
   *      --background-50: `hsl(240, 10%, 5%)`,
   *      --background-100: `hsl(240, 10%, 10%)`,
   *      --background-200: `hsl(240, 10%, 20%)`,
   *      ...
   *    },
   *  }
   */
  const baseVars: Record<string, Record<string, string>> = {};

  /**
   * The pallete is for tailwind to generate the custom classes for the colors
   * palette will look something like this
   *
   *  {
   *    'background': {
   *      '50': 'var(--background-50)',
   *      '100': 'var(--background-100)',
   *      ...
   *    },
   *    ...
   *  }
   */
  const palette: Record<string, Record<string, string>> = {};

  // Go through each theme and generate the CSS variables and utility classes
  for (const [themeName, themeDef] of Object.entries(finalThemes)) {
    const cssSelector = themeName === actualDefaultTheme ? ':root' : `.${themeName}`;

    // Get the mode of the theme (normal or flipped)
    const mode = themeDef.mode || 'normal';

    // Get the shades for the theme (lightness values)
    const shades = mode === 'flipped' ? LIGHTNESS_DARK : LIGHTNESS;

    baseVars[cssSelector] = {};

    // Iterate over the colors in the theme (background, foreground, etc.)
    for (const [colorName, colorDef] of Object.entries(themeDef?.colors || {})) {
      const {
        hue,
        saturation,
        lightness: baseLightness,
        foreground,
        generateShades = true,
      } = colorDef;

      // Initialize the palette for the color
      palette[colorName] = {};

      // Generate the base color if lightness is provided
      if (baseLightness) {
        const varName = `--${colorName}`;
        const varValue = `hsl(${hue}, ${saturation}%, ${baseLightness}%)`;

        // Add the variable to the baseVars
        baseVars[cssSelector][varName] = varValue;

        // Add the variable to the palette
        palette[colorName]['base'] = `var(${varName})`;
      }

      // Generate the foreground color if specified
      if (foreground) {
        const foregroundLightness = foreground.lightness;

        // Generate the variable name and value
        const foregroundVarName =
          colorName === 'background' ? `--foreground` : `--${colorName}-foreground`;
        const foregroundVarValue = `hsl(${hue}, ${saturation}%, ${foregroundLightness}%)`;

        // Add the variable to the baseVars
        baseVars[cssSelector][foregroundVarName] = foregroundVarValue;

        // Add the variable to the palette
        palette[colorName]['foreground'] = `var(${foregroundVarName})`;
      }

      // Generate the shades if enabled
      if (generateShades) {
        // Iterate over the shades
        for (const [shadeKey, defaultLightness] of Object.entries(shades)) {
          // Generate the variable name and value
          const varName = `--${colorName}-${shadeKey}`;
          const varValue = `hsl(${hue}, ${saturation}%, ${defaultLightness})`;

          // Add the variable to the baseVars
          baseVars[cssSelector][varName] = varValue;

          // Add the variable to the palette
          palette[colorName][shadeKey] = `var(${varName})`;
        }
      }
    }
  }

  return plugin(
    ({addBase}) => {
      // Add the baseVars to the CSS
      addBase(baseVars);
    },
    {
      theme: {
        extend: {
          transitionTimingFunction: {
            'soft-spring': 'cubic-bezier(0.155, 1.105, 0.295, 1.12)',
          },
          colors: palette,
          fontSize: {
            tiny: '0.625rem',
          },
          borderRadius: {
            sm: 'calc(0.625rem - 4px)',
            md: 'calc(0.625rem - 2px)',
            lg: 'calc(0.625rem)',
            xl: 'calc(0.625rem + 4px)',
          },
        },
      },
    },
  );
};
