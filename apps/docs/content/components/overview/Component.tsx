'use client';

import {Card, CardHeader, CardTitle, CardContent, Divider} from '@principium/react';
import Image from 'next/image';
import React from 'react';
import Link, {LinkProps} from 'next/link';
import {useOverviewGroup} from './Group';
import {useLayoutEffect} from '@principium/use-layout-effect';
import {useQueryCtx} from './Wrapper';

export default function OverviewComponent({
  title,
  img,
  ...props
}: {title: string; img: string} & LinkProps) {
  const itemId = React.useId();

  const subscribeItem = useOverviewGroup();
  const fuzzyRegex = useQueryCtx();
  const setIsVisible = React.useRef<((isVisible: boolean) => void) | null>(null);

  useLayoutEffect(() => {
    const setIsVisibleItem = subscribeItem(itemId);
    setIsVisible.current = setIsVisibleItem;
    return () => {
      setIsVisibleItem(false);
      setIsVisible.current = null;
    };
  }, []);

  useLayoutEffect(() => {
    if (setIsVisible.current) {
      setIsVisible.current(fuzzyRegex.test(title));
    }
  }, [fuzzyRegex, title]);

  const isVisible = fuzzyRegex.test(title);

  return (
    <Card asChild isPressable={true} className={isVisible ? '' : 'hidden'}>
      <Link {...props}>
        <CardHeader className="py-2">
          <CardTitle className="text-background-800 text-sm font-normal">{title}</CardTitle>
        </CardHeader>
        <Divider />
        <CardContent className="relative flex items-center justify-center text-xs">
          <Image
            src={img}
            alt={title}
            width={100}
            height={75}
            className="before:-translate-1/2 before:absolute before:left-1/2 before:top-1/2"
          />
        </CardContent>
      </Link>
    </Card>
  );
}
