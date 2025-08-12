import {Checkbox, Label} from '@principium/react';

function App() {
  return (
    <div className="flex-1 flex gap-4">
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked size="sm" />
        <Label>Small</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked size="md" />
        <Label>Medium</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked size="lg" />
        <Label>Large</Label>
      </div>
    </div>
  );
}

export default App;
