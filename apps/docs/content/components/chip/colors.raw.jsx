import {Chip} from '@principium/react';

function App() {
  return (
    <div className="flex flex-1 flex-wrap items-center gap-3">
      <Chip color="default">Default</Chip>
      <Chip color="primary">Primary</Chip>
      <Chip color="secondary">Secondary</Chip>
      <Chip color="success">Success</Chip>
      <Chip color="warning">Warning</Chip>
      <Chip color="danger">Danger</Chip>
    </div>
  );
}

export default App;
