export interface Color {
  h: string; // Hue used across all shades
  s: string; // Saturation used across all shades
  baseL: string; // Base Lightness
  fgL: string; // Foreground Lightness
}

export interface PrincipiumConfig {
  defaultTheme: string;
  themes: Record<string, Record<string, Color>>;
}
