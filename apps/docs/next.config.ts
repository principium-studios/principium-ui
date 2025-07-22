import type {NextConfig} from 'next';
import redirects from './next-redirect';
import {withContentlayer} from 'next-contentlayer2';

const nextConfig: NextConfig = {
  redirects,
};

export default withContentlayer(nextConfig);
