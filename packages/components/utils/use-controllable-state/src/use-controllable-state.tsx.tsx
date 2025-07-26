'use client';

import * as React from 'react';
import {useInsertionEffect} from 'react';

type ChangeHandler<T> = (state: T) => void;
type SetStateFn<T> = React.Dispatch<React.SetStateAction<T>>;

interface UseControllableStateParams<T> {
  prop?: T | undefined;
  defaultProp: T;
  onChange?: ChangeHandler<T>;
  caller?: string;
}

function useControllableState<T>({
  prop,
  defaultProp,
  onChange = () => {},
  caller,
}: UseControllableStateParams<T>): [T, SetStateFn<T>] {
  // Create uncontrolled state
  const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
    defaultProp,
    onChange,
  });

  // Determine if the state is controlled, if it is, use the prop value, otherwise use the uncontrolled state
  const isControlled = prop !== undefined;
  const value = isControlled ? prop : uncontrolledProp;

  // If in development mode, warn if the state is controlled and the prop is changed
  if (process.env.NODE_ENV !== 'production') {
    const isControlledRef = React.useRef(prop !== undefined);
    React.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? 'controlled' : 'uncontrolled';
        const to = isControlled ? 'controlled' : 'uncontrolled';
        console.warn(
          `${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        );
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }

  // Create a callback to set the value, if the state is controlled, call the onChange function with the new value, otherwise set the uncontrolled state
  const setValue = React.useCallback<SetStateFn<T>>(
    (nextValue) => {
      if (isControlled) {
        // If the next value is a function, call it with the current prop value
        const value = isFunction(nextValue) ? nextValue(prop) : nextValue;

        // If the value is different from the prop, call the onChange function
        // Same thing we do in the uncontrolled state (performance optimization)
        if (value !== prop) {
          onChangeRef.current?.(value);
        }
      } else {
        // If the state is uncontrolled, set the value
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, onChangeRef],
  );

  return [value, setValue];
}

/**
 *  Provides a state that is not controlled by the parent component.
 *
 *  @param defaultProp - The default value of the state.
 *  @param onChange - The function to call when the state changes.
 *  @returns A tuple containing the current value of the state, a function to set the value, and a ref to the onChange function.
 */
function useUncontrolledState<T>({
  defaultProp,
  onChange,
}: Omit<UseControllableStateParams<T>, 'prop'>): [
  Value: T,
  setValue: React.Dispatch<React.SetStateAction<T>>,
  OnChangeRef: React.RefObject<ChangeHandler<T> | undefined>,
] {
  // Create uncontrolled state
  const [value, setValue] = React.useState(defaultProp);

  // Keep a ref to the previous value to avoid unnecessary re-renders caused by setting to the same value
  const prevValueRef = React.useRef(value);

  // Stable ref to the latest onChange function
  const onChangeRef = React.useRef(onChange);
  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  // Call onChange when the uncontrolled value changes
  React.useEffect(() => {
    if (prevValueRef.current !== value) {
      onChangeRef.current?.(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef]);

  return [value, setValue, onChangeRef];
}

function isFunction(value: unknown): value is (...args: any[]) => any {
  return typeof value === 'function';
}

export {useControllableState};
