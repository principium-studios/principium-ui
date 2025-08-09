import type {AnyProps} from './combineProps';

import React from 'react';
import {composeRefs} from '@principium/compose-refs';

import {combineProps} from './combineProps';

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>;
  children?: React.ReactNode;
}

/**
 * Factory function that creates slot components.
 * Merges the props of the child element with the props of the slot.
 * @param ownerName The name of the owner component.
 * @returns The slot component.
 */
function createSlot(ownerName: string) {
  // Slot component
  const Slot = ({children, ref, ...slotProps}: SlotProps) => {
    // Expect exactly one child
    if (React.isValidElement(children)) {
      // Get the ref of the child element and its props
      const childrenRef = (children.props as {ref: React.Ref<HTMLElement>}).ref;
      const childrenProps = children.props as AnyProps;

      // Merge the props of the child element with the props of the slot
      const combinedProps: AnyProps = combineProps(childrenProps, slotProps);

      // If the child is not a fragment, merge the refs
      if (children.type !== React.Fragment) {
        combinedProps.ref = ref ? composeRefs(ref, childrenRef) : childrenRef;
      }

      // Return the child element with the merged props
      return React.cloneElement(children, combinedProps);
    }

    // If not in production and the child is not a valid element, throw an error
    if (process.env.NODE_ENV !== 'production') {
      throw new Error(`${ownerName}.Slot expects exactly one child.`);
    }

    // Return null if the child is not a valid element
    return null;
  };

  Slot.displayName = `${ownerName}.Slot`;

  return Slot;
}

const Slot = createSlot('Slot');

export {Slot, createSlot};
