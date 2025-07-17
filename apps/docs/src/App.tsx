import React from "react";
import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@principium/alert";

function App() {
  const [variant, setVariant] = React.useState<'solid' | 'flat' | 'faded' | 'bordered'>('solid');
  const [color, setColor] = React.useState<'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'>('danger');

  React.useEffect(() => {
    const colorInterval = setInterval(() => {
      setColor((prev) => {
        if (prev === 'default') return 'primary';
        if (prev === 'primary') return 'secondary';
        if (prev === 'secondary') return 'success';
        if (prev === 'success') return 'warning';
        if (prev === 'warning') return 'danger';
        return 'default';
      });
    }, 1000);
    const interval = setInterval(() => {
      setVariant((prev) => {
        if (prev === 'solid') return 'flat';
        if (prev === 'flat') return 'faded';
        if (prev === 'faded') return 'bordered';
        return 'solid';
      });
    }, 2000);
    return () => {
      clearInterval(interval);
      clearInterval(colorInterval);
    };
  }, []);

  return <Alert variant={variant} color={color}>
    <AlertIcon />
    <AlertTitle className="text-lg">Success</AlertTitle>
    <AlertDescription >Success description</AlertDescription>
  </Alert>;
}

export default App;
