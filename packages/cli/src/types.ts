export interface Color {
  hue: string; // Hue used across all shades
  saturation: string; // Saturation used across all shades
}

export interface Theme {
  inverted?: boolean;
  colors: Record<string, Color>;
}

export interface PrincipiumConfig {
  defaultTheme: string;
  themes: Record<string, Theme>;
}
