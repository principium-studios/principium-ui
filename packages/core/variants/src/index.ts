export {pv, createPv} from './pv';
export type SlotParams<T> = T extends (props: infer P) => any
  ? Omit<P, 'class' | 'className'>
  : never;
