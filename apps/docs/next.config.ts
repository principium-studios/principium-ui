import type {NextConfig} from 'next';

import {setupDevPlatform} from '@cloudflare/next-on-pages/next-dev';
import {withContentlayer} from 'next-contentlayer2';

import redirects from './next-redirect';

const nextConfig: NextConfig = {
  redirects,
};

if (process.env.NODE_ENV === 'development') {
  setupDevPlatform();
}

export default withContentlayer(nextConfig);
