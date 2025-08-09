import React from 'react';
import * as PrincipiumComponents from '@principium/react';
import Image from 'next/image';

import Community from '../marketing/Community';
import ComponentLinks from '../docs/ComponentLinks';
import PackageManagers from '../docs/PackageManagers';
import {CodeDemo} from '../demo/CodeDemo';
import SyntaxHighlighter from '../demo/SyntaxHighlighter';

import Overview from '@/content/components/overview';

export interface LinkedHeadingProps {
  as: keyof React.JSX.IntrinsicElements;
  children?: React.ReactNode;
}

const LinkedHeading = ({children, as}: LinkedHeadingProps) => {
  const Comp = as;

  const slug = children!
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // remove non-word characters
    .replace(/\s+/g, '-'); // replace spaces with dashes

  const id = encodeURIComponent(slug);

  return <Comp id={id}>{children}</Comp>;
};

const ApiTable = ({
  data,
}: {
  data: {
    prop: {
      name: string;
      description?: string;
    };
    type?: {
      name: string;
      description?: string;
    };
    default?: string;
  }[];
}) => {
  return (
    <div className="not-prose border-border overflow-hidden rounded-lg border">
      <table className="w-full table-fixed">
        <thead className="bg-background-50 border-border border-b">
          <tr className="flex">
            <th
              className="text-foreground flex-1 px-3 py-3.5 text-left text-sm font-medium"
              scope="col"
            >
              Prop
            </th>
            <th
              className="text-foreground flex-1 px-3 py-3.5 text-left text-sm font-medium"
              scope="col"
            >
              Type
            </th>
            <th
              className="text-foreground flex-1 px-3 py-3.5 text-left text-sm font-medium"
              scope="col"
            >
              Default
            </th>
          </tr>
        </thead>
        <tbody className="divide-border divide-y">
          {data.map((item) => (
            <tr key={item.prop.name} className="hover:bg-background-50/50 flex">
              <td className="text-foreground flex-1 px-3 py-2.5 text-sm font-medium">
                <code className="bg-background-50 block w-fit break-words rounded-md px-1.5 py-0.5">
                  {item.prop.name}
                </code>
              </td>
              <td className="text-muted flex-1 px-3 py-2.5 text-sm">
                <span className="block break-words">{item.type?.name || '-'}</span>
              </td>
              <td className="text-muted flex-1 px-3 py-2.5 text-sm">
                <span className="block break-words">{item.default || '-'}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const MDXComponents = {
  ...PrincipiumComponents,
  ...Overview,
  NextImage: Image,
  Community,
  ComponentLinks,
  PackageManagers,
  CodeDemo,
  ApiTable,
  SyntaxHighlighter,
  // Primitives
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <LinkedHeading {...props} as="h1" />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <LinkedHeading {...props} as="h2" />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <LinkedHeading {...props} as="h3" />,
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => <LinkedHeading {...props} as="h4" />,
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <PrincipiumComponents.Divider {...props} className="not-prose my-6" />
  ),
};

export default MDXComponents;
