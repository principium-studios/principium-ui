import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@principium/alert";

function App() {
  return <Alert variant="solid" color="danger">
    <AlertIcon />
    <AlertTitle>Success</AlertTitle>
    <AlertDescription>Success description</AlertDescription>
  </Alert>;
}

export default App;
