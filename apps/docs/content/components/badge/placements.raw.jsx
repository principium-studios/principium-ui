import { Badge } from '@principium/react';

function App() {
  return (
    <div className="flex flex-wrap gap-8 items-center">
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-6">
          <span>Top Right</span>
        </div>
        <Badge placement="top-right">5</Badge>
      </div>
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-6">
          <span>Top Left</span>
        </div>
        <Badge placement="top-left">5</Badge>
      </div>
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-6">
          <span>Bottom Right</span>
        </div>
        <Badge placement="bottom-right">5</Badge>
      </div>
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-6">
          <span>Bottom Left</span>
        </div>
        <Badge placement="bottom-left">5</Badge>
      </div>
    </div>
  );
}

export default App;