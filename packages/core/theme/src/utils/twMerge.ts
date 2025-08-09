import {extendTailwindMerge} from 'tailwind-merge';

const twMergeConfig = {
  classGroups: {
    'font-size': ['text-tiny'],
  },
};

const twMerge = extendTailwindMerge({extend: twMergeConfig});

export {twMerge};
