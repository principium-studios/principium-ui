import {Chip} from '@principium/react';

function App() {
  return (
    <div className="flex flex-1 flex-wrap items-center gap-3">
      <Chip color="warning" variant="solid">
        Solid
      </Chip>
      <Chip color="warning" variant="bordered">
        Bordered
      </Chip>
      <Chip color="warning" variant="light">
        Light
      </Chip>
      <Chip color="warning" variant="flat">
        Flat
      </Chip>
      <Chip color="warning" variant="faded">
        Faded
      </Chip>
      <Chip color="warning" variant="shadow">
        Shadow
      </Chip>
    </div>
  );
}

export default App;
