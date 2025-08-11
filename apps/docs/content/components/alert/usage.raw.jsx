import {Alert, AlertIcon, AlertTitle, AlertDescription} from '@principium/react';

function App() {
  return (
    <div className="w-full">
      <Alert>
        <AlertIcon />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>
          This is an informational alert message that provides helpful context.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default App;
