'use client';

import {SlotParams} from '@principium/variants';
import {tabsVariants} from '@principium/theme';
import {createContext} from '@principium/context';
import {useControllableState} from '@principium/use-controllable-state';
import {LazyMotion, domMax, m} from 'motion/react';
import {Primitive, PrimitiveProps} from '@principium/primitive';

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
SlotParams<typeof tabsVariants.tabList>
>('TabsVariant', {});

type TabsProps = SlotParams<typeof tabsVariants.tabList> & {
  children?: React.ReactNode;
  value?: string;
  defaultValue: string;
  onChange?: (tab: string) => void;
}
const Tabs = ({children, value, defaultValue, onChange, ...variantProps}: TabsProps) => {
  const [activeTab, setActiveTab] = useControllableState({
    prop: value,
    defaultProp: defaultValue,
    onChange,
  });

  return (
    <TabsVariantProvider {...variantProps}>
      <TabsProvider activeTab={activeTab} setActiveTab={setActiveTab}>
        {children}
      </TabsProvider>
    </TabsVariantProvider>
  );
};

// _______________________________________ TabsList _______________________________________

interface TabsListProps extends PrimitiveProps<'div'> {
  children: React.ReactNode;
}
const TabsList = ({children, className, ...props}: TabsListProps) => {
  const {variant, size, color, radius, fullWidth, isDisabled} = useTabsVariant();
  return (
    <Primitive.div
      className={tabsVariants.tabList({
        variant,
        size,
        color,
        radius,
        fullWidth,
        isDisabled,
        className,
      })}
      {...props}
    >
      {children}
    </Primitive.div>
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
  return (
    <button
      data-selected={activeTab === value}
      className={tabsVariants.tab({variant, size, color, radius, disableAnimation})}
      onClick={() => setActiveTab(value)}
    >
      {activeTab === value && (
        <LazyMotion features={domMax}>
          <m.span
            layoutId="cursor"
            className={tabsVariants.cursor({variant, size, color, radius})}
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
