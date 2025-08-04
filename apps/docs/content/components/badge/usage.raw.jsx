import { Badge } from '@principium/react';

function App() {
  return (
    <div className="flex gap-3 items-center">
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-4">
          <span>Content</span>
        </div>
        <Badge>5</Badge>
      </div>
    </div>
  );
}

export default App;