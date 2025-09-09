import React from 'react';
import {Checkbox, Label} from '@principium/react';

function App() {
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="flex items-center gap-2">
        <Checkbox checked={isSelected} id="cc-subscribe" onCheckedChange={setIsSelected} />
        <Label htmlFor="cc-subscribe">Subscribe (controlled)</Label>
      </div>
      <p className="text-default-500">Selected: {isSelected ? 'true' : 'false'}</p>
    </div>
  );
}

export default App;
