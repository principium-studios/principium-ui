'use client';

import {Tabs, TabsList, TabsTrigger, TabsContent, Button} from '@principium/react';
import React from 'react';
import LiveCodePreview from './LiveCodePreview';
import SyntaxHighlighter from './SyntaxHighlighter';
import {ClipboardIcon} from '@phosphor-icons/react/dist/ssr';

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
      <div className="not-prose flex flex-col gap-2 group">
        <TabsList className="w-fit">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent
          value="preview"
          className="border-border-200 bg-background-50 min-h-64 h-fit flex items-center justify-center rounded-lg border p-4"
        >
          <LiveCodePreview code={cleanCode} />
        </TabsContent>
        <TabsContent
          value="code"
          className="bg-border-100 h-110 relative overflow-hidden rounded-lg border border-transparent"
        >
          <div className="absolute right-2 top-2 z-20 hidden items-center justify-center gap-0 bg-transparent opacity-0 transition-opacity group-hover:opacity-100 md:flex">
            <Button
              size="icon"
              variant="light"
              onClick={() => {
                navigator.clipboard.writeText(code);
              }}
            >
              <ClipboardIcon size={16} />
            </Button>
          </div>
          <div className="overflow-auto p-4 h-full">
            <SyntaxHighlighter code={code} language="jsx" showClipboard={false} />
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
});

export {CodeDemo};
