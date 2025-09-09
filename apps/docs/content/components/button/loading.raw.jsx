import {Button} from '@principium/react';
import {CircleNotchIcon} from '@phosphor-icons/react';

function App() {
  return (
    <div className="flex flex-1 flex-wrap items-center gap-3">
      <Button disabled color="primary">
        <CircleNotchIcon className="h-4 w-4 animate-spin" />
        Loading...
      </Button>
      <Button disabled variant="bordered">
        <CircleNotchIcon className="h-4 w-4 animate-spin" />
        Loading...
      </Button>
    </div>
  );
}

export default App;
