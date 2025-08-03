'use client';

import {Tabs, TabsList, TabsTrigger, TabsContent} from '@principium/react';
import React from 'react';
import LiveCodePreview from './LiveCodePreview';
import SyntaxHighlighter from './SyntaxHighlighter';

const IMPORTS_EXPORTS_REGEX = {
  imports: /^.*import\s+.*?['"].*?;\s*?\n/gm,
  exports: /^.*export\s+(?:default\s+)?.*?;\s*\n?/gm,
  exportDeclarations: /export\s+(?:default\s+)?(?=function|class|const|let|var)/g,
  lineEndings: /\r\n/g,
} as const;

interface CodeDemoProps {
  code: string;
}

function removeImportsExports(code: string): string {
  return code
    .replace(IMPORTS_EXPORTS_REGEX.imports, '')
    .replace(IMPORTS_EXPORTS_REGEX.exports, '')
    .replace(IMPORTS_EXPORTS_REGEX.exportDeclarations, '')
    .trim()
    .replace(IMPORTS_EXPORTS_REGEX.lineEndings, '\n');
}

const CodeDemo = React.memo(({code}: CodeDemoProps) => {
  const cleanCode = React.useMemo(() => removeImportsExports(code), [code]);

  return (
    <Tabs defaultValue="preview" variant="underlined">
      <div className="not-prose flex flex-col gap-2">
        <TabsList className="w-fit">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent
          value="preview"
          className="border-border-200 bg-background-50 h-110 flex items-center justify-center rounded-lg border"
        >
          <LiveCodePreview code={cleanCode} />
        </TabsContent>
        <TabsContent
          value="code"
          className="bg-border-100 h-110 overflow-y-auto rounded-lg border border-transparent p-4"
        >
          <SyntaxHighlighter code={code} />
        </TabsContent>
      </div>
    </Tabs>
  );
});

export {CodeDemo};
