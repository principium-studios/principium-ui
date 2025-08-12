import {Alert, AlertTitle, AlertDescription} from '@principium/react';

function App() {
  return (
    <div className="flex-1 space-y-4">
      <Alert color="primary">
        <AlertTitle>Simple Alert</AlertTitle>
        <AlertDescription>This alert doesn&apos;t have an icon.</AlertDescription>
      </Alert>

      <Alert color="success">
        <AlertTitle>Success Message</AlertTitle>
        <AlertDescription>Your changes have been saved successfully.</AlertDescription>
      </Alert>

      <Alert color="warning">
        <AlertTitle>Important Notice</AlertTitle>
        <AlertDescription>
          Please review the terms and conditions before proceeding.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default App;
