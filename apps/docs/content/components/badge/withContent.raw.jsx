import {Avatar, AvatarFallback, Badge} from '@principium/react';

function App() {
  return (
    <div className="flex flex-1 flex-wrap items-center gap-6">
      <Avatar>
        <AvatarFallback>Number</AvatarFallback>
        <Badge>99+</Badge>
      </Avatar>
      <Avatar>
        <AvatarFallback>Text</AvatarFallback>
        <Badge>NEW</Badge>
      </Avatar>
      <Avatar>
        <AvatarFallback>Single</AvatarFallback>
        <Badge>1</Badge>
      </Avatar>
    </div>
  );
}

export default App;
