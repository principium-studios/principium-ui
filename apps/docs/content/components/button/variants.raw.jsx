import {Button} from '@principium/react';

function App() {
  return (
    <div className="flex flex-1 flex-wrap items-center gap-3">
      <Button color="primary" variant="solid">
        Solid
      </Button>
      <Button color="primary" variant="bordered">
        Bordered
      </Button>
      <Button color="primary" variant="light">
        Light
      </Button>
      <Button color="primary" variant="flat">
        Flat
      </Button>
      <Button color="primary" variant="faded">
        Faded
      </Button>
      <Button color="primary" variant="shadow">
        Shadow
      </Button>
      <Button color="primary" variant="ghost">
        Ghost
      </Button>
    </div>
  );
}

export default App;
