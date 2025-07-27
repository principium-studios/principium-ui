export * from './pv';
export type SlotProps<T> = T extends (props: infer P) => any ? P : never;
