import {Primitive, PrimitiveProps} from '@principium/primitive';
import {SlotParams} from '@principium/variants';
import {skeletonVariants} from '@principium/theme';

type SkeletonProps = PrimitiveProps<'div'> & SlotParams<typeof skeletonVariants>;
const Skeleton = ({className, ...props}: SkeletonProps) => {
  return <Primitive.div className={skeletonVariants({className})} {...props} />;
};

export {Skeleton};
