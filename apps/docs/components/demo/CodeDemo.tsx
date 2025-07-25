import {useState} from 'react';
import {LiveProvider, LivePreview, LiveError} from 'react-live';
import * as PrincipiumComponents from '@principium/react';

interface CodeDemoProps {
  code: string;
}

const scope = {
    ...PrincipiumComponents,
}

const CodeDemo = ({code}: CodeDemoProps) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="not-prose flex flex-col gap-2">
      <div className="flex gap-2">
        <button
          className={`${showCode ? 'text-background-950' : 'text-background-600'}`}
          onClick={() => setShowCode(false)}
        >
          Preview
        </button>
        <button
          className={`${showCode ? 'text-background-600' : 'text-background-950'}`}
          onClick={() => setShowCode(true)}
        >
          Code
        </button>
      </div>
      <div className="border-border-300 bg-background-50 flex h-60 w-full items-center justify-center rounded-lg border">
        {showCode ? (
          <LiveProvider code={code} scope={scope}>
            <LivePreview />
            <LiveError className="mt-2 bg-red-100 text-red-800" />
          </LiveProvider>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export {CodeDemo};
