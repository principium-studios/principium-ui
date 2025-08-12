import {Alert, AlertTitle, AlertDescription} from '@principium/react';

function App() {
  return (
    <div className="flex-1 space-y-4">
      <Alert hideIconWrapper color="primary">
        <AlertTitle>Simple Alert</AlertTitle>
        <AlertDescription>This alert doesn&apos;t have an icon.</AlertDescription>
      </Alert>

      <Alert hideIconWrapper color="success">
        <AlertTitle>Success Message</AlertTitle>
        <AlertDescription>Your changes have been saved successfully.</AlertDescription>
      </Alert>

      <Alert hideIconWrapper color="warning">
        <AlertTitle>Important Notice</AlertTitle>
        <AlertDescription>
          Please review the terms and conditions before proceeding.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default App;
