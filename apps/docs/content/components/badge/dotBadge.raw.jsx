import {Avatar, AvatarFallback, Badge} from '@principium/react';

function App() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Avatar>
        <AvatarFallback>Default</AvatarFallback>
        <Badge></Badge>
      </Avatar>
      <Avatar>
        <AvatarFallback>Primary</AvatarFallback>
        <Badge color="primary"></Badge>
      </Avatar>
      <Avatar>
        <AvatarFallback>Secondary</AvatarFallback>
        <Badge color="secondary"></Badge>
      </Avatar>
      <Avatar>
        <AvatarFallback>Success</AvatarFallback>
        <Badge color="success"></Badge>
      </Avatar>
      <Avatar>
        <AvatarFallback>Warning</AvatarFallback>
        <Badge color="warning"></Badge>
      </Avatar>
      <Avatar>
        <AvatarFallback>Danger</AvatarFallback>
        <Badge color="danger"></Badge>
      </Avatar>
    </div>
  );
}

export default App;
