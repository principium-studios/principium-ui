'use client';
import React from 'react';
import {createContext} from '@principium/context';
import {useControllableState} from '@principium/use-controllable-state';
import {Primitive, PrimitiveProps} from '@principium/primitive';
import {composeHandlers} from '@principium/compose-handlers';
import {domAnimation, HTMLMotionProps, LazyMotion, m, useWillChange, Variants} from 'motion/react';
import {TRANSITION_VARIANTS} from '@principium/framer-utils';

// ______________________________________________________ Collapsible ______________________________________________________
type CollapsibleContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const [CollapsibleProvider, useCollapsible] = createContext<CollapsibleContextType>('Collapsible');

type CollapsibleProps = PrimitiveProps<'div'> & {
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onChange?: (open: boolean) => void;
};

const Collapsible = ({children, defaultOpen, open, onChange, ...props}: CollapsibleProps) => {
  const [openState, setOpenState] = useControllableState({
    defaultProp: defaultOpen ?? false,
    prop: open,
    onChange,
  });

  return (
    <CollapsibleProvider open={openState} setOpen={setOpenState}>
      <Primitive.div {...props}>{children}</Primitive.div>
    </CollapsibleProvider>
  );
};

// ______________________________________________________ CollapsibleTrigger ______________________________________________________
type CollapsibleTriggerProps = PrimitiveProps<'button'>;

const CollapsibleTrigger = ({children, onClick, ...props}: CollapsibleTriggerProps) => {
  const {setOpen} = useCollapsible();

  const handleClick = React.useCallback(() => {
    setOpen((prev) => !prev);
  }, [setOpen]);

  return (
    <Primitive.button {...props} onClick={composeHandlers(onClick, handleClick)}>
      {children}
    </Primitive.button>
  );
};

// ______________________________________________________ CollapsibleContent ______________________________________________________
type CollapsibleContentProps = {
  children: React.ReactNode;
} & Omit<HTMLMotionProps<'div'>, 'animate' | 'initial' | 'variants'>;

const CollapsibleContent = ({children, style, ...props}: CollapsibleContentProps) => {
  const {open} = useCollapsible();

  const transitionVariants: Variants = React.useMemo(
    () => ({
      exit: {...TRANSITION_VARIANTS.collapse.exit, overflowY: 'hidden'},
      enter: {...TRANSITION_VARIANTS.collapse.enter, overflowY: 'unset'},
    }),
    [],
  );

  const willChange = useWillChange();

  const combinedStyle = React.useMemo(
    () => ({
      willChange,
      ...style,
    }),
    [willChange, style],
  );

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        animate={open ? 'enter' : 'exit'}
        initial={false}
        data-state={open ? 'enter' : 'exit'}
        style={combinedStyle}
        variants={transitionVariants}
        {...props}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};

// ______________________________________________________ Exports ______________________________________________________
export {Collapsible, CollapsibleTrigger, CollapsibleContent, useCollapsible};
export type {CollapsibleProps, CollapsibleTriggerProps, CollapsibleContentProps};
