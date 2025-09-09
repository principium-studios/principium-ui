import {Checkbox, Label} from '@principium/react';

function App() {
  return (
    <div className="flex flex-1 gap-4">
      <div className="flex items-center gap-2">
        <Checkbox disabled id="cd-disabled" />
        <Label htmlFor="cd-disabled">Option</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked disabled id="cd-default-disabled" />
        <Label htmlFor="cd-default-disabled">Option</Label>
      </div>
    </div>
  );
}

export default App;
