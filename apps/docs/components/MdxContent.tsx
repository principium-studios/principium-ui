'use client';

import {useMDXComponent} from 'next-contentlayer2/hooks';
import Image from 'next/image';
import Community from './Community';
import * as PrincipiumComponents from '@principium/react';

import Overview from '@/content/components/overview';

interface MDXContentProps {
  code: string;
}

// Any components that aren't in the **content** folder should be added here
const components = {NextImage: Image, Community, ...Overview, ...PrincipiumComponents};

export function MDXContent({code}: MDXContentProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
