import {Chip} from '@principium/react';

function App() {
  return (
    <div className="flex flex-1 flex-wrap items-center gap-3">
      <Chip radius="none">None</Chip>
      <Chip radius="sm">Small</Chip>
      <Chip radius="md">Medium</Chip>
      <Chip radius="lg">Large</Chip>
      <Chip radius="full">Full</Chip>
    </div>
  );
}

export default App;
