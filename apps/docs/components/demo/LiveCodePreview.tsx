import React from 'react';
import * as PrincipiumComponents from '@principium/react';
import * as PhosphorIcons from '@phosphor-icons/react';
import {LiveError, LivePreview, LiveProvider} from 'react-live';
import Image from 'next/image';

const LiveCodePreview = React.memo(({code}: {code: string}) => {
  return (
    <LiveProvider code={code} scope={{...PrincipiumComponents, ...PhosphorIcons, NextImage: Image}}>
      <LivePreview className="flex h-full w-full items-center justify-center" />
      <LiveError className="mt-2 rounded bg-red-100 p-2 text-red-800" />
    </LiveProvider>
  );
});

export default LiveCodePreview;
