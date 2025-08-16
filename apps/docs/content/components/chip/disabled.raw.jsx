import {Chip} from '@principium/react';

function App() {
  return (
    <div className="flex flex-1 flex-wrap items-center gap-3">
      <Chip>Enabled</Chip>
      <Chip disabled>Disabled</Chip>
    </div>
  );
}

export default App;
