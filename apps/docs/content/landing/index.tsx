import { Feature } from '@/components/home/FeaturesGrid';
import {LightningIcon, MagicWandIcon, MoonIcon} from '@phosphor-icons/react/dist/ssr';

const features: Feature[] = [
  {
    title: 'Themeable',
    description:
      'Generate consistent, accessible themes with just a base hue and saturation. The plugin handles contrast and shade scaling automatically.',
    icon: <MagicWandIcon className="text-secondary-400 dark:text-secondary-600" />,
  },
  {
    title: 'Fast',
    description:
      'Powered by Tailwind CSS - no runtime styles, and no unused classes bloating your final bundle.',
    icon: <LightningIcon className="text-secondary-400 dark:text-secondary-600" />,
  },
  {
    title: 'Light & Dark UI',
    description:
      'Includes automatic dark mode and shade inversion. Simply enable it in your config for seamless dark theme support.',
    icon: <MoonIcon className="text-secondary-400 dark:text-secondary-600" />,
  },
];

export {features};
