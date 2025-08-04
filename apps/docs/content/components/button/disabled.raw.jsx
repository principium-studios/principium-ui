import { Button } from '@principium/react';

function App() {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <Button>Enabled</Button>
      <Button disabled>Disabled</Button>
    </div>
  );
}

export default App;