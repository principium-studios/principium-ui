import React from 'react';
import {Alert, AlertTitle, AlertDescription, AlertIcon} from '@principium/alert';
import { Badge } from '@principium/badge';

function App() {
  const [variant, setVariant] = React.useState<'flat' | 'faded' | 'bordered' | 'solid'>('flat');
  const [color, setColor] = React.useState<'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'>('default');

React.useEffect(() => {
  // CYcle
  const colorInterval = setInterval(() => {
    setColor(prev => prev === 'default' ? 'primary' : prev === 'primary' ? 'secondary' : prev === 'secondary' ? 'success' : prev === 'success' ? 'warning' : prev === 'warning' ? 'danger' : 'default');
  }, 1000);
  const variantInterval = setInterval(() => {
    setVariant(prev => prev === 'flat' ? 'faded' : prev === 'faded' ? 'bordered' : prev === 'bordered' ? 'solid' : 'flat');
  }, 2000);

  return () => {
    clearInterval(colorInterval);
    clearInterval(variantInterval);
  };
},[])

  return (
    <>
      <Alert variant={variant} color={color}>
        <AlertIcon />

        <AlertTitle>Alert</AlertTitle>
        <AlertDescription>This is an alert</AlertDescription>
      </Alert>
      <Badge variant="solid" color="primary" size="md" shape="circle" placement="top-right" showOutline={true} content="5+">
        c321
      </Badge>
    </>
  );
}

export default App;
