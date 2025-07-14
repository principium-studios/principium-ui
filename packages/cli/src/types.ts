export interface Color {
  h: string; // Hue used across all shades
  s: string; // Saturation used across all shades
  light: { base: string; fg: string }; // Lightness used for base and foreground;
}

export interface Theme {
  isDarkTheme: boolean;
  colors: Record<string, Color>;
}

export interface PrincipiumConfig {
  defaultTheme: string;
  themes: Record<string, Theme>;
}
