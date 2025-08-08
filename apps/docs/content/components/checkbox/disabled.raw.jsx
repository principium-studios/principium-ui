import {Checkbox, Label} from '@principium/react';

function App() {
  return (
    <div className="flex gap-4">
      <div className="flex items-center gap-2">
        <Checkbox disabled />
        <Label>Option</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked disabled />
        <Label>Option</Label>
      </div>
    </div>
  );
}

export default App;


