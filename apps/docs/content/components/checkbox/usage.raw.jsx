import {Checkbox, Label} from '@principium/react';

function App() {
  return (
    <div className="flex-1 flex items-center gap-2">
      <Checkbox defaultChecked />
      <Label>Option</Label>
    </div>
  );
}

export default App;
