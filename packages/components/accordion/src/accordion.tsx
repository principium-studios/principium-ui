'use client';

import {Primitive, PrimitiveProps} from '@principium/primitive';
import {createContext} from '@principium/context';
import {useControllableState} from '../../utils/use-controllable-state/src';
import React from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleContentProps,
  CollapsibleTrigger,
  CollapsibleTriggerProps,
} from '@principium/collapsible';
import {accordionVariants} from '@principium/theme';
import {SlotParams} from '@principium/variants';
import {CaretDownIcon} from '@phosphor-icons/react';

// ________________________ Accordion ________________________

// Ctx
const [AccordionVariantsProvider, useAccordionVariants] =
  createContext<SlotParams<typeof accordionVariants.context>>('AccordionVariants');

// Impl
type AccordionProps = PrimitiveProps<'div'> &
  SlotParams<typeof accordionVariants.base> &
  SlotParams<typeof accordionVariants.context> & {
    type: 'single' | 'multiple';
  } & (AccordionImplSingleProps | AccordionImplMultiProps);

const Accordion = ({
  type,
  className,
  fullWidth,
  variant,
  disableAnimation,
  isCompact,
  ...accordionProps
}: AccordionProps) => {
  const accordionSingleProps = accordionProps as AccordionImplSingleProps;
  const accordionMultiProps = accordionProps as AccordionImplMultiProps;

  return (
    <AccordionVariantsProvider
      variant={variant}
      fullWidth={fullWidth}
      disableAnimation={disableAnimation}
      isCompact={isCompact}
    >
      <Primitive.div className={accordionVariants.base({className, variant})}>
        {type === 'single' ? (
          <AccordionImplSingle {...accordionSingleProps} />
        ) : (
          <AccordionImplMulti {...accordionMultiProps} />
        )}
      </Primitive.div>
    </AccordionVariantsProvider>
  );
};

// ________________________ AccordionImpl Single ________________________

// Ctx
interface AccordionValueCtx {
  value?: string[];
  onItemOpen?: (value: string) => void;
  onItemClose?: (value: string) => void;
}
const [AccordionValueProvider, useAccordionValueProvider] =
  createContext<AccordionValueCtx>('AccordionValueProvider');

// Impl
type AccordionImplSingleProps = {
  children: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};
const AccordionImplSingle = ({
  children,
  value: valueProp,
  defaultValue,
  onValueChange,
}: AccordionImplSingleProps) => {
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? '',
    onChange: onValueChange,
  });
  return (
    <AccordionValueProvider
      value={value ? [value] : []}
      onItemOpen={setValue}
      onItemClose={React.useCallback(() => setValue(''), [setValue])}
    >
      {children}
    </AccordionValueProvider>
  );
};

// ________________________ AccordionImpl Multi ________________________

// Impl
type AccordionImplMultiProps = {
  children: React.ReactNode;
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
};
const AccordionImplMulti = ({
  children,
  value: valueProp,
  defaultValue,
  onValueChange,
}: AccordionImplMultiProps) => {
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? [],
    onChange: onValueChange,
  });

  const handleItemOpen = React.useCallback((value: string) => {
    setValue((prev) => [...prev, value]);
  }, []);

  const handleItemClose = React.useCallback((value: string) => {
    setValue((prev) => prev.filter((item) => item !== value));
  }, []);

  return (
    <AccordionValueProvider value={value} onItemOpen={handleItemOpen} onItemClose={handleItemClose}>
      {children}
    </AccordionValueProvider>
  );
};

// ________________________ Accordion Item ________________________

// ctx
const [GroupProvider, useGroupProvider] = createContext<{
  isOpen: boolean;
}>('GroupProvider');

// impl
type AccordionItemProps = PrimitiveProps<'div'> &
  Omit<SlotParams<typeof accordionVariants.item>, 'variant'> & {disabled?: boolean; value?: string};
const AccordionItem = ({children, value: valueProp, className, ...props}: AccordionItemProps) => {
  const id = valueProp ?? React.useId();
  const {value, onItemOpen, onItemClose} = useAccordionValueProvider();
  const isOpen = (value && value?.includes(id)) || false;
  const disabled = props.disabled || false;
  const {variant, fullWidth} = useAccordionVariants();

  return (
    <GroupProvider isOpen={isOpen}>
      <Collapsible
        disabled={disabled}
        open={isOpen}
        className={accordionVariants.item({className, fullWidth, disabled, variant})}
        onChange={(open) => {
          if (open) {
            onItemOpen?.(id);
          } else {
            onItemClose?.(id);
          }
        }}
      >
        {children}
      </Collapsible>
    </GroupProvider>
  );
};

// ________________________ Accordion Content ________________________
type AccordionContentProps = CollapsibleContentProps;
const AccordionContent = ({children, className, ...props}: AccordionContentProps) => {
  const {disableAnimation, fullWidth, isCompact} = useAccordionVariants();
  return (
    <CollapsibleContent
      className={accordionVariants.content({className, disableAnimation, fullWidth, isCompact})}
      variants={{
        enter: {
          height: 'auto',
          opacity: 1,
          marginBlock: '0.5rem',
          transition: {
            height: {
              type: 'spring',
              bounce: 0,
              duration: 0.3,
            },
          },
        },
        exit: {
          height: 0,
          opacity: 0,
          marginBlock: 0,
          transition: {
            ease: 'easeInOut',
            duration: 0.2,
          },
        },
      }}
      {...props}
    >
      {children}
    </CollapsibleContent>
  );
};

// ________________________ Accordion Trigger ________________________
type AccordionTriggerProps = PrimitiveProps<'h3'>;
const AccordionTrigger = ({children, className, ...props}: AccordionTriggerProps) => {
  const {fullWidth, disableAnimation, isCompact} = useAccordionVariants();
  const {isOpen} = useGroupProvider();
  return (
    <CollapsibleTrigger asChild>
      <Primitive.h3
        className={accordionVariants.trigger({className, fullWidth, disableAnimation, isCompact})}
        {...props}
      >
        {children}
        <CaretDownIcon
          size={16}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </Primitive.h3>
    </CollapsibleTrigger>
  );
};

export type {AccordionProps, AccordionItemProps, AccordionContentProps, AccordionTriggerProps};
export {Accordion, AccordionItem, AccordionContent, AccordionTrigger};
