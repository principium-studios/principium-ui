import { Badge } from '@principium/react';

function App() {
  return (
    <div className="flex flex-wrap gap-6 items-center">
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-4">
          <span>Small</span>
        </div>
        <Badge size="sm">5</Badge>
      </div>
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-4">
          <span>Medium</span>
        </div>
        <Badge size="md">5</Badge>
      </div>
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-4">
          <span>Large</span>
        </div>
        <Badge size="lg">5</Badge>
      </div>
    </div>
  );
}

export default App;