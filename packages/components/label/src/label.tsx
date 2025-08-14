import {labelVariants} from '@principium/theme';
import {Primitive, PrimitiveProps} from '@principium/primitive';

type LabelProps = PrimitiveProps<'label'>;

const Label = ({children, className, ...props}: LabelProps) => {
  return (
    <Primitive.label
      {...props}
      className={labelVariants({className})}
      onMouseDown={(event) => {
        const target = event.target as HTMLElement;
        if (target.closest('button, input, select, textarea')) return;

        props.onMouseDown?.(event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }}
    >
      {children}
    </Primitive.label>
  );
};

export type {LabelProps};
export {Label};
