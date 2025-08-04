import { Badge } from '@principium/react';

function App() {
  return (
    <div className="flex flex-wrap gap-6 items-center">
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-4">
          <span>Default</span>
        </div>
        <Badge color="default">5</Badge>
      </div>
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-4">
          <span>Primary</span>
        </div>
        <Badge color="primary">5</Badge>
      </div>
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-4">
          <span>Secondary</span>
        </div>
        <Badge color="secondary">5</Badge>
      </div>
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-4">
          <span>Success</span>
        </div>
        <Badge color="success">5</Badge>
      </div>
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-4">
          <span>Warning</span>
        </div>
        <Badge color="warning">5</Badge>
      </div>
      <div className="relative">
        <div className="bg-neutral-200 rounded-lg p-4">
          <span>Danger</span>
        </div>
        <Badge color="danger">5</Badge>
      </div>
    </div>
  );
}

export default App;