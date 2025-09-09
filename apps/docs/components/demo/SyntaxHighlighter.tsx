'use client';

import {createHighlighterCore} from 'shiki/core';
import {createJavaScriptRegexEngine} from 'shiki/engine/javascript';
import {Fragment, jsxs, jsx} from 'react/jsx-runtime';
import {toJsxRuntime} from 'hast-util-to-jsx-runtime';
import React from 'react';
import {Button} from '@principium/react';
import {ClipboardIcon} from '@phosphor-icons/react/dist/ssr';
import {useLayoutEffect} from '@principium/use-layout-effect';

let highlighterPromise: Promise<any> | null = null;

function loadHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighterCore({
      langs: [
        import('shiki/langs/jsx.mjs'),
        import('shiki/langs/tsx.mjs'),
        import('shiki/langs/typescript.mjs'),
        import('shiki/langs/javascript.mjs'),
        import('shiki/langs/css.mjs'),
        import('shiki/langs/bash.mjs'),
        import('shiki/langs/json.mjs'),
      ],
      engine: createJavaScriptRegexEngine(),
      themes: [import('shiki/themes/github-dark.mjs'), import('shiki/themes/github-light.mjs')],
    });
  }

  return highlighterPromise;
}

interface SyntaxHighlighterProps extends React.HTMLAttributes<HTMLPreElement> {
  code: string;
  language?: string;
  showClipboard?: boolean;
}

const SyntaxHighlighter = React.memo(
  ({
    code,
    language = 'jsx',
    className: classNameProp,
    showClipboard = true,
  }: SyntaxHighlighterProps) => {
    const [highlighter, setHighlighter] = React.useState<any | null>(null);

    useLayoutEffect(() => {
      loadHighlighter().then((h) => {
        setHighlighter(h);
      });
    }, []);

    const editorContent = React.useMemo(() => {
      if (!highlighter) return null;

      const syntax = highlighter.codeToHast(code, {
        lang: language,
        themes: {dark: 'github-dark', light: 'github-light'},
      });

      return toJsxRuntime(syntax, {
        Fragment,
        jsx,
        jsxs,
        components: {
          pre: ({className, style: _, children, ...props}) => (
            <pre {...props} className={className + ' group relative' + classNameProp}>
              {children}
              {showClipboard && (
                <Button
                  className="absolute right-2 top-2 opacity-0 group-hover:opacity-100"
                  size="icon"
                  variant="light"
                  onClick={() => {
                    navigator.clipboard.writeText(code);
                  }}
                >
                  <ClipboardIcon size={16} />
                </Button>
              )}
            </pre>
          ),
        },
      });
    }, [highlighter, code, language, classNameProp, showClipboard]);

    if (editorContent) return <>{editorContent}</>;

    return (
      <pre className={'group relative ' + (classNameProp ?? '')}>
        {code}
        {showClipboard && (
          <Button
            className="absolute right-2 top-2 opacity-0 group-hover:opacity-100"
            size="icon"
            variant="light"
            onClick={() => {
              navigator.clipboard.writeText(code);
            }}
          >
            <ClipboardIcon size={16} />
          </Button>
        )}
      </pre>
    );
  },
);

SyntaxHighlighter.displayName = 'SyntaxHighlighter';

export default SyntaxHighlighter;
