import {Avatar, AvatarImage} from '@principium/react';

function App() {
  return (
    <div className="flex gap-4">
      <Avatar isBordered>
        <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </Avatar>
      <Avatar isBordered>
        <AvatarImage src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      </Avatar>
      <Avatar isBordered>
        <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      </Avatar>
      <Avatar isBordered>
        <AvatarImage src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      </Avatar>
    </div>
  );
}

export default App;
