import {pv} from '../utils/pv';

/**
 *
 * @example
 * ```js
 *  <div className={collapsibleVariants({...})}>
 *   ...
 *  </div>
 * ```
 */
const collapsibleVariants = pv('', {
  variants: {
    disabled: {
      true: 'opacity-disabled pointer-events-none',
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export {collapsibleVariants};
