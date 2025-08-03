import React from 'react';
import * as PrincipiumComponents from '@principium/react';
import {LiveError, LivePreview, LiveProvider} from 'react-live';

const LiveCodePreview = React.memo(({code}: {code: string}) => {
  return (
    <LiveProvider code={code} scope={PrincipiumComponents}>
      <LivePreview />
      <LiveError className="mt-2 rounded bg-red-100 p-2 text-red-800" />
    </LiveProvider>
  );
});

export default LiveCodePreview;
