import {Switch} from '@principium/react';

function App() {
  return (
    <div className="flex flex-1 flex-wrap items-center gap-3">
      <Switch />
      <Switch disabled />
    </div>
  );
}

export default App;
