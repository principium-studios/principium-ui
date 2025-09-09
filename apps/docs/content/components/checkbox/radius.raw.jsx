import {Checkbox, Label} from '@principium/react';

function App() {
  return (
    <div className="flex flex-1 flex-wrap gap-4">
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked id="cr-full" radius="full" />
        <Label htmlFor="cr-full">Full</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked id="cr-lg" radius="lg" />
        <Label htmlFor="cr-lg">Large</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked id="cr-md" radius="md" />
        <Label htmlFor="cr-md">Medium</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked id="cr-sm" radius="sm" />
        <Label htmlFor="cr-sm">Small</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked id="cr-none" radius="none" />
        <Label htmlFor="cr-none">None</Label>
      </div>
    </div>
  );
}

export default App;
