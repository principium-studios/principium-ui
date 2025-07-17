import {PV} from './types';

const pv: PV = (slots, config) => {
};

const base = pv(
  "",
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