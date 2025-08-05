import { Avatar, AvatarFallback, Badge } from '@principium/react';

function App() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Avatar>
        <AvatarFallback>Solid</AvatarFallback>
        <Badge variant="solid">5</Badge>
      </Avatar>
      <Avatar>
        <AvatarFallback>Flat</AvatarFallback>
        <Badge variant="flat">5</Badge>
      </Avatar>
      <Avatar>
        <AvatarFallback>Faded</AvatarFallback>
        <Badge variant="faded">5</Badge>
      </Avatar>
      <Avatar>
        <AvatarFallback>Shadow</AvatarFallback>
        <Badge variant="shadow">5</Badge>
      </Avatar>
    </div>
  );
}

export default App;