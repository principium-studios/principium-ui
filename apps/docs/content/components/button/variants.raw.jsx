import { Button } from '@principium/react';

function App() {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <Button variant="solid">Solid</Button>
      <Button variant="bordered">Bordered</Button>
      <Button variant="light">Light</Button>
      <Button variant="flat">Flat</Button>
      <Button variant="faded">Faded</Button>
      <Button variant="shadow">Shadow</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  );
}

export default App;