const focusVisibleClasses = [
  'outline-2 outline-offset-2 outline-transparent',
  'focus-visible:z-10',
  'focus-visible:outline-outline-400 dark:focus-visible:outline-outline-600',
];

const dataFocusVisibleClasses = [
  'outline-2 outline-offset-2 outline-transparent',
  'data-[focus-visible=true]:z-10',
  'data-[focus-visible=true]:outline-outline-400 dark:data-[focus-visible=true]:outline-outline-600',
];

const translateCenterClasses = [
  'absolute',
  'top-1/2',
  'left-1/2',
  '-translate-x-1/2',
  '-translate-y-1/2',
];

const hiddenInputClasses = [
  // Font styles
  "font-inherit",
  "text-[100%]",
  "leading-[1.15]",

  // Reset margins and padding
  "m-0",
  "p-0",

  // Overflow and box-sizing
  "overflow-visible",
  "box-border",

  // Positioning & Hit area
  "absolute",
  "top-0",
  "w-full",
  "h-full",

  // Opacity and z-index
  "opacity-[0.0001]",
  "z-[1]",

  // Cursor
  "cursor-pointer",

  // Disabled state
  "disabled:cursor-default",
];

export {focusVisibleClasses, dataFocusVisibleClasses, translateCenterClasses, hiddenInputClasses};
