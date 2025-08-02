import React from 'react';

type ChildrenProps = {
  children?: React.ReactNode;
};

function isReactElement(children: React.ReactNode): children is React.ReactElement<ChildrenProps> {
  return React.isValidElement(children);
}

/**
 * A hook that inserts additional children alongside existing children while respecting the asChild prop pattern.
 * @param asChild - Whether to clone the child element instead of wrapping in a fragment
 * @param children - The children to insert alongside
 * @param inserted - The content to insert
 * @returns The combined children
 */
function useInsertChildren<T extends React.ReactNode>(
  asChild: boolean | undefined | null,
  children: T,
  inserted: React.ReactNode,
) {
  return React.useMemo(() => {
    // Early return if no inserted content
    if (!inserted) return children;

    // Validate children when asChild is true
    if (!isReactElement(children)) {
      throw new Error(
        'useInsertChildren: children must be a valid React element when asChild is true',
      );
    }

    // If not asChild, return a fragment with the children and inserted content
    if (!asChild) {
      if (!children) return inserted;

      return (
        <>
          {children}
          {inserted}
        </>
      );
    }

    // If asChild, clone the child element and insert the inserted content merged with the children of the child element
    return React.cloneElement(children, {
      children: children.props?.children ? [children.props.children, inserted] : inserted,
    });
  }, [asChild, children, inserted]);
}

export {useInsertChildren};
