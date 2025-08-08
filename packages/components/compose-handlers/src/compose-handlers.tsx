export function composeHandlers<E extends {defaultPrevented: boolean}>(
  userHandler?: (event: E) => void,
  ourHandler?: (event: E) => void,
  {checkForDefaultPrevented = true} = {},
) {
  return function handleEvent(event: E) {
    userHandler?.(event);

    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourHandler?.(event);
    }
  };
}
