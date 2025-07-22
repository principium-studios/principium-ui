'use client';

import {useMDXComponent} from 'next-contentlayer2/hooks';
import Image from 'next/image';
import Community from './Community';

interface MdxContentProps {
  code: string;
}

const components = {NextImage: Image, Community};

export function MdxContent({code}: MdxContentProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
