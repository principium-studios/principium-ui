import { createSlot } from "./slot";

const PRIMITIVE_NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "ul",
] as const;

type Primitives = {
  [Node in (typeof PRIMITIVE_NODES)[number]]: React.FC<PrimitiveProps<Node>>;
};
type PrimitiveProps<Node extends React.ElementType> =
  React.ComponentPropsWithRef<Node> & {
    asChild?: boolean;
  };

const Primitive = PRIMITIVE_NODES.reduce((primitive, node) => {
  // Create the slot component
  const Slot = createSlot(`Primitive.${node}`);

  // Create the primitive component with support for asChild prop
  const Node: React.FC<PrimitiveProps<typeof node>> = (props) => {
    const { asChild, ref, ...restProps } = props;
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

const Root = Primitive;

export {
  Primitive,
  //
  Root,
  //,
  PrimitiveProps,
};
