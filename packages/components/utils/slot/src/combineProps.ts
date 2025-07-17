type AnyProps = Record<string, any>;

/**
 * Combines two sets of props, with incoming props taking precedence.
 * @param ourProps The original props.
 * @param incomingProps The props to combine with.
 * @returns The combined props.
 */
function combineProps(ourProps: AnyProps, incomingProps: AnyProps) {
  // incoming props take precedence
  const combinedProps = {...incomingProps};

  // loop over incoming props
  for (const propName in incomingProps) {
    // Get the values from both props
    const ourValue = ourProps[propName];
    const incomingValue = incomingProps[propName];

    // Handle event handlers
    const isHandler = propName.startsWith('on');
    if (isHandler) {
      // if both props have handlers, combine them
      if (ourValue && incomingValue) {
        combinedProps[propName] = (...args: unknown[]) => {
          const res = incomingValue(...args);
          ourValue(...args);
          return res;
        };
      } else if (ourValue) {
        combinedProps[propName] = ourValue;
      }
    }
    // Handle style
    else if (propName === 'style') {
      combinedProps[propName] = {
        ...ourValue,
        ...incomingValue,
      };
    }
  }

  return {...ourProps, ...combinedProps};
}

export {combineProps};
export type {AnyProps};
