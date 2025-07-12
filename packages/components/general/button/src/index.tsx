import { Primitive, type PrimitiveProps } from "@principium/utils/components";

const Button = (props: PrimitiveProps<"button">) => {
  return <Primitive.button {...props} />;
};

export default Button;
