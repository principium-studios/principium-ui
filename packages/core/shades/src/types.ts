interface ForegroundColor {
  lightness: number;
}

interface Color {
  hue: number;
  saturation: number;
  lightness?: number;
  foreground?: ForegroundColor;
  generateShades?: boolean;
}

interface Theme {
  mode?: 'normal' | 'flipped';
  colors?: Record<string, Color>;
}

type Themes = Record<string, Theme>;

export type {Themes, Color, ForegroundColor, Theme};
