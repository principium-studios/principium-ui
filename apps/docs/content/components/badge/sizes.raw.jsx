import {Avatar, AvatarFallback, Badge} from '@principium/react';

function App() {
  return (
    <div className="flex-1 flex flex-wrap items-center gap-6">
      <Avatar>
        <AvatarFallback>Small</AvatarFallback>
        <Badge size="sm">5</Badge>
      </Avatar>
      <Avatar>
        <AvatarFallback>Medium</AvatarFallback>
        <Badge size="md">5</Badge>
      </Avatar>
      <Avatar>
        <AvatarFallback>Large</AvatarFallback>
        <Badge size="lg">5</Badge>
      </Avatar>
    </div>
  );
}

export default App;
