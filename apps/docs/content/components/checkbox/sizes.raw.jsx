import {Checkbox, Label} from '@principium/react';

function App() {
  return (
    <div className="flex-1 flex gap-4">
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked size="sm" id="cs-sm" />
        <Label htmlFor="cs-sm">Small</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked size="md" id="cs-md" />
        <Label htmlFor="cs-md">Medium</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked size="lg" id="cs-lg" />
        <Label htmlFor="cs-lg">Large</Label>
      </div>
    </div>
  );
}

export default App;
