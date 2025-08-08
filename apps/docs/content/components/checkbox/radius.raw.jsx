import {Checkbox, Label} from '@principium/react';

function App() {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked radius="full" />
        <Label>Full</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked radius="lg" />
        <Label>Large</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked radius="md" />
        <Label>Medium</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked radius="sm" />
        <Label>Small</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked radius="none" />
        <Label>None</Label>
      </div>
    </div>
  );
}

export default App;



