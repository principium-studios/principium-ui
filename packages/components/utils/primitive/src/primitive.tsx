'use client';

import {createSlot} from '@principium/slot';

const PRIMITIVE_NODES = [
  'a',
  'button',
  'div',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'img',
  'input',
  'label',
  'li',
  'nav',
  'ol',
  'p',
  'select',
  'span',
  'ul',
] as const;

type Primitives = {
  [Node in (typeof PRIMITIVE_NODES)[number]]: (props: PrimitiveProps<Node>) => React.ReactNode;
};
type PrimitiveProps<Node extends React.ElementType> = React.ComponentPropsWithRef<Node> & {
  asChild?: boolean;
};

const Primitive = PRIMITIVE_NODES.reduce((primitive, node) => {
  // Create the slot component
  const Slot = createSlot(`Primitive.${node}`);

  // Create the primitive component with support for asChild prop
  const Node = ({asChild, ref, ...restProps}: PrimitiveProps<typeof node>) => {
    const Component = asChild ? Slot : node;

    // @ts-ignore
    return <Component {...restProps} ref={ref} />;
  };

  Node.displayName = `Primitive.${node}`;

  return {
    ...primitive,
    [node]: Node,
  };
}, {} as Primitives);

export {
  Primitive,
  //
  PrimitiveProps,
};
