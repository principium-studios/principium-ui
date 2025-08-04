import { Badge } from '@principium/react';

function App() {
  return (
    <div className="flex flex-wrap gap-6 items-center">
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-4">
          <span>Solid</span>
        </div>
        <Badge variant="solid">5</Badge>
      </div>
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-4">
          <span>Flat</span>
        </div>
        <Badge variant="flat">5</Badge>
      </div>
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-4">
          <span>Faded</span>
        </div>
        <Badge variant="faded">5</Badge>
      </div>
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-4">
          <span>Shadow</span>
        </div>
        <Badge variant="shadow">5</Badge>
      </div>
    </div>
  );
}

export default App;