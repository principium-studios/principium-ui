import {Switch, Label} from '@principium/react';

function App() {
  return (
    <div className="flex flex-1 flex-col items-start gap-4">
      <div className="flex items-center gap-3">
        <Switch defaultChecked id="wl-notifications" />
        <Label htmlFor="wl-notifications">Enable notifications</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch defaultChecked color="success" id="wl-darkmode" />
        <Label htmlFor="wl-darkmode">Dark mode</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch defaultChecked disabled color="warning" id="wl-marketing" />
        <Label htmlFor="wl-marketing">Marketing emails (disabled)</Label>
      </div>
    </div>
  );
}

export default App;
