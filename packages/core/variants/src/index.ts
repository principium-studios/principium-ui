import {pv} from './pv';
import {SlotIsInCompoundOption} from './types';

export {pv, createPv} from './pv';
export type SlotParams<T> = T extends (props: infer P) => any ? P : never;

const tabsVariants = pv(
  {
    tabList: [],
  },
  {
    variants: {
      variant: {
        underlined: {},
      },
      disableAnimation: {
        true: {},
      },
    },
    compoundVariants: [
      {
        disableAnimation: true,
        class: {},
      },
      // when deleting this compound variant disableanimaation is not suggested anymore
      {
        variant: 'underlined',
        class: {
          tabList: [],
        },
      },
    ],
  },
);

tabsVariants.tabList({});
