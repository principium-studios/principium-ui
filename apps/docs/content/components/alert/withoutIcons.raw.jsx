import { Alert, AlertTitle, AlertDescription } from '@principium/react';

function App() {
  return (
    <div className="space-y-4 w-full">
      <Alert color="primary" hideIconWrapper>
        <AlertTitle>Simple Alert</AlertTitle>
        <AlertDescription>This alert doesn't have an icon.</AlertDescription>
      </Alert>
      
      <Alert color="success" hideIconWrapper>
        <AlertTitle>Success Message</AlertTitle>
        <AlertDescription>Your changes have been saved successfully.</AlertDescription>
      </Alert>
      
      <Alert color="warning" hideIconWrapper>
        <AlertTitle>Important Notice</AlertTitle>
        <AlertDescription>Please review the terms and conditions before proceeding.</AlertDescription>
      </Alert>
    </div>
  );
}

export default App;