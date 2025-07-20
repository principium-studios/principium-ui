import {extendTailwindMerge} from 'tailwind-merge';

const twMergeConfig = {
  classGroups: {
    'font-size': ['text-tiny'],
  },
};

export const twMerge = extendTailwindMerge({extend: twMergeConfig});
