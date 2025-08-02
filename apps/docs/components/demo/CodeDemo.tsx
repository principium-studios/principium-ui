import {LiveProvider, LivePreview, LiveError} from 'react-live';
import {Tabs, TabsList, TabsTrigger, TabsContent} from '@principium/react';

import * as PrincipiumComponents from '@principium/react';
const scope = {
  ...PrincipiumComponents,
};
interface CodeDemoProps {
  code: string;
}

function removeImportsExports(code: string) {
  return code
    // Remove import statements (complete lines)
    .replace(/^.*import\s+.*?['"].*?;\s*?\n/gm, '')
    // Remove export statements (complete lines)
    .replace(/^.*export\s+(?:default\s+)?.*?;\s*?\n/gm, '')
    // Remove export before function/class declarations
    .replace(/export\s+(?:default\s+)?(?=function|class|const|let|var)/g, '')
    // Remove empty lines at start/end and normalize line endings
    .trim()
    .replace(/\r\n/g, '\n');
}

const CodeDemo = ({code}: CodeDemoProps) => {
  return (
    <Tabs defaultValue="preview" variant="underlined">
      <div className="flex flex-col gap-2 not-prose">
        <TabsList className="w-fit">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent
          value="preview"
          className="border-border-200 bg-background-50 h-110 flex items-center justify-center rounded-lg border"
        >
          <LiveProvider code={removeImportsExports(code)} scope={scope}>
            <LivePreview />
            <LiveError className="mt-2 bg-red-100 text-red-800" />
          </LiveProvider>
        </TabsContent>
        <TabsContent
          value="code"
          className="bg-background-100 h-110 rounded-lg border border-transparent p-4 overflow-y-auto"
        >
          <pre>
            <code>{removeImportsExports(code)}</code>
          </pre>
        </TabsContent>
      </div>
    </Tabs>
  );
};

export {CodeDemo};
