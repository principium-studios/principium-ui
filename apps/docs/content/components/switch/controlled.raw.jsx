import {Switch} from '@principium/switch';
import React from 'react';

function App() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="flex flex-1 flex-col gap-2">
      <Switch defaultChecked checked={checked} onCheckedChange={setChecked} />
      <p>Checked: {checked ? 'true' : 'false'}</p>
    </div>
  );
}

export default App;
