import type {NextConfig} from 'next';

import {withContentlayer} from 'next-contentlayer2';

import redirects from './next-redirect';

const nextConfig: NextConfig = {
  redirects,
};

export default withContentlayer(nextConfig);
