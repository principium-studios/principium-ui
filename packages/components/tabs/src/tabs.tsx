'use client';

import type {SlotParams} from '@principium/variants';
import type {PrimitiveProps} from '@principium/primitive';

import React from 'react';
import {tabsVariants} from '@principium/theme';
import {createContext} from '@principium/context';
import {useControllableState} from '@principium/use-controllable-state';
import {LazyMotion, domMax, m} from 'motion/react';
import {Primitive} from '@principium/primitive';

// _______________________________________ Tabs _______________________________________
interface TabsContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const [TabsProvider, useTabs] = createContext<TabsContextType>('Tabs', {
  activeTab: '',
  setActiveTab: () => {},
});

const [TabsVariantProvider, useTabsVariant] = createContext<
  SlotParams<typeof tabsVariants.context>
>('TabsVariant', {});

type TabsProps = SlotParams<typeof tabsVariants.context> & {
  children?: React.ReactNode;
  value?: string;
  defaultValue: string;
  onChange?: (tab: string) => void;
};
const Tabs = ({
  children,
  value,
  defaultValue,
  onChange,
  variant,
  size,
  color,
  radius,
  fullWidth,
  isDisabled,
}: TabsProps) => {
  const [activeTab, setActiveTab] = useControllableState({
    prop: value,
    defaultProp: defaultValue,
    onChange,
  });

  return (
    <TabsVariantProvider
      color={color}
      fullWidth={fullWidth}
      isDisabled={isDisabled}
      radius={radius}
      size={size}
      variant={variant}
    >
      <TabsProvider activeTab={activeTab} setActiveTab={setActiveTab}>
        {children}
      </TabsProvider>
    </TabsVariantProvider>
  );
};

// _______________________________________ TabsList _______________________________________

interface TabsListCtx {
  cursorId: string;
}
const [TabsListProvider, useTabsList] = createContext<TabsListCtx>('TabsList');

interface TabsListProps extends PrimitiveProps<'div'> {
  children: React.ReactNode;
}
const TabsList = ({children, className, ...props}: TabsListProps) => {
  const {variant, size, radius, fullWidth, isDisabled} = useTabsVariant();
  const id = React.useId();

  return (
    <TabsListProvider cursorId={id}>
      <Primitive.div
        className={tabsVariants.tabList({
          variant,
          size,
          radius,
          fullWidth,
          isDisabled,
          className,
        })}
        {...props}
      >
        {children}
      </Primitive.div>
    </TabsListProvider>
  );
};

// _______________________________________ Tab _______________________________________
interface TabsTriggerProps {
  children: React.ReactNode;
  value: string;
}
const TabsTrigger = ({children, value}: TabsTriggerProps) => {
  const {setActiveTab, activeTab} = useTabs();
  const {variant, size, color, radius, disableAnimation} = useTabsVariant();
  const {cursorId} = useTabsList();

  return (
    <button
      className={tabsVariants.tab({variant, size, color, radius, disableAnimation})}
      data-selected={activeTab === value}
      onClick={() => setActiveTab(value)}
    >
      {activeTab === value && (
        <LazyMotion features={domMax}>
          <m.span
            className={tabsVariants.cursor({variant, size, color, radius})}
            layoutId={`cursor-${cursorId}`}
            transition={{
              type: 'spring',
              bounce: 0.15,
              duration: 0.5,
            }}
          />
        </LazyMotion>
      )}
      <span className={tabsVariants.tabContent({disableAnimation, variant, color})}>
        {children}
      </span>
    </button>
  );
};

// _______________________________________ TabsContent _______________________________________
interface TabsContentProps extends PrimitiveProps<'div'> {
  value: string;
}
const TabsContent = ({children, value, className, ...props}: TabsContentProps) => {
  const {activeTab} = useTabs();

  const shouldRender = value === activeTab;

  if (!shouldRender) return null;

  return (
    <Primitive.div className={tabsVariants.panel({className})} {...props}>
      {children}
    </Primitive.div>
  );
};

export type {TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps};
export {Tabs, TabsList, TabsTrigger, TabsContent};
