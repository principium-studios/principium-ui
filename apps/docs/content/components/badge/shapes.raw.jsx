import { Badge } from '@principium/react';

function App() {
  return (
    <div className="flex flex-wrap gap-6 items-center">
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-4">
          <span>Rectangle</span>
        </div>
        <Badge shape="rectangle">5</Badge>
      </div>
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-4">
          <span>Circle</span>
        </div>
        <Badge shape="circle">5</Badge>
      </div>
    </div>
  );
}

export default App;