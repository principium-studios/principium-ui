import {createHighlighterCore} from 'shiki/core';
import {createJavaScriptRegexEngine} from 'shiki/engine/javascript';
import {Fragment, jsxs, jsx} from 'react/jsx-runtime';
import {toJsxRuntime} from 'hast-util-to-jsx-runtime';
import React from 'react';

const highlighter = await createHighlighterCore({
  langs: [import('shiki/langs/jsx.mjs')],
  engine: createJavaScriptRegexEngine(),
  themes: [import('shiki/themes/github-dark.mjs'), import('shiki/themes/github-light.mjs')],
});

const SyntaxHighlighter = React.memo(({code}: {code: string}) => {
  const editorContent = React.useMemo(() => {
    const syntax = highlighter.codeToHast(code, {
      lang: 'jsx',
      themes: {dark: 'github-dark', light: 'github-light'},
    });

    return toJsxRuntime(syntax, {
      Fragment,
      jsx,
      jsxs,
      components: {
        pre: ({style, ...props}) => <pre {...props} />,
      },
    });
  }, [code]);

  return <>{editorContent}</>;
});

export default SyntaxHighlighter;
