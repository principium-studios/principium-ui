import { ClassValue } from './types';

export * from './variants';

export type VariantProps<T> = T extends (props?: infer P) => any ? Omit<P, 'class' | 'className'> : never;
export type SlotsToClasses<T> = T extends Record<string, any> ? {[K in keyof T]?: ClassValue} : string;