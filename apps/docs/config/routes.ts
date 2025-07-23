import {Route} from '@/types';

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
    keywords: 'customization, principium, themes, colors, dark mode, override styles',
    routes: [
      {
        key: 'theme',
        title: 'Theme',
        keywords: 'theme, principium',
        path: '/docs/customization/theme.mdx',
      },
      {
        key: 'layout',
        title: 'Layout',
        keywords: 'layout, principium',
        path: '/docs/customization/layout.mdx',
      },
      {
        key: 'colors',
        title: 'Colors',
        keywords: 'colors, principium',
        path: '/docs/customization/colors.mdx',
      },
      {
        key: 'customize-theme',
        title: 'Customize theme',
        keywords: 'customize theme, principium',
        path: '/docs/customization/customize-theme.mdx',
      },
      {
        key: 'dark-mode',
        title: 'Dark mode',
        keywords: 'dark mode, principium',
        path: '/docs/customization/dark-mode.mdx',
      },
    ],
  },
  {
    key: 'components',
    title: 'Components',
    keywords: 'interface elements, interactive components, UI components, widgets',
    routes: [
      {
        "key": "overview",
        "title": "Overview",
        "keywords": "overview, components, principium",
        "path": "/docs/components/overview.mdx"
      },
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
        key: 'divider',
        title: 'Divider',
        keywords: 'divider, principium',
        path: '/docs/components/divider.mdx',
      },
    ],
  },
];

export default routes;
