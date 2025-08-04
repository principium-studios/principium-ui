import {Button} from '@principium/react';

function App() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button radius="none">None</Button>
      <Button radius="sm">Small</Button>
      <Button radius="md">Medium</Button>
      <Button radius="lg">Large</Button>
      <Button radius="full">Full</Button>
    </div>
  );
}

export default App;
