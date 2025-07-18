import {describe, test, expect} from 'vitest';
import {pv} from '../src/variants';
import clsx from 'clsx';

describe('Principium Variants (PV)', () => {
  test('should work with single slot variants', () => {
    const button = pv('btn', {
      variants: {
        size: {
          sm: 'text-sm',
          md: 'text-md',
          lg: 'text-lg',
        },
      },
    });

    expect(clsx(button())).toBe('btn');
    expect(clsx(button({size: 'sm'}))).toBe('btn text-sm');
    expect(clsx(button({size: 'lg'}))).toBe('btn text-lg');
  });

  test('should work with nested array classes', () => {
    const button = pv(['btn', ['hover:bg-blue-600', 'active:bg-blue-700']], {
      variants: {
        size: {
          sm: ['text-sm', ['p-2', 'leading-4']],
          lg: ['text-lg', ['p-4', 'leading-6']],
        },
        color: {
          primary: ['bg-blue-500', ['text-white', 'hover:text-blue-100']],
          secondary: ['bg-gray-500', ['text-white', 'hover:text-gray-100']],
        },
      },
    });

    expect(clsx(button())).toBe('btn hover:bg-blue-600 active:bg-blue-700');
    expect(clsx(button({size: 'sm', color: 'primary'}))).toBe(
      'btn hover:bg-blue-600 active:bg-blue-700 text-sm p-2 leading-4 bg-blue-500 text-white hover:text-blue-100',
    );
  });

  test('should work with multi-slot nested arrays', () => {
    const {header, body} = pv(
      {
        header: ['card-header', ['hover:bg-gray-50']],
        body: ['card-body', ['hover:bg-gray-50']],
      },
      {
        variants: {
          size: {
            sm: {
              header: ['text-sm', ['leading-4']],
              body: ['p-2', ['space-y-2']],
            },
            lg: {
              header: ['text-lg', ['leading-6']],
              body: ['p-4', ['space-y-4']],
            },
          },
        },
      },
    );

    expect(clsx(header())).toBe('card-header hover:bg-gray-50');
    expect(clsx(header({size: 'sm'}))).toBe('card-header hover:bg-gray-50 text-sm leading-4');
    expect(clsx(body({size: 'lg'}))).toBe('card-body hover:bg-gray-50 p-4 space-y-4');
  });

  test('should handle compound variants with nested arrays', () => {
    const button = pv('btn', {
      variants: {
        size: {
          sm: 'text-sm',
          lg: 'text-lg',
        },
        color: {
          primary: 'bg-blue-500',
          danger: 'bg-red-500',
        },
      },
      compoundVariants: [
        {
          size: ['sm', 'lg'], // Matches both sm and lg
          color: 'primary',
          class: ['shadow-md', ['hover:shadow-lg', 'active:shadow-sm']],
        },
        {
          color: 'danger',
          class: ['font-bold', ['hover:bg-red-600', 'active:bg-red-700']],
        },
      ],
    });

    expect(clsx(button({size: 'sm', color: 'primary'}))).toBe(
      'btn text-sm bg-blue-500 shadow-md hover:shadow-lg active:shadow-sm',
    );
    expect(clsx(button({size: 'lg', color: 'primary'}))).toBe(
      'btn text-lg bg-blue-500 shadow-md hover:shadow-lg active:shadow-sm',
    );
    expect(clsx(button({color: 'danger'}))).toBe(
      'btn bg-red-500 font-bold hover:bg-red-600 active:bg-red-700',
    );
  });

  test('should handle complex nested arrays in compound variants', () => {
    const card = pv(
      {
        base: ['card', ['hover:shadow-lg']],
        header: ['card-header', ['p-4']],
        body: ['card-body', ['p-6']],
      },
      {
        variants: {
          color: {
            primary: {
              base: ['border-blue-200', ['hover:border-blue-300']],
              header: ['bg-blue-50', ['text-blue-700']],
            },
            danger: {
              base: ['border-red-200', ['hover:border-red-300']],
              header: ['bg-red-50', ['text-red-700']],
            },
          },
          size: {
            compact: {
              header: ['text-sm', ['leading-4']],
              body: ['text-sm', ['leading-5']],
            },
            large: {
              header: ['text-lg', ['leading-6']],
              body: ['text-base', ['leading-7']],
            },
          },
        },
        compoundVariants: [
          {
            color: ['primary', 'danger'], // Matches both colors
            size: 'compact',
            class: {
              base: ['rounded-sm', ['shadow-sm', 'hover:shadow-md']],
              header: ['border-b', ['font-medium']],
            },
          },
          {
            color: 'danger',
            size: 'large',
            class: {
              header: ['font-bold', ['uppercase', 'tracking-wide']],
              body: ['space-y-4', ['font-medium']],
            },
          },
        ],
      },
    );

    // Test base case
    expect(clsx(card.base())).toBe('card hover:shadow-lg');

    // Test with compact primary (activates first compound)
    expect(clsx(card.base({color: 'primary', size: 'compact'}))).toBe(
      'card hover:shadow-lg border-blue-200 hover:border-blue-300 rounded-sm shadow-sm hover:shadow-md',
    );
    expect(clsx(card.header({color: 'primary', size: 'compact'}))).toBe(
      'card-header p-4 bg-blue-50 text-blue-700 text-sm leading-4 border-b font-medium',
    );

    // Test with large danger (activates second compound)
    expect(clsx(card.header({color: 'danger', size: 'large'}))).toBe(
      'card-header p-4 bg-red-50 text-red-700 text-lg leading-6 font-bold uppercase tracking-wide',
    );
    expect(clsx(card.body({color: 'danger', size: 'large'}))).toBe(
      'card-body p-6 text-base leading-7 space-y-4 font-medium',
    );
  });

  test('should handle default variants', () => {
    const {header, body} = pv(
      {
        header: 'card-header',
        body: 'card-body',
      },
      {
        variants: {
          size: {
            sm: {
              header: 'text-sm',
              body: 'p-2',
            },
            lg: {
              header: 'text-lg',
              body: 'p-4',
            },
          },
          color: {
            primary: {
              header: 'bg-blue-500',
              body: 'bg-blue-100',
            },
            secondary: {
              header: 'bg-gray-500',
              body: 'bg-gray-100',
            },
          },
        },
        defaultVariants: {
          size: 'sm',
          color: 'primary',
        },
      },
    );

    // Test with default variants
    expect(clsx(header())).toBe('card-header text-sm bg-blue-500');
    expect(clsx(body())).toBe('card-body p-2 bg-blue-100');

    // Test overriding one variant
    expect(clsx(header({size: 'lg'}))).toBe('card-header text-lg bg-blue-500');
    expect(clsx(body({size: 'lg'}))).toBe('card-body p-4 bg-blue-100');

    // Test overriding multiple variants
    expect(clsx(header({size: 'lg', color: 'secondary'}))).toBe('card-header text-lg bg-gray-500');
    expect(clsx(body({size: 'lg', color: 'secondary'}))).toBe('card-body p-4 bg-gray-100');
  });

  test('should handle compound variants', () => {
    const {header, body} = pv(
      {
        header: 'card-header',
        body: 'card-body',
      },
      {
        variants: {
          size: {
            sm: {
              header: 'text-sm',
              body: 'p-2',
            },
            lg: {
              header: 'text-lg',
              body: 'p-4',
            },
          },
          color: {
            primary: {
              header: 'bg-blue-100',
              body: 'bg-blue-50',
            },
            danger: {
              header: 'bg-red-100',
              body: 'bg-red-50',
            },
          },
        },
        compoundVariants: [
          {
            size: 'lg',
            color: 'danger',
            className: {
              header: 'font-bold border-b border-red-200',
              body: 'border-t border-red-100',
            },
          },
        ],
      },
    );

    // Test normal variants
    expect(clsx(header({size: 'sm', color: 'primary'}))).toBe('card-header text-sm bg-blue-100');
    expect(clsx(body({size: 'sm', color: 'primary'}))).toBe('card-body p-2 bg-blue-50');

    // Test compound variant activation
    expect(clsx(header({size: 'lg', color: 'danger'}))).toBe(
      'card-header text-lg bg-red-100 font-bold border-b border-red-200',
    );
    expect(clsx(body({size: 'lg', color: 'danger'}))).toBe(
      'card-body p-4 bg-red-50 border-t border-red-100',
    );
  });

  test('should handle multiple compound variants', () => {
    const {header, body} = pv(
      {
        header: 'card-header',
        body: 'card-body',
      },
      {
        variants: {
          size: {
            sm: {
              header: 'text-sm',
              body: 'p-2',
            },
            lg: {
              header: 'text-lg',
              body: 'p-4',
            },
          },
          color: {
            primary: {
              header: 'bg-blue-100',
              body: 'bg-blue-50',
            },
            danger: {
              header: 'bg-red-100',
              body: 'bg-red-50',
            },
          },
          bordered: {
            true: {
              header: 'border',
              body: 'border',
            },
          },
        },
        compoundVariants: [
          {
            size: 'lg',
            color: 'danger',
            className: {
              header: 'font-bold',
              body: 'font-medium',
            },
          },
          {
            color: 'danger',
            bordered: true,
            className: {
              header: 'border-red-200',
              body: 'border-red-100',
            },
          },
        ],
      },
    );

    // Test multiple compounds activating together
    expect(clsx(header({size: 'lg', color: 'danger', bordered: true}))).toBe(
      'card-header text-lg bg-red-100 border font-bold border-red-200',
    );
    expect(clsx(body({size: 'lg', color: 'danger', bordered: true}))).toBe(
      'card-body p-4 bg-red-50 border font-medium border-red-100',
    );
  });

  test('should throw error on invalid variant name', () => {
    const {header} = pv(
      {
        header: 'card-header',
      },
      {
        variants: {
          size: {
            sm: 'text-sm',
            lg: 'text-lg',
          },
        },
      },
    );

    expect(() => header({invalid: 'value'} as any)).toThrow('Invalid variant name: invalid');
  });

  test('should throw error on invalid variant value', () => {
    const {header} = pv(
      {
        header: 'card-header',
      },
      {
        variants: {
          size: {
            sm: 'text-sm',
            lg: 'text-lg',
          },
        },
      },
    );

    expect(() => header({size: 'invalid'} as any)).toThrow(
      'Invalid value "invalid" for variant "size"',
    );
  });

  test('should handle boolean variants', () => {
    const {header, body} = pv(
      {
        header: 'card-header',
        body: 'card-body',
      },
      {
        variants: {
          disabled: {
            true: {
              header: 'opacity-50 cursor-not-allowed',
              body: 'opacity-50',
            },
            false: {
              header: 'cursor-pointer',
              body: 'opacity-100',
            },
          },
        },
        defaultVariants: {
          disabled: false,
        },
      },
    );

    // Test default state (false)
    expect(clsx(header())).toBe('card-header cursor-pointer');
    expect(clsx(body())).toBe('card-body opacity-100');

    // Test explicit true state
    expect(clsx(header({disabled: true}))).toBe('card-header opacity-50 cursor-not-allowed');
    expect(clsx(body({disabled: true}))).toBe('card-body opacity-50');

    // Test explicit false state
    expect(clsx(header({disabled: false}))).toBe('card-header cursor-pointer');
    expect(clsx(body({disabled: false}))).toBe('card-body opacity-100');
  });
});
