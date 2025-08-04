import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@principium/react';

function App() {
  return (
    <div className="space-y-4 w-full">
      <Alert variant="solid" color="primary">
        <AlertIcon />
        <AlertTitle>Solid Alert</AlertTitle>
        <AlertDescription>This is a solid variant alert.</AlertDescription>
      </Alert>
      
      <Alert variant="flat" color="primary">
        <AlertIcon />
        <AlertTitle>Flat Alert</AlertTitle>
        <AlertDescription>This is a flat variant alert.</AlertDescription>
      </Alert>
      
      <Alert variant="faded" color="primary">
        <AlertIcon />
        <AlertTitle>Faded Alert</AlertTitle>
        <AlertDescription>This is a faded variant alert.</AlertDescription>
      </Alert>
      
      <Alert variant="bordered" color="primary">
        <AlertIcon />
        <AlertTitle>Bordered Alert</AlertTitle>
        <AlertDescription>This is a bordered variant alert.</AlertDescription>
      </Alert>
    </div>
  );
}

export default App;