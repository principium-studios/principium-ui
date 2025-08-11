'use client';

import {Tabs, TabsList, TabsTrigger, TabsContent, Button} from '@principium/react';
import React from 'react';
import {ClipboardIcon} from '@phosphor-icons/react/dist/ssr';

import LiveCodePreview from './LiveCodePreview';
import SyntaxHighlighter from './SyntaxHighlighter';

const IMPORTS_EXPORTS_REGEX = {
  // This regex matches single-line and multi-line (wrapped) import statements.
  // It matches from 'import' up to the ending semicolon, including newlines.
  imports: /^import[\s\S]*?;\s*$/gm,
  exports: /^.*export\s+(?:default\s+)?.*?;\s*\n?/gm,     
  lineEndings: /\r\n/g,
  returnStatements: /^return[\s\S]*?;\s*$/g,
} as const;

interface CodeDemoProps {
  code: string;
}

function removeImportsExports(code: string): string {
  return code
    .replace(IMPORTS_EXPORTS_REGEX.imports, '')
    .replace(IMPORTS_EXPORTS_REGEX.exports, '')
    .replace(IMPORTS_EXPORTS_REGEX.returnStatements, '')
    .trim()
    .replace(IMPORTS_EXPORTS_REGEX.lineEndings, '\n');
}

const CodeDemo = React.memo(({code}: CodeDemoProps) => {
  const cleanCode = React.useMemo(() => removeImportsExports(code), [code]);

  return (
    <Tabs defaultValue="preview" variant="underlined">
      <div className="not-prose group flex flex-col gap-2">
        <TabsList className="w-fit">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent
          className="border-border bg-border/10 flex h-fit min-h-64 items-center justify-center rounded-lg border p-4"
          value="preview"
        >
          <LiveCodePreview code={cleanCode} />
        </TabsContent>
        <TabsContent
          className="bg-border h-110 relative overflow-hidden rounded-lg border border-transparent"
          value="code"
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
          <div className="h-full overflow-auto p-4">
            <SyntaxHighlighter code={cleanCode} language="jsx" showClipboard={false} />
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
});

CodeDemo.displayName = 'CodeDemo';

export {CodeDemo};
