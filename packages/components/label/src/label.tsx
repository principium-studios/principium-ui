import { labelVariants } from "@principium/theme";

type LabelProps = React.HTMLAttributes<HTMLLabelElement>;

const Label = ({children, className, ...props}: LabelProps) => {
  return <label {...props} className={labelVariants({className})}>{children}</label>;
};

export type {LabelProps};
export {Label};

