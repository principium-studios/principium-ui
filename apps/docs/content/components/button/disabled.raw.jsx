import {Button} from '@principium/react';

function App() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Enabled</Button>
      <Button disabled>Disabled</Button>
    </div>
  );
}

export default App;
