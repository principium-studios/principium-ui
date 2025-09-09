import {Primitive, PrimitiveProps} from '@principium/primitive';
import {switchVariants} from '@principium/theme';
import {SlotParams} from '../../../core/variants/src';
import {useControllableState} from '@principium/use-controllable-state';
import {composeHandlers} from '@principium/compose-handlers';

type SwitchProps = PrimitiveProps<'button'> &
  SlotParams<typeof switchVariants.base> &
  SlotParams<typeof switchVariants.wrapper> &
  SlotParams<typeof switchVariants.thumb> & {
    children: never;
    defaultChecked?: boolean;
    checked?: boolean;
    onCheckedChange?: (value: boolean) => void;
  };

const Switch = ({
  className,
  disabled,
  color,
  size,
  disableAnimation,
  defaultChecked,
  checked,
  onClick,
  onCheckedChange,
  ...props
}: SwitchProps) => {
  const [checkedState, setChecked] = useControllableState({
    prop: checked,
    defaultProp: defaultChecked ?? false,
    onChange: onCheckedChange,
  });
  return (
    <Primitive.button
      role="switch"
      aria-checked={checkedState}
      data-selected={checkedState}
      data-disabled={disabled}
      onClick={composeHandlers(onClick, () => setChecked((prev) => !prev))}
      className={switchVariants.base({className, disabled})}
      {...props}
    >
      <span className={switchVariants.wrapper({color, size, disableAnimation})}>
        <span className={switchVariants.thumb({disableAnimation, size})} />
      </span>
    </Primitive.button>
  );
};

export {Switch};
