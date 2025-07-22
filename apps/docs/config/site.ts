export const siteConfig = {
  name: 'Principium UI',
  description:
    'A modern, accessible React component library, built for speed, styled with Tailwind, and designed to scale.',
  url: 'https://principium.dev',
  ogImage: 'https://principium.dev/og-image.png',
  email: 'principiumstudios@gmail.com',
  author: 'Covei Rares',
  creator: '@principium_studios',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://principium.dev',
    siteName: 'Principium UI',
    description:
      'A modern, accessible React component library, built for speed, styled with Tailwind, and designed to scale.',
    images: [
      {
        url: 'https://principium.dev/principium-banner.png',
        width: 1200,
        height: 630,
        alt: 'Principium UI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Principium UI',
    description:
      'A modern, accessible React component library, built for speed, styled with Tailwind, and designed to scale.',
    image: 'https://principium.dev/principium-banner.png',
    creator: '@principium_studios',
  },
  links: {
    github: 'https://github.com/principium-studios/principium-ui',
    instagram: 'https://www.instagram.com/principium_studios/',
    youtube: 'https://www.youtube.com/@PrincipiumStudios',
    discord: 'https://discord.gg/GJd65G4N5Y',
  },
} as const;
