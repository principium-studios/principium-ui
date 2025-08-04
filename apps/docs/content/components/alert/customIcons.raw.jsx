import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@principium/react';
import {StarIcon, CheckIcon, WarningIcon} from "@phosphor-icons/react";

function App() {
  return (
    <div className="space-y-4 w-full">
      <Alert color="primary">
        <AlertIcon>
          <StarIcon weight="fill" />
        </AlertIcon>
        <AlertTitle>Featured Content</AlertTitle>
        <AlertDescription>This content has been marked as featured.</AlertDescription>
      </Alert>
      
      <Alert color="success">
        <AlertIcon>
          <CheckIcon weight="fill" />
        </AlertIcon>
        <AlertTitle>Task Completed</AlertTitle>
        <AlertDescription>Your task has been completed successfully.</AlertDescription>
      </Alert>
      
      <Alert color="warning">
        <AlertIcon>
          <WarningIcon weight="fill" />
        </AlertIcon>
          <AlertTitle>Storage Almost Full</AlertTitle>
          <AlertDescription>You have used 90% of your storage quota.</AlertDescription>
      </Alert>
    </div>
  );
}

export default App;