'use client';

import type {PrimitiveProps} from '@principium/primitive';
import type {SlotParams} from '@principium/variants';

import {Primitive} from '@principium/primitive';
import {avatarVariants} from '@principium/theme';
import {composeRefs} from '@principium/compose-refs';
import {createContext} from '@principium/context';
import React from 'react';

const [AvatarVariantProvider, useAvatarVariant] =
  createContext<SlotParams<typeof avatarVariants.context>>('AvatarVariant');
// ______________________________________________________ Avatar ______________________________________________________

type AvatarProps = PrimitiveProps<'span'> & SlotParams<typeof avatarVariants.base>;

const Avatar = ({className, size, color, bordered, disabled, radius, ...props}: AvatarProps) => {
  return (
    <AvatarVariantProvider radius={radius}>
      <Primitive.span
        className={avatarVariants.base({size, color, bordered, disabled, radius, className})}
        {...props}
      />
    </AvatarVariantProvider>
  );
};

// ______________________________________________________ AvatarImage ______________________________________________________
type AvatarImageProps = PrimitiveProps<'img'>;
const AvatarImage = ({
  className,
  src,
  alt,
  onLoad,
  onError,
  ref: userRef,
  ...props
}: AvatarImageProps) => {
  const imgRef = React.useRef<HTMLImageElement>(null);
  const ref = composeRefs(imgRef, userRef);
  const {radius} = useAvatarVariant();

  return (
    <Primitive.img
      ref={ref}
      alt={alt}
      className={avatarVariants.img({className, radius})}
      src={src}
      onError={(e) => {
        if (imgRef.current) {
          imgRef.current.setAttribute('data-loaded', 'false');
        }
        onError?.(e);
      }}
      onLoad={(e) => {
        if (imgRef.current) {
          imgRef.current.setAttribute('data-loaded', 'true');
        }
        onLoad?.(e);
      }}
      {...props}
    />
  );
};

// ______________________________________________________ AvatarFallback ______________________________________________________
type AvatarFallbackProps = PrimitiveProps<'span'>;
const AvatarFallback = ({className, ...props}: AvatarFallbackProps) => {
  const {radius} = useAvatarVariant();

  return <Primitive.span className={avatarVariants.fallback({className, radius})} {...props} />;
};

export {Avatar, AvatarImage, AvatarFallback};
export type {AvatarProps, AvatarImageProps, AvatarFallbackProps};
