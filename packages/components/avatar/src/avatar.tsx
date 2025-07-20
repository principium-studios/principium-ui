import {Primitive, PrimitiveProps} from '@principium/primitive';
import {avatarVariants, AvatarVariantProps} from '@principium/theme';

// ______________________________________________________ Avatar ______________________________________________________
type AvatarProps = PrimitiveProps<'span'> &
  AvatarVariantProps;

const Avatar = ({
  className,
  size,
  color,
  isBordered,
  disabled,
  ...props
}: AvatarProps) => {
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
    <Primitive.img className={avatarVariants.img({className})} src={src} alt={alt} {...props} />
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
