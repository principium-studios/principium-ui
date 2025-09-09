import {Checkbox, Label} from '@principium/react';

function App() {
  return (
    <div className="flex flex-1 flex-wrap gap-4">
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked color="default" id="ccl-default" />
        <Label htmlFor="ccl-default">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked color="primary" id="ccl-primary" />
        <Label htmlFor="ccl-primary">Primary</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked color="secondary" id="ccl-secondary" />
        <Label htmlFor="ccl-secondary">Secondary</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked color="success" id="ccl-success" />
        <Label htmlFor="ccl-success">Success</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked color="warning" id="ccl-warning" />
        <Label htmlFor="ccl-warning">Warning</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked color="danger" id="ccl-danger" />
        <Label htmlFor="ccl-danger">Danger</Label>
      </div>
    </div>
  );
}

export default App;
