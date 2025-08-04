import { Card, CardHeader, CardTitle, CardContent } from '@principium/react';

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Regular Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is a regular card that cannot be pressed.</p>
        </CardContent>
      </Card>
      <Card isPressable onClick={() => alert('Card pressed!')}>
        <CardHeader>
          <CardTitle>Pressable Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This card can be pressed. Click me!</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;