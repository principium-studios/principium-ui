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

export {focusVisibleClasses, dataFocusVisibleClasses, translateCenterClasses};
