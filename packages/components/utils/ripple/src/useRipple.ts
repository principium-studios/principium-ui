import React from "react";

export interface RippleItem {
  id: number;
  x: number;
  y: number;
  size: number;
}

const useRipple = () => {
  const [ripples, setRipples] = React.useState<RippleItem[]>([]);
  const currentId = React.useRef<number>(0);

  const createRipple = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      const newRipple: RippleItem = {
        id: currentId.current,
        x,
        y,
        size,
      };

      setRipples((prev) => [...prev, newRipple]);

      currentId.current++;
    },
    []
  );

  const removeRipple = React.useCallback((id: number) => {
    setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
  }, []);

  return { ripples, createRipple, removeRipple };
};

export { useRipple };
