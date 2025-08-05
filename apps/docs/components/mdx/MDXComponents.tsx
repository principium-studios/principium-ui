import React from 'react';
import Community from '../marketing/Community';
import Overview from '@/content/components/overview';
import * as PrincipiumComponents from '@principium/react';
import Image from 'next/image';
import ComponentLinks from '../docs/ComponentLinks';
import PackageManagers from '../docs/PackageManagers';
import {CodeDemo} from '../demo/CodeDemo';
import SyntaxHighlighter from '../demo/SyntaxHighlighter';


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
          <thead className="bg-card border-border border-b">
            <tr className="flex">
              <th
                scope="col"
                className="flex-1 text-foreground px-4 py-3.5 text-left text-sm font-medium"
              >
                Prop
              </th>
              <th
                scope="col"
                className="flex-1 text-foreground px-4 py-3.5 text-left text-sm font-medium"
              >
                Type
              </th>
              <th
                scope="col"
                className="flex-1 text-foreground px-4 py-3.5 text-left text-sm font-medium"
              >
                Default
              </th>
            </tr>
          </thead>
          <tbody className="divide-border divide-y">
            {data.map((item) => (
              <tr key={item.prop.name} className="flex hover:bg-card/50">
                <td className="flex-1 text-foreground px-3 py-2.5 text-sm font-medium">
                  <code className="bg-card rounded-md px-1.5 py-0.5 block break-words w-fit">{item.prop.name}</code>
                </td>
                <td className="flex-1 text-muted px-3 py-2.5 text-sm">
                  <span className="block break-words">{item.type?.name || '-'}</span>
                </td>
                <td className="flex-1 text-muted px-3 py-2.5 text-sm">
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
