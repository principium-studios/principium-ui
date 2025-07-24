import {marked} from 'marked';

export type Heading = {level: number; id: string; text: string};

export function getHeadings(markdown: string | undefined): Heading[] {
  let headings: Heading[] = [];

  if (!markdown) return headings;

  const tokens = marked.lexer(markdown);

  tokens.forEach((token) => {
    if (token.type === 'heading') {
      const slug = token.text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // remove non-word characters
        .replace(/\s+/g, '-'); // replace spaces with dashes

      const id = encodeURIComponent(slug);

      headings.push({
        level: token.depth,
        id,
        text: token.text,
      });
    }
  });

  return headings;
}
