import {Alert, AlertIcon, AlertTitle, AlertDescription} from '@principium/react';

function VariantsDemo() {
  return (
    <div className="w-full space-y-4">
      <Alert color="primary" variant="solid">
        <AlertIcon />
        <AlertTitle>Solid Alert</AlertTitle>
        <AlertDescription>This is a solid variant alert.</AlertDescription>
      </Alert>

      <Alert color="primary" variant="flat">
        <AlertIcon />
        <AlertTitle>Flat Alert</AlertTitle>
        <AlertDescription>This is a flat variant alert.</AlertDescription>
      </Alert>

      <Alert color="primary" variant="faded">
        <AlertIcon />
        <AlertTitle>Faded Alert</AlertTitle>
        <AlertDescription>This is a faded variant alert.</AlertDescription>
      </Alert>

      <Alert color="primary" variant="bordered">
        <AlertIcon />
        <AlertTitle>Bordered Alert</AlertTitle>
        <AlertDescription>This is a bordered variant alert.</AlertDescription>
      </Alert>
    </div>
  );
}

export default VariantsDemo;
