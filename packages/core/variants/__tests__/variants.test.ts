import {describe, test, expect} from 'vitest';
import {createPv, pv} from '../src/variants';
import {extendTailwindMerge} from 'tailwind-merge';

const COMMON_UNITS = ['small', 'medium', 'large'];

const twMergeConfig = {
  extend: {
    theme: {
      opacity: ['disabled'],
      spacing: ['divider', 'unit', 'unit-2', 'unit-4', 'unit-6'],
      borderWidth: COMMON_UNITS,
      borderRadius: COMMON_UNITS,
    },
    classGroups: {
      shadow: [{shadow: COMMON_UNITS}],
      'font-size': [{text: ['tiny', ...COMMON_UNITS]}],
      'bg-image': ['bg-stripe-gradient'],
      'min-w': [
        {
          'min-w': ['unit', 'unit-2', 'unit-4', 'unit-6'],
        },
      ],
    },
  },
};

const customTwMerge = extendTailwindMerge(twMergeConfig);

describe('Principium Variants (PV) - Default', () => {
  test('should work with nested arrays', () => {
    const {base, item} = pv(
      {
        base: ['base--styles-1', ['base--styles-2', ['base--styles-3']]],
        item: ['slots--item-1', ['slots--item-2', ['slots--item-3']]],
      },
      {
        variants: {
          color: {
            primary: {
              item: [
                'item--color--primary-1',
                ['item--color--primary-2', ['item--color--primary-3']],
              ],
            },
          },
        },
      },
    );

    const popover = pv(null, {
      variants: {
        isOpen: {
          true: ['isOpen--true-1', ['isOpen--true-2', ['isOpen--true-3']]],
          false: ['isOpen--false-1', ['isOpen--false-2', ['isOpen--false-3']]],
        },
      },
    });

    expect(base({color: 'primary'})).toBe('base--styles-1 base--styles-2 base--styles-3');
    expect(item({color: 'primary'})).toBe(
      'slots--item-1 slots--item-2 slots--item-3 item--color--primary-1 item--color--primary-2 item--color--primary-3',
    );
    expect(popover({isOpen: true})).toBe('isOpen--true-1 isOpen--true-2 isOpen--true-3');
    expect(popover({isOpen: false})).toBe('isOpen--false-1 isOpen--false-2 isOpen--false-3');
  });

  test('should work without variants', () => {
    const h1 = pv('text-3xl font-bold', {});

    const expectedResult = 'text-3xl font-bold';
    const result = h1();

    expect(result).toBe(expectedResult);
  });

  test('should work with variants', () => {
    const h1 = pv('text-3xl font-bold', {
      variants: {
        isBig: {
          true: 'text-5xl',
          false: 'text-2xl',
        },
        color: {
          red: 'text-red-500',
          blue: 'text-blue-500',
        },
      },
    });

    const result = h1({
      isBig: true,
      color: 'blue',
    });

    const expectedResult = 'font-bold text-5xl text-blue-500';

    expect(result).toBe(expectedResult);
  });

  test('should work with compoundVariants', () => {
    const h1 = pv('text-3xl font-bold', {
      variants: {
        isBig: {
          true: 'text-5xl',
          false: 'text-2xl',
        },
        color: {
          red: 'text-red-500',
          blue: 'text-blue-500',
        },
      },
      compoundVariants: [
        {
          isBig: true,
          color: 'red',
          class: 'bg-red-500',
        },
        {
          isBig: false,
          color: 'red',
          class: 'underline',
        },
      ],
      defaultVariants: {
        isBig: false,
      },
    });

    expect(
      h1({
        isBig: true,
        color: 'red',
      }),
    ).toBe('font-bold text-5xl text-red-500 bg-red-500');

    expect(
      h1({
        isBig: false,
        color: 'red',
      }),
    ).toBe('font-bold text-2xl text-red-500 underline');

    expect(
      h1({
        color: 'red',
      }),
    ).toBe('font-bold text-2xl text-red-500 underline');
  });

  test('should throw error if the compoundVariants is not an array', () => {
    expect(() =>
      pv('text-3xl font-bold', {
        variants: {
          isBig: {
            true: 'text-5xl',
            false: 'text-2xl',
          },
          color: {
            red: 'text-red-500',
            blue: 'text-blue-500',
          },
        },
        // @ts-expect-error - test error
        compoundVariants: {},
      }),
    ).toThrow();
  });

  test('should work with custom class & className', () => {
    const h1 = pv('text-3xl font-bold', {});

    const result1 = h1({
      className: 'text-xl',
    });

    const result2 = h1({
      class: 'text-xl',
    });

    expect(result1).toBe('font-bold text-xl');
    expect(result2).toBe('font-bold text-xl');
  });

  test('should work without anything', () => {
    const styles = pv(null, {});

    expect(styles()).toBe('');
  });

  test('should work correctly with twMerge', () => {
    //
    const h1 = pv('text-3xl font-bold text-blue-400 text-xl text-blue-200', {});

    expect(h1()).toBe('font-bold text-xl text-blue-200');
  });

  test('should work correctly without twMerge', () => {
    const noTwMergePv = createPv((...args: any[]) => args.join(' '));

    const h1 = noTwMergePv('text-3xl font-bold text-blue-400 text-xl text-blue-200', {});

    expect(h1()).toBe('text-3xl font-bold text-blue-400 text-xl text-blue-200');
  });

  test('should work without defaultsVariants', () => {
    const button = pv('button', {
      variants: {
        variant: {
          primary: 'button--primary',
          secondary: 'button--secondary',
          warning: 'button--warning',
          error: 'button--danger',
        },
        isDisabled: {
          true: 'button--disabled',
          false: 'button--enabled',
        },
        size: {
          small: 'button--small',
          medium: 'button--medium',
          large: 'button--large',
        },
      },
      compoundVariants: [
        {
          variant: 'secondary',
          size: 'small',
          class: 'button--secondary-small',
        },
        {
          variant: 'warning',
          isDisabled: false,
          class: 'button--warning-enabled',
        },
        {
          variant: 'warning',
          isDisabled: true,
          class: 'button--warning-disabled',
        },
        {
          variant: ['warning', 'error'],
          class: 'button--warning-danger',
        },
        {
          variant: ['warning', 'error'],
          size: 'medium',
          class: 'button--warning-danger-medium',
        },
      ],
    });

    expect(button({variant: 'secondary', size: 'small', isDisabled: false})).toBe(
      'button button--secondary button--small button--enabled button--secondary-small',
    );
  });

  test('should work with simple variants', () => {
    const h1 = pv('text-3xl font-bold underline', {
      variants: {
        color: {
          red: 'text-red-500',
          blue: 'text-blue-500',
          green: 'text-green-500',
        },
        isUnderline: {
          true: 'underline',
          false: 'no-underline',
        },
      },
    });

    expect(h1({color: 'green', isUnderline: false})).toBe(
      'text-3xl font-bold text-green-500 no-underline',
    );
  });

  test('should support boolean variants', () => {
    const h1 = pv('text-3xl', {
      variants: {
        bool: {
          true: 'underline',
          false: 'truncate',
        },
      },
    });

    expect(h1()).toBe('text-3xl');
    expect(h1({bool: true})).toBe('text-3xl underline');
    expect(h1({bool: false})).toBe('text-3xl truncate');
  });

  test('should support false only variant', () => {
    const h1 = pv('text-3xl', {
      variants: {
        bool: {
          false: 'truncate',
        },
      },
    });

    expect(h1()).toBe('text-3xl');
    expect(h1({bool: true})).toBe('text-3xl');
    expect(h1({bool: false})).toBe('text-3xl truncate');
  });

  test('should support false only variant -- default variant', () => {
    const h1 = pv('text-3xl', {
      variants: {
        bool: {
          false: 'truncate',
        },
      },
      defaultVariants: {
        bool: true,
      },
    });

    expect(h1()).toBe('text-3xl');
    expect(h1({bool: true})).toBe('text-3xl');
    expect(h1({bool: false})).toBe('text-3xl truncate');
  });

  test('should support boolean variants -- default variants', () => {
    const h1 = pv('text-3xl', {
      variants: {
        bool: {
          true: 'underline',
          false: 'truncate',
        },
      },
      defaultVariants: {
        bool: true,
      },
    });

    expect(h1()).toBe('text-3xl underline');
    expect(h1({bool: true})).toBe('text-3xl underline');
    expect(h1({bool: false})).toBe('text-3xl truncate');
    expect(h1({bool: undefined})).toBe('text-3xl underline');
  });

  test('should support boolean variants -- missing false variant', () => {
    const h1 = pv('text-3xl', {
      variants: {
        bool: {
          true: 'underline',
        },
      },
    });

    expect(h1()).toBe('text-3xl');
    expect(h1({bool: true})).toBe('text-3xl underline');
    expect(h1({bool: false})).toBe('text-3xl');
  });

  test('should support boolean variants -- missing false variant -- default variants', () => {
    const h1 = pv('text-3xl', {
      variants: {
        bool: {
          true: 'underline',
        },
      },
      defaultVariants: {
        bool: true,
      },
    });

    expect(h1()).toBe('text-3xl underline');
    expect(h1({bool: true})).toBe('text-3xl underline');
    expect(h1({bool: false})).toBe('text-3xl');
    expect(h1({bool: undefined})).toBe('text-3xl underline');
  });
});

