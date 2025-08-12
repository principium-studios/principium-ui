import {Avatar, AvatarFallback, Badge} from '@principium/react';

function App() {
  return (
    <div className="flex-1 flex items-center gap-3">
      <Avatar>
        <AvatarFallback>Content</AvatarFallback>
        <Badge>5</Badge>
      </Avatar>
    </div>
  );
}

export default App;
