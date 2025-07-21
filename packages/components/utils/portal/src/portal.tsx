'use client';

import type {PrimitiveProps} from '@principium/primitive';

import React from 'react';
import {createPortal} from 'react-dom';
import {Primitive} from '@principium/primitive';
import {useLayoutEffect} from '@principium/use-layout-effect';

interface PortalProps extends PrimitiveProps<'div'> {
  /**
   * The container to render the portal into.
   * @default document.body
   */
  container?: HTMLElement | DocumentFragment | null;
}

const Portal = ({container: containerProp, ...props}: PortalProps) => {
  /**
   * In server environment, we need to wait for the client to mount
   * This is cause we can't access the document object until then.
   */
  const [mounted, setMounted] = React.useState(false);

  // We use useLayoutEffect instead of useEffect to avoid flickering (https://stackoverflow.com/questions/64683234/setstate-inside-uselayouteffect)
  useLayoutEffect(() => setMounted(true), []);

  // If no containerProp is provided, we use the document.body
  const container = containerProp || (mounted && globalThis?.document?.body);
  return container ? createPortal(<Primitive.div {...props} />, container) : null;
};

export {
  Portal,
  //
  PortalProps,
};
