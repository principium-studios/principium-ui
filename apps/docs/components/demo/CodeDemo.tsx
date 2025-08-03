'use client';

import {LiveProvider, LivePreview, LiveError} from 'react-live';
import {Tabs, TabsList, TabsTrigger, TabsContent} from '@principium/react';

import {createHighlighterCore} from 'shiki/core';
import {createJavaScriptRegexEngine} from 'shiki/engine/javascript';
import {Fragment, jsxs, jsx} from 'react/jsx-runtime';

const highlighter = await createHighlighterCore({
  langs: [import('shiki/langs/jsx.mjs')],
  engine: createJavaScriptRegexEngine(),
  themes: [import('shiki/themes/github-dark.mjs')],
});

import * as PrincipiumComponents from '@principium/react';
import {toJsxRuntime} from 'hast-util-to-jsx-runtime';
const scope = {
  ...PrincipiumComponents,
};
interface CodeDemoProps {
  code: string;
}

function removeImportsExports(code: string) {
  return (
    code
      // Remove import statements (complete lines)
      .replace(/^.*import\s+.*?['"].*?;\s*?\n/gm, '')
      // Remove export statements (complete lines)
      .replace(/^.*export\s+(?:default\s+)?.*?;\s*\n?/gm, '')
      // Remove export before function/class declarations
      .replace(/export\s+(?:default\s+)?(?=function|class|const|let|var)/g, '')
      // Remove empty lines at start/end and normalize line endings
      .trim()
      .replace(/\r\n/g, '\n')
  );
}

const CodeDemo = ({code}: CodeDemoProps) => {
  const previewContent = (
    <LiveProvider code={removeImportsExports(code)} scope={scope}>
      <LivePreview />
      <LiveError className="mt-2 bg-red-100 text-red-800" />
    </LiveProvider>
  );

  const syntax = highlighter.codeToHast(code, {
    lang: 'jsx',
    theme: 'github-dark',
  });
  const editorContent = toJsxRuntime(syntax, {
    Fragment,
    jsx,
    jsxs,
    components: {
      pre: ({className, style, ...props}) => <pre {...props} className="" />,
    },
  });

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
          {previewContent}
        </TabsContent>
        <TabsContent
          value="code"
          className="bg-background-100 h-110 overflow-y-auto rounded-lg border border-transparent p-4"
        >
          {editorContent}
        </TabsContent>
      </div>
    </Tabs>
  );
};

export {CodeDemo};
