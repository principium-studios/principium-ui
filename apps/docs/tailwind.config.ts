import type {Config} from 'tailwindcss';

import {shadesPlugin} from '@principium/shades';

const config: Config = {
  content: ['./node_modules/@principium/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: () => ({
        neutral: {
          css: {
            '--tw-prose-body': 'var(--background-800)',
            '--tw-prose-headings': 'var(--background-900)',
            '--tw-prose-lead': 'var(--background-700)',
            '--tw-prose-links': 'var(--background-900)',
            '--tw-prose-bold': 'var(--background-900)',
            '--tw-prose-counters': 'var(--background-600)',
            '--tw-prose-bullets': 'var(--background-400)',
            '--tw-prose-hr': 'var(--background-300)',
            '--tw-prose-quotes': 'var(--background-900)',
            '--tw-prose-quote-borders': 'var(--background-300)',
            '--tw-prose-captions': 'var(--background-700)',
            '--tw-prose-code': 'var(--background-900)',
            '--tw-prose-pre-code': 'var(--background-100)',
            '--tw-prose-pre-bg': 'var(--background-900)',
            '--tw-prose-th-borders': 'var(--background-300)',
            '--tw-prose-td-borders': 'var(--background-200)',
            '--tw-prose-invert-body': 'var(--background-200)',
            '--tw-prose-invert-headings': 'var(--color-white)',
            '--tw-prose-invert-lead': 'var(--background-300)',
            '--tw-prose-invert-links': 'var(--color-white)',
            '--tw-prose-invert-bold': 'var(--color-white)',
            '--tw-prose-invert-counters': 'var(--background-400)',
            '--tw-prose-invert-bullets': 'var(--background-600)',
            '--tw-prose-invert-hr': 'var(--background-700)',
            '--tw-prose-invert-quotes': 'var(--background-100)',
            '--tw-prose-invert-quote-borders': 'var(--background-700)',
            '--tw-prose-invert-captions': 'var(--background-400)',
            '--tw-prose-invert-code': 'var(--color-white)',
            '--tw-prose-invert-pre-code': 'var(--background-300)',
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': 'var(--background-600)',
            '--tw-prose-invert-td-borders': 'var(--background-700)',
          },
        },
      }),
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [
    shadesPlugin({
      defaults: true,
    }),
  ],
};

export default config;
