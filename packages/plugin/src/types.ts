type ColorKey =
  | 'background'
  | 'border'
  | 'outline'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

interface Color {
  hue: number;
  saturation: number;
}

interface Theme {
  isDarkTheme?: boolean;
  colors: Record<ColorKey, Color>;
}

interface PrincipiumConfig {
  defaultTheme: string;
  themes: Record<string, Theme>;
}

export type {ColorKey, Color, Theme, PrincipiumConfig};
