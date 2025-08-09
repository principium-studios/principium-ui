import {Avatar, AvatarFallback, Badge} from '@principium/react';

function App() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Avatar>
        <AvatarFallback>Default</AvatarFallback>
        <Badge />
      </Avatar>
      <Avatar>
        <AvatarFallback>Primary</AvatarFallback>
        <Badge color="primary" />
      </Avatar>
      <Avatar>
        <AvatarFallback>Secondary</AvatarFallback>
        <Badge color="secondary" />
      </Avatar>
      <Avatar>
        <AvatarFallback>Success</AvatarFallback>
        <Badge color="success" />
      </Avatar>
      <Avatar>
        <AvatarFallback>Warning</AvatarFallback>
        <Badge color="warning" />
      </Avatar>
      <Avatar>
        <AvatarFallback>Danger</AvatarFallback>
        <Badge color="danger" />
      </Avatar>
    </div>
  );
}

export default App;
