import { Badge } from '@principium/react';

function App() {
  return (
    <div className="flex flex-wrap gap-6 items-center">
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-4">
          <span>Default</span>
        </div>
        <Badge></Badge>
      </div>
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-4">
          <span>Primary</span>
        </div>
        <Badge color="primary"></Badge>
      </div>
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-4">
          <span>Success</span>
        </div>
        <Badge color="success"></Badge>
      </div>
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-4">
          <span>Danger</span>
        </div>
        <Badge color="danger"></Badge>
      </div>
    </div>
  );
}

export default App;