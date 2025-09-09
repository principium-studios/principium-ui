import {Button} from '@principium/react';

function App() {
  return (
    <div className="flex flex-1 flex-wrap items-center gap-3">
      <Button>
        <svg fill="currentColor" height="16" viewBox="0 0 24 24" width="16">
          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
        </svg>
        With Icon
      </Button>
      <Button size="icon">
        <svg fill="currentColor" height="16" viewBox="0 0 24 24" width="16">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </Button>
    </div>
  );
}

export default App;
