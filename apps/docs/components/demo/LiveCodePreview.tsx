import React from 'react';
import * as PrincipiumComponents from '@principium/react';
import * as PhosphorIcons from '@phosphor-icons/react';
import {LiveError, LivePreview, LiveProvider} from 'react-live';
import Image from 'next/image';

const LiveCodePreview = React.memo(({code}: {code: string}) => {
  return (
    <LiveProvider code={code} scope={{...PhosphorIcons, ...PrincipiumComponents, Image}}>
      <LivePreview className="flex w-full flex-1 items-center justify-center" />
      <LiveError className="mt-2 rounded bg-red-100 p-2 text-red-800" />
    </LiveProvider>
  );
});

LiveCodePreview.displayName = 'LiveCodePreview';

export default LiveCodePreview;
