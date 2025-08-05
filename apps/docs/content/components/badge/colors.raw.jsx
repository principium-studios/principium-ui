import {Avatar, AvatarFallback, Badge} from '@principium/react';

function App() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Avatar>
        <AvatarFallback>Default</AvatarFallback>
        <Badge color="default">5</Badge>
      </Avatar>
      <Avatar>
        <AvatarFallback>Primary</AvatarFallback>
        <Badge color="primary">5</Badge>
      </Avatar>
      <Avatar>
        <AvatarFallback>Secondary</AvatarFallback>
        <Badge color="secondary">5</Badge>
      </Avatar>
      <Avatar>
        <AvatarFallback>Success</AvatarFallback>
        <Badge color="success">5</Badge>
      </Avatar>
      <Avatar>
        <AvatarFallback>Warning</AvatarFallback>
        <Badge color="warning">5</Badge>
      </Avatar>
      <Avatar>
        <AvatarFallback>Danger</AvatarFallback>
        <Badge color="danger">5</Badge>
      </Avatar>
    </div>
  );
}

export default App;
