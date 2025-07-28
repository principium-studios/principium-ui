// import {pv} from './pv';
// import {CompoundVariants, SlotIsInCompoundOption} from './types';

export {pv, createPv} from './pv';
export type SlotParams<T> = T extends (props: infer P) => any ? P : never;

// Why teh fuk does this suggest disableAnimation ????????????????????
// For some reason the class type when ifnered it is widened to contai nthe tabList so it automatically sees it as
// beeing apart of the class ??????????
// const slots = {
//   tabList: '',
// };
// const variants = {
//   disableAnimation: {
//     true: {},
//   },
// };
// const compoundVariants: CompoundVariants<typeof slots, typeof variants> = [
//   {
//     disableAnimation: true,
//     class: {},
//   },
// ];

// type typeDisable = SlotIsInCompoundOption<
//   typeof slots,
//   typeof variants,
//   typeof compoundVariants,
//   'tabList',
//   'disableAnimation'
// >;
