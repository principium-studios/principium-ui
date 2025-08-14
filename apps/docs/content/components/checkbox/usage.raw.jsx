import {Checkbox, Label} from '@principium/react';

function App() {
  return (
    <div className="flex-1 flex items-center gap-2">
      <Checkbox defaultChecked id="cu-terms" />
      <Label htmlFor="cu-terms">Accept terms and conditions</Label>
    </div>
  );
}

export default App;