describe('Principium Variants (PV) - Slots', () => {
  test('should work with slots -- default variants', () => {
    const {base, title, item, list, wrapper} = pv(
      {
        base: 'text-3xl font-bold underline',
        title: 'text-2xl',
        item: 'text-xl',
        list: 'list-none',
        wrapper: 'flex flex-col',
      },
      {
        variants: {
          color: {
            primary: 'color--primary',
            secondary: {
              title: 'color--primary-title',
              item: 'color--primary-item',
              list: 'color--primary-list',
              wrapper: 'color--primary-wrapper',
            },
          },
          size: {
            xs: 'size--xs',
            sm: 'size--sm',
            md: {
              title: 'size--md-title',
            },
          },
          isDisabled: {
            true: {
              title: 'disabled--title',
            },
            false: {
              item: 'enabled--item',
            },
          },
        },
        defaultVariants: {
          color: 'primary',
          size: 'sm',
          isDisabled: false,
        },
      },
    );

    expect(base()).toBe('text-3xl font-bold underline color--primary size--sm');
    expect(title()).toBe('text-2xl color--primary size--sm');
    expect(item()).toBe('text-xl color--primary size--sm enabled--item');
    expect(list()).toBe('list-none color--primary size--sm');
    expect(wrapper()).toBe('flex flex-col color--primary size--sm');
  });

  test('should work with empty slots', () => {
    const {base, title, item, list} = pv(
      {
        base: '',
        title: '',
        item: '',
        list: '',
      },
      {},
    );

    expect(base()).toBe('');
    expect(title()).toBe('');
    expect(item()).toBe('');
    expect(list()).toBe('');
  });

  test('should work with slots -- default variants -- custom class & className', () => {
    const {base, title, item, list, wrapper} = pv(
      {
        base: 'text-3xl font-bold underline',
        title: 'text-2xl',
        item: 'text-xl',
        list: 'list-none',
        wrapper: 'flex flex-col',
      },
      {
        variants: {
          color: {
            primary: {
              base: 'bg-blue-500',
            },
            secondary: {
              title: 'text-white',
              item: 'bg-purple-100',
              list: 'bg-purple-200',
              wrapper: 'bg-transparent',
            },
          },
          size: {
            xs: {
              base: 'text-xs',
            },
            sm: {
              base: 'text-sm',
            },
            md: {
              title: 'text-md',
            },
          },
          isDisabled: {
            true: {
              title: 'opacity-50',
            },
            false: {
              item: 'opacity-100',
            },
          },
        },
        defaultVariants: {
          color: 'primary',
          size: 'sm',
          isDisabled: false,
        },
      },
    );

    // base
    expect(base({class: 'text-lg'})).toBe('font-bold underline bg-blue-500 text-lg');
    expect(base({className: 'text-lg'})).toBe('font-bold underline bg-blue-500 text-lg');
    // title
    expect(title({class: 'text-2xl'})).toBe('text-2xl');
    expect(title({className: 'text-2xl'})).toBe('text-2xl');
    // item
    expect(item({class: 'text-sm'})).toBe('opacity-100 text-sm');
    expect(list({className: 'bg-blue-50'})).toBe('list-none bg-blue-50');
    // list
    expect(wrapper({class: 'flex-row'})).toBe('flex flex-row');
    expect(wrapper({className: 'flex-row'})).toBe('flex flex-row');
  });

  test('should work with slots -- custom variants', () => {
    const {base, title, item, list, wrapper} = pv(
      {
        base: 'text-3xl font-bold underline',
        title: 'text-2xl',
        item: 'text-xl',
        list: 'list-none',
        wrapper: 'flex flex-col',
      },
      {
        variants: {
          color: {
            primary: 'color--primary',
            secondary: {
              base: 'color--secondary-base',
              title: 'color--secondary-title',
              item: 'color--secondary-item',
              list: 'color--secondary-list',
              wrapper: 'color--secondary-wrapper',
            },
          },
          size: {
            xs: 'size--xs',
            sm: 'size--sm',
            md: {
              title: 'size--md-title',
            },
          },
          isDisabled: {
            true: {
              title: 'disabled--title',
            },
            false: {
              item: 'enabled--item',
            },
          },
        },
        defaultVariants: {
          color: 'primary',
          size: 'sm',
          isDisabled: false,
        },
      },
    );

    // with custom props
    const variants = {
      color: 'secondary',
      size: 'md',
    } as const;

    expect(base(variants)).toBe('text-3xl font-bold underline color--secondary-base');
    expect(title(variants)).toBe('text-2xl color--secondary-title size--md-title');
    expect(item(variants)).toBe('text-xl color--secondary-item enabled--item');
    expect(list(variants)).toBe('list-none color--secondary-list');
    expect(wrapper(variants)).toBe('flex flex-col color--secondary-wrapper');
  });

  test('should work with slots -- custom variants -- custom class & className', () => {
    const {base, title, item, list, wrapper} = pv(
      {
        base: 'text-3xl font-bold underline',
        title: 'text-2xl',
        item: 'text-xl',
        list: 'list-none',
        wrapper: 'flex flex-col',
      },
      {
        variants: {
          color: {
            primary: {
              base: 'bg-blue-500',
            },
            secondary: {
              title: 'text-white',
              item: 'bg-purple-100',
              list: 'bg-purple-200',
              wrapper: 'bg-transparent',
            },
          },
          size: {
            xs: {
              base: 'text-xs',
            },
            sm: {
              base: 'text-sm',
            },
            md: {
              base: 'text-md',
              title: 'text-md',
            },
          },
          isDisabled: {
            true: {
              title: 'opacity-50',
            },
            false: {
              item: 'opacity-100',
            },
          },
        },
        defaultVariants: {
          color: 'primary',
          size: 'sm',
          isDisabled: false,
        },
      },
    );

    // with default values
    const variants = {
      color: 'secondary',
      size: 'md',
    } as const;

    // base
    expect(base({...variants, class: 'text-xl'})).toBe('font-bold underline text-xl');
    expect(base({...variants, className: 'text-xl'})).toBe('font-bold underline text-xl');
    // title
    expect(title({...variants, class: 'text-2xl'})).toBe('text-white text-2xl');
    expect(title({...variants, className: 'text-2xl'})).toBe('text-white text-2xl');
    //item
    expect(item({...variants, class: 'bg-purple-50'})).toBe('text-xl opacity-100 bg-purple-50');
    expect(item({...variants, className: 'bg-purple-50'})).toBe('text-xl opacity-100 bg-purple-50');
    // list
    expect(list({...variants, class: 'bg-purple-100'})).toBe('list-none bg-purple-100');
    expect(list({...variants, className: 'bg-purple-100'})).toBe('list-none bg-purple-100');
    // wrapper
    expect(wrapper({...variants, class: 'bg-purple-900 flex-row'})).toBe(
      'flex bg-purple-900 flex-row',
    );
    expect(wrapper({...variants, className: 'bg-purple-900 flex-row'})).toBe(
      'flex bg-purple-900 flex-row',
    );
  });

  test('should work with slots and compoundVariants', () => {
    const {base, title, item, list, wrapper} = pv(
      {
        base: 'text-3xl font-bold underline',
        title: 'text-2xl',
        item: 'text-xl',
        list: 'list-none',
        wrapper: 'flex flex-col',
      },
      {
        variants: {
          color: {
            primary: 'color--primary',
            secondary: {
              base: 'color--secondary-base',
              title: 'color--secondary-title',
              item: 'color--secondary-item',
              list: 'color--secondary-list',
              wrapper: 'color--secondary-wrapper',
            },
          },
          size: {
            xs: 'size--xs',

            sm: 'size--sm',
            md: {
              title: 'size--md-title',
            },
          },
          isDisabled: {
            true: {
              title: 'disabled--title',
            },
            false: {
              item: 'enabled--item',
            },
          },
        },
        defaultVariants: {
          color: 'primary',
          size: 'sm',
          isDisabled: false,
        },
        compoundVariants: [
          {
            color: 'secondary',
            size: 'md',
            class: {
              base: 'compound--base',
              title: 'compound--title',
              item: 'compound--item',
              list: 'compound--list',
              wrapper: 'compound--wrapper',
            },
          },
        ],
      },
    );

    const variants = {
      color: 'secondary',
      size: 'md',
    } as const;

    expect(base(variants)).toBe(
      'text-3xl font-bold underline color--secondary-base compound--base',
    );
    expect(title(variants)).toBe('text-2xl color--secondary-title size--md-title compound--title');
    expect(item(variants)).toBe('text-xl color--secondary-item enabled--item compound--item');
    expect(list(variants)).toBe('list-none color--secondary-list compound--list');
    expect(wrapper(variants)).toBe('flex flex-col color--secondary-wrapper compound--wrapper');
  });

  test('should support slot level variant overrides', () => {
    const {base, title} = pv(
      {
        base: 'text-3xl',
        title: 'text-2xl',
      },
      {
        variants: {
          color: {
            primary: {
              base: 'color--primary-base',
              title: 'color--primary-title',
            },
            secondary: {
              base: 'color--secondary-base',
              title: 'color--secondary-title',
            },
          },
        },
        defaultVariants: {
          color: 'primary',
        },
      },
    );

    expect(base()).toBe('text-3xl color--primary-base');
    expect(title()).toBe('text-2xl color--primary-title');
    expect(base({color: 'secondary'})).toBe('text-3xl color--secondary-base');
    expect(title({color: 'secondary'})).toBe('text-2xl color--secondary-title');
  });

  test('should support slot level variant overrides - compoundVariants', () => {
    const {base, title} = pv(
      {
        base: 'text-3xl',
        title: 'text-2xl',
      },
      {
        variants: {
          color: {
            primary: {
              base: 'color--primary-base',
              title: 'color--primary-title',
            },
            secondary: {
              base: 'color--secondary-base',
              title: 'color--secondary-title',
            },
          },
        },
        compoundVariants: [
          {
            color: 'secondary',
            class: {
              title: 'truncate',
            },
          },
        ],
        defaultVariants: {
          color: 'primary',
        },
      },
    );

    expect(base()).toBe('text-3xl color--primary-base');
    expect(title()).toBe('text-2xl color--primary-title');
    expect(base({color: 'secondary'})).toBe('text-3xl color--secondary-base');
    expect(title({color: 'secondary'})).toBe('text-2xl color--secondary-title truncate');
  });
});

describe('Principium Variants (PV) - Tailwind Merge', () => {
  test('should merge the tailwind classes correctly', () => {
    const styles = pv('text-base text-yellow-400', {
      variants: {
        color: {
          red: 'text-red-500',
          blue: 'text-blue-500',
        },
      },
    });

    const result = styles({
      color: 'red',
    });

    expect(result).toBe('text-base text-red-500');
  });
  test('should support custom config', () => {
    const styles = createPv(customTwMerge)('text-small text-yellow-400 w-unit', {
      variants: {
        size: {
          small: 'text-small w-unit-2',
          medium: 'text-medium w-unit-4',
          large: 'text-large w-unit-6',
        },
        color: {
          red: 'text-red-500',
          blue: 'text-blue-500',
        },
      },
    });

    const result = styles({
      size: 'medium',
      color: 'blue',
    });

    expect(result).toBe('text-medium w-unit-4 text-blue-500');
  });
});
