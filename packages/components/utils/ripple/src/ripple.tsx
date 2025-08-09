'use client';

import type {HTMLMotionProps} from 'motion/react';
import type {RippleItem} from './useRipple';

import * as motion from 'motion/react-client';
import {AnimatePresence, clamp} from 'motion/react';
import {createContext} from '@principium/context';
import {Slot} from '@principium/slot';

import {useRipple} from './useRipple';

// ____________________ Ripple Context ____________________
interface RippleContextType {
  ripples: RippleItem[];
  onClear: (id: number) => void;
  disableRipple?: boolean | null;
}

const [RippleContext, useRippleContext] = createContext<RippleContextType>('RippleContext', {
  ripples: [],
  onClear: () => {},
  disableRipple: false,
});

// ____________________ Ripple Provider ____________________
const RippleProvider = ({
  children,
  disableRipple,
}: {
  children: React.ReactNode;
  disableRipple?: boolean | null;
}) => {
  const {ripples, createRipple, removeRipple} = useRipple();

  return (
    <RippleContext disableRipple={disableRipple} ripples={ripples} onClear={removeRipple}>
      <Slot onClick={disableRipple ? undefined : createRipple}>{children}</Slot>
    </RippleContext>
  );
};

// ____________________ Ripple Component ____________________
interface RippleProps {
  className?: string;
  color?: string;
  style?: React.CSSProperties;
  motionProps?: HTMLMotionProps<'span'>;
}

const Ripple = ({className, color = 'currentColor', style, motionProps}: RippleProps) => {
  const {ripples, onClear, disableRipple} = useRippleContext();

  if (disableRipple) return null;

  return (
    <>
      {ripples.map((ripple) => {
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
      })}
    </>
  );
};

export {Ripple, RippleProvider};
export type {RippleProps};
