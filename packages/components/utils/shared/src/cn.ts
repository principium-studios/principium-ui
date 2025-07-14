import { extendTailwindMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": ["text-tiny"],
    },
  },
});

export const cn = (...args: ClassValue[]) => twMerge(clsx(args));
