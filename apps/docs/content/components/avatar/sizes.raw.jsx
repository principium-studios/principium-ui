import {Avatar, AvatarFallback, AvatarImage} from '@principium/react';

function App() {
  return (
    <div className="flex-1 flex items-center gap-4">
      <Avatar size="sm">
        <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEMVe5NUp1Gofh3ZxqWdbsWeHp1uq8ByI6IXolGhsmxM7hw6Lw8XPoykT2tAXZXoI4L5M&usqp=CAU" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEMVe5NUp1Gofh3ZxqWdbsWeHp1uq8ByI6IXolGhsmxM7hw6Lw8XPoykT2tAXZXoI4L5M&usqp=CAU" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEMVe5NUp1Gofh3ZxqWdbsWeHp1uq8ByI6IXolGhsmxM7hw6Lw8XPoykT2tAXZXoI4L5M&usqp=CAU" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default App;
