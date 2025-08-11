import {Avatar, AvatarFallback, Badge} from '@principium/react';

function UsageDemo() {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarFallback>Content</AvatarFallback>
        <Badge>5</Badge>
      </Avatar>
    </div>
  );
}

export default UsageDemo;
