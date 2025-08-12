import {Alert, AlertIcon, AlertTitle, AlertDescription} from '@principium/react';

function App() {
  return (
    <div className="flex-1 space-y-4">
      <Alert color="default">
        <AlertIcon />
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>This is a default alert message.</AlertDescription>
      </Alert>

      <Alert color="primary">
        <AlertIcon />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>This is an informational alert message.</AlertDescription>
      </Alert>

      <Alert color="secondary">
        <AlertIcon />
        <AlertTitle>Secondary</AlertTitle>
        <AlertDescription>This is a secondary alert message.</AlertDescription>
      </Alert>

      <Alert color="success">
        <AlertIcon />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Your action was completed successfully.</AlertDescription>
      </Alert>

      <Alert color="warning">
        <AlertIcon />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Please check your input before proceeding.</AlertDescription>
      </Alert>

      <Alert color="danger">
        <AlertIcon />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong. Please try again.</AlertDescription>
      </Alert>
    </div>
  );
}

export default App;
