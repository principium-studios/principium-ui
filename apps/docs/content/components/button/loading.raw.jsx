import { Button } from '@principium/react';

function App() {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <Button disabled>
        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="m15.71 12.71a6 6 0 1 1-7.42 0l1.42-1.42a4 4 0 1 0 4.58 0l1.42 1.42Z"></path>
        </svg>
        Loading...
      </Button>
      <Button variant="bordered" disabled>
        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="m15.71 12.71a6 6 0 1 1-7.42 0l1.42-1.42a4 4 0 1 0 4.58 0l1.42 1.42Z"></path>
        </svg>
        Loading...
      </Button>
    </div>
  );
}

export default App;