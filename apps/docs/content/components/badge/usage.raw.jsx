import {Avatar, AvatarFallback, Badge} from '@principium/react';

function App() {
  return (
    <div className="flex flex-1 items-center gap-3">
      <Avatar>
        <AvatarFallback>Content</AvatarFallback>
        <Badge>5</Badge>
      </Avatar>
    </div>
  );
}

export default App;
