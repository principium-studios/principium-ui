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

type Themes = Record<string, Theme>;

interface PrincipiumConfig<T extends Themes> {
  defaultTheme: keyof T;
  themes: T;
}

export type {Themes, PrincipiumConfig};
