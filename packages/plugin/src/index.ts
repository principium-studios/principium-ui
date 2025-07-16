import plugin from 'tailwindcss/plugin.js';
import type {PrincipiumConfig} from './types';

export const principium = (opts: PrincipiumConfig): ReturnType<typeof plugin> => {
  const {themes, defaultTheme} = opts;

  // lightness maps
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

  /**
   *  baseVars will look something like this
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
   *  palette will look something like this
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
  const palette: Record<string, Record<string, string>> = {}
  

  // Build CSS variables and utility classes
  for (const [themeName, themeDef] of Object.entries(themes)) {
    const selector = themeName === defaultTheme ? ':root' : `.${themeName}`;
    const shades = themeDef.isDarkTheme ? LIGHTNESS_DARK : LIGHTNESS;
    baseVars[selector] = {};

    for (const [colorName, {hue, saturation}] of Object.entries(themeDef.colors)) {
      palette[colorName] = {};
      for (const [shadeKey, lightness] of Object.entries(shades)) {
        const varName = `--${colorName}-${shadeKey}`;
        const varValue = `hsl(${hue}, ${saturation}%, ${lightness})`;

        // 1) collect CSS variable under the selector
        baseVars[selector][varName] = varValue;

        // 2) prepare utilities for this variable
        palette[colorName][shadeKey] = `var(${varName})`;
      }
    }
  }

  return plugin(
    ({addBase}) => {
      addBase(baseVars);
    },
    {
      theme: {
        extend: {
          colors: palette,
          fontSize: {
            tiny: '0.625rem',
          }
        },
      },
    },
  );
};
