import {PV} from './types';

const pv: PV = (slots, config) => {
};

const base = pv(
  {
    base: "px-4 4py-2"
  },
  {
    variants: {
      variant: {
        solid: "",
        flat: '',
        faded: '',
        shadow: '',
      },
      size: {
        sm: '',
        md: '',
        lg: '',
      },
    },
    compoundVariants: [
      {
        size: 'sm',
        className: '',
      },
    ],
    defaultVariants: {
      variant: 'solid',
    },
  },
);

base({variant: "solid", size: "lg"});