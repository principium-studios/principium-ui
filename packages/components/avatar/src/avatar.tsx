'use client';

import type {PrimitiveProps} from '@principium/primitive';
import type {SlotParams} from '@principium/variants';

import {Primitive} from '@principium/primitive';
import {avatarVariants} from '@principium/theme';
import {composeRefs} from '@principium/compose-refs';
import React from 'react';

// ______________________________________________________ Avatar ______________________________________________________
type AvatarProps = PrimitiveProps<'span'> & SlotParams<typeof avatarVariants.base>;

const Avatar = ({className, size, color, isBordered, disabled, radius, ...props}: AvatarProps) => {
  return (
    <Primitive.span
      className={avatarVariants.base({size, color, isBordered, disabled, radius, className})}
      {...props}
    />
  );
};

// ______________________________________________________ AvatarImage ______________________________________________________
type AvatarImageProps = PrimitiveProps<'img'>;
const AvatarImage = ({className, src, alt, onLoad, onError, ref: userRef, ...props}: AvatarImageProps) => {
  const imgRef = React.useRef<HTMLImageElement>(null);
  const ref = composeRefs(imgRef, userRef);
  return (
    <Primitive.img
      alt={alt}
      className={avatarVariants.img({className})}
      src={src}
      onLoad={(e) => {
        if (imgRef.current) {
          imgRef.current.setAttribute('data-loaded', 'true');
        }
        onLoad?.(e);
      }}
      onError={(e) => {
        if (imgRef.current) {
          imgRef.current.setAttribute('data-loaded', 'false');
        }
        onError?.(e);
      }}
      ref={ref}
      {...props}
    />
  );
};

// ______________________________________________________ AvatarFallback ______________________________________________________
type AvatarFallbackProps = PrimitiveProps<'span'>;
const AvatarFallback = ({className, ...props}: AvatarFallbackProps) => {
  return <Primitive.span className={avatarVariants.fallback({className})} {...props} />;
};

export {Avatar, AvatarImage, AvatarFallback};
