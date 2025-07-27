import {describe, test, expect} from 'vitest';

import {findAffectingDefaultVariants} from '../refactor/pv';
import {CompoundVariants, DefaultVariants, PVOptions, Slots, Variants} from '../refactor/types';

describe('Principium Variants (PV) - Unit Tests', () => {
  describe('findAffectingDefaultVariants', () => {
    // Define a basic slot structure to simulate a multi-slot component.
    const slots = {
      header: '',
      body: '',
      footer: '',
    };

    /**
     * Since `findAffectingDefaultVariants` is designed to be used inside
     * a PV setup where slots are predefined, we simulate that here by
     * fixing the `S` generic (slots) and letting the other generic types
     * (variants, compound variants, default variants) be inferred.
     *
     * This makes writing test cases easier and avoids repeating boilerplate generics.
     */
    function callFind<
      V extends Variants<typeof slots>,
      CV extends CompoundVariants<typeof slots, V>,
      DV extends DefaultVariants<typeof slots, V>,
    >(slot: keyof typeof slots | null, opts: PVOptions<typeof slots, V, CV, DV>) {
      return findAffectingDefaultVariants<typeof slots, V, CV, DV, keyof typeof slots>(slot, opts);
    }

    describe('Mode - Single Slot', () => {
      test('should suggest all - variants', () => {
        const result = findAffectingDefaultVariants(null, {
          variants: {
            size: {
              sm: 'text-sm',
              lg: 'text-lg',
            },
            color: {
              red: 'text-red-500',
              blue: 'text-blue-500',
            },
          },
          defaultVariants: {
            size: 'sm',
            color: 'red',
          },
        });

        expect(result).toEqual({
          size: 'sm',
          color: 'red',
        });
      });

      test('should suggest all - compound variants', () => {
        const result = findAffectingDefaultVariants(null, {
          variants: {
            size: {
              sm: '',
              lg: '',
            },
            color: {
              red: '',
              blue: '',
            },
          },
          compoundVariants: [
            {
              size: 'sm',
              class: 'tracking-tight',
            },
            {
              color: 'blue',
              class: 'text-blue-700',
            },
          ],
          defaultVariants: {
            size: 'sm',
            color: 'blue',
          },
        });

        expect(result).toEqual({
          size: 'sm',
          color: 'blue',
        });
      });
    });
    describe('Mode - Multi Slot', () => {
      test('should work when variants are slot-specific', () => {
        const result = callFind('header', {
          variants: {
            size: {
              sm: {
                header: 'text-sm',
                footer: 'text-xs',
              },
              lg: {
                header: 'text-lg',
                footer: 'text-base',
              },
            },
            color: {
              red: {
                footer: 'text-red-500',
              },
              blue: {
                footer: 'text-blue-700',
              },
            },
          },
          defaultVariants: {
            size: 'sm',
            color: 'red',
          },
        });

        expect(result).toEqual({
          size: 'sm', // affects "header"
          // color is excluded because it only affects "footer"
        });
      });
      test('should work when variants affect all slots', () => {
        const result = callFind('header', {
          variants: {
            size: {
              sm: 'text-sm',
              md: 'text-md',
            },
          },
          defaultVariants: {
            size: 'sm',
          },
        });

        expect(result).toEqual({size: 'sm'});
      });
      test('should work with variants that affect all slots and are slot-specific', () => {
        const result = callFind('body', {
          variants: {
            color: {
              red: {
                header: 'text-red-500',
                body: 'text-red-400',
              },
              blue: {
                header: 'text-blue-500',
                body: 'text-blue-400',
              },
            },
            tone: {
              light: 'opacity-50',
              dark: 'opacity-90',
            },
          },
          defaultVariants: {
            color: 'red',
            tone: 'dark',
          },
        });

        expect(result).toEqual({color: 'red', tone: 'dark'});
      });
      test("should work when variants don't affect anything and compound variants affect all slots", () => {
        const result = callFind('footer', {
          variants: {
            theme: {
              light: {}, // empty, doesn't affect anything
            },
          },
          compoundVariants: [
            {
              theme: 'light',
              class: 'bg-white',
            },
          ],
          defaultVariants: {
            theme: 'light',
          },
        });

        expect(result).toEqual({theme: 'light'});
      });
      test('should work when variants are slot-specific and compound variants are slot-specific', () => {
        const result = callFind('header', {
          variants: {
            theme: {
              dark: {
                header: 'bg-black',
              },
            },
          },
          compoundVariants: [
            {
              theme: 'dark',
              class: {
                header: 'border-white',
              },
            },
          ],
          defaultVariants: {
            theme: 'dark',
          },
        });

        expect(result).toEqual({theme: 'dark'});
      });
      test('should work when variants are slot-specific and compound variants affect all', () => {
        const result = callFind('header', {
          variants: {
            theme: {
              dark: {
                header: 'bg-black',
              },
            },
          },
          compoundVariants: [
            {
              theme: 'dark',
              class: 'text-white',
            },
          ],
          defaultVariants: {
            theme: 'dark',
          },
        });

        expect(result).toEqual({theme: 'dark'});
      });
      test('should work when variants affect all and compound variants are slot-specific', () => {
        const result = callFind('body', {
          variants: {
            size: {
              lg: 'text-lg',
            },
          },
          compoundVariants: [
            {
              size: 'lg',
              class: {
                body: 'p-4',
              },
            },
          ],
          defaultVariants: {
            size: 'lg',
          },
        });

        expect(result).toEqual({size: 'lg'});
      });
      test('should work when variants affect all and compound variants affect all', () => {
        const result = callFind('footer', {
          variants: {
            tone: {
              subtle: 'opacity-50',
            },
          },
          compoundVariants: [
            {
              tone: 'subtle',
              class: 'italic',
            },
          ],
          defaultVariants: {
            tone: 'subtle',
          },
        });

        expect(result).toEqual({tone: 'subtle'});
      });
      test('should filter out everything when no variants or compounds', () => {
        const multiSlot = callFind('header', {
          defaultVariants: {
            size: 'sm',
          },
        });

        expect(multiSlot).toEqual({});
      });
      test('should work with a lot of variants and compound variants', () => {
        const result = callFind('body', {
          variants: {
            size: {
              sm: {header: 'h-sm', body: 'b-sm'},
              md: {footer: 'f-md'},
            },
            color: {
              red: {footer: 'f-red'},
              green: {body: 'b-green'},
            },
            tone: {
              light: 'opacity-50',
              heavy: {header: 'h-heavy'},
            },
            style: {
              modern: {},
              classic: {},
            },
          },
          compoundVariants: [
            // only applies to body when size=sm & tone=heavy
            {
              size: 'sm',
              tone: 'heavy',
              class: {body: 'compound-1'},
            },
            // applies to all slots when color=green
            {
              color: 'green',
              class: 'compound-2',
            },
            // applies header-only when style=modern
            {
              style: 'modern',
              className: {header: 'compound-3'},
            },
            // applies to all slots on tone=light
            {
              tone: 'light',
              class: 'compound-4',
            },
          ],
          defaultVariants: {
            size: 'sm',
            color: 'red',
            tone: 'heavy',
            style: 'modern',
          },
        });

        expect(result).toEqual({
          size: 'sm', // Applies classes in the variant definition
          // color.red doesn't affect body only color.green does
          tone: 'heavy', // tone.heavy applies classes to body in the first compound variant
          // style doesn't affect at all
        });
      });
    });
    describe('General', () => {
      test('should support `className` in compoundVariants', () => {
        const result = callFind('header', {
          variants: {
            size: {sm: 'text-sm'},
          },
          compoundVariants: [{size: 'sm', className: {header: 'border'}}],
          defaultVariants: {
            size: 'sm',
          },
        });

        expect(result).toEqual({size: 'sm'});
      });
      test('should support array of class names', () => {
        const result = callFind('body', {
          variants: {
            tone: {loud: ['bold', 'uppercase']},
          },
          defaultVariants: {
            tone: 'loud',
          },
        });

        expect(result).toEqual({tone: 'loud'});
      });
      test('should support missing defaultVariants', () => {
        const singleSlot = callFind('header', {
          variants: {
            size: {sm: 'text-sm'},
          },
        });
        const multiSlot = findAffectingDefaultVariants(null, {
          variants: {
            size: {
              sm: '',
            },
          },
        });

        expect(singleSlot).toEqual({});
        expect(multiSlot).toEqual({});
      });
    });
  });
});
