type PossibleRef<T> = React.Ref<T> | undefined;

/**
 * Sets the ref to the given value.
 * @param ref The ref to set.
 * @param value The value to set the ref to.
 * @returns A cleanup function if the ref is a function, otherwise nothing.
 */
function setRef<T>(ref: PossibleRef<T>, value: T) {
  if (typeof ref === 'function') {
    return ref(value);
  } else if (ref !== null && ref !== undefined) {
    ref.current = value;
  }
}

/**
 * Combines multiple refs into a single ref callback.
 * @param refs The refs to combine.
 * @returns A ref callback that sets all refs to the given value.
 */
function composeRefs<T>(...refs: PossibleRef<T>[]): React.RefCallback<T> {
  return (node) => {
    // React 19 allows for refs to have a cleanup function, so keep track of that
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);

      if (!hasCleanup && typeof cleanup === 'function') {
        hasCleanup = true;
      }

      return cleanup;
    });

    // If there is a cleanup function, return it
    if (hasCleanup) {
      return () => {
        cleanups.forEach((cleanup, i) => {
          if (typeof cleanup === 'function') {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        });
      };
    }
  };
}

export {composeRefs};
export type {PossibleRef};
