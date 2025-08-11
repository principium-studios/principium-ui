import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  AlertActions,
} from '@principium/react';

function WithActionsDemo() {
  return (
    <div className="w-full space-y-4">
      <Alert color="primary">
        <AlertIcon />
        <AlertTitle>New Update Available</AlertTitle>
        <AlertDescription className="mb-3">
          A new version of the application is ready to install.
        </AlertDescription>
        <AlertActions className="flex gap-2">
          <Button color="primary" size="sm">
            Update Now
          </Button>
          <Button size="sm" variant="light">
            Later
          </Button>
        </AlertActions>
      </Alert>

      <Alert color="warning">
        <AlertIcon />
        <AlertTitle>Subscription Expiring</AlertTitle>
        <AlertDescription className="mb-3">
          Your subscription will expire in 3 days. Renew now to avoid service interruption.
        </AlertDescription>
        <AlertActions className="flex gap-2">
          <Button color="warning" size="sm">
            Renew Subscription
          </Button>
          <Button size="sm" variant="light">
            Remind Later
          </Button>
        </AlertActions>
      </Alert>
    </div>
  );
}

export default WithActionsDemo;
