"use client";

import {useMDXComponent} from 'next-contentlayer2/hooks';
import * as PrincipiumComponents from '@principium/react';
import Image from 'next/image';

interface MdxContentProps {
  code: string;
}

const components = {...PrincipiumComponents, NextImage: Image};

export function MdxContent({code}: MdxContentProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
