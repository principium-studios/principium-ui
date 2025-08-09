import {Card, CardTitle, CardHeader, CardContent} from '@principium/react';
import Link from 'next/link';
import React from 'react';
export interface Feature extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  description?: string;
  icon: React.ReactNode;
}

const FeaturesGrid = ({features}: {features: Feature[]}) => {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:auto-cols-[1fr] md:grid-flow-col">
      {features.map((feature) => {
        const content = (
          <>
            <CardHeader className="flex-row items-center gap-2">
              <div className="bg-secondary-100 flex items-center justify-center rounded-full p-2">
                {feature.icon}
              </div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            {feature.description && (
              <CardContent className="text-muted pt-1 text-sm">{feature.description}</CardContent>
            )}
          </>
        );

        if (feature.href) {
          return (
            <Card key={feature.title} asChild isBlurred isPressable>
              {feature.target === '_blank' ? (
                <a href={feature.href} rel="noopener noreferrer" target="_blank">
                  {content}
                </a>
              ) : (
                <Link href={feature.href}>{content}</Link>
              )}
            </Card>
          );
        }

        return (
          <Card key={feature.title} isBlurred>
            {content}
          </Card>
        );
      })}
    </section>
  );
};

export default FeaturesGrid;
