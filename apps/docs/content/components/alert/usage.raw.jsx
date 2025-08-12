import {Alert, AlertIcon, AlertTitle, AlertDescription} from '@principium/react';

function App() {
  return (
    <div className="flex-1">
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
