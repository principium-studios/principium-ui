import type {Route} from '@/types';

const routes: Route[] = [
  {
    key: 'guide',
    title: 'Getting Started',
    keywords: 'guide, getting started, start, principium',
    routes: [
      {
        key: 'introduction',
        title: 'Introduction',
        keywords: 'introduction, principium',
        path: '/docs/guide/introduction.mdx',
      },
      {
        key: 'installation',
        title: 'Installation',
        keywords: 'installation, principium',
        path: '/docs/guide/installation.mdx',
      },
    ],
  },
  {
    key: 'customization',
    title: 'Customization',
    keywords: 'customization, principium, themes, colors, dark mode',
    routes: [
      {
        key: 'theme',
        title: 'Theme',
        keywords: 'theme, principium',
        path: '/docs/customization/theme.mdx',
      },
      {
        key: 'dark-mode',
        title: 'Dark mode',
        keywords: 'dark mode, principium',
        path: '/docs/customization/dark-mode.mdx',
      },
      {
        key: 'colors',
        title: 'Colors',
        keywords: 'colors, principium',
        path: '/docs/customization/colors.mdx',
      },
    ],
  },
  {
    key: 'components',
    title: 'Components',
    keywords: 'interface elements, interactive components, UI components, widgets',
    routes: [
      {
        key: 'alert',
        title: 'Alert',
        keywords: 'alert, principium',
        path: '/docs/components/alert.mdx',
      },
      {
        key: 'avatar',
        title: 'Avatar',
        keywords: 'avatar, principium',
        path: '/docs/components/avatar.mdx',
      },
      {
        key: 'badge',
        title: 'Badge',
        keywords: 'badge, principium',
        path: '/docs/components/badge.mdx',
      },
      {
        key: 'button',
        title: 'Button',
        keywords: 'button, principium',
        path: '/docs/components/button.mdx',
      },
      {
        key: 'card',
        title: 'Card',
        keywords: 'card, principium',
        path: '/docs/components/card.mdx',
      },
      {
        key: 'checkbox',
        title: 'Checkbox',
        keywords: 'checkbox, principium',
        path: '/docs/components/checkbox.mdx',
      },
      {
        key: 'chip',
        title: 'Chip',
        keywords: 'chip, principium',
        path: '/docs/components/chip.mdx',
      },
      {
        key: 'divider',
        title: 'Divider',
        keywords: 'divider, principium',
        path: '/docs/components/divider.mdx',
      },
      {
        key: 'tabs',
        title: 'Tabs',
        keywords: 'tabs, principium',
        path: '/docs/components/tabs.mdx',
      },
    ],
  },
];

export default routes;
