import { Badge } from '@principium/react';

function App() {
  return (
    <div className="flex flex-wrap gap-6 items-center">
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-4">
          <span>Number</span>
        </div>
        <Badge>99+</Badge>
      </div>
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-4">
          <span>Text</span>
        </div>
        <Badge>NEW</Badge>
      </div>
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-4">
          <span>Single</span>
        </div>
        <Badge>1</Badge>
      </div>
    </div>
  );
}

export default App;