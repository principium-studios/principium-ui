import {Switch} from '@principium/react';

function App() {
  return (
    <div className="flex-1 flex flex-wrap items-center gap-3">
      <Switch defaultChecked size="sm" />
      <Switch defaultChecked size="md" />
      <Switch defaultChecked size="lg" />
    </div>
  );
}

export default App;
