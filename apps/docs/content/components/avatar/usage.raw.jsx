import {Avatar, AvatarFallback, AvatarImage} from '@principium/react';

function App() {
  return (
    <div className="flex-1 flex gap-4">
      <Avatar>
        <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEMVe5NUp1Gofh3ZxqWdbsWeHp1uq8ByI6IXolGhsmxM7hw6Lw8XPoykT2tAXZXoI4L5M&usqp=CAU" />
        <AvatarFallback>SMIG</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="//" />
        <AvatarFallback>SMIG</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://i.pinimg.com/1200x/5f/b2/e9/5fb2e9290585f72135d9c2f23c64d02a.jpg" />
        <AvatarFallback>EB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="//" />
        <AvatarFallback>EB</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default App;
