import {describe, test, expect} from 'vitest';

import {
  evaluateCompoundVariants,
  evaluateVariantClasses,
  findAffectingDefaultVariants,
  getVariantClass,
} from '../src/pv';

describe('Principium Variants (PV) - Unit Tests', () => {
  describe('findAffectingDefaultVariants', () => {
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
        const result = findAffectingDefaultVariants('header' as any, {
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
        const result = findAffectingDefaultVariants('header' as any, {
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
        const result = findAffectingDefaultVariants('body' as any, {
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
        const result = findAffectingDefaultVariants('footer' as any, {
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
        const result = findAffectingDefaultVariants('header' as any, {
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
        const result = findAffectingDefaultVariants('header' as any, {
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
        const result = findAffectingDefaultVariants('body' as any, {
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
        const result = findAffectingDefaultVariants('footer' as any, {
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
        const multiSlot = findAffectingDefaultVariants('header' as any, {
          defaultVariants: {
            size: 'sm',
          },
        });

        expect(multiSlot).toEqual({});
      });
      test('should work with a lot of variants and compound variants', () => {
        const result = findAffectingDefaultVariants('body' as any, {
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
        const result = findAffectingDefaultVariants('header' as any, {
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
        const result = findAffectingDefaultVariants('body' as any, {
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
        const singleSlot = findAffectingDefaultVariants('header' as any, {
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
  describe('evaluateCompoundVariants', () => {
    describe('Mode - Single Slot', () => {
      test('should work when classes apply to all', () => {
        const pickedVariants = {style: 'modern'};
        const compounds = [
          {style: 'modern', class: 'uppercase'},
          {style: 'classic', class: 'lowercase'},
        ];

        const result = evaluateCompoundVariants(pickedVariants, compounds, null);
        expect(result).toEqual(['uppercase']);
      });
      test('should work for multiple compound variants', () => {
        // Single-slot mode: slotName = null
        const pickedVariants = {size: 'sm', tone: 'light'};
        const compounds = [
          {size: 'sm', class: 'p-2'},
          {tone: 'light', class: ['opacity-50', 'bg-muted']},
          {size: 'md', class: 'p-4'},
        ];
        const result = evaluateCompoundVariants(pickedVariants, compounds, null);
        // Expect only the matching ones: size=sm and tone=light
        expect(result).toEqual(['p-2', ['opacity-50', 'bg-muted']]);
      });
    });
    describe('Mode - Multi Slot', () => {
      test('should work when classes apply to all', () => {
        const pickedVariants = {mood: 'happy'};
        const compounds = [
          {mood: 'happy', class: 'smile'},
          {mood: 'sad', className: 'frown'},
        ];

        const result = evaluateCompoundVariants(pickedVariants, compounds, 'body' as any);
        expect(result).toEqual(['smile']);
      });
      test('should work when classes are slot-specific', () => {
        const pickedVariants = {emphasis: 'strong'};
        const compounds = [
          {emphasis: 'strong', class: {header: 'font-bold', body: 'font-semibold'}},
        ];

        const result = evaluateCompoundVariants(pickedVariants, compounds, 'body' as any);
        expect(result).toEqual(['font-semibold']);
      });
      test('should work for multiple compound variants', () => {
        const pickedVariants = {color: 'red', state: 'active'};
        const compounds = [
          {color: 'red', class: {header: 'text-red', body: 'bg-red'}},
          {state: 'active', className: 'border-active'},
          {color: 'blue', class: 'text-blue'},
        ];
        const result = evaluateCompoundVariants(pickedVariants, compounds, 'body' as any);
        // Expect only the matching ones for body: bg-red and border-active
        expect(result).toEqual(['bg-red', 'border-active']);
      });
      test('should work for multiple slots', () => {
        const pickedVariants = {layout: 'grid'};
        const compounds = [
          {
            layout: 'grid',
            class: {
              header: 'grid-cols-3',
              body: 'gap-4',
              footer: 'justify-between',
            },
          },
        ];

        const resultHeader = evaluateCompoundVariants(pickedVariants, compounds, 'header' as any);
        const resultBody = evaluateCompoundVariants(pickedVariants, compounds, 'body' as any);
        const resultFooter = evaluateCompoundVariants(pickedVariants, compounds, 'footer' as any);

        expect(resultHeader).toEqual(['grid-cols-3']);
        expect(resultBody).toEqual(['gap-4']);
        expect(resultFooter).toEqual(['justify-between']);
      });
    });
    describe('General', () => {
      test('should work with className', () => {
        const pickedVariants = {variation: 'primary'};
        const compounds = [{variation: 'primary', className: 'bg-primary'}];
        const result = evaluateCompoundVariants(pickedVariants, compounds, null);
        expect(result).toEqual(['bg-primary']);
      });
      test('should work with array of class values', () => {
        const pickedVariants = {mode: 'auto'};
        const compounds = [{mode: ['auto', 'manual'], class: ['c1', 'c2']}];
        const result = evaluateCompoundVariants(pickedVariants, compounds, null);
        expect(result).toEqual([['c1', 'c2']]);
      });
    });
  });
  describe('getVariantClass', () => {
    test('should return global class when slotName is null', () => {
      expect(getVariantClass(null, 'text-sm')).toBe('text-sm');
    });
    test('should return slot-specific class when value is object', () => {
      const value = {header: 'text-xl', body: 'text-base'};
      expect(getVariantClass('header' as any, value)).toBe('text-xl');
      expect(getVariantClass('body' as any, value)).toBe('text-base');
    });
    test('should return null if slot-specific value does not exist', () => {
      const value = {header: 'text-xl'};
      expect(getVariantClass('body' as any, value)).toBeNull();
    });
    test('should return null if value is null', () => {
      expect(getVariantClass('body' as any, null)).toBeNull();
    });
  });
  describe('evaluateVariantClasses', () => {
    describe('Mode - Single Slot', () => {
      test('should work', () => {
        const picked = {size: 'md'} as const;
        const variants = {
          size: {
            sm: 'text-sm',
            md: 'text-md',
          },
        };

        const result = evaluateVariantClasses(picked, variants, null);
        expect(result).toEqual(['text-md']);
      });
    });
    describe('Mode - Multi Slot', () => {
      test('should work for global classes', () => {
        const pickedVariants = {tone: 'neutral'} as const;
        const variants = {
          tone: {
            neutral: 'text-gray-500',
          },
        } as const;

        const result = evaluateVariantClasses(pickedVariants, variants, 'body' as any);
        expect(result).toEqual(['text-gray-500']);
      });
      test('should work for slot-specific classes', () => {
        const pickedVariants = {theme: 'dark'} as const;
        const variants = {
          theme: {
            dark: {
              header: 'bg-black',
              body: 'bg-gray-800',
            },
          },
        } as const;

        const result = evaluateVariantClasses(pickedVariants, variants, 'body' as any);
        expect(result).toEqual(['bg-gray-800']);
      });
      test('should work for global and slot-specific classes', () => {
        const pickedVariants = {variant: 'primary', theme: 'dark'} as const;
        const variants = {
          variant: {
            primary: 'border',
          },
          theme: {
            dark: {
              header: 'bg-black',
              body: 'bg-gray-900',
            },
          },
        } as const;

        const result = evaluateVariantClasses(pickedVariants, variants, 'body' as any);
        expect(result).toEqual(['border', 'bg-gray-900']);
      });
      test('should work for multiple slots', () => {
        const pickedVariants = {theme: 'fancy'} as const;

        const variants = {
          theme: {
            fancy: {
              header: 'text-pink-500',
              body: 'bg-pink-100',
              footer: 'border-pink-200',
            },
            minimal: 'text-gray-700',
          },
        } as const;

        const resultHeader = evaluateVariantClasses(pickedVariants, variants, 'header' as any);
        const resultBody = evaluateVariantClasses(pickedVariants, variants, 'body' as any);
        const resultFooter = evaluateVariantClasses(pickedVariants, variants, 'footer' as any);

        expect(resultHeader).toEqual(['text-pink-500']);
        expect(resultBody).toEqual(['bg-pink-100']);
        expect(resultFooter).toEqual(['border-pink-200']);
      });
    });
  });
});
