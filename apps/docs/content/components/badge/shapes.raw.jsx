import {Avatar, AvatarFallback, Badge} from '@principium/react';

function ShapesDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Avatar radius="sm">
        <AvatarFallback>Rectangle</AvatarFallback>
        <Badge shape="rectangle">5</Badge>
      </Avatar>
      <Avatar>
        <AvatarFallback>Circle</AvatarFallback>
        <Badge shape="circle">5</Badge>
      </Avatar>
    </div>
  );
}

export default ShapesDemo;
