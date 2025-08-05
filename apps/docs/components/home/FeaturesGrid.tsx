'use client';

import {Card, CardTitle, CardHeader, CardContent} from '@principium/react';
import {useRouter} from 'next/navigation';
import React from 'react';
export interface Feature extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  description?: string;
  icon: React.ReactNode;
}

const FeaturesGrid = ({features}: {features: Feature[]}) => {
  const router = useRouter();

  const handleClick = (feat: Feature) => {
    if (!feat.href) return;
    if (feat.target === '_blank') {
      window.open(feat.href, '_blank');
    } else {
      router.push(feat.href);
    }
  };

  return (
    <section
      className="mx-auto grid max-w-6xl gap-4 grid-cols-1 md:grid-flow-col md:auto-cols-[1fr]"
    >
      {features.map((feature) => (
        <Card
          key={feature.title}
          isBlurred
          isPressable={!!feature.href}
          onClick={() => handleClick(feature)}
      
        >
          <CardHeader className="gap-2 items-center">
            <div className="bg-secondary-100 flex items-center justify-center rounded-full p-2">
              {feature.icon}
            </div>
            <CardTitle>{feature.title}</CardTitle>
          </CardHeader>
          {feature.description && (
            <CardContent className="text-muted pt-1 text-sm">
              {feature.description}
            </CardContent>
          )}
        </Card>
      ))}
    </section>
  );
};

export default FeaturesGrid;
