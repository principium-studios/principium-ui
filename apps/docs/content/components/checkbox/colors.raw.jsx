import {Checkbox, Label} from '@principium/react';

function App() {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked color="default" />
        <Label>Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked color="primary" />
        <Label>Primary</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked color="secondary" />
        <Label>Secondary</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked color="success" />
        <Label>Success</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked color="warning" />
        <Label>Warning</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked color="danger" />
        <Label>Danger</Label>
      </div>
    </div>
  );
}

export default App;


