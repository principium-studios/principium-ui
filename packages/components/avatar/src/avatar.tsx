import type {PrimitiveProps} from '@principium/primitive';
import type {AvatarVariantProps} from '@principium/theme';

import {Primitive} from '@principium/primitive';
import {avatarVariants} from '@principium/theme';

// ______________________________________________________ Avatar ______________________________________________________
type AvatarProps = PrimitiveProps<'span'> & AvatarVariantProps;

const Avatar = ({className, size, color, isBordered, disabled, ...props}: AvatarProps) => {
  return (
    <Primitive.span
      className={avatarVariants.base({size, color, isBordered, disabled, className})}
      {...props}
    />
  );
};

// ______________________________________________________ AvatarImage ______________________________________________________
type AvatarImageProps = PrimitiveProps<'img'>;
const AvatarImage = ({className, src, alt, ...props}: AvatarImageProps) => {
  return (
    <Primitive.img alt={alt} className={avatarVariants.img({className})} src={src} {...props} />
  );
};

// ______________________________________________________ AvatarFallback ______________________________________________________
type AvatarFallbackProps = PrimitiveProps<'span'> & {
  initials: string;
};
const AvatarFallback = ({className, initials, ...props}: AvatarFallbackProps) => {
  return (
    <Primitive.span className={avatarVariants.fallback({className})} {...props}>
      {initials}
    </Primitive.span>
  );
};

export {Avatar, AvatarImage, AvatarFallback};
