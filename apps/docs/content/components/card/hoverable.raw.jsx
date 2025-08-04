import { Card, CardHeader, CardTitle, CardContent } from '@principium/react';

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Regular Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This card has no hover effects.</p>
        </CardContent>
      </Card>
      <Card isHoverable>
        <CardHeader>
          <CardTitle>Hoverable Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This card changes background on hover.</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;