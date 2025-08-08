'use client';

import {CheckIcon} from '@phosphor-icons/react';
import {Primitive, PrimitiveProps} from '@principium/primitive';
import {checkboxVariants} from '@principium/theme';
import {useControllableState} from '@principium/use-controllable-state';
import {SlotParams} from '@principium/variants';
import {composeHandlers} from '@principium/compose-handlers';

type CheckboxProps = PrimitiveProps<'button'> &
  SlotParams<typeof checkboxVariants.base> & {
    checked?: boolean;
    defaultChecked?: boolean;
    onCheckedChange?(checked: boolean): void;
  };

const Checkbox = ({
  checked,
  defaultChecked,
  onCheckedChange,
  className,
  disabled,
  disableAnimation,
  color,
  size,
  radius,
  onClick,
  asChild,
  ...props
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useControllableState({
    defaultProp: defaultChecked ?? false,
    onChange: onCheckedChange,
    prop: checked,
  });
  return (
    <Primitive.button
      role="checkbox"
      aria-checked={isChecked}
      data-state={isChecked ? 'checked' : 'unchecked'}
      data-selected={isChecked}
      data-disabled={disabled}
      className={checkboxVariants.base({
        color,
        size,
        radius,
        isDisabled: disabled,
        disableAnimation,
        className,
      })}
      asChild={asChild}
      onClick={composeHandlers(onClick, () => setIsChecked(!isChecked))}
      {...props}
    >
      <CheckIcon
        className={checkboxVariants.icon({disableAnimation, size})}
      />
    </Primitive.button>
  );
};

export type {CheckboxProps};
export {Checkbox};
