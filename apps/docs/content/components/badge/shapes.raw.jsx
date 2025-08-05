import { Avatar, AvatarFallback, Badge } from '@principium/react';

function App() {
  return (
    <div className="flex flex-wrap gap-6 items-center">
      <Avatar radius="sm">
        <AvatarFallback>Rectangle</AvatarFallback>
        <Badge shape="rectangle">5</Badge>
      </Avatar>
      <Avatar>
        <AvatarFallback>Circle</AvatarFallback>
        <Badge shape="circle">5</Badge>
      </Avatar>
    </div>
  );
}

export default App;