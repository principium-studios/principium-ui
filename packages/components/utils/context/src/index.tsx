import React from 'react';

function createContext<ContextValueType extends object | null>(
  name: string,
  defaultValue?: ContextValueType,
) {
  const Context = React.createContext<ContextValueType | undefined>(defaultValue);

  const Provider: React.FC<ContextValueType & {children: React.ReactNode}> = (props) => {
    const {children, ...context} = props;

    const value = React.useMemo(() => context, Object.values(context)) as ContextValueType;

    return <Context value={value}>{children}</Context>;
  };

  Provider.displayName = name + '.Provider';

  function useContext() {
    const context = React.useContext(Context);

    if (context) return context;
    if (defaultValue !== undefined) return defaultValue;

    throw new Error(`useContext(${name}) must be used within a ${name}`);
  }

  return [Provider, useContext] as const;
}

export {createContext};
