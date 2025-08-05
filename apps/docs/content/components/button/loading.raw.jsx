import { Button } from '@principium/react';
import { CircleNotchIcon } from "@phosphor-icons/react";

function App() {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <Button disabled color="primary">
        <CircleNotchIcon className="animate-spin h-4 w-4" />
        Loading...
      </Button>
      <Button variant="bordered" disabled>
        <CircleNotchIcon className="animate-spin h-4 w-4" />
        Loading...
      </Button>
    </div>
  );
}

export default App;