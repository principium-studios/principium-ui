import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RippleItem } from "../hooks/useRipple";

export interface RippleProps {
  ripples: RippleItem[];
  className?: string;
  removeRipple: (key: number) => void;
}

const Ripple: React.FC<RippleProps> = ({
  className,
  ripples,
  removeRipple,
}) => {
  return (
    <>
      {ripples.map((ripple) => (
        <AnimatePresence key={ripple.id}>
          <motion.div
            className={className}
            style={{
              position: "absolute",
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
              borderRadius: "50%",
              backgroundColor: "currentColor",
              pointerEvents: "none",
            }}
            initial={{ scale: 0, opacity: 0.3 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onAnimationComplete={() => removeRipple(ripple.id)}
          />
        </AnimatePresence>
      ))}
    </>
  );
};

export { Ripple };
