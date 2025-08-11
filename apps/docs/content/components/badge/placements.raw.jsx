import {Avatar, AvatarFallback, Badge} from '@principium/react';

function App() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <Avatar>
        <AvatarFallback>Top Right</AvatarFallback>
        <Badge placement="top-right">5</Badge>
      </Avatar>
      <Avatar>
        <AvatarFallback>Top Left</AvatarFallback>
        <Badge placement="top-left">5</Badge>
      </Avatar>
      <Avatar>
        <AvatarFallback>Bottom Right</AvatarFallback>
        <Badge placement="bottom-right">5</Badge>
      </Avatar>
      <Avatar>
        <AvatarFallback>Bottom Left</AvatarFallback>
        <Badge placement="bottom-left">5</Badge>
      </Avatar>
    </div>
  );
}

export default App;
