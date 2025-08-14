import {Checkbox, Label} from '@principium/react';

function App() {
  return (
    <div className="flex-1 flex flex-wrap gap-4">
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked radius="full" id="cr-full" />
        <Label htmlFor="cr-full">Full</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked radius="lg" id="cr-lg" />
        <Label htmlFor="cr-lg">Large</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked radius="md" id="cr-md" />
        <Label htmlFor="cr-md">Medium</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked radius="sm" id="cr-sm" />
        <Label htmlFor="cr-sm">Small</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked radius="none" id="cr-none" />
        <Label htmlFor="cr-none">None</Label>
      </div>
    </div>
  );
}

export default App;
