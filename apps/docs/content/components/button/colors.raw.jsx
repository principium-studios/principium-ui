import {Button} from '@principium/react';

function App() {
  return (
    <div className="flex flex-1 flex-wrap items-center gap-3">
      <Button color="default">Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
    </div>
  );
}

export default App;
