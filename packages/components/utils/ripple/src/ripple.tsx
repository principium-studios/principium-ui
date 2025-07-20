'use client';

import type {HTMLMotionProps} from 'framer-motion';
import type {RippleItem} from './useRipple';

import React from 'react';
import {motion, AnimatePresence, clamp} from 'framer-motion';

interface RippleProps {
  ripples: RippleItem[];
  className?: string;
  color?: string;
  onClear: (key: number) => void;
  style?: React.CSSProperties;
  motionProps?: HTMLMotionProps<'span'>;
}

const Ripple = ({
  ripples = [],
  className,
  color = 'currentColor',
  onClear,
  style,
  motionProps,
}: RippleProps) => {
  return ripples.map((ripple) => {
    const duration = clamp(0.2, ripple.size > 100 ? 0.75 : 0.5, 0.01 * ripple.size);

    return (
      <AnimatePresence key={ripple.id}>
        <motion.span
          animate={{scale: 2, opacity: 0}}
          className={className}
          exit={{scale: 2, opacity: 0}}
          initial={{scale: 0, opacity: 0.3}}
          style={{
            position: 'absolute',
            backgroundColor: color,
            borderRadius: '100%',
            transformOrigin: 'center',
            pointerEvents: 'none',
            overflow: 'hidden',
            inset: 0,
            zIndex: 0,
            top: ripple.y,
            left: ripple.x,
            width: `${ripple.size}px`,
            height: `${ripple.size}px`,
            ...style,
          }}
          transition={{duration}}
          onAnimationComplete={() => onClear(ripple.id)}
          {...motionProps}
        />
      </AnimatePresence>
    );
  });
};

export {
  Ripple,
  //
  RippleProps,
};
