export * from './variants';

export type VariantProps<T> = T extends (props?: infer P) => any
  ? Omit<P, 'class' | 'className'>
  : never;

