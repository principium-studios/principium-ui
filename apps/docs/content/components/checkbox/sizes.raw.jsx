import {Checkbox, Label} from '@principium/react';

function App() {
  return (
    <div className="flex flex-1 gap-4">
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked id="cs-sm" size="sm" />
        <Label htmlFor="cs-sm">Small</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked id="cs-md" size="md" />
        <Label htmlFor="cs-md">Medium</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked id="cs-lg" size="lg" />
        <Label htmlFor="cs-lg">Large</Label>
      </div>
    </div>
  );
}

export default App;
