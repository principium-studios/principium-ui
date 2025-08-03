import {Avatar, AvatarImage} from '@principium/react';

function App() {
  return (
      <div className="flex gap-4">
      <Avatar isBordered color="default">
        <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </Avatar>
      <Avatar isBordered color="primary">
        <AvatarImage src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      </Avatar>
      <Avatar isBordered color="secondary">
        <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      </Avatar>
      <Avatar isBordered color="success">
        <AvatarImage src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      </Avatar>
      <Avatar isBordered color="warning">
        <AvatarImage src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      </Avatar>
      <Avatar isBordered color="danger">
        <AvatarImage src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      </Avatar>
    </div>
  );
}

export default App;
