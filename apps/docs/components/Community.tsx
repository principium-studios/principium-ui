"use client";

import {DiscordLogoIcon, GithubLogoIcon} from '@phosphor-icons/react/dist/ssr';
import FeaturesGrid from './home/FeaturesGrid';
import {siteConfig} from '@/config/site';

const Community = () => {
  return (
    <FeaturesGrid
      features={[
        {
          icon: <DiscordLogoIcon />,
          title: 'Discord',
          href: siteConfig.links.discord,
          target: '_blank',
        },
        {
          icon: <GithubLogoIcon />,
          title: 'GitHub',
          href: siteConfig.links.github,
          target: '_blank',
        },
      ]}
    />
  );
};

export default Community;
