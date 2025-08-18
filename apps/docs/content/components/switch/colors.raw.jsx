import {Switch, Label} from '@principium/react';

function App() {
  return (
    <div className="flex flex-1 flex-wrap items-center gap-3">
      <div className="flex gap-2">
        <Switch defaultChecked color="default" id="sc-default" />
        <Label htmlFor="sc-default">Default</Label>
      </div>
      <div className="flex gap-2">
        <Switch defaultChecked color="primary" id="sc-primary" />
        <Label htmlFor="sc-primary">Primary</Label>
      </div>
      <div className="flex gap-2">
        <Switch defaultChecked color="secondary" id="sc-secondary" />
        <Label htmlFor="sc-secondary">Secondary</Label>
      </div>
      <div className="flex gap-2">
        <Switch defaultChecked color="success" id="sc-success" />
        <Label htmlFor="sc-success">Success</Label>
      </div>
      <div className="flex gap-2">
        <Switch defaultChecked color="warning" id="sc-warning" />
        <Label htmlFor="sc-warning">Warning</Label>
      </div>
      <div className="flex gap-2">
        <Switch defaultChecked color="danger" id="sc-danger" />
        <Label htmlFor="sc-danger">Danger</Label>
      </div>
    </div>
  );
}

export default App;
